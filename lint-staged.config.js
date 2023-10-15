module.exports = {
  '**/*.(ts|tsx)': () => 'npm run type-check',
  '**/*.(ts|tsx|js)': () => [`npm run lint --fix`, `npm run format `],
  '**/*.(md|json)': () => `npm run format`,
}
