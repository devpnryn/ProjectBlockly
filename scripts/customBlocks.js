/*
These are often used gcommands
reference used is https://github.com/KevinOConnor/klipper/blob/master/docs/G-Codes.md
*/
const G_COMMANDS = {
  MOVE: "Move",
  DWELL: "Dwell",
  MOVE_TO_ORIGIN: "MoveToOrigin",
  TURN_OFF_MOTORS: "TurnOffMotors",
  WAIT_TO_FINISH: "WaitToFinish",
  USE_ABSOLUTE_DISTANCE: "UseAbsoluteDistance",
  USE_RELATIVE_DISTANCE: "UseRelativeDistance",
  USE_ABSOLUTE_COORDINATES: "UseAbsoluteCoordinates",
  USE_RELATIVE_COORDINATES: "UseRelativeCoordinates",
  SET_POSITION: "SetPosition",
  SET_SPEED_FACTOR_OVERRIDE: "SetSpeedFactorOverride",
  SET_EXTRUDE_FACTOR_OVERRIDE: "SetExtrudeFactorOverride",
  SET_ACCELERATION: "SetAcceleration",
  GET_EXTRUDER_TEMPERATURE: "GetExtruderTemperature",
  SET_EXTRUDER_TEMPERATURE: "SetExtruderTemperature",
  SET_EXTRUDER_TEMPERATURE_WITH_WAIT: "SetExtruderTemperatureWithWait",
  SET_BED_TEMPERATURE: "SetBedTemperature",
  SET_BED_TEMPERATURE_WITH_WAIT: "SetBedTemperatureWithWait",
  SET_FAN_SPEED: "SetFanSpeed",
  TURN_OFF_FAN: "TurnOffFan",
  EMERGENCY_STOP: "EmergencyStop",
  GET_CURRENT_POSITION: "GetCurrentPosition",
  GET_FIRMWARE_VERSION: "GetFirmwareVersion",
};
let gCommandsDictionary = {};
// Move (G0 or G1): G1 [X<pos>] [Y<pos>] [Z<pos>] [E<pos>] [F<speed>]
gCommandsDictionary[G_COMMANDS.MOVE] = `G1 X%1 Y%2 Z%3 E%4 F%5`;
// Dwell: G4 P<milliseconds>
gCommandsDictionary[G_COMMANDS.DWELL] = `G4 P%1`;
// Move to origin: G28 [X] [Y] [Z]
gCommandsDictionary[G_COMMANDS.MOVE_TO_ORIGIN] = `G28 X%1 Y%2 Z%3`;
//Turn off motors: M18 or M84
gCommandsDictionary[G_COMMANDS.TURN_OFF_MOTORS] = `M18`;
//Wait for current moves to finish: M400
gCommandsDictionary[G_COMMANDS.WAIT_TO_FINISH] = `M400`;
//Use absolute/relative distances for extrusion: M82, M83
gCommandsDictionary[G_COMMANDS.USE_ABSOLUTE_DISTANCE] = `M82`;
gCommandsDictionary[G_COMMANDS.USE_RELATIVE_DISTANCE] = `M83`;
//Use absolute/relative coordinates: G90, G91
gCommandsDictionary[G_COMMANDS.USE_ABSOLUTE_COORDINATES] = `G90`;
gCommandsDictionary[G_COMMANDS.USE_RELATIVE_COORDINATES] = `G91`;
//Set position: G92 [X<pos>] [Y<pos>] [Z<pos>] [E<pos>]
gCommandsDictionary[G_COMMANDS.SET_POSITION] = `G92 X%1 Y%2 Z%3 E%4`;
//Set speed factor override percentage: M220 S<percent>
gCommandsDictionary[G_COMMANDS.SET_SPEED_FACTOR_OVERRIDE] = `M220 S%1`;
//Set extrude factor override percentage: M221 S<percent>
gCommandsDictionary[G_COMMANDS.SET_EXTRUDE_FACTOR_OVERRIDE] = `M221 S%1`;
//Set acceleration: M204 S<value> OR M204 P<value> T<value>
gCommandsDictionary[G_COMMANDS.SET_ACCELERATION] = `M204 S%1`;
//Note: If S is not specified and both P and T are specified, then the acceleration is set to the minimum of P and T. If only one of P or T is specified, the command has no effect.
//Get extruder temperature: M105
gCommandsDictionary[G_COMMANDS.GET_EXTRUDER_TEMPERATURE] = `M105`;
//Set extruder temperature: M104 [T<index>] [S<temperature>]
gCommandsDictionary[G_COMMANDS.SET_EXTRUDER_TEMPERATURE] = `M104 T%1 S%2`;
//Set extruder temperature and wait: M109 [T<index>] S<temperature>
gCommandsDictionary[G_COMMANDS.SET_EXTRUDER_TEMPERATURE_WITH_WAIT] = `M109 T%1 S%2`;
//Note: M109 always waits for temperature to settle at requested value
//Set bed temperature: M140 [S<temperature>]
gCommandsDictionary[G_COMMANDS.SET_BED_TEMPERATURE] = `M140 S%1`;
//Set bed temperature and wait: M190 S<temperature>
gCommandsDictionary[G_COMMANDS.SET_BED_TEMPERATURE_WITH_WAIT] = `M190 S%1`;
//Note: M190 always waits for temperature to settle at requested value
//Set fan speed: M106 S<value>
gCommandsDictionary[G_COMMANDS.SET_FAN_SPEED] = `M106 S%1`;
//Turn fan off: M107
gCommandsDictionary[G_COMMANDS.TURN_OFF_FAN] = `M107`;
//Emergency stop: M112
gCommandsDictionary[G_COMMANDS.EMERGENCY_STOP] = `M112`;
//Get current position: M114
gCommandsDictionary[G_COMMANDS.GET_CURRENT_POSITION] = `M114`;
//Get firmware version: M115
gCommandsDictionary[G_COMMANDS.GET_FIRMWARE_VERSION] = `M115`;

/* Custom block definition of SetPosition Blockly Code
Don't change anything here.
In Future, other blockly definitions will be included here.
Note: Block names should match with constants */
Blockly.defineBlocksWithJsonArray([
  {
    type: G_COMMANDS.SET_POSITION,
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
Note: Block names should match with constants*/
Blockly.JavaScript[G_COMMANDS.SET_POSITION] = (block) => {
  let number_x = block.getFieldValue("X");
  let number_y = block.getFieldValue("Y");
  let number_z = block.getFieldValue("Z");
  let number_e = block.getFieldValue("E");
  let args = [number_x, number_y, number_z, number_e];
  
  var code = fetchGCommand(G_COMMANDS.SET_POSITION, args)
  return [code, Blockly.JavaScript.ORDER_NONE];
};

/* Helper function to construct respective command using dictionary  
// A word 'GCode:' is added in front of every GCode generation as an identifier */
const fetchGCommand = (blockType, args) => {
  // do nothing if key doesn't exist
  if (!(blockType in gCommandsDictionary)) return;

  let argCount = 0;
  let gCommand = gCommandsDictionary[blockType];

  // when command takes no arguments
  if (args.length == 0) return `Gcode: ${gCommand} // ${blockType}`;

  // when command takes at least one argument
  while (argCount <= args.length) {
    gCommand = gCommand.replace(`%${argCount + 1}`, args[argCount]);
    argCount++;
  }
  return `Gcode: ${gCommand} // ${blockType}`
};
