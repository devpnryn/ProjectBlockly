Blockly.Blocks['gcode_test'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("MovetoHorizon")
          .appendField("X")
          .appendField(new Blockly.FieldNumber(0), "NAME")
          .appendField("Y")
          .appendField(new Blockly.FieldNumber(0), "NAME")
          .appendField("Z")
          .appendField(new Blockly.FieldNumber(0), "NAME");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("Move");
   
   
   
   Blockly.Blocks['dipcoating'] = {
	
	init: function() {
		
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
        .appendField(new Blockly.FieldDropdown([["Up", "Up"], ["Down", "Down"]]), "Unit_Time");

		this.appendDummyInput()
		    .setAlign(Blockly.ALIGN_RIGHT)
		    .appendField("Distance")
		    .appendField(new Blockly.FieldTextInput("5", Blockly.FieldTextInput.numberValidator), "Distance")
		    .appendField(new Blockly.FieldDropdown([["um", "um"],["mm", "mm"], ["cm", "cm"]]), "Unit_Time");
    this.appendDummyInput()
		    .setAlign(Blockly.ALIGN_RIGHT)
		    .appendField("Speed")
		    .appendField(new Blockly.FieldTextInput("10", Blockly.FieldTextInput.numberValidator), "Speed")
		    .appendField(new Blockly.FieldDropdown([["um/sec", "um_per_sec"], ["um/min", "um_per_minute"],  ["mm/sec", "mm_per_sec"], ["mm/min", "mm_per_minute"],["cm/sec", "cm_per_sec"], ["cm/min", "cm_per_minute"]]), "Unit_Speed");

        
  }
};

Blockly.Blocks[G_COMMANDS.MOVE] = {
    init: function() {
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


Blockly.JavaScript[G_COMMANDS.MOVE] = function(block) {
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


  		    

  Blockly.Blocks['dipcoating'] = {
	
	init: function() {
		
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
		    .appendField(new Blockly.FieldDropdown([["um", "um"],["mm", "mm"], ["cm", "cm"]]), "Unit_Distance");
    this.appendDummyInput()
		    .setAlign(Blockly.ALIGN_RIGHT)
		    .appendField("Speed")
		    .appendField(new Blockly.FieldTextInput("10", Blockly.FieldTextInput.numberValidator), "Speed")
		    .appendField(new Blockly.FieldDropdown([["um/sec", "um_per_sec"], ["um/min", "um_per_minute"],  ["mm/sec", "mm_per_sec"], ["mm/min", "mm_per_minute"],["cm/sec", "cm_per_sec"], ["cm/min", "cm_per_minute"]]), "Unit_Speed");

        
  }
};