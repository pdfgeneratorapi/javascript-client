# PDFGeneratorAPI.AssetsApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateQRCode**](AssetsApi.md#generateQRCode) | **POST** /assets/qrcode | Generate QR Code



## generateQRCode

> GenerateQRCode201Response generateQRCode(generate_qr_code_request)

Generate QR Code

Creates a QR code based on the configuration

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.AssetsApi();
let generate_qr_code_request = new PDFGeneratorAPI.GenerateQRCodeRequest(); // GenerateQRCodeRequest | QR Code configuration
apiInstance.generateQRCode(generate_qr_code_request, (error, data, response) => {
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
 **generate_qr_code_request** | [**GenerateQRCodeRequest**](GenerateQRCodeRequest.md)| QR Code configuration | 

### Return type

[**GenerateQRCode201Response**](GenerateQRCode201Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

