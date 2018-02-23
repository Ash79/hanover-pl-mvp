'use strict';
  const sully = require('../../sampleData/v1/sully.json')
  const dave = require('../../sampleData/v1/dave.json');
  const brian = require('../../sampleData/v1/brian.json');

  const sullyId = sully[0].CustomerInfoRequest.customerInfo.customerNumber;
  const daveId = dave[0].CustomerInfoRequest.customerInfo.customerNumber;
  const brianId = brian[0].CustomerInfoRequest.customerInfo.customerNumber;

var CustomerData;

var Promise = require('bluebird');
var paginationService = require('../../services/pagination.js');
 
exports.getCustomer = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *  
 * returns List
 **/
  if(args['customerNumber'].value != null){
      switch(args['customerNumber'].value){
              case sullyId:
                CustomerData = sully;
                break;
              case brianId:
                CustomerData = brian;
                break;
              case daveId:
                CustomerData = dave;
                break;
              default:
                CustomerData = "customer could not be found";
            }
  }

  if (Object.keys(CustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, CustomerData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}





exports.putCustomer = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(CustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(CustomerData[Object.keys(CustomerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postCustomer = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(CustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(CustomerData[Object.keys(CustomerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchCustomer = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(CustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(CustomerData[Object.keys(CustomerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteCustomer = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(CustomerData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(CustomerData[Object.keys(CustomerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


