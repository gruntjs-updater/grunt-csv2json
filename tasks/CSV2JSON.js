/*
 * csv-to-html
 * https://github.com/marinoa/grunt-html-builder2
 *
 * Copyright (c) 2015 Angel Marino
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
		
	grunt.registerTask('csv2json', 'Turn CSVS into JSON', function(csvFileName) {

		var fs = require('fs');
		
		var csv = require('fast-csv');
		
		var JSONStream = require('JSONStream');
		
		var done = this.async(); // Grunt apparently isn't normally async friendly?
			
		var inputFilePath = './'+grunt.config.get('csv2json.options.inputFilePath')+'/';
		
		var outputFilePath = './'+grunt.config.get('csv2json.options.outputFilePath')+'/';
								
		// Check if specified .csv directory is valid
		
		fs.exists(inputFilePath, function(exists){
		
			if(!exists){
		
				console.log(inputFilePath+' file path does not exist! Specify a valid .csv file and directory.');	
		
			} else {
				
				var inStream = fs.createReadStream(inputFilePath+csvFileName+'.csv');
		
				fs.exists(outputFilePath, function(exists){
		
					if(!exists){

						console.log(outputFilePath+' file path does not exist! Specify a valid directory to save your JSON file.');
						
					} else {
						
						var outStream = fs.createWriteStream('./'+outputFilePath+'/'+csvFileName+'.json');
						
						csv.fromStream(inStream, {objectMode: true, headers: true})
						.pipe(JSONStream.stringify())
						.pipe(outStream)
						.on('end', function(){
							console.log('JSON File Created');
							done();
						});
		
					}
		
				});

			}
		});
													
	});

};
