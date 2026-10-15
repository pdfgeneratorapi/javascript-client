# PDFGeneratorAPI.FormConfigurationNew

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template_id** | **Number** | Template ID which is connected to the form | [optional] 
**name** | **String** | Form name | 
**actions** | [**[FormConfigurationNewActionsInner]**](FormConfigurationNewActionsInner.md) | Array of action configurations. Each action is a separate object with a single key; leave an action out to disable it. | 
**fields** | [**[FormField]**](FormField.md) | Input fields shown on the form, in display order. Field names must be unique within the form. | 
**configuration** | [**FormConfiguration**](FormConfiguration.md) |  | [optional] 


