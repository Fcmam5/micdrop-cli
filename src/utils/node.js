const { execSync } = require('child_process');

const nodeUtils = (logger) => ({
  removeNodeModules: (force) => {
    const nodeModulesSize = execSync('du -sh node_modules | cut -f1')
      .toString()
      .trim();
    logger(`Removing node_module (${nodeModulesSize})`, 1);
    const rmFlags = force ? '-r' : '-rf';
    execSync(`rm ${rmFlags} node_modules`);
    return 'done';
  },
});

module.exports = nodeUtils;
