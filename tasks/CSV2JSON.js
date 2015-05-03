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

		var done = this.async(); // Tell grunt to wait

		var fs = require('fs');
		
		var csv = require('fast-csv');
		
		var JSONStream = require('JSONStream');
					
		var inputFilePath = './'+grunt.config.get('csv2json.options.inputFilePath')+'/';
		
		var outputFilePath = './'+grunt.config.get('csv2json.options.outputFilePath')+'/';
								
		// Check if specified .csv directory is valid
		
		fs.exists(inputFilePath, function(exists){
		
			if(!exists){
		
				grunt.log.error(inputFilePath+' file path does not exist! Specify a valid .csv file and directory.');	
		
			} else {
				
				var inStream = fs.createReadStream(inputFilePath+csvFileName+'.csv'); // Read stream from CSV
				
				// Check if specified JSON directory is valid
		
				fs.exists(outputFilePath, function(exists){
		
					if(!exists){

						grunt.log.error(outputFilePath+' file path does not exist! Specify a valid directory to save your JSON file.'); // Grunt log missing JSON directory
						
					} else {
						
						var outStream = fs.createWriteStream('./'+outputFilePath+'/'+csvFileName+'.json'); // Create JSON write stream
						
						// Pipe CSV stream to JSONStream.stringify, then pipe to write stream
						csv.fromStream(inStream, {objectMode: true, headers: true})
						.pipe(JSONStream.stringify())
						.pipe(outStream);
						
						outStream.on('finish', function(){
							grunt.log.ok('JSON file successfully created');
							done(); // Tell Grunt task is done						
						});
		
					}
		
				});

			}
		});
													
	});

};
