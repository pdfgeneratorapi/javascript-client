# PDFGeneratorAPI.TemplatesApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyTemplate**](TemplatesApi.md#copyTemplate) | **POST** /templates/{templateId}/copy | Copy template
[**createTemplate**](TemplatesApi.md#createTemplate) | **POST** /templates | Create template
[**deleteTemplate**](TemplatesApi.md#deleteTemplate) | **DELETE** /templates/{templateId} | Delete template
[**getEditorUrl**](TemplatesApi.md#getEditorUrl) | **POST** /templates/{templateId}/editor | Open editor
[**getTemplate**](TemplatesApi.md#getTemplate) | **GET** /templates/{templateId} | Get template
[**getTemplates**](TemplatesApi.md#getTemplates) | **GET** /templates | Get templates
[**updateTemplate**](TemplatesApi.md#updateTemplate) | **PUT** /templates/{templateId} | Update template



## copyTemplate

> InlineResponse2001 copyTemplate(template_id, opts)

Copy template

Creates a copy of a template to the workspace specified in authentication parameters.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.TemplatesApi();
let template_id = 19375; // Number | Template unique identifier
let opts = {
  'name': My copied template // String | Name for the copied template. If name is not specified then the original name is used.
};
apiInstance.copyTemplate(template_id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **Number**| Template unique identifier | 
 **name** | **String**| Name for the copied template. If name is not specified then the original name is used. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createTemplate

> InlineResponse2001 createTemplate(template_definition_new)

Create template

Creates a new template. If template configuration is not specified in the request body then an empty template is created. Template is placed to the workspace specified in authentication params. Template configuration must be sent in the request body.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.TemplatesApi();
let template_definition_new = new PDFGeneratorAPI.TemplateDefinitionNew(); // TemplateDefinitionNew | Template configuration as JSON string
apiInstance.createTemplate(template_definition_new, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_definition_new** | [**TemplateDefinitionNew**](TemplateDefinitionNew.md)| Template configuration as JSON string | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTemplate

> InlineResponse2002 deleteTemplate(template_id)

Delete template

Deletes the template from workspace

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.TemplatesApi();
let template_id = 19375; // Number | Template unique identifier
apiInstance.deleteTemplate(template_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **Number**| Template unique identifier | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEditorUrl

> InlineResponse2003 getEditorUrl(template_id, body, opts)

Open editor

Returns an unique URL which you can use to redirect your user to the editor from your application or use the generated URL as iframe source to show the editor within your application. When using iframe, make sure that your browser allows third-party cookies. 

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.TemplatesApi();
let template_id = 19375; // Number | Template unique identifier
let body = null; // Object | Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file.
let opts = {
  'language': en // String | Specify the editor UI language. Defaults to organization editor language.
};
apiInstance.getEditorUrl(template_id, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **Number**| Template unique identifier | 
 **body** | **Object**| Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file. | 
 **language** | **String**| Specify the editor UI language. Defaults to organization editor language. | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTemplate

> InlineResponse2001 getTemplate(template_id)

Get template

Returns template configuration

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.TemplatesApi();
let template_id = 19375; // Number | Template unique identifier
apiInstance.getTemplate(template_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **Number**| Template unique identifier | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplates

> InlineResponse200 getTemplates()

Get templates

Returns a list of templates available for the authenticated workspace

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.TemplatesApi();
apiInstance.getTemplates((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTemplate

> InlineResponse2001 updateTemplate(template_id, template_definition_new)

Update template

Updates template configuration. The template configuration for pages and layout must be complete as the entire configuration is replaced and not merged.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.TemplatesApi();
let template_id = 19375; // Number | Template unique identifier
let template_definition_new = new PDFGeneratorAPI.TemplateDefinitionNew(); // TemplateDefinitionNew | Template configuration as JSON string
apiInstance.updateTemplate(template_id, template_definition_new, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **Number**| Template unique identifier | 
 **template_definition_new** | [**TemplateDefinitionNew**](TemplateDefinitionNew.md)| Template configuration as JSON string | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

