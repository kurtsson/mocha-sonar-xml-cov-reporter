var JSONCov = require('mocha/lib/reporters/json-cov');

exports = module.exports = SonarXmlCov;

function append(str) {
  console.log(str);
}

function SonarXmlCov(runner) {
  JSONCov.call(this, runner, false);

  runner.on('start', function(){
    append('<coverage version="1">')
  });

  runner.on('end', function(){
    var files = this.cov.files;
    //append(data);
    for(var i in files) {
      var file = files[i];
      if(!(file instanceof Function) && file != undefined) {
        append('<file path="' + file.filename + '">');
        var source = file.source
        for(var l in source) {
          var line = source[l];
          append('<lineToCover lineNumber="'+l+'" covered="'+(line.coverage>0)+'" />');
        }
        append('</file>')
      }
    }
    append('</coverage>')
  }.bind(this));
}
