module.exports = {
  '*.js': ['eslint --fix', 'prettier --write'],
  '*.json': ['prettier --write'],
  '*.vue': ['eslint --fix', 'stylelint --fix', 'prettier --write'],
  '*.scss': ['stylelint --fix', 'prettier --write'],
  '*.md': ['markdownlint', 'prettier --write'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged'],
}
