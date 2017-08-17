var page = require('webpage').create();
url = 'https://launch.pulsepoint.com/CCF-SFM/'

page.onConsoleMessage = function(msg) {
  console.log('Page title is ' + msg);
};
page.open(url, function(status) {
  page.evaluate(function() {
    console.log(document.title);
  });
  phantom.exit();
});
