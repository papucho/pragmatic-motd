#!/usr/bin/env node

/**
 * Module dependencies.
 */

const QUOTES = require('./data/quotes');
const colors = require('colors/safe');

/**
 * Prints a quote to the stdout.
 */

function displayQuote({ number, title, description }) {
  const output = [
    '',
    `[#${ colors.blue(number) }] ${ colors.bold(title) }`,
    '',
    description
  ];

  output.forEach(line => console.log(line));
}

/**
 * Generate a random integer number, from 0 til the max, provided as param.
 */

function generateRandomNumberUpTo(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Application.
 */

const selectedIndex = generateRandomNumberUpTo(QUOTES.length);
const quote = QUOTES[selectedIndex];

quote.number = selectedIndex;

displayQuote(quote, selectedIndex);
