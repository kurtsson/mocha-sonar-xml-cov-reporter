https://github.com/visionmedia/mocha/wiki/Third-party-reporters describes using third party reporters in mocha.

Basically, have your project's package.json be like:

``` js
{  
  "devDependencies": {  
    "mocha-teamcity-cov-reporter": ">=0.0.1"  
  }  
}
```

Then call mocha with:

`mocha --reporter mocha-teamcity-cov-reporter test`

This also works well with [grunt-mocha-test](https://github.com/pghalliday/grunt-mocha-test)

``` js
mochaTest: {  
  test: {  
    // Your test settings  
  },  
  coverage: {  
    options: {  
      reporter: 'mocha-teamcity-cov-reporter',  
      quiet: false  
    },  
    src: ['src/files.js']  // Your source code files  
  }  
}
```