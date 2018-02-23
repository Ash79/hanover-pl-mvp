'use strict';
var url = require('url');
var Ticket = require('./TicketService');

module.exports.getTicket = function getTicket (req, res, next) {
    Ticket.getTicket (req.swagger.params, res, next);
};

module.exports.putTicket = function putTicket (req, res, next) {
    Ticket.putTicket (req.swagger.params, res, next);
};

module.exports.postTicket = function postTicket (req, res, next) {
    Ticket.postTicket (req.swagger.params, res, next);
};

module.exports.patchTicket = function patchTicket (req, res, next) {
    Ticket.patchTicket (req.swagger.params, res, next);
};

module.exports.deleteTicket = function deleteTicket (req, res, next) {
    Ticket.deleteTicket (req.swagger.params, res, next);
};

