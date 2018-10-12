# Node.js Module BoilerPlate 

This module is basic vanilla boilerplate for Node.js modules. This boilerplate include only the basic
elements required for Node.js module.

## How to use

### The code

Replace MYMODULE string with your module name. change MYMODULE.js file in lib directory to your-module-name.js
and change the require in index.js to your-module-name.js.

### package.json

You may change the package.json manually, but you should run 

    npm init
    
## How to run

After the changes, clone your directory to your project_directory/node_modules. You can require('MYMODULE') as any 
module. For example, put in app.js the following code:
	
    var module = require('MYMODULE');
    module.publicFunction();

MYMODULE should be in node_modules directory.