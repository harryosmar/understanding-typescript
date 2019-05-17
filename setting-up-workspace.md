# setting up workspace

## install lite-server

```
npm install lite-server --save-dev
```

## add ts config

```
./node_modules/typescript/bin/tsc  --init
```

> message TS6071: Successfully created a [tsconfig.json](https://github.com/harryosmar/understanding-typescript/blob/master/tsconfig.json) file.


## Start lite-server & watch .ts

add this to `script` section on [`package.json`](https://github.com/harryosmar/understanding-typescript/blob/master/package.json) file.

```json
 "start": "lite-server",
"build": "tsc",
"watch": "tsc --watch"
```

Then try to run start the `lite-server`

```
npm run start
```

and watch the changes on the `*.ts` file.

```
npm run watch
```
