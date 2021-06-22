/*
These are often used gcommands
reference used is https://github.com/KevinOConnor/klipper/blob/master/docs/G-Codes.md
*/
const G_COMMANDS = {
  MOVE: "Move",
  MOVE_UP_DOWN: "MoveUpandDown",
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

// Move (G0 or G1): G1 [X<pos>] [Y<pos>] \\coating
gCommandsDictionary[G_COMMANDS.MOVE_UP_DOWN] = `G1 Z%1 F%2`;
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
Blockly.Blocks[G_COMMANDS.MOVE] = {
  init: function () {
    this.appendDummyInput()
      .appendField(G_COMMANDS.MOVE);
    this.appendDummyInput()
      .appendField("X")
      .appendField(new Blockly.FieldNumber(0), "X");
    this.appendDummyInput()
      .appendField("Y")
      .appendField(new Blockly.FieldNumber(0), "Y");
    this.appendDummyInput()
      .appendField("Z")
      .appendField(new Blockly.FieldNumber(0), "Z");
    this.appendDummyInput()
      .appendField("E")
      .appendField(new Blockly.FieldNumber(0), "E");
    this.appendDummyInput()
      .appendField("F")
      .appendField(new Blockly.FieldNumber(0), "F");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip(G_COMMANDS.MOVE);
    this.setHelpUrl("");
  }
};

Blockly.Blocks[G_COMMANDS.DWELL] = {
  init: function () {
    this.appendDummyInput()
      .appendField(G_COMMANDS.DWELL);
    this.appendDummyInput()
      .appendField("P")
      .appendField(new Blockly.FieldNumber(0), "P");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip(G_COMMANDS.DWELL);
    this.setHelpUrl("");
  }
};

Blockly.Blocks[G_COMMANDS.MOVE_TO_ORIGIN] = {
  init: function () {
    this.appendDummyInput()
      .appendField(G_COMMANDS.MOVE_TO_ORIGIN);
    this.appendDummyInput()
      .appendField("X")
      .appendField(new Blockly.FieldNumber(0), "X");
    this.appendDummyInput()
      .appendField("Y")
      .appendField(new Blockly.FieldNumber(0), "Y");
    this.appendDummyInput()
      .appendField("Z")
      .appendField(new Blockly.FieldNumber(0), "Z");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip(G_COMMANDS.MOVE_TO_ORIGIN);
    this.setHelpUrl("");
  }
};

Blockly.Blocks[G_COMMANDS.SET_POSITION] = {
  init: function () {
    this.appendDummyInput()
      .appendField(G_COMMANDS.SET_POSITION);
    this.appendDummyInput()
      .appendField("X")
      .appendField(new Blockly.FieldNumber(0), "X");
    this.appendDummyInput()
      .appendField("Y")
      .appendField(new Blockly.FieldNumber(0), "Y");
    this.appendDummyInput()
      .appendField("Z")
      .appendField(new Blockly.FieldNumber(0), "Z");
    this.appendDummyInput()
      .appendField("E")
      .appendField(new Blockly.FieldNumber(0), "E");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip(G_COMMANDS.SET_POSITION);
    this.setHelpUrl("");
  }
};

Blockly.Blocks[G_COMMANDS.SET_SPEED_FACTOR_OVERRIDE] = {
  init: function () {
    this.appendDummyInput()
      .appendField(G_COMMANDS.SET_SPEED_FACTOR_OVERRIDE);
    this.appendDummyInput()
      .appendField("S")
      .appendField(new Blockly.FieldNumber(0), "S");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip(G_COMMANDS.SET_SPEED_FACTOR_OVERRIDE);
    this.setHelpUrl("");
  }
};

Blockly.Blocks[G_COMMANDS.SET_EXTRUDE_FACTOR_OVERRIDE] = {
  init: function () {
    this.appendDummyInput()
      .appendField(G_COMMANDS.SET_EXTRUDE_FACTOR_OVERRIDE);
    this.appendDummyInput()
      .appendField("S")
      .appendField(new Blockly.FieldNumber(0), "S");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip(G_COMMANDS.SET_EXTRUDE_FACTOR_OVERRIDE);
    this.setHelpUrl("");
  }
};

Blockly.Blocks[G_COMMANDS.SET_ACCELERATION] = {
  init: function () {
    this.appendDummyInput()
      .appendField(G_COMMANDS.SET_ACCELERATION);
    this.appendDummyInput()
      .appendField("S")
      .appendField(new Blockly.FieldNumber(0), "S");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip(G_COMMANDS.SET_ACCELERATION);
    this.setHelpUrl("");
  }
};

Blockly.Blocks[G_COMMANDS.SET_EXTRUDER_TEMPERATURE] = {
  init: function () {
    this.appendDummyInput()
      .appendField(G_COMMANDS.SET_EXTRUDER_TEMPERATURE);
    this.appendDummyInput()
      .appendField("T")
      .appendField(new Blockly.FieldNumber(0), "T");
    this.appendDummyInput()
      .appendField("S")
      .appendField(new Blockly.FieldNumber(0), "S");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip(G_COMMANDS.SET_EXTRUDER_TEMPERATURE);
    this.setHelpUrl("");
  }
};

Blockly.Blocks[G_COMMANDS.SET_EXTRUDER_TEMPERATURE_WITH_WAIT] = {
  init: function () {
    this.appendDummyInput()
      .appendField(G_COMMANDS.SET_EXTRUDER_TEMPERATURE_WITH_WAIT);
    this.appendDummyInput()
      .appendField("T")
      .appendField(new Blockly.FieldNumber(0), "T");
    this.appendDummyInput()
      .appendField("S")
      .appendField(new Blockly.FieldNumber(0), "S");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip(G_COMMANDS.SET_EXTRUDER_TEMPERATURE_WITH_WAIT);
    this.setHelpUrl("");
  }
};

Blockly.Blocks[G_COMMANDS.SET_BED_TEMPERATURE] = {
  init: function () {
    this.appendDummyInput()
      .appendField(G_COMMANDS.SET_BED_TEMPERATURE);
    this.appendDummyInput()
      .appendField("S")
      .appendField(new Blockly.FieldNumber(0), "S");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip(G_COMMANDS.SET_BED_TEMPERATURE);
    this.setHelpUrl("");
  }
};
Blockly.Blocks[G_COMMANDS.SET_BED_TEMPERATURE_WITH_WAIT] = {
  init: function () {
    this.appendDummyInput()
      .appendField(G_COMMANDS.SET_BED_TEMPERATURE_WITH_WAIT);
    this.appendDummyInput()
      .appendField("S")
      .appendField(new Blockly.FieldNumber(0), "S");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip(G_COMMANDS.SET_BED_TEMPERATURE_WITH_WAIT);
    this.setHelpUrl("");
  }
};
Blockly.Blocks[G_COMMANDS.SET_FAN_SPEED] = {
  init: function () {
    this.appendDummyInput()
      .appendField(G_COMMANDS.SET_FAN_SPEED);
    this.appendDummyInput()
      .appendField("S")
      .appendField(new Blockly.FieldNumber(0), "S");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip(G_COMMANDS.SET_FAN_SPEED);
    this.setHelpUrl("");
  }
};

/***************************************************************************************************************************************************************/
/* Name: centrifugation.js																																	   */
/* Developer: Jes�s Irimia								 																									   */
/* Function: Special function of centrifugate. Include special inputs for the centrifugate function.						                                   */
/*																																							   */
/*																																				               */
/***************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************/
Blockly.Blocks['centrifugation'] = {

  init: function () {

    /*Usual initialization of a common block*/
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);

    //Creating inputs.
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("CENTRIFUGATION")
    this.setTooltip('');

    this.appendValueInput("source")
      // .setCheck("containerCheck")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("container input");

    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("speed")
      .appendField(new Blockly.FieldTextInput("0", Blockly.FieldTextInput.numberValidator), "SPEED")
      .appendField(" rpm");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("duration")
      .appendField(new Blockly.FieldTextInput("0", Blockly.FieldTextInput.numberValidator), "DURATION")
      .appendField(new Blockly.FieldDropdown([["Minutes", "minute"], ["Millisecond", "millisecond"], ["Seconds", "second"], ["Hours", "hour"]]), "Unit_Time");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("time of operation")
      .appendField(new Blockly.FieldTextInput("0", Blockly.FieldTextInput.numberValidator), "timeOfOperation");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Temperature")
      .appendField(new Blockly.FieldTextInput("---", Blockly.FieldTextInput.numberValidator), "TEMPERATURE")
      .appendField(new Blockly.FieldDropdown([["Celsius", "celsius"], ["Kelvin", "kelvin"]]), "Unit_Temp");
  }
};

