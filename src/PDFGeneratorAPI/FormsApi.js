/**
 * PDF Generator API
 * # Introduction [PDF Generator API](https://pdfgeneratorapi.com) allows you easily generate transactional PDF documents and reduce the development and support costs by enabling your users to create and manage their document templates using a browser-based drag-and-drop document editor.  The PDF Generator API features a web API architecture, allowing you to code in the language of your choice. This API supports the JSON media type, and uses UTF-8 character encoding.  ## Base URL The base URL for all the API endpoints is `https://us1.pdfgeneratorapi.com/api/v4`  For example * `https://us1.pdfgeneratorapi.com/api/v4/templates` * `https://us1.pdfgeneratorapi.com/api/v4/workspaces` * `https://us1.pdfgeneratorapi.com/api/v4/templates/123123`  ## Editor PDF Generator API comes with a powerful drag & drop editor that allows to create any kind of document templates, from barcode labels to invoices, quotes and reports. You can find tutorials and videos from our [Support Portal](https://support.pdfgeneratorapi.com). * [Component specification](https://support.pdfgeneratorapi.com/en/category/components-1ffseaj/) * [Expression Language documentation](https://support.pdfgeneratorapi.com/en/category/expression-language-q203pa/) * [Frequently asked questions and answers](https://support.pdfgeneratorapi.com/en/category/qanda-1ov519d/)  ## Definitions  ### Organization Organization is a group of workspaces owned by your account.  ### Workspace Workspace contains templates. Each workspace has access to their own templates and organization default templates.  ### Master Workspace Master Workspace is the main/default workspace of your Organization. The Master Workspace identifier is the email you signed up with.  ### Default Template Default template is a template that is available for all workspaces by default. You can set the template access type under Page Setup. If template has \"Organization\" access then your users can use them from the \"New\" menu in the Editor.  ### Data Field Data Field is a placeholder for the specific data in your JSON data set. In this example JSON you can access the buyer name using Data Field `{paymentDetails::buyerName}`. The separator between depth levels is :: (two colons). When designing the template you don’t have to know every Data Field, our editor automatically extracts all the available fields from your data set and provides an easy way to insert them into the template. ``` {     \"documentNumber\": 1,     \"paymentDetails\": {         \"method\": \"Credit Card\",         \"buyerName\": \"John Smith\"     },     \"items\": [         {             \"id\": 1,             \"name\": \"Item one\"         }     ] } ```  ## Rate limiting Our API endpoints use IP-based rate limiting and allow you to make up to 2 requests per second and 60 requests per minute. If you make more requests, you will receive a response with HTTP code 429.  Response headers contain additional values:  | Header   | Description                    | |--------|--------------------------------| | X-RateLimit-Limit    | Maximum requests per minute                   | | X-RateLimit-Remaining    | The requests remaining in the current minute               | | Retry-After     | How many seconds you need to wait until you are allowed to make requests |  *  *  *  *  *  # Libraries and SDKs ## Postman Collection We have created a [Postman Collection](https://www.postman.com/pdfgeneratorapi/workspace/pdf-generator-api-public-workspace/overview) so you can easily test all the API endpoints without developing and code.   ## Client Libraries All our Client Libraries are auto-generated using [OpenAPI Generator](https://openapi-generator.tech/) which uses the OpenAPI v3 specification to automatically generate a client library in specific programming language.  * [PHP Client](https://github.com/pdfgeneratorapi/php-client) * [Java Client](https://github.com/pdfgeneratorapi/java-client) * [Ruby Client](https://github.com/pdfgeneratorapi/ruby-client) * [Python Client](https://github.com/pdfgeneratorapi/python-client) * [Javascript Client](https://github.com/pdfgeneratorapi/javascript-client)  We have validated the generated libraries, but let us know if you find any anomalies in the client code.  ## Model Context Protocol (MCP) Server Integrate document generation directly into your AI agents and LLM applications using our official Model Context Protocol (MCP) Server.  The MCP server provides a standardized interface that allows AI assistants (like Claude Desktop and other MCP-compatible clients) to securely interact with the PDF Generator API. With it, your AI applications can automatically fetch workspaces, retrieve templates, merge data, and generate PDF documents on the fly.  [Get PDF Generator API MCP Server](https://github.com/pdfgeneratorapi/mcp-server) *  *  *  *  *   # Authentication The PDF Generator API uses __JSON Web Tokens (JWT)__ to authenticate all API requests. These tokens offer a method to establish secure server-to-server authentication by transferring a compact JSON object with a signed payload of your account’s API Key and Secret. When authenticating to the PDF Generator API, a JWT should be generated uniquely by a __server-side application__ and included as a __Bearer Token__ in the header of each request.   <SecurityDefinitions />  ## Accessing your API Key and Secret You can find your __API Key__ and __API Secret__ from the __Account Settings__ page after you login to PDF Generator API [here](https://pdfgeneratorapi.com/login).  ## Creating a JWT JSON Web Tokens are composed of three sections: a header, a payload (containing a claim set), and a signature. The header and payload are JSON objects, which are serialized to UTF-8 bytes, then encoded using base64url encoding.  The JWT's header, payload, and signature are concatenated with periods (.). As a result, a JWT typically takes the following form: ``` {Base64url encoded header}.{Base64url encoded payload}.{Base64url encoded signature} ```  We recommend and support libraries provided on [jwt.io](https://jwt.io/). While other libraries can create JWT, these recommended libraries are the most robust.  ### Header Property `alg` defines which signing algorithm is being used. PDF Generator API users HS256. Property `typ` defines the type of token and it is always JWT. ``` {   \"alg\": \"HS256\",   \"typ\": \"JWT\" } ```  ### Payload The second part of the token is the payload, which contains the claims  or the pieces of information being passed about the user and any metadata required. It is mandatory to specify the following claims: * issuer (`iss`): Your API key * subject (`sub`): Workspace identifier * expiration time (`exp`): Timestamp (unix epoch time) until the token is valid. It is highly recommended to set the exp timestamp for a short period, i.e. a matter of seconds. This way, if a token is intercepted or shared, the token will only be valid for a short period of time.  ``` {   \"iss\": \"ad54aaff89ffdfeff178bb8a8f359b29fcb20edb56250b9f584aa2cb0162ed4a\",   \"sub\": \"demo.example@actualreports.com\",   \"exp\": 1586112639 } ```  ### Payload for Partners Our partners can send their unique identifier (provided by us) in JWT's partner_id claim. If the `partner_id` value is specified in the JWT, the organization making the request is automatically connected to the partner account. * Partner ID (`partner_id`): Unique identifier provide by PDF Generator API team  ``` {   \"iss\": \"ad54aaff89ffdfeff178bb8a8f359b29fcb20edb56250b9f584aa2cb0162ed4a\",   \"sub\": \"demo.example@actualreports.com\",   \"partner_id\": \"my-partner-identifier\",   \"exp\": 1586112639 } ```  ### Signature To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that. The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is. ``` HMACSHA256(     base64UrlEncode(header) + \".\" +     base64UrlEncode(payload),     API_SECRET) ```  ### Putting all together The output is three Base64-URL strings separated by dots. The following shows a JWT that has the previous header and payload encoded, and it is signed with a secret. ``` eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhZDU0YWFmZjg5ZmZkZmVmZjE3OGJiOGE4ZjM1OWIyOWZjYjIwZWRiNTYyNTBiOWY1ODRhYTJjYjAxNjJlZDRhIiwic3ViIjoiZGVtby5leGFtcGxlQGFjdHVhbHJlcG9ydHMuY29tIn0.SxO-H7UYYYsclS8RGWO1qf0z1cB1m73wF9FLl9RCc1Q  // Base64 encoded header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 // Base64 encoded payload: eyJpc3MiOiJhZDU0YWFmZjg5ZmZkZmVmZjE3OGJiOGE4ZjM1OWIyOWZjYjIwZWRiNTYyNTBiOWY1ODRhYTJjYjAxNjJlZDRhIiwic3ViIjoiZGVtby5leGFtcGxlQGFjdHVhbHJlcG9ydHMuY29tIn0 // Signature: SxO-H7UYYYsclS8RGWO1qf0z1cB1m73wF9FLl9RCc1Q ```  ## Temporary JWTs You can create a temporary token in [Account Settings](https://pdfgeneratorapi.com/account/organization) page after you login to PDF Generator API. The generated token uses your email address as the subject (`sub`) value and is valid for __15 minutes__. You can also use [jwt.io](https://jwt.io/) to generate test tokens for your API calls. These test tokens should never be used in production applications. *  *  *  *  *  # Error codes  | Code   | Description                    | |--------|--------------------------------| | 401    | Unauthorized                   | | 402    | Payment Required               | | 403    | Forbidden                      | | 404    | Not Found                      | | 422    | Unprocessable Entity           | | 429    | Too Many Requests              | | 500    | Internal Server Error          |  ## 401 Unauthorized | Description                                                             | |-------------------------------------------------------------------------| | Authentication failed: request expired                                  | | Authentication failed: workspace missing                                | | Authentication failed: key missing                                      | | Authentication failed: property 'iss' (issuer) missing in JWT           | | Authentication failed: property 'sub' (subject) missing in JWT          | | Authentication failed: property 'exp' (expiration time) missing in JWT  | | Authentication failed: incorrect signature                              |  ## 402 Payment Required | Description                                                             | |-------------------------------------------------------------------------| | Your account is suspended, please upgrade your account                  |  ## 403 Forbidden | Description                                                             | |-------------------------------------------------------------------------| | Your account has exceeded the monthly document generation limit.        | | Access not granted: You cannot delete master workspace via API          | | Access not granted: Template is not accessible by this organization     | | Your session has expired, please close and reopen the editor.           |  ## 404 Entity not found | Description                                                             | |-------------------------------------------------------------------------| | Entity not found                                                        | | Resource not found                                                      | | None of the templates is available for the workspace.                   |  ## 422 Unprocessable Entity | Description                                                             | |-------------------------------------------------------------------------| | Unable to parse JSON, please check formatting                           | | Required parameter missing                                              | | Required parameter missing: template definition not defined             | | Required parameter missing: template not defined                        |  ## 429 Too Many Requests | Description                                                             | |-------------------------------------------------------------------------| | You can make up to 2 requests per second and 60 requests per minute.   |  *  *  *  *  * 
 *
 * The version of the OpenAPI document: 4.0.25
 * Contact: support@pdfgeneratorapi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import FormConfigurationNew from '../model/FormConfigurationNew';
import ImportFormRequest from '../model/ImportFormRequest';
import InlineObject17 from '../model/InlineObject17';
import InlineObject18 from '../model/InlineObject18';
import InlineObject19 from '../model/InlineObject19';
import InlineObject21 from '../model/InlineObject21';
import InlineObject22 from '../model/InlineObject22';
import InlineObject23 from '../model/InlineObject23';
import InlineObject24 from '../model/InlineObject24';
import InlineObject25 from '../model/InlineObject25';
import InlineObject26 from '../model/InlineObject26';
import InlineObject27 from '../model/InlineObject27';
import InlineObject6 from '../model/InlineObject6';

/**
* Forms service.
* @module PDFGeneratorAPI/FormsApi
* @version 4.0.25
*/
export default class FormsApi {

