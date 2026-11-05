# PDFGeneratorAPI.MiscApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStatus**](MiscApi.md#getStatus) | **GET** /status | Get Service Status



## getStatus

> GetStatus200Response getStatus()

Get Service Status

Returns service status / health

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';

let apiInstance = new PDFGeneratorAPI.MiscApi();
apiInstance.getStatus((error, data, response) => {
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

[**GetStatus200Response**](GetStatus200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

