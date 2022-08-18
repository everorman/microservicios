const jwt = require('jsonwebtoken');

function sign(data) {
  // este key debe estar en los env
    return jwt.sign(data, 'secreto');
}

module.exports = {
    sign,
};