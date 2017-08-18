
var page = require('webpage').create();

// Example Page from EYWA for CCF-SFM
var url = 'https://launch.pulsepoint.com/CCF-SFM/';

page.open(url, function(status) {
  var title = page.evaluate(function() {
    return document.title;
  });
  console.log('Page title is ' + title);
  phantom.exit();
});