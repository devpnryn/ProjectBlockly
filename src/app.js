
// Configure the Blockly into given workspace
let demoWorkspace = Blockly.inject('blocklyDiv',
{media: '../media/',
 toolbox: document.getElementById('toolbox')});
Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),
                       demoWorkspace);

// User can see the Blockly code in Javascript
const showCode=()=> {
// Generate JavaScript code and display it.
Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
let code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
alert(code);
}

// User can see the GCode(s) of translated Javascript logic
const generateGCode=()=>{
      // Generate JavaScript code and display it.
Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
let code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
alert(extractGCodes(code))
}

// User can save the GCode(s) of translated Javascript logic into a file
const SaveGCodes=()=>{
// save G-Codes to a file
Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
let code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
let gcodes = extractGCodes(code)
// let fs = require('fs')
// let file = fs.createWriteStream('GCodes.txt')
// file.on('error', ()=>{})
// gcodes.forEach((w)=>{file.write(w.join('\n'))})
// file.end()
}
const extractGCodes=(code) =>{
const regex = /Gcode:(.*)/gm;
let m;
let gStream = []
while ((m = regex.exec(code)) !== null) {
// This is necessary to avoid infinite loops with zero-width matches
if (m.index === regex.lastIndex) {
    regex.lastIndex++;
}
if (m === null)
    return;
let gCode = m[1].replace(/[),;,']/g, '').trim()
gStream.push(gCode)
}
return gStream
}