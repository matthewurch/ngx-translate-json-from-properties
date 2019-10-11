#!/usr/bin/env node

let propertiesReader = require('properties-reader');
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

let pathToProps = argv.input;

let properties = propertiesReader();

if(argv.encoding === "windows-1252") {
    let windows1252 = require('windows-1252');
    let binaryBuffer = fs.readFileSync(pathToProps).toString('binary');
    let decoded = windows1252.decode(binaryBuffer);
    properties.read(decoded);
} else {
    properties = propertiesReader(pathToProps);
}

let json = JSON.stringify(properties.path(), null, 2);
console.info(json);

// fs.writeFileSync(outputPath, json, 'utf-8');
