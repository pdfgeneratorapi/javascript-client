# PDFGeneratorAPI.GenerateDocumentAsynchronousRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template** | [**TemplateParam**](TemplateParam.md) |  | [optional] 
**callback** | [**CallbackParam**](CallbackParam.md) |  | 
**format** | [**FormatParam**](FormatParam.md) |  | [optional] 
**output** | [**AsyncOutputParam**](AsyncOutputParam.md) |  | [optional] 
**name** | **String** | Generated document name (optional) | [optional] [default to &#39;&#39;]
**testing** | **Boolean** | When set to true the generation is not counted as merge (monthly usage), but a large PREVIEW stamp is added. | [optional] [default to false]
**make_accessible** | **Boolean** | Enables semantic document tagging. When enabled, a separate Make Accessible action is executed, which consumes additional credits. | [optional] [default to false]
**print** | **Boolean** | When set to true, the PDF opens the print dialog when it is opened in a viewer. | [optional] [default to false]
**empty_labels** | **Number** | Number of label positions to leave empty at the start of the first sheet. Only applies to label templates. | [optional] [default to 0]
**attachments** | [**[AttachmentsParamInner]**](AttachmentsParamInner.md) | Files embedded into the generated PDF as attachments. Only PDF and XML files are accepted. | [optional] 
**metadata** | [**MetadataParam**](MetadataParam.md) |  | [optional] 


