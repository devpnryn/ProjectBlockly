// Configure the Blockly into given workspace
let demoWorkspace = Blockly.inject("blocklyDiv", {
  media: "../media/",
  toolbox: document.getElementById("toolbox"),
});
// Blockly.Xml.domToWorkspace(
//   document.getElementById("startBlocks"),
//   demoWorkspace
// );
// to store the commands while executing the code
let totalGCodes = []
// User can see the Blockly code in Javascript
const showCode = () => {
  confirm(getJSCodeFromWorkspace())
};

// User can see the GCode(s) of translated Javascript logic
const printGCode = () => {
  evaluateJsCode()
  confirm(totalGCodes.join("\n"))
  totalGCodes = []// reset the array before another btn click
};

// User can save the GCode(s) of translated Javascript logic into a file
// A file named GCodes.txt gets created and downloaded to Browser's default path
const downLoadGCode = () => {
  evaluateJsCode()
  saveToFile(totalGCodes.join("\n"));
  totalGCodes = [];// reset the array before another btn click
};
/** Helper functions **/
// a helper function to save data to a file
const saveToFile = (gCodes) => {
  let textToWrite = gCodes;
  let textFileAsBlob = new Blob([textToWrite], { type: "text/plain" });
  let fileNameToSaveAs = "GCodes.txt";
  let downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
  document.body.removeChild(downloadLink);
};

// to evaluate generated javascript code
const evaluateJsCode = () => {
  let code = getJSCodeFromWorkspace()
  // not so safe to use this eval() here.. need to change later 
  try {
    eval(code);
  } catch (e) {
    confirm(e);
  }
}

// generate the javascript code from workspace
const getJSCodeFromWorkspace = () => {
  // Generate JavaScript code and display it.
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  return Blockly.JavaScript.workspaceToCode(demoWorkspace);
}

// overriding the window.alert method to extract the data from it
window.alert = (txt) => {
  totalGCodes.push(txt)
}