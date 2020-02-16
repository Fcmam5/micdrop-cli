const Logger = require('./utils/logger');
const program = require('./utils/cli');

// Parsing parameters
const { gitBranch, forceRemoveModules, verbose } = program;

const logger = Logger(verbose);

// Utils
const gitUtils = require('./utils/git')(logger);
const nodeUtils = require('./utils/node')(logger);

gitUtils.checkout(gitBranch);
nodeUtils.removeNodeModules(forceRemoveModules);
