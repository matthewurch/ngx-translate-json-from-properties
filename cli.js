#!/usr/bin/env node

let properties = require('@iamandrewluca/properties'); // https://github.com/iamandrewluca/node-properties

let fs = require('fs');

const argv = require('yargs').option('encoding', {
    alias: 'e',
    describe: 'input file encoding',
    choices: ['utf-8', 'windows-1252'],
    default: 'utf-8'
}).option('input', {
    alias: 'i',
    describe: 'input file path'
}).argv;

var options = {
    sections: false,
    comments: "#",
    separators: "=",
    path: true, //Reading a file, not a string
    namespaces: true //Parses dot separated keys as JavaScript objects
};

let pathToProps = argv.input;
properties.parse(pathToProps, options, function(error, obj) {
    if(error) {
        return console.error(error);
    }
    let json = JSON.stringify(obj, null, 2);
    console.info(json);
    //{ a: 1, b: 2, c: 3 }
});

// let properties = propertiesReader();

// if(argv.encoding === "windows-1252") {
//     let windows1252 = require('windows-1252');
//     let binaryBuffer = fs.readFileSync(pathToProps).toString('binary');
//     let decoded = windows1252.decode(binaryBuffer);
//     properties.read(decoded);
// } else {
//     properties = propertiesReader(pathToProps);
// }

// let json = JSON.stringify(properties.path(), null, 2);
// console.info(json);
