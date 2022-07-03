#!/usr/bin/env node
const {program} = require('commander')

program.command('test').action(() => {
    console.log('hello');
})

program.parse(process.argv)