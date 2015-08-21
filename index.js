var rc = require('rc');

module.exports = function(arg) {
  var opts = typeof arg === 'string' ? {
    serviceName: arg,
    tenantKey: 'tenants'
  } : arg;

  if (!opts.serviceName) {
    throw new Error('Must specify a service name');
  }

  opts.tenantKey = opts.tenantKey || 'tenants';

  var tenants = rc(opts.tenantKey)[opts.serviceName] || {};

  return function(tenantId, callback) {
    callback(tenants[tenantId]);
  };
};
