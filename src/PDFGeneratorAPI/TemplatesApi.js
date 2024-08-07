/**
 * PDF Generator API
 * # Introduction [PDF Generator API](https://pdfgeneratorapi.com) allows you easily generate transactional PDF documents and reduce the development and support costs by enabling your users to create and manage their document templates using a browser-based drag-and-drop document editor.  The PDF Generator API features a web API architecture, allowing you to code in the language of your choice. This API supports the JSON media type, and uses UTF-8 character encoding.  ## Base URL The base URL for all the API endpoints is `https://us1.pdfgeneratorapi.com/api/v4`  For example * `https://us1.pdfgeneratorapi.com/api/v4/templates` * `https://us1.pdfgeneratorapi.com/api/v4/workspaces` * `https://us1.pdfgeneratorapi.com/api/v4/templates/123123`  ## Editor PDF Generator API comes with a powerful drag & drop editor that allows to create any kind of document templates, from barcode labels to invoices, quotes and reports. You can find tutorials and videos from our [Support Portal](https://support.pdfgeneratorapi.com). * [Component specification](https://support.pdfgeneratorapi.com/en/category/components-1ffseaj/) * [Expression Language documentation](https://support.pdfgeneratorapi.com/en/category/expression-language-q203pa/) * [Frequently asked questions and answers](https://support.pdfgeneratorapi.com/en/category/qanda-1ov519d/)  ## Definitions  ### Organization Organization is a group of workspaces owned by your account.  ### Workspace Workspace contains templates. Each workspace has access to their own templates and organization default templates.  ### Master Workspace Master Workspace is the main/default workspace of your Organization. The Master Workspace identifier is the email you signed up with.  ### Default Template Default template is a template that is available for all workspaces by default. You can set the template access type under Page Setup. If template has \"Organization\" access then your users can use them from the \"New\" menu in the Editor.  ### Data Field Data Field is a placeholder for the specific data in your JSON data set. In this example JSON you can access the buyer name using Data Field `{paymentDetails::buyerName}`. The separator between depth levels is :: (two colons). When designing the template you don’t have to know every Data Field, our editor automatically extracts all the available fields from your data set and provides an easy way to insert them into the template. ``` {     \"documentNumber\": 1,     \"paymentDetails\": {         \"method\": \"Credit Card\",         \"buyerName\": \"John Smith\"     },     \"items\": [         {             \"id\": 1,             \"name\": \"Item one\"         }     ] } ```  ## Rate limiting Our API endpoints use IP-based rate limiting and allow you to make up to 2 requests per second and 60 requests per minute. If you make more requests, you will receive a response with HTTP code 429.  Response headers contain additional values:  | Header   | Description                    | |--------|--------------------------------| | X-RateLimit-Limit    | Maximum requests per minute                   | | X-RateLimit-Remaining    | The requests remaining in the current minute               | | Retry-After     | How many seconds you need to wait until you are allowed to make requests |  *  *  *  *  *  # Libraries and SDKs ## Postman Collection We have created a [Postman Collection](https://www.postman.com/pdfgeneratorapi/workspace/pdf-generator-api-public-workspace/overview) so you can easily test all the API endpoints without developing and code. You can download the collection [here](https://www.postman.com/pdfgeneratorapi/workspace/pdf-generator-api-public-workspace/collection/11578263-42fed446-af7e-4266-84e1-69e8c1752e93).  ## Client Libraries All our Client Libraries are auto-generated using [OpenAPI Generator](https://openapi-generator.tech/) which uses the OpenAPI v3 specification to automatically generate a client library in specific programming language.  * [PHP Client](https://github.com/pdfgeneratorapi/php-client) * [Java Client](https://github.com/pdfgeneratorapi/java-client) * [Ruby Client](https://github.com/pdfgeneratorapi/ruby-client) * [Python Client](https://github.com/pdfgeneratorapi/python-client) * [Javascript Client](https://github.com/pdfgeneratorapi/javascript-client)  We have validated the generated libraries, but let us know if you find any anomalies in the client code. *  *  *  *  *  # Authentication The PDF Generator API uses __JSON Web Tokens (JWT)__ to authenticate all API requests. These tokens offer a method to establish secure server-to-server authentication by transferring a compact JSON object with a signed payload of your account’s API Key and Secret. When authenticating to the PDF Generator API, a JWT should be generated uniquely by a __server-side application__ and included as a __Bearer Token__ in the header of each request.   <SecurityDefinitions />  ## Accessing your API Key and Secret You can find your __API Key__ and __API Secret__ from the __Account Settings__ page after you login to PDF Generator API [here](https://pdfgeneratorapi.com/login).  ## Creating a JWT JSON Web Tokens are composed of three sections: a header, a payload (containing a claim set), and a signature. The header and payload are JSON objects, which are serialized to UTF-8 bytes, then encoded using base64url encoding.  The JWT's header, payload, and signature are concatenated with periods (.). As a result, a JWT typically takes the following form: ``` {Base64url encoded header}.{Base64url encoded payload}.{Base64url encoded signature} ```  We recommend and support libraries provided on [jwt.io](https://jwt.io/). While other libraries can create JWT, these recommended libraries are the most robust.  ### Header Property `alg` defines which signing algorithm is being used. PDF Generator API users HS256. Property `typ` defines the type of token and it is always JWT. ``` {   \"alg\": \"HS256\",   \"typ\": \"JWT\" } ```  ### Payload The second part of the token is the payload, which contains the claims  or the pieces of information being passed about the user and any metadata required. It is mandatory to specify the following claims: * issuer (`iss`): Your API key * subject (`sub`): Workspace identifier * expiration time (`exp`): Timestamp (unix epoch time) until the token is valid. It is highly recommended to set the exp timestamp for a short period, i.e. a matter of seconds. This way, if a token is intercepted or shared, the token will only be valid for a short period of time.  ``` {   \"iss\": \"ad54aaff89ffdfeff178bb8a8f359b29fcb20edb56250b9f584aa2cb0162ed4a\",   \"sub\": \"demo.example@actualreports.com\",   \"exp\": 1586112639 } ```  ### Signature To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that. The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is. ``` HMACSHA256(     base64UrlEncode(header) + \".\" +     base64UrlEncode(payload),     API_SECRET) ```  ### Putting all together The output is three Base64-URL strings separated by dots. The following shows a JWT that has the previous header and payload encoded, and it is signed with a secret. ``` eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhZDU0YWFmZjg5ZmZkZmVmZjE3OGJiOGE4ZjM1OWIyOWZjYjIwZWRiNTYyNTBiOWY1ODRhYTJjYjAxNjJlZDRhIiwic3ViIjoiZGVtby5leGFtcGxlQGFjdHVhbHJlcG9ydHMuY29tIn0.SxO-H7UYYYsclS8RGWO1qf0z1cB1m73wF9FLl9RCc1Q  // Base64 encoded header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 // Base64 encoded payload: eyJpc3MiOiJhZDU0YWFmZjg5ZmZkZmVmZjE3OGJiOGE4ZjM1OWIyOWZjYjIwZWRiNTYyNTBiOWY1ODRhYTJjYjAxNjJlZDRhIiwic3ViIjoiZGVtby5leGFtcGxlQGFjdHVhbHJlcG9ydHMuY29tIn0 // Signature: SxO-H7UYYYsclS8RGWO1qf0z1cB1m73wF9FLl9RCc1Q ```  ## Temporary JWTs You can create a temporary token in [Account Settings](https://pdfgeneratorapi.com/account/organization) page after you login to PDF Generator API. The generated token uses your email address as the subject (`sub`) value and is valid for __15 minutes__. You can also use [jwt.io](https://jwt.io/) to generate test tokens for your API calls. These test tokens should never be used in production applications. *  *  *  *  *  # Error codes  | Code   | Description                    | |--------|--------------------------------| | 401    | Unauthorized                   | | 402    | Payment Required               | | 403    | Forbidden                      | | 404    | Not Found                      | | 422    | Unprocessable Entity           | | 429    | Too Many Requests              | | 500    | Internal Server Error          |  ## 401 Unauthorized | Description                                                             | |-------------------------------------------------------------------------| | Authentication failed: request expired                                  | | Authentication failed: workspace missing                                | | Authentication failed: key missing                                      | | Authentication failed: property 'iss' (issuer) missing in JWT           | | Authentication failed: property 'sub' (subject) missing in JWT          | | Authentication failed: property 'exp' (expiration time) missing in JWT  | | Authentication failed: incorrect signature                              |  ## 402 Payment Required | Description                                                             | |-------------------------------------------------------------------------| | Your account is suspended, please upgrade your account                  |  ## 403 Forbidden | Description                                                             | |-------------------------------------------------------------------------| | Your account has exceeded the monthly document generation limit.        | | Access not granted: You cannot delete master workspace via API          | | Access not granted: Template is not accessible by this organization     | | Your session has expired, please close and reopen the editor.           |  ## 404 Entity not found | Description                                                             | |-------------------------------------------------------------------------| | Entity not found                                                        | | Resource not found                                                      | | None of the templates is available for the workspace.                   |  ## 422 Unprocessable Entity | Description                                                             | |-------------------------------------------------------------------------| | Unable to parse JSON, please check formatting                           | | Required parameter missing                                              | | Required parameter missing: template definition not defined             | | Required parameter missing: template not defined                        |  ## 429 Too Many Requests | Description                                                             | |-------------------------------------------------------------------------| | You can make up to 2 requests per second and 60 requests per minute.   |  *  *  *  *  * 
 *
 * The version of the OpenAPI document: 4.0.4
 * Contact: support@pdfgeneratorapi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CopyTemplateRequest from '../model/CopyTemplateRequest';
import CreateTemplate201Response from '../model/CreateTemplate201Response';
import GetTemplateData200Response from '../model/GetTemplateData200Response';
import GetTemplates200Response from '../model/GetTemplates200Response';
import GetTemplates401Response from '../model/GetTemplates401Response';
import GetTemplates402Response from '../model/GetTemplates402Response';
import GetTemplates403Response from '../model/GetTemplates403Response';
import GetTemplates404Response from '../model/GetTemplates404Response';
import GetTemplates422Response from '../model/GetTemplates422Response';
import GetTemplates429Response from '../model/GetTemplates429Response';
import GetTemplates500Response from '../model/GetTemplates500Response';
import OpenEditor200Response from '../model/OpenEditor200Response';
import OpenEditorRequest from '../model/OpenEditorRequest';
import TemplateDefinitionNew from '../model/TemplateDefinitionNew';

/**
* Templates service.
* @module PDFGeneratorAPI/TemplatesApi
* @version 4.0.4
*/
export default class TemplatesApi {

