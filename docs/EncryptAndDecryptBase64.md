# PDFGeneratorAPI.EncryptAndDecryptBase64

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_base64** | **String** | PDF document in base64 encoded string format | 
**owner_password** | **String** | An owner password to open the encrypted document | 
**user_password** | **String** | An user password to open the encrypted document | [optional] 
**name** | **String** | Name for the PDF file | [optional] 
**output** | **String** | Returned document output format | [optional] [default to &#39;base64&#39;]



## Enum: OutputEnum


* `file` (value: `"file"`)

* `base64` (value: `"base64"`)

* `url` (value: `"url"`)




