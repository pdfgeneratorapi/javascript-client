# PDFGeneratorAPI.TemplatesApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyTemplate**](TemplatesApi.md#copyTemplate) | **POST** /templates/{templateId}/copy | Copy template
[**createTemplate**](TemplatesApi.md#createTemplate) | **POST** /templates | Create template
[**deleteTemplate**](TemplatesApi.md#deleteTemplate) | **DELETE** /templates/{templateId} | Delete template
[**getTemplate**](TemplatesApi.md#getTemplate) | **GET** /templates/{templateId} | Get template
[**getTemplateData**](TemplatesApi.md#getTemplateData) | **GET** /templates/{templateId}/data | Get template data fields
[**getTemplates**](TemplatesApi.md#getTemplates) | **GET** /templates | Get templates
[**openEditor**](TemplatesApi.md#openEditor) | **POST** /templates/{templateId}/editor | Open editor
[**updateTemplate**](TemplatesApi.md#updateTemplate) | **PUT** /templates/{templateId} | Update template



## copyTemplate

> CreateTemplate200Response copyTemplate(template_id, opts)

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
  'copy_template_request': new PDFGeneratorAPI.CopyTemplateRequest() // CopyTemplateRequest | 
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
 **copy_template_request** | [**CopyTemplateRequest**](CopyTemplateRequest.md)|  | [optional] 

### Return type

[**CreateTemplate200Response**](CreateTemplate200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTemplate

> CreateTemplate200Response createTemplate(template_definition_new)

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

[**CreateTemplate200Response**](CreateTemplate200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTemplate

> DeleteTemplate204Response deleteTemplate(template_id)

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

[**DeleteTemplate204Response**](DeleteTemplate204Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplate

> CreateTemplate200Response getTemplate(template_id)

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

[**CreateTemplate200Response**](CreateTemplate200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplateData

> GetTemplateData200Response getTemplateData(template_id)

Get template data fields

Returns all data fields used in the template. Returns structured JSON data that can be used to check which data fields are used in template or autogenerate sample data. 

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.TemplatesApi();
let template_id = 19375; // Number | Template unique identifier
apiInstance.getTemplateData(template_id, (error, data, response) => {
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

[**GetTemplateData200Response**](GetTemplateData200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplates

> GetTemplates200Response getTemplates(opts)

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
let opts = {
  'name': "name_example", // String | Filter template by name
  'tags': "tags_example", // String | Filter template by tags
  'access': private, // String | Filter template by access type. No values returns all templates. private - returns only private templates, organization - returns only organization templates.
  'page': 1, // Number | Pagination: page to return
  'per_page': 20 // Number | Pagination: How many records to return per page
};
apiInstance.getTemplates(opts, (error, data, response) => {
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
 **name** | **String**| Filter template by name | [optional] 
 **tags** | **String**| Filter template by tags | [optional] 
 **access** | **String**| Filter template by access type. No values returns all templates. private - returns only private templates, organization - returns only organization templates. | [optional] [default to &#39;&#39;]
 **page** | **Number**| Pagination: page to return | [optional] [default to 1]
 **per_page** | **Number**| Pagination: How many records to return per page | [optional] [default to 15]

### Return type

[**GetTemplates200Response**](GetTemplates200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## openEditor

> OpenEditor200Response openEditor(template_id, open_editor_request)

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
let open_editor_request = new PDFGeneratorAPI.OpenEditorRequest(); // OpenEditorRequest | 
apiInstance.openEditor(template_id, open_editor_request, (error, data, response) => {
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
 **open_editor_request** | [**OpenEditorRequest**](OpenEditorRequest.md)|  | 

### Return type

[**OpenEditor200Response**](OpenEditor200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTemplate

> CreateTemplate200Response updateTemplate(template_id, template_definition_new)

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

[**CreateTemplate200Response**](CreateTemplate200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

