# PDFGeneratorAPI.TemplateDefinitionNewLayout

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **String** | Defines template page size | [optional] [default to &#39;A4&#39;]
**width** | **Number** | Page width in units | [optional] 
**height** | **Number** | Page height in units | [optional] 
**unit** | **String** | Measure unit | [optional] [default to &#39;cm&#39;]
**orientation** | **String** | Page orientation | [optional] 
**rotation** | **Number** | Page rotation in degrees | [optional] 
**margins** | [**TemplateDefinitionNewLayoutMargins**](TemplateDefinitionNewLayoutMargins.md) |  | [optional] 
**repeat_layout** | [**TemplateDefinitionNewLayoutRepeatLayout**](TemplateDefinitionNewLayoutRepeatLayout.md) |  | [optional] 
**empty_labels** | **Number** | Specifies how many blank lables to add to sheet label. | [optional] [default to 0]



## Enum: FormatEnum


* `A4` (value: `"A4"`)

* `letter` (value: `"letter"`)

* `custom` (value: `"custom"`)





## Enum: UnitEnum


* `cm` (value: `"cm"`)

* `in` (value: `"in"`)





## Enum: OrientationEnum


* `portrait` (value: `"portrait"`)

* `landscape` (value: `"landscape"`)





## Enum: RotationEnum


* `0` (value: `0`)

* `90` (value: `90`)

* `180` (value: `180`)

* `270` (value: `270`)




