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


import ApiClient from './ApiClient';
import AccessibilityOption from './model/AccessibilityOption';
import AddWatermarkRequest from './model/AddWatermarkRequest';
import AsyncOutputParam from './model/AsyncOutputParam';
import CallbackParam from './model/CallbackParam';
import Component from './model/Component';
import ConvertHTML2PDFRequest from './model/ConvertHTML2PDFRequest';
import ConvertPDF2ImageRequest from './model/ConvertPDF2ImageRequest';
import ConvertURL2PDFRequest from './model/ConvertURL2PDFRequest';
import CopyTemplateRequest from './model/CopyTemplateRequest';
import CreateEInvoiceRequest from './model/CreateEInvoiceRequest';
import CreateFacturXEInvoiceRequest from './model/CreateFacturXEInvoiceRequest';
import CreateFacturXEInvoiceRequestTemplate from './model/CreateFacturXEInvoiceRequestTemplate';
import CreateWorkspaceRequest from './model/CreateWorkspaceRequest';
import DataBatchInner from './model/DataBatchInner';
import Document from './model/Document';
import EncryptAndDecryptBase64 from './model/EncryptAndDecryptBase64';
import EncryptAndDecryptUrl from './model/EncryptAndDecryptUrl';
import EncryptDocumentRequest from './model/EncryptDocumentRequest';
import ExtractFormFieldsRequest from './model/ExtractFormFieldsRequest';
import FillFormFieldsRequest from './model/FillFormFieldsRequest';
import FormActionDownload from './model/FormActionDownload';
import FormActionSend from './model/FormActionSend';
import FormActionSendSendDocument from './model/FormActionSendSendDocument';
import FormActionSendSendDocumentHeadersInner from './model/FormActionSendSendDocumentHeadersInner';
import FormActionStore from './model/FormActionStore';
import FormConfiguration from './model/FormConfiguration';
import FormConfigurationNew from './model/FormConfigurationNew';
import FormConfigurationNewActionsInner from './model/FormConfigurationNewActionsInner';
import FormFieldsBase64 from './model/FormFieldsBase64';
import FormFieldsInner from './model/FormFieldsInner';
import FormFieldsUrl from './model/FormFieldsUrl';
import FormFillBase64 from './model/FormFillBase64';
import FormFillUrl from './model/FormFillUrl';
import FormatParam from './model/FormatParam';
import GenerateDocumentAsynchronousRequest from './model/GenerateDocumentAsynchronousRequest';
import GenerateDocumentBatchAsynchronousRequest from './model/GenerateDocumentBatchAsynchronousRequest';
import GenerateDocumentBatchRequest from './model/GenerateDocumentBatchRequest';
import GenerateDocumentRequest from './model/GenerateDocumentRequest';
import GenerateQRCode201Response from './model/GenerateQRCode201Response';
import GenerateQRCode201ResponseMeta from './model/GenerateQRCode201ResponseMeta';
import GenerateQRCodeRequest from './model/GenerateQRCodeRequest';
import GetStatus200Response from './model/GetStatus200Response';
import GetTemplateLibrary200Response from './model/GetTemplateLibrary200Response';
import GetTemplateVersion422Response from './model/GetTemplateVersion422Response';
import ImportFormBase64 from './model/ImportFormBase64';
import ImportFormRequest from './model/ImportFormRequest';
import ImportFormUrl from './model/ImportFormUrl';
import ImportTemplateBase64 from './model/ImportTemplateBase64';
import ImportTemplateRequest from './model/ImportTemplateRequest';
import ImportTemplateUrl from './model/ImportTemplateUrl';
import ImportTemplateUrlTemplate from './model/ImportTemplateUrlTemplate';
import InlineObject from './model/InlineObject';
import InlineObject1 from './model/InlineObject1';
import InlineObject10 from './model/InlineObject10';
import InlineObject10Meta from './model/InlineObject10Meta';
import InlineObject11 from './model/InlineObject11';
import InlineObject11Meta from './model/InlineObject11Meta';
import InlineObject12 from './model/InlineObject12';
import InlineObject12Meta from './model/InlineObject12Meta';
import InlineObject12MetaStats from './model/InlineObject12MetaStats';
import InlineObject13 from './model/InlineObject13';
import InlineObject14 from './model/InlineObject14';
import InlineObject14ResponseValue from './model/InlineObject14ResponseValue';
import InlineObject14ResponseValueDefault from './model/InlineObject14ResponseValueDefault';
import InlineObject14ResponseValueValue from './model/InlineObject14ResponseValueValue';
import InlineObject15 from './model/InlineObject15';
import InlineObject16 from './model/InlineObject16';
import InlineObject17 from './model/InlineObject17';
import InlineObject18 from './model/InlineObject18';
import InlineObject18Meta from './model/InlineObject18Meta';
import InlineObject19 from './model/InlineObject19';
import InlineObject1Response from './model/InlineObject1Response';
import InlineObject2 from './model/InlineObject2';
import InlineObject20 from './model/InlineObject20';
import InlineObject20Response from './model/InlineObject20Response';
import InlineObject21 from './model/InlineObject21';
import InlineObject22 from './model/InlineObject22';
import InlineObject23 from './model/InlineObject23';
import InlineObject24 from './model/InlineObject24';
import InlineObject25 from './model/InlineObject25';
import InlineObject26 from './model/InlineObject26';
import InlineObject27 from './model/InlineObject27';
import InlineObject3 from './model/InlineObject3';
import InlineObject4 from './model/InlineObject4';
import InlineObject5 from './model/InlineObject5';
import InlineObject6 from './model/InlineObject6';
import InlineObject7 from './model/InlineObject7';
import InlineObject7Response from './model/InlineObject7Response';
import InlineObject8 from './model/InlineObject8';
import InlineObject9 from './model/InlineObject9';
import InlineObject9Meta from './model/InlineObject9Meta';
import InlineObjectMeta from './model/InlineObjectMeta';
import KeyFieldParam from './model/KeyFieldParam';
import MakeAccessibleBase64 from './model/MakeAccessibleBase64';
import MakeAccessibleRequest from './model/MakeAccessibleRequest';
import MakeAccessibleUrl from './model/MakeAccessibleUrl';
import MetadataParam from './model/MetadataParam';
import OpenEditorRequest from './model/OpenEditorRequest';
import OpenEditorRequestData from './model/OpenEditorRequestData';
import OptimizeBase64 from './model/OptimizeBase64';
import OptimizeDocumentRequest from './model/OptimizeDocumentRequest';
import OptimizeUrl from './model/OptimizeUrl';
import OutputParam from './model/OutputParam';
import PaginationMeta from './model/PaginationMeta';
import PromoteTemplateVersion200Response from './model/PromoteTemplateVersion200Response';
import PublicTemplateLibraryItem from './model/PublicTemplateLibraryItem';
import StatusParam from './model/StatusParam';
import StoreDocumentRequest from './model/StoreDocumentRequest';
import Template from './model/Template';
import TemplateDefinition from './model/TemplateDefinition';
import TemplateDefinitionDataSettings from './model/TemplateDefinitionDataSettings';
import TemplateDefinitionEditor from './model/TemplateDefinitionEditor';
import TemplateDefinitionNew from './model/TemplateDefinitionNew';
import TemplateDefinitionNewDataSettings from './model/TemplateDefinitionNewDataSettings';
import TemplateDefinitionNewEditor from './model/TemplateDefinitionNewEditor';
import TemplateDefinitionNewLayout from './model/TemplateDefinitionNewLayout';
import TemplateDefinitionNewLayoutMargins from './model/TemplateDefinitionNewLayoutMargins';
import TemplateDefinitionNewLayoutRepeatLayout from './model/TemplateDefinitionNewLayoutRepeatLayout';
import TemplateDefinitionNewPagesInner from './model/TemplateDefinitionNewPagesInner';
import TemplateDefinitionNewPagesInnerMargins from './model/TemplateDefinitionNewPagesInnerMargins';
import TemplateDefinitionPagesInner from './model/TemplateDefinitionPagesInner';
import TemplateParam from './model/TemplateParam';
import TemplateParamData from './model/TemplateParamData';
import TemplateParamId from './model/TemplateParamId';
import TemplateVersion from './model/TemplateVersion';
import TemplateVersionCollection from './model/TemplateVersionCollection';
import TemplateVersionCollectionMeta from './model/TemplateVersionCollectionMeta';
import WatermarkBase64 from './model/WatermarkBase64';
import WatermarkFileUrlWatermark from './model/WatermarkFileUrlWatermark';
import WatermarkImage from './model/WatermarkImage';
import WatermarkImageContentBase64 from './model/WatermarkImageContentBase64';
import WatermarkImageContentUrl from './model/WatermarkImageContentUrl';
import WatermarkPosition from './model/WatermarkPosition';
import WatermarkText from './model/WatermarkText';
import Workspace from './model/Workspace';
import AssetsApi from './PDFGeneratorAPI/AssetsApi';
import ConversionApi from './PDFGeneratorAPI/ConversionApi';
import DocumentsApi from './PDFGeneratorAPI/DocumentsApi';
import EInvoicesApi from './PDFGeneratorAPI/EInvoicesApi';
import FormsApi from './PDFGeneratorAPI/FormsApi';
import MiscApi from './PDFGeneratorAPI/MiscApi';
import ServicesApi from './PDFGeneratorAPI/ServicesApi';
import TemplateLibraryApi from './PDFGeneratorAPI/TemplateLibraryApi';
import TemplateVersionsApi from './PDFGeneratorAPI/TemplateVersionsApi';
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
* @version 8.0.25
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AccessibilityOption model constructor.
     * @property {module:model/AccessibilityOption}
     */
    AccessibilityOption,

    /**
     * The AddWatermarkRequest model constructor.
     * @property {module:model/AddWatermarkRequest}
     */
    AddWatermarkRequest,

    /**
     * The AsyncOutputParam model constructor.
     * @property {module:model/AsyncOutputParam}
     */
    AsyncOutputParam,

    /**
     * The CallbackParam model constructor.
     * @property {module:model/CallbackParam}
     */
    CallbackParam,

    /**
     * The Component model constructor.
     * @property {module:model/Component}
     */
    Component,

    /**
     * The ConvertHTML2PDFRequest model constructor.
     * @property {module:model/ConvertHTML2PDFRequest}
     */
    ConvertHTML2PDFRequest,

    /**
     * The ConvertPDF2ImageRequest model constructor.
     * @property {module:model/ConvertPDF2ImageRequest}
     */
    ConvertPDF2ImageRequest,

    /**
     * The ConvertURL2PDFRequest model constructor.
     * @property {module:model/ConvertURL2PDFRequest}
     */
    ConvertURL2PDFRequest,

    /**
     * The CopyTemplateRequest model constructor.
     * @property {module:model/CopyTemplateRequest}
     */
    CopyTemplateRequest,

    /**
     * The CreateEInvoiceRequest model constructor.
     * @property {module:model/CreateEInvoiceRequest}
     */
    CreateEInvoiceRequest,

    /**
     * The CreateFacturXEInvoiceRequest model constructor.
     * @property {module:model/CreateFacturXEInvoiceRequest}
     */
    CreateFacturXEInvoiceRequest,

    /**
     * The CreateFacturXEInvoiceRequestTemplate model constructor.
     * @property {module:model/CreateFacturXEInvoiceRequestTemplate}
     */
    CreateFacturXEInvoiceRequestTemplate,

    /**
     * The CreateWorkspaceRequest model constructor.
     * @property {module:model/CreateWorkspaceRequest}
     */
    CreateWorkspaceRequest,

    /**
     * The DataBatchInner model constructor.
     * @property {module:model/DataBatchInner}
     */
    DataBatchInner,

    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document,

    /**
     * The EncryptAndDecryptBase64 model constructor.
     * @property {module:model/EncryptAndDecryptBase64}
     */
    EncryptAndDecryptBase64,

    /**
     * The EncryptAndDecryptUrl model constructor.
     * @property {module:model/EncryptAndDecryptUrl}
     */
    EncryptAndDecryptUrl,

    /**
     * The EncryptDocumentRequest model constructor.
     * @property {module:model/EncryptDocumentRequest}
     */
    EncryptDocumentRequest,

    /**
     * The ExtractFormFieldsRequest model constructor.
     * @property {module:model/ExtractFormFieldsRequest}
     */
    ExtractFormFieldsRequest,

    /**
     * The FillFormFieldsRequest model constructor.
     * @property {module:model/FillFormFieldsRequest}
     */
    FillFormFieldsRequest,

    /**
     * The FormActionDownload model constructor.
     * @property {module:model/FormActionDownload}
     */
    FormActionDownload,

    /**
     * The FormActionSend model constructor.
     * @property {module:model/FormActionSend}
     */
    FormActionSend,

    /**
     * The FormActionSendSendDocument model constructor.
     * @property {module:model/FormActionSendSendDocument}
     */
    FormActionSendSendDocument,

    /**
     * The FormActionSendSendDocumentHeadersInner model constructor.
     * @property {module:model/FormActionSendSendDocumentHeadersInner}
     */
    FormActionSendSendDocumentHeadersInner,

    /**
     * The FormActionStore model constructor.
     * @property {module:model/FormActionStore}
     */
    FormActionStore,

    /**
     * The FormConfiguration model constructor.
     * @property {module:model/FormConfiguration}
     */
    FormConfiguration,

    /**
     * The FormConfigurationNew model constructor.
     * @property {module:model/FormConfigurationNew}
     */
    FormConfigurationNew,

    /**
     * The FormConfigurationNewActionsInner model constructor.
     * @property {module:model/FormConfigurationNewActionsInner}
     */
    FormConfigurationNewActionsInner,

    /**
     * The FormFieldsBase64 model constructor.
     * @property {module:model/FormFieldsBase64}
     */
    FormFieldsBase64,

    /**
     * The FormFieldsInner model constructor.
     * @property {module:model/FormFieldsInner}
     */
    FormFieldsInner,

    /**
     * The FormFieldsUrl model constructor.
     * @property {module:model/FormFieldsUrl}
     */
    FormFieldsUrl,

    /**
     * The FormFillBase64 model constructor.
     * @property {module:model/FormFillBase64}
     */
    FormFillBase64,

    /**
     * The FormFillUrl model constructor.
     * @property {module:model/FormFillUrl}
     */
    FormFillUrl,

    /**
     * The FormatParam model constructor.
     * @property {module:model/FormatParam}
     */
    FormatParam,

    /**
     * The GenerateDocumentAsynchronousRequest model constructor.
     * @property {module:model/GenerateDocumentAsynchronousRequest}
     */
    GenerateDocumentAsynchronousRequest,

    /**
     * The GenerateDocumentBatchAsynchronousRequest model constructor.
     * @property {module:model/GenerateDocumentBatchAsynchronousRequest}
     */
    GenerateDocumentBatchAsynchronousRequest,

    /**
     * The GenerateDocumentBatchRequest model constructor.
     * @property {module:model/GenerateDocumentBatchRequest}
     */
    GenerateDocumentBatchRequest,

    /**
     * The GenerateDocumentRequest model constructor.
     * @property {module:model/GenerateDocumentRequest}
     */
    GenerateDocumentRequest,

    /**
     * The GenerateQRCode201Response model constructor.
     * @property {module:model/GenerateQRCode201Response}
     */
    GenerateQRCode201Response,

    /**
     * The GenerateQRCode201ResponseMeta model constructor.
     * @property {module:model/GenerateQRCode201ResponseMeta}
     */
    GenerateQRCode201ResponseMeta,

    /**
     * The GenerateQRCodeRequest model constructor.
     * @property {module:model/GenerateQRCodeRequest}
     */
    GenerateQRCodeRequest,

    /**
     * The GetStatus200Response model constructor.
     * @property {module:model/GetStatus200Response}
     */
    GetStatus200Response,

    /**
     * The GetTemplateLibrary200Response model constructor.
     * @property {module:model/GetTemplateLibrary200Response}
     */
    GetTemplateLibrary200Response,

    /**
     * The GetTemplateVersion422Response model constructor.
     * @property {module:model/GetTemplateVersion422Response}
     */
    GetTemplateVersion422Response,

    /**
     * The ImportFormBase64 model constructor.
     * @property {module:model/ImportFormBase64}
     */
    ImportFormBase64,

    /**
     * The ImportFormRequest model constructor.
     * @property {module:model/ImportFormRequest}
     */
    ImportFormRequest,

    /**
     * The ImportFormUrl model constructor.
     * @property {module:model/ImportFormUrl}
     */
    ImportFormUrl,

    /**
     * The ImportTemplateBase64 model constructor.
     * @property {module:model/ImportTemplateBase64}
     */
    ImportTemplateBase64,

    /**
     * The ImportTemplateRequest model constructor.
     * @property {module:model/ImportTemplateRequest}
     */
    ImportTemplateRequest,

    /**
     * The ImportTemplateUrl model constructor.
     * @property {module:model/ImportTemplateUrl}
     */
    ImportTemplateUrl,

    /**
     * The ImportTemplateUrlTemplate model constructor.
     * @property {module:model/ImportTemplateUrlTemplate}
     */
    ImportTemplateUrlTemplate,

    /**
     * The InlineObject model constructor.
     * @property {module:model/InlineObject}
     */
    InlineObject,

    /**
     * The InlineObject1 model constructor.
     * @property {module:model/InlineObject1}
     */
    InlineObject1,

    /**
     * The InlineObject10 model constructor.
     * @property {module:model/InlineObject10}
     */
    InlineObject10,

    /**
     * The InlineObject10Meta model constructor.
     * @property {module:model/InlineObject10Meta}
     */
    InlineObject10Meta,

    /**
     * The InlineObject11 model constructor.
     * @property {module:model/InlineObject11}
     */
    InlineObject11,

    /**
     * The InlineObject11Meta model constructor.
     * @property {module:model/InlineObject11Meta}
     */
    InlineObject11Meta,

    /**
     * The InlineObject12 model constructor.
     * @property {module:model/InlineObject12}
     */
    InlineObject12,

    /**
     * The InlineObject12Meta model constructor.
     * @property {module:model/InlineObject12Meta}
     */
    InlineObject12Meta,

    /**
     * The InlineObject12MetaStats model constructor.
     * @property {module:model/InlineObject12MetaStats}
     */
    InlineObject12MetaStats,

    /**
     * The InlineObject13 model constructor.
     * @property {module:model/InlineObject13}
     */
    InlineObject13,

    /**
     * The InlineObject14 model constructor.
     * @property {module:model/InlineObject14}
     */
    InlineObject14,

    /**
     * The InlineObject14ResponseValue model constructor.
     * @property {module:model/InlineObject14ResponseValue}
     */
    InlineObject14ResponseValue,

    /**
     * The InlineObject14ResponseValueDefault model constructor.
     * @property {module:model/InlineObject14ResponseValueDefault}
     */
    InlineObject14ResponseValueDefault,

    /**
     * The InlineObject14ResponseValueValue model constructor.
     * @property {module:model/InlineObject14ResponseValueValue}
     */
    InlineObject14ResponseValueValue,

    /**
     * The InlineObject15 model constructor.
     * @property {module:model/InlineObject15}
     */
    InlineObject15,

    /**
     * The InlineObject16 model constructor.
     * @property {module:model/InlineObject16}
     */
    InlineObject16,

    /**
     * The InlineObject17 model constructor.
     * @property {module:model/InlineObject17}
     */
    InlineObject17,

    /**
     * The InlineObject18 model constructor.
     * @property {module:model/InlineObject18}
     */
    InlineObject18,

    /**
     * The InlineObject18Meta model constructor.
     * @property {module:model/InlineObject18Meta}
     */
    InlineObject18Meta,

    /**
     * The InlineObject19 model constructor.
     * @property {module:model/InlineObject19}
     */
    InlineObject19,

    /**
     * The InlineObject1Response model constructor.
     * @property {module:model/InlineObject1Response}
     */
    InlineObject1Response,

    /**
     * The InlineObject2 model constructor.
     * @property {module:model/InlineObject2}
     */
    InlineObject2,

    /**
     * The InlineObject20 model constructor.
     * @property {module:model/InlineObject20}
     */
    InlineObject20,

    /**
     * The InlineObject20Response model constructor.
     * @property {module:model/InlineObject20Response}
     */
    InlineObject20Response,

    /**
     * The InlineObject21 model constructor.
     * @property {module:model/InlineObject21}
     */
    InlineObject21,

    /**
     * The InlineObject22 model constructor.
     * @property {module:model/InlineObject22}
     */
    InlineObject22,

    /**
     * The InlineObject23 model constructor.
     * @property {module:model/InlineObject23}
     */
    InlineObject23,

    /**
     * The InlineObject24 model constructor.
     * @property {module:model/InlineObject24}
     */
    InlineObject24,

    /**
     * The InlineObject25 model constructor.
     * @property {module:model/InlineObject25}
     */
    InlineObject25,

    /**
     * The InlineObject26 model constructor.
     * @property {module:model/InlineObject26}
     */
    InlineObject26,

    /**
     * The InlineObject27 model constructor.
     * @property {module:model/InlineObject27}
     */
    InlineObject27,

    /**
     * The InlineObject3 model constructor.
     * @property {module:model/InlineObject3}
     */
    InlineObject3,

    /**
     * The InlineObject4 model constructor.
     * @property {module:model/InlineObject4}
     */
    InlineObject4,

    /**
     * The InlineObject5 model constructor.
     * @property {module:model/InlineObject5}
     */
    InlineObject5,

    /**
     * The InlineObject6 model constructor.
     * @property {module:model/InlineObject6}
     */
    InlineObject6,

    /**
     * The InlineObject7 model constructor.
     * @property {module:model/InlineObject7}
     */
    InlineObject7,

    /**
     * The InlineObject7Response model constructor.
     * @property {module:model/InlineObject7Response}
     */
    InlineObject7Response,

    /**
     * The InlineObject8 model constructor.
     * @property {module:model/InlineObject8}
     */
    InlineObject8,

    /**
     * The InlineObject9 model constructor.
     * @property {module:model/InlineObject9}
     */
    InlineObject9,

    /**
     * The InlineObject9Meta model constructor.
     * @property {module:model/InlineObject9Meta}
     */
    InlineObject9Meta,

    /**
     * The InlineObjectMeta model constructor.
     * @property {module:model/InlineObjectMeta}
     */
    InlineObjectMeta,

    /**
     * The KeyFieldParam model constructor.
     * @property {module:model/KeyFieldParam}
     */
    KeyFieldParam,

    /**
     * The MakeAccessibleBase64 model constructor.
     * @property {module:model/MakeAccessibleBase64}
     */
    MakeAccessibleBase64,

    /**
     * The MakeAccessibleRequest model constructor.
     * @property {module:model/MakeAccessibleRequest}
     */
    MakeAccessibleRequest,

    /**
     * The MakeAccessibleUrl model constructor.
     * @property {module:model/MakeAccessibleUrl}
     */
    MakeAccessibleUrl,

    /**
     * The MetadataParam model constructor.
     * @property {module:model/MetadataParam}
     */
    MetadataParam,

    /**
     * The OpenEditorRequest model constructor.
     * @property {module:model/OpenEditorRequest}
     */
    OpenEditorRequest,

    /**
     * The OpenEditorRequestData model constructor.
     * @property {module:model/OpenEditorRequestData}
     */
    OpenEditorRequestData,

    /**
     * The OptimizeBase64 model constructor.
     * @property {module:model/OptimizeBase64}
     */
    OptimizeBase64,

    /**
     * The OptimizeDocumentRequest model constructor.
     * @property {module:model/OptimizeDocumentRequest}
     */
    OptimizeDocumentRequest,

    /**
     * The OptimizeUrl model constructor.
     * @property {module:model/OptimizeUrl}
     */
    OptimizeUrl,

    /**
     * The OutputParam model constructor.
     * @property {module:model/OutputParam}
     */
    OutputParam,

    /**
     * The PaginationMeta model constructor.
     * @property {module:model/PaginationMeta}
     */
    PaginationMeta,

    /**
     * The PromoteTemplateVersion200Response model constructor.
     * @property {module:model/PromoteTemplateVersion200Response}
     */
    PromoteTemplateVersion200Response,

    /**
     * The PublicTemplateLibraryItem model constructor.
     * @property {module:model/PublicTemplateLibraryItem}
     */
    PublicTemplateLibraryItem,

    /**
     * The StatusParam model constructor.
     * @property {module:model/StatusParam}
     */
    StatusParam,

    /**
     * The StoreDocumentRequest model constructor.
     * @property {module:model/StoreDocumentRequest}
     */
    StoreDocumentRequest,

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
     * The TemplateDefinitionNewDataSettings model constructor.
     * @property {module:model/TemplateDefinitionNewDataSettings}
     */
    TemplateDefinitionNewDataSettings,

    /**
     * The TemplateDefinitionNewEditor model constructor.
     * @property {module:model/TemplateDefinitionNewEditor}
     */
    TemplateDefinitionNewEditor,

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
     * The TemplateDefinitionPagesInner model constructor.
     * @property {module:model/TemplateDefinitionPagesInner}
     */
    TemplateDefinitionPagesInner,

    /**
     * The TemplateParam model constructor.
     * @property {module:model/TemplateParam}
     */
    TemplateParam,

    /**
     * The TemplateParamData model constructor.
     * @property {module:model/TemplateParamData}
     */
    TemplateParamData,

    /**
     * The TemplateParamId model constructor.
     * @property {module:model/TemplateParamId}
     */
    TemplateParamId,

    /**
     * The TemplateVersion model constructor.
     * @property {module:model/TemplateVersion}
     */
    TemplateVersion,

    /**
     * The TemplateVersionCollection model constructor.
     * @property {module:model/TemplateVersionCollection}
     */
    TemplateVersionCollection,

    /**
     * The TemplateVersionCollectionMeta model constructor.
     * @property {module:model/TemplateVersionCollectionMeta}
     */
    TemplateVersionCollectionMeta,

    /**
     * The WatermarkBase64 model constructor.
     * @property {module:model/WatermarkBase64}
     */
    WatermarkBase64,

    /**
     * The WatermarkFileUrlWatermark model constructor.
     * @property {module:model/WatermarkFileUrlWatermark}
     */
    WatermarkFileUrlWatermark,

    /**
     * The WatermarkImage model constructor.
     * @property {module:model/WatermarkImage}
     */
    WatermarkImage,

    /**
     * The WatermarkImageContentBase64 model constructor.
     * @property {module:model/WatermarkImageContentBase64}
     */
    WatermarkImageContentBase64,

    /**
     * The WatermarkImageContentUrl model constructor.
     * @property {module:model/WatermarkImageContentUrl}
     */
    WatermarkImageContentUrl,

    /**
     * The WatermarkPosition model constructor.
     * @property {module:model/WatermarkPosition}
     */
    WatermarkPosition,

    /**
     * The WatermarkText model constructor.
     * @property {module:model/WatermarkText}
     */
    WatermarkText,

    /**
     * The Workspace model constructor.
     * @property {module:model/Workspace}
     */
    Workspace,

    /**
    * The AssetsApi service constructor.
    * @property {module:PDFGeneratorAPI/AssetsApi}
    */
    AssetsApi,

    /**
    * The ConversionApi service constructor.
    * @property {module:PDFGeneratorAPI/ConversionApi}
    */
    ConversionApi,

    /**
    * The DocumentsApi service constructor.
    * @property {module:PDFGeneratorAPI/DocumentsApi}
    */
    DocumentsApi,

    /**
    * The EInvoicesApi service constructor.
    * @property {module:PDFGeneratorAPI/EInvoicesApi}
    */
    EInvoicesApi,

    /**
    * The FormsApi service constructor.
    * @property {module:PDFGeneratorAPI/FormsApi}
    */
    FormsApi,

    /**
    * The MiscApi service constructor.
    * @property {module:PDFGeneratorAPI/MiscApi}
    */
    MiscApi,

    /**
    * The ServicesApi service constructor.
    * @property {module:PDFGeneratorAPI/ServicesApi}
    */
    ServicesApi,

    /**
    * The TemplateLibraryApi service constructor.
    * @property {module:PDFGeneratorAPI/TemplateLibraryApi}
    */
    TemplateLibraryApi,

    /**
    * The TemplateVersionsApi service constructor.
    * @property {module:PDFGeneratorAPI/TemplateVersionsApi}
    */
    TemplateVersionsApi,

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
