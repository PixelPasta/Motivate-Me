#!/usr/bin/env node

import figlet from 'figlet'
import ora from 'ora'
import chalk from 'chalk'
import gradient  from 'gradient-string'
import fetch from 'node-fetch'

const arg = process.argv[2]?.toLowerCase()

const sleep = ms => new Promise(r => setTimeout(r, ms));
const items = ['black' , 'red' , 'green' , 'yellow' , 'blue' , 'magenta' , 'cyan' , 'white' , 'gray']
const color = items[Math.floor(Math.random()*items.length)];



if (arg === 'help') {
    figlet('Motivate Me', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(gradient.rainbow(data))
    });
    await sleep(100)
    console.log(`
    Thank you for using MotivateMe! This is a command line tool designed to motivate and entertain programmers who might get bored while coding!
    
    How to generate a quote: 
    npx motivateme [keyword]

    for example: "npx motivateme motivational" or
                 "npx motivateme history"
    
    
    A small project by https://github.com/PixelPasta`)
  
   
}
else if (arg == null) {
    
    figlet('Motivate Me', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(gradient.rainbow(data))
    });
    await sleep(100)
    console.log(`
    Thank you for using MotivateMe! This is a command line tool designed to motivate and entertain programmers who might get bored while coding!
    
    How to generate a quote: 
    npx motivateme [keyword]

    for example: "npx motivateme motivational" or
                 "npx motivateme history"
    
    
    A small project by https://github.com/PixelPasta`)
}
else {
    let content = await fetch(`https://api.quotable.io/random/?tags=${arg}`)
    content = await content.json()
    const spinner = ora('Searching for quotes');

    spinner.color = color
spinner.start()
    await sleep(3000)
spinner.stop()
    if (content.statusCode === 404) {
        console.log(chalk[`${color}`](`No Quotes were found :(... Maybe try a different keyword :)`))
    }
    else {
    console.log(chalk[`${color}`](
         `${content.content}
- ${content.authorSlug.replace('-', ' ')}`
    ))}

}