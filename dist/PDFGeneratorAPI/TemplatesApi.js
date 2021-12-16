"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2001"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse2002"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse2003"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse7 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse8 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse9 = _interopRequireDefault(require("../model/InlineResponse500"));

var _TemplateDefinitionNew = _interopRequireDefault(require("../model/TemplateDefinitionNew"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Templates service.
* @module PDFGeneratorAPI/TemplatesApi
* @version 3.1.1
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
   * @param {module:model/InlineResponse2001} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Copy template
   * Creates a copy of a template to the workspace specified in authentication parameters.
   * @param {Number} template_id Template unique identifier
   * @param {Object} opts Optional parameters
   * @param {String} opts.name Name for the copied template. If name is not specified then the original name is used.
   * @param {module:PDFGeneratorAPI/TemplatesApi~copyTemplateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2001}
   */


  _createClass(TemplatesApi, [{
    key: "copyTemplate",
    value: function copyTemplate(template_id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'template_id' is set

      if (template_id === undefined || template_id === null) {
        throw new Error("Missing the required parameter 'template_id' when calling copyTemplate");
      }

      var pathParams = {
        'templateId': template_id
      };
      var queryParams = {
        'name': opts['name']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/templates/templateId/copy', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createTemplate operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~createTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create template
     * Creates a new template. If template configuration is not specified in the request body then an empty template is created. Template is placed to the workspace specified in authentication params. Template configuration must be sent in the request body.
     * @param {module:model/TemplateDefinitionNew} template_definition_new Template configuration as JSON string
     * @param {module:PDFGeneratorAPI/TemplatesApi~createTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
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
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/templates', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteTemplate operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~deleteTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete template
     * Deletes the template from workspace
     * @param {Number} template_id Template unique identifier
     * @param {module:PDFGeneratorAPI/TemplatesApi~deleteTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
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
      var returnType = _InlineResponse3["default"];
      return this.apiClient.callApi('/templates/templateId', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getEditorUrl operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~getEditorUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Open editor
     * Returns an unique URL which you can use to redirect your user to the editor from your application or use the generated URL as iframe source to show the editor within your application. 
     * @param {Number} template_id Template unique identifier
     * @param {Object} body Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.language Specify the editor UI language. Defaults to organization editor language.
     * @param {module:PDFGeneratorAPI/TemplatesApi~getEditorUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */

  }, {
    key: "getEditorUrl",
    value: function getEditorUrl(template_id, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'template_id' is set

      if (template_id === undefined || template_id === null) {
        throw new Error("Missing the required parameter 'template_id' when calling getEditorUrl");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getEditorUrl");
      }

      var pathParams = {
        'templateId': template_id
      };
      var queryParams = {
        'language': opts['language']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4["default"];
      return this.apiClient.callApi('/templates/templateId/editor', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTemplate operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~getTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get template
     * Returns template configuration
     * @param {Number} template_id Template unique identifier
     * @param {module:PDFGeneratorAPI/TemplatesApi~getTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
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
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/templates/templateId', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTemplates operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~getTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get templates
     * Returns a list of templates available for the authenticated workspace
     * @param {module:PDFGeneratorAPI/TemplatesApi~getTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */

  }, {
    key: "getTemplates",
    value: function getTemplates(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/templates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateTemplate operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~updateTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update template
     * Updates template configuration. The template configuration for pages and layout must be complete as the entire configuration is replaced and not merged.
     * @param {Number} template_id Template unique identifier
     * @param {module:model/TemplateDefinitionNew} template_definition_new Template configuration as JSON string
     * @param {module:PDFGeneratorAPI/TemplatesApi~updateTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
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
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/templates/templateId', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TemplatesApi;
}();

exports["default"] = TemplatesApi;