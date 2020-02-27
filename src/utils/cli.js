const commander = require('commander');
const packageJson = require('../../package.json');

const program = new commander.Command();

program.version(packageJson.version);


program
  .option('-g, --git-branch <branchName>', 'Checkout to your main git branch', 'master')
  .option('-d, --delete-git-branch', 'Delete current git branch', false)
  .option('-f, --force-remove-modules', 'Force remove node modules', true)
  .option('-v, --verbose', 'be more verbose', true)
  .parse(process.argv);


module.exports = program;
