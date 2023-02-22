# PDFGeneratorAPI.TemplateDefinitionNewLayout

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **String** | Defines template page size | [optional] 
**width** | **Number** | Page width in units | [optional] 
**height** | **Number** | Page height in units | [optional] 
**unit** | **String** | Measure unit | [optional] 
**orientation** | **String** | Page orientation | [optional] 
**rotaion** | **Number** | Page rotation in degrees | [optional] 
**margins** | [**TemplateDefinitionNewLayoutMargins**](TemplateDefinitionNewLayoutMargins.md) |  | [optional] 
**repeat_layout** | [**TemplateDefinitionNewLayoutRepeatLayout**](TemplateDefinitionNewLayoutRepeatLayout.md) |  | [optional] 
**empty_labels** | **Number** | Defines how many pages or labels should be empty | [optional] 



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





## Enum: RotaionEnum


* `0` (value: `0`)

* `90` (value: `90`)

* `180` (value: `180`)

* `270` (value: `270`)