    /**
    * Constructs a new FormsApi. 
    * @alias module:PDFGeneratorAPI/FormsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createForm operation.
     * @callback module:PDFGeneratorAPI/FormsApi~createFormCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineObject17} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create form
     * Creates a new form based on the configuration sent in the request body.
     * @param {module:model/FormConfigurationNew} form_configuration_new Form configuration
     * @param {module:PDFGeneratorAPI/FormsApi~createFormCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineObject17}
     */
    createForm(form_configuration_new, callback) {
      let postBody = form_configuration_new;
      // verify the required parameter 'form_configuration_new' is set
      if (form_configuration_new === undefined || form_configuration_new === null) {
        throw new Error("Missing the required parameter 'form_configuration_new' when calling createForm");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JSONWebTokenAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineObject17;
      return this.apiClient.callApi(
        '/forms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteForm operation.
     * @callback module:PDFGeneratorAPI/FormsApi~deleteFormCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete form
     * Deletes the form with specified id
     * @param {Number} form_id Form unique identifier
     * @param {module:PDFGeneratorAPI/FormsApi~deleteFormCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteForm(form_id, callback) {
      let postBody = null;
      // verify the required parameter 'form_id' is set
      if (form_id === undefined || form_id === null) {
        throw new Error("Missing the required parameter 'form_id' when calling deleteForm");
      }

      let pathParams = {
        'formId': form_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JSONWebTokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/forms/{formId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getForm operation.
     * @callback module:PDFGeneratorAPI/FormsApi~getFormCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineObject17} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get form
     * Returns form configuration
     * @param {Number} form_id Form unique identifier
     * @param {module:PDFGeneratorAPI/FormsApi~getFormCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineObject17}
     */
    getForm(form_id, callback) {
      let postBody = null;
      // verify the required parameter 'form_id' is set
      if (form_id === undefined || form_id === null) {
        throw new Error("Missing the required parameter 'form_id' when calling getForm");
      }

      let pathParams = {
        'formId': form_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JSONWebTokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineObject17;
      return this.apiClient.callApi(
        '/forms/{formId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getForms operation.
     * @callback module:PDFGeneratorAPI/FormsApi~getFormsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineObject6} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get forms
     * Returns a list of forms available for the organization
     * @param {Object} opts Optional parameters
     * @param {Number} [page = 1)] Pagination: page to return
     * @param {Number} [per_page = 15)] Pagination: How many records to return per page
     * @param {module:PDFGeneratorAPI/FormsApi~getFormsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineObject6}
     */
    getForms(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'per_page': opts['per_page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JSONWebTokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineObject6;
      return this.apiClient.callApi(
        '/forms', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the importForm operation.
     * @callback module:PDFGeneratorAPI/FormsApi~importFormCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineObject17} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import Form
     * Creates a new form based on editable PDF
     * @param {module:model/ImportFormRequest} import_form_request Import editable PDF via URL or base64 string as form
     * @param {module:PDFGeneratorAPI/FormsApi~importFormCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineObject17}
     */
    importForm(import_form_request, callback) {
      let postBody = import_form_request;
      // verify the required parameter 'import_form_request' is set
      if (import_form_request === undefined || import_form_request === null) {
        throw new Error("Missing the required parameter 'import_form_request' when calling importForm");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JSONWebTokenAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineObject17;
      return this.apiClient.callApi(
        '/forms/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the openFormBuilder operation.
     * @callback module:PDFGeneratorAPI/FormsApi~openFormBuilderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineObject19} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Open new form builder
     * Creates a new Form Builder session and returns a URL that can be used to open the embeddable Form Builder for creating a new form.
     * @param {module:PDFGeneratorAPI/FormsApi~openFormBuilderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineObject19}
     */
    openFormBuilder(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JSONWebTokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineObject19;
      return this.apiClient.callApi(
        '/forms/open', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the openFormBuilderForExistingForm operation.
     * @callback module:PDFGeneratorAPI/FormsApi~openFormBuilderForExistingFormCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineObject19} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Open existing form builder
     * Creates a Form Builder session for editing an existing form and returns a URL that can be used to open the embeddable Form Builder.
     * @param {Number} form_id Form unique identifier
     * @param {module:PDFGeneratorAPI/FormsApi~openFormBuilderForExistingFormCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineObject19}
     */
    openFormBuilderForExistingForm(form_id, callback) {
      let postBody = null;
      // verify the required parameter 'form_id' is set
      if (form_id === undefined || form_id === null) {
        throw new Error("Missing the required parameter 'form_id' when calling openFormBuilderForExistingForm");
      }

      let pathParams = {
        'formId': form_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JSONWebTokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineObject19;
      return this.apiClient.callApi(
        '/forms/{formId}/open', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the shareForm operation.
     * @callback module:PDFGeneratorAPI/FormsApi~shareFormCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineObject18} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Share form
     * Creates an unique sharing URL to collect form data
     * @param {Number} form_id Form unique identifier
     * @param {module:PDFGeneratorAPI/FormsApi~shareFormCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineObject18}
     */
    shareForm(form_id, callback) {
      let postBody = null;
      // verify the required parameter 'form_id' is set
      if (form_id === undefined || form_id === null) {
        throw new Error("Missing the required parameter 'form_id' when calling shareForm");
      }

      let pathParams = {
        'formId': form_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JSONWebTokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineObject18;
      return this.apiClient.callApi(
        '/forms/{formId}/share', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateForm operation.
     * @callback module:PDFGeneratorAPI/FormsApi~updateFormCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineObject17} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update form
     * Updates the form configuration. The form configuration must be complete as the entire configuration is replaced and not merged.
     * @param {Number} form_id Form unique identifier
     * @param {module:model/FormConfigurationNew} form_configuration_new Form configuration
     * @param {module:PDFGeneratorAPI/FormsApi~updateFormCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineObject17}
     */
    updateForm(form_id, form_configuration_new, callback) {
      let postBody = form_configuration_new;
      // verify the required parameter 'form_id' is set
      if (form_id === undefined || form_id === null) {
        throw new Error("Missing the required parameter 'form_id' when calling updateForm");
      }
      // verify the required parameter 'form_configuration_new' is set
      if (form_configuration_new === undefined || form_configuration_new === null) {
        throw new Error("Missing the required parameter 'form_configuration_new' when calling updateForm");
      }

      let pathParams = {
        'formId': form_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JSONWebTokenAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineObject17;
      return this.apiClient.callApi(
        '/forms/{formId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
