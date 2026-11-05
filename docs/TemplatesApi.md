# PDFGeneratorAPI.TemplatesApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyTemplate**](TemplatesApi.md#copyTemplate) | **POST** /templates/{templateId}/copy | Copy template
[**createTemplate**](TemplatesApi.md#createTemplate) | **POST** /templates | Create template
[**deleteTemplate**](TemplatesApi.md#deleteTemplate) | **DELETE** /templates/{templateId} | Delete template
[**getTemplate**](TemplatesApi.md#getTemplate) | **GET** /templates/{templateId} | Get template
[**getTemplateData**](TemplatesApi.md#getTemplateData) | **GET** /templates/{templateId}/data | Get template data fields
[**getTemplateSchema**](TemplatesApi.md#getTemplateSchema) | **GET** /templates/schema | Get schema
[**getTemplates**](TemplatesApi.md#getTemplates) | **GET** /templates | Get templates
[**importTemplate**](TemplatesApi.md#importTemplate) | **POST** /templates/import | Import template
[**openEditor**](TemplatesApi.md#openEditor) | **POST** /templates/{templateId}/editor | Open editor
[**updateTemplate**](TemplatesApi.md#updateTemplate) | **PUT** /templates/{templateId} | Update template
[**validateTemplate**](TemplatesApi.md#validateTemplate) | **POST** /templates/validate | Validate template



## copyTemplate

> InlineObject18 copyTemplate(template_id, opts)

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

[**InlineObject18**](InlineObject18.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTemplate

> InlineObject18 createTemplate(template_definition_new)

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
let template_definition_new = new PDFGeneratorAPI.TemplateDefinitionNew(); // TemplateDefinitionNew | Template configuration
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
 **template_definition_new** | [**TemplateDefinitionNew**](TemplateDefinitionNew.md)| Template configuration | 

### Return type

[**InlineObject18**](InlineObject18.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTemplate

> deleteTemplate(template_id)

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
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **Number**| Template unique identifier | 

### Return type

null (empty response body)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplate

> InlineObject18 getTemplate(template_id)

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

[**InlineObject18**](InlineObject18.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplateData

> InlineObject2 getTemplateData(template_id)

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

[**InlineObject2**](InlineObject2.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplateSchema

> GetTemplateSchema200Response getTemplateSchema()

Get schema

Returns Template JSON Schema which defines the structure of the Template Definition.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';

let apiInstance = new PDFGeneratorAPI.TemplatesApi();
apiInstance.getTemplateSchema((error, data, response) => {
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

[**GetTemplateSchema200Response**](GetTemplateSchema200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplates

> InlineObject4 getTemplates(opts)

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
  'access': "private", // String | Filter template by access type. No values returns all templates. private - returns only private templates, organization - returns only organization templates.
  'page': 1, // Number | Pagination: page to return
  'per_page': 20, // Number | Pagination: How many records to return per page
  'order_by': "name", // String | Field to sort the templates by. Ignored when `name` or `tags` is set.
  'order_direction': "asc", // String | Sort direction. Ignored when `name` or `tags` is set.
  'search': "Invoice" // String | Returns templates whose ID, name, tags, creation date or modification date contains the search value. Ignored when `name` or `tags` is set.
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
 **order_by** | **String**| Field to sort the templates by. Ignored when &#x60;name&#x60; or &#x60;tags&#x60; is set. | [optional] [default to &#39;updated_at&#39;]
 **order_direction** | **String**| Sort direction. Ignored when &#x60;name&#x60; or &#x60;tags&#x60; is set. | [optional] [default to &#39;desc&#39;]
 **search** | **String**| Returns templates whose ID, name, tags, creation date or modification date contains the search value. Ignored when &#x60;name&#x60; or &#x60;tags&#x60; is set. | [optional] 

### Return type

[**InlineObject4**](InlineObject4.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importTemplate

> InlineObject18 importTemplate(import_template_request)

Import template

Creates a template from existing PDF

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.TemplatesApi();
let import_template_request = new PDFGeneratorAPI.ImportTemplateRequest(); // ImportTemplateRequest | Import a PDF via URL or base64 string as template
apiInstance.importTemplate(import_template_request, (error, data, response) => {
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
 **import_template_request** | [**ImportTemplateRequest**](ImportTemplateRequest.md)| Import a PDF via URL or base64 string as template | 

### Return type

[**InlineObject18**](InlineObject18.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## openEditor

> InlineObject3 openEditor(template_id, open_editor_request)

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

[**InlineObject3**](InlineObject3.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTemplate

> InlineObject18 updateTemplate(template_id, template_definition_update)

Update template

Updates template configuration. Each top-level field sent (name, layout, pages and the rest) replaces the stored one, so pages must be complete, with every component. A field left out keeps its stored value, the name included.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.TemplatesApi();
let template_id = 19375; // Number | Template unique identifier
let template_definition_update = new PDFGeneratorAPI.TemplateDefinitionUpdate(); // TemplateDefinitionUpdate | The template configuration to change
apiInstance.updateTemplate(template_id, template_definition_update, (error, data, response) => {
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
 **template_definition_update** | [**TemplateDefinitionUpdate**](TemplateDefinitionUpdate.md)| The template configuration to change | 

### Return type

[**InlineObject18**](InlineObject18.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## validateTemplate

> InlineObject1 validateTemplate(template_definition_new)

Validate template

Validates if the provided template configuration matches the template JSON schema.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';

let apiInstance = new PDFGeneratorAPI.TemplatesApi();
let template_definition_new = new PDFGeneratorAPI.TemplateDefinitionNew(); // TemplateDefinitionNew | Template configuration
apiInstance.validateTemplate(template_definition_new, (error, data, response) => {
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
 **template_definition_new** | [**TemplateDefinitionNew**](TemplateDefinitionNew.md)| Template configuration | 

### Return type

[**InlineObject1**](InlineObject1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

