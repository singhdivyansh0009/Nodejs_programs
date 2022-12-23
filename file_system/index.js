const fs = require("fs");
//making directory
fs.mkdirSync("bio");
//creating the file and writing data in it
fs.writeFileSync("bio/Data.txt", "Name:Divyansh kr singh \n DOB:09/11/2001");
//adding extra data in file
fs.appendFileSync("bio/Data.txt", "\nRoll No. : 057");
//displaying info of the file
let inside_data = fs.readFileSync("bio/Data.txt", "utf-8");
console.log(inside_data);
//deleting the folder
fs.rmdirSync("bio");
