'use strict'

const config = () => {
  return {
    "protocol": process.env.NODE_PROTOCOL || 'http',
    "hostname": process.env.NODE_HOSTNAME || 'localhost',
    "port": process.env.NODE_PORT || '3000',
    "env" : process.env.NODE_ENV || 'develop',
    "mock": process.env.MOCK_FLAG || 'false'
  }
}

module.exports = config();