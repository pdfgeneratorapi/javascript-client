# PDFGeneratorAPI.TemplateDefinitionNewLayout

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **String** | Defines template page size. For any other size, use custom with width and height. | 
**width** | **Number** | Page width in units. Left out, it is the format&#39;s width; send it with a custom format. | [optional] 
**height** | **Number** | Page height in units. Left out, it is the format&#39;s height; send it with a custom format. | [optional] 
**unit** | **String** | Measure unit | [optional] [default to &#39;cm&#39;]
**orientation** | **String** | Page orientation | 
**rotation** | **Number** | Page rotation in degrees | [optional] 
**margins** | [**TemplateDefinitionNewLayoutMargins**](TemplateDefinitionNewLayoutMargins.md) |  | 
**repeat_layout** | [**TemplateDefinitionNewLayoutRepeatLayout**](TemplateDefinitionNewLayoutRepeatLayout.md) |  | [optional] 
**empty_labels** | **Number** | Specifies how many blank lables to add to sheet label. | [optional] [default to 0]



## Enum: FormatEnum


* `A2` (value: `"A2"`)

* `A3` (value: `"A3"`)

* `A4` (value: `"A4"`)

* `A5` (value: `"A5"`)

* `letter` (value: `"letter"`)

* `custom` (value: `"custom"`)

* `label` (value: `"label"`)





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




