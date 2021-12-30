---
title: "Input validation in Express from TypeScript"
subTitle: "Don't duplicate definitions by hand, you have Typescript"
author: "Uroš Štok"
date: "2021-12-22"
---

Since this is a bit of a long post with multiple files I've provided a sample [repo](https://github.com/grawtar/express-validation-with-ts) so you can see the final code in action, in case the post gets a bit too hard to follow.

Most issues with Express crop up with badly (not) checked inputs to endpoints. The easiest way to show this is with an example:

```ts
type RequestBody<T> = Request<{}, {}, T>;

interface UserBody {name: string};
app.post("/user", (req: RequestBody<UserBody>, res) => {
    return addUser(req.body.name);
})
```

Here we're using typescript with express for [typed routes](https://urosstok.com/posts/typed-routes-in-express) which give us autocomplete.

Despite this being *typesafe*, it can still crash our whole backend!

Nothing is preventing someone from posting an empty body, which express will happily accept, which will cause an exception in the `addUser` function, which will crash the whole server as the error is not caught.

## Solution?

We could simply add some code checks (or catch some exceptions), for example:

```ts
type RequestBody<T> = Request<{}, {}, T>;

interface UserBody {name: string};
app.post("/user", (req: RequestBody<UserBody>, res) => {
    if (!req.body.name) return res.sendStatus(400); // we added this
    return addUser(req.body.name);
})
```

This is not a good solution though. For every new parameter we add to the endpoint (request body), we will have to make sure the code won't crash later. When you have a large API, it's really easy to miss some edge-case that brings the whole server down.

So what **can** you do?

## ajv

A library called [ajv](https://ajv.js.org/) offers *schema validation*, which allows you to validate data based on some pre-defined schema. This schema looks like this:

```ts
const schema = {
  type: "object",
  properties: {
    foo: {type: "integer"},
    bar: {type: "string", nullable: true}
  },
  required: ["foo"],
  additionalProperties: false
}
```

Just as an example, if we were to describe this schema using a Typescript interface, we would get this:

```ts
interface UserPostRequest {
    foo: integer,
    foo: string
}
```

But more on that later. First let's see how we could use *ajs* to create a middleware that would only allow the request if the `req.body` matched the schema:

```ts
// function that creates middleware by compiling the supplied schema
function validateBody(schema) {
  // compile schema
  const validate = ajv.compile(schema);
  // middleware that returns error if schema is not ok
  return (req, res, next) => {
    if (!validate(req.body)) return res.status(400).json(validate.errors);
    return next();
  };
}

const schema = {
  type: "object",
  properties: {
    name: {type: "string"},
  },
  required: ["name"],
}

app.post("/user", validateBody(userSchema), (req, res) => {
    return addUser(req.body.name); // name will never be undefined
})
```


Now, wouldn't it be cool if we could use that typescript interface to... *generate* the schema? What if we were able to convert our **typescript interface** into a **json schema**, which we would could then use for validation.

## typescript-json-schema

Now that cool thing we wanted to do? This [library](https://github.com/YousefED/typescript-json-schema) does exactly that!

It requires a bit of a setup. 

- We need to have a `schema_definition.ts` file contains the interfaces we would like to convert into json schemas.
- Some `schemaGenerator.js` script that will use this library to convert said file into schema.
- And finally, a `_schema.ts` file that will be generated, all it will do is export the json schema so we can import it elsewhere. Essentialy a `.json` file wrapped in a `.ts` file.

To follow along easier you can clone the provided [repo](https://github.com/grawtar/express-validation-with-ts), which has this stuff already setup.

### schema_definition.ts

As mentioned, this will hold the **typescript interfaces** that will be converted into **json schemas**. For the user example let's just write:
```ts
// schema_definition.ts
export interface UserPostRequest {
  name: string;
}
```

### schemaGenerator.js

Pretty much the glue that holds this implementation together:

```js
// schemaGenerator.js
const path = require("path");
const tjs = require("typescript-json-schema");
const fs = require("fs");

const settings = {
  required: true,
  ref: false,
};
const compilerOptions = {
  strictNullChecks: true,
};

const program = tjs.getProgramFromFiles([path.resolve("schema_definition.ts")], compilerOptions, "./");

const schema = tjs.generateSchema(program, "*", settings);
fs.writeFileSync(
  "_schema.ts",
  "const schema = " + JSON.stringify(schema) + " as const;\nexport default schema.definitions;"
);
```

And to use it, let's add a script to `package.json`:

```json
scripts: {
  "schema": "node schemaGenerator.js"
  ...
}
```

Running this with `npm run schema` will create a `_schema.ts` file in the root directory.

## Final code

If we were to expand our previous code, to support input validation, we would get this:

```ts
// index.ts
import express, { Request, Response, NextFunction } from "express";
import _schema from "./_schema";
import { UserPostRequest } from "./schema_definition";
import Ajv from "ajv";

const app = express();
app.use(express.json());

const ajv = new Ajv();

// validation middleware
function validateBody(schema: object) {
  const validate = ajv.compile(schema);
  return (req: any, res: any, next: NextFunction) => {
    if (!validate(req.body)) return res.status(400).json(validate.errors);
    return next();
  };
}

// helper type
type RequestBody<T> = Request<{}, {}, T>;

function addUser(name: string) {}

app.post("/user", validateBody(_schema.UserPostRequest), (req: RequestBody<UserPostRequest>, res: Response) => {
  return addUser(req.body.name); // name will never be undefined
});

app.listen(3000);
```

This whole example is available as a [repo](https://github.com/grawtar/express-validation-with-ts) if you're having issues setting things up.

## Closing notes

I hope you found this useful! Personally, it's my favourite way to add input validation if you're using typescript. It's so nice and clean!

Another cool alternative that allows for more powerful definitions (at the cost of losing clean interfaces) is [typebox](https://github.com/sinclairzx81/typebox).
