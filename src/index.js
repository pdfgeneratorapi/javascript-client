/**
 * PDF Generator API
 * # Introduction [PDF Generator API](https://pdfgeneratorapi.com) allows you easily generate transactional PDF documents and reduce the development and support costs by enabling your users to create and manage their document templates using a browser-based drag-and-drop document editor.  The PDF Generator API features a web API architecture, allowing you to code in the language of your choice. This API supports the JSON media type, and uses UTF-8 character encoding.  You can find our previous API documentation page with references to Simple and Signature authentication [here](https://docs.pdfgeneratorapi.com/legacy).  ## Base URL The base URL for all the API endpoints is `https://us1.pdfgeneratorapi.com/api/v3`  For example * `https://us1.pdfgeneratorapi.com/api/v3/templates` * `https://us1.pdfgeneratorapi.com/api/v3/workspaces` * `https://us1.pdfgeneratorapi.com/api/v3/templates/123123`  ## Editor PDF Generator API comes with a powerful drag & drop editor that allows to create any kind of document templates, from barcode labels to invoices, quotes and reports. You can find tutorials and videos from our [Support Portal](https://support.pdfgeneratorapi.com). * [Component specification](https://support.pdfgeneratorapi.com/en/category/components-1ffseaj/) * [Expression Language documentation](https://support.pdfgeneratorapi.com/en/category/expression-language-q203pa/) * [Frequently asked questions and answers](https://support.pdfgeneratorapi.com/en/category/qanda-1ov519d/)  ## Definitions  ### Organization Organization is a group of workspaces owned by your account.  ### Workspace Workspace contains templates. Each workspace has access to their own templates and organization default templates.  ### Master Workspace Master Workspace is the main/default workspace of your Organization. The Master Workspace identifier is the email you signed up with.  ### Default Template Default template is a template that is available for all workspaces by default. You can set the template access type under Page Setup. If template has \"Organization\" access then your users can use them from the \"New\" menu in the Editor.  ### Data Field Data Field is a placeholder for the specific data in your JSON data set. In this example JSON you can access the buyer name using Data Field `{paymentDetails::buyerName}`. The separator between depth levels is :: (two colons). When designing the template you don’t have to know every Data Field, our editor automatically extracts all the available fields from your data set and provides an easy way to insert them into the template. ``` {     \"documentNumber\": 1,     \"paymentDetails\": {         \"method\": \"Credit Card\",         \"buyerName\": \"John Smith\"     },     \"items\": [         {             \"id\": 1,             \"name\": \"Item one\"         }     ] } ```  ## Rate limiting Our API endpoints use IP-based rate limiting and allow you to make up to 30 requests per second and 240 requests per minute. If you make more requests, you will receive a response with HTTP code 429.  *  *  *  *  * # Authentication The PDF Generator API uses __JSON Web Tokens (JWT)__ to authenticate all API requests. These tokens offer a method to establish secure server-to-server authentication by transferring a compact JSON object with a signed payload of your account’s API Key and Secret. When authenticating to the PDF Generator API, a JWT should be generated uniquely by a __server-side application__ and included as a __Bearer Token__ in the header of each request.  ## Legacy Simple and Signature authentication You can find our legacy documentation for Simple and Signature authentication [here](https://docs.pdfgeneratorapi.com/legacy).  <SecurityDefinitions />  ## Accessing your API Key and Secret You can find your __API Key__ and __API Secret__ from the __Account Settings__ page after you login to PDF Generator API [here](https://pdfgeneratorapi.com/login).  ## Creating a JWT JSON Web Tokens are composed of three sections: a header, a payload (containing a claim set), and a signature. The header and payload are JSON objects, which are serialized to UTF-8 bytes, then encoded using base64url encoding.  The JWT's header, payload, and signature are concatenated with periods (.). As a result, a JWT typically takes the following form: ``` {Base64url encoded header}.{Base64url encoded payload}.{Base64url encoded signature} ```  We recommend and support libraries provided on [jwt.io](https://jwt.io/). While other libraries can create JWT, these recommended libraries are the most robust.  ### Header Property `alg` defines which signing algorithm is being used. PDF Generator API users HS256. Property `typ` defines the type of token and it is always JWT. ``` {   \"alg\": \"HS256\",   \"typ\": \"JWT\" } ```  ### Payload The second part of the token is the payload, which contains the claims  or the pieces of information being passed about the user and any metadata required. It is mandatory to specify the following claims: * issuer (`iss`): Your API key * subject (`sub`): Workspace identifier * expiration time (`exp`): Timestamp (unix epoch time) until the token is valid. It is highly recommended to set the exp timestamp for a short period, i.e. a matter of seconds. This way, if a token is intercepted or shared, the token will only be valid for a short period of time.  ``` {   \"iss\": \"ad54aaff89ffdfeff178bb8a8f359b29fcb20edb56250b9f584aa2cb0162ed4a\",   \"sub\": \"demo.example@actualreports.com\",   \"exp\": 1586112639 } ```  ### Signature To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that. The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is. ``` HMACSHA256(     base64UrlEncode(header) + \".\" +     base64UrlEncode(payload),     API_SECRET) ```  ### Putting all together The output is three Base64-URL strings separated by dots. The following shows a JWT that has the previous header and payload encoded, and it is signed with a secret. ``` eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhZDU0YWFmZjg5ZmZkZmVmZjE3OGJiOGE4ZjM1OWIyOWZjYjIwZWRiNTYyNTBiOWY1ODRhYTJjYjAxNjJlZDRhIiwic3ViIjoiZGVtby5leGFtcGxlQGFjdHVhbHJlcG9ydHMuY29tIn0.SxO-H7UYYYsclS8RGWO1qf0z1cB1m73wF9FLl9RCc1Q  // Base64 encoded header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 // Base64 encoded payload: eyJpc3MiOiJhZDU0YWFmZjg5ZmZkZmVmZjE3OGJiOGE4ZjM1OWIyOWZjYjIwZWRiNTYyNTBiOWY1ODRhYTJjYjAxNjJlZDRhIiwic3ViIjoiZGVtby5leGFtcGxlQGFjdHVhbHJlcG9ydHMuY29tIn0 // Signature: SxO-H7UYYYsclS8RGWO1qf0z1cB1m73wF9FLl9RCc1Q ```  ## Testing with JWTs You can create a temporary token in [Account Settings](https://pdfgeneratorapi.com/account/organization) page after you login to PDF Generator API. The generated token uses your email address as the subject (`sub`) value and is valid for __5 minutes__. You can also use [jwt.io](https://jwt.io/) to generate test tokens for your API calls. These test tokens should never be used in production applications. *  *  *  *  *  # Libraries and SDKs ## Postman Collection We have created a [Postman](https://www.postman.com) Collection so you can easily test all the API endpoints wihtout developing and code. You can download the collection [here](https://app.getpostman.com/run-collection/329f09618ec8a957dbc4) or just click the button below.  [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/329f09618ec8a957dbc4)  ## Client Libraries All our Client Libraries are auto-generated using [OpenAPI Generator](https://openapi-generator.tech/) which uses the OpenAPI v3 specification to automatically generate a client library in specific programming language.  * [PHP Client](https://github.com/pdfgeneratorapi/php-client) * [Java Client](https://github.com/pdfgeneratorapi/java-client) * [Ruby Client](https://github.com/pdfgeneratorapi/ruby-client) * [Python Client](https://github.com/pdfgeneratorapi/python-client) * [Javascript Client](https://github.com/pdfgeneratorapi/javascript-client)  We have validated the generated libraries, but let us know if you find any anomalies in the client code. *  *  *  *  *  # Error codes  | Code   | Description                    | |--------|--------------------------------| | 401    | Unauthorized                   | | 402    | Payment Required               | | 403    | Forbidden                      | | 404    | Not Found                      | | 422    | Unprocessable Entity           | | 429    | Too Many Requests              | | 500    | Internal Server Error          |  ## 401 Unauthorized | Description                                                             | |-------------------------------------------------------------------------| | Authentication failed: request expired                                  | | Authentication failed: workspace missing                                | | Authentication failed: key missing                                      | | Authentication failed: property 'iss' (issuer) missing in JWT           | | Authentication failed: property 'sub' (subject) missing in JWT          | | Authentication failed: property 'exp' (expiration time) missing in JWT  | | Authentication failed: incorrect signature                              |  ## 402 Payment Required | Description                                                             | |-------------------------------------------------------------------------| | Your account is suspended, please upgrade your account                  |  ## 403 Forbidden | Description                                                             | |-------------------------------------------------------------------------| | Your account has exceeded the monthly document generation limit.        | | Access not granted: You cannot delete master workspace via API          | | Access not granted: Template is not accessible by this organization     | | Your session has expired, please close and reopen the editor.           |  ## 404 Entity not found | Description                                                             | |-------------------------------------------------------------------------| | Entity not found                                                        | | Resource not found                                                      | | None of the templates is available for the workspace.                   |  ## 422 Unprocessable Entity | Description                                                             | |-------------------------------------------------------------------------| | Unable to parse JSON, please check formatting                           | | Required parameter missing                                              | | Required parameter missing: template definition not defined             | | Required parameter missing: template not defined                        |  ## 429 Too Many Requests | Description                                                             | |-------------------------------------------------------------------------| | You can make up to 5 requests per second and 120 requests per minute.   | 
 *
 * The version of the OpenAPI document: 3.1.1
 * Contact: support@pdfgeneratorapi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import BatchDataInner from './model/BatchDataInner';
import Component from './model/Component';
import CreateTemplate200Response from './model/CreateTemplate200Response';
import DeleteTemplate200Response from './model/DeleteTemplate200Response';
import DeleteTemplate200ResponseResponse from './model/DeleteTemplate200ResponseResponse';
import GetEditorUrl200Response from './model/GetEditorUrl200Response';
import GetTemplates200Response from './model/GetTemplates200Response';
import GetTemplates401Response from './model/GetTemplates401Response';
import GetTemplates402Response from './model/GetTemplates402Response';
import GetTemplates403Response from './model/GetTemplates403Response';
import GetTemplates404Response from './model/GetTemplates404Response';
import GetTemplates422Response from './model/GetTemplates422Response';
import GetTemplates429Response from './model/GetTemplates429Response';
import GetTemplates500Response from './model/GetTemplates500Response';
import GetWorkspace200Response from './model/GetWorkspace200Response';
import MergeTemplate200Response from './model/MergeTemplate200Response';
import MergeTemplate200ResponseMeta from './model/MergeTemplate200ResponseMeta';
import Template from './model/Template';
import TemplateDefinition from './model/TemplateDefinition';
import TemplateDefinitionDataSettings from './model/TemplateDefinitionDataSettings';
import TemplateDefinitionEditor from './model/TemplateDefinitionEditor';
import TemplateDefinitionNew from './model/TemplateDefinitionNew';
import TemplateDefinitionNewLayout from './model/TemplateDefinitionNewLayout';
import TemplateDefinitionNewLayoutMargins from './model/TemplateDefinitionNewLayoutMargins';
import TemplateDefinitionNewLayoutRepeatLayout from './model/TemplateDefinitionNewLayoutRepeatLayout';
import TemplateDefinitionNewPagesInner from './model/TemplateDefinitionNewPagesInner';
import TemplateDefinitionNewPagesInnerMargins from './model/TemplateDefinitionNewPagesInnerMargins';
import Workspace from './model/Workspace';
import DocumentsApi from './PDFGeneratorAPI/DocumentsApi';
import TemplatesApi from './PDFGeneratorAPI/TemplatesApi';
import WorkspacesApi from './PDFGeneratorAPI/WorkspacesApi';


/**
* Javascript wrapper for PDF Generator API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var PDFGeneratorAPI = require('index'); // See note below*.
* var xxxSvc = new PDFGeneratorAPI.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new PDFGeneratorAPI.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new PDFGeneratorAPI.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new PDFGeneratorAPI.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 3.1.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The BatchDataInner model constructor.
     * @property {module:model/BatchDataInner}
     */
    BatchDataInner,

    /**
     * The Component model constructor.
     * @property {module:model/Component}
     */
    Component,

    /**
     * The CreateTemplate200Response model constructor.
     * @property {module:model/CreateTemplate200Response}
     */
    CreateTemplate200Response,

    /**
     * The DeleteTemplate200Response model constructor.
     * @property {module:model/DeleteTemplate200Response}
     */
    DeleteTemplate200Response,

    /**
     * The DeleteTemplate200ResponseResponse model constructor.
     * @property {module:model/DeleteTemplate200ResponseResponse}
     */
    DeleteTemplate200ResponseResponse,

    /**
     * The GetEditorUrl200Response model constructor.
     * @property {module:model/GetEditorUrl200Response}
     */
    GetEditorUrl200Response,

    /**
     * The GetTemplates200Response model constructor.
     * @property {module:model/GetTemplates200Response}
     */
    GetTemplates200Response,

    /**
     * The GetTemplates401Response model constructor.
     * @property {module:model/GetTemplates401Response}
     */
    GetTemplates401Response,

    /**
     * The GetTemplates402Response model constructor.
     * @property {module:model/GetTemplates402Response}
     */
    GetTemplates402Response,

    /**
     * The GetTemplates403Response model constructor.
     * @property {module:model/GetTemplates403Response}
     */
    GetTemplates403Response,

    /**
     * The GetTemplates404Response model constructor.
     * @property {module:model/GetTemplates404Response}
     */
    GetTemplates404Response,

    /**
     * The GetTemplates422Response model constructor.
     * @property {module:model/GetTemplates422Response}
     */
    GetTemplates422Response,

    /**
     * The GetTemplates429Response model constructor.
     * @property {module:model/GetTemplates429Response}
     */
    GetTemplates429Response,

    /**
     * The GetTemplates500Response model constructor.
     * @property {module:model/GetTemplates500Response}
     */
    GetTemplates500Response,

    /**
     * The GetWorkspace200Response model constructor.
     * @property {module:model/GetWorkspace200Response}
     */
    GetWorkspace200Response,

    /**
     * The MergeTemplate200Response model constructor.
     * @property {module:model/MergeTemplate200Response}
     */
    MergeTemplate200Response,

    /**
     * The MergeTemplate200ResponseMeta model constructor.
     * @property {module:model/MergeTemplate200ResponseMeta}
     */
    MergeTemplate200ResponseMeta,

    /**
     * The Template model constructor.
     * @property {module:model/Template}
     */
    Template,

    /**
     * The TemplateDefinition model constructor.
     * @property {module:model/TemplateDefinition}
     */
    TemplateDefinition,

    /**
     * The TemplateDefinitionDataSettings model constructor.
     * @property {module:model/TemplateDefinitionDataSettings}
     */
    TemplateDefinitionDataSettings,

    /**
     * The TemplateDefinitionEditor model constructor.
     * @property {module:model/TemplateDefinitionEditor}
     */
    TemplateDefinitionEditor,

    /**
     * The TemplateDefinitionNew model constructor.
     * @property {module:model/TemplateDefinitionNew}
     */
    TemplateDefinitionNew,

    /**
     * The TemplateDefinitionNewLayout model constructor.
     * @property {module:model/TemplateDefinitionNewLayout}
     */
    TemplateDefinitionNewLayout,

    /**
     * The TemplateDefinitionNewLayoutMargins model constructor.
     * @property {module:model/TemplateDefinitionNewLayoutMargins}
     */
    TemplateDefinitionNewLayoutMargins,

    /**
     * The TemplateDefinitionNewLayoutRepeatLayout model constructor.
     * @property {module:model/TemplateDefinitionNewLayoutRepeatLayout}
     */
    TemplateDefinitionNewLayoutRepeatLayout,

    /**
     * The TemplateDefinitionNewPagesInner model constructor.
     * @property {module:model/TemplateDefinitionNewPagesInner}
     */
    TemplateDefinitionNewPagesInner,

    /**
     * The TemplateDefinitionNewPagesInnerMargins model constructor.
     * @property {module:model/TemplateDefinitionNewPagesInnerMargins}
     */
    TemplateDefinitionNewPagesInnerMargins,

    /**
     * The Workspace model constructor.
     * @property {module:model/Workspace}
     */
    Workspace,

    /**
    * The DocumentsApi service constructor.
    * @property {module:PDFGeneratorAPI/DocumentsApi}
    */
    DocumentsApi,

    /**
    * The TemplatesApi service constructor.
    * @property {module:PDFGeneratorAPI/TemplatesApi}
    */
    TemplatesApi,

    /**
    * The WorkspacesApi service constructor.
    * @property {module:PDFGeneratorAPI/WorkspacesApi}
    */
    WorkspacesApi
};
