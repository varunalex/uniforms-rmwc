# uniforms-material

> React wrapper Material Design (Web) Components for `uniforms`.

## Install

```sh
$ npm install uniforms-rmwc 
```
## Usage

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
### ErrorField
This component is generated from TextFieldHelper rmwc component. If you need to use helper text for a specific field, you should pass helperText prop to the labeled ErrorField
```jsx
<ErrorField name="Name" helperText="Hello from helper text..." />
```


For more in depth documentation see: [https://github.com/vazco/uniforms/](https://github.com/vazco/uniforms/).
