Blockly.defineBlocksWithJsonArray([
  {
    type: "movement",
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
  {
    type: "robot_move",
    message0: "Move to: %1",
    args0: [
      {
        type: "input_value",
        name: "position",
        check: "robot_position",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
]);

Blockly.JavaScript["movement"] = function (block) {
  var number_x = block.getFieldValue("X");
  var number_y = block.getFieldValue("Y");
  var number_z = block.getFieldValue("Z");
  var number_e = block.getFieldValue("E");
  // A word 'GCode:' is added in front of every GCode generation as an identifier
  var code = `Gcode: G1 X${number_x} Y${number_y} Z${number_z} E${number_e}`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
