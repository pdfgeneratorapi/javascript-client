# PDFGeneratorAPI.InlineObject14ResponseValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique field identifier | [optional] 
**type** | **String** | Field type | [optional] 
**name** | **String** | Field name | [optional] 
**value** | [**InlineObject14ResponseValueValue**](InlineObject14ResponseValueValue.md) |  | [optional] 
**locked** | **Boolean** | Whether the field is locked | [optional] 
**pages** | **[Number]** | Pages where the field appears | [optional] 
**_default** | [**InlineObject14ResponseValueDefault**](InlineObject14ResponseValueDefault.md) |  | [optional] 
**defaults** | **[String]** | Default values for multi-select fields | [optional] 
**values** | **[String]** | Selected values for multi-select fields | [optional] 
**options** | **[String]** | Available options for select fields | [optional] 
**format** | **String** | Field format (for date fields) | [optional] 
**maxlen** | **Number** | Maximum field length | [optional] 
**multiline** | **Boolean** | Whether text field is multiline | [optional] 
**editable** | **Boolean** | Whether combo box is editable | [optional] 
**multi** | **Boolean** | Whether list box allows multiple selections | [optional] 



## Enum: TypeEnum


* `textfield` (value: `"textfield"`)

* `datefield` (value: `"datefield"`)

* `checkbox` (value: `"checkbox"`)

* `radiobuttongroup` (value: `"radiobuttongroup"`)

* `combobox` (value: `"combobox"`)

* `listbox` (value: `"listbox"`)




