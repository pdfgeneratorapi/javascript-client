# PDFGeneratorAPI.ServicesApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWatermark**](ServicesApi.md#addWatermark) | **POST** /pdfservices/watermark | Add watermark
[**decryptDocument**](ServicesApi.md#decryptDocument) | **POST** /pdfservices/decrypt | Decrypt document
[**encryptDocument**](ServicesApi.md#encryptDocument) | **POST** /pdfservices/encrypt | Encrypt document
[**extractFormFields**](ServicesApi.md#extractFormFields) | **POST** /pdfservices/form/fields | Extract form fields
[**fillFormFields**](ServicesApi.md#fillFormFields) | **POST** /pdfservices/form/fill | Fill form fields
[**makeAccessible**](ServicesApi.md#makeAccessible) | **POST** /pdfservices/make-accessible | Make accessible
[**optimizeDocument**](ServicesApi.md#optimizeDocument) | **POST** /pdfservices/optimize | Optimize document



## addWatermark

> InlineObject9 addWatermark(add_watermark_request)

Add watermark

Adds a text or an image watermark to PDF document from base64 string or a remote URL.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.ServicesApi();
let add_watermark_request = new PDFGeneratorAPI.AddWatermarkRequest(); // AddWatermarkRequest | 
apiInstance.addWatermark(add_watermark_request, (error, data, response) => {
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
 **add_watermark_request** | [**AddWatermarkRequest**](AddWatermarkRequest.md)|  | 

### Return type

[**InlineObject9**](InlineObject9.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## decryptDocument

> InlineObject9 decryptDocument(encrypt_document_request)

Decrypt document

Decrypts an encrypted PDF document from base64 string or a remote URL.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.ServicesApi();
let encrypt_document_request = new PDFGeneratorAPI.EncryptDocumentRequest(); // EncryptDocumentRequest | 
apiInstance.decryptDocument(encrypt_document_request, (error, data, response) => {
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
 **encrypt_document_request** | [**EncryptDocumentRequest**](EncryptDocumentRequest.md)|  | 

### Return type

[**InlineObject9**](InlineObject9.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## encryptDocument

> InlineObject9 encryptDocument(encrypt_document_request)

Encrypt document

Encrypts a PDF document from base64 string or a remote URL.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.ServicesApi();
let encrypt_document_request = new PDFGeneratorAPI.EncryptDocumentRequest(); // EncryptDocumentRequest | 
apiInstance.encryptDocument(encrypt_document_request, (error, data, response) => {
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
 **encrypt_document_request** | [**EncryptDocumentRequest**](EncryptDocumentRequest.md)|  | 

### Return type

[**InlineObject9**](InlineObject9.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## extractFormFields

> InlineObject14 extractFormFields(extract_form_fields_request)

Extract form fields

Extracts form fields and their metadata from a PDF document using base64 string or a remote URL.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.ServicesApi();
let extract_form_fields_request = new PDFGeneratorAPI.ExtractFormFieldsRequest(); // ExtractFormFieldsRequest | 
apiInstance.extractFormFields(extract_form_fields_request, (error, data, response) => {
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
 **extract_form_fields_request** | [**ExtractFormFieldsRequest**](ExtractFormFieldsRequest.md)|  | 

### Return type

[**InlineObject14**](InlineObject14.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fillFormFields

> InlineObject9 fillFormFields(fill_form_fields_request)

Fill form fields

Fills form fields in a PDF document with provided data from base64 string or a remote URL.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.ServicesApi();
let fill_form_fields_request = new PDFGeneratorAPI.FillFormFieldsRequest(); // FillFormFieldsRequest | 
apiInstance.fillFormFields(fill_form_fields_request, (error, data, response) => {
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
 **fill_form_fields_request** | [**FillFormFieldsRequest**](FillFormFieldsRequest.md)|  | 

### Return type

[**InlineObject9**](InlineObject9.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## makeAccessible

> InlineObject9 makeAccessible(make_accessible_request)

Make accessible

Tags a PDF document for accessibility from base64 string or a remote URL.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.ServicesApi();
let make_accessible_request = new PDFGeneratorAPI.MakeAccessibleRequest(); // MakeAccessibleRequest | 
apiInstance.makeAccessible(make_accessible_request, (error, data, response) => {
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
 **make_accessible_request** | [**MakeAccessibleRequest**](MakeAccessibleRequest.md)|  | 

### Return type

[**InlineObject9**](InlineObject9.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## optimizeDocument

> InlineObject12 optimizeDocument(optimize_document_request)

Optimize document

Optimizes the size of a PDF document from base64 string or a remote URL.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.ServicesApi();
let optimize_document_request = new PDFGeneratorAPI.OptimizeDocumentRequest(); // OptimizeDocumentRequest | 
apiInstance.optimizeDocument(optimize_document_request, (error, data, response) => {
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
 **optimize_document_request** | [**OptimizeDocumentRequest**](OptimizeDocumentRequest.md)|  | 

### Return type

[**InlineObject12**](InlineObject12.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

