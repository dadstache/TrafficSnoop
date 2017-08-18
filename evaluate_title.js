var page = require('webpage').create();

// Example Page from EYWA for CCF-SFM
var url = 'https://launch.pulsepoint.com/CCF-SFM/';


//onConsoleMessage callback forces any console message from a web page to appear.


page.onConsoleMessage = function(msg) {
  console.log('Page title is ' + msg);
};
page.open(url, function(status) {
  page.evaluate(function() {
    console.log(document.title);
  });
  phantom.exit();
});
