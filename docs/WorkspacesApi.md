# PDFGeneratorAPI.WorkspacesApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWorkspace**](WorkspacesApi.md#createWorkspace) | **POST** /workspaces | Create workspace
[**deleteWorkspace**](WorkspacesApi.md#deleteWorkspace) | **DELETE** /workspaces/{workspaceIdentifier} | Delete workspace
[**getWorkspace**](WorkspacesApi.md#getWorkspace) | **GET** /workspaces/{workspaceIdentifier} | Get workspace
[**getWorkspaces**](WorkspacesApi.md#getWorkspaces) | **GET** /workspaces | Get workspaces



## createWorkspace

> CreateWorkspace200Response createWorkspace(opts)

Create workspace

Creates a regular workspace with identifier specified in the request.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.WorkspacesApi();
let opts = {
  'create_workspace_request': new PDFGeneratorAPI.CreateWorkspaceRequest() // CreateWorkspaceRequest | 
};
apiInstance.createWorkspace(opts, (error, data, response) => {
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
 **create_workspace_request** | [**CreateWorkspaceRequest**](CreateWorkspaceRequest.md)|  | [optional] 

### Return type

[**CreateWorkspace200Response**](CreateWorkspace200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWorkspace

> DeleteTemplate204Response deleteWorkspace(workspace_identifier)

Delete workspace

Delete workspace. Only regular workspaces can be deleted.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.WorkspacesApi();
let workspace_identifier = demo.example@actualreports.com; // String | Workspace identifier
apiInstance.deleteWorkspace(workspace_identifier, (error, data, response) => {
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
 **workspace_identifier** | **String**| Workspace identifier | 

### Return type

[**DeleteTemplate204Response**](DeleteTemplate204Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkspace

> CreateWorkspace200Response getWorkspace(workspace_identifier)

Get workspace

Returns workspace information for the workspace identifier specified in the request.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.WorkspacesApi();
let workspace_identifier = demo.example@actualreports.com; // String | Workspace identifier
apiInstance.getWorkspace(workspace_identifier, (error, data, response) => {
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
 **workspace_identifier** | **String**| Workspace identifier | 

### Return type

[**CreateWorkspace200Response**](CreateWorkspace200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkspaces

> GetWorkspaces200Response getWorkspaces()

Get workspaces

Returns all workspaces in the organization

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.WorkspacesApi();
apiInstance.getWorkspaces((error, data, response) => {
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

[**GetWorkspaces200Response**](GetWorkspaces200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