    /**
    * Constructs a new TemplatesApi. 
    * @alias module:PDFGeneratorAPI/TemplatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the copyTemplate operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~copyTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateTemplate201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Copy template
     * Creates a copy of a template to the workspace specified in authentication parameters.
     * @param {Number} template_id Template unique identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/CopyTemplateRequest} [copy_template_request] 
     * @param {module:PDFGeneratorAPI/TemplatesApi~copyTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateTemplate201Response}
     */
    copyTemplate(template_id, opts, callback) {
      opts = opts || {};
      let postBody = opts['copy_template_request'];
      // verify the required parameter 'template_id' is set
      if (template_id === undefined || template_id === null) {
        throw new Error("Missing the required parameter 'template_id' when calling copyTemplate");
      }

      let pathParams = {
        'templateId': template_id
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
      let returnType = CreateTemplate201Response;
      return this.apiClient.callApi(
        '/templates/{templateId}/copy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createTemplate operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~createTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateTemplate201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create template
     * Creates a new template. If template configuration is not specified in the request body then an empty template is created. Template is placed to the workspace specified in authentication params. Template configuration must be sent in the request body.
     * @param {module:model/TemplateDefinitionNew} template_definition_new Template configuration
     * @param {module:PDFGeneratorAPI/TemplatesApi~createTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateTemplate201Response}
     */
    createTemplate(template_definition_new, callback) {
      let postBody = template_definition_new;
      // verify the required parameter 'template_definition_new' is set
      if (template_definition_new === undefined || template_definition_new === null) {
        throw new Error("Missing the required parameter 'template_definition_new' when calling createTemplate");
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
      let returnType = CreateTemplate201Response;
      return this.apiClient.callApi(
        '/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTemplate operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~deleteTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete template
     * Deletes the template from workspace
     * @param {Number} template_id Template unique identifier
     * @param {module:PDFGeneratorAPI/TemplatesApi~deleteTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteTemplate(template_id, callback) {
      let postBody = null;
      // verify the required parameter 'template_id' is set
      if (template_id === undefined || template_id === null) {
        throw new Error("Missing the required parameter 'template_id' when calling deleteTemplate");
      }

      let pathParams = {
        'templateId': template_id
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
        '/templates/{templateId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTemplate operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~getTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateTemplate201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get template
     * Returns template configuration
     * @param {Number} template_id Template unique identifier
     * @param {module:PDFGeneratorAPI/TemplatesApi~getTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateTemplate201Response}
     */
    getTemplate(template_id, callback) {
      let postBody = null;
      // verify the required parameter 'template_id' is set
      if (template_id === undefined || template_id === null) {
        throw new Error("Missing the required parameter 'template_id' when calling getTemplate");
      }

      let pathParams = {
        'templateId': template_id
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
      let returnType = CreateTemplate201Response;
      return this.apiClient.callApi(
        '/templates/{templateId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getTemplateData(template_id, callback) {
      let postBody = null;
      // verify the required parameter 'template_id' is set
      if (template_id === undefined || template_id === null) {
        throw new Error("Missing the required parameter 'template_id' when calling getTemplateData");
      }

      let pathParams = {
        'templateId': template_id
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
      let returnType = GetTemplateData200Response;
      return this.apiClient.callApi(
        '/templates/{templateId}/data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
     * @param {String} [name] Filter template by name
     * @param {String} [tags] Filter template by tags
     * @param {module:model/String} [access = '')] Filter template by access type. No values returns all templates. private - returns only private templates, organization - returns only organization templates.
     * @param {Number} [page = 1)] Pagination: page to return
     * @param {Number} [per_page = 15)] Pagination: How many records to return per page
     * @param {module:PDFGeneratorAPI/TemplatesApi~getTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTemplates200Response}
     */
    getTemplates(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'tags': opts['tags'],
        'access': opts['access'],
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
      let returnType = GetTemplates200Response;
      return this.apiClient.callApi(
        '/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    openEditor(template_id, open_editor_request, callback) {
      let postBody = open_editor_request;
      // verify the required parameter 'template_id' is set
      if (template_id === undefined || template_id === null) {
        throw new Error("Missing the required parameter 'template_id' when calling openEditor");
      }
      // verify the required parameter 'open_editor_request' is set
      if (open_editor_request === undefined || open_editor_request === null) {
        throw new Error("Missing the required parameter 'open_editor_request' when calling openEditor");
      }

      let pathParams = {
        'templateId': template_id
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
      let returnType = OpenEditor200Response;
      return this.apiClient.callApi(
        '/templates/{templateId}/editor', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTemplate operation.
     * @callback module:PDFGeneratorAPI/TemplatesApi~updateTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateTemplate201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update template
     * Updates template configuration. The template configuration for pages and layout must be complete as the entire configuration is replaced and not merged.
     * @param {Number} template_id Template unique identifier
     * @param {module:model/TemplateDefinitionNew} template_definition_new Template configuration
     * @param {module:PDFGeneratorAPI/TemplatesApi~updateTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateTemplate201Response}
     */
    updateTemplate(template_id, template_definition_new, callback) {
      let postBody = template_definition_new;
      // verify the required parameter 'template_id' is set
      if (template_id === undefined || template_id === null) {
        throw new Error("Missing the required parameter 'template_id' when calling updateTemplate");
      }
      // verify the required parameter 'template_definition_new' is set
      if (template_definition_new === undefined || template_definition_new === null) {
        throw new Error("Missing the required parameter 'template_definition_new' when calling updateTemplate");
      }

      let pathParams = {
        'templateId': template_id
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
      let returnType = CreateTemplate201Response;
      return this.apiClient.callApi(
        '/templates/{templateId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
