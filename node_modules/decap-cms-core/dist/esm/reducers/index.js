"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.selectDeployPreview = selectDeployPreview;
exports.selectEntries = selectEntries;
exports.selectEntry = selectEntry;
exports.selectIntegration = selectIntegration;
exports.selectPublishedSlugs = selectPublishedSlugs;
exports.selectSearchedEntries = selectSearchedEntries;
exports.selectUnpublishedEntriesByStatus = selectUnpublishedEntriesByStatus;
exports.selectUnpublishedEntry = selectUnpublishedEntry;
exports.selectUnpublishedSlugs = selectUnpublishedSlugs;
var _immutable = require("immutable");
var _auth = _interopRequireDefault(require("./auth"));
var _config = _interopRequireDefault(require("./config"));
var _integrations = _interopRequireWildcard(require("./integrations"));
var fromIntegrations = _integrations;
var _entries = _interopRequireWildcard(require("./entries"));
var fromEntries = _entries;
var _cursors = _interopRequireDefault(require("./cursors"));
var _editorialWorkflow = _interopRequireWildcard(require("./editorialWorkflow"));
var fromEditorialWorkflow = _editorialWorkflow;
var _entryDraft = _interopRequireDefault(require("./entryDraft"));
var _collections = _interopRequireDefault(require("./collections"));
var _search = _interopRequireDefault(require("./search"));
var _medias = _interopRequireDefault(require("./medias"));
var _mediaLibrary = _interopRequireDefault(require("./mediaLibrary"));
var _deploys = _interopRequireWildcard(require("./deploys"));
var fromDeploys = _deploys;
var _globalUI = _interopRequireDefault(require("./globalUI"));
var _status = _interopRequireDefault(require("./status"));
var _notifications = _interopRequireDefault(require("./notifications"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const reducers = {
  auth: _auth.default,
  config: _config.default,
  collections: _collections.default,
  search: _search.default,
  integrations: _integrations.default,
  entries: _entries.default,
  cursors: _cursors.default,
  editorialWorkflow: _editorialWorkflow.default,
  entryDraft: _entryDraft.default,
  medias: _medias.default,
  mediaLibrary: _mediaLibrary.default,
  deploys: _deploys.default,
  globalUI: _globalUI.default,
  status: _status.default,
  notifications: _notifications.default
};
var _default = exports.default = reducers;
/*
 * Selectors
 */
function selectEntry(state, collection, slug) {
  return fromEntries.selectEntry(state.entries, collection, slug);
}
function selectEntries(state, collection) {
  return fromEntries.selectEntries(state.entries, collection);
}
function selectPublishedSlugs(state, collection) {
  return fromEntries.selectPublishedSlugs(state.entries, collection);
}
function selectSearchedEntries(state, availableCollections) {
  // only return search results for actually available collections
  return (0, _immutable.List)(state.search.entryIds).filter(entryId => availableCollections.indexOf(entryId.collection) !== -1).map(entryId => fromEntries.selectEntry(state.entries, entryId.collection, entryId.slug));
}
function selectDeployPreview(state, collection, slug) {
  return fromDeploys.selectDeployPreview(state.deploys, collection, slug);
}
function selectUnpublishedEntry(state, collection, slug) {
  return fromEditorialWorkflow.selectUnpublishedEntry(state.editorialWorkflow, collection, slug);
}
function selectUnpublishedEntriesByStatus(state, status) {
  return fromEditorialWorkflow.selectUnpublishedEntriesByStatus(state.editorialWorkflow, status);
}
function selectUnpublishedSlugs(state, collection) {
  return fromEditorialWorkflow.selectUnpublishedSlugs(state.editorialWorkflow, collection);
}
function selectIntegration(state, collection, hook) {
  return fromIntegrations.selectIntegration(state.integrations, collection, hook);
}