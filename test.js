
const Patterns = require('./modules/Patterns');

console.log(Patterns.getFiles('./', [
    '**/*.md',
    '!README.md',
]));

console.log(Patterns.join('/a/b', ['**/*.md', '**/*.js', '!README.md']));