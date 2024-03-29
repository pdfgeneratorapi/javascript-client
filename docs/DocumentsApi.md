# PDFGeneratorAPI.DocumentsApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateDocument**](DocumentsApi.md#generateDocument) | **POST** /documents/generate | Generate document
[**generateDocumentAsynchronous**](DocumentsApi.md#generateDocumentAsynchronous) | **POST** /documents/generate/async | Generate document (async)
[**generateDocumentBatch**](DocumentsApi.md#generateDocumentBatch) | **POST** /documents/generate/batch | Generate document (batch)
[**generateDocumentBatchAsynchronous**](DocumentsApi.md#generateDocumentBatchAsynchronous) | **POST** /documents/generate/batch/async | Generate document (batch + async)
[**getDocuments**](DocumentsApi.md#getDocuments) | **GET** /documents | Get documents



## generateDocument

> GenerateDocument201Response generateDocument(generate_document_request)

Generate document

Merges template with data and returns base64 encoded document or a public URL to a document. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.DocumentsApi();
let generate_document_request = new PDFGeneratorAPI.GenerateDocumentRequest(); // GenerateDocumentRequest | Request parameters, including template id, data and formats.
apiInstance.generateDocument(generate_document_request, (error, data, response) => {
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
 **generate_document_request** | [**GenerateDocumentRequest**](GenerateDocumentRequest.md)| Request parameters, including template id, data and formats. | 

### Return type

[**GenerateDocument201Response**](GenerateDocument201Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateDocumentAsynchronous

> GenerateDocumentAsynchronous201Response generateDocumentAsynchronous(generate_document_asynchronous_request)

Generate document (async)

Merges template with data as asynchronous job and makes POST request to callback URL defined in the request. Request uses the same format as response of synchronous generation endpoint. The job id is also added to the callback request as header PDF-API-Job-Id  *Example payload for callback URL:* &#x60;&#x60;&#x60; {   \&quot;response\&quot;: \&quot;https://us1.pdfgeneratorapi.com/share/12821/VBERi0xLjcKJeLjz9MKNyAwIG9i\&quot;,   \&quot;meta\&quot;: {     \&quot;name\&quot;: \&quot;a2bd25b8921f3dc7a440fd7f427f90a4.pdf\&quot;,     \&quot;display_name\&quot;: \&quot;a2bd25b8921f3dc7a440fd7f427f90a4\&quot;,     \&quot;encoding\&quot;: \&quot;binary\&quot;,     \&quot;content-type\&quot;: \&quot;application/pdf\&quot;   } } &#x60;&#x60;&#x60; 

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.DocumentsApi();
let generate_document_asynchronous_request = new PDFGeneratorAPI.GenerateDocumentAsynchronousRequest(); // GenerateDocumentAsynchronousRequest | Request parameters, including template id, data and formats.
apiInstance.generateDocumentAsynchronous(generate_document_asynchronous_request, (error, data, response) => {
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
 **generate_document_asynchronous_request** | [**GenerateDocumentAsynchronousRequest**](GenerateDocumentAsynchronousRequest.md)| Request parameters, including template id, data and formats. | 

### Return type

[**GenerateDocumentAsynchronous201Response**](GenerateDocumentAsynchronous201Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateDocumentBatch

> GenerateDocument201Response generateDocumentBatch(generate_document_batch_request)

Generate document (batch)

Allows to merge multiple templates with data and returns base64 encoded document or public URL to a document. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.DocumentsApi();
let generate_document_batch_request = new PDFGeneratorAPI.GenerateDocumentBatchRequest(); // GenerateDocumentBatchRequest | Request parameters, including template id, data and formats.
apiInstance.generateDocumentBatch(generate_document_batch_request, (error, data, response) => {
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
 **generate_document_batch_request** | [**GenerateDocumentBatchRequest**](GenerateDocumentBatchRequest.md)| Request parameters, including template id, data and formats. | 

### Return type

[**GenerateDocument201Response**](GenerateDocument201Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateDocumentBatchAsynchronous

> GenerateDocumentAsynchronous201Response generateDocumentBatchAsynchronous(generate_document_batch_asynchronous_request)

Generate document (batch + async)

Merges template with data as asynchronous job and makes POST request to callback URL defined in the request. Request uses the same format as response of synchronous generation endpoint. The job id is also added to the callback request as header PDF-API-Job-Id  *Example payload for callback URL:* &#x60;&#x60;&#x60; {   \&quot;response\&quot;: \&quot;https://us1.pdfgeneratorapi.com/share/12821/VBERi0xLjcKJeLjz9MKNyAwIG9i\&quot;,   \&quot;meta\&quot;: {     \&quot;name\&quot;: \&quot;a2bd25b8921f3dc7a440fd7f427f90a4.pdf\&quot;,     \&quot;display_name\&quot;: \&quot;a2bd25b8921f3dc7a440fd7f427f90a4\&quot;,     \&quot;encoding\&quot;: \&quot;binary\&quot;,     \&quot;content-type\&quot;: \&quot;application/pdf\&quot;   } } &#x60;&#x60;&#x60; 

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.DocumentsApi();
let generate_document_batch_asynchronous_request = new PDFGeneratorAPI.GenerateDocumentBatchAsynchronousRequest(); // GenerateDocumentBatchAsynchronousRequest | Request parameters, including template id, data and formats.
apiInstance.generateDocumentBatchAsynchronous(generate_document_batch_asynchronous_request, (error, data, response) => {
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
 **generate_document_batch_asynchronous_request** | [**GenerateDocumentBatchAsynchronousRequest**](GenerateDocumentBatchAsynchronousRequest.md)| Request parameters, including template id, data and formats. | 

### Return type

[**GenerateDocumentAsynchronous201Response**](GenerateDocumentAsynchronous201Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDocuments

> GetDocuments200Response getDocuments(opts)

Get documents

Returns a list of generated documents created by authorized workspace and stored in PDF Generator API. If master user is specified as workspace in JWT then all documents created in the organization are returned. NB! This endpoint returns only documents generated using the output&#x3D;url option.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.DocumentsApi();
let opts = {
  'start_date': 2022-08-01 12:00:00, // String | Start date. Format: Y-m-d H:i:s
  'end_date': 2022-08-05 12:00:00, // String | End date. Format: Y-m-d H:i:s. Defaults to current timestamp
  'page': 1, // Number | Pagination: page to return
  'per_page': 20 // Number | Pagination: How many records to return per page
};
apiInstance.getDocuments(opts, (error, data, response) => {
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
 **start_date** | **String**| Start date. Format: Y-m-d H:i:s | [optional] 
 **end_date** | **String**| End date. Format: Y-m-d H:i:s. Defaults to current timestamp | [optional] 
 **page** | **Number**| Pagination: page to return | [optional] [default to 1]
 **per_page** | **Number**| Pagination: How many records to return per page | [optional] [default to 15]

### Return type

[**GetDocuments200Response**](GetDocuments200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

