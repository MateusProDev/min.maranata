"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusDescriptions = exports.status = exports.Statues = exports.SIMPLE = exports.EDITORIAL_WORKFLOW = void 0;
var _immutable = require("immutable");
// Create/edit workflow modes
const SIMPLE = exports.SIMPLE = 'simple';
const EDITORIAL_WORKFLOW = exports.EDITORIAL_WORKFLOW = 'editorial_workflow';
const Statues = exports.Statues = {
  DRAFT: 'draft',
  PENDING_REVIEW: 'pending_review',
  PENDING_PUBLISH: 'pending_publish'
};

// Available status
const status = exports.status = (0, _immutable.OrderedMap)(Statues);
const statusDescriptions = exports.statusDescriptions = (0, _immutable.Map)({
  [status.get('DRAFT')]: 'Draft',
  [status.get('PENDING_REVIEW')]: 'Waiting for Review',
  [status.get('PENDING_PUBLISH')]: 'Waiting to go live'
});