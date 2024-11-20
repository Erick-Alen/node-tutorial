#!/usr/bin / env node
// set the file permissions using chmod u+x bin/cmd.js into terminal

// run the following command from the cli folder:
// npm link
// npm link is a two step process. The first step is to create a symlink from the application and the second is to register our application in the root project directory. Here we enter:
// npm link my-cli

// after all, start the mock service we built in prior chapters and serve the web app. In one terminal from the project route, let's run the following command:
// serve -p 5050 static
// In another terminal, with the mock-srv folder as the current working directory, let's execute the following command:
// npm run static
// In another terminal, with the mock-srv folder as the current working directory, let's execute the following command:
// npm run dev
// Let's also navigate to http://localhost:5050 and select the Electronics category. The current order count for the two products in this category should be 3 and 7, respectively.
// In a third terminal window, we can run the following:
// my-cli
import { got } from "got";

const API = "http://localhost:3000";

// Log the usage of the command to the console
const usage = (msg = "Back office for My App") => {
  console.log(`\n${msg}\n`);
  console.log("Usage: cmd <ID> <AMOUNT>");
};

// Get the arguments from the command line
const argv = process.argv.slice(2);
// If there are no arguments, show the usage and exit
if (argv.length < 2) {
  usage();
  process.exit(1);
}

// Deconstruct the arguments into variables
const [argID, argAmount] = argv;

// Check if the Amount is a number
const amount = parseInt(argAmount);
// If the amount is not a number, show the usage and exit
if (isNaN(amount)) {
  usage("Error: <AMOUNT> must be a number");
  process.exit(1);
}

// Update the order with the given ID
try {
  // Use GOT to make a POST request to the API
  await got.post(`${API}/orders/${argID}`, {
    json: { amount },
  });
  // Log the result to the console
  console.log(`Order ${argID} updated with amount ${amount}`);
} catch (err) {
  // If there is an error, log it to the console and exit
  console.log(err.message);
  process.exit(1);
}
