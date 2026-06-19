# PDFGeneratorAPI.FormsApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createForm**](FormsApi.md#createForm) | **POST** /forms | Create form
[**deleteForm**](FormsApi.md#deleteForm) | **DELETE** /forms/{formId} | Delete form
[**getForm**](FormsApi.md#getForm) | **GET** /forms/{formId} | Get form
[**getForms**](FormsApi.md#getForms) | **GET** /forms | Get forms
[**importForm**](FormsApi.md#importForm) | **POST** /forms/import | Import Form
[**openFormBuilder**](FormsApi.md#openFormBuilder) | **POST** /forms/open | Open new form builder
[**openFormBuilderForExistingForm**](FormsApi.md#openFormBuilderForExistingForm) | **POST** /forms/{formId}/open | Open existing form builder
[**shareForm**](FormsApi.md#shareForm) | **POST** /forms/{formId}/share | Share form
[**updateForm**](FormsApi.md#updateForm) | **PUT** /forms/{formId} | Update form



## createForm

> InlineObject17 createForm(form_configuration_new)

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
apiInstance.createForm(form_configuration_new, (error, data, response) => {
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

[**InlineObject17**](InlineObject17.md)

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

> InlineObject17 getForm(form_id)

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

[**InlineObject17**](InlineObject17.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getForms

> InlineObject6 getForms(opts)

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

[**InlineObject6**](InlineObject6.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importForm

> InlineObject17 importForm(import_form_request)

Import Form

Creates a new form based on editable PDF

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.FormsApi();
let import_form_request = new PDFGeneratorAPI.ImportFormRequest(); // ImportFormRequest | Import editable PDF via URL or base64 string as form
apiInstance.importForm(import_form_request, (error, data, response) => {
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
 **import_form_request** | [**ImportFormRequest**](ImportFormRequest.md)| Import editable PDF via URL or base64 string as form | 

### Return type

[**InlineObject17**](InlineObject17.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## openFormBuilder

> InlineObject19 openFormBuilder()

Open new form builder

Creates a new Form Builder session and returns a URL that can be used to open the embeddable Form Builder for creating a new form.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.FormsApi();
apiInstance.openFormBuilder((error, data, response) => {
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

[**InlineObject19**](InlineObject19.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## openFormBuilderForExistingForm

> InlineObject19 openFormBuilderForExistingForm(form_id)

Open existing form builder

Creates a Form Builder session for editing an existing form and returns a URL that can be used to open the embeddable Form Builder.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.FormsApi();
let form_id = 1; // Number | Form unique identifier
apiInstance.openFormBuilderForExistingForm(form_id, (error, data, response) => {
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

[**InlineObject19**](InlineObject19.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## shareForm

> InlineObject18 shareForm(form_id)

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

[**InlineObject18**](InlineObject18.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateForm

> InlineObject17 updateForm(form_id, form_configuration_new)

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

[**InlineObject17**](InlineObject17.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

