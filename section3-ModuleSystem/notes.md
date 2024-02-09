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

#### fs.appendFileSync

```
fs.appendFileSync('hello.text', '\nThis text will be appended on a new line!');
```

#### Load in another file you've created.

```
const getNotes = function getNotes() {
  return 'Your notes...'
}

module.exports = getNotes
```

#### Loading in npm modules.

- Don't forget to first initialize npm using ```npm init -y```
- ```npm install package-name```
- You can import using Common JS or ES6
- If using ES6, you need to change the packagee json file and mention the type="module"

```
{
  "name": "section3-modulesystem",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "type": "module",
}
```
#### Using Nodemon.
- All this while we were running our app.js using node app.js
- After making any change we still had to manually run node app.js
- Nodemon changes this, it's an npm package we install globally 

``` npm install nodemon -g```

- No we no longer have to re-run our script, we can just run nodemon app.js and it keeps listening for file changes and auto-runs our script.
```nodemon app.js``