Blockly.Blocks['dipcoating'] = {

  init: function () {

    /*Usual initialization of a common block*/
    this.setInputsInline(false);
    //this.setPreviousStatement(true);
    //	this.setNextStatement(true);

    this.setOutput(true, null);
    this.setColour(220);

    //Creating inputs.
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("DIP COATING")
    this.setTooltip('dipcoating');


    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Direction")
      // .appendField(new Blockly.FieldTextInput("Direction")
      .appendField(new Blockly.FieldDropdown([["Up", "+"], ["Down", "-"]]), "Unit_Direction");

    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Distance")
      .appendField(new Blockly.FieldTextInput("5", Blockly.FieldTextInput.numberValidator), "Distance")
      .appendField(new Blockly.FieldDropdown([["um", "0.001"], ["mm", "1"], ["cm", "10"]]), "Unit_Distance");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Speed")
      .appendField(new Blockly.FieldTextInput("10", Blockly.FieldTextInput.numberValidator), "Speed")
      .appendField(new Blockly.FieldDropdown([["um/sec", "0.06"], ["um/min", "0.001"], ["mm/sec", "60"], ["mm/min", "1"], ["cm/sec", "600"], ["cm/min", "10"]]), "Unit_Speed");


  }
};

Blockly.Blocks['dip_time'] = {
  init: function () {
    this.appendDummyInput()
        .appendField('Wait');
    this.appendDummyInput()
        .appendField("for")
        .appendField(new Blockly.FieldNumber(20), "P")
        .appendField(new Blockly.FieldDropdown([["msec", "0.001"],["sec", "1"], ["min", "60"]]), "diptime");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('diptiming');
    this.setHelpUrl("");
  }
};


