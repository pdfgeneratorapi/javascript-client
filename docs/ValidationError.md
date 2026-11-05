# PDFGeneratorAPI.ValidationError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **String** | Error description. For validation failures, the first error followed by \&quot;(and N more errors)\&quot; when there are several. | 
**errors** | **{String: [String]}** | Validation messages keyed by the request field that failed. Present only for validation failures. | [optional] 


