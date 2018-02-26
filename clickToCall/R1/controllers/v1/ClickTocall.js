'use strict';
var url = require('url');
var ClickTocall = require('./ClickTocallService');

module.exports.postClickTocall = function postClickTocall (req, res, next) {
    ClickTocall.postClickTocall (req.swagger.params, res, next);
};

