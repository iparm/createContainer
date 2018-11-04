# Description
  `createContainer` is a function for creating containers using HOCs.
  
# How to use

```js
  const ButtonContainer = createContainer(
    withProps({label: 'Click me'}), 
    // you can pass as mych HOCs as you like,
    // but the last argument always should be 
    // the Component you want to enhance  
    Button
  );
```