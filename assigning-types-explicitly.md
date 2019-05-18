# How to set type explicitly

## implicitly

```js
let mystring = 'helllo';
mystring = 1234; // error TS2322: Type '1234' is not assignable to type 'string'.


let mynumber = 1234;
mynumber = 'hello'; // TS2322: Type '"hello"' is not assignable to type 'number'.

let myboolean = true;
myboolean = 1234; // error TS2322: Type '1234' is not assignable to type 'boolean'.
```

## Explicitly

```js
let mystring: string;
mystring = 'helllo';
mystring = 1234; // error TS2322: Type '1234' is not assignable to type 'string'.


let mynumber: number;
mynumber = 1234;
mynumber = 1234.50;
mynumber = 'hello'; // TS2322: Type '"hello"' is not assignable to type 'number'.

let myboolean: boolean;
myboolean = true;
myboolean = 1234; // error TS2322: Type '1234' is not assignable to type 'boolean'.
```

## Type Any
 
### Implicitly declare as any

```js
let myVariable;
myVariable = 'hello';
myVariable = 1234;
myVariable = true;
// there is no error
```

### Explicitly declare as any

```js
let myVariable: any;
myVariable = 'hello';
myVariable = 1234;
myVariable = true;
// there is no error
```