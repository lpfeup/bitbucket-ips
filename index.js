var request = require ('superagent');
var cheerio = require ('cheerio');
var URL = 'https://confluence.atlassian.com/bitbucket/what-are-the-bitbucket-cloud-ip-addresses-i-should-use-to-configure-my-corporate-firewall-343343385.html';

function parse (html) {
	var $ = cheerio.load(html);

	var obj = {
		ipv4: {
			inbounds: [],
			outbounds: []
		},
		ipv6: {
			inbounds: [],
			outbounds: []
		}
	};

	var currentElem = $('#WhataretheBitbucketCloudIPaddressesIshouldusetoconfiguremycorporatefirewall\\?-ValidIPaddressesforbitbucket\\.org\\,api\\.bitbucket\\.org\\,andaltssh\\.bitbucket\\.org');
	
	currentElem = currentElem.next();
	obj.ipv4.inbounds.push(...parseElem(currentElem));

	currentElem = currentElem.next();
	obj.ipv4.outbounds.push(...parseElem(currentElem));

	currentElem = currentElem.next();
	obj.ipv6.inbounds.push(...parseElem(currentElem));

	currentElem = currentElem.next();
	obj.ipv6.outbounds.push(...parseElem(currentElem));

	currentElem = currentElem.next();
	obj.ipv4.inbounds.push(...parseElem(currentElem));

	currentElem = currentElem.next();
	obj.ipv6.inbounds.push(...parseElem(currentElem));

	currentElem = currentElem.next();
	obj.ipv4.inbounds.push(...parseElem(currentElem));

	currentElem = currentElem.next();
	obj.ipv6.inbounds.push(...parseElem(currentElem));

	return obj;
}

function parseElem(elem) {
	return elem.find('ul').text().split('\n').map(val => val.trim()).filter(val => val.length);
}

module.exports = function(cb){
  request
  .get(URL)
  .end(function(err, res){
    if (err) return cb(err);
    if (res.status != 200) return cb(new Error(res.status));
    cb(err, parse(res.text));
  });
}

