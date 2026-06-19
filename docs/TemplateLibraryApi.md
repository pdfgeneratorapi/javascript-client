# PDFGeneratorAPI.TemplateLibraryApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTemplateLibrary**](TemplateLibraryApi.md#getTemplateLibrary) | **GET** /templates/library | Get template library
[**getTemplateLibraryItem**](TemplateLibraryApi.md#getTemplateLibraryItem) | **GET** /templates/library/{publicId} | Open template from the library



## getTemplateLibrary

> GetTemplateLibrary200Response getTemplateLibrary(opts)

Get template library

Returns a list of publicly available templates from the template library. 

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';

let apiInstance = new PDFGeneratorAPI.TemplateLibraryApi();
let opts = {
  'tags': "tags_example" // String | Filter template by tags
};
apiInstance.getTemplateLibrary(opts, (error, data, response) => {
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
 **tags** | **String**| Filter template by tags | [optional] 

### Return type

[**GetTemplateLibrary200Response**](GetTemplateLibrary200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplateLibraryItem

> InlineObject16 getTemplateLibraryItem(public_id)

Open template from the library

Returns the template definition for a public template identified by its &#x60;public_id&#x60;. 

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';

let apiInstance = new PDFGeneratorAPI.TemplateLibraryApi();
let public_id = "bac8381bce1982e5f6957a0f52371336"; // String | Resource public id
apiInstance.getTemplateLibraryItem(public_id, (error, data, response) => {
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
 **public_id** | **String**| Resource public id | 

### Return type

[**InlineObject16**](InlineObject16.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

