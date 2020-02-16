const { execSync } = require('child_process');

const gitUtils = (logger) => ({
  checkout: (branch = 'matser') => {
    logger(`Checking out git branch (${branch})`, 1);
    const currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

    if (currentBranch === branch) {
      logger(`Already on "${currentBranch}", skipping...`, 2);
      return 'skipped';
    }

    execSync(`git checkout ${branch} -q`);
    logger(`Switched to "${branch}"`, 2);
    return 'done';
  },
});


module.exports = gitUtils;
