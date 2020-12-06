// Configure the Blockly into given workspace
let demoWorkspace = Blockly.inject("blocklyDiv", {
  media: "../media/",
  toolbox: document.getElementById("toolbox"),
});
Blockly.Xml.domToWorkspace(
  document.getElementById("startBlocks"),
  demoWorkspace
);

// User can see the Blockly code in Javascript
const showCode = () => {
  // Generate JavaScript code and display it.
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  let code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
  let sanitizedCode = code.replace(/GCode:/i, "");
  alert(sanitizedCode);
};

// User can see the GCode(s) of translated Javascript logic
const generateGCode = () => {
  // Generate JavaScript code and display it.
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  let code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
  alert(extractGCodes(code));
};

// User can save the GCode(s) of translated Javascript logic into a file
// A file named GCodes.txt gets created and downloaded to Browser's default path
const SaveGCodes = () => {
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  let code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
  let gcodes = extractGCodes(code);
  if (gcodes.length === 0) return;
  saveTextAsFile(gcodes.join("\n"));
};

// Extracts GCode string(s) from the given code
const extractGCodes = (code) => {
  // Look out for word 'GCode' in the translated Javascript code
  const regex = /Gcode:(.*)/gm;
  let m;
  let gStream = [];
  while ((m = regex.exec(code)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    if (m === null) return;

    // remove unwanted characters and store in array
    let gCode = m[1].replace(/[),;,']/g, "").trim();

    // To create acceptable commenting in gcommands
    gCode = gCode.replace("//", ";");
    gStream.push(gCode);
  }
  return gStream;
};

// a helper function to save data to a file
const saveTextAsFile = (gCodes) => {
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
