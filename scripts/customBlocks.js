/*
These are often used gcommands
*/
let gCommandsDictionary = {};
// Move (G0 or G1): G1 [X<pos>] [Y<pos>] [Z<pos>] [E<pos>] [F<speed>]
gCommandsDictionary["Move"] = `G1 X%1 Y%2 Z%3 E%4 F%5`;
// Dwell: G4 P<milliseconds>
gCommandsDictionary["Dwell"] = `G4 P%1`;
// Move to origin: G28 [X] [Y] [Z]
gCommandsDictionary["MoveToOrigin"] = `G28 X%1 Y%2 Z%3`;
//Turn off motors: M18 or M84
gCommandsDictionary["TurnOffMotors"] = `M18`;
//Wait for current moves to finish: M400
gCommandsDictionary["WaitToFinish"] = `M400`;
//Use absolute/relative distances for extrusion: M82, M83
gCommandsDictionary["UseAbsoluteDistance"] = `M82`;
gCommandsDictionary["UseRelativeDistance"] = `M83`;
//Use absolute/relative coordinates: G90, G91
gCommandsDictionary["AbsoluteCoordinates"] = `G90`;
gCommandsDictionary["RelativeCoordinates"] = `G91`;
//Set position: G92 [X<pos>] [Y<pos>] [Z<pos>] [E<pos>]
gCommandsDictionary["SetPosition"] = `G92 X%1 Y%2 Z%3 E%4`;
//Set speed factor override percentage: M220 S<percent>
gCommandsDictionary["SetSpeedFactorOverride"] = `M220 S%1`;
//Set extrude factor override percentage: M221 S<percent>
gCommandsDictionary["SetExtrudeFactorOverride"] = `M221 S%1`;
//Set acceleration: M204 S<value> OR M204 P<value> T<value>
gCommandsDictionary["SetAcceleration"] = `M204 S%1`;
//Note: If S is not specified and both P and T are specified, then the acceleration is set to the minimum of P and T. If only one of P or T is specified, the command has no effect.
//Get extruder temperature: M105
gCommandsDictionary["GetExtruderTemperature"] = `M105`;
//Set extruder temperature: M104 [T<index>] [S<temperature>]
gCommandsDictionary["SetExtruderTemperature"] = `M104 T%1 S%2`;
//Set extruder temperature and wait: M109 [T<index>] S<temperature>
gCommandsDictionary["SetExtruderTemperatureWithWait"] = `M109 T%1 S%2`;
//Note: M109 always waits for temperature to settle at requested value
//Set bed temperature: M140 [S<temperature>]
gCommandsDictionary["SetBedTemperature"] = `M140 S%1`;
//Set bed temperature and wait: M190 S<temperature>
gCommandsDictionary["SetBedTemperatureWithWait"] = `M190 S%1`;
//Note: M190 always waits for temperature to settle at requested value
//Set fan speed: M106 S<value>
gCommandsDictionary["SetFanSpeed"] = `M106 S%1`;
//Turn fan off: M107
gCommandsDictionary["TurnOffFan"] = `M107`;
//Emergency stop: M112
gCommandsDictionary["EmergencyStop"] = `M112`;
//Get current position: M114
gCommandsDictionary["GetCurrentPosition"] = `M114`;
//Get firmware version: M115
gCommandsDictionary["GetFirmwareVersion"] = `M115`;

/* Custom block definition of SetPosition Blockly Code
Don't change anything here.
In Future, other blockly definitions will be included here.
Note: Block names should match with Discionary keys */
Blockly.defineBlocksWithJsonArray([
  {
    type: "SetPosition",
    message0: "X %1 %2 Y %3 %4 Z %5 %6 E %7",
    args0: [
      {
        type: "field_number",
        name: "X",
        value: 0,
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_number",
        name: "Y",
        value: 0,
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_number",
        name: "Z",
        value: 0,
      },
      {
        type: "input_dummy",
      },
      {
        type: "field_number",
        name: "E",
        value: 0,
      },
    ],
    inputsInline: true,
    output: null,
    colour: 260,
    tooltip: "",
    helpUrl: "",
  },
]);

/* Custom Block SetPosition Javascript code 
Note: Block names should match with Discionary keys*/
Blockly.JavaScript["SetPosition"] = (block) => {
  let number_x = block.getFieldValue("X");
  let number_y = block.getFieldValue("Y");
  let number_z = block.getFieldValue("Z");
  let number_e = block.getFieldValue("E");
  let args = [number_x, number_y, number_z, number_e];
  // A word 'GCode:' is added in front of every GCode generation as an identifier
  var code = `Gcode: ${fetchGCommand("SetPosition", args)} // SetPosition`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

/* Construct respective command using dictionary  */
const fetchGCommand = (type, args) => {
  // do nothing if key doesn't exist
  if (!(type in gCommandsDictionary)) return;

  let argCount = 0;
  let gCommand = gCommandsDictionary[type];

  // when command takes no arguments
  if (args.length == 0) return gCommand;

  // when command takes at least one argument
  while (argCount <= args.length) {
    gCommand = gCommand.replace(`%${argCount + 1}`, args[argCount]);
    argCount++;
  }
  return gCommand;
};
