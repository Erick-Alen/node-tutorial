# Getting Started with [Fastify-CLI](https://www.npmjs.com/package/fastify-cli)

This project was bootstrapped with Fastify-CLI.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start`

For production mode

### `npm run test`

Run the test cases.

## Learn More

To learn Fastify, check out the [Fastify documentation](https://fastify.dev/docs/latest/).


## Full flow Example:
Once a client establishes a WebSocket connection with the server, it receives all the current order totals for the selected category. Then the for await of loop in the ´/orders/{category}´ WebSocket route handler begins waiting for a new serialized order object to be yielded from the async iterable returned from fastify.realtimeOrders. If a valid POST request is then made to /orders/{ID} for a particular ID (one corresponding to a product in the currently selected category within the web app) then the amount indicated in the POST request is added to the order tally for that item.

The async iterable returned from the fastify.realtimeOrders async generator function which is being awaited in the ´/orders/{category}´ WebSocket route handler will then yield a serialized object containing the new total and the product ID, which will then be written to the socket instance. The client will receive this serialized object, parse it and then add the new total to the corresponding order slot of the <product-item> element in the web app.

The `for await of` loop in the ´/orders/{category}´ WebSocket route handler will then again be waiting for the next serialized order object to be yielded from the async iterable. The reason the async iterable returned from realtimeOrders yields the new total as a result of the POST request's given amount is that the addOrders function calls the write method of the orderStream passthrough stream. The passthrough stream is itself an async iterable, and the realtimeOrders async generator function is using a for await of loop to asynchronously iterate through each object that is written to orderStream so that it can yield the id and total properties in a serialized object.
