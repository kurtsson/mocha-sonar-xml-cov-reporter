# Mocha reporter for SonarQube General test coverage

This reporter outputs the coverage report using the XML format for the SonarQube General Test Coverage plugin <http://docs.codehaus.org/display/SONAR/Generic+Test+Coverage>

https://github.com/visionmedia/mocha/wiki/Third-party-reporters describes using third party reporters in mocha.

Basically, have your project's package.json be like:

``` js
{  
  "devDependencies": {  
    "mocha-sonar-xml-cov-reporter": ">=0.0.1"  
  }  
}
```

Then call mocha with:

`mocha --reporter mocha-sonar-xml-reporter test`

This also works well with [grunt-mocha-test](https://github.com/pghalliday/grunt-mocha-test)

``` js
mochaTest: {  
  test: {  
    // Your test settings  
  },  
  coverage: {  
    options: {  
      reporter: 'mocha-sonar-xml-cov-reporter',  
      quiet: false  
    },  
    src: ['src/files.js']  // Your source code files  
  }  
}
```
