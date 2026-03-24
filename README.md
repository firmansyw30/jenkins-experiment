# Jenkins Experiment

A simple Node.js web application with Express server serving static files and a basic API endpoint.

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.

## Running the Application

Run `node server.js` to start the server on port 3000.

## Testing

Run `npm test` to execute the tests using Jest.

### Sample Test

The test in `test/server.test.js` verifies the `/api/message` endpoint returns the expected JSON response.

## Troubleshooting

- If tests fail, ensure all dependencies are installed with `npm install`.
- If the server doesn't start, check that port 3000 is not in use.