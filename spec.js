var assert = require('assert'),
    tenants = require('./');

var testTenants;

beforeEach(function() {
  testTenants = tenants();
});

it('should produce a function', function() {
  assert(typeof testTenants === 'function');
});

it('should call a callback with an object', function(done) {
  testTenants('tenant1', function callback(tenant) {
    assert(typeof tenant === 'object');
    done();
  });
});

it('reads value from .tenantrc file', function(done) {
  testTenants('tenant1', function callback(tenant) {
    assert(tenant.foo_bar === 'baz');
    done();
  });
});
