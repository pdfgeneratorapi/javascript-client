# PDFGeneratorAPI.GenerateQRCodeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **String** | The content which is used to generate QR code | 
**color** | **String** | QR code color as a hex color code | [optional] [default to &#39;#000000&#39;]
**logo_base64** | **String** | A logo as a base64 image string to add on the QR code. Cannot be combined with &#x60;logo_url&#x60;. | [optional] 
**logo_url** | **String** | Public HTTPS URL of a logo image to add on the QR code. Cannot be combined with &#x60;logo_base64&#x60;. | [optional] 
**output** | **String** | Response format | [optional] [default to &#39;base64&#39;]



## Enum: OutputEnum


* `file` (value: `"file"`)

* `base64` (value: `"base64"`)




