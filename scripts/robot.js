Blockly.defineBlocksWithJsonArray([{
    "type": "robot_position",
    "message0": "X %1 %2 Y %3 %4 Z %5 %6 E %7",
    "args0": [
      {
        "type": "field_number",
        "name": "X",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "Y",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "Z",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "E",
        "value": 0
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 260,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "robot_move",
    "message0": "Move to: %1",
    "args0": [
      {
        "type": "input_value",
        "name": "position",
        "check": "robot_position"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }])

  Blockly.JavaScript['robot_position'] = function(block) {
    var number_x = block.getFieldValue('X');
    var number_y = block.getFieldValue('Y');
    var number_z = block.getFieldValue('Z');
    var number_e = block.getFieldValue('E');
    // TODO: Assemble Python into code variable.
    var code = `G1 [X${number_x}] [Y${number_y}] [Z${number_z}] [E${number_e}]`
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Python['robot_move'] = function(block) {
    var value_position = Blockly.Python.valueToCode(block, 'position', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
  };