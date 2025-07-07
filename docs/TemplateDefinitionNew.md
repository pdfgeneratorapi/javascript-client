# PDFGeneratorAPI.TemplateDefinitionNew

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Template name | 
**tags** | **[String]** | A list of tags assigned to a template | [optional] 
**is_draft** | **Boolean** | Indicates if the template is a draft or published. | [optional] 
**layout** | [**TemplateDefinitionNewLayout**](TemplateDefinitionNewLayout.md) |  | [optional] 
**pages** | [**[TemplateDefinitionNewPagesInner]**](TemplateDefinitionNewPagesInner.md) | Defines page or label size, margins and components on page or label | [optional] 
**data_settings** | [**TemplateDefinitionNewDataSettings**](TemplateDefinitionNewDataSettings.md) |  | [optional] 
**editor** | [**TemplateDefinitionNewEditor**](TemplateDefinitionNewEditor.md) |  | [optional] 
**font_subsetting** | **Boolean** | If font-subsetting is applied to document when generated | [optional] [default to false]
**barcode_as_image** | **Boolean** | Defines if barcodes are rendered as raster images instead of vector graphics. | [optional] [default to false]


