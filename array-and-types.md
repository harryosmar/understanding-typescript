# Array and Types

## Implicit declare type

> only assignable to parameter of type 'string'

```js
let hobbies = ['eat', 'sleep'];
hobbies.push('playing');
hobbies.push(100); // error TS2345: Argument of type '100' is not assignable to parameter of type 'string'.
```

### Explicitly declare type

> only assignable to parameter of type 'string'

```js
let hobbies: string[] = ['eat', 'sleep', 100]; // error TS2345: Argument of type '100' is not assignable to parameter of type 'string'.
```

## array contains more than one type elements

> assignable to parameter of type 'string | number'

```js
let hobbies = ['eat', 'sleep', 100];
hobbies.push(true); // Argument of type 'true' is not assignable to parameter of type 'string | number'.
```

## Explicitly declare type any

> assignable to parameter of any type

```js
let hobbies: any[] = ['eat', 'sleep', 100];
hobbies.push(true); // no error
```