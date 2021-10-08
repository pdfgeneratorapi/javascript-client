# PDFGeneratorAPI.InlineResponse401

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **String** | Error description | [optional] 
**status** | **Number** | HTTP Error code | [optional] 



## Enum: ErrorEnum


* `failed: request expired` (value: `"Authentication failed: request expired"`)

* `failed: signature or secret missing` (value: `"Authentication failed: signature or secret missing"`)

* `failed: workspace missing` (value: `"Authentication failed: workspace missing"`)

* `failed: key missing` (value: `"Authentication failed: key missing"`)

* `failed: property &#39;iss&#39; (issuer) missing in JWT` (value: `"Authentication failed: property 'iss' (issuer) missing in JWT"`)

* `failed: property &#39;sub&#39; (subject) missing in JWT` (value: `"Authentication failed: property 'sub' (subject) missing in JWT"`)

* `failed: property &#39;exp&#39; (expiration time) missing in JWT` (value: `"Authentication failed: property 'exp' (expiration time) missing in JWT"`)

* `failed: invalid &#39;iss&#39; (issuer)` (value: `"Authentication failed: invalid 'iss' (issuer)"`)

* `failed: incorrect signature` (value: `"Authentication failed: incorrect signature"`)

* `failed` (value: `"Authentication failed"`)




