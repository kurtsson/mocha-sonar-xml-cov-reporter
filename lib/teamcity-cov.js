/**
 * Module dependencies.
 */

var JSONCov = require('mocha/lib/reporters/json-cov');

/**
 * Expose `Teamcity`.
 */

exports = module.exports = TeamcityCov;

/**
 * Initialize a new `Teamcity` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function TeamcityCov(runner) {
  JSONCov.call(this, runner, false);

  runner.on('end', function(){
    var data = this.cov;
    var threshold = this.threshold || 0;
    if (!data) {
      console.log("##teamcity[message text='CODE-COVERAGE CHECK FAILED' errorDetails='Error reading report file.' status='ERROR']");
      return;
    }

    var cov = Math.ceil(data.coverage);

    console.log("##teamcity[message text='Code Coverage is " + cov + "%']");
    console.log("##teamcity[blockOpened name='Code Coverage Summary']");
    console.log("##teamcity[buildStatisticValue key='CodeCoverageB' value='" + cov + "']");
    console.log("##teamcity[buildStatisticValue key='CodeCoverageAbsLCovered' value='" + data.hits + "']");
    console.log("##teamcity[buildStatisticValue key='CodeCoverageAbsLTotal' value='" + data.sloc + "']");
    console.log("##teamcity[buildStatisticValue key='CodeCoverageL' value='" + cov + "']");
    console.log("##teamcity[blockClosed name='Code Coverage Summary']");

    if (cov >= threshold) {
      console.log("##teamcity[message text='CODE-COVERAGE CHECK PASSED' status='NORMAL']");
    } else {
      console.log("##teamcity[message text='CODE-COVERAGE CHECK FAILED' errorDetails='Insufficient code coverage.' status='ERROR']");
    }

  }.bind(this));
}
