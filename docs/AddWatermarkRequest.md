# PDFGeneratorAPI.AddWatermarkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_url** | **String** | PDF file from remote URL to add the watermark to | 
**watermark** | [**WatermarkFileUrlWatermark**](WatermarkFileUrlWatermark.md) |  | 
**output** | **String** | Returned document output | [optional] [default to &#39;base64&#39;]
**name** | **String** | File name of the returned document | [optional] 
**file_base64** | **String** | PDF file from base64 string to add the watermark to | 



## Enum: OutputEnum


* `file` (value: `"file"`)

* `base64` (value: `"base64"`)

* `url` (value: `"url"`)




