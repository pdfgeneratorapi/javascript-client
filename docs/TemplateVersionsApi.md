# PDFGeneratorAPI.TemplateVersionsApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTemplateVersion**](TemplateVersionsApi.md#deleteTemplateVersion) | **DELETE** /templates/{templateId}/versions/{templateVersion} | Delete template version
[**getTemplateVersion**](TemplateVersionsApi.md#getTemplateVersion) | **GET** /templates/{templateId}/versions/{templateVersion} | Get template version
[**listTemplateVersions**](TemplateVersionsApi.md#listTemplateVersions) | **GET** /templates/{templateId}/versions | List template versions
[**promoteTemplateVersion**](TemplateVersionsApi.md#promoteTemplateVersion) | **PUT** /templates/{templateId}/versions/{templateVersion}/promote | Promote template version



## deleteTemplateVersion

> deleteTemplateVersion(template_id, template_version)

Delete template version

Deletes the specified template version. Production versions cannot be deleted. 

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.TemplateVersionsApi();
let template_id = 19375; // Number | Template unique identifier
let template_version = 56; // Number | Unique ID of the template version.
apiInstance.deleteTemplateVersion(template_id, template_version, (error, data, response) => {
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
 **template_version** | **Number**| Unique ID of the template version. | 

### Return type

null (empty response body)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplateVersion

> InlineObject16 getTemplateVersion(template_id, template_version)

Get template version

Returns the template definition of the specified version. 

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.TemplateVersionsApi();
let template_id = 19375; // Number | Template unique identifier
let template_version = 56; // Number | Unique ID of the template version.
apiInstance.getTemplateVersion(template_id, template_version, (error, data, response) => {
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
 **template_version** | **Number**| Unique ID of the template version. | 

### Return type

[**InlineObject16**](InlineObject16.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTemplateVersions

> TemplateVersionCollection listTemplateVersions(template_id, opts)

List template versions

Returns a paginated list of template versions for the specified template. 

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.TemplateVersionsApi();
let template_id = 19375; // Number | Template unique identifier
let opts = {
  'per_page': 56, // Number | Number of items per page.
  'page': 56 // Number | Page number to return.
};
apiInstance.listTemplateVersions(template_id, opts, (error, data, response) => {
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
 **per_page** | **Number**| Number of items per page. | [optional] 
 **page** | **Number**| Page number to return. | [optional] 

### Return type

[**TemplateVersionCollection**](TemplateVersionCollection.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## promoteTemplateVersion

> PromoteTemplateVersion200Response promoteTemplateVersion(template_id, template_version)

Promote template version

Promotes the specified template version to production. Only one version can be production at a time. 

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.TemplateVersionsApi();
let template_id = 19375; // Number | Template unique identifier
let template_version = 56; // Number | Unique ID of the template version.
apiInstance.promoteTemplateVersion(template_id, template_version, (error, data, response) => {
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
 **template_version** | **Number**| Unique ID of the template version. | 

### Return type

[**PromoteTemplateVersion200Response**](PromoteTemplateVersion200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

