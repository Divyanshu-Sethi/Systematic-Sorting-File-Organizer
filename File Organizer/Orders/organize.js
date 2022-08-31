const fs=require('fs')

const path=require('path')

let types = {
    media: ["mp4", "mkv", "mp3", "jpg", "jpeg"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
      "docx",
      "doc",
      "pdf",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "txt",
      "ps",
      "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
  };
  

function organize(dirpath) {
    if (dirpath == undefined) {
      console.log("Please Enter a valid directory path");
      //check whether folder path is given or not
      return;
    } else {
      let doesexist = fs.existsSync(dirpath);
      //here we are cheking folder path exist or not
      if (doesexist == true) {
        destpath = path.join(dirpath, "Organized_File");
        //so first we will make a path for the folder
        //C:\Users\DIVYANSHU\Desktop\web_dev\NODE_JS\test folder\Organized_File
  
        if (fs.existsSync(destpath) == false) {
          fs.mkdirSync(destpath); // Creation of a folder if it doesnt exists
        } else {
          console.log("folder Already Exists");
        }
      } else {
        console.log("Please enter a Valid Path");
      }
    }
  
    organized_help(dirpath, destpath);
  }
  function organized_help(src, dest) {
    let childnames = fs.readdirSync(src);
    //console.log(childnames)
  
    for (let i = 0; i < childnames.length; i++) {
      let childaddress = path.join(src, childnames[i]);
      let checkfile = fs.lstatSync(childaddress).isFile();
      //console.log(childaddress+ " "+checkfile)
  
      if (checkfile == true) {
        let filecategory = getcategory(childnames[i]); //abstraction
        console.log(childnames[i] + "belongs to " + filecategory)
  
        sendfiles(childaddress , dest , filecategory )
      }
    }
  }
  
  function getcategory(filename) {
    //category wise check to put so an so file into folder
    let ext = path.extname(filename);
    ext = ext.slice(1);
    //console.log(ext);
  
    for (let type in types) {
      //for in loop
      let cTypeArr = types[type];
      //console.log(cTypeArr)
      for (let i = 0; i < cTypeArr.length; i++) {
        if (ext == cTypeArr[i]) {
          return type;
        }
      }
    }
    return "other";
  }
  
  function sendfiles(srcFilePath , dest , filecategory ){
    let catPath = path.join(dest , filecategory)  //here we are making category path to create folder
    if(fs.existsSync(catPath)==false){
      // check if the category folder exist
      fs.mkdirSync(catPath)
    }
  
    let filename = path.basename(srcFilePath)
    let destPath=path.join(catPath, filename)
  
   fs.copyFileSync(srcFilePath , destPath)
  
   fs.unlinkSync(srcFilePath)
  
   console.log(filename + 'Copied to' + filecategory)
  
  }

  module.exports = {
    organizefnkey : organize
  }