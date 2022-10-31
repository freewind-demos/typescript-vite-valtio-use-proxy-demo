TypeScript Vite React Valtio State Management Demo
===========================

由于真正工作的是proxy，所以如果引用到了非proxy字段，就不会起作用。

几个注意点：

1. 对象中可以使用`as type`来明确类型
2. action中修改字段时，要引用proxy之后的对象
3. 使用store时，必须使用`store.action`风格，而不能先解构为`const {action} = store; action()`。因为这种情况下，proxy也会失效。

最好按这里提示的方法来组织 actions: 
https://github.com/pmndrs/valtio/wiki/How-to-organize-actions

```
npm install
npm run demo
```

It will open page on browser automatically.
