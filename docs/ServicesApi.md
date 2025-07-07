# PDFGeneratorAPI.ServicesApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWatermark**](ServicesApi.md#addWatermark) | **POST** /pdfservices/watermark | Add watermark
[**decryptDocument**](ServicesApi.md#decryptDocument) | **POST** /pdfservices/decrypt | Decrypt document
[**encryptDocument**](ServicesApi.md#encryptDocument) | **POST** /pdfservices/encrypt | Encrypt document
[**extractFormFields**](ServicesApi.md#extractFormFields) | **POST** /pdfservices/form/fields | Extract form fields
[**fillFormFields**](ServicesApi.md#fillFormFields) | **POST** /pdfservices/form/fill | Fill form fields
[**optimizeDocument**](ServicesApi.md#optimizeDocument) | **POST** /pdfservices/optimize | Optimize document



## addWatermark

> AddWatermark201Response addWatermark(add_watermark_request)

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

[**AddWatermark201Response**](AddWatermark201Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## decryptDocument

> AddWatermark201Response decryptDocument(encrypt_document_request)

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

[**AddWatermark201Response**](AddWatermark201Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## encryptDocument

> AddWatermark201Response encryptDocument(encrypt_document_request)

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

[**AddWatermark201Response**](AddWatermark201Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## extractFormFields

> ExtractFormFields200Response extractFormFields(extract_form_fields_request)

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

[**ExtractFormFields200Response**](ExtractFormFields200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fillFormFields

> AddWatermark201Response fillFormFields(fill_form_fields_request)

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

[**AddWatermark201Response**](AddWatermark201Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## optimizeDocument

> OptimizeDocument201Response optimizeDocument(optimize_document_request)

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

[**OptimizeDocument201Response**](OptimizeDocument201Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

