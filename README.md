# Description
  `createContainer` is a function for creating containers using HOCs.
  It wraps the result component `displayName` with suffix `Container` for the debugging purpose.
  
# How to use

```js
  const ButtonContainer = createContainer(
    withProps({label: 'Click me'}), 
    // you can pass as many HOCs as you like,
    // but the last argument always should be 
    // the Component you want to enhance  
    Button
  );
```
