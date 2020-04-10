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

import ApiClient from '../ApiClient';
import TemplateDefinitionNewLayoutMargins from './TemplateDefinitionNewLayoutMargins';
import TemplateDefinitionNewLayoutRepeatLayout from './TemplateDefinitionNewLayoutRepeatLayout';

/**
 * The TemplateDefinitionNewLayout model module.
 * @module model/TemplateDefinitionNewLayout
 * @version 3.1.0
 */
class TemplateDefinitionNewLayout {
    /**
     * Constructs a new <code>TemplateDefinitionNewLayout</code>.
     * Defines template layout (e.g page format, margins).
     * @alias module:model/TemplateDefinitionNewLayout
     */
    constructor() { 
        
        TemplateDefinitionNewLayout.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplateDefinitionNewLayout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDefinitionNewLayout} obj Optional instance to populate.
     * @return {module:model/TemplateDefinitionNewLayout} The populated <code>TemplateDefinitionNewLayout</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateDefinitionNewLayout();

            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('orientation')) {
                obj['orientation'] = ApiClient.convertToType(data['orientation'], 'String');
            }
            if (data.hasOwnProperty('roation')) {
                obj['roation'] = ApiClient.convertToType(data['roation'], 'Number');
            }
            if (data.hasOwnProperty('margins')) {
                obj['margins'] = TemplateDefinitionNewLayoutMargins.constructFromObject(data['margins']);
            }
            if (data.hasOwnProperty('repeatLayout')) {
                obj['repeatLayout'] = TemplateDefinitionNewLayoutRepeatLayout.constructFromObject(data['repeatLayout']);
            }
            if (data.hasOwnProperty('emptyLabels')) {
                obj['emptyLabels'] = ApiClient.convertToType(data['emptyLabels'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Defines template page size
 * @member {module:model/TemplateDefinitionNewLayout.FormatEnum} format
 */
TemplateDefinitionNewLayout.prototype['format'] = undefined;

/**
 * Page width in units
 * @member {Number} width
 */
TemplateDefinitionNewLayout.prototype['width'] = undefined;

/**
 * Page height in units
 * @member {Number} height
 */
TemplateDefinitionNewLayout.prototype['height'] = undefined;

/**
 * Measure unit
 * @member {module:model/TemplateDefinitionNewLayout.UnitEnum} unit
 */
TemplateDefinitionNewLayout.prototype['unit'] = undefined;

/**
 * Page orientation
 * @member {module:model/TemplateDefinitionNewLayout.OrientationEnum} orientation
 */
TemplateDefinitionNewLayout.prototype['orientation'] = undefined;

/**
 * Page rotation in degrees
 * @member {module:model/TemplateDefinitionNewLayout.RoationEnum} roation
 */
TemplateDefinitionNewLayout.prototype['roation'] = undefined;

/**
 * @member {module:model/TemplateDefinitionNewLayoutMargins} margins
 */
TemplateDefinitionNewLayout.prototype['margins'] = undefined;

/**
 * @member {module:model/TemplateDefinitionNewLayoutRepeatLayout} repeatLayout
 */
TemplateDefinitionNewLayout.prototype['repeatLayout'] = undefined;

/**
 * Defines how many pages or labels should be empty
 * @member {Number} emptyLabels
 */
TemplateDefinitionNewLayout.prototype['emptyLabels'] = undefined;





/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
TemplateDefinitionNewLayout['FormatEnum'] = {

    /**
     * value: "A4"
     * @const
     */
    "A4": "A4",

    /**
     * value: "letter"
     * @const
     */
    "letter": "letter",

    /**
     * value: "custom"
     * @const
     */
    "custom": "custom"
};


/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */
TemplateDefinitionNewLayout['UnitEnum'] = {

    /**
     * value: "cm"
     * @const
     */
    "cm": "cm",

    /**
     * value: "in"
     * @const
     */
    "in": "in"
};


/**
 * Allowed values for the <code>orientation</code> property.
 * @enum {String}
 * @readonly
 */
TemplateDefinitionNewLayout['OrientationEnum'] = {

    /**
     * value: "portrait"
     * @const
     */
    "portrait": "portrait",

    /**
     * value: "landscape"
     * @const
     */
    "landscape": "landscape"
};


/**
 * Allowed values for the <code>roation</code> property.
 * @enum {Number}
 * @readonly
 */
TemplateDefinitionNewLayout['RoationEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

    /**
     * value: 90
     * @const
     */
    "90": 90,

    /**
     * value: 180
     * @const
     */
    "180": 180,

    /**
     * value: 270
     * @const
     */
    "270": 270
};



export default TemplateDefinitionNewLayout;

