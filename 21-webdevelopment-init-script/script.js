const fs = require("fs");
const path = require("path");

const projectStructure = {
  projectName: "web-project",
  projectFiles: {
    "index.html": `<!DOCTYPE html>
    <html lang="en">
        <head>
        </head>
        <body>         
            <h1>test file</h1>
        </body>
    </html>`,
  },
};

(() => {
  fs.mkdir("testDir", (error) => {});
  fs.writeFile(
    "index.html",
    projectStructure.projectFiles["index.html"],
    (error) => {}
  );
})();
