# PDFGeneratorAPI.OptimizeDocumentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_url** | **String** | Public URL to a PDF document | 
**name** | **String** | Name for the PDF file | [optional] 
**output** | **String** | Returned document output format | [optional] [default to &#39;base64&#39;]
**file_base64** | **String** | PDF document in base64 encoded string format | 



## Enum: OutputEnum


* `file` (value: `"file"`)

* `base64` (value: `"base64"`)

* `url` (value: `"url"`)




