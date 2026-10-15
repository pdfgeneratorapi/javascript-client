# PDFGeneratorAPI.FormTableColumn

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **String** | Column label displayed in the form | 
**name** | **String** | Data field name of the column | 
**type** | **String** | Column type. &#x60;select&#x60; columns require &#x60;subRows&#x60; with options and a &#x60;default&#x60; value. | 
**required** | **Boolean** | Specifies if the column is required or not | 
**_default** | **String** | Value pre-filled in the column. Required for &#x60;select&#x60; columns and must be one of the options. | [optional] 
**sub_rows** | [**[FormFieldOptions]**](FormFieldOptions.md) | Options for &#x60;select&#x60; columns (a single object). Not used by other column types. | [optional] 



## Enum: TypeEnum


* `text` (value: `"text"`)

* `integer` (value: `"integer"`)

* `number` (value: `"number"`)

* `date` (value: `"date"`)

* `select` (value: `"select"`)

* `image` (value: `"image"`)

* `pdf` (value: `"pdf"`)




