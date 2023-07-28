module.exports = {
  extends: [ 
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "prettier"
  ],
    "env": {
      "vue/setup-compiler-macros": true
    },
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off"
  },
};