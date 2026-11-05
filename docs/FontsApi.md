# PDFGeneratorAPI.FontsApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFonts**](FontsApi.md#getFonts) | **GET** /fonts | Get fonts



## getFonts

> GetFonts200Response getFonts(opts)

Get fonts

Returns the fonts the workspace&#39;s templates can use, sorted by name. Use a font&#39;s &#x60;id&#x60; as a component&#39;s &#x60;fontFamily&#x60;; a font that is not in this list is drawn with Open Sans.  Each font lists the styles it has glyphs of its own for, and the Unicode blocks it has at least half of the characters of, with the share in percent. To check particular characters, pass them in &#x60;covers&#x60;. 

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.FontsApi();
let opts = {
  'covers': "€₹✓" // String | Text whose every character a font must have a glyph for, in its regular style, to be returned. Control characters are ignored.
};
apiInstance.getFonts(opts, (error, data, response) => {
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
 **covers** | **String**| Text whose every character a font must have a glyph for, in its regular style, to be returned. Control characters are ignored. | [optional] 

### Return type

[**GetFonts200Response**](GetFonts200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

