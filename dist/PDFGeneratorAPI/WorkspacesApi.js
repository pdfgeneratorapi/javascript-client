"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2002"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2005"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse7 = _interopRequireDefault(require("../model/InlineResponse500"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Workspaces service.
* @module PDFGeneratorAPI/WorkspacesApi
* @version 3.1.1
*/
var WorkspacesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WorkspacesApi. 
  * @alias module:PDFGeneratorAPI/WorkspacesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WorkspacesApi(apiClient) {
    _classCallCheck(this, WorkspacesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteWorkspace operation.
   * @callback module:PDFGeneratorAPI/WorkspacesApi~deleteWorkspaceCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2002} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete workspace
   * Deletes the workspace
   * @param {String} workspace_id Workspace identifier
   * @param {module:PDFGeneratorAPI/WorkspacesApi~deleteWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2002}
   */


  _createClass(WorkspacesApi, [{
    key: "deleteWorkspace",
    value: function deleteWorkspace(workspace_id, callback) {
      var postBody = null; // verify the required parameter 'workspace_id' is set

      if (workspace_id === undefined || workspace_id === null) {
        throw new Error("Missing the required parameter 'workspace_id' when calling deleteWorkspace");
      }

      var pathParams = {
        'workspaceId': workspace_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/workspaces/workspaceId', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getWorkspace operation.
     * @callback module:PDFGeneratorAPI/WorkspacesApi~getWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get workspace
     * Returns workspace information
     * @param {String} workspace_id Workspace identifier
     * @param {module:PDFGeneratorAPI/WorkspacesApi~getWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */

  }, {
    key: "getWorkspace",
    value: function getWorkspace(workspace_id, callback) {
      var postBody = null; // verify the required parameter 'workspace_id' is set

      if (workspace_id === undefined || workspace_id === null) {
        throw new Error("Missing the required parameter 'workspace_id' when calling getWorkspace");
      }

      var pathParams = {
        'workspaceId': workspace_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/workspaces/workspaceId', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WorkspacesApi;
}();

exports["default"] = WorkspacesApi;