"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CopyTemplateRequest = _interopRequireDefault(require("../model/CopyTemplateRequest"));

var _CreateTemplate200Response = _interopRequireDefault(require("../model/CreateTemplate200Response"));

var _DeleteTemplate204Response = _interopRequireDefault(require("../model/DeleteTemplate204Response"));

var _GetTemplateData200Response = _interopRequireDefault(require("../model/GetTemplateData200Response"));

var _GetTemplates200Response = _interopRequireDefault(require("../model/GetTemplates200Response"));

var _GetTemplates401Response = _interopRequireDefault(require("../model/GetTemplates401Response"));

var _GetTemplates402Response = _interopRequireDefault(require("../model/GetTemplates402Response"));

var _GetTemplates403Response = _interopRequireDefault(require("../model/GetTemplates403Response"));

var _GetTemplates404Response = _interopRequireDefault(require("../model/GetTemplates404Response"));

var _GetTemplates422Response = _interopRequireDefault(require("../model/GetTemplates422Response"));

var _GetTemplates429Response = _interopRequireDefault(require("../model/GetTemplates429Response"));

var _GetTemplates500Response = _interopRequireDefault(require("../model/GetTemplates500Response"));

var _OpenEditor200Response = _interopRequireDefault(require("../model/OpenEditor200Response"));

var _OpenEditorRequest = _interopRequireDefault(require("../model/OpenEditorRequest"));

