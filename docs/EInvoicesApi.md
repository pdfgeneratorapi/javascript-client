# PDFGeneratorAPI.EInvoicesApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEInvoice**](EInvoicesApi.md#createEInvoice) | **POST** /einvoice | Create eInvoice
[**createFacturXEInvoice**](EInvoicesApi.md#createFacturXEInvoice) | **POST** /einvoice/facturx | Create Factur-X eInvoice
[**createXRechnungEInvoice**](EInvoicesApi.md#createXRechnungEInvoice) | **POST** /einvoice/xrechnung | Create XRechnung eInvoice
[**getEInvoiceSchema**](EInvoicesApi.md#getEInvoiceSchema) | **GET** /einvoice/schema | Get schema



## createEInvoice

> InlineObject createEInvoice(create_e_invoice_request)

Create eInvoice

This endpoint transforms a JSON payload into an XML-based e-invoice that is fully compliant with the European EN 16931 standard. The generated output can be formatted in either UBL (Universal Business Language) or CII (Cross-Industry Invoice) syntax, ensuring interoperability across B2B and B2G platforms. The JSON payload follows Peppol BIS Billing 3.0 UBL Invoice described here: https://docs.peppol.eu/poacc/billing/3.0/

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.EInvoicesApi();
let create_e_invoice_request = new PDFGeneratorAPI.CreateEInvoiceRequest(); // CreateEInvoiceRequest | eInvoice conversion
apiInstance.createEInvoice(create_e_invoice_request, (error, data, response) => {
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
 **create_e_invoice_request** | [**CreateEInvoiceRequest**](CreateEInvoiceRequest.md)| eInvoice conversion | 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createFacturXEInvoice

> InlineObject9 createFacturXEInvoice(create_factur_xe_invoice_request)

Create Factur-X eInvoice

This endpoint transforms a JSON payload a Factur-X e-invoice that is fully compliant with the European EN 16931 standard. The generated output is always a PDF document, embedding a structured CII (Cross-Industry Invoice) XML according to the Factur-X format into a human-readable invoice, ensuring interoperability across B2B and B2G platforms. The JSON payload follows Peppol BIS Billing 3.0 UBL Invoice described here: https://docs.peppol.eu/poacc/billing/3.0/

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.EInvoicesApi();
let create_factur_xe_invoice_request = new PDFGeneratorAPI.CreateFacturXEInvoiceRequest(); // CreateFacturXEInvoiceRequest | eInvoice conversion
apiInstance.createFacturXEInvoice(create_factur_xe_invoice_request, (error, data, response) => {
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
 **create_factur_xe_invoice_request** | [**CreateFacturXEInvoiceRequest**](CreateFacturXEInvoiceRequest.md)| eInvoice conversion | 

### Return type

[**InlineObject9**](InlineObject9.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createXRechnungEInvoice

> InlineObject createXRechnungEInvoice(create_e_invoice_request)

Create XRechnung eInvoice

This endpoint transforms a JSON payload into an XML-based XRechnung e-invoice that is fully compliant with the European EN 16931 standard. The generated output follows the XRechnung format and can be formatted in either UBL (Universal Business Language) or CII (Cross-Industry Invoice) syntax, ensuring interoperability across B2B and B2G platforms. The JSON payload follows Peppol BIS Billing 3.0 UBL Invoice described here: https://docs.peppol.eu/poacc/billing/3.0/

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.EInvoicesApi();
let create_e_invoice_request = new PDFGeneratorAPI.CreateEInvoiceRequest(); // CreateEInvoiceRequest | eInvoice conversion
apiInstance.createXRechnungEInvoice(create_e_invoice_request, (error, data, response) => {
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
 **create_e_invoice_request** | [**CreateEInvoiceRequest**](CreateEInvoiceRequest.md)| eInvoice conversion | 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEInvoiceSchema

> Object getEInvoiceSchema()

Get schema

Returns e-invoice JSON schema which defines the structure of the e-invoice.

### Example

```javascript
import PDFGeneratorAPI from 'pdf-generator-api-client';
let defaultClient = PDFGeneratorAPI.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JSONWebTokenAuth
let JSONWebTokenAuth = defaultClient.authentications['JSONWebTokenAuth'];
JSONWebTokenAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PDFGeneratorAPI.EInvoicesApi();
apiInstance.getEInvoiceSchema((error, data, response) => {
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

**Object**

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

