module.exports = {
  extends: ["next/core-web-vitals", "next", "eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
