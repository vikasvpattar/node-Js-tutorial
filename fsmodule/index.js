const fs = require("fs");
// -------------Non blocking IO Model (async)
// fs.writeFile("file.txt", "Data is added sucessfuly", () => {
//   console.log("data is added");
// });

// ----------Blocking Model (sync)
// const a = fs.writeFileSync(
//   "file2.txt",
//   "Data has been added through sync mode"
// );
// console.log(a);
// console.log("Hello from Vikas");

// ----Read File
// fs.readFile("file.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// ------updating t he contents of  the file

// fs.appendFile("file.txt", ", Data has been sucessfully added", (err) => {
//   console.log(err);
// });

// ------Renaming of file

// fs.rename("file2.txt", "newfile.txt", (err) => {
//   console.log(err);
// });

// ------Delete file

// fs.unlink("newfile.txt", (err) => {
//   console.log(err);
// });
