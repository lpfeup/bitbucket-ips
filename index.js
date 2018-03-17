var request = require ('superagent');
var cheerio = require ('cheerio');
var cheerioTableParser = require ('cheerio-tableparser');
var URL = 'https://confluence.atlassian.com/bitbucket/what-are-the-bitbucket-cloud-ip-addresses-i-should-use-to-configure-my-corporate-firewall-343343385.html';

function parse (html) {
	var $ = cheerio.load(html);
	cheerioTableParser(cheerio);

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

	var parsedTable = parseTable($('table.confluenceTable').eq(0), 2);
	obj.ipv4.inbounds.push(...parsedTable[0]);
	obj.ipv4.outbounds.push(...parsedTable[1]);
	obj.ipv6.inbounds.push(...parsedTable[2]);
	obj.ipv6.outbounds.push(...parsedTable[3]);

	parsedTable = parseTable($('table.confluenceTable').eq(1), 1);
	obj.ipv4.inbounds.push(...parsedTable[0]);
	obj.ipv6.inbounds.push(...parsedTable[1]);

	parsedTable = parseTable($('table.confluenceTable').eq(2), 1);
	obj.ipv4.outbounds.push(...parsedTable[0]);

	parsedTable = parseTable($('table.confluenceTable').eq(3), 1);
	obj.ipv4.outbounds.push(...parsedTable[0]);

	return obj;
}

function parseTable (table, headers) {
	var parsedTable = table.parsetable(false, false, true);
	parsedTable = parsedTable.map(col => col.filter((elem, i) => i >= headers && elem.length > 0));

	return parsedTable;
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

