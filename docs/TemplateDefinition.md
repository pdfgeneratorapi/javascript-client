# PDFGeneratorAPI.TemplateDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Template name | [optional] 
**tags** | **[String]** | A list of tags assigned to a template | [optional] 
**is_draft** | **Boolean** | Indicates if the template is a draft or published. | [optional] 
**layout** | [**TemplateDefinitionNewLayout**](TemplateDefinitionNewLayout.md) |  | [optional] 
**pages** | [**[TemplateDefinitionNewPagesInner]**](TemplateDefinitionNewPagesInner.md) | Defines page or label size, margins and components on page or label | [optional] 
**data_settings** | [**TemplateDefinitionNewDataSettings**](TemplateDefinitionNewDataSettings.md) |  | [optional] 
**editor** | [**TemplateDefinitionNewEditor**](TemplateDefinitionNewEditor.md) |  | [optional] 
**font_subsetting** | **Boolean** | If font-subsetting is applied to document when generated | [optional] [default to false]
**barcode_as_image** | **Boolean** | Defines if barcodes are rendered as raster images instead of vector graphics. | [optional] [default to false]
**id** | **Number** | Unique identifier. &#x60;null&#x60; for a template library preview, which is not a template of the workspace. | [optional] 
**improved_html_spacing** | **Boolean** | Measures HTML text the way it is drawn. New templates have it on; one saved before it existed keeps it off, and the layout it was designed with. | [optional] 
**background_pdf** | **String** | A base64 PDF the pages are drawn on. Set when the template is imported from a PDF. | [optional] 


