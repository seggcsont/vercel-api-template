# vercel-api-template
Template for vercel hosted api. (ES6, jest, unit test, e2e test)

## Steps

1. Init npm repository

```sh
npm init
```

1. Install and configure typescript

```sh
# install
npm i -S typescript

# initialize typescript
tsc --init
```

1. Install jest with typescript support
[source](https://jestjs.io/docs/getting-started#using-typescript)
```sh
# Install jest globally
npm i -g jest

# Install dependencies
npm i -D jest babel-jest @babel/core @babel/preset-env @babel/preset-typescript @types/jest

# Create babel config
cat > babel.config.js <<EOF
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
     '@babel/preset-typescript',
  ],
};
EOF
```
1. First test and code

```sh
mkdir src __test__

cat > src/greeting.ts <<EOF
export default function greeting(name: string) {
  return `Hello ${name}`;
}
EOF

cat > __test__/greeting.test.ts <<EOF
import greeting from "../src/greeting";
  
describe("greeting", () => {
  it("should greet with name", () => {
    expect(greeting("Laszlo")).toEqual("Hello Laszlo");
  });
});
EOF

# Run test
jest
```

You should see one test suite with one test passed.

1. First vercel endpoint and deploy

```sh
# Install vercel types for typescript
npm i -D @vercel/node

# Create first endpoint

```sh
mkdir api
cat > api/greeting.ts <<EOF
import { VercelRequest, VercelResponse } from "@vercel/node";
import greeting from "../src/greeting";

export default (request: VercelRequest, response: VercelResponse) => {
  const { name = "Guest" } = request.query;
  response.status(200).send(greeting(name as string));
};
EOF

# Configure project and run locally
vercel dev
```

1. Add first e2e test

```sh
npm i -D supertest @types/supertest

cat > __e2e_test__/greeting.spec.ts <<EOF
import request from "supertest";

describe("api/greeting" , () => {
  it("should return 200 and the greeting", async () => {
    const response = await request("http://localhost:3000").get("/api/greeting").send();
    expect(response.status).toEqual(200);
  });
}); 
EOF

# Run test
jest __e2e_test__
```
