# csv2json

> Turn CSVs into JSON

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install CSV2JSON --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('csv2json');
```

## The "CSV2JSON" task

### Overview
In your project's Gruntfile, add a section named `csv2json` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  csv2json: {
	  options: {
		  inputFilePath: 'csv',
		  outputFilePath: 'json'
	  }
  }
});
```

### Options

#### options.inputFilePath
Type: `String`
Default value: `'csv'`

A string value that points to the directory where your .csv file is.

#### options.outputFilePath
Type: `String`
Default value: `'json'`

A string value that points to where your .json file will be output.

### Usage Examples

`grunt csv2json:sample` will look for a .csv file named `sample` in the specified csv directory and automatically generate a corresponding JSON file in the specified JSON directory.

## Release History
_(Nothing yet)_
