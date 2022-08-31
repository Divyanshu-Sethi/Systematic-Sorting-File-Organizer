// we will be creating a file system organizer
// features of the project
// If you have numerous files in a folder and they are not properly arranged.
// so you can use this tool to arrange them in a Systematic order
// Basically grouping of the file with similar extensions into there specifically mentioned folder.



const orderwise = require("./Orders/organize");

const helping = require("./Orders/help");

const treeModule = require("./Orders/tree");

let inputarr = process.argv.slice(2);


//console.log(inputarr);

let command = inputarr[0];

switch (command) {
  case "organize":
    orderwise.organizefnkey(inputarr[1]); //directory path
    break;

  case "tree":
    treeModule.treeFnKey(inputArr[1])
    break;

  case "help":
    helping.helpFnKey();
    break;

  default:
    console.log("Please Enter a valid command");
    break;
}

