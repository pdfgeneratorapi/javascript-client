# pdf-generator-api-client

PDFGeneratorAPI - JavaScript client for pdf-generator-api-client
# Introduction
[PDF Generator API](https://pdfgeneratorapi.com) allows you easily generate transactional PDF documents and reduce the development and support costs by enabling your users to create and manage their document templates using a browser-based drag-and-drop document editor.

The PDF Generator API features a web API architecture, allowing you to code in the language of your choice. This API supports the JSON media type, and uses UTF-8 character encoding.

## Base URL
The base URL for all the API endpoints is `https://us1.pdfgeneratorapi.com/api/v4`

For example
* `https://us1.pdfgeneratorapi.com/api/v4/templates`
* `https://us1.pdfgeneratorapi.com/api/v4/workspaces`
* `https://us1.pdfgeneratorapi.com/api/v4/templates/123123`

## Editor
PDF Generator API comes with a powerful drag & drop editor that allows to create any kind of document templates, from barcode labels to invoices, quotes and reports. You can find tutorials and videos from our [Support Portal](https://support.pdfgeneratorapi.com).
* [Component specification](https://support.pdfgeneratorapi.com/en/category/components-1ffseaj/)
* [Expression Language documentation](https://support.pdfgeneratorapi.com/en/category/expression-language-q203pa/)
* [Frequently asked questions and answers](https://support.pdfgeneratorapi.com/en/category/qanda-1ov519d/)

## Definitions

### Organization
Organization is a group of workspaces owned by your account.

### Workspace
Workspace contains templates. Each workspace has access to their own templates and organization default templates.

### Master Workspace
Master Workspace is the main/default workspace of your Organization. The Master Workspace identifier is the email you signed up with.

### Default Template
Default template is a template that is available for all workspaces by default. You can set the template access type under Page Setup. If template has "Organization" access then your users can use them from the "New" menu in the Editor.

### Data Field
Data Field is a placeholder for the specific data in your JSON data set. In this example JSON you can access the buyer name using Data Field `{paymentDetails::buyerName}`. The separator between depth levels is :: (two colons). When designing the template you don’t have to know every Data Field, our editor automatically extracts all the available fields from your data set and provides an easy way to insert them into the template.
```
{
    "documentNumber": 1,
    "paymentDetails": {
        "method": "Credit Card",
        "buyerName": "John Smith"
    },
    "items": [
        {
            "id": 1,
            "name": "Item one"
        }
    ]
}
```

## Rate limiting
Our API endpoints use IP-based rate limiting and allow you to make up to 2 requests per second and 60 requests per minute. If you make more requests, you will receive a response with HTTP code 429.

Response headers contain additional values:

| Header   | Description                    |
|--------|--------------------------------|
| X-RateLimit-Limit    | Maximum requests per minute                   |
| X-RateLimit-Remaining    | The requests remaining in the current minute               |
| Retry-After     | How many seconds you need to wait until you are allowed to make requests |

*  *  *  *  *

# Libraries and SDKs
## Postman Collection
We have created a [Postman Collection](https://www.postman.com/pdfgeneratorapi/workspace/pdf-generator-api-public-workspace/overview) so you can easily test all the API endpoints without developing and code.


## Client Libraries
All our Client Libraries are auto-generated using [OpenAPI Generator](https://openapi-generator.tech/) which uses the OpenAPI v3 specification to automatically generate a client library in specific programming language.

* [PHP Client](https://github.com/pdfgeneratorapi/php-client)
* [Java Client](https://github.com/pdfgeneratorapi/java-client)
* [Ruby Client](https://github.com/pdfgeneratorapi/ruby-client)
* [Python Client](https://github.com/pdfgeneratorapi/python-client)
* [Javascript Client](https://github.com/pdfgeneratorapi/javascript-client)

We have validated the generated libraries, but let us know if you find any anomalies in the client code.

## Model Context Protocol (MCP) Server
Integrate document generation directly into your AI agents and LLM applications using our official Model Context Protocol (MCP) Server.

The MCP server provides a standardized interface that allows AI assistants (like Claude Desktop and other MCP-compatible clients) to securely interact with the PDF Generator API. With it, your AI applications can automatically fetch workspaces, retrieve templates, merge data, and generate PDF documents on the fly.

[Get PDF Generator API MCP Server](https://github.com/pdfgeneratorapi/mcp-server)
*  *  *  *  *


# Authentication
The PDF Generator API uses __JSON Web Tokens (JWT)__ to authenticate all API requests. These tokens offer a method to establish secure server-to-server authentication by transferring a compact JSON object with a signed payload of your account’s API Key and Secret.
When authenticating to the PDF Generator API, a JWT should be generated uniquely by a __server-side application__ and included as a __Bearer Token__ in the header of each request.


<SecurityDefinitions />

## Accessing your API Key and Secret
You can find your __API Key__ and __API Secret__ from the __Account Settings__ page after you login to PDF Generator API [here](https://pdfgeneratorapi.com/login).

## Creating a JWT
JSON Web Tokens are composed of three sections: a header, a payload (containing a claim set), and a signature. The header and payload are JSON objects, which are serialized to UTF-8 bytes, then encoded using base64url encoding.

The JWT's header, payload, and signature are concatenated with periods (.). As a result, a JWT typically takes the following form:
```
{Base64url encoded header}.{Base64url encoded payload}.{Base64url encoded signature}
```

We recommend and support libraries provided on [jwt.io](https://jwt.io/). While other libraries can create JWT, these recommended libraries are the most robust.

### Header
Property `alg` defines which signing algorithm is being used. PDF Generator API users HS256.
Property `typ` defines the type of token and it is always JWT.
```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### Payload
The second part of the token is the payload, which contains the claims  or the pieces of information being passed about the user and any metadata required.
It is mandatory to specify the following claims:
* issuer (`iss`): Your API key
* subject (`sub`): Workspace identifier
* expiration time (`exp`): Timestamp (unix epoch time) until the token is valid. It is highly recommended to set the exp timestamp for a short period, i.e. a matter of seconds. This way, if a token is intercepted or shared, the token will only be valid for a short period of time.

```
{
  "iss": "ad54aaff89ffdfeff178bb8a8f359b29fcb20edb56250b9f584aa2cb0162ed4a",
  "sub": "demo.example@actualreports.com",
  "exp": 1586112639
}
```

### Payload for Partners
Our partners can send their unique identifier (provided by us) in JWT's partner_id claim. If the `partner_id` value is specified in the JWT, the organization making the request is automatically connected to the partner account.
* Partner ID (`partner_id`): Unique identifier provide by PDF Generator API team

```
{
  "iss": "ad54aaff89ffdfeff178bb8a8f359b29fcb20edb56250b9f584aa2cb0162ed4a",
  "sub": "demo.example@actualreports.com",
  "partner_id": "my-partner-identifier",
  "exp": 1586112639
}
```

### Signature
To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that. The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.
```
HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    API_SECRET)
```

### Putting all together
The output is three Base64-URL strings separated by dots. The following shows a JWT that has the previous header and payload encoded, and it is signed with a secret.
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhZDU0YWFmZjg5ZmZkZmVmZjE3OGJiOGE4ZjM1OWIyOWZjYjIwZWRiNTYyNTBiOWY1ODRhYTJjYjAxNjJlZDRhIiwic3ViIjoiZGVtby5leGFtcGxlQGFjdHVhbHJlcG9ydHMuY29tIn0.SxO-H7UYYYsclS8RGWO1qf0z1cB1m73wF9FLl9RCc1Q

// Base64 encoded header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
// Base64 encoded payload: eyJpc3MiOiJhZDU0YWFmZjg5ZmZkZmVmZjE3OGJiOGE4ZjM1OWIyOWZjYjIwZWRiNTYyNTBiOWY1ODRhYTJjYjAxNjJlZDRhIiwic3ViIjoiZGVtby5leGFtcGxlQGFjdHVhbHJlcG9ydHMuY29tIn0
// Signature: SxO-H7UYYYsclS8RGWO1qf0z1cB1m73wF9FLl9RCc1Q
```

## Temporary JWTs
You can create a temporary token in [Account Settings](https://pdfgeneratorapi.com/account/organization) page after you login to PDF Generator API. The generated token uses your email address as the subject (`sub`) value and is valid for __15 minutes__.
You can also use [jwt.io](https://jwt.io/) to generate test tokens for your API calls. These test tokens should never be used in production applications.
*  *  *  *  *

# Error codes

| Code   | Description                    |
|--------|--------------------------------|
| 401    | Unauthorized                   |
| 402    | Payment Required               |
| 403    | Forbidden                      |
| 404    | Not Found                      |
| 422    | Unprocessable Entity           |
| 429    | Too Many Requests              |
| 500    | Internal Server Error          |

## 401 Unauthorized
| Description                                                             |
|-------------------------------------------------------------------------|
| Authentication failed: request expired                                  |
| Authentication failed: workspace missing                                |
| Authentication failed: key missing                                      |
| Authentication failed: property 'iss' (issuer) missing in JWT           |
| Authentication failed: property 'sub' (subject) missing in JWT          |
| Authentication failed: property 'exp' (expiration time) missing in JWT  |
| Authentication failed: incorrect signature                              |

## 402 Payment Required
| Description                                                             |
|-------------------------------------------------------------------------|
| Your account is suspended, please upgrade your account                  |

## 403 Forbidden
| Description                                                             |
|-------------------------------------------------------------------------|
| Your account has exceeded the monthly document generation limit.        |
| Access not granted: You cannot delete master workspace via API          |
| Access not granted: Template is not accessible by this organization     |
| Your session has expired, please close and reopen the editor.           |

## 404 Entity not found
| Description                                                             |
|-------------------------------------------------------------------------|
| Entity not found                                                        |
| Resource not found                                                      |
| None of the templates is available for the workspace.                   |

## 422 Unprocessable Entity
| Description                                                             |
|-------------------------------------------------------------------------|
| Unable to parse JSON, please check formatting                           |
| Required parameter missing                                              |
| Required parameter missing: template definition not defined             |
| Required parameter missing: template not defined                        |

## 429 Too Many Requests
| Description                                                             |
|-------------------------------------------------------------------------|
| You can make up to 2 requests per second and 60 requests per minute.   |

*  *  *  *  *

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 4.0.26
- Package version: 8.0.26
- Generator version: 7.14.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://support.pdfgeneratorapi.com](https://support.pdfgeneratorapi.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install pdf-generator-api-client --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your pdf-generator-api-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/pdfgeneratorapi/javascript-client
then install it via:

```shell
    npm install pdfgeneratorapi/javascript-client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var PDFGeneratorAPI = require('pdf-generator-api-client');

var defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
var JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new PDFGeneratorAPI.AssetsApi()
var generate_qr_code_request = new PDFGeneratorAPI.GenerateQRCodeRequest(); // {GenerateQRCodeRequest} QR Code configuration
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.generateQRCode(generate_qr_code_request, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v4*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PDFGeneratorAPI.AssetsApi* | [**generateQRCode**](docs/AssetsApi.md#generateQRCode) | **POST** /assets/qrcode | Generate QR Code
*PDFGeneratorAPI.ConversionApi* | [**convertHTML2PDF**](docs/ConversionApi.md#convertHTML2PDF) | **POST** /conversion/html2pdf | HTML to PDF
*PDFGeneratorAPI.ConversionApi* | [**convertPDF2Image**](docs/ConversionApi.md#convertPDF2Image) | **POST** /conversion/pdf2image | PDF to Image
*PDFGeneratorAPI.ConversionApi* | [**convertURL2PDF**](docs/ConversionApi.md#convertURL2PDF) | **POST** /conversion/url2pdf | URL to PDF
*PDFGeneratorAPI.DocumentsApi* | [**deleteDocument**](docs/DocumentsApi.md#deleteDocument) | **DELETE** /documents/{publicId}/actions | Delete document
*PDFGeneratorAPI.DocumentsApi* | [**generateDocument**](docs/DocumentsApi.md#generateDocument) | **POST** /documents/generate | Generate document
*PDFGeneratorAPI.DocumentsApi* | [**generateDocumentAsynchronous**](docs/DocumentsApi.md#generateDocumentAsynchronous) | **POST** /documents/generate/async | Generate document (async)
*PDFGeneratorAPI.DocumentsApi* | [**generateDocumentBatch**](docs/DocumentsApi.md#generateDocumentBatch) | **POST** /documents/generate/batch | Generate document (batch)
*PDFGeneratorAPI.DocumentsApi* | [**generateDocumentBatchAsynchronous**](docs/DocumentsApi.md#generateDocumentBatchAsynchronous) | **POST** /documents/generate/batch/async | Generate document (batch + async)
*PDFGeneratorAPI.DocumentsApi* | [**getAsyncJobStatus**](docs/DocumentsApi.md#getAsyncJobStatus) | **GET** /documents/async/{jobId} | Get job status
*PDFGeneratorAPI.DocumentsApi* | [**getDocument**](docs/DocumentsApi.md#getDocument) | **GET** /documents/{publicId} | Get document
*PDFGeneratorAPI.DocumentsApi* | [**getDocumentActions**](docs/DocumentsApi.md#getDocumentActions) | **GET** /documents/{publicId}/actions | Get document actions
*PDFGeneratorAPI.DocumentsApi* | [**getDocumentVersions**](docs/DocumentsApi.md#getDocumentVersions) | **GET** /documents/{publicId}/versions | Get document versions
*PDFGeneratorAPI.DocumentsApi* | [**getDocuments**](docs/DocumentsApi.md#getDocuments) | **GET** /documents | Get documents
*PDFGeneratorAPI.DocumentsApi* | [**storeDocument**](docs/DocumentsApi.md#storeDocument) | **POST** /documents | Store document
*PDFGeneratorAPI.EInvoicesApi* | [**createEInvoice**](docs/EInvoicesApi.md#createEInvoice) | **POST** /einvoice | Create eInvoice
*PDFGeneratorAPI.EInvoicesApi* | [**createFacturXEInvoice**](docs/EInvoicesApi.md#createFacturXEInvoice) | **POST** /einvoice/facturx | Create Factur-X eInvoice
*PDFGeneratorAPI.EInvoicesApi* | [**createXRechnungEInvoice**](docs/EInvoicesApi.md#createXRechnungEInvoice) | **POST** /einvoice/xrechnung | Create XRechnung eInvoice
*PDFGeneratorAPI.EInvoicesApi* | [**getEInvoiceSchema**](docs/EInvoicesApi.md#getEInvoiceSchema) | **GET** /einvoice/schema | Get schema
*PDFGeneratorAPI.FormsApi* | [**createForm**](docs/FormsApi.md#createForm) | **POST** /forms | Create form
*PDFGeneratorAPI.FormsApi* | [**deleteForm**](docs/FormsApi.md#deleteForm) | **DELETE** /forms/{formId} | Delete form
*PDFGeneratorAPI.FormsApi* | [**getForm**](docs/FormsApi.md#getForm) | **GET** /forms/{formId} | Get form
*PDFGeneratorAPI.FormsApi* | [**getForms**](docs/FormsApi.md#getForms) | **GET** /forms | Get forms
*PDFGeneratorAPI.FormsApi* | [**importForm**](docs/FormsApi.md#importForm) | **POST** /forms/import | Import Form
*PDFGeneratorAPI.FormsApi* | [**openFormBuilder**](docs/FormsApi.md#openFormBuilder) | **POST** /forms/open | Open new form builder
*PDFGeneratorAPI.FormsApi* | [**openFormBuilderForExistingForm**](docs/FormsApi.md#openFormBuilderForExistingForm) | **POST** /forms/{formId}/open | Open existing form builder
*PDFGeneratorAPI.FormsApi* | [**shareForm**](docs/FormsApi.md#shareForm) | **POST** /forms/{formId}/share | Share form
*PDFGeneratorAPI.FormsApi* | [**updateForm**](docs/FormsApi.md#updateForm) | **PUT** /forms/{formId} | Update form
*PDFGeneratorAPI.MiscApi* | [**getStatus**](docs/MiscApi.md#getStatus) | **GET** /status | Get Service Status
*PDFGeneratorAPI.ServicesApi* | [**addWatermark**](docs/ServicesApi.md#addWatermark) | **POST** /pdfservices/watermark | Add watermark
*PDFGeneratorAPI.ServicesApi* | [**decryptDocument**](docs/ServicesApi.md#decryptDocument) | **POST** /pdfservices/decrypt | Decrypt document
*PDFGeneratorAPI.ServicesApi* | [**encryptDocument**](docs/ServicesApi.md#encryptDocument) | **POST** /pdfservices/encrypt | Encrypt document
*PDFGeneratorAPI.ServicesApi* | [**extractFormFields**](docs/ServicesApi.md#extractFormFields) | **POST** /pdfservices/form/fields | Extract form fields
*PDFGeneratorAPI.ServicesApi* | [**fillFormFields**](docs/ServicesApi.md#fillFormFields) | **POST** /pdfservices/form/fill | Fill form fields
*PDFGeneratorAPI.ServicesApi* | [**makeAccessible**](docs/ServicesApi.md#makeAccessible) | **POST** /pdfservices/make-accessible | Make accessible
*PDFGeneratorAPI.ServicesApi* | [**optimizeDocument**](docs/ServicesApi.md#optimizeDocument) | **POST** /pdfservices/optimize | Optimize document
*PDFGeneratorAPI.TemplateLibraryApi* | [**getTemplateLibrary**](docs/TemplateLibraryApi.md#getTemplateLibrary) | **GET** /templates/library | Get template library
*PDFGeneratorAPI.TemplateLibraryApi* | [**getTemplateLibraryItem**](docs/TemplateLibraryApi.md#getTemplateLibraryItem) | **GET** /templates/library/{publicId} | Open template from the library
*PDFGeneratorAPI.TemplateVersionsApi* | [**deleteTemplateVersion**](docs/TemplateVersionsApi.md#deleteTemplateVersion) | **DELETE** /templates/{templateId}/versions/{templateVersion} | Delete template version
*PDFGeneratorAPI.TemplateVersionsApi* | [**getTemplateVersion**](docs/TemplateVersionsApi.md#getTemplateVersion) | **GET** /templates/{templateId}/versions/{templateVersion} | Get template version
*PDFGeneratorAPI.TemplateVersionsApi* | [**listTemplateVersions**](docs/TemplateVersionsApi.md#listTemplateVersions) | **GET** /templates/{templateId}/versions | List template versions
*PDFGeneratorAPI.TemplateVersionsApi* | [**promoteTemplateVersion**](docs/TemplateVersionsApi.md#promoteTemplateVersion) | **PUT** /templates/{templateId}/versions/{templateVersion}/promote | Promote template version
*PDFGeneratorAPI.TemplatesApi* | [**copyTemplate**](docs/TemplatesApi.md#copyTemplate) | **POST** /templates/{templateId}/copy | Copy template
*PDFGeneratorAPI.TemplatesApi* | [**createTemplate**](docs/TemplatesApi.md#createTemplate) | **POST** /templates | Create template
*PDFGeneratorAPI.TemplatesApi* | [**deleteTemplate**](docs/TemplatesApi.md#deleteTemplate) | **DELETE** /templates/{templateId} | Delete template
*PDFGeneratorAPI.TemplatesApi* | [**getTemplate**](docs/TemplatesApi.md#getTemplate) | **GET** /templates/{templateId} | Get template
*PDFGeneratorAPI.TemplatesApi* | [**getTemplateData**](docs/TemplatesApi.md#getTemplateData) | **GET** /templates/{templateId}/data | Get template data fields
*PDFGeneratorAPI.TemplatesApi* | [**getTemplateSchema**](docs/TemplatesApi.md#getTemplateSchema) | **GET** /templates/schema | Get schema
*PDFGeneratorAPI.TemplatesApi* | [**getTemplates**](docs/TemplatesApi.md#getTemplates) | **GET** /templates | Get templates
*PDFGeneratorAPI.TemplatesApi* | [**importTemplate**](docs/TemplatesApi.md#importTemplate) | **POST** /templates/import | Import template
*PDFGeneratorAPI.TemplatesApi* | [**openEditor**](docs/TemplatesApi.md#openEditor) | **POST** /templates/{templateId}/editor | Open editor
*PDFGeneratorAPI.TemplatesApi* | [**updateTemplate**](docs/TemplatesApi.md#updateTemplate) | **PUT** /templates/{templateId} | Update template
*PDFGeneratorAPI.TemplatesApi* | [**validateTemplate**](docs/TemplatesApi.md#validateTemplate) | **POST** /templates/validate | Validate template
*PDFGeneratorAPI.WorkspacesApi* | [**createWorkspace**](docs/WorkspacesApi.md#createWorkspace) | **POST** /workspaces | Create workspace
*PDFGeneratorAPI.WorkspacesApi* | [**deleteWorkspace**](docs/WorkspacesApi.md#deleteWorkspace) | **DELETE** /workspaces/{workspaceIdentifier} | Delete workspace
*PDFGeneratorAPI.WorkspacesApi* | [**getWorkspace**](docs/WorkspacesApi.md#getWorkspace) | **GET** /workspaces/{workspaceIdentifier} | Get workspace
*PDFGeneratorAPI.WorkspacesApi* | [**getWorkspaces**](docs/WorkspacesApi.md#getWorkspaces) | **GET** /workspaces | Get workspaces


## Documentation for Models

 - [PDFGeneratorAPI.AccessibilityOption](docs/AccessibilityOption.md)
 - [PDFGeneratorAPI.AddWatermarkRequest](docs/AddWatermarkRequest.md)
 - [PDFGeneratorAPI.AsyncOutputParam](docs/AsyncOutputParam.md)
 - [PDFGeneratorAPI.CallbackParam](docs/CallbackParam.md)
 - [PDFGeneratorAPI.Component](docs/Component.md)
 - [PDFGeneratorAPI.ConvertHTML2PDFRequest](docs/ConvertHTML2PDFRequest.md)
 - [PDFGeneratorAPI.ConvertPDF2ImageRequest](docs/ConvertPDF2ImageRequest.md)
 - [PDFGeneratorAPI.ConvertURL2PDFRequest](docs/ConvertURL2PDFRequest.md)
 - [PDFGeneratorAPI.CopyTemplateRequest](docs/CopyTemplateRequest.md)
 - [PDFGeneratorAPI.CreateEInvoiceRequest](docs/CreateEInvoiceRequest.md)
 - [PDFGeneratorAPI.CreateFacturXEInvoiceRequest](docs/CreateFacturXEInvoiceRequest.md)
 - [PDFGeneratorAPI.CreateFacturXEInvoiceRequestTemplate](docs/CreateFacturXEInvoiceRequestTemplate.md)
 - [PDFGeneratorAPI.CreateWorkspaceRequest](docs/CreateWorkspaceRequest.md)
 - [PDFGeneratorAPI.DataBatchInner](docs/DataBatchInner.md)
 - [PDFGeneratorAPI.Document](docs/Document.md)
 - [PDFGeneratorAPI.DocumentAction](docs/DocumentAction.md)
 - [PDFGeneratorAPI.DocumentUser](docs/DocumentUser.md)
 - [PDFGeneratorAPI.DocumentVersion](docs/DocumentVersion.md)
 - [PDFGeneratorAPI.EncryptAndDecryptBase64](docs/EncryptAndDecryptBase64.md)
 - [PDFGeneratorAPI.EncryptAndDecryptUrl](docs/EncryptAndDecryptUrl.md)
 - [PDFGeneratorAPI.EncryptDocumentRequest](docs/EncryptDocumentRequest.md)
 - [PDFGeneratorAPI.ExtractFormFieldsRequest](docs/ExtractFormFieldsRequest.md)
 - [PDFGeneratorAPI.FillFormFieldsRequest](docs/FillFormFieldsRequest.md)
 - [PDFGeneratorAPI.FormActionDownload](docs/FormActionDownload.md)
 - [PDFGeneratorAPI.FormActionSend](docs/FormActionSend.md)
 - [PDFGeneratorAPI.FormActionSendSendDocument](docs/FormActionSendSendDocument.md)
 - [PDFGeneratorAPI.FormActionSendSendDocumentHeadersInner](docs/FormActionSendSendDocumentHeadersInner.md)
 - [PDFGeneratorAPI.FormActionStore](docs/FormActionStore.md)
 - [PDFGeneratorAPI.FormConfiguration](docs/FormConfiguration.md)
 - [PDFGeneratorAPI.FormConfigurationNew](docs/FormConfigurationNew.md)
 - [PDFGeneratorAPI.FormConfigurationNewActionsInner](docs/FormConfigurationNewActionsInner.md)
 - [PDFGeneratorAPI.FormFieldsBase64](docs/FormFieldsBase64.md)
 - [PDFGeneratorAPI.FormFieldsInner](docs/FormFieldsInner.md)
 - [PDFGeneratorAPI.FormFieldsUrl](docs/FormFieldsUrl.md)
 - [PDFGeneratorAPI.FormFillBase64](docs/FormFillBase64.md)
 - [PDFGeneratorAPI.FormFillUrl](docs/FormFillUrl.md)
 - [PDFGeneratorAPI.FormatParam](docs/FormatParam.md)
 - [PDFGeneratorAPI.GenerateDocumentAsynchronousRequest](docs/GenerateDocumentAsynchronousRequest.md)
 - [PDFGeneratorAPI.GenerateDocumentBatchAsynchronousRequest](docs/GenerateDocumentBatchAsynchronousRequest.md)
 - [PDFGeneratorAPI.GenerateDocumentBatchRequest](docs/GenerateDocumentBatchRequest.md)
 - [PDFGeneratorAPI.GenerateDocumentRequest](docs/GenerateDocumentRequest.md)
 - [PDFGeneratorAPI.GenerateQRCode201Response](docs/GenerateQRCode201Response.md)
 - [PDFGeneratorAPI.GenerateQRCode201ResponseMeta](docs/GenerateQRCode201ResponseMeta.md)
 - [PDFGeneratorAPI.GenerateQRCodeRequest](docs/GenerateQRCodeRequest.md)
 - [PDFGeneratorAPI.GetStatus200Response](docs/GetStatus200Response.md)
 - [PDFGeneratorAPI.GetTemplateLibrary200Response](docs/GetTemplateLibrary200Response.md)
 - [PDFGeneratorAPI.GetTemplateVersion422Response](docs/GetTemplateVersion422Response.md)
 - [PDFGeneratorAPI.ImportFormBase64](docs/ImportFormBase64.md)
 - [PDFGeneratorAPI.ImportFormRequest](docs/ImportFormRequest.md)
 - [PDFGeneratorAPI.ImportFormUrl](docs/ImportFormUrl.md)
 - [PDFGeneratorAPI.ImportTemplateBase64](docs/ImportTemplateBase64.md)
 - [PDFGeneratorAPI.ImportTemplateRequest](docs/ImportTemplateRequest.md)
 - [PDFGeneratorAPI.ImportTemplateUrl](docs/ImportTemplateUrl.md)
 - [PDFGeneratorAPI.ImportTemplateUrlTemplate](docs/ImportTemplateUrlTemplate.md)
 - [PDFGeneratorAPI.InlineObject](docs/InlineObject.md)
 - [PDFGeneratorAPI.InlineObject1](docs/InlineObject1.md)
 - [PDFGeneratorAPI.InlineObject10](docs/InlineObject10.md)
 - [PDFGeneratorAPI.InlineObject10Meta](docs/InlineObject10Meta.md)
 - [PDFGeneratorAPI.InlineObject11](docs/InlineObject11.md)
 - [PDFGeneratorAPI.InlineObject11Meta](docs/InlineObject11Meta.md)
 - [PDFGeneratorAPI.InlineObject12](docs/InlineObject12.md)
 - [PDFGeneratorAPI.InlineObject12Meta](docs/InlineObject12Meta.md)
 - [PDFGeneratorAPI.InlineObject12MetaStats](docs/InlineObject12MetaStats.md)
 - [PDFGeneratorAPI.InlineObject13](docs/InlineObject13.md)
 - [PDFGeneratorAPI.InlineObject14](docs/InlineObject14.md)
 - [PDFGeneratorAPI.InlineObject14ResponseValue](docs/InlineObject14ResponseValue.md)
 - [PDFGeneratorAPI.InlineObject14ResponseValueDefault](docs/InlineObject14ResponseValueDefault.md)
 - [PDFGeneratorAPI.InlineObject14ResponseValueValue](docs/InlineObject14ResponseValueValue.md)
 - [PDFGeneratorAPI.InlineObject15](docs/InlineObject15.md)
 - [PDFGeneratorAPI.InlineObject16](docs/InlineObject16.md)
 - [PDFGeneratorAPI.InlineObject17](docs/InlineObject17.md)
 - [PDFGeneratorAPI.InlineObject18](docs/InlineObject18.md)
 - [PDFGeneratorAPI.InlineObject19](docs/InlineObject19.md)
 - [PDFGeneratorAPI.InlineObject1Response](docs/InlineObject1Response.md)
 - [PDFGeneratorAPI.InlineObject2](docs/InlineObject2.md)
 - [PDFGeneratorAPI.InlineObject20](docs/InlineObject20.md)
 - [PDFGeneratorAPI.InlineObject20Meta](docs/InlineObject20Meta.md)
 - [PDFGeneratorAPI.InlineObject21](docs/InlineObject21.md)
 - [PDFGeneratorAPI.InlineObject22](docs/InlineObject22.md)
 - [PDFGeneratorAPI.InlineObject22Response](docs/InlineObject22Response.md)
 - [PDFGeneratorAPI.InlineObject23](docs/InlineObject23.md)
 - [PDFGeneratorAPI.InlineObject24](docs/InlineObject24.md)
 - [PDFGeneratorAPI.InlineObject25](docs/InlineObject25.md)
 - [PDFGeneratorAPI.InlineObject26](docs/InlineObject26.md)
 - [PDFGeneratorAPI.InlineObject27](docs/InlineObject27.md)
 - [PDFGeneratorAPI.InlineObject28](docs/InlineObject28.md)
 - [PDFGeneratorAPI.InlineObject29](docs/InlineObject29.md)
 - [PDFGeneratorAPI.InlineObject3](docs/InlineObject3.md)
 - [PDFGeneratorAPI.InlineObject4](docs/InlineObject4.md)
 - [PDFGeneratorAPI.InlineObject5](docs/InlineObject5.md)
 - [PDFGeneratorAPI.InlineObject6](docs/InlineObject6.md)
 - [PDFGeneratorAPI.InlineObject7](docs/InlineObject7.md)
 - [PDFGeneratorAPI.InlineObject7Response](docs/InlineObject7Response.md)
 - [PDFGeneratorAPI.InlineObject8](docs/InlineObject8.md)
 - [PDFGeneratorAPI.InlineObject9](docs/InlineObject9.md)
 - [PDFGeneratorAPI.InlineObject9Meta](docs/InlineObject9Meta.md)
 - [PDFGeneratorAPI.InlineObjectMeta](docs/InlineObjectMeta.md)
 - [PDFGeneratorAPI.KeyFieldParam](docs/KeyFieldParam.md)
 - [PDFGeneratorAPI.MakeAccessibleBase64](docs/MakeAccessibleBase64.md)
 - [PDFGeneratorAPI.MakeAccessibleRequest](docs/MakeAccessibleRequest.md)
 - [PDFGeneratorAPI.MakeAccessibleUrl](docs/MakeAccessibleUrl.md)
 - [PDFGeneratorAPI.MetadataParam](docs/MetadataParam.md)
 - [PDFGeneratorAPI.OpenEditorRequest](docs/OpenEditorRequest.md)
 - [PDFGeneratorAPI.OpenEditorRequestData](docs/OpenEditorRequestData.md)
 - [PDFGeneratorAPI.OptimizeBase64](docs/OptimizeBase64.md)
 - [PDFGeneratorAPI.OptimizeDocumentRequest](docs/OptimizeDocumentRequest.md)
 - [PDFGeneratorAPI.OptimizeUrl](docs/OptimizeUrl.md)
 - [PDFGeneratorAPI.OutputParam](docs/OutputParam.md)
 - [PDFGeneratorAPI.PaginationMeta](docs/PaginationMeta.md)
 - [PDFGeneratorAPI.PromoteTemplateVersion200Response](docs/PromoteTemplateVersion200Response.md)
 - [PDFGeneratorAPI.PublicTemplateLibraryItem](docs/PublicTemplateLibraryItem.md)
 - [PDFGeneratorAPI.StatusParam](docs/StatusParam.md)
 - [PDFGeneratorAPI.StoreDocumentRequest](docs/StoreDocumentRequest.md)
 - [PDFGeneratorAPI.Template](docs/Template.md)
 - [PDFGeneratorAPI.TemplateDefinition](docs/TemplateDefinition.md)
 - [PDFGeneratorAPI.TemplateDefinitionDataSettings](docs/TemplateDefinitionDataSettings.md)
 - [PDFGeneratorAPI.TemplateDefinitionEditor](docs/TemplateDefinitionEditor.md)
 - [PDFGeneratorAPI.TemplateDefinitionNew](docs/TemplateDefinitionNew.md)
 - [PDFGeneratorAPI.TemplateDefinitionNewDataSettings](docs/TemplateDefinitionNewDataSettings.md)
 - [PDFGeneratorAPI.TemplateDefinitionNewEditor](docs/TemplateDefinitionNewEditor.md)
 - [PDFGeneratorAPI.TemplateDefinitionNewLayout](docs/TemplateDefinitionNewLayout.md)
 - [PDFGeneratorAPI.TemplateDefinitionNewLayoutMargins](docs/TemplateDefinitionNewLayoutMargins.md)
 - [PDFGeneratorAPI.TemplateDefinitionNewLayoutRepeatLayout](docs/TemplateDefinitionNewLayoutRepeatLayout.md)
 - [PDFGeneratorAPI.TemplateDefinitionNewPagesInner](docs/TemplateDefinitionNewPagesInner.md)
 - [PDFGeneratorAPI.TemplateDefinitionNewPagesInnerMargins](docs/TemplateDefinitionNewPagesInnerMargins.md)
 - [PDFGeneratorAPI.TemplateDefinitionPagesInner](docs/TemplateDefinitionPagesInner.md)
 - [PDFGeneratorAPI.TemplateParam](docs/TemplateParam.md)
 - [PDFGeneratorAPI.TemplateParamData](docs/TemplateParamData.md)
 - [PDFGeneratorAPI.TemplateParamId](docs/TemplateParamId.md)
 - [PDFGeneratorAPI.TemplateVersion](docs/TemplateVersion.md)
 - [PDFGeneratorAPI.TemplateVersionCollection](docs/TemplateVersionCollection.md)
 - [PDFGeneratorAPI.TemplateVersionCollectionMeta](docs/TemplateVersionCollectionMeta.md)
 - [PDFGeneratorAPI.WatermarkBase64](docs/WatermarkBase64.md)
 - [PDFGeneratorAPI.WatermarkFileUrlWatermark](docs/WatermarkFileUrlWatermark.md)
 - [PDFGeneratorAPI.WatermarkImage](docs/WatermarkImage.md)
 - [PDFGeneratorAPI.WatermarkImageContentBase64](docs/WatermarkImageContentBase64.md)
 - [PDFGeneratorAPI.WatermarkImageContentUrl](docs/WatermarkImageContentUrl.md)
 - [PDFGeneratorAPI.WatermarkPosition](docs/WatermarkPosition.md)
 - [PDFGeneratorAPI.WatermarkText](docs/WatermarkText.md)
 - [PDFGeneratorAPI.Workspace](docs/Workspace.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### JSONWebTokenAuth

- **Type**: Bearer authentication (JWT)

