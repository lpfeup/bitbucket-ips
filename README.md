# Bitbucket IP Addresses

> What are the Bitbucket IP addresses I should use to configure my corporate firewall?

## INSTALL

```text
$ npm install bitbucket-ips --save
```

To get current IP addresses of Bitbucket

```js
var ips = require ('bitbucket-ips');
ips(function(err, addresses){
	console.log (addresses)
});
```

The current answer from Confluence:

```js
{
  ipv4: {
    inbounds: [
      '104.192.143.1',
      '104.192.143.2',
      '104.192.143.3',
      '104.192.143.65',
      '104.192.143.66',
      '104.192.143.67',
      '104.192.143.4',
      '104.192.143.5',
      '104.192.143.6',
      '104.192.143.68',
      '104.192.143.69',
      '104.192.143.70',
      '18.205.93.0/25',
      '18.234.32.128/25',
      '13.52.5.0/25'
    ],
    outbounds: [
      '104.192.136.0/21',
      '34.198.203.127',
      '34.198.32.85'
    ]
  },
  ipv6: {
    inbounds: [
      '2401:1d80:1010::150',
      '2401:1d80:1010::151',
      '2401:1d80:1010::152',
      '2401:1d80:1003::150',
      '2401:1d80:1003::151',
      '2401:1d80:1003::152',
      '2401:1d80:1010::153',
      '2401:1d80:1010::154',
      '2401:1d80:1010::155',
      '2401:1d80:1003::153',
      '2401:1d80:1003::154',
      '2401:1d80:1003::155',
      '2406:da00:ff00::22cd:e0db',
      '2406:da00:ff00::6b17:d1f5',
      '2406:da00:ff00::3403:4be7',
      '2406:da00:ff00::22c3:9b0a',
      '2406:da00:ff00::22c5:2ef4',
      '2406:da00:ff00::22c2:0513',
      '2406:da00:ff00::34cc:ea4a',
      '2406:da00:ff00::22e9:9f55',
      '2406:da00:ff00::22c0:3470',
      '2406:da00:ff00::34c8:9c5c',
      '2406:da00:ff00::12d0:47c8',
      '2406:da00:ff00::22ed:a9a3',
      '2406:da00:ff00::23a8:5071',
      '2406:da00:ff00::36ec:9434',
      '2406:da00:ff00::3416:7161',
      '2406:da00:ff00::36ec:bea6',
      '2406:da00:ff00::12cd:ae3d',
      '2406:da00:ff00::12cc:b432',
      '2406:da00:ff00::1714:aa06',
      '2406:da00:ff00::342d:4312',
      '2406:da00:ff00::22ee:e721',
      '2406:da00:ff00::34cf:03c4',
      '2406:da00:ff00::3657:a859',
      '2406:da00:ff00::1716:0c22',
      '2406:da00:ff00::36ec:507a',
      '2406:da00:ff00::3448:67ee',
      '2406:da00:ff00::36ad:fb4d',
      '2406:da00:ff00::22ce:9394',
      '2406:da00:ff00::12d0:5d6e',
      '2406:da00:ff00::3402:732e',
      '2406:da00:ff00::36d1:8b98',
      '2406:da00:ff00::3414:6492',
      '2406:da00:ff00::3437:b4cb',
      '2406:da00:ff00::22e2:3a76',
      '2406:da00:ff00::34c9:c443',
      '2406:da00:ff00::3405:6cad',
      '2406:da00:ff00::12ea:0a19',
      '2406:da00:ff00::23a8:6621',
      '2406:da00:ff00::3401:9341',
      '2406:da00:ff00::3654:c786',
      '2406:da00:ff00::3448:4e57',
      '2406:da00:ff00::36a4:e08c',
      '2406:da00:ff00::36a4:f8a6',
      '2406:da00:ff00::22c8:ada3',
      '2406:da00:ff00::34cd:a4b9',
      '2406:da00:ff00::23a8:b9b1',
      '2406:da00:ff00::3402:affc',
      '2406:da00:ff00::12cd:d438',
      '2406:da00:ff00::34ce:b43b',
      '2406:da00:ff00::342d:1804',
      '2406:da00:ff00::36ae:07e7',
      '2406:da00:ff00::3456:314c',
      '2406:da00:ff00::36af:42a0',
      '2406:da00:ff00::3414:0248'
    ],
    outbounds: [
      '2401:1d80:1010::/64',
      '2401:1d80:1003::/64'
    ]
  }
}
```

Or, you can use the cli app:

```
$ npm install -g bbips
$ bbips
```

## LICENSE

MIT





