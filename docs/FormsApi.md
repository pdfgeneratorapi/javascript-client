# PDFGeneratorAPI.FormsApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFrom**](FormsApi.md#createFrom) | **POST** /forms | Create form
[**deleteForm**](FormsApi.md#deleteForm) | **DELETE** /forms/{formId} | Delete form
[**getForm**](FormsApi.md#getForm) | **GET** /forms/{formId} | Get form
[**getForms**](FormsApi.md#getForms) | **GET** /forms | Get forms
[**shareForm**](FormsApi.md#shareForm) | **POST** /forms/{formId}/share | Share form
[**updateForm**](FormsApi.md#updateForm) | **PUT** /forms/{formId} | Update form



## createFrom

> CreateFrom201Response createFrom(form_configuration_new)

Create form

Creates a new form based on the configuration sent in the request body.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.FormsApi();
let form_configuration_new = new PDFGeneratorAPI.FormConfigurationNew(); // FormConfigurationNew | Form configuration
apiInstance.createFrom(form_configuration_new, (error, data, response) => {
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
 **form_configuration_new** | [**FormConfigurationNew**](FormConfigurationNew.md)| Form configuration | 

### Return type

[**CreateFrom201Response**](CreateFrom201Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteForm

> deleteForm(form_id)

Delete form

Deletes the form with specified id

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.FormsApi();
let form_id = 1; // Number | Form unique identifier
apiInstance.deleteForm(form_id, (error, data, response) => {
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
 **form_id** | **Number**| Form unique identifier | 

### Return type

null (empty response body)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getForm

> CreateFrom201Response getForm(form_id)

Get form

Returns form configuration

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.FormsApi();
let form_id = 1; // Number | Form unique identifier
apiInstance.getForm(form_id, (error, data, response) => {
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
 **form_id** | **Number**| Form unique identifier | 

### Return type

[**CreateFrom201Response**](CreateFrom201Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getForms

> GetForms200Response getForms(opts)

Get forms

Returns a list of forms available for the organization

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.FormsApi();
let opts = {
  'page': 1, // Number | Pagination: page to return
  'per_page': 20 // Number | Pagination: How many records to return per page
};
apiInstance.getForms(opts, (error, data, response) => {
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
 **page** | **Number**| Pagination: page to return | [optional] [default to 1]
 **per_page** | **Number**| Pagination: How many records to return per page | [optional] [default to 15]

### Return type

[**GetForms200Response**](GetForms200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## shareForm

> ShareForm201Response shareForm(form_id)

Share form

Creates an unique sharing URL to collect form data

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.FormsApi();
let form_id = 1; // Number | Form unique identifier
apiInstance.shareForm(form_id, (error, data, response) => {
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
 **form_id** | **Number**| Form unique identifier | 

### Return type

[**ShareForm201Response**](ShareForm201Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateForm

> CreateFrom201Response updateForm(form_id, form_configuration_new)

Update form

Updates the form configuration. The form configuration must be complete as the entire configuration is replaced and not merged.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.FormsApi();
let form_id = 1; // Number | Form unique identifier
let form_configuration_new = new PDFGeneratorAPI.FormConfigurationNew(); // FormConfigurationNew | Form configuration
apiInstance.updateForm(form_id, form_configuration_new, (error, data, response) => {
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
 **form_id** | **Number**| Form unique identifier | 
 **form_configuration_new** | [**FormConfigurationNew**](FormConfigurationNew.md)| Form configuration | 

### Return type

[**CreateFrom201Response**](CreateFrom201Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

