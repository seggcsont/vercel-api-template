# vercel-api-template
Template for vercel hosted api. (ES6, jest, unit test, e2e test)

## Steps

1. Init npm repository

```sh
npm init
```

1. Install and configure typescript

```sh
npm i -S typescript
tsc --init
```

1. Install jest with typescript support
[source](https://jestjs.io/docs/getting-started#using-typescript)
```sh
npm i -D babel-jest @babel/core @babel/preset-env @babel/preset-typescript @types/jest

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
