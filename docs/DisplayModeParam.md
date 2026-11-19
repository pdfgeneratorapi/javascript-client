# PDFGeneratorAPI.DisplayModeParam

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**zoom** | **String** | Initial zoom * &#x60;fullpage&#x60; - Fits the whole page in the window * &#x60;fullwidth&#x60; - Fits the page width to the window * &#x60;real&#x60; - Actual size (100%) * &#x60;default&#x60; - Leaves the zoom to the viewer. The PDF gets no open action, which some e-invoice validators require  | [optional] [default to &#39;fullwidth&#39;]
**layout** | **String** | Page layout * &#x60;SinglePage&#x60; - One page at a time * &#x60;OneColumn&#x60; - Pages in one continuous column * &#x60;TwoColumnLeft&#x60; - Pages in two columns, odd-numbered pages on the left * &#x60;TwoColumnRight&#x60; - Pages in two columns, odd-numbered pages on the right  | [optional] [default to &#39;SinglePage&#39;]
**mode** | **String** | Panel shown when the document opens * &#x60;UseNone&#x60; - No panel * &#x60;UseOutlines&#x60; - Document outline (bookmarks) * &#x60;UseThumbs&#x60; - Page thumbnails * &#x60;FullScreen&#x60; - Full-screen mode, without menu bar or window controls  | [optional] [default to &#39;UseNone&#39;]



## Enum: ZoomEnum


* `fullpage` (value: `"fullpage"`)

* `fullwidth` (value: `"fullwidth"`)

* `real` (value: `"real"`)

* `default` (value: `"default"`)





## Enum: LayoutEnum


* `SinglePage` (value: `"SinglePage"`)

* `OneColumn` (value: `"OneColumn"`)

* `TwoColumnLeft` (value: `"TwoColumnLeft"`)

* `TwoColumnRight` (value: `"TwoColumnRight"`)





## Enum: ModeEnum


* `UseNone` (value: `"UseNone"`)

* `UseOutlines` (value: `"UseOutlines"`)

* `UseThumbs` (value: `"UseThumbs"`)

* `FullScreen` (value: `"FullScreen"`)




