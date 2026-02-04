# Database

## Use db instance

You should be able to import the db instance with

```js
// make sure the root is db
const sequilize = require("[db]./db.js");
```

## Testing connection

Running the following script will create and leverage the db instance and test the connection.

```bash
# [root]/server/db
node test.js
```
