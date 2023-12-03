"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GenerateDocument200Response = _interopRequireDefault(require("../model/GenerateDocument200Response"));

var _GenerateDocumentAsynchronous200Response = _interopRequireDefault(require("../model/GenerateDocumentAsynchronous200Response"));

var _GenerateDocumentAsynchronousRequest = _interopRequireDefault(require("../model/GenerateDocumentAsynchronousRequest"));

var _GenerateDocumentBatchAsynchronousRequest = _interopRequireDefault(require("../model/GenerateDocumentBatchAsynchronousRequest"));

var _GenerateDocumentBatchRequest = _interopRequireDefault(require("../model/GenerateDocumentBatchRequest"));

var _GenerateDocumentRequest = _interopRequireDefault(require("../model/GenerateDocumentRequest"));

var _GetDocuments200Response = _interopRequireDefault(require("../model/GetDocuments200Response"));

var _GetTemplates401Response = _interopRequireDefault(require("../model/GetTemplates401Response"));

var _GetTemplates402Response = _interopRequireDefault(require("../model/GetTemplates402Response"));

var _GetTemplates403Response = _interopRequireDefault(require("../model/GetTemplates403Response"));

var _GetTemplates404Response = _interopRequireDefault(require("../model/GetTemplates404Response"));

var _GetTemplates422Response = _interopRequireDefault(require("../model/GetTemplates422Response"));

var _GetTemplates429Response = _interopRequireDefault(require("../model/GetTemplates429Response"));

