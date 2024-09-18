const path = require('path');
const defaultIndexTemplate = (paths) => {
  const exportEntries = paths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    return `export * from './${basename}'`;
  });
  return exportEntries.join('\n');
};

module.exports = defaultIndexTemplate;
