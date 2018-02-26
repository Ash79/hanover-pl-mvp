'use strict';
  var ClickTocallFD = require('../../sampleData/v1/ClickTocall.json');
  var ClickTocallData = ClickTocallFD;


var Promise = require('bluebird');
var paginationService = require('../../services/pagination.js');
 


exports.postClickTocall = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(ClickTocallData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(ClickTocallData[Object.keys(ClickTocallData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}

