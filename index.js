var rc = require('rc');

module.exports = function(tenantKey) {
  if (tenantKey === undefined || typeof tenantKey === 'string') {
    var tenants = rc(tenantKey || 'tenants') || {};

    return function(tenantId, callback) {
      callback(tenants[tenantId]);
    };
  } else {
    throw new Error('tenantKey must either be undefined (use default value) or a string');
  }
};
