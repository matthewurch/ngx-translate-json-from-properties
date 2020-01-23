#!/usr/bin/env node

let properties = require('@iamandrewluca/properties'); // https://github.com/iamandrewluca/node-properties

const argv = require('yargs').option('input', {
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
});
