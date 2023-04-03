// Credits:
// 	Kevin Alavik (puffer) - Main Developer
//
// Dependencies:
//	lib/handler 
//  lib/signing.js
// Latest changes:
// 	(v0.1) - Added files, prepare for main init
//
const handler = require("handler.js")
const types = require("types.js")
const codesign = require("codesign.js")
const signing = require("siging.js")
const yml = require("yml.js")

function testFunction(file) {
    ymlParse(file)
}

module.exports = { testFunction }