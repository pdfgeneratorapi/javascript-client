# PDFGeneratorAPI.ConvertURL2PDFRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | Public URL | [optional] 
**paper_size** | **String** | PDF page size | [optional] [default to &#39;a4&#39;]
**orientation** | **String** |  | [optional] [default to &#39;portrait&#39;]
**output** | **String** | Output | [optional] [default to &#39;base64&#39;]
**filename** | **String** | Document name | [optional] 
**wait_for_css** | **String** | CSS selector of an element to wait for before the page is printed; see &#x60;wait_for_css_state&#x60; | [optional] 
**wait_for_css_state** | **String** | How &#x60;wait_for_css&#x60; matches. &#x60;present&#x60; waits until the element exists, even if it is empty or hidden (e.g. a &#x60;&lt;div id&#x3D;\&quot;report-ready\&quot;&gt;&lt;/div&gt;&#x60; marker); &#x60;visible&#x60; waits until it is also visible with a non-empty size (e.g. a chart that appears when data has loaded). | [optional] [default to &#39;present&#39;]
**wait_for_js** | **String** | JavaScript expression evaluated in the page every 100ms; the page is printed once it is truthy. Promises are awaited, and an expression that throws counts as not ready yet. | [optional] 
**wait_timeout** | **Number** | Seconds to wait for &#x60;wait_for_css&#x60; / &#x60;wait_for_js&#x60; before applying &#x60;on_wait_timeout&#x60; | [optional] [default to 30]
**on_wait_timeout** | **String** | What to do when the wait signal is not met within &#x60;wait_timeout&#x60;. &#x60;error&#x60; returns a 422 response; &#x60;print&#x60; prints the page as it is. | [optional] [default to &#39;error&#39;]



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





## Enum: WaitForCssStateEnum


* `present` (value: `"present"`)

* `visible` (value: `"visible"`)





## Enum: OnWaitTimeoutEnum


* `error` (value: `"error"`)

* `print` (value: `"print"`)




