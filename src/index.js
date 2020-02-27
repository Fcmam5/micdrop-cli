const Logger = require('./utils/logger');
const program = require('./utils/cli');

// Parsing parameters
const {
  gitBranch, deleteGitBranch, forceRemoveModules, verbose,
} = program;

const logger = Logger(verbose);

// Utils
const gitUtils = require('./utils/git')(logger);
const nodeUtils = require('./utils/node')(logger);

gitUtils.checkoutAndClean(gitBranch, deleteGitBranch);
nodeUtils.removeNodeModules(forceRemoveModules);