Blockly.Blocks['experiment'] = {
  init: function () {

    /*Usual initialization of a common block*/
    this.appendDummyInput("Experiment")
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("Experiment"); //name of the block
    this.setInputsInline(false);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.appendDummyInput("experimentName")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Name/Reference")
      .appendField(new Blockly.FieldTextInput("insert name"), "experimentName");
    this.appendStatementInput("inputOfExperiment");

  },
  onchange: function () {
    // myOwnFunction1();
    // myOwnFunction2();
    // myOwnFunction3();
  }
};

/* Custom Block SetPosition Javascript code 
Note: Block names should match with constants*/
Blockly.JavaScript[G_COMMANDS.MOVE] = function (block) {
  var number_x = block.getFieldValue('X');
  var number_y = block.getFieldValue('Y');
  var number_z = block.getFieldValue('Z');
  var number_e = block.getFieldValue('E');
  var number_f = block.getFieldValue('F');
  let args = [number_x, number_y, number_z, number_e, number_f];

  var code = fetchGCommand(G_COMMANDS.MOVE, args)
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript[G_COMMANDS.DWELL] = function (block) {
  var number_p = block.getFieldValue('P');
  let args = [number_p];

  var code = fetchGCommand(G_COMMANDS.DWELL, args)
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript[G_COMMANDS.MOVE_TO_ORIGIN] = function (block) {
  var number_x = block.getFieldValue('X');
  var number_y = block.getFieldValue('Y');
  var number_z = block.getFieldValue('Z');

  let args = [number_x, number_y, number_z];

  var code = fetchGCommand(G_COMMANDS.MOVE_TO_ORIGIN, args)
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript[G_COMMANDS.SET_POSITION] = (block) => {
  let number_x = block.getFieldValue("X");
  let number_y = block.getFieldValue("Y");
  let number_z = block.getFieldValue("Z");
  let number_e = block.getFieldValue("E");
  let args = [number_x, number_y, number_z, number_e];

  var code = fetchGCommand(G_COMMANDS.SET_POSITION, args)
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript[G_COMMANDS.SET_SPEED_FACTOR_OVERRIDE] = function (block) {
  var number_s = block.getFieldValue('S');
  let args = [number_s];

  var code = fetchGCommand(G_COMMANDS.SET_SPEED_FACTOR_OVERRIDE, args)
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript[G_COMMANDS.SET_ACCELERATION] = function (block) {
  var number_s = block.getFieldValue('S');
  let args = [number_s];

  var code = fetchGCommand(G_COMMANDS.SET_ACCELERATION, args)
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript[G_COMMANDS.SET_EXTRUDE_FACTOR_OVERRIDE] = function (block) {
  var number_s = block.getFieldValue('S');
  let args = [number_s];

  var code = fetchGCommand(G_COMMANDS.SET_EXTRUDE_FACTOR_OVERRIDE, args)
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript[G_COMMANDS.SET_EXTRUDER_TEMPERATURE] = function (block) {
  var number_t = block.getFieldValue('T');
  var number_s = block.getFieldValue('S');
  let args = [number_t, number_s];

  var code = fetchGCommand(G_COMMANDS.SET_EXTRUDER_TEMPERATURE, args)
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript[G_COMMANDS.SET_EXTRUDER_TEMPERATURE_WITH_WAIT] = function (block) {
  var number_t = block.getFieldValue('T');
  var number_s = block.getFieldValue('S');
  let args = [number_t, number_s];

  var code = fetchGCommand(G_COMMANDS.SET_EXTRUDER_TEMPERATURE_WITH_WAIT, args)
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript[G_COMMANDS.SET_BED_TEMPERATURE] = function (block) {
  var number_s = block.getFieldValue('S');
  let args = [number_s];

  var code = fetchGCommand(G_COMMANDS.SET_BED_TEMPERATURE, args)
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript[G_COMMANDS.SET_BED_TEMPERATURE_WITH_WAIT] = function (block) {
  var number_s = block.getFieldValue('S');
  let args = [number_s];

  var code = fetchGCommand(G_COMMANDS.SET_BED_TEMPERATURE_WITH_WAIT, args)
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript[G_COMMANDS.SET_FAN_SPEED] = function (block) {
  var number_s = block.getFieldValue('S');
  let args = [number_s];

  var code = fetchGCommand(G_COMMANDS.SET_FAN_SPEED, args)
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['centrifugation'] = function (block) {
  JSONcode = JSONcode + '             {\n                "op": "spin",\n';
  regularJSONTranslation_(this)
};

Blockly.JavaScript['dipcoating'] = function (block) {
  let unit_direction = block.getFieldValue('Unit_Direction');
  let number_distance = block.getFieldValue('Distance');
  let unit_distance = block.getFieldValue('Unit_Distance');
  let number_speed = block.getFieldValue('Speed');
  let unit_speed = block.getFieldValue('Unit_Speed');

  let computed_distance = number_distance * unit_distance;
  let computed_speed = (number_speed * unit_speed).toFixed(3);
  let distance_vector = (unit_direction === '+') ? '+' + computed_distance : '-' + computed_distance;

  let args = [distance_vector, computed_speed];
  var code = fetchGCommand(G_COMMANDS.MOVE_UP_DOWN, args)
  return [code, Blockly.JavaScript.ORDER_NONE];

};

Blockly.JavaScript['dip_time'] = function (block) {
  var number_p = block.getFieldValue('P');
  var number_time = block.getFieldValue('diptime');
  let computed_dip_time = number_p*number_time*toFixed(3);

  let args = [computed_dip_time];

  var code = fetchGCommand(G_COMMANDS.DWELL, args)
  // TODO: Change ORDER_NONE to the correct strength.
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
  if (args.length == 0) return `"${gCommand}"`;

  // when command takes at least one argument
  while (argCount <= args.length) {
    gCommand = gCommand.replace(`%${argCount + 1}`, args[argCount]);
    argCount++;
  }
  return `"${gCommand}"`
};
