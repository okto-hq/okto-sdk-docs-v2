module.exports = {
  '*.{js,jsx,ts,tsx,mdx}': [
    'prettier --write',
    'eslint --fix'
  ],
  '*.{json,md}': [
    'prettier --write'
  ]
};
