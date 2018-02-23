'use strict';
  var TicketFD = require('../../sampleData/v1/Ticket.json');
  var TicketData = TicketFD;


var Promise = require('bluebird');
var paginationService = require('../../services/pagination.js');
 

exports.getTicket = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(TicketData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, TicketData).then(function(result) {
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





exports.putTicket = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(TicketData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(TicketData[Object.keys(TicketData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postTicket = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(TicketData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(TicketData[Object.keys(TicketData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchTicket = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(TicketData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(TicketData[Object.keys(TicketData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteTicket = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(TicketData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(TicketData[Object.keys(TicketData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


