module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    { value: 'style', name: 'style:    Changes that do not affect meaning of the code' },
    { value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature' },
    { value: 'test', name: 'test:     Adding missing tests' },
    { value: 'chore', name: 'chore:    Changes to the build process or auxiliary tools' }
  ],
  messages: {
    type: "Select the type of change that you're committing:",
    subject: "Write a short title for the commit:",
  },
  skipQuestions: ['scope', 'body', 'breaking', 'footer', 'issues'],
  subjectLimit: 72,
  subjectCase: null,
};
