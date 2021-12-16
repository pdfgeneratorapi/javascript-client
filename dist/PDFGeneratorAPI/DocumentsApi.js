"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Data = _interopRequireDefault(require("../model/Data"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2004"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse500"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Documents service.
* @module PDFGeneratorAPI/DocumentsApi
* @version 3.1.1
*/
var DocumentsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DocumentsApi. 
  * @alias module:PDFGeneratorAPI/DocumentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DocumentsApi(apiClient) {
    _classCallCheck(this, DocumentsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the mergeTemplate operation.
   * @callback module:PDFGeneratorAPI/DocumentsApi~mergeTemplateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2004} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Generate document
   * Merges template with data and returns base64 encoded document or a public URL to a document. You can send json encoded data in request body or a public URL to your json file as the data parameter. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.
   * @param {Number} template_id Template unique identifier
   * @param {module:model/Data} data Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file.
   * @param {Object} opts Optional parameters
   * @param {String} opts.name Document name, returned in the meta data.
   * @param {module:model/String} opts.format Document format. The zip option will return a ZIP file with PDF files. (default to 'pdf')
   * @param {module:model/String} opts.output Response format. With the url option, the document is stored for 30 days and automatically deleted. (default to 'base64')
   * @param {module:PDFGeneratorAPI/DocumentsApi~mergeTemplateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2004}
   */


  _createClass(DocumentsApi, [{
    key: "mergeTemplate",
    value: function mergeTemplate(template_id, data, opts, callback) {
      opts = opts || {};
      var postBody = data; // verify the required parameter 'template_id' is set

      if (template_id === undefined || template_id === null) {
        throw new Error("Missing the required parameter 'template_id' when calling mergeTemplate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling mergeTemplate");
      }

      var pathParams = {
        'templateId': template_id
      };
      var queryParams = {
        'name': opts['name'],
        'format': opts['format'],
        'output': opts['output']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/templates/templateId/output', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the mergeTemplates operation.
     * @callback module:PDFGeneratorAPI/DocumentsApi~mergeTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate document (multiple templates)
     * Allows to merge multiples template with data and returns base64 encoded document or public URL to a document. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.
     * @param {Array.<Object>} request_body Data used to specify templates and data objects which are used to merge the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Document name, returned in the meta data.
     * @param {module:model/String} opts.format Document format. The zip option will return a ZIP file with PDF files. (default to 'pdf')
     * @param {module:model/String} opts.output Response format. With the url option, the document is stored for 30 days and automatically deleted. (default to 'base64')
     * @param {module:PDFGeneratorAPI/DocumentsApi~mergeTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */

  }, {
    key: "mergeTemplates",
    value: function mergeTemplates(request_body, opts, callback) {
      opts = opts || {};
      var postBody = request_body; // verify the required parameter 'request_body' is set

      if (request_body === undefined || request_body === null) {
        throw new Error("Missing the required parameter 'request_body' when calling mergeTemplates");
      }

      var pathParams = {};
      var queryParams = {
        'name': opts['name'],
        'format': opts['format'],
        'output': opts['output']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/templates/output', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DocumentsApi;
}();

exports["default"] = DocumentsApi;