"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateWorkspace201Response = _interopRequireDefault(require("../model/CreateWorkspace201Response"));

var _CreateWorkspaceRequest = _interopRequireDefault(require("../model/CreateWorkspaceRequest"));

var _DeleteTemplate204Response = _interopRequireDefault(require("../model/DeleteTemplate204Response"));

var _GetTemplates401Response = _interopRequireDefault(require("../model/GetTemplates401Response"));

var _GetTemplates402Response = _interopRequireDefault(require("../model/GetTemplates402Response"));

var _GetTemplates403Response = _interopRequireDefault(require("../model/GetTemplates403Response"));

var _GetTemplates404Response = _interopRequireDefault(require("../model/GetTemplates404Response"));

var _GetTemplates422Response = _interopRequireDefault(require("../model/GetTemplates422Response"));

var _GetTemplates429Response = _interopRequireDefault(require("../model/GetTemplates429Response"));

var _GetTemplates500Response = _interopRequireDefault(require("../model/GetTemplates500Response"));

var _GetWorkspaces200Response = _interopRequireDefault(require("../model/GetWorkspaces200Response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Workspaces service.
* @module PDFGeneratorAPI/WorkspacesApi
* @version 4.0.3
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
   * Callback function to receive the result of the createWorkspace operation.
   * @callback module:PDFGeneratorAPI/WorkspacesApi~createWorkspaceCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CreateWorkspace201Response} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create workspace
   * Creates a regular workspace with identifier specified in the request.
   * @param {Object} opts Optional parameters
   * @param {module:model/CreateWorkspaceRequest} [create_workspace_request] 
   * @param {module:PDFGeneratorAPI/WorkspacesApi~createWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CreateWorkspace201Response}
   */


  _createClass(WorkspacesApi, [{
    key: "createWorkspace",
    value: function createWorkspace(opts, callback) {
      opts = opts || {};
      var postBody = opts['create_workspace_request'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateWorkspace201Response["default"];
      return this.apiClient.callApi('/workspaces', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteWorkspace operation.
     * @callback module:PDFGeneratorAPI/WorkspacesApi~deleteWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteTemplate204Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete workspace
     * Delete workspace. Only regular workspaces can be deleted.
     * @param {String} workspace_identifier Workspace identifier
     * @param {module:PDFGeneratorAPI/WorkspacesApi~deleteWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteTemplate204Response}
     */

  }, {
    key: "deleteWorkspace",
    value: function deleteWorkspace(workspace_identifier, callback) {
      var postBody = null; // verify the required parameter 'workspace_identifier' is set

      if (workspace_identifier === undefined || workspace_identifier === null) {
        throw new Error("Missing the required parameter 'workspace_identifier' when calling deleteWorkspace");
      }

      var pathParams = {
        'workspaceIdentifier': workspace_identifier
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DeleteTemplate204Response["default"];
      return this.apiClient.callApi('/workspaces/{workspaceIdentifier}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getWorkspace operation.
     * @callback module:PDFGeneratorAPI/WorkspacesApi~getWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateWorkspace201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get workspace
     * Returns workspace information for the workspace identifier specified in the request.
     * @param {String} workspace_identifier Workspace identifier
     * @param {module:PDFGeneratorAPI/WorkspacesApi~getWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateWorkspace201Response}
     */

  }, {
    key: "getWorkspace",
    value: function getWorkspace(workspace_identifier, callback) {
      var postBody = null; // verify the required parameter 'workspace_identifier' is set

      if (workspace_identifier === undefined || workspace_identifier === null) {
        throw new Error("Missing the required parameter 'workspace_identifier' when calling getWorkspace");
      }

      var pathParams = {
        'workspaceIdentifier': workspace_identifier
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CreateWorkspace201Response["default"];
      return this.apiClient.callApi('/workspaces/{workspaceIdentifier}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getWorkspaces operation.
     * @callback module:PDFGeneratorAPI/WorkspacesApi~getWorkspacesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetWorkspaces200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get workspaces
     * Returns all workspaces in the organization
     * @param {Object} opts Optional parameters
     * @param {Number} [page = 1)] Pagination: page to return
     * @param {Number} [per_page = 15)] Pagination: How many records to return per page
     * @param {module:PDFGeneratorAPI/WorkspacesApi~getWorkspacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetWorkspaces200Response}
     */

  }, {
    key: "getWorkspaces",
    value: function getWorkspaces(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['per_page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetWorkspaces200Response["default"];
      return this.apiClient.callApi('/workspaces', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WorkspacesApi;
}();

exports["default"] = WorkspacesApi;