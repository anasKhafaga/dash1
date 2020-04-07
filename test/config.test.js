'use strict'

const fs = require('fs');

const { errorLogger, infoLogger, warnLogger } = require('../config');

describe('Loging system', () => {

  const testPhrase = 'We are testing logging system ,now :D';
  
  beforeAll(done => {
    infoLogger.info(testPhrase);
    errorLogger.error(testPhrase);
    warnLogger.warn(testPhrase);
    setTimeout(() => {
      done()
    }, 1000);
  }); 
  
  it('checks infoLogger write logs into appInfo.log file', () => {

      let infoFile = fs.readFileSync('./logs/appInfo.log', 'utf8');

      let existence = infoFile.indexOf(testPhrase);
      expect(existence).toBeGreaterThan(-1);

      let dataToClear = `{"message":"We are testing logging system ,now :D","level":"info"}`;
      let sanitizedData = infoFile.replace(dataToClear, '');
      fs.writeFileSync('./logs/appInfo.log', sanitizedData);
      
  });

  it('checks errorLogger write logs into appErrors.log file', () => {


      let errorFile = fs.readFileSync('./logs/appErrors.log', 'utf8');

      let existence = errorFile.indexOf(testPhrase);
      expect(existence).toBeGreaterThan(-1);

      let dataToClear = `{"message":"We are testing logging system ,now :D","level":"error"}`;
      let sanitizedData = errorFile.replace(dataToClear, '');
      fs.writeFileSync('./logs/appErrors.log', sanitizedData);

  });

  it('checks warnLogger write logs into appWarns.log file', () => {

      let warnFile = fs.readFileSync('./logs/appWarns.log', 'utf8');

      let existence = warnFile.indexOf(testPhrase);
      expect(existence).toBeGreaterThan(-1);

      let dataToClear = `{"message":"We are testing logging system ,now :D","level":"warn"}`;
      let sanitizedData = warnFile.replace(dataToClear, '');
      fs.writeFileSync('./logs/appWarns.log', sanitizedData);

  });

})
