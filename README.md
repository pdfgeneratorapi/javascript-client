# pdf-generator-api-client

PDFGeneratorAPI - JavaScript client for pdf-generator-api-client
# Introduction
PDF Generator API allows you easily generate transactional PDF documents and reduce the development and support costs by enabling your users to create and manage their document templates using a browser-based drag-and-drop document editor.

The PDF Generator API features a web API architecture, allowing you to code in the language of your choice. This API supports the JSON media type, and uses UTF-8 character encoding.

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

You can also specify the token expiration time (`exp`) which is timestamp in seconds since Epoch (unix epoch time). It is highly recommended to set the exp timestamp for a short period, i.e. a matter of seconds. This way, if a token is intercepted or shared, the token will only be valid for a short period of time.

```
{
  "iss": "ad54aaff89ffdfeff178bb8a8f359b29fcb20edb56250b9f584aa2cb0162ed4a",
  "sub": "demo.example@actualreports.com",
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

## Testing with JWTs
You can create a temporary token in [Account Settings](https://pdfgeneratorapi.com/account/organization) page after you login to PDF Generator API. The generated token uses your email address as the subject (`sub`) value and is valid for __5 minutes__.
You can also use [jwt.io](https://jwt.io/) to generate test tokens for your API calls. These test tokens should never be used in production applications.

# Libraries and SDKs
## Postman Collection
We have created a [Postman](https://www.postman.com) Collection so you can easily test all the API endpoints wihtout developing and code. You can download the collection [here](https://app.getpostman.com/run-collection/8f99146f64819f3e6db5) or just click the button below.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/8f99146f64819f3e6db5)

## Client Libraries
All our Client Libraries are auto-generated using [OpenAPI Generator](https://openapi-generator.tech/) which uses the OpenAPI v3 specification to automatically generate a client library in specific programming language.

* [PHP Client](https://github.com/pdfgeneratorapi/php-client)
* [Java Client](https://github.com/pdfgeneratorapi/java-client)
* [Ruby Client](https://github.com/pdfgeneratorapi/ruby-client)
* [Python Client](https://github.com/pdfgeneratorapi/python-client)
* [Javascript Client](https://github.com/pdfgeneratorapi/javascript-client)

We have validated the generated libraries, but let us know if you find any anomalies in the client code.

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 3.1.0
- Package version: 3.1.0
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

var api = new PDFGeneratorAPI.TemplatesApi()
var template_id = 19375; // {Number} Template unique identifier
var opts = {
  'name': My copied template // {String} Name for the copied template. If name is not specified then the original name is used.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.copyTemplate(template_id, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PDFGeneratorAPI.TemplatesApi* | [**copyTemplate**](docs/TemplatesApi.md#copyTemplate) | **POST** /templates/{templateId}/copy | Copy template
*PDFGeneratorAPI.TemplatesApi* | [**createTemplate**](docs/TemplatesApi.md#createTemplate) | **POST** /templates | Create template
*PDFGeneratorAPI.TemplatesApi* | [**deleteTemplate**](docs/TemplatesApi.md#deleteTemplate) | **DELETE** /templates/{templateId} | Delete template
*PDFGeneratorAPI.TemplatesApi* | [**getEditorUrl**](docs/TemplatesApi.md#getEditorUrl) | **POST** /templates/{templateId}/editor | Open editor
*PDFGeneratorAPI.TemplatesApi* | [**getTemplate**](docs/TemplatesApi.md#getTemplate) | **GET** /templates/{templateId} | Get template
*PDFGeneratorAPI.TemplatesApi* | [**getTemplates**](docs/TemplatesApi.md#getTemplates) | **GET** /templates | Get templates
*PDFGeneratorAPI.TemplatesApi* | [**mergeTemplate**](docs/TemplatesApi.md#mergeTemplate) | **POST** /templates/{templateId}/output | Merge template
*PDFGeneratorAPI.TemplatesApi* | [**mergeTemplates**](docs/TemplatesApi.md#mergeTemplates) | **POST** /templates/output | Merge multiple templates
*PDFGeneratorAPI.TemplatesApi* | [**updateTemplate**](docs/TemplatesApi.md#updateTemplate) | **PUT** /templates/{templateId} | Update template
*PDFGeneratorAPI.WorkspacesApi* | [**deleteWorkspace**](docs/WorkspacesApi.md#deleteWorkspace) | **DELETE** /workspaces/{workspaceId} | Delete workspace
*PDFGeneratorAPI.WorkspacesApi* | [**getWorkspace**](docs/WorkspacesApi.md#getWorkspace) | **GET** /workspaces/{workspaceId} | Get workspace


## Documentation for Models

 - [PDFGeneratorAPI.Component](docs/Component.md)
 - [PDFGeneratorAPI.InlineResponse200](docs/InlineResponse200.md)
 - [PDFGeneratorAPI.InlineResponse2001](docs/InlineResponse2001.md)
 - [PDFGeneratorAPI.InlineResponse2002](docs/InlineResponse2002.md)
 - [PDFGeneratorAPI.InlineResponse2002Response](docs/InlineResponse2002Response.md)
 - [PDFGeneratorAPI.InlineResponse2003](docs/InlineResponse2003.md)
 - [PDFGeneratorAPI.InlineResponse2004](docs/InlineResponse2004.md)
 - [PDFGeneratorAPI.InlineResponse2004Meta](docs/InlineResponse2004Meta.md)
 - [PDFGeneratorAPI.InlineResponse2005](docs/InlineResponse2005.md)
 - [PDFGeneratorAPI.InlineResponse401](docs/InlineResponse401.md)
 - [PDFGeneratorAPI.InlineResponse403](docs/InlineResponse403.md)
 - [PDFGeneratorAPI.InlineResponse404](docs/InlineResponse404.md)
 - [PDFGeneratorAPI.InlineResponse422](docs/InlineResponse422.md)
 - [PDFGeneratorAPI.InlineResponse500](docs/InlineResponse500.md)
 - [PDFGeneratorAPI.Template](docs/Template.md)
 - [PDFGeneratorAPI.TemplateDefinition](docs/TemplateDefinition.md)
 - [PDFGeneratorAPI.TemplateDefinitionDataSettings](docs/TemplateDefinitionDataSettings.md)
 - [PDFGeneratorAPI.TemplateDefinitionEditor](docs/TemplateDefinitionEditor.md)
 - [PDFGeneratorAPI.TemplateDefinitionNew](docs/TemplateDefinitionNew.md)
 - [PDFGeneratorAPI.TemplateDefinitionNewLayout](docs/TemplateDefinitionNewLayout.md)
 - [PDFGeneratorAPI.TemplateDefinitionNewLayoutMargins](docs/TemplateDefinitionNewLayoutMargins.md)
 - [PDFGeneratorAPI.TemplateDefinitionNewLayoutRepeatLayout](docs/TemplateDefinitionNewLayoutRepeatLayout.md)
 - [PDFGeneratorAPI.TemplateDefinitionNewMargins](docs/TemplateDefinitionNewMargins.md)
 - [PDFGeneratorAPI.TemplateDefinitionNewPages](docs/TemplateDefinitionNewPages.md)
 - [PDFGeneratorAPI.Workspace](docs/Workspace.md)


## Documentation for Authorization



### JSONWebTokenAuth

- **Type**: Bearer authentication (JWT)

