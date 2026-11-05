# PDFGeneratorAPI.Font

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The value of a component&#39;s &#x60;fontFamily&#x60; for this font | 
**name** | **String** | Font name, as the editor shows it | 
**parent** | **String** | The &#x60;id&#x60; of the font this one is grouped under, such as another weight of the same family | 
**styles** | **[String]** | The styles the font has glyphs of its own for. Text in another style is drawn with the regular glyphs. | 
**blocks** | **{String: Number}** | The Unicode blocks the font has at least half of the characters of, with the share it has in percent. 100 means every character of the block. | 



## Enum: [StylesEnum]


* `normal` (value: `"normal"`)

* `bold` (value: `"bold"`)

* `italic` (value: `"italic"`)

* `bold_italic` (value: `"bold_italic"`)




