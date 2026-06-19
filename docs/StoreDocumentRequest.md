# PDFGeneratorAPI.StoreDocumentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_base64** | **String** | Base64 encoded PDF file. Required if file_url is not provided. | [optional] 
**file_url** | **String** | Public HTTPS URL to a PDF file. Required if file_base64 is not provided. | [optional] 
**name** | **String** | Generated document name (optional) | [optional] [default to &#39;&#39;]
**output** | **String** | Response format. &#x60;url&#x60; returns a public URL to the stored document; &#x60;viewer&#x60; returns a public URL to the PDF viewer. | [optional] [default to &#39;url&#39;]



## Enum: OutputEnum


* `url` (value: `"url"`)

* `viewer` (value: `"viewer"`)




