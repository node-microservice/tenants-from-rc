var rc = require('rc');

module.exports = function(tenantId) {
  if (tenantId === undefined || typeof tenantId === 'string') {
    var tenants = rc(tenantId || 'tenants') || {};

    return function(tenantId, callback) {
      callback(null, tenants[tenantId]);
    };
  } else {
    throw new Error('tenantId must either be undefined (use default value) or a string');
  }
};
