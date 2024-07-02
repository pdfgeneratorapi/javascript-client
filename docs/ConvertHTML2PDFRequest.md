# PDFGeneratorAPI.ConvertHTML2PDFRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **String** | HTML content | [optional] 
**paper_size** | **String** | PDF page size | [optional] [default to &#39;a4&#39;]
**orientation** | **String** |  | [optional] [default to &#39;portrait&#39;]
**output** | **String** | Output | [optional] [default to &#39;base64&#39;]
**filename** | **String** | Document name | [optional] 



## Enum: PaperSizeEnum


* `a0` (value: `"a0"`)

* `a1` (value: `"a1"`)

* `a2` (value: `"a2"`)

* `a3` (value: `"a3"`)

* `a4` (value: `"a4"`)

* `legal` (value: `"legal"`)

* `tabloid` (value: `"tabloid"`)

* `letter` (value: `"letter"`)





## Enum: OrientationEnum


* `portrait` (value: `"portrait"`)

* `landscape` (value: `"landscape"`)





## Enum: OutputEnum


* `base64` (value: `"base64"`)

* `file` (value: `"file"`)




