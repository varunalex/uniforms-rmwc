# uniforms-rmwc

> React wrapper Material Design (Web) Components for `uniforms`.

## Install

```sh
$ npm install uniforms-rmwc --save
```
## Spacial Usage Examples

### TextField

 1. Assigned props
We can use value assigned props as same as RMWC.
```jsx
 <TextField name="name" withLeadingIcon="search" />
```
2. Un-assigned props
This props should put at the end of the assigned props or should assign true or false.
```jsx
 // Put un-assigned props at the end of the assigned props
 <TextField name="name" placeholder="Name" textarea fullWidth />

 // Use un-assigned props with true or false
 // In this case we can use un-assign props at a any postion of the component
 <TextField name="name" textarea="true" placeholder="Name" />
```
### HelperText
Prop helpertext attribute should be lowercase 'helpertext'
```jsx
 <TextField name="name" helpertext="Type your name" />

```
### DateField
In order to remove default text/placeholder present in html5 input element of type=date (WebKit only), use this CSS segment
```css
input::-webkit-datetime-edit{ color: transparent; }
input:focus::-webkit-datetime-edit{ color: #000; }
```
### ErrorField
This component is generated from TextFieldHelper rmwc component. If you need to use helper text with ErrorField for a specific field, you should pass helperText prop to the labeled ErrorField
```jsx
<ErrorField name="Name" helperText="Hello from helper text..." />
```
### SubmitField
SubmitField are generated from Bottons.
Submit button value could be pass through the value prop. ButtonIcon 'use' prop should be use as buttonIcon (prop) in SubmitField component.
```jsx
<SubmitField value="Submit" buttonIcon="favorite" />
```
### BoolField
BoolField are generated from CheckBoxes. If you need to use indeterminate prop, you should assign true string instead of javascript true value or just put indeterminate prop.
```jsx
<BoolField name="bool" indeterminate="true" />
```
### SelectField
Read more about option patterns : [https://jamesmfriedman.github.io/rmwc/select-menus](https://jamesmfriedman.github.io/rmwc/select-menus)
### ListAddField
To change Add button text pass 'placeholder' prop with your text to the component.
To change Icon pass 'buttonIcon' prop with icon name to the component.
### ListDelField
To change Remove button text pass 'placeholder' prop with your text to the component.
To change Icon pass 'buttonIcon' prop with icon name to the component.
### Tasks
 - [x] Auto[field/form]
 - [x] BaseForm
 - [x] BoolField
 - [x] DateField
 - [x] ErrorField
 - [ ] ErrorsField
 - [x] Helpertext
 - [x] HiddenField
 - [x] ListFields
 - [x] LongTextField (Removed)
 - [x] NestedField
 - [x] NumberField
 - [x] QuickForm
 - [x] RadioField
 - [x] SelectField
 - [x] SubmitField
 - [x] TextField
 - [x] ValidationForm
 - [x] ValidationQuickForm


For more in depth documentation see: [https://github.com/vazco/uniforms/](https://github.com/vazco/uniforms/).
