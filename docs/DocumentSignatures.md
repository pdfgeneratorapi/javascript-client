# PDFGeneratorAPI.DocumentSignatures

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The one-line answer, reduced from every signature worst case first. &#x60;unavailable&#x60; means signature validation is not enabled on this deployment — it says nothing about the document.  | [optional] 
**status_label** | **String** | The status in words, ready to display. | [optional] 
**has_long_term_validation** | **Boolean** | The document carries the certificate and revocation data needed to verify it after the signing certificates expire.  | [optional] 
**covers_whole_document** | **Boolean** | The last signature covers every byte, so nothing was appended after it. | [optional] 
**document_timestamps** | **Number** | Timestamp-only signatures, counted rather than listed: they are machinery, not people, and would double every signer.  | [optional] 
**signatures** | [**[DocumentSignature]**](DocumentSignature.md) | One entry per signature, excluding document timestamps. | [optional] 



## Enum: StatusEnum


* `unavailable` (value: `"unavailable"`)

* `unsigned` (value: `"unsigned"`)

* `invalid` (value: `"invalid"`)

* `indeterminate` (value: `"indeterminate"`)

* `valid` (value: `"valid"`)




