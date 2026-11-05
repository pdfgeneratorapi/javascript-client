/**
 * PDF Generator API
 * # Introduction [PDF Generator API](https://pdfgeneratorapi.com) allows you easily generate transactional PDF documents and reduce the development and support costs by enabling your users to create and manage their document templates using a browser-based drag-and-drop document editor.  The PDF Generator API features a web API architecture, allowing you to code in the language of your choice. This API supports the JSON media type, and uses UTF-8 character encoding.  ## Base URL The base URL for all the API endpoints is `https://us1.pdfgeneratorapi.com/api/v4`  For example * `https://us1.pdfgeneratorapi.com/api/v4/templates` * `https://us1.pdfgeneratorapi.com/api/v4/workspaces` * `https://us1.pdfgeneratorapi.com/api/v4/templates/123123`  ## Editor PDF Generator API comes with a powerful drag & drop editor that allows to create any kind of document templates, from barcode labels to invoices, quotes and reports. You can find tutorials and videos from our [Support Portal](https://support.pdfgeneratorapi.com). * [Component specification](https://support.pdfgeneratorapi.com/en/category/components-1ffseaj/) * [Expression Language documentation](https://support.pdfgeneratorapi.com/en/category/expression-language-q203pa/) * [Frequently asked questions and answers](https://support.pdfgeneratorapi.com/en/category/qanda-1ov519d/)  ## Definitions  ### Organization Organization is a group of workspaces owned by your account.  ### Workspace Workspace contains templates. Each workspace has access to their own templates and organization default templates.  ### Master Workspace Master Workspace is the main/default workspace of your Organization. The Master Workspace identifier is the email you signed up with.  ### Default Template Default template is a template that is available for all workspaces by default. You can set the template access type under Page Setup. If template has \"Organization\" access then your users can use them from the \"New\" menu in the Editor.  ### Data Field Data Field is a placeholder for the specific data in your JSON data set. In this example JSON you can access the buyer name using Data Field `{paymentDetails::buyerName}`. The separator between depth levels is :: (two colons). When designing the template you don’t have to know every Data Field, our editor automatically extracts all the available fields from your data set and provides an easy way to insert them into the template. ``` {     \"documentNumber\": 1,     \"paymentDetails\": {         \"method\": \"Credit Card\",         \"buyerName\": \"John Smith\"     },     \"items\": [         {             \"id\": 1,             \"name\": \"Item one\"         }     ] } ```  ## Rate limiting Our API endpoints use IP-based rate limiting and allow you to make up to 2 requests per second and 60 requests per minute. If you make more requests, you will receive a response with HTTP code 429.  Response headers contain additional values:  | Header   | Description                    | |--------|--------------------------------| | X-RateLimit-Limit    | Maximum requests per minute                   | | X-RateLimit-Remaining    | The requests remaining in the current minute               | | Retry-After     | How many seconds you need to wait until you are allowed to make requests |  *  *  *  *  *  # Libraries and SDKs ## Postman Collection We have created a [Postman Collection](https://www.postman.com/pdfgeneratorapi/workspace/pdf-generator-api-public-workspace/overview) so you can easily test all the API endpoints without developing and code.   ## Client Libraries All our Client Libraries are auto-generated using [OpenAPI Generator](https://openapi-generator.tech/) which uses the OpenAPI v3 specification to automatically generate a client library in specific programming language.  * [PHP Client](https://github.com/pdfgeneratorapi/php-client) * [Java Client](https://github.com/pdfgeneratorapi/java-client) * [Ruby Client](https://github.com/pdfgeneratorapi/ruby-client) * [Python Client](https://github.com/pdfgeneratorapi/python-client) * [Javascript Client](https://github.com/pdfgeneratorapi/javascript-client)  We have validated the generated libraries, but let us know if you find any anomalies in the client code.  ## Model Context Protocol (MCP) Server Integrate document generation directly into your AI agents and LLM applications using our official Model Context Protocol (MCP) Server.  The MCP server provides a standardized interface that allows AI assistants (like Claude Desktop and other MCP-compatible clients) to securely interact with the PDF Generator API. With it, your AI applications can automatically fetch workspaces, retrieve templates, merge data, and generate PDF documents on the fly.  [Get PDF Generator API MCP Server](https://github.com/pdfgeneratorapi/mcp-server) *  *  *  *  *   # Authentication The PDF Generator API uses __JSON Web Tokens (JWT)__ to authenticate all API requests. These tokens offer a method to establish secure server-to-server authentication by transferring a compact JSON object with a signed payload of your account’s API Key and Secret. When authenticating to the PDF Generator API, a JWT should be generated uniquely by a __server-side application__ and included as a __Bearer Token__ in the header of each request.   <SecurityDefinitions />  ## Accessing your API Key and Secret You can find your __API Key__ and __API Secret__ from the __Account Settings__ page after you login to PDF Generator API [here](https://pdfgeneratorapi.com/login).  ## Creating a JWT JSON Web Tokens are composed of three sections: a header, a payload (containing a claim set), and a signature. The header and payload are JSON objects, which are serialized to UTF-8 bytes, then encoded using base64url encoding.  The JWT's header, payload, and signature are concatenated with periods (.). As a result, a JWT typically takes the following form: ``` {Base64url encoded header}.{Base64url encoded payload}.{Base64url encoded signature} ```  We recommend and support libraries provided on [jwt.io](https://jwt.io/). While other libraries can create JWT, these recommended libraries are the most robust.  ### Header Property `alg` defines which signing algorithm is being used. PDF Generator API users HS256. Property `typ` defines the type of token and it is always JWT. ``` {   \"alg\": \"HS256\",   \"typ\": \"JWT\" } ```  ### Payload The second part of the token is the payload, which contains the claims  or the pieces of information being passed about the user and any metadata required. It is mandatory to specify the following claims: * issuer (`iss`): Your API key * subject (`sub`): Workspace identifier * expiration time (`exp`): Timestamp (unix epoch time) until the token is valid. It is highly recommended to set the exp timestamp for a short period, i.e. a matter of seconds. This way, if a token is intercepted or shared, the token will only be valid for a short period of time.  ``` {   \"iss\": \"ad54aaff89ffdfeff178bb8a8f359b29fcb20edb56250b9f584aa2cb0162ed4a\",   \"sub\": \"demo.example@actualreports.com\",   \"exp\": 1586112639 } ```  ### Payload for Partners Our partners can send their unique identifier (provided by us) in JWT's partner_id claim. If the `partner_id` value is specified in the JWT, the organization making the request is automatically connected to the partner account. * Partner ID (`partner_id`): Unique identifier provide by PDF Generator API team  ``` {   \"iss\": \"ad54aaff89ffdfeff178bb8a8f359b29fcb20edb56250b9f584aa2cb0162ed4a\",   \"sub\": \"demo.example@actualreports.com\",   \"partner_id\": \"my-partner-identifier\",   \"exp\": 1586112639 } ```  ### Signature To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that. The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is. ``` HMACSHA256(     base64UrlEncode(header) + \".\" +     base64UrlEncode(payload),     API_SECRET) ```  ### Putting all together The output is three Base64-URL strings separated by dots. The following shows a JWT that has the previous header and payload encoded, and it is signed with a secret. ``` eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhZDU0YWFmZjg5ZmZkZmVmZjE3OGJiOGE4ZjM1OWIyOWZjYjIwZWRiNTYyNTBiOWY1ODRhYTJjYjAxNjJlZDRhIiwic3ViIjoiZGVtby5leGFtcGxlQGFjdHVhbHJlcG9ydHMuY29tIn0.SxO-H7UYYYsclS8RGWO1qf0z1cB1m73wF9FLl9RCc1Q  // Base64 encoded header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 // Base64 encoded payload: eyJpc3MiOiJhZDU0YWFmZjg5ZmZkZmVmZjE3OGJiOGE4ZjM1OWIyOWZjYjIwZWRiNTYyNTBiOWY1ODRhYTJjYjAxNjJlZDRhIiwic3ViIjoiZGVtby5leGFtcGxlQGFjdHVhbHJlcG9ydHMuY29tIn0 // Signature: SxO-H7UYYYsclS8RGWO1qf0z1cB1m73wF9FLl9RCc1Q ```  ## Temporary JWTs You can create a temporary token in [Account Settings](https://pdfgeneratorapi.com/account/organization) page after you login to PDF Generator API. The generated token uses your email address as the subject (`sub`) value and is valid for __15 minutes__. You can also use [jwt.io](https://jwt.io/) to generate test tokens for your API calls. These test tokens should never be used in production applications. *  *  *  *  *  # Error codes  Every error response is a JSON object with a `message` string. Request validation failures (422) also include an `errors` object keyed by the field that failed.  ```json {   \"message\": \"The identifier field is required.\",   \"errors\": {     \"identifier\": [\"The identifier field is required.\"]   } } ```  | Code   | Description                    | |--------|--------------------------------| | 400    | Bad Request                    | | 401    | Unauthorized                   | | 402    | Payment Required               | | 403    | Forbidden                      | | 404    | Not Found                      | | 405    | Method Not Allowed             | | 409    | Conflict                       | | 410    | Gone                           | | 422    | Unprocessable Entity           | | 429    | Too Many Requests              | | 500    | Internal Server Error          | | 503    | Service Unavailable            |  ## 401 Unauthorized | Description                                                                       | |-----------------------------------------------------------------------------------| | Authentication failed: JWT Token missing.                                         | | Authentication failed: Malformed JWT Token.                                       | | Authentication failed: Expired JWT Token.                                         | | Authentication failed: Invalid workspace.                                         | | Authentication failed: Invalid organization.                                      | | Authentication failed: This application no longer has access to the workspace.   | | Authentication failed: The sub field is required. (also `iss` and `exp`)          |  ## 402 Payment Required | Description                                                                       | |-----------------------------------------------------------------------------------| | Your account is suspended, please upgrade your account or contact support@pdfgeneratorapi.com. |  ## 403 Forbidden | Description                                                                       | |-----------------------------------------------------------------------------------| | You don't have permission to access this content. Please get in touch with your organization administrator to update your access permissions. | | This application was not granted permission for this request.                    | | Deleting own user is not allowed.                                                 | | Deleting organization owner is not allowed.                                       |  ## 404 Not Found | Description                                                                       | |-----------------------------------------------------------------------------------| | Entity not found.                                                                 | | Route not found.                                                                  | | Workspace doesn’t have access to read the template.                               |  ## 422 Unprocessable Entity | Description                                                                       | |-----------------------------------------------------------------------------------| | Unable to parse JSON, please check formatting.                                    | | Template id should be a numeric value.                                            | | The per page must be at least 1. (with `errors.per_page`)                         |  ## 429 Too Many Requests | Description                                                                       | |-----------------------------------------------------------------------------------| | Per-second rate limit exceeded. Please slow down your requests.                   | | Per-minute rate limit exceeded. Please try again in a minute.                     | | Global per-second rate limit exceeded. Please slow down your requests.            | | Global per-minute rate limit exceeded. Please try again in a minute.              |  *  *  *  *  * 
 *
 * The version of the OpenAPI document: 4.0.34
 * Contact: support@pdfgeneratorapi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateWorkspaceRequest from '../model/CreateWorkspaceRequest';
import Error from '../model/Error';
import InlineObject5 from '../model/InlineObject5';
import InlineObject7 from '../model/InlineObject7';
import ValidationError from '../model/ValidationError';

/**
* Workspaces service.
* @module PDFGeneratorAPI/WorkspacesApi
* @version 8.0.34
*/
export default class WorkspacesApi {

