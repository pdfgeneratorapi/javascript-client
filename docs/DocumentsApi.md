# PDFGeneratorAPI.DocumentsApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mergeTemplate**](DocumentsApi.md#mergeTemplate) | **POST** /templates/templateId/output | Generate document
[**mergeTemplates**](DocumentsApi.md#mergeTemplates) | **POST** /templates/output | Generate document (multiple templates)



## mergeTemplate

> InlineResponse2004 mergeTemplate(template_id, data, opts)

Generate document

Merges template with data and returns base64 encoded document or a public URL to a document. You can send json encoded data in request body or a public URL to your json file as the data parameter. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.DocumentsApi();
let template_id = 19375; // Number | Template unique identifier
let data = new PDFGeneratorAPI.Data(); // Data | Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file.
let opts = {
  'name': My document, // String | Document name, returned in the meta data.
  'format': pdf, // String | Document format. The zip option will return a ZIP file with PDF files.
  'output': base64 // String | Response format. With the url option, the document is stored for 30 days and automatically deleted.
};
apiInstance.mergeTemplate(template_id, data, opts, (error, data, response) => {
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
 **data** | [**Data**](Data.md)| Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file. | 
 **name** | **String**| Document name, returned in the meta data. | [optional] 
 **format** | **String**| Document format. The zip option will return a ZIP file with PDF files. | [optional] [default to &#39;pdf&#39;]
 **output** | **String**| Response format. With the url option, the document is stored for 30 days and automatically deleted. | [optional] [default to &#39;base64&#39;]

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## mergeTemplates

> InlineResponse2004 mergeTemplates(request_body, opts)

Generate document (multiple templates)

Allows to merge multiples template with data and returns base64 encoded document or public URL to a document. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.DocumentsApi();
let request_body = [null]; // [Object] | Data used to specify templates and data objects which are used to merge the template
let opts = {
  'name': My document, // String | Document name, returned in the meta data.
  'format': pdf, // String | Document format. The zip option will return a ZIP file with PDF files.
  'output': base64 // String | Response format. With the url option, the document is stored for 30 days and automatically deleted.
};
apiInstance.mergeTemplates(request_body, opts, (error, data, response) => {
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
 **request_body** | [**[Object]**](Object.md)| Data used to specify templates and data objects which are used to merge the template | 
 **name** | **String**| Document name, returned in the meta data. | [optional] 
 **format** | **String**| Document format. The zip option will return a ZIP file with PDF files. | [optional] [default to &#39;pdf&#39;]
 **output** | **String**| Response format. With the url option, the document is stored for 30 days and automatically deleted. | [optional] [default to &#39;base64&#39;]

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

