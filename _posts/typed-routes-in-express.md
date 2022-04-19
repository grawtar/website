---
title: "Typed routes in Express"
subTitle: "Add some typesafety into your Express routes"
keywords: express, javascript, node, expressjs
date: "2021-12-18"
author: "Uroš Štok"
---

While Express wasn't built with Typescript, there are type definitions available - [@types/express](https://www.npmjs.com/package/@types/express). This adds typings for routes (specifically for this post, Request and Response).

I've looked around for ways of properly doing `Request` and `Response` types, and haven't found anything that works without breaking something else or being complicated. So here's how I usually implement typesafety into express routes.

Let's say we had an endpoint for adding a new user:

```ts
import express from "express";

const app = express();

app.post("/user", (req, res) => {
  req.body.name; // autocomplete doesn't work
});

app.listen(3000);
```

This is pretty standard javascript, besides using ESM imports, there's no reason we need typescript for this. So let's add some types:

```ts
import express, {Request, Response} from "express";
...
app.post("/user", (req: Request, res: Response) => {
    req.body.name; // autocomplete doesn't work
});
```

Note that this is what happens normally even if we don't specify the types, typescript infers the `Request` and `Response` type from the function automatically. So we didn't really do much here.

## Request.body type

What if this endpoint needs some input body data? Currently when we type `req.body` autocomplete doesn't offer anything special. Let's change that.

We can pass an interface to the `Request` type parameter list so that Typescript knows what variables are available in `req.body`. It would look something like this:

```ts
type UserRequestBody = { name: string };
app.post("/user", (req: Request<{}, {}, UserRequestBody>, res: Response) => {
  req.body.name; // autocomplete works
});
```

We need to put `{}` for the first two parameters as the thing we want (body) is actually the **third** type parameter. As we can see in the `Request` definition:

```ts
interface Request<
        P = core.ParamsDictionary,
        ResBody = any,
        ReqBody = any, // this is the Request.body
        ...
```

Now this is quite chunky code for simply passing an interface for the request body. Luckily there's a better way, we simply define a helper type:

```ts
type RequestBody<T> = Request<{}, {}, T>;
```

With our cleaner definition we can simply use:

```ts
type RequestBody<T> = Request<{}, {}, T>;

type UserRequestBody = { name: string };
app.post("/user", (req: RequestBody<UserRequestBody>, res: Response) => {
  req.body.name; // autocomplete works
});
```

## Other defintions

Now with our new found knowledge of how to write clean route typed code we can declare helper types for all our use cases!

```ts
// for .body
type RequestBody<T> = Request<{}, {}, T>;
// for .params
type RequestParams<T> = Request<T>;
// for .query
type RequestQuery<T> = Request<{}, {}, {}, T>;
// and so on... similarly for Response
```

## Multiple types

To cover everything, we need to be able to specify multiple types, for example `.body` and `.params`. We can do so by simply adding a new type:

```ts
type RequestBodyParams<TBody, TParams> = Request<TParams, {}, TBody>;
```

## Typed example

Here's the full example from the start, now with typed routes:

```ts
import express, { Request, Resposne } from "express";

const app = express();

type RequestBody<T> = Request<{}, {}, T>;
type UserRequestBody = { name: string };
app.post("/user", (req: RequestBody<UserRequestBody>, res: Response) => {
  req.body.name; // autocomplete works
});

app.listen(3000);
```

## Closing notes

That's it! This should allow you to create proper typed routes. The next step would be to add schema validation for these routes.
