## Note Taking App
---
* Node Module System
  * Core Node Modules - included by default into node
  * 3rd Party Modules - written by other developers
  * Use your own Modules
  
### File System Module
fs.writeFile: This is the method that is going to allow us to write some data to a file on our filesystem from the NodeJS application.

fs.writeFile has two versions:
- fs.writeFile: asynchronous
- fs.writeFileSync: synchronous


#### fs.writeFileSync
```
fs.writeFileSync(file, data)
```
Test Code@
```
fs.writeFileSync('hello.text', 'This file was created by Node.js!')


ReferenceError: fs is not defined
```
fs needs to be loaded in and defined.
The fs module has to be required by you in the script you're using it in.

```
const fs = require('fs')

fs.writeFileSync('hello.text', 'This file was created by Node.js!')

```

**The require function returns all of the stuff in the fs module so we're going to call a constant called fs**

If the file doesn't exisit it will be created and if it does exist it will be overwritten.