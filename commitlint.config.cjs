module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      // Instead of ART you could use your project's ticket prefix
      headerPattern: /^(ART-\d+)\s+(\w+):\s+(.*)$/,
      headerCorrespondence: ['ticket', 'type', 'subject'],
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'setup',
        'feat',
        'fix',
        'refactor',
        'test',
        'revert',
        'style',
        'merge',
        'chore',
        'docs',
      ],
    ],
    'type-case': [2, 'always', ['lower-case']],
    'subject-max-length': [2, 'always', 100],
  },
};
