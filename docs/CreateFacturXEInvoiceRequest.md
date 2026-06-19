# PDFGeneratorAPI.CreateFacturXEInvoiceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template** | [**CreateFacturXEInvoiceRequestTemplate**](CreateFacturXEInvoiceRequestTemplate.md) |  | 
**profile** | **String** | Factur-X conformance level. | [optional] [default to &#39;basic&#39;]
**output** | [**OutputParam**](OutputParam.md) |  | [optional] 
**name** | **String** | Generated document name (optional) | [optional] [default to &#39;&#39;]
**metadata** | [**MetadataParam**](MetadataParam.md) |  | [optional] 



## Enum: ProfileEnum


* `basic` (value: `"basic"`)

* `basicwl` (value: `"basicwl"`)

* `en16931` (value: `"en16931"`)

* `minimum` (value: `"minimum"`)

* `extended` (value: `"extended"`)

* `xrechnung` (value: `"xrechnung"`)




