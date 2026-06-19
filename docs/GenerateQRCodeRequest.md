# PDFGeneratorAPI.GenerateQRCodeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **String** | The content which is used to generate QR code | 
**color** | **String** | QR code in hexadecimal format | [optional] [default to &#39;#000000&#39;]
**logo_base64** | **String** | A logo as a base64 image string to add on the QR code | [optional] 
**logo_url** | **String** | A logo URL to an image to add on the QR code | [optional] 
**output** | **String** | Response format | [optional] [default to &#39;base64&#39;]



## Enum: OutputEnum


* `file` (value: `"file"`)

* `base64` (value: `"base64"`)




