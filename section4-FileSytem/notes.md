## Filesytem & Command Line arguments
---

### Getting input using Command line arguments
Like we have window and document in the Browser
On node.js we have access to the global and process.
Process has a number of methods we can use

#### argv: argument vector 
-First two values are the path to the node executable file on your machine

#### Yargs
Node doesn't provide a lot of argument parsing. 
Yargs is one of the most popular library for parsing command lines arguments.
You can see this differnce when you run both 
```
console.log(process.argv);
C:\Users\Allan.Fernandes\nvm\v20.8.0\node.exe,C:\Users\Allan.Fernandes\
Documents\GitHub\nodejs\section4-FileSytem\app.js

console.log(yargs.argv); 
{"_":[],"$0":"app.js"}

```

##### Creating Commands using Yargs
```
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding new note') 
    }
})

yargs.parse();

```
The code snippet above uses **yargs.command** to set up a command for the Yargs parser to recognize when add is passed as an argument. However, simply defining the command isn't enough to make it execute automatically when you run your script with node app.js add.

To execute the command handler associated with the add command, you need to call   after setting up your commands. This will instruct Yargs to parse the command line arguments and execute the appropriate command handler based on the provided arguments.

##### Supporting options for your commands
For eg: The add command requires the title and the body of the note you're adding, the remove command needs the title of the note you're trying to remove

We do this using the builder in yargs

```
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        console.log("Adding note", argv) 
    }
})

node app.js --title="HBF"

Adding note { _: [ 'add' ], title: 'HBF', '$0': 'app.js' }

```
- You have to pass the argv to the handler, thats how it gets access to the arguments
-Basically now you can work with the argv.title 
```demandOption```: Default false, whether its compulsory
```type```: What is the type of argument, default boolean 

##### Storing data using JSON
**Javascript Object**
```
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
};

const bookJSON = JSON.stringify(book);

```
This is a JavaScript object. It's a collection of key-value pairs enclosed in curly braces {}. The keys are unquoted and the values can be of various types including strings, numbers, arrays, and even other objects

**JSON Object**
```
{
    "title": "Ego is the enemy",
    "author": "Ryan Holiday"
}

```
This is a JSON object. It's a string representation of data in a format that follows the JSON syntax rules. In JSON, keys must be quoted with double quotes ", and only simple data types like strings, numbers, booleans, arrays, and objects are allowed. Functions and undefined values are not allowed in JSON.

When you use ```JSON.stringify()``` on a JavaScript object, it converts the object into a JSON string. So ```bookJSON``` in your example is a JSON string, not a JSON object. It's a string that represents the JSON object book. Once serialized into a string, it can be transmitted over the network or stored in a file, for example, and later parsed back into a JavaScript object using ```JSON.parse()```.

**fs.readFileSync**
```
fs.readFileSync('1-json.json','')
```

Used to read files and takes in a single argument, which is the file name.

