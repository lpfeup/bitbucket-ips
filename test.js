var ips = require ('./');

describe ('Bitbucket whitelist', function(){
  it('should get the ips', function(done){
    ips (function(err, obj) {
      if (err) return done(err);
      obj.ipv4.inbounds.length.should.above(0); 
      obj.ipv4.outbounds.length.should.above(0); 
      obj.ipv6.inbounds.length.should.above(0); 
      obj.ipv6.outbounds.length.should.above(0); 
      done(); 
    });
  });
});