    /**
    * Constructs a new WorkspacesApi. 
    * @alias module:PDFGeneratorAPI/WorkspacesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createWorkspace operation.
     * @callback module:PDFGeneratorAPI/WorkspacesApi~createWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineObject7} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create workspace
     * Creates a regular workspace with identifier specified in the request.
     * @param {module:model/CreateWorkspaceRequest} create_workspace_request 
     * @param {module:PDFGeneratorAPI/WorkspacesApi~createWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineObject7}
     */
    createWorkspace(create_workspace_request, callback) {
      let postBody = create_workspace_request;
      // verify the required parameter 'create_workspace_request' is set
      if (create_workspace_request === undefined || create_workspace_request === null) {
        throw new Error("Missing the required parameter 'create_workspace_request' when calling createWorkspace");
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
      let returnType = InlineObject7;
      return this.apiClient.callApi(
        '/workspaces', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWorkspace operation.
     * @callback module:PDFGeneratorAPI/WorkspacesApi~deleteWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete workspace
     * Delete workspace. Only regular workspaces can be deleted.
     * @param {String} workspace_identifier Workspace identifier
     * @param {module:PDFGeneratorAPI/WorkspacesApi~deleteWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteWorkspace(workspace_identifier, callback) {
      let postBody = null;
      // verify the required parameter 'workspace_identifier' is set
      if (workspace_identifier === undefined || workspace_identifier === null) {
        throw new Error("Missing the required parameter 'workspace_identifier' when calling deleteWorkspace");
      }

      let pathParams = {
        'workspaceIdentifier': workspace_identifier
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
        '/workspaces/{workspaceIdentifier}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkspace operation.
     * @callback module:PDFGeneratorAPI/WorkspacesApi~getWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineObject7} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get workspace
     * Returns workspace information for the workspace identifier specified in the request.
     * @param {String} workspace_identifier Workspace identifier
     * @param {module:PDFGeneratorAPI/WorkspacesApi~getWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineObject7}
     */
    getWorkspace(workspace_identifier, callback) {
      let postBody = null;
      // verify the required parameter 'workspace_identifier' is set
      if (workspace_identifier === undefined || workspace_identifier === null) {
        throw new Error("Missing the required parameter 'workspace_identifier' when calling getWorkspace");
      }

      let pathParams = {
        'workspaceIdentifier': workspace_identifier
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
      let returnType = InlineObject7;
      return this.apiClient.callApi(
        '/workspaces/{workspaceIdentifier}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkspaces operation.
     * @callback module:PDFGeneratorAPI/WorkspacesApi~getWorkspacesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineObject5} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get workspaces
     * Returns all workspaces in the organization
     * @param {Object} opts Optional parameters
     * @param {Number} [page = 1)] Pagination: page to return
     * @param {Number} [per_page = 15)] Pagination: How many records to return per page
     * @param {module:model/String} [order_by = 'id')] Field to sort the workspaces by
     * @param {module:model/String} [order_direction = 'desc')] Sort direction
     * @param {module:model/Number} [activated] Returns only active (`1`) or deactivated (`0`) workspaces
     * @param {String} [search] Returns workspaces whose ID, name or identifier contains the search value
     * @param {module:PDFGeneratorAPI/WorkspacesApi~getWorkspacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineObject5}
     */
    getWorkspaces(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'per_page': opts['per_page'],
        'order_by': opts['order_by'],
        'order_direction': opts['order_direction'],
        'activated': opts['activated'],
        'search': opts['search']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JSONWebTokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineObject5;
      return this.apiClient.callApi(
        '/workspaces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