var _GetTemplates500Response = _interopRequireDefault(require("../model/GetTemplates500Response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Documents service.
* @module PDFGeneratorAPI/DocumentsApi
* @version 4.0.2
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
   * Callback function to receive the result of the generateDocument operation.
   * @callback module:PDFGeneratorAPI/DocumentsApi~generateDocumentCallback
   * @param {String} error Error message, if any.
   * @param {module:model/GenerateDocument200Response} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Generate document
   * Merges template with data and returns base64 encoded document or a public URL to a document. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.
   * @param {module:model/GenerateDocumentRequest} generate_document_request Request parameters, including template id, data and formats.
   * @param {module:PDFGeneratorAPI/DocumentsApi~generateDocumentCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/GenerateDocument200Response}
   */


  _createClass(DocumentsApi, [{
    key: "generateDocument",
    value: function generateDocument(generate_document_request, callback) {
      var postBody = generate_document_request; // verify the required parameter 'generate_document_request' is set

      if (generate_document_request === undefined || generate_document_request === null) {
        throw new Error("Missing the required parameter 'generate_document_request' when calling generateDocument");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GenerateDocument200Response["default"];
      return this.apiClient.callApi('/documents/generate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the generateDocumentAsynchronous operation.
     * @callback module:PDFGeneratorAPI/DocumentsApi~generateDocumentAsynchronousCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GenerateDocumentAsynchronous200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate document (async)
     * Merges template with data as asynchronous job and makes POST request to callback URL defined in the request. Request uses the same format as response of synchronous generation endpoint. The job id is also added to the callback request as header PDF-API-Job-Id  *Example payload for callback URL:* ``` {   \"response\": \"https://us1.pdfgeneratorapi.com/share/12821/VBERi0xLjcKJeLjz9MKNyAwIG9i\",   \"meta\": {     \"name\": \"a2bd25b8921f3dc7a440fd7f427f90a4.pdf\",     \"display_name\": \"a2bd25b8921f3dc7a440fd7f427f90a4\",     \"encoding\": \"binary\",     \"content-type\": \"application/pdf\"   } } ``` 
     * @param {module:model/GenerateDocumentAsynchronousRequest} generate_document_asynchronous_request Request parameters, including template id, data and formats.
     * @param {module:PDFGeneratorAPI/DocumentsApi~generateDocumentAsynchronousCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GenerateDocumentAsynchronous200Response}
     */

  }, {
    key: "generateDocumentAsynchronous",
    value: function generateDocumentAsynchronous(generate_document_asynchronous_request, callback) {
      var postBody = generate_document_asynchronous_request; // verify the required parameter 'generate_document_asynchronous_request' is set

      if (generate_document_asynchronous_request === undefined || generate_document_asynchronous_request === null) {
        throw new Error("Missing the required parameter 'generate_document_asynchronous_request' when calling generateDocumentAsynchronous");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GenerateDocumentAsynchronous200Response["default"];
      return this.apiClient.callApi('/documents/generate/async', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the generateDocumentBatch operation.
     * @callback module:PDFGeneratorAPI/DocumentsApi~generateDocumentBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GenerateDocument200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate document (batch)
     * Allows to merge multiple templates with data and returns base64 encoded document or public URL to a document. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.
     * @param {module:model/GenerateDocumentBatchRequest} generate_document_batch_request Request parameters, including template id, data and formats.
     * @param {module:PDFGeneratorAPI/DocumentsApi~generateDocumentBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GenerateDocument200Response}
     */

  }, {
    key: "generateDocumentBatch",
    value: function generateDocumentBatch(generate_document_batch_request, callback) {
      var postBody = generate_document_batch_request; // verify the required parameter 'generate_document_batch_request' is set

      if (generate_document_batch_request === undefined || generate_document_batch_request === null) {
        throw new Error("Missing the required parameter 'generate_document_batch_request' when calling generateDocumentBatch");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GenerateDocument200Response["default"];
      return this.apiClient.callApi('/documents/generate/batch', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the generateDocumentBatchAsynchronous operation.
     * @callback module:PDFGeneratorAPI/DocumentsApi~generateDocumentBatchAsynchronousCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GenerateDocumentAsynchronous200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate document (batch + async)
     * Merges template with data as asynchronous job and makes POST request to callback URL defined in the request. Request uses the same format as response of synchronous generation endpoint. The job id is also added to the callback request as header PDF-API-Job-Id  *Example payload for callback URL:* ``` {   \"response\": \"https://us1.pdfgeneratorapi.com/share/12821/VBERi0xLjcKJeLjz9MKNyAwIG9i\",   \"meta\": {     \"name\": \"a2bd25b8921f3dc7a440fd7f427f90a4.pdf\",     \"display_name\": \"a2bd25b8921f3dc7a440fd7f427f90a4\",     \"encoding\": \"binary\",     \"content-type\": \"application/pdf\"   } } ``` 
     * @param {module:model/GenerateDocumentBatchAsynchronousRequest} generate_document_batch_asynchronous_request Request parameters, including template id, data and formats.
     * @param {module:PDFGeneratorAPI/DocumentsApi~generateDocumentBatchAsynchronousCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GenerateDocumentAsynchronous200Response}
     */

  }, {
    key: "generateDocumentBatchAsynchronous",
    value: function generateDocumentBatchAsynchronous(generate_document_batch_asynchronous_request, callback) {
      var postBody = generate_document_batch_asynchronous_request; // verify the required parameter 'generate_document_batch_asynchronous_request' is set

      if (generate_document_batch_asynchronous_request === undefined || generate_document_batch_asynchronous_request === null) {
        throw new Error("Missing the required parameter 'generate_document_batch_asynchronous_request' when calling generateDocumentBatchAsynchronous");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GenerateDocumentAsynchronous200Response["default"];
      return this.apiClient.callApi('/documents/generate/batch/async', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getDocuments operation.
     * @callback module:PDFGeneratorAPI/DocumentsApi~getDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetDocuments200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get documents
     * Returns a list of generated documents created by authorized workspace and stored in PDF Generator API. If master user is specified as workspace in JWT then all documents created in the organization are returned. NB! This endpoint returns only documents generated using the output=url option.
     * @param {Object} opts Optional parameters
     * @param {String} [start_date] Start date. Format: Y-m-d H:i:s
     * @param {String} [end_date] End date. Format: Y-m-d H:i:s. Defaults to current timestamp
     * @param {Number} [page = 1)] Pagination: page to return
     * @param {Number} [per_page = 15)] Pagination: How many records to return per page
     * @param {module:PDFGeneratorAPI/DocumentsApi~getDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetDocuments200Response}
     */

  }, {
    key: "getDocuments",
    value: function getDocuments(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'start_date': opts['start_date'],
        'end_date': opts['end_date'],
        'page': opts['page'],
        'per_page': opts['per_page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['JSONWebTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetDocuments200Response["default"];
      return this.apiClient.callApi('/documents', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DocumentsApi;
}();

exports["default"] = DocumentsApi;