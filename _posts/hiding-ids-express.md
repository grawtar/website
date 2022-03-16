---
title: "Hiding ids with express"
subTitle: "Add middleware that encodes/decodes every request to hide your ids"
author: "Uroš Štok"
date: "2022-03-08"
---

When building APIs we often want to hide or obfuscate certain information from the end user. The most common of which is probably hiding IDs.

## Why hide IDs?

There are many reasons you might want to hide IDs depending on the type of data you're serving.

For example if your API involves sharing documents (public google docs) it's a bad idea to allow your user's files to be enumerable by simply incrementing the ID received from the API.

Or you could simply not want to allow others to see how many users or apps you have (or gain over time, if you're using ID offsets).

## How do we hide IDs?

For performance reasons you generally want the IDs to be reversible, therefore it's best to avoid directly hashing the ID. Instead you want to encrypt it before sending it to the user, and decrypt it when trying to access it in the backend.

Since the point of this post isn't security I'll be using the [hashids library](https://hashids.org). This gives us an easy way to generate unique strings from numbered IDs. Hashids is by no means secure, it's just a simple way to obfuscate IDs.

Here's how we use it in code:

```js
const hashids = new Hashids("secret salt");

const encodedId = hashids.encode(42);
const [originalId] = hashids.decode(encodedId);
```

## Express middleware

Let's assume that we want to hide **every** public ID. This would mean we encode/decode every `id` field in the request and response body. We could also expand this to relational fields, for example `user_id`. By doing the same to every field that ends in `_id`.

To achieve this in express, we want to create two middleware. `encodeMiddleware` and `decodeMiddleware`.

```js
/** helper function to replace IDs inside object */
function replaceIds(obj, replaceFunc) {
  if (obj == null) return obj;

  for (const key of Object.keys(obj)) {
    if (obj[key] == null) continue;

    if (typeof obj[key] === "object")
      obj[key] = replaceIds(obj[key], replaceFunc);
    else if (key == "id" || (key.length >= 4 && key.endsWith("_id")))
      obj[key] = replaceFunc(obj[key]);
  }
  return obj;
}

function encodeMiddleware(req, res, next) {
  var _json = res.json;
  res.json = (obj) => {
    res.json = _json;
    obj = replaceIds(obj, (v) => hashids.encode(v));
    return res.json(obj);
  };
  next();
}
function decodeMiddleware(req, res, next) {
  try {
    req.query = replaceIds(req.query, (v) => hashids.decode(v)[0]);
    req.body = replaceIds(req.body, (v) => hashids.decode(v)[0]);
  } catch (e) {
    console.error(`Could not decode id:`, e);
    return res.sendStatus(404);
  }
  next();
}
```

In the `encodeMiddleware` we're assuming the response will always be JSON and modifying it by replacing all `id` occurances with the encoded version.

In the `decodeMiddleware` we're assuming that the data can be either in the `body` or `query` and replacing all `id` occurances with the decoded version.

For both of these we could add exceptions to certain endpoints by comparing the `req.url`. Or just not using the middleware globaly.

I've also added a helper function that takes in an object and recursively replaces all `ids` using the supplied function.

## Example code

Now here's an example with everything put together:

```js
const express = require("express");
const Hashids = require("hashids");
const hashids = new Hashids("secret salt", 6);

/** helper function to recursively replace ids inside object */
function replaceIds(obj, replaceFunc) {
  if (obj == null) return obj;

  for (const key of Object.keys(obj)) {
    if (obj[key] == null) continue;

    if (typeof obj[key] === "object")
      obj[key] = replaceIds(obj[key], replaceFunc);
    else if (key == "id" || (key.length >= 4 && key.endsWith("_id")))
      obj[key] = replaceFunc(obj[key]);
  }
  return obj;
}

function encodeMiddleware(req, res, next) {
  var _json = res.json;
  res.json = (obj) => {
    res.json = _json;
    obj = replaceIds(obj, (v) => hashids.encode(v));
    return res.json(obj);
  };
  next();
}
function decodeMiddleware(req, res, next) {
  try {
    req.query = replaceIds(req.query, (v) => hashids.decode(v)[0]);
    req.body = replaceIds(req.body, (v) => hashids.decode(v)[0]);
  } catch (e) {
    console.error(`Could not decode id:`, e);
    return res.sendStatus(404);
  }
  next();
}

const app = express();
app.use(express.json());

// we're using the middleware globaly here
app.use(encodeMiddleware);
app.use(decodeMiddleware);

// sample endpoints to demonstrate encoding, decoding
app.get("/get-id", (req, res) => {
  res.json({ id: 5, name: "John" });
});
app.post("/send-id", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(3000);
```

### Encoding and decoding

If we call the GET endpoint we should get back some JSON data with the `id` and `name`:

```bash
> curl GET http://localhost:3000/get-id

{"id":"OPZexb","name":"John"}%
```

Which we did, except the `id` was automatically encoded. If we were to return anything that ended with `_id` in the JSON body the middleware would automatically encode it.

Now let's try sending the encoded id to the POST endpoint:

```bash
> curl -X POST http://localhost:3000/send-id \
   -H 'Content-Type: application/json' \
   -d '{"id":"OPZexb"}'
...

[server log]: { id: 5 }
```

And on the server we should see `{ id: 5 }`. Which means the middleware successfully decoded the `id` we sent. Similarly if we send any values that might include `_id` it will automatically decode it.

## Closing notes

We were able to add global middleware whichs finds all `id`s in the request or response bodies and encodes or decodes them as needed.

In production you will likely want to add a filter to prevent this middleware running on webhooks from 3rd party services. As they might use the `id`, `_id` syntax themselves.
