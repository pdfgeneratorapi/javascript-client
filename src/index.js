/**
 * PDF Generator API
 * # Introduction PDF Generator API allows you easily generate transactional PDF documents and reduce the development and support costs by enabling your users to create and manage their document templates using a browser-based drag-and-drop document editor.  The PDF Generator API features a web API architecture, allowing you to code in the language of your choice. This API supports the JSON media type, and uses UTF-8 character encoding.  # Authentication The PDF Generator API uses __JSON Web Tokens (JWT)__ to authenticate all API requests. These tokens offer a method to establish secure server-to-server authentication by transferring a compact JSON object with a signed payload of your account’s API Key and Secret. When authenticating to the PDF Generator API, a JWT should be generated uniquely by a __server-side application__ and included as a __Bearer Token__ in the header of each request.  <SecurityDefinitions />  ## Accessing your API Key and Secret You can find your __API Key__ and __API Secret__ from the __Account Settings__ page after you login to PDF Generator API [here](https://pdfgeneratorapi.com/login).  ## Creating a JWT JSON Web Tokens are composed of three sections: a header, a payload (containing a claim set), and a signature. The header and payload are JSON objects, which are serialized to UTF-8 bytes, then encoded using base64url encoding.  The JWT's header, payload, and signature are concatenated with periods (.). As a result, a JWT typically takes the following form: ``` {Base64url encoded header}.{Base64url encoded payload}.{Base64url encoded signature} ```  We recommend and support libraries provided on [jwt.io](https://jwt.io/). While other libraries can create JWT, these recommended libraries are the most robust.  ### Header Property `alg` defines which signing algorithm is being used. PDF Generator API users HS256. Property `typ` defines the type of token and it is always JWT. ``` {   \"alg\": \"HS256\",   \"typ\": \"JWT\" } ```  ### Payload The second part of the token is the payload, which contains the claims  or the pieces of information being passed about the user and any metadata required. It is mandatory to specify the following claims: * issuer (`iss`): Your API key * subject (`sub`): Workspace identifier  You can also specify the token expiration time (`exp`) which is timestamp in seconds since Epoch (unix epoch time). It is highly recommended to set the exp timestamp for a short period, i.e. a matter of seconds. This way, if a token is intercepted or shared, the token will only be valid for a short period of time.  ``` {   \"iss\": \"ad54aaff89ffdfeff178bb8a8f359b29fcb20edb56250b9f584aa2cb0162ed4a\",   \"sub\": \"demo.example@actualreports.com\",   \"exp\": 1586112639 } ```  ### Signature To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that. The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is. ``` HMACSHA256(     base64UrlEncode(header) + \".\" +     base64UrlEncode(payload),     API_SECRET) ```  ### Putting all together The output is three Base64-URL strings separated by dots. The following shows a JWT that has the previous header and payload encoded, and it is signed with a secret. ``` eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhZDU0YWFmZjg5ZmZkZmVmZjE3OGJiOGE4ZjM1OWIyOWZjYjIwZWRiNTYyNTBiOWY1ODRhYTJjYjAxNjJlZDRhIiwic3ViIjoiZGVtby5leGFtcGxlQGFjdHVhbHJlcG9ydHMuY29tIn0.SxO-H7UYYYsclS8RGWO1qf0z1cB1m73wF9FLl9RCc1Q  // Base64 encoded header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 // Base64 encoded payload: eyJpc3MiOiJhZDU0YWFmZjg5ZmZkZmVmZjE3OGJiOGE4ZjM1OWIyOWZjYjIwZWRiNTYyNTBiOWY1ODRhYTJjYjAxNjJlZDRhIiwic3ViIjoiZGVtby5leGFtcGxlQGFjdHVhbHJlcG9ydHMuY29tIn0 // Signature: SxO-H7UYYYsclS8RGWO1qf0z1cB1m73wF9FLl9RCc1Q ```  ## Testing with JWTs You can create a temporary token in [Account Settings](https://pdfgeneratorapi.com/account/organization) page after you login to PDF Generator API. The generated token uses your email address as the subject (`sub`) value and is valid for __5 minutes__. You can also use [jwt.io](https://jwt.io/) to generate test tokens for your API calls. These test tokens should never be used in production applications.  # Libraries and SDKs ## Postman Collection We have created a [Postman](https://www.postman.com) Collection so you can easily test all the API endpoints wihtout developing and code. You can download the collection [here](https://app.getpostman.com/run-collection/8f99146f64819f3e6db5) or just click the button below.  [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/8f99146f64819f3e6db5)  ## Client Libraries All our Client Libraries are auto-generated using [OpenAPI Generator](https://openapi-generator.tech/) which uses the OpenAPI v3 specification to automatically generate a client library in specific programming language.  * [PHP Client](https://github.com/pdfgeneratorapi/php-client) * [Java Client](https://github.com/pdfgeneratorapi/java-client) * [Ruby Client](https://github.com/pdfgeneratorapi/ruby-client) * [Python Client](https://github.com/pdfgeneratorapi/python-client) * [Javascript Client](https://github.com/pdfgeneratorapi/javascript-client)  We have validated the generated libraries, but let us know if you find any anomalies in the client code. 
 *
 * The version of the OpenAPI document: 3.1.0
 * Contact: support@pdfgeneratorapi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Component from './model/Component';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse2002 from './model/InlineResponse2002';
import InlineResponse2002Response from './model/InlineResponse2002Response';
import InlineResponse2003 from './model/InlineResponse2003';
import InlineResponse2004 from './model/InlineResponse2004';
import InlineResponse2004Meta from './model/InlineResponse2004Meta';
import InlineResponse2005 from './model/InlineResponse2005';
import InlineResponse401 from './model/InlineResponse401';
import InlineResponse403 from './model/InlineResponse403';
import InlineResponse404 from './model/InlineResponse404';
import InlineResponse422 from './model/InlineResponse422';
import InlineResponse500 from './model/InlineResponse500';
import Template from './model/Template';
import TemplateDefinition from './model/TemplateDefinition';
import TemplateDefinitionDataSettings from './model/TemplateDefinitionDataSettings';
import TemplateDefinitionEditor from './model/TemplateDefinitionEditor';
import TemplateDefinitionNew from './model/TemplateDefinitionNew';
import TemplateDefinitionNewLayout from './model/TemplateDefinitionNewLayout';
import TemplateDefinitionNewLayoutMargins from './model/TemplateDefinitionNewLayoutMargins';
import TemplateDefinitionNewLayoutRepeatLayout from './model/TemplateDefinitionNewLayoutRepeatLayout';
import TemplateDefinitionNewMargins from './model/TemplateDefinitionNewMargins';
import TemplateDefinitionNewPages from './model/TemplateDefinitionNewPages';
import Workspace from './model/Workspace';
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
* @version 3.1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Component model constructor.
     * @property {module:model/Component}
     */
    Component,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse2002Response model constructor.
     * @property {module:model/InlineResponse2002Response}
     */
    InlineResponse2002Response,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2004Meta model constructor.
     * @property {module:model/InlineResponse2004Meta}
     */
    InlineResponse2004Meta,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse401 model constructor.
     * @property {module:model/InlineResponse401}
     */
    InlineResponse401,

    /**
     * The InlineResponse403 model constructor.
     * @property {module:model/InlineResponse403}
     */
    InlineResponse403,

    /**
     * The InlineResponse404 model constructor.
     * @property {module:model/InlineResponse404}
     */
    InlineResponse404,

    /**
     * The InlineResponse422 model constructor.
     * @property {module:model/InlineResponse422}
     */
    InlineResponse422,

    /**
     * The InlineResponse500 model constructor.
     * @property {module:model/InlineResponse500}
     */
    InlineResponse500,

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
     * The TemplateDefinitionNewMargins model constructor.
     * @property {module:model/TemplateDefinitionNewMargins}
     */
    TemplateDefinitionNewMargins,

    /**
     * The TemplateDefinitionNewPages model constructor.
     * @property {module:model/TemplateDefinitionNewPages}
     */
    TemplateDefinitionNewPages,

    /**
     * The Workspace model constructor.
     * @property {module:model/Workspace}
     */
    Workspace,

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