var _TemplateDefinitionNew = _interopRequireDefault(require("../model/TemplateDefinitionNew"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Templates service.
* @module PDFGeneratorAPI/TemplatesApi
* @version 4.0.1
*/
var TemplatesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TemplatesApi. 
  * @alias module:PDFGeneratorAPI/TemplatesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TemplatesApi(apiClient) {
    _classCallCheck(this, TemplatesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the copyTemplate operation.
   * @callback module:PDFGeneratorAPI/TemplatesApi~copyTemplateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CreateTemplate200Response} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Copy template
   * Creates a copy of a template to the workspace specified in authentication parameters.
   * @param {Number} template_id Template unique identifier
   * @param {Object} opts Optional parameters
   * @param {module:model/CopyTemplateRequest} opts.copy_template_request 
   * @param {module:PDFGeneratorAPI/TemplatesApi~copyTemplateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CreateTemplate200Response}
   */


  _createClass(TemplatesApi, [{
    key: "copyTemplate",
    value: function copyTemplate(template_id, opts, callback) {
      opts = opts || {};
      var postBody = opts['copy_template_request']; // verify the required parameter 'template_id' is set

      if (template_id === undefined || template_id === null) {
        throw new Error("Missing the required parameter 'template_id' when calling copyTemplate");
      }

      var pathParams = {
        'templateId': template_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateTemplate200Response["default"];
      return this.apiClient.callApi('/templates/{templateId}/copy', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createTemplate operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~createTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateTemplate200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create template
     * Creates a new template. If template configuration is not specified in the request body then an empty template is created. Template is placed to the workspace specified in authentication params. Template configuration must be sent in the request body.
     * @param {module:model/TemplateDefinitionNew} template_definition_new Template configuration as JSON string
     * @param {module:PDFGeneratorAPI/TemplatesApi~createTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateTemplate200Response}
     */

  }, {
    key: "createTemplate",
    value: function createTemplate(template_definition_new, callback) {
      var postBody = template_definition_new; // verify the required parameter 'template_definition_new' is set

      if (template_definition_new === undefined || template_definition_new === null) {
        throw new Error("Missing the required parameter 'template_definition_new' when calling createTemplate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateTemplate200Response["default"];
      return this.apiClient.callApi('/templates', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteTemplate operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~deleteTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteTemplate204Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete template
     * Deletes the template from workspace
     * @param {Number} template_id Template unique identifier
     * @param {module:PDFGeneratorAPI/TemplatesApi~deleteTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteTemplate204Response}
     */

  }, {
    key: "deleteTemplate",
    value: function deleteTemplate(template_id, callback) {
      var postBody = null; // verify the required parameter 'template_id' is set

      if (template_id === undefined || template_id === null) {
        throw new Error("Missing the required parameter 'template_id' when calling deleteTemplate");
      }

      var pathParams = {
        'templateId': template_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DeleteTemplate204Response["default"];
      return this.apiClient.callApi('/templates/{templateId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTemplate operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~getTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateTemplate200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get template
     * Returns template configuration
     * @param {Number} template_id Template unique identifier
     * @param {module:PDFGeneratorAPI/TemplatesApi~getTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateTemplate200Response}
     */

  }, {
    key: "getTemplate",
    value: function getTemplate(template_id, callback) {
      var postBody = null; // verify the required parameter 'template_id' is set

      if (template_id === undefined || template_id === null) {
        throw new Error("Missing the required parameter 'template_id' when calling getTemplate");
      }

      var pathParams = {
        'templateId': template_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CreateTemplate200Response["default"];
      return this.apiClient.callApi('/templates/{templateId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTemplateData operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~getTemplateDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTemplateData200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get template data fields
     * Returns all data fields used in the template. Returns structured JSON data that can be used to check which data fields are used in template or autogenerate sample data. 
     * @param {Number} template_id Template unique identifier
     * @param {module:PDFGeneratorAPI/TemplatesApi~getTemplateDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTemplateData200Response}
     */

  }, {
    key: "getTemplateData",
    value: function getTemplateData(template_id, callback) {
      var postBody = null; // verify the required parameter 'template_id' is set

      if (template_id === undefined || template_id === null) {
        throw new Error("Missing the required parameter 'template_id' when calling getTemplateData");
      }

      var pathParams = {
        'templateId': template_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetTemplateData200Response["default"];
      return this.apiClient.callApi('/templates/{templateId}/data', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTemplates operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~getTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTemplates200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get templates
     * Returns a list of templates available for the authenticated workspace
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter template by name
     * @param {String} opts.tags Filter template by tags
     * @param {module:model/String} opts.access Filter template by access type. No values returns all templates. private - returns only private templates, organization - returns only organization templates. (default to '')
     * @param {module:PDFGeneratorAPI/TemplatesApi~getTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTemplates200Response}
     */

  }, {
    key: "getTemplates",
    value: function getTemplates(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'name': opts['name'],
        'tags': opts['tags'],
        'access': opts['access']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetTemplates200Response["default"];
      return this.apiClient.callApi('/templates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the openEditor operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~openEditorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OpenEditor200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Open editor
     * Returns an unique URL which you can use to redirect your user to the editor from your application or use the generated URL as iframe source to show the editor within your application. When using iframe, make sure that your browser allows third-party cookies. 
     * @param {Number} template_id Template unique identifier
     * @param {module:model/OpenEditorRequest} open_editor_request 
     * @param {module:PDFGeneratorAPI/TemplatesApi~openEditorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OpenEditor200Response}
     */

  }, {
    key: "openEditor",
    value: function openEditor(template_id, open_editor_request, callback) {
      var postBody = open_editor_request; // verify the required parameter 'template_id' is set

      if (template_id === undefined || template_id === null) {
        throw new Error("Missing the required parameter 'template_id' when calling openEditor");
      } // verify the required parameter 'open_editor_request' is set


      if (open_editor_request === undefined || open_editor_request === null) {
        throw new Error("Missing the required parameter 'open_editor_request' when calling openEditor");
      }

      var pathParams = {
        'templateId': template_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OpenEditor200Response["default"];
      return this.apiClient.callApi('/templates/{templateId}/editor', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateTemplate operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~updateTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateTemplate200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update template
     * Updates template configuration. The template configuration for pages and layout must be complete as the entire configuration is replaced and not merged.
     * @param {Number} template_id Template unique identifier
     * @param {module:model/TemplateDefinitionNew} template_definition_new Template configuration as JSON string
     * @param {module:PDFGeneratorAPI/TemplatesApi~updateTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateTemplate200Response}
     */

  }, {
    key: "updateTemplate",
    value: function updateTemplate(template_id, template_definition_new, callback) {
      var postBody = template_definition_new; // verify the required parameter 'template_id' is set

      if (template_id === undefined || template_id === null) {
        throw new Error("Missing the required parameter 'template_id' when calling updateTemplate");
      } // verify the required parameter 'template_definition_new' is set


      if (template_definition_new === undefined || template_definition_new === null) {
        throw new Error("Missing the required parameter 'template_definition_new' when calling updateTemplate");
      }

      var pathParams = {
        'templateId': template_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateTemplate200Response["default"];
      return this.apiClient.callApi('/templates/{templateId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TemplatesApi;
}();

exports["default"] = TemplatesApi;