# PDFGeneratorAPI.WorkspacesApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteWorkspace**](WorkspacesApi.md#deleteWorkspace) | **DELETE** /workspaces/{workspaceId} | Delete workspace
[**getWorkspace**](WorkspacesApi.md#getWorkspace) | **GET** /workspaces/{workspaceId} | Get workspace



## deleteWorkspace

> InlineResponse2002 deleteWorkspace(workspace_id)

Delete workspace

Deletes the workspace

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.WorkspacesApi();
let workspace_id = demo.example@actualreports.com; // String | Workspace identifier
apiInstance.deleteWorkspace(workspace_id, (error, data, response) => {
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
 **workspace_id** | **String**| Workspace identifier | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkspace

> InlineResponse2005 getWorkspace(workspace_id)

Get workspace

Returns workspace information

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.WorkspacesApi();
let workspace_id = demo.example@actualreports.com; // String | Workspace identifier
apiInstance.getWorkspace(workspace_id, (error, data, response) => {
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
 **workspace_id** | **String**| Workspace identifier | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

