const { execSync } = require('child_process');

const gitUtils = (logger) => ({
  checkoutAndClean: (branch = 'matser', deleteCurrentBranch = false) => {
    logger(`Checking out git branch (${branch})`, 1);
    const currentBranch = execSync('git rev-parse --abbrev-ref HEAD')
      .toString()
      .trim();

    if (currentBranch === branch) {
      logger(`Already on "${currentBranch}", skipping...`, 2);
      return 'skipped';
    }

    execSync(`git checkout ${branch} -q`);
    logger(`Switched to "${branch}"`, 2);

    if (deleteCurrentBranch) {
      logger(`Deleting "${currentBranch}"`, 2);
      const unpushedCommits = execSync(
        'git --no-pager log --branches --not --remotes --decorate --oneline | wc -l',
      )
        .toString()
        .trim();

      if (unpushedCommits > 0) {
        logger(`${unpushedCommits} unpushed commits, please verify before continuing`, 2);
        return 'error';
      }

      execSync(`git branch -D ${currentBranch}`);
    }

    return 'done';
  },
});

module.exports = gitUtils;
