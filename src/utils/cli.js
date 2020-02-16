const commander = require('commander');
const packageJson = require('../../package.json');

const program = new commander.Command();

program.version(packageJson.version);


program
  .option('-g, --git-branch <branchName>', 'Checkout to your main git branch')
  .option('-f, --force-remove-modules', 'Force remove node modules')
  .option('-v, --verbose', 'be more verbose')
  .parse(process.argv);


module.exports = program;
