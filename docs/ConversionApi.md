# PDFGeneratorAPI.ConversionApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convertHTML2PDF**](ConversionApi.md#convertHTML2PDF) | **POST** /conversion/html2pdf | HTML to PDF
[**convertURL2PDF**](ConversionApi.md#convertURL2PDF) | **POST** /conversion/url2pdf | URL to PDF



## convertHTML2PDF

> GenerateDocument200Response convertHTML2PDF(convert_html2_pdf_request)

HTML to PDF

Converts HTML content to PDF

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.ConversionApi();
let convert_html2_pdf_request = new PDFGeneratorAPI.ConvertHTML2PDFRequest(); // ConvertHTML2PDFRequest | 
apiInstance.convertHTML2PDF(convert_html2_pdf_request, (error, data, response) => {
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
 **convert_html2_pdf_request** | [**ConvertHTML2PDFRequest**](ConvertHTML2PDFRequest.md)|  | 

### Return type

[**GenerateDocument200Response**](GenerateDocument200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## convertURL2PDF

> GenerateDocument200Response convertURL2PDF(convert_url2_pdf_request)

URL to PDF

Converts public URL to PDF

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.ConversionApi();
let convert_url2_pdf_request = new PDFGeneratorAPI.ConvertURL2PDFRequest(); // ConvertURL2PDFRequest | 
apiInstance.convertURL2PDF(convert_url2_pdf_request, (error, data, response) => {
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
 **convert_url2_pdf_request** | [**ConvertURL2PDFRequest**](ConvertURL2PDFRequest.md)|  | 

### Return type

[**GenerateDocument200Response**](GenerateDocument200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

