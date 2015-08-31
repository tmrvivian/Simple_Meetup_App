
//var require = patchRequire(require);
/*phantom.casperPath = 'Users/StellaZhao/Fullstack/stackthon/node_modules/casperjs';
phantom.injectJs(phantom.casperPath +'/bin/bootstrap.js');*/
var server = require('http').createServer();
var service = server.listen(8585);

var casper = require('casper').create({
	viewportSize: {

            width: 1024,
            height: 768
       },
       verbose: true,
       logLevel: 'warning'
});
var x = require('casper').selectXPath;
casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36');
casper.start('http://www.google.com');

casper.then(function(){
		casper.wait(5000,function(){
		this.capture('startPage.png');
		this.sendKeys('#lst-ib','EAC1523151901');
		this.echo('input field found');
	});
});

casper.then(function(){
	this.click('#landingForm > div > div.container > div > div.case-status-info3 > fieldset > div:nth-child(2) > div.filed-box.col-lg-6 > input',function(){
		console.log('searching...');
	})
});

casper.wait(2000,function(){
	casper.capture('googleResult.png');
});

casper.run();