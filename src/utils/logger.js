module.exports = (verbose = true) => (message = '', level = 1) => {
  if (verbose) {
    const printStatement = `${'..'.repeat(level)} ${message}`;
    console.log(printStatement);
  }
};
