#!/usr/bin/env node

"use strict"
const fs  =  require('fs');
const path  =  require('path');
const figlet  =  require('figlet');
const chalk =  require('chalk');
const commandLineArgs = require('command-line-args')
const [,,...args]  = process.argv;


const optionDefinitions = [
  { name: 'base', alias: 'b', type: String , defaultOption:true }
]
//const options = commandLineArgs(optionDefinitions)

//init base command

if ( args[0].toLowerCase() == 'init') {
	if (!args[1]) return console.log("Please insert application name");
	console.log(chalk.yellow(figlet.textSync("HTMLJAR",{horizontalLayout:'full',center:true})))	
	console.log("Creating application")
}

console.log(args)