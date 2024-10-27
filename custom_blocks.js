Blockly.Blocks['logic_null_test'] = {
    init: function() {
      this.appendValueInput("ONE")
          .setCheck(null);
      this.appendValueInput("TWO")
          .setCheck(null)
          .appendField("??");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(210);
   this.setTooltip("Tests if the first value is null / undefined.");
   this.setHelpUrl("https://en.wikipedia.org/wiki/Null_coalescing_operator#JavaScript");
    }
};
javascript.javascriptGenerator.forBlock['logic_null_test'] = function(block, generator) {
    var value_one = generator.valueToCode(block, 'ONE', javascript.Order.ATOMIC);
    var value_two = generator.valueToCode(block, 'TWO', javascript.Order.ATOMIC);
    var code = `(${value_one} ?? ${value_two})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['logic_undefined'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("undefined");
      this.setOutput(true, null);
      this.setColour(210);
   this.setTooltip("Returns undefined.");
   this.setHelpUrl("https://www.w3schools.com/jsref/jsref_undefined.asp");
    }
};
javascript.javascriptGenerator.forBlock['logic_undefined'] = function(block, generator) {
    var code = 'undefined';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_alert'] = {
    init: function() {
      this.appendValueInput("TEXT")
          .appendField("alert");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_alert'] = function(block, generator) {
    var value_text = generator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC);
    var code = `window.alert(${value_text});\n`;
    return code;
};
  
Blockly.Blocks['web_confirm'] = {
    init: function() {
      this.appendValueInput("TEXT")
          .appendField("confirm");
      this.setOutput(true, "Boolean");
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_confirm'] = function(block, generator) {
    var value_text = generator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC);
    var code = `window.confirm(${value_text})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_prompt'] = {
    init: function() {
      this.appendValueInput("TEXT")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("prompt");
      this.appendValueInput("DEFAULT")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("with default");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_prompt'] = function(block, generator) {
    var value_text = generator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC);
    var value_default = generator.valueToCode(block, 'DEFAULT', javascript.Order.ATOMIC);
    var code = `window.prompt(${value_text}, ${value_default})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("current time");
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_time'] = function(block, generator) {
    var code = 'new Date()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_browser'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("my browser");
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_browser'] = function(block, generator) {
    var code = 'myBrowser()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_language'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("my preferred language");
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_language'] = function(block, generator) {
    var code = 'navigator.language';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_online'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("online?");
      this.setOutput(true, "Boolean");
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_online'] = function(block, generator) {
    var code = 'navigator.onLine';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_connectioninfo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("connection")
          .appendField(new Blockly.FieldDropdown([["ECT","effectiveType"], ["RTT","rtt"], ["downlink","downlink"]]), "TYPE");
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_connectioninfo'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var code = `eval('navigator.connection.${dropdown_type}')`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_screeninfo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("screen")
          .appendField(new Blockly.FieldDropdown([["width","width"], ["height","height"], ["available width","availWidth"], ["available height","availHeight"]]), "TYPE");
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_screeninfo'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var code = `eval('screen.${dropdown_type}')`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_pageinfo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("page")
          .appendField(new Blockly.FieldDropdown([["title","title"], ["URL","URL"], ["domain name","domain name"], ["path","path"], ["protocol","protocol"]]), "TYPE");
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_pageinfo'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var code = `myPageInfo("${dropdown_type}")`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_setpageinfo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("set page")
          .appendField(new Blockly.FieldDropdown([["title","title"], ["URL","URL"], ["domain name","domain name"], ["path","path"], ["protocol","protocol"]]), "TYPE");
      this.appendValueInput("VALUE")
          .setCheck(null)
          .appendField("to");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_setpageinfo'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
    var code = `setPageInfo("${dropdown_type}", ${value_value});\n`;
    return code;
};

Blockly.Blocks['web_opentab'] = {
    init: function() {
      this.appendValueInput("URL")
          .setCheck(null)
          .appendField("open new tab with");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_opentab'] = function(block, generator) {
    var value_url = generator.valueToCode(block, 'URL', javascript.Order.ATOMIC);
    var code = `window.open(${value_url}, "_blank");\n`;
    return code;
};

Blockly.Blocks['web_replacetab'] = {
    init: function() {
      this.appendValueInput("URL")
          .setCheck(null)
          .appendField("replace this tab with");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_replacetab'] = function(block, generator) {
    var value_url = generator.valueToCode(block, 'URL', javascript.Order.ATOMIC);
    var code = `window.open(${value_url}, "_self");\n`;
    return code;
};

Blockly.Blocks['web_reload'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("reload this page");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_reload'] = function(block, generator) {
    // TODO: Assemble javascript into code variable.
    var code = 'location.reload();\n';
    return code;
};

Blockly.Blocks['web_window'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("open new window with")
          .appendField(new Blockly.FieldDropdown([["URL","URL"], ["HTML","HTML"]]), "TYPE");
      this.appendValueInput("INPUT")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
      this.appendValueInput("WIDTH")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("width:");
      this.appendValueInput("HEIGHT")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("height:");
      this.appendValueInput("X")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("x:");
      this.appendValueInput("Y")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_window'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var value_width = generator.valueToCode(block, 'WIDTH', javascript.Order.ATOMIC);
    var value_height = generator.valueToCode(block, 'HEIGHT', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `openNewWindow("${dropdown_type}", ${value_input}, ${value_width}, ${value_height}, ${value_x}, ${value_y});\n`;
    return code;
};

Blockly.Blocks['web_windowstatement'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("open new window with HTML")
      this.appendValueInput("INPUT")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
      this.appendValueInput("WIDTH")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("width:");
      this.appendValueInput("HEIGHT")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("height:");
      this.appendValueInput("X")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("x:");
      this.appendValueInput("Y")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("y:");
      this.appendStatementInput("STATEMENT")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("and then close it");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_windowstatement'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var value_width = generator.valueToCode(block, 'WIDTH', javascript.Order.ATOMIC);
    var value_height = generator.valueToCode(block, 'HEIGHT', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var statements_statement = generator.statementToCode(block, 'STATEMENT');
    var code = `openNewWindow("HTML", ${value_input}, ${value_width}, ${value_height}, ${value_x}, ${value_y});\n${statements_statement}newWindow.close();\n`;
    return code;
};

Blockly.Blocks['web_sound'] = {
    init: function() {
      this.appendValueInput("SOUND")
          .setCheck(null)
          .appendField("play sound");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_sound'] = function(block, generator) {
    var value_sound = generator.valueToCode(block, 'SOUND', javascript.Order.ATOMIC);
    var code = `playSound(${value_sound})\n`;
    return code;
};

Blockly.Blocks['web_search'] = {
    init: function() {
      this.appendValueInput("REQUEST")
          .setCheck(null)
          .appendField("search");
      this.appendDummyInput()
          .appendField("in")
          .appendField(new Blockly.FieldDropdown([["Google","Google"], ["Bing","Bing"], ["Yahoo","Yahoo"], ["Yandex","Yandex"], ["DuckDuckGo","DuckDuckGo"]]), "ENGINE");
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_search'] = function(block, generator) {
    var value_request = generator.valueToCode(block, 'REQUEST', javascript.Order.ATOMIC);
    var dropdown_engine = block.getFieldValue('ENGINE');
    var code = `searchRequestUrl(${value_request}, "${dropdown_engine}")`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['site_mainhtml'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("website with title:")
          .appendField(new Blockly.FieldTextInput("Website"), "TITLE");
      this.appendStatementInput("HEAD")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("head:");
      this.appendStatementInput("BODY")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("body:");
      this.setOutput(true, "String");
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_mainhtml'] = function(block, generator) {
    var text_title = block.getFieldValue('TITLE');
    var statements_head = generator.statementToCode(block, 'HEAD');
    var statements_body = generator.statementToCode(block, 'BODY');
    var code = `"<!DOCTYPE html><html lang='en'><!-- This website was made with RhinoBlox. --><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>${text_title}</title>${statements_head}</head><body>${statements_body}</body></html>"`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['site_script'] = {
    init: function() {
      this.appendStatementInput("SCRIPT")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("script:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_script'] = function(block, generator) {
    var statements_script = generator.statementToCode(block, 'SCRIPT');
    var code = `<script>${statements_script}</script>`.replace(/\n/g, '');
    return code;
};

Blockly.Blocks['site_style'] = {
    init: function() {
      this.appendStatementInput("STYLE")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("style:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_style'] = function(block, generator) {
    var statements_style = generator.statementToCode(block, 'STYLE');
    var code = `<style>${statements_style}</style>`.replace(/\n/g, '');
    return code;
};

Blockly.Blocks['site_element'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("HTML element:")
          .appendField(new Blockly.FieldDropdown([["a","a"], ["abbr","abbr"], ["address","address"], ["area","area"], ["article","article"], ["aside","aside"], ["audio","audio"], ["b","b"], ["base","base"], ["bdi","bdi"], ["bdo","bdo"], ["blockquote","blockquote"], ["body","body"], ["br","br"], ["button","button"], ["canvas","canvas"], ["caption","caption"], ["cite","cite"], ["code","code"], ["col","col"], ["colgroup","colgroup"], ["data","data"], ["datalist","datalist"], ["dd","dd"], ["del","del"], ["details","details"], ["dfn","dfn"], ["dialog","dialog"], ["div","div"], ["dl","dl"], ["dt","dt"], ["em","em"], ["embed","embed"], ["fieldset","fieldset"], ["figcaption","figcaption"], ["figure","figure"], ["footer","footer"], ["form","form"], ["h1","h1"], ["h2","h2"], ["h3","h3"], ["h4","h4"], ["h5","h5"], ["h6","h6"], ["head","head"], ["header","header"], ["hgroup","hgroup"], ["hr","hr"], ["html","html"], ["i","i"], ["iframe","iframe"], ["img","img"], ["input","input"], ["ins","ins"], ["kbd","kbd"], ["label","label"], ["legend","legend"], ["li","li"], ["link","link"], ["main","main"], ["map","map"], ["mark","mark"], ["menu","menu"], ["meta","meta"], ["meter","meter"], ["nav","nav"], ["noscript","noscript"], ["object","object"], ["ol","ol"], ["optgroup","optgroup"], ["option","option"], ["output","output"], ["p","p"], ["param","param"], ["picture","picture"], ["pre","pre"], ["progress","progress"], ["q","q"], ["rp","rp"], ["rt","rt"], ["ruby","ruby"], ["s","s"], ["samp","samp"], ["script","script"], ["section","section"], ["select","select"], ["small","small"], ["source","source"], ["span","span"], ["strong","strong"], ["style","style"], ["sub","sub"], ["summary","summary"], ["sup","sup"], ["table","table"], ["tbody","tbody"], ["td","td"], ["template","template"], ["textarea","textarea"], ["tfoot","tfoot"], ["th","th"], ["thead","thead"], ["time","time"], ["title","title"], ["tr","tr"], ["track","track"], ["u","u"], ["ul","ul"], ["var","var"], ["video","video"], ["wbr","wbr"]]), "ELEMENT");
      this.appendStatementInput("INNER")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_element'] = function(block, generator) {
    var dropdown_element = block.getFieldValue('ELEMENT');
    var statements_inner = generator.statementToCode(block, 'INNER');
    var code = `<${dropdown_element}>${statements_inner}</${dropdown_element}>`;
    return code;
};

Blockly.Blocks['site_elementproperties'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("HTML element:")
          .appendField(new Blockly.FieldDropdown([["a","a"], ["abbr","abbr"], ["address","address"], ["area","area"], ["article","article"], ["aside","aside"], ["audio","audio"], ["b","b"], ["base","base"], ["bdi","bdi"], ["bdo","bdo"], ["blockquote","blockquote"], ["body","body"], ["br","br"], ["button","button"], ["canvas","canvas"], ["caption","caption"], ["cite","cite"], ["code","code"], ["col","col"], ["colgroup","colgroup"], ["data","data"], ["datalist","datalist"], ["dd","dd"], ["del","del"], ["details","details"], ["dfn","dfn"], ["dialog","dialog"], ["div","div"], ["dl","dl"], ["dt","dt"], ["em","em"], ["embed","embed"], ["fieldset","fieldset"], ["figcaption","figcaption"], ["figure","figure"], ["footer","footer"], ["form","form"], ["h1","h1"], ["h2","h2"], ["h3","h3"], ["h4","h4"], ["h5","h5"], ["h6","h6"], ["head","head"], ["header","header"], ["hgroup","hgroup"], ["hr","hr"], ["html","html"], ["i","i"], ["iframe","iframe"], ["img","img"], ["input","input"], ["ins","ins"], ["kbd","kbd"], ["label","label"], ["legend","legend"], ["li","li"], ["link","link"], ["main","main"], ["map","map"], ["mark","mark"], ["menu","menu"], ["meta","meta"], ["meter","meter"], ["nav","nav"], ["noscript","noscript"], ["object","object"], ["ol","ol"], ["optgroup","optgroup"], ["option","option"], ["output","output"], ["p","p"], ["param","param"], ["picture","picture"], ["pre","pre"], ["progress","progress"], ["q","q"], ["rp","rp"], ["rt","rt"], ["ruby","ruby"], ["s","s"], ["samp","samp"], ["script","script"], ["section","section"], ["select","select"], ["small","small"], ["source","source"], ["span","span"], ["strong","strong"], ["style","style"], ["sub","sub"], ["summary","summary"], ["sup","sup"], ["table","table"], ["tbody","tbody"], ["td","td"], ["template","template"], ["textarea","textarea"], ["tfoot","tfoot"], ["th","th"], ["thead","thead"], ["time","time"], ["title","title"], ["tr","tr"], ["track","track"], ["u","u"], ["ul","ul"], ["var","var"], ["video","video"], ["wbr","wbr"]]), "ELEMENT");
      this.appendDummyInput()
          .appendField("properties:")
          .appendField(new Blockly.FieldTextInput(""), "PROPERTIES");
      this.appendStatementInput("INNER")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_elementproperties'] = function(block, generator) {
    var dropdown_element = block.getFieldValue('ELEMENT');
    var text_properties = block.getFieldValue('PROPERTIES');
    var statements_inner = generator.statementToCode(block, 'INNER');
    var code = `<${dropdown_element} ${text_properties}>${statements_inner}</${dropdown_element}>`;
    return code;
};

Blockly.Blocks['site_text'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("plain text:")
          .appendField(new Blockly.FieldTextInput(""), "TEXT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_text'] = function(block, generator) {
    var text_text = block.getFieldValue('TEXT');
    var code = text_text;
    return code;
};

Blockly.Blocks['site_break'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("line break");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_break'] = function(block, generator) {
    var code = '<br>';
    return code;
};

Blockly.Blocks['site_selector'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("style properties for")
          .appendField(new Blockly.FieldDropdown([["class","."], ["id","#"], ["element",""]]), "TYPE")
          .appendField(new Blockly.FieldTextInput(""), "NAME");
      this.appendStatementInput("PROPERTIES")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_selector'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var text_name = block.getFieldValue('NAME');
    var statements_properties = generator.statementToCode(block, 'PROPERTIES');
    var code = `${dropdown_type}${text_name}{${statements_properties}}`;
    return code;
};

Blockly.Blocks['types_typeof'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("type of");
      this.setOutput(true, null);
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['types_typeof'] = function(block, generator) {
    var value_name = generator.valueToCode(block, 'NAME', javascript.Order.ATOMIC);
    var code = `typeof ${value_name}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['types_tostring'] = {
    init: function() {
      this.appendValueInput("INPUT")
          .setCheck(null)
          .appendField("convert");
      this.appendDummyInput()
          .appendField("to string");
      this.setOutput(true, "String");
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['types_tostring'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var code = `String(${value_input})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['types_tonumber'] = {
    init: function() {
      this.appendValueInput("INPUT")
          .setCheck(null)
          .appendField("convert");
      this.appendDummyInput()
          .appendField("to number");
      this.setOutput(true, "Number");
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['types_tonumber'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var code = `Number(${value_input})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['types_toboolean'] = {
    init: function() {
      this.appendValueInput("INPUT")
          .setCheck(null)
          .appendField("convert");
      this.appendDummyInput()
          .appendField("to boolean");
      this.setOutput(true, "Boolean");
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['types_toboolean'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var code = `Boolean(${value_input})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['types_strictlyequals'] = {
    init: function() {
      this.appendValueInput("INPUT1")
          .setCheck(null);
      this.appendValueInput("INPUT2")
          .setCheck(null)
          .appendField("===");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['types_strictlyequals'] = function(block, generator) {
    var value_input1 = generator.valueToCode(block, 'INPUT1', javascript.Order.ATOMIC);
    var value_input2 = generator.valueToCode(block, 'INPUT2', javascript.Order.ATOMIC);
    var code = `${value_input1} === ${value_input2}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['music_pitch_field'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(new FieldPitch('7'), 'PITCH');
      this.setOutput(true, null);
      this.setColour(190);
      this.setTooltip("A musical note.");
      this.setHelpUrl("https://en.wikipedia.org/wiki/Musical_note");
    },
};
javascript.javascriptGenerator.forBlock['music_pitch_field'] = function(block, generator) {
    var pitch = block.getFieldValue('PITCH');
    var code = `getPitch(${pitch})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['music_play'] = {
    init: function() {
      this.appendValueInput("SPEED")
          .setCheck(null)
          .appendField("play");
      this.appendValueInput("PITCH")
          .setCheck(null)
          .appendField("note");
      this.appendDummyInput()
          .appendField("on synth")
          .appendField(new Blockly.FieldTextInput("synth"), "SYNTH");
      this.appendValueInput("TIME")
          .setCheck(null)
          .appendField("after");
      this.appendDummyInput()
          .appendField("seconds");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['music_play'] = function(block, generator) {
    var value_speed = generator.valueToCode(block, 'SPEED', javascript.Order.ATOMIC);
    var value_pitch = generator.valueToCode(block, 'PITCH', javascript.Order.ATOMIC);
    var text_synth = block.getFieldValue('SYNTH');
    var value_time = generator.valueToCode(block, 'TIME', javascript.Order.ATOMIC);
    var code = `${text_synth}.triggerAttackRelease(${value_pitch}, "${value_speed}n", now + ${value_time});\n`;
    return code;
};

Blockly.Blocks['music_create_synth'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("create")
          .appendField(new Blockly.FieldDropdown([["synth","Synth"], ["poly-synth","PolySynth"], ["mono-synth","MonoSynth"], ["duo-synth","DuoSynth"], ["FM synth","FMSynth"], ["AM synth","AMSynth"], ["metal synth","MetalSynth"], ["membrane synth","MembraneSynth"]]), "TYPE")
          .appendField(new Blockly.FieldTextInput("synth"), "SYNTH");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['music_create_synth'] = function(block, generator) {
    var text_synth = block.getFieldValue('SYNTH');
    var dropdown_type = block.getFieldValue('TYPE');
    var code = `const ${text_synth} = new Tone.${dropdown_type}().toDestination();\nvar now = Tone.now();\n`;
    return code;
};

Blockly.Blocks['music_create_synth_extended'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("create")
          .appendField(new Blockly.FieldDropdown([["sine","sine"], ["square","square"], ["triangle","triangle"], ["sawtooth","sawtooth"]]), "OSCILLATOR")
          .appendField(new Blockly.FieldDropdown([["synth","Synth"], ["mono-synth","MonoSynth"], ["FM synth","FMSynth"], ["AM synth","AMSynth"], ["metal synth","MetalSynth"], ["membrane synth","MembraneSynth"]]), "TYPE")
          .appendField(new Blockly.FieldTextInput("synth"), "SYNTH");
      this.appendValueInput("VOLUME")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("volume:");
      this.appendValueInput("A")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("attack:");
      this.appendValueInput("D")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("decay:");
      this.appendValueInput("S")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("sustain:");
      this.appendValueInput("R")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("release:");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['music_create_synth_extended'] = function(block, generator) {
    var dropdown_oscillator = block.getFieldValue('OSCILLATOR');
    var dropdown_type = block.getFieldValue('TYPE');
    var text_synth = block.getFieldValue('SYNTH');
    var value_volume = generator.valueToCode(block, 'VOLUME', javascript.Order.ATOMIC);
    var value_a = generator.valueToCode(block, 'A', javascript.Order.ATOMIC);
    var value_d = generator.valueToCode(block, 'D', javascript.Order.ATOMIC);
    var value_s = generator.valueToCode(block, 'S', javascript.Order.ATOMIC);
    var value_r = generator.valueToCode(block, 'R', javascript.Order.ATOMIC);
    var code = `const ${text_synth} = new Tone.${dropdown_type}({volume: ${value_volume}, oscillator:{type:'${dropdown_oscillator}'}, envelope:{attack: ${value_a}, decay: ${value_d}, sustain: ${value_s}, release: ${value_r}}}).toDestination();\nvar now = Tone.now();\n`;
    return code;
};

Blockly.Blocks['music_transpose'] = {
    init: function() {
      this.appendValueInput("PITCH")
          .setCheck(null)
          .appendField("transpose");
      this.appendValueInput("SEMITONES")
          .setCheck("Number")
          .appendField("by");
      this.appendDummyInput()
          .appendField("semitones");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(190);
   this.setTooltip("Transposes a note by a number of semitones.");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['music_transpose'] = function(block, generator) {
    var value_pitch = generator.valueToCode(block, 'PITCH', javascript.Order.ATOMIC);
    var value_semitones = generator.valueToCode(block, 'SEMITONES', javascript.Order.ATOMIC);
    var code = `Tone.Frequency(Tone.Midi(${value_pitch}).transpose(${value_semitones}), "midi").toNote()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['objects_object'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("resources/{ char.png", 8, 20, { alt: "{", flipRtl: "TRUE" }))
          .appendField(new Blockly.FieldTextInput(""), "OBJECT")
          .appendField(new Blockly.FieldImage("resources/} char.png", 8, 20, { alt: "}", flipRtl: "TRUE" }));
      this.setOutput(true, null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['objects_object'] = function(block, generator) {
    var text_object = block.getFieldValue('OBJECT');
    var code = `{${text_object}}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['music_create_custom_synth'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("create ")
          .appendField(new Blockly.FieldDropdown([["synth","Synth"], ["poly-synth","PolySynth"], ["mono-synth","MonoSynth"], ["duo-synth","DuoSynth"], ["FM synth","FMSynth"], ["AM synth","AMSynth"], ["metal synth","MetalSynth"], ["membrane synth","MembraneSynth"]]), "NAME")
          .appendField(new Blockly.FieldTextInput("synth"), "SYNTH");
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("with");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['music_create_custom_synth'] = function(block, generator) {
    var dropdown_name = block.getFieldValue('NAME');
    var text_synth = block.getFieldValue('SYNTH');
    var value_name = generator.valueToCode(block, 'NAME', javascript.Order.ATOMIC);
    var code = `const ${text_synth} = new Tone.${dropdown_name}(${value_name}).toDestination();\nvar now = Tone.now();\n`;
    return code;
};

Blockly.Blocks['test_try'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("try");
      this.appendStatementInput("TRY")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("catch")
          .appendField(new Blockly.FieldVariable("error"), "ERROR");
      this.appendStatementInput("CATCH")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['test_try'] = function(block, generator) {
    var statements_try = generator.statementToCode(block, 'TRY');
    var variable_error = generator.nameDB_.getName(block.getFieldValue('ERROR'), Blockly.Variables.NAME_TYPE);
    var statements_catch = generator.statementToCode(block, 'CATCH');
    var code = `try{\n${statements_try}}\ncatch(error){\n${statements_catch}}\n`;
    return code;
};

Blockly.Blocks['test_inline_function'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("inline function");
      this.appendStatementInput("FUNCTION")
          .setCheck(null);
      this.appendValueInput("RETURN")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("return");
      this.setOutput(true, null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['test_inline_function'] = function(block, generator) {
    var statements_function = generator.statementToCode(block, 'FUNCTION');
    var value_return = generator.valueToCode(block, 'RETURN', javascript.Order.ATOMIC);
    var code = `(function(){\n${statements_function}return ${value_return}})\n()\n`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['test_clear'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("clear console");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#72503e");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['test_clear'] = function(block, generator) {
    var code = 'clearConsole();\n';
    return code;
};

Blockly.Blocks['test_write'] = {
    init: function() {
      this.appendValueInput("INPUT")
          .setCheck(null)
          .appendField("write");
      this.appendDummyInput()
          .appendField("on console");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#72503e");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['test_write'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var code = `writeConsole(${value_input});\n`;
    return code;
};

Blockly.Blocks['test_colorwrite'] = {
    init: function() {
      this.appendValueInput("INPUT")
          .setCheck(null)
          .appendField("write");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .appendField("on console with color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#72503e");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['test_colorwrite'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var code = `colorwriteConsole(${value_input}, ${value_color});\n`;
    return code;
};

Blockly.Blocks['test_getconsole'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("get console");
      this.setOutput(true, null);
      this.setColour("#72503e");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['test_getconsole'] = function(block, generator) {
    var code = 'console';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['site_property'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("set property")
          .appendField(new Blockly.FieldDropdown([["align-content","align-content"], ["align-items","align-items"], ["align-self","align-self"], ["all","all"], ["animation","animation"], ["animation-delay","animation-delay"], ["animation-direction","animation-direction"], ["animation-duration","animation-duration"], ["animation-fill-mode","animation-fill-mode"], ["animation-iteration-count","animation-iteration-count"], ["animation-name","animation-name"], ["animation-play-state","animation-play-state"], ["animation-timing-function","animation-timing-function"], ["backdrop-filter","backdrop-filter"], ["backface-visibility","backface-visibility"], ["background","background"], ["background-attachment","background-attachment"], ["background-blend-mode","background-blend-mode"], ["background-clip","background-clip"], ["background-color","background-color"], ["background-image","background-image"], ["background-origin","background-origin"], ["background-position","background-position"], ["background-repeat","background-repeat"], ["background-size","background-size"], ["block-size","block-size"], ["border","border"], ["border-block","border-block"], ["border-block-color","border-block-color"], ["border-block-end","border-block-end"], ["border-block-end-color","border-block-end-color"], ["border-block-end-style","border-block-end-style"], ["border-block-end-width","border-block-end-width"], ["border-block-start","border-block-start"], ["border-block-start-color","border-block-start-color"], ["border-block-start-style","border-block-start-style"], ["border-block-start-width","border-block-start-width"], ["border-block-style","border-block-style"], ["border-block-width","border-block-width"], ["border-bottom","border-bottom"], ["border-bottom-color","border-bottom-color"], ["border-bottom-left-radius","border-bottom-left-radius"], ["border-bottom-right-radius","border-bottom-right-radius"], ["border-bottom-style","border-bottom-style"], ["border-bottom-width","border-bottom-width"], ["border-collapse","border-collapse"], ["border-color","border-color"], ["border-end-end-radius","border-end-end-radius"], ["border-end-start-radius","border-end-start-radius"], ["border-image","border-image"], ["border-image-outset","border-image-outset"], ["border-image-repeat","border-image-repeat"], ["border-image-slice","border-image-slice"], ["border-image-source","border-image-source"], ["border-image-width","border-image-width"], ["border-inline","border-inline"], ["border-inline-color","border-inline-color"], ["border-inline-end","border-inline-end"], ["border-inline-end-color","border-inline-end-color"], ["border-inline-end-style","border-inline-end-style"], ["border-inline-end-width","border-inline-end-width"], ["border-inline-start","border-inline-start"], ["border-inline-start-color","border-inline-start-color"], ["border-inline-start-style","border-inline-start-style"], ["border-inline-start-width","border-inline-start-width"], ["border-inline-style","border-inline-style"], ["border-inline-width","border-inline-width"], ["border-left","border-left"], ["border-left-color","border-left-color"], ["border-left-style","border-left-style"], ["border-left-width","border-left-width"], ["border-radius","border-radius"], ["border-right","border-right"], ["border-right-color","border-right-color"], ["border-right-style","border-right-style"], ["border-right-width","border-right-width"], ["border-spacing","border-spacing"], ["border-start-end-radius","border-start-end-radius"], ["border-start-start-radius","border-start-start-radius"], ["border-style","border-style"], ["border-top","border-top"], ["border-top-color","border-top-color"], ["border-top-left-radius","border-top-left-radius"], ["border-top-right-radius","border-top-right-radius"], ["border-top-style","border-top-style"], ["border-top-width","border-top-width"], ["border-width","border-width"], ["bottom","bottom"], ["box-decoration-break","box-decoration-break"], ["box-shadow","box-shadow"], ["box-sizing","box-sizing"], ["break-after","break-after"], ["break-before","break-before"], ["break-inside","break-inside"], ["caption-side","caption-side"], ["caret-color","caret-color"], ["@charset","@charset"], ["clear","clear"], ["clip","clip"], ["clip-path","clip-path"], ["color","color"], ["column-count","column-count"], ["column-fill","column-fill"], ["column-gap","column-gap"], ["column-rule","column-rule"], ["column-rule-color","column-rule-color"], ["column-rule-style","column-rule-style"], ["column-rule-width","column-rule-width"], ["column-span","column-span"], ["column-width","column-width"], ["columns","columns"], ["content","content"], ["counter-increment","counter-increment"], ["counter-reset","counter-reset"], ["cursor","cursor"], ["direction","direction"], ["display","display"], ["empty-cells","empty-cells"], ["filter","filter"], ["flex","flex"], ["flex-basis","flex-basis"], ["flex-direction","flex-direction"], ["flex-flow","flex-flow"], ["flex-grow","flex-grow"], ["flex-shrink","flex-shrink"], ["flex-wrap","flex-wrap"], ["float","float"], ["font","font"], ["font-family","font-family"], ["font-feature-settings","font-feature-settings"], ["font-kerning","font-kerning"], ["font-language-override","font-language-override"], ["font-optical-sizing","font-optical-sizing"], ["font-size","font-size"], ["font-size-adjust","font-size-adjust"], ["font-stretch","font-stretch"], ["font-style","font-style"], ["font-synthesis","font-synthesis"], ["font-variant","font-variant"], ["font-variant-caps","font-variant-caps"], ["font-variant-east-asian","font-variant-east-asian"], ["font-variant-ligatures","font-variant-ligatures"], ["font-variant-numeric","font-variant-numeric"], ["font-variant-position","font-variant-position"], ["font-variation-settings","font-variation-settings"], ["font-weight","font-weight"], ["gap","gap"], ["grid","grid"], ["grid-area","grid-area"], ["grid-auto-columns","grid-auto-columns"], ["grid-auto-flow","grid-auto-flow"], ["grid-auto-rows","grid-auto-rows"], ["grid-column","grid-column"], ["grid-column-end","grid-column-end"], ["grid-column-gap","grid-column-gap"], ["grid-column-start","grid-column-start"], ["grid-gap","grid-gap"], ["grid-row","grid-row"], ["grid-row-end","grid-row-end"], ["grid-row-gap","grid-row-gap"], ["grid-row-start","grid-row-start"], ["grid-template","grid-template"], ["grid-template-areas","grid-template-areas"], ["grid-template-columns","grid-template-columns"], ["grid-template-rows","grid-template-rows"], ["hanging-punctuation","hanging-punctuation"], ["height","height"], ["hyphens","hyphens"], ["image-orientation","image-orientation"], ["image-rendering","image-rendering"], ["inline-size","inline-size"], ["inset","inset"], ["inset-block","inset-block"], ["inset-block-end","inset-block-end"], ["inset-block-start","inset-block-start"], ["inset-inline","inset-inline"], ["inset-inline-end","inset-inline-end"], ["inset-inline-start","inset-inline-start"], ["isolation","isolation"], ["justify-content","justify-content"], ["justify-items","justify-items"], ["justify-self","justify-self"], ["left","left"], ["letter-spacing","letter-spacing"], ["line-break","line-break"], ["line-height","line-height"], ["list-style","list-style"], ["list-style-image","list-style-image"], ["list-style-position","list-style-position"], ["list-style-type","list-style-type"], ["margin","margin"], ["margin-block","margin-block"], ["margin-block-end","margin-block-end"], ["margin-block-start","margin-block-start"], ["margin-bottom","margin-bottom"], ["margin-inline","margin-inline"], ["margin-inline-end","margin-inline-end"], ["margin-inline-start","margin-inline-start"], ["margin-left","margin-left"], ["margin-right","margin-right"], ["margin-top","margin-top"], ["mask","mask"], ["mask-border","mask-border"], ["mask-border-mode","mask-border-mode"], ["mask-border-outset","mask-border-outset"], ["mask-border-repeat","mask-border-repeat"], ["mask-border-slice","mask-border-slice"], ["mask-border-source","mask-border-source"], ["mask-border-width","mask-border-width"], ["mask-clip","mask-clip"], ["mask-composite","mask-composite"], ["mask-image","mask-image"], ["mask-mode","mask-mode"], ["mask-origin","mask-origin"], ["mask-position","mask-position"], ["mask-repeat","mask-repeat"], ["mask-size","mask-size"], ["mask-type","mask-type"], ["max-block-size","max-block-size"], ["max-height","max-height"], ["max-inline-size","max-inline-size"], ["max-width","max-width"],["min-block-size","min-block-size"], ["min-height","min-height"], ["min-inline-size","min-inline-size"], ["min-width","min-width"], ["mix-blend-mode","mix-blend-mode"], ["object-fit","object-fit"], ["object-position","object-position"], ["offset","offset"], ["offset-anchor","offset-anchor"], ["offset-block","offset-block"], ["offset-block-end","offset-block-end"], ["offset-block-start","offset-block-start"], ["offset-inline","offset-inline"], ["offset-inline-end","offset-inline-end"], ["offset-inline-start","offset-inline-start"], ["offset-path","offset-path"], ["offset-position","offset-position"], ["opacity","opacity"], ["order","order"], ["orphans","orphans"], ["outline","outline"], ["outline-color","outline-color"], ["outline-offset","outline-offset"], ["outline-style","outline-style"], ["outline-width","outline-width"], ["overflow","overflow"], ["overflow-anchor","overflow-anchor"], ["overflow-block","overflow-block"], ["overflow-inline","overflow-inline"], ["overflow-wrap","overflow-wrap"], ["overflow-x","overflow-x"], ["overflow-y","overflow-y"], ["overscroll-behavior","overscroll-behavior"], ["overscroll-behavior-block","overscroll-behavior-block"], ["overscroll-behavior-inline","overscroll-behavior-inline"], ["overscroll-behavior-x","overscroll-behavior-x"], ["overscroll-behavior-y","overscroll-behavior-y"], ["padding","padding"], ["padding-block","padding-block"], ["padding-block-end","padding-block-end"], ["padding-block-start","padding-block-start"], ["padding-bottom","padding-bottom"], ["padding-inline","padding-inline"], ["padding-inline-end","padding-inline-end"], ["padding-inline-start","padding-inline-start"], ["padding-left","padding-left"], ["padding-right","padding-right"], ["padding-top","padding-top"], ["page-break-after","page-break-after"], ["page-break-before","page-break-before"], ["page-break-inside","page-break-inside"], ["perspective","perspective"], ["perspective-origin","perspective-origin"], ["place-content","place-content"], ["place-items","place-items"], ["place-self","place-self"], ["pointer-events","pointer-events"], ["position","position"], ["quotes","quotes"], ["resize","resize"], ["right","right"], ["rotate","rotate"], ["row-gap","row-gap"], ["ruby-align","ruby-align"], ["ruby-merge","ruby-merge"], ["ruby-position","ruby-position"], ["scale","scale"], ["scroll-behavior","scroll-behavior"], ["scroll-margin","scroll-margin"], ["scroll-margin-block","scroll-margin-block"], ["scroll-margin-block-end","scroll-margin-block-end"], ["scroll-margin-block-start","scroll-margin-block-start"], ["scroll-margin-bottom","scroll-margin-bottom"], ["scroll-margin-inline","scroll-margin-inline"], ["scroll-margin-inline-end","scroll-margin-inline-end"], ["scroll-margin-inline-start","scroll-margin-inline-start"], ["scroll-margin-left","scroll-margin-left"], ["scroll-margin-right","scroll-margin-right"], ["scroll-margin-top","scroll-margin-top"], ["scroll-padding","scroll-padding"], ["scroll-padding-block","scroll-padding-block"], ["scroll-padding-block-end","scroll-padding-block-end"], ["scroll-padding-block-start","scroll-padding-block-start"], ["scroll-padding-bottom","scroll-padding-bottom"], ["scroll-padding-inline","scroll-padding-inline"], ["scroll-padding-inline-end","scroll-padding-inline-end"], ["scroll-padding-inline-start","scroll-padding-inline-start"], ["scroll-padding-left","scroll-padding-left"], ["scroll-padding-right","scroll-padding-right"], ["scroll-padding-top","scroll-padding-top"], ["scroll-snap-align","scroll-snap-align"], ["scroll-snap-stop","scroll-snap-stop"], ["scroll-snap-type","scroll-snap-type"], ["scrollbar-color","scrollbar-color"], ["scrollbar-width","scrollbar-width"], ["shape-image-threshold","shape-image-threshold"], ["shape-margin","shape-margin"], ["shape-outside","shape-outside"], ["tab-size","tab-size"], ["table-layout","table-layout"], ["text-align","text-align"], ["text-align-last","text-align-last"], ["text-combine-upright","text-combine-upright"], ["text-decoration","text-decoration"], ["text-decoration-color","text-decoration-color"], ["text-decoration-line","text-decoration-line"], ["text-decoration-skip-ink","text-decoration-skip-ink"], ["text-decoration-style","text-decoration-style"], ["text-emphasis","text-emphasis"], ["text-emphasis-color","text-emphasis-color"], ["text-emphasis-position","text-emphasis-position"], ["text-emphasis-style","text-emphasis-style"], ["text-indent","text-indent"], ["text-justify","text-justify"], ["text-orientation","text-orientation"], ["text-overflow","text-overflow"], ["text-rendering","text-rendering"], ["text-shadow","text-shadow"], ["text-transform","text-transform"], ["text-underline-offset","text-underline-offset"], ["text-underline-position","text-underline-position"], ["top","top"], ["transform","transform"], ["transform-box","transform-box"], ["transform-origin","transform-origin"], ["transform-style","transform-style"], ["transition","transition"], ["transition-delay","transition-delay"], ["transition-duration","transition-duration"], ["transition-property","transition-property"], ["transition-timing-function","transition-timing-function"], ["translate","translate"], ["unicode-bidi","unicode-bidi"], ["user-select","user-select"], ["vertical-align","vertical-align"], ["visibility","visibility"], ["white-space","white-space"], ["widows","widows"], ["width","width"], ["will-change","will-change"], ["word-break","word-break"], ["word-spacing","word-spacing"], ["word-wrap","word-wrap"], ["writing-mode","writing-mode"], ["z-index","z-index"]]), "TYPE")
          .appendField("to")
          .appendField(new Blockly.FieldTextInput(""), "VALUE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['site_property'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var text_value = block.getFieldValue('VALUE');
    var code = `${dropdown_type}: ${text_value};`;
    return code;
};

Blockly.Blocks['canvas_clear'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("clear canvas");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_clear'] = function(block, generator) {
    var code = 'clearCanvas();\n';
    return code;
};

Blockly.Blocks['canvas_draw_fillrect'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw filled rectangle");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color:");
      this.appendValueInput("X1")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start x:");
      this.appendValueInput("Y1")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start y:");
      this.appendValueInput("X2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("width:");
      this.appendValueInput("Y2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("height:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_draw_fillrect'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var value_x1 = generator.valueToCode(block, 'X1', javascript.Order.ATOMIC);
    var value_y1 = generator.valueToCode(block, 'Y1', javascript.Order.ATOMIC);
    var value_x2 = generator.valueToCode(block, 'X2', javascript.Order.ATOMIC);
    var value_y2 = generator.valueToCode(block, 'Y2', javascript.Order.ATOMIC);
    var code = `context.fillStyle = ${value_color};\ncontext.fillRect(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2});\n`;
    return code;
};

Blockly.Blocks['canvas_draw_strokerect'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw stroke rectangle");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color:");
      this.appendValueInput("WIDTH")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("line width:");
      this.appendValueInput("X1")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start x:");
      this.appendValueInput("Y1")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start y:");
      this.appendValueInput("X2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("width:");
      this.appendValueInput("Y2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("height:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_draw_strokerect'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var value_width = generator.valueToCode(block, 'WIDTH', javascript.Order.ATOMIC);
    var value_x1 = generator.valueToCode(block, 'X1', javascript.Order.ATOMIC);
    var value_y1 = generator.valueToCode(block, 'Y1', javascript.Order.ATOMIC);
    var value_x2 = generator.valueToCode(block, 'X2', javascript.Order.ATOMIC);
    var value_y2 = generator.valueToCode(block, 'Y2', javascript.Order.ATOMIC);
    var code = `context.strokeStyle = ${value_color};\ncontext.lineWidth = ${value_width};\ncontext.strokeRect(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2});\n`;
    return code;
};

Blockly.Blocks['canvas_draw_clearrect'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw clear rectangle");
      this.appendValueInput("X1")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start x:");
      this.appendValueInput("Y1")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start y:");
      this.appendValueInput("X2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("width:");
      this.appendValueInput("Y2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("height:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_draw_clearrect'] = function(block, generator) {
    var value_x1 = generator.valueToCode(block, 'X1', javascript.Order.ATOMIC);
    var value_y1 = generator.valueToCode(block, 'Y1', javascript.Order.ATOMIC);
    var value_x2 = generator.valueToCode(block, 'X2', javascript.Order.ATOMIC);
    var value_y2 = generator.valueToCode(block, 'Y2', javascript.Order.ATOMIC);
    var code = `context.clearRect(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2});\n`;
    return code;
};

Blockly.Blocks['loops_interval'] = {
    init: function() {
      this.appendValueInput("TIME")
          .setCheck(null)
          .appendField("create interval")
          .appendField(new Blockly.FieldTextInput("interval"), "NAME")
          .appendField("for");
      this.appendDummyInput()
          .appendField("milliseconds");
      this.appendStatementInput("FUNCTION")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['loops_interval'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    var value_time = generator.valueToCode(block, 'TIME', javascript.Order.ATOMIC);
    var statements_function = generator.statementToCode(block, 'FUNCTION');
    var code = `const ${text_name} = setInterval(function(){${statements_function}}, ${value_time});\n`;
    return code;
};

Blockly.Blocks['loops_stop_interval'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("stop interval")
          .appendField(new Blockly.FieldTextInput("interval"), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['loops_stop_interval'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    var code = `clearInterval(${text_name});\n`;
    return code;
};

Blockly.Blocks['loops_timeout'] = {
    init: function() {
      this.appendValueInput("TIME")
          .setCheck(null)
          .appendField("create timeout")
          .appendField(new Blockly.FieldTextInput("timeout"), "NAME")
          .appendField("for");
      this.appendDummyInput()
          .appendField("milliseconds");
      this.appendStatementInput("FUNCTION")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['loops_timeout'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    var value_time = generator.valueToCode(block, 'TIME', javascript.Order.ATOMIC);
    var statements_function = generator.statementToCode(block, 'FUNCTION');
    var code = `const ${text_name} = setTimeout(function(){${statements_function}}, ${value_time});\n`;
    return code;
};

Blockly.Blocks['loops_stop_timeout'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("stop timeout")
          .appendField(new Blockly.FieldTextInput("timeout"), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['loops_stop_timeout'] = function(block, generator) {
    var text_name = block.getFieldValue('NAME');
    var code = `clearTimeout(${text_name});\n`;
    return code;
};

Blockly.Blocks['canvas_movecontext'] = {
    init: function() {
      this.appendValueInput("X")
          .setCheck(null)
          .appendField("move to x:");
      this.appendValueInput("Y")
          .setCheck(null)
          .appendField("y:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_movecontext'] = function(block, generator) {
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `context.moveTo(${value_x}, ${value_y});\n`;
    return code;
};

Blockly.Blocks['canvas_drawline'] = {
    init: function() {
      this.appendValueInput("X")
          .setCheck(null)
          .appendField("draw line to x:");
      this.appendValueInput("Y")
          .setCheck(null)
          .appendField("y:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_drawline'] = function(block, generator) {
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `context.lineTo(${value_x}, ${value_y});\n`;
    return code;
};

Blockly.Blocks['canvas_drawpath'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw filled path");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color:");
      this.appendStatementInput("COMMANDS")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("close path")
          .appendField(new Blockly.FieldCheckbox("FALSE"), "CLOSE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_drawpath'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var statements_commands = generator.statementToCode(block, 'COMMANDS');
    var checkbox_close = block.getFieldValue('CLOSE') === 'TRUE';
    if(!checkbox_close){ var code = `context.fillStyle = ${value_color};\ncontext.beginPath();\n${statements_commands}context.fill();\n`; }
    else{ var code = `context.fillStyle = ${value_color};\ncontext.beginPath();\n${statements_commands}context.closePath();\ncontext.fill();\n`; }
    return code;
};

Blockly.Blocks['canvas_drawstrokepath'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw stroke path");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color:");
      this.appendValueInput("WIDTH")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("line width:");
      this.appendStatementInput("COMMANDS")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("close path")
          .appendField(new Blockly.FieldCheckbox("FALSE"), "CLOSE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_drawstrokepath'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var value_width = generator.valueToCode(block, 'WIDTH', javascript.Order.ATOMIC);
    var statements_commands = generator.statementToCode(block, 'COMMANDS');
    var checkbox_close = block.getFieldValue('CLOSE') === 'TRUE';
    if(!checkbox_close){ var code = `context.lineWidth = ${value_width};\ncontext.strokeStyle = ${value_color};\ncontext.beginPath();\n${statements_commands}context.stroke();\n`; }
    else{ var code = `context.lineWidth = ${value_width};\ncontext.strokeStyle = ${value_color};\ncontext.beginPath();\n${statements_commands}context.closePath();\ncontext.stroke();\n`; }
    return code;
};

Blockly.Blocks['canvas_fillcircle'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw filled circle");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color:");
      this.appendValueInput("RADIUS")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("radius:");
      this.appendValueInput("X")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("x:");
      this.appendValueInput("Y")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_fillcircle'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var value_radius = generator.valueToCode(block, 'RADIUS', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `context.fillStyle = ${value_color};\ncontext.beginPath();\ncontext.arc(${value_x},${value_y},${value_radius},0,2*Math.PI);\ncontext.fill();\n`;
    return code;
};

Blockly.Blocks['canvas_strokecircle'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw stroke circle");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color:");
      this.appendValueInput("WIDTH")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("line width:");
      this.appendValueInput("RADIUS")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("radius:");
      this.appendValueInput("X")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("x:");
      this.appendValueInput("Y")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_strokecircle'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var value_width = generator.valueToCode(block, 'WIDTH', javascript.Order.ATOMIC);
    var value_radius = generator.valueToCode(block, 'RADIUS', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `context.lineWidth = ${value_width};\ncontext.strokeStyle = ${value_color};\ncontext.beginPath();\ncontext.arc(${value_x},${value_y},${value_radius},0,2*Math.PI);\ncontext.stroke();\n`;
    return code;
};

Blockly.Blocks['canvas_changebg'] = {
    init: function() {
      this.appendValueInput("COLOR")
          .setCheck(null)
          .appendField("change background color to");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_changebg'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var code = `$("#canvasContainer").css("background-color",${value_color});\n`;
    return code;
};

Blockly.Blocks['canvas_getbg'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("background color");
      this.setOutput(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_getbg'] = function(block, generator) {
    var code = `rgb2hex($("#canvasContainer").css("background-color"))`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['canvas_getmousex'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mouse x");
      this.setOutput(true, "Number");
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_getmousex'] = function(block, generator) {
    var code = `Math.round(canvas_position.x)`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['canvas_getmousey'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mouse y");
      this.setOutput(true, "Number");
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_getmousey'] = function(block, generator) {
    var code = `Math.round(canvas_position.y)`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['advanced_addeventlistener'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("add event listener")
          .appendField(new Blockly.FieldDropdown([["abort","abort"], ["animationcancel","animationcancel"], ["animationend","animationend"], ["animationiteration","animationiteration"], ["animationstart","animationstart"], ["auxclick","auxclick"], ["blur","blur"], ["cancel","cancel"], ["canplay","canplay"], ["canplaythrough","canplaythrough"], ["change","change"], ["click","click"], ["close","close"], ["contextmenu","contextmenu"], ["cuechange","cuechange"], ["dblclick","dblclick"], ["drag","drag"], ["dragend","dragend"], ["dragenter","dragenter"], ["dragexit","dragexit"], ["dragleave","dragleave"], ["dragover","dragover"], ["dragstart","dragstart"], ["drop","drop"], ["durationchange","durationchange"], ["emptied","emptied"], ["ended","ended"], ["error","error"], ["focus","focus"], ["focusin","focusin"], ["focusout","focusout"], ["formdata","formdata"], ["gotpointercapture","gotpointercapture"], ["input","input"], ["invalid","invalid"], ["keydown","keydown"], ["keypress","keypress"], ["keyup","keyup"], ["load","load"], ["loadeddata","loadeddata"], ["loadedmetadata","loadedmetadata"], ["loadend","loadend"], ["loadstart","loadstart"], ["lostpointercapture","lostpointercapture"], ["mousedown","mousedown"], ["mouseenter","mouseenter"], ["mouseleave","mouseleave"], ["mousemove","mousemove"], ["mouseout","mouseout"], ["mouseover","mouseover"], ["mouseup","mouseup"], ["pause","pause"], ["play","play"], ["playing","playing"], ["pointercancel","pointercancel"], ["pointerdown","pointerdown"], ["pointerenter","pointerenter"], ["pointerleave","pointerleave"], ["pointermove","pointermove"], ["pointerout","pointerout"], ["pointerover","pointerover"], ["pointerup","pointerup"], ["progress","progress"], ["ratechange","ratechange"], ["reset","reset"], ["resize","resize"], ["scroll","scroll"], ["securitypolicyviolation","securitypolicyviolation"], ["seeked","seeked"], ["seeking","seeking"], ["select","select"], ["selectionchange","selectionchange"], ["selectstart","selectstart"], ["stalled","stalled"], ["submit","submit"], ["suspend","suspend"], ["timeupdate","timeupdate"], ["toggle","toggle"], ["touchcancel","touchcancel"], ["touchend","touchend"], ["touchmove","touchmove"], ["touchstart","touchstart"], ["transitioncancel","transitioncancel"], ["transitionend","transitionend"], ["transitionrun","transitionrun"], ["transitionstart","transitionstart"], ["volumechange","volumechange"], ["waiting","waiting"], ["wheel","wheel"]]), "type")
          .appendField(new Blockly.FieldVariable("event"), "var")
          .appendField("for")
          .appendField(new Blockly.FieldDropdown([["document","document"], ["window","window"]]), "NAME");
      this.appendStatementInput("CODE")
          .setCheck(null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['advanced_addeventlistener'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('type');
    var variable_var = generator.nameDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var dropdown_name = block.getFieldValue('NAME');
    var statements_code = generator.statementToCode(block, 'CODE');
    var code = `${dropdown_name}.addEventListener("${dropdown_type}", (${variable_var}) => {\n${statements_code}});\n`;
    return code;
};

Blockly.Blocks['web_download'] = {
    init: function() {
      this.appendValueInput("DATA")
          .setCheck(null)
          .appendField("download data URL");
      this.appendValueInput("FILE")
          .setCheck("String")
          .appendField("as");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_download'] = function(block, generator) {
    var value_data = generator.valueToCode(block, 'DATA', javascript.Order.ATOMIC);
    var value_file = generator.valueToCode(block, 'FILE', javascript.Order.ATOMIC);
    var code = `downloadDataURL(${value_file}, ${value_data});\n`;
    return code;
};

Blockly.Blocks['canvas_image'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("canvas as data URL");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_image'] = function(block, generator) {
    var code = 'canvas.toDataURL()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_copy'] = {
    init: function() {
      this.appendValueInput("TEXT")
          .setCheck("String")
          .appendField("copy");
      this.appendDummyInput()
          .appendField("to clipboard");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_copy'] = function(block, generator) {
    var value_text = generator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC);
    var code = `navigator.clipboard.writeText(${value_text});\n`;
    return code;
};

Blockly.Blocks['canvas_filltext'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw filled text");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color:");
      this.appendValueInput("CONTENT")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("content:");
      this.appendValueInput("FONT")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("font:");
      this.appendValueInput("X")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("x:");
      this.appendValueInput("Y")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_filltext'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var value_content = generator.valueToCode(block, 'CONTENT', javascript.Order.ATOMIC);
    var value_font = generator.valueToCode(block, 'FONT', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `context.fillStyle = ${value_color};\ncontext.font = ${value_font};\ncontext.fillText(${value_content},${value_x},${value_y});\n`;
    return code;
};

Blockly.Blocks['canvas_stroketext'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw stroke text");
      this.appendValueInput("COLOR")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color:");
      this.appendValueInput("WIDTH")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("line width:");
      this.appendValueInput("CONTENT")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("content:");
      this.appendValueInput("FONT")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("font:");
      this.appendValueInput("X")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("x:");
      this.appendValueInput("Y")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_stroketext'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var value_width = generator.valueToCode(block, 'WIDTH', javascript.Order.ATOMIC);
    var value_content = generator.valueToCode(block, 'CONTENT', javascript.Order.ATOMIC);
    var value_font = generator.valueToCode(block, 'FONT', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `context.lineWidth = ${value_width};\ncontext.strokeStyle = ${value_color};\ncontext.font = ${value_font};\ncontext.strokeText(${value_content},${value_x},${value_y});\n`;
    return code;
};

Blockly.Blocks['advanced_flipdisplay'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("resources/flip display.png", 35, 35, { alt: "", flipRtl: "FALSE" }))
          .appendField("change display");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['advanced_flipdisplay'] = function(block, generator) {
    var code = "changeConsole();\n";
    return code;
};

Blockly.Blocks['canvas_mousedown'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mouse down?");
      this.setOutput(true, "Boolean");
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_mousedown'] = function(block, generator) {
    var code = 'canvas_mouse';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['canvas_drawimage'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw image");
      this.appendValueInput("URL")
          .setCheck(null)
          .appendField("URL:");
      this.appendValueInput("X")
          .setCheck(null)
          .appendField("x:");
      this.appendValueInput("Y")
          .setCheck(null)
          .appendField("y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_drawimage'] = function(block, generator) {
    var value_url = generator.valueToCode(block, 'URL', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `var img = new Image;\nimg.src = ${value_url};\ncontext.drawImage(img, ${value_x}, ${value_y});\n`;
    return code;
};

Blockly.Blocks['types_dataurl'] = {
    init: function() {
      this.appendValueInput("TEXT")
          .setCheck(null)
          .appendField("convert");
      this.appendDummyInput()
          .appendField("to data URL");
      this.setOutput(true, null);
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['types_dataurl'] = function(block, generator) {
    var value_text = generator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC);
    var code = `('data:text/plain;charset=UTF-8,' + encodeURIComponent(${value_text}))`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['types_date'] = {
    init: function() {
      this.appendValueInput("TEXT")
          .setCheck(null)
          .appendField("convert");
      this.appendDummyInput()
          .appendField("to date");
      this.setOutput(true, null);
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['types_date'] = function(block, generator) {
    var value_text = generator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC);
    var code = `new Date(${value_text})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['math_digitsofpi'] = {
    init: function() {
      this.appendValueInput("NUM")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField("digits of \u{3C0}");
      this.setOutput(true, "Number");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['math_digitsofpi'] = function(block, generator) {
    var value_num = generator.valueToCode(block, 'NUM', javascript.Order.ATOMIC);
    var code = `digitsOfPi(${value_num})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['canvas_area_hover'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("is mouse hovering over");
      this.appendValueInput("X1")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start x:");
      this.appendValueInput("Y1")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start y:");
      this.appendValueInput("X2")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("end x:");
      this.appendValueInput("Y2")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("end y:");
      this.setOutput(true, "Boolean");
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['canvas_area_hover'] = function(block, generator) {
    var value_x1 = generator.valueToCode(block, 'X1', javascript.Order.ATOMIC);
    var value_y1 = generator.valueToCode(block, 'Y1', javascript.Order.ATOMIC);
    var value_x2 = generator.valueToCode(block, 'X2', javascript.Order.ATOMIC);
    var value_y2 = generator.valueToCode(block, 'Y2', javascript.Order.ATOMIC);
    var code = `canvasDetectAreaHover(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['canvas_area_click'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("is mouse down on");
      this.appendValueInput("X1")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start x:");
      this.appendValueInput("Y1")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start y:");
      this.appendValueInput("X2")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("end x:");
      this.appendValueInput("Y2")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("end y:");
      this.setOutput(true, "Boolean");
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['canvas_area_click'] = function(block, generator) {
    var value_x1 = generator.valueToCode(block, 'X1', javascript.Order.ATOMIC);
    var value_y1 = generator.valueToCode(block, 'Y1', javascript.Order.ATOMIC);
    var value_x2 = generator.valueToCode(block, 'X2', javascript.Order.ATOMIC);
    var value_y2 = generator.valueToCode(block, 'Y2', javascript.Order.ATOMIC);
    var code = `canvasDetectAreaClick(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['canvas_setfilter'] = {
    init: function() {
      this.appendValueInput("VALUE")
          .setCheck("String")
          .appendField("set filter")
          .appendField(new Blockly.FieldDropdown([["blur","blur"], ["brightness","brightness"], ["contrast","contrast"], ["grayscale","grayscale"], ["hue-rotate","hue-rotate"], ["invert","invert"], ["opacity","opacity"], ["saturate","saturate"], ["sepia","sepia"]]), "FILTER")
          .appendField("to");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['canvas_setfilter'] = function(block, generator) {
    var dropdown_filter = block.getFieldValue('FILTER');
    var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
    var code = `setCanvasFilter("${dropdown_filter}", ${value_value});\n`;
    return code;
};

Blockly.Blocks['canvas_clearfilter'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("clear filter");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['canvas_clearfilter'] = function(block, generator) {
    var code = 'clearCanvasFilter();\n';
    return code;
};

Blockly.Blocks['canvas_getfilter'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("current filter");
      this.setOutput(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['canvas_getfilter'] = function(block, generator) {
    var code = 'getCurrentCanvasFilter()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['canvas_checkkeydown'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("key")
          .appendField(new Blockly.FieldDropdown([["a", "a"], ["b", "b"], ["c", "c"], ["d", "d"], ["e", "e"], ["f", "f"], ["g", "g"], ["h", "h"], ["i", "i"], ["j", "j"], ["k", "k"], ["l", "l"], ["m", "m"], ["n", "n"], ["o", "o"], ["p", "p"], ["q", "q"], ["r", "r"], ["s", "s"], ["t", "t"], ["u", "u"], ["v", "v"], ["w", "w"], ["x", "x"], ["y", "y"], ["z", "z"], ["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["!", "!"], ["@", "@"], ["#", "#"], ["$", "$"], ["%", "%"], ["^", "^"], ["&", "&"], ["*", "*"], ["(", "("], [")", ")"], ["-", "-"], ["_", "_"], ["=", "="], ["+", "+"], ["[", "["], ["{", "{"], ["]", "]"], ["}", "}"], ["\\", "\\"], ["|", "|"], [";", ";"], [":", ":"], ["'", "'"], ["\"", "\""], [",", ","], ["<", "<"], [".", "."], [">", ">"], ["/", "/"], ["?", "?"], ["`", "`"], ["~", "~"], [" ", " "], ["Enter", "Enter"], ["Tab", "Tab"], ["Backspace", "Backspace"], ["Shift", "Shift"], ["Control", "Control"], ["Alt", "Alt"], ["Meta", "Meta"], ["AltGraph", "AltGraph"], ["CapsLock", "CapsLock"], ["NumLock", "NumLock"], ["ScrollLock", "ScrollLock"], ["ArrowUp", "ArrowUp"], ["ArrowDown", "ArrowDown"], ["ArrowLeft", "ArrowLeft"], ["ArrowRight", "ArrowRight"], ["Home", "Home"], ["End", "End"], ["PageUp", "PageUp"], ["PageDown", "PageDown"], ["F1", "F1"], ["F2", "F2"], ["F3", "F3"], ["F4", "F4"], ["F5", "F5"], ["F6", "F6"], ["F7", "F7"], ["F8", "F8"], ["F9", "F9"], ["F10", "F10"], ["F11", "F11"], ["F12", "F12"], ["Insert", "Insert"], ["Delete", "Delete"], ["Clear", "Clear"], ["Escape", "Escape"], ["Pause", "Pause"], ["PrintScreen", "PrintScreen"], ["ContextMenu", "ContextMenu"]]), "KEY")
          .appendField("pressed with location")
          .appendField(new Blockly.FieldDropdown([["any","any"], ["standard","0"], ["left","1"], ["right","2"], ["numpad","3"]]), "LOCATION")
          .appendField("?");
      this.setOutput(true, "Boolean");
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['canvas_checkkeydown'] = function(block, generator) {
    var dropdown_key = block.getFieldValue('KEY');
    var dropdown_location = block.getFieldValue('LOCATION');
    var code = `checkIfKeyDown("${dropdown_key}", "${dropdown_location}")`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['canvas_lastkey'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("last key pressed");
      this.setOutput(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['canvas_lastkey'] = function(block, generator) {
    var code = 'lastKey';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['canvas_mousedowntime'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mouse down time");
      this.setOutput(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['canvas_mousedowntime'] = function(block, generator) {
    var code = 'mouseHoldDuration';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['advanced_jseval'] = {
    init: function() {
      this.appendValueInput("CODE")
          .setCheck(null)
          .appendField("evaluate");
      this.appendDummyInput()
          .appendField("in javascript");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['advanced_jseval'] = function(block, generator) {
    var value_code = generator.valueToCode(block, 'CODE', javascript.Order.ATOMIC);
    var code = `eval(${value_code});\n`;
    return code;
};

Blockly.Blocks['advanced_jsevalreturn'] = {
    init: function() {
      this.appendValueInput("CODE")
          .setCheck(null)
          .appendField("evaluate");
      this.appendDummyInput()
          .appendField("in javascript");
      this.setOutput(true, null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['advanced_jsevalreturn'] = function(block, generator) {
    var value_code = generator.valueToCode(block, 'CODE', javascript.Order.ATOMIC);
    var code = `eval(${value_code})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['math_tofixed'] = {
    init: function() {
      this.appendValueInput("VALUE")
          .setCheck("Number")
          .appendField("round");
      this.appendValueInput("DECIMAL_PLACES")
          .setCheck("Number")
          .appendField("to");
      this.appendDummyInput()
          .appendField("decimal places");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['math_tofixed'] = function(block, generator) {
    var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
    var value_decimal_places = generator.valueToCode(block, 'DECIMAL_PLACES', javascript.Order.ATOMIC);
    var code = `Number((${value_value}.toFixed(${value_decimal_places})))`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_setlocalstorage'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("String")
          .appendField("set");
      this.appendValueInput("VALUE")
          .setCheck(null)
          .appendField("to");
      this.appendDummyInput()
          .appendField("on local storage");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['web_setlocalstorage'] = function(block, generator) {
    var value_name = generator.valueToCode(block, 'NAME', javascript.Order.ATOMIC);
    var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
    var code = `localStorage.setItem(${value_name}, ${value_value});\n`;
    return code;
};

Blockly.Blocks['web_getlocalstorage'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("String")
          .appendField("get");
      this.appendDummyInput()
          .appendField("from local storage");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['web_getlocalstorage'] = function(block, generator) {
    var value_name = generator.valueToCode(block, 'NAME', javascript.Order.ATOMIC);
    var code = `localStorage.getItem(${value_name})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_removelocalstorage'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("String")
          .appendField("remove");
      this.appendDummyInput()
          .appendField("from local storage");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['web_removelocalstorage'] = function(block, generator) {
    var value_name = generator.valueToCode(block, 'NAME', javascript.Order.ATOMIC);
    var code = `localStorage.removeItem(${value_name});\n`;
    return code;
};

Blockly.Blocks['canvas_setcursor'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("set cursor to")
          .appendField(new Blockly.FieldDropdown([["auto", "auto"], ["default", "default"], ["none", "none"], ["context-menu", "context-menu"], ["help", "help"], ["pointer", "pointer"], ["progress", "progress"], ["wait", "wait"], ["cell", "cell"], ["crosshair", "crosshair"], ["text", "text"], ["vertical-text", "vertical-text"], ["alias", "alias"], ["copy", "copy"], ["move", "move"], ["no-drop", "no-drop"], ["not-allowed", "not-allowed"], ["all-scroll", "all-scroll"], ["col-resize", "col-resize"], ["row-resize", "row-resize"], ["n-resize", "n-resize"], ["e-resize", "e-resize"], ["s-resize", "s-resize"], ["w-resize", "w-resize"], ["ne-resize", "ne-resize"], ["nw-resize", "nw-resize"], ["se-resize", "se-resize"], ["sw-resize", "sw-resize"], ["ew-resize", "ew-resize"], ["ns-resize", "ns-resize"], ["nesw-resize", "nesw-resize"], ["nwse-resize", "nwse-resize"], ["zoom-in", "zoom-in"], ["zoom-out", "zoom-out"], ["grab", "grab"], ["grabbing", "grabbing"]]), "CURSOR");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['canvas_setcursor'] = function(block, generator) {
    var dropdown_cursor = block.getFieldValue('CURSOR');
    var code = `setCanvasCursor("${dropdown_cursor}");\n`;
    return code;
};

Blockly.Blocks['canvas_getcursor'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("get current cursor");
      this.setOutput(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['canvas_getcursor'] = function(block, generator) {
    var code = 'getCanvasCursor()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['canvas_setcursorurl'] = {
    init: function() {
      this.appendValueInput("URL")
          .setCheck("String")
          .appendField("set cursor to URL");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['canvas_setcursorurl'] = function(block, generator) {
    var value_url = generator.valueToCode(block, 'URL', javascript.Order.ATOMIC);
    var code = `setCanvasCursor(\`url(\$\{${value_url}\}), auto\`);\n`;
    return code;
};

Blockly.Blocks['types_convertbase'] = {
    init: function() {
      this.appendValueInput("INPUT")
          .setCheck("Number")
          .appendField("convert");
      this.appendValueInput("BASE")
          .setCheck("Number")
          .appendField("to base");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['types_convertbase'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var value_base = generator.valueToCode(block, 'BASE', javascript.Order.ATOMIC);
    var code = `(${value_input}).toString(${value_base})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['chroma_chroma'] = {
    init: function() {
      this.appendValueInput("COLOR")
          .setCheck(null)
          .appendField("color");
      this.setOutput(true, null);
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_chroma'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var code = `chroma(${value_color})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['chroma_valid'] = {
    init: function() {
      this.appendValueInput("COLOR")
          .setCheck(null)
          .appendField("is");
      this.appendDummyInput()
          .appendField("a valid color?");
      this.setOutput(true, "Boolean");
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_valid'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var code = `chroma.valid(${value_color})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['chroma_3valueinput'] = {
    init: function() {
      this.appendValueInput("ONE")
          .setCheck("Number")
          .appendField("color from");
      this.appendValueInput("TWO")
          .setCheck("Number");
      this.appendValueInput("THREE")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["hsl","hsl"], ["hsv","hsv"], ["lab","lab"], ["lch","lch"], ["hcl","hcl"], ["oklab","oklab"], ["oklch","oklch"], ["cmy","cmy"], ["rgb","rgb"], ["gl","gl"]]), "TYPE");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_3valueinput'] = function(block, generator) {
    var value_one = generator.valueToCode(block, 'ONE', javascript.Order.ATOMIC);
    var value_two = generator.valueToCode(block, 'TWO', javascript.Order.ATOMIC);
    var value_three = generator.valueToCode(block, 'THREE', javascript.Order.ATOMIC);
    var dropdown_type = block.getFieldValue('TYPE');
    if (dropdown_type != "cmy"){
        var code = `chroma(${value_one}, ${value_two}, ${value_three}, "${dropdown_type}")`;
    }
    else {
        var code = `chroma(${value_one}, ${value_two}, ${value_three}, 0, "cmyk")`;
    }
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['chroma_mix'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mix colors with")
          .appendField(new Blockly.FieldDropdown([["lrgb","lrgb"], ["rgb","rgb"], ["hsl","hsl"], ["hsv","hsv"], ["lab","lab"], ["lch","lch"], ["hcl","hcl"], ["oklab","oklab"], ["oklch","oklch"]]), "TYPE");
      this.appendValueInput("ONE")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color 1:");
      this.appendValueInput("TWO")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("color 2:");
      this.appendValueInput("RATIO")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("ratio:");
      this.setOutput(true, null);
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_mix'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var value_one = generator.valueToCode(block, 'ONE', javascript.Order.ATOMIC);
    var value_two = generator.valueToCode(block, 'TWO', javascript.Order.ATOMIC);
    var value_ratio = generator.valueToCode(block, 'RATIO', javascript.Order.ATOMIC);
    var code = `chroma.mix(${value_one}, ${value_two}, ${value_ratio}, "${dropdown_type}")`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['chroma_average'] = {
    init: function() {
      this.appendValueInput("AVERAGE")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldDropdown([["lrgb","lrgb"], ["rgb","rgb"], ["hsl","hsl"], ["hsv","hsv"], ["lab","lab"], ["lch","lch"], ["hcl","hcl"], ["oklab","oklab"], ["oklch","oklch"]]), "TYPE")
          .appendField("average of list");
      this.setOutput(true, null);
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_average'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var value_average = generator.valueToCode(block, 'AVERAGE', javascript.Order.ATOMIC);
    var code = `chroma.average(${value_average}, "${dropdown_type}")`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['chroma_weightedaverage'] = {
    init: function() {
      this.appendValueInput("AVERAGE")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldDropdown([["lrgb","lrgb"], ["rgb","rgb"], ["hsl","hsl"], ["hsv","hsv"], ["lab","lab"], ["lch","lch"], ["hcl","hcl"]]), "TYPE")
          .appendField("average of list");
      this.appendValueInput("WEIGHT")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("with weight");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_weightedaverage'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var value_average = generator.valueToCode(block, 'AVERAGE', javascript.Order.ATOMIC);
    var value_weight = generator.valueToCode(block, 'WEIGHT', javascript.Order.ATOMIC);
    var code = `chroma.average(${value_average}, "${dropdown_type}", ${value_weight})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['chroma_random'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("random color");
      this.setOutput(true, null);
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_random'] = function(block, generator) {
    var code = 'chroma.random()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['chroma_color'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
      this.setOutput(true, null);
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_color'] = function(block, generator) {
    var colour_color = block.getFieldValue('COLOR');
    var code = `chroma("${colour_color}")`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_print'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("print this page");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_print'] = function(block, generator) {
    var code = 'print()\n';
    return code;
};

Blockly.Blocks['types_tobigint'] = {
    init: function() {
      this.appendValueInput("INPUT")
          .setCheck(null)
          .appendField("convert");
      this.appendDummyInput()
          .appendField("to bigint");
      this.setOutput(true, null);
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['types_tobigint'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var code = `BigInt(${value_input})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
/*
Blockly.Blocks['chroma_scale'] = {
    init: function() {
      this.appendValueInput("COLORS")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("make scale of list");
      this.appendValueInput("DOMAIN_MIN")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("with mode")
          .appendField(new Blockly.FieldDropdown([["lrgb","lrgb"], ["rgb","rgb"], ["hsl","hsl"], ["hsv","hsv"], ["lab","lab"], ["lch","lch"], ["hcl","hcl"], ["oklab","oklab"], ["oklch","oklch"]]), "TYPE")
          .appendField("and domain from");
      this.appendValueInput("DOMAIN_MAX")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("to");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_scale'] = function(block, generator) {
    var value_colors = generator.valueToCode(block, 'COLORS', javascript.Order.ATOMIC);
    var dropdown_type = block.getFieldValue('TYPE');
    var value_domain_min = generator.valueToCode(block, 'DOMAIN_MIN', javascript.Order.ATOMIC);
    var value_domain_max = generator.valueToCode(block, 'DOMAIN_MAX', javascript.Order.ATOMIC);
    var code = `chroma.scale(${value_colors}).mode("${dropdown_type}").domain([${value_domain_min}, ${value_domain_max}])`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
*/
Blockly.Blocks['chroma_getfromscale'] = {
    init: function() {
      this.appendValueInput("INPUT")
          .setCheck("Number")
          .appendField("get");
      this.appendValueInput("SCALE")
          .setCheck(null)
          .appendField("from scale");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_getfromscale'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var value_scale = generator.valueToCode(block, 'SCALE', javascript.Order.ATOMIC);
    var code = `${value_scale}(${value_input})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
/*
Blockly.Blocks['chroma_scaledomainlist'] = {
    init: function() {
      this.appendValueInput("COLORS")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("make scale of list");
      this.appendValueInput("DOMAIN")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("with mode")
          .appendField(new Blockly.FieldDropdown([["lrgb","lrgb"], ["rgb","rgb"], ["hsl","hsl"], ["hsv","hsv"], ["lab","lab"], ["lch","lch"], ["hcl","hcl"], ["oklab","oklab"], ["oklch","oklch"]]), "TYPE")
          .appendField("and domain list");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_scaledomainlist'] = function(block, generator) {
    var value_colors = generator.valueToCode(block, 'COLORS', javascript.Order.ATOMIC);
    var dropdown_type = block.getFieldValue('TYPE');
    var value_domain = generator.valueToCode(block, 'DOMAIN', javascript.Order.ATOMIC);
    var code = `chroma.scale(${value_colors}).mode("${dropdown_type}").domain(${value_domain})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
*/
Blockly.Blocks['chroma_scale'] = {
    init: function() {
      this.appendValueInput("COLORS")
          .setCheck("Array")
          .appendField("make scale of list");
      this.appendDummyInput()
          .appendField("with mode")
          .appendField(new Blockly.FieldDropdown([["lrgb","lrgb"], ["rgb","rgb"], ["hsl","hsl"], ["hsv","hsv"], ["lab","lab"], ["lch","lch"], ["hcl","hcl"], ["oklab","oklab"], ["oklch","oklch"]]), "TYPE");
      this.setOutput(true, null);
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_scale'] = function(block, generator) {
    var value_colors = generator.valueToCode(block, 'COLORS', javascript.Order.ATOMIC);
    var dropdown_type = block.getFieldValue('TYPE');
    var code = `chroma.scale(${value_colors}).mode("${dropdown_type}")`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['chroma_scalemodify'] = {
    init: function() {
      this.appendValueInput("SCALE")
          .setCheck(null)
          .appendField("set")
          .appendField(new Blockly.FieldDropdown([["domain","domain"], ["gamma","gamma"], ["padding","padding"], ["classes","classes"]]), "NAME")
          .appendField("of scale");
      this.appendValueInput("INPUT")
          .setCheck(null)
          .appendField("to");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_scalemodify'] = function(block, generator) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_scale = generator.valueToCode(block, 'SCALE', javascript.Order.ATOMIC);
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var code = `${value_scale}.${dropdown_name}(${value_input})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['chroma_getlistfromscale'] = {
    init: function() {
      this.appendValueInput("INPUT")
          .setCheck("Number")
          .appendField("get list with");
      this.appendValueInput("SCALE")
          .setCheck(null)
          .appendField("colors from scale");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_getlistfromscale'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var value_scale = generator.valueToCode(block, 'SCALE', javascript.Order.ATOMIC);
    var code = `${value_scale}.colors(${value_input})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['chroma_convert'] = {
    init: function() {
      this.appendValueInput("COLOR")
          .setCheck(null)
          .appendField("convert color");
      this.appendDummyInput()
          .appendField("to")
          .appendField(new Blockly.FieldDropdown([["hex","hex"], ["name","name"], ["rgb","rgb"], ["rgba","rgba"], ["hsl","hsl"], ["hsv","hsv"], ["hsi","hsi"], ["lab","lab"], ["lch","lch"], ["hcl","hcl"], ["oklab","oklab"], ["oklch","oklch"], ["num","num"], ["gl","gl"]]), "TYPE");
      this.setOutput(true, null);
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_convert'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var dropdown_type = block.getFieldValue('TYPE');
    var code = `chroma(${value_color}).${dropdown_type}()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['chroma_contrast'] = {
    init: function() {
      this.appendValueInput("ONE")
          .setCheck(null)
          .appendField("contrast between");
      this.appendValueInput("TWO")
          .setCheck(null)
          .appendField("and");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_contrast'] = function(block, generator) {
    var value_one = generator.valueToCode(block, 'ONE', javascript.Order.ATOMIC);
    var value_two = generator.valueToCode(block, 'TWO', javascript.Order.ATOMIC);
    var code = `chroma.contrast(${value_one}, ${value_two})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['chroma_distance'] = {
    init: function() {
      this.appendValueInput("ONE")
          .setCheck(null)
          .appendField("distance between");
      this.appendValueInput("TWO")
          .setCheck(null)
          .appendField("and");
      this.appendDummyInput()
          .appendField("in")
          .appendField(new Blockly.FieldDropdown([["hsl","hsl"], ["hsv","hsv"], ["lab","lab"], ["lch","lch"], ["hcl","hcl"], ["oklab","oklab"], ["oklch","oklch"], ["cmyk","cmyk"], ["rgb","rgb"], ["gl","gl"]]), "TYPE");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_distance'] = function(block, generator) {
    var value_one = generator.valueToCode(block, 'ONE', javascript.Order.ATOMIC);
    var value_two = generator.valueToCode(block, 'TWO', javascript.Order.ATOMIC);
    var dropdown_type = block.getFieldValue('TYPE');
    var code = `chroma.distance(${value_one}, ${value_two}, "${dropdown_type}")`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['chroma_invertcolor'] = {
    init: function() {
      this.appendValueInput("COLOR")
          .setCheck(null)
          .appendField("invert color");
      this.setOutput(true, null);
      this.setColour("#9e4d45");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['chroma_invertcolor'] = function(block, generator) {
    var value_color = generator.valueToCode(block, 'COLOR', javascript.Order.ATOMIC);
    var code = `chroma("#" + (Number("0x1"+(${value_color}).toUpperCase().substring(1)) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase())`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['canvas_resize'] = {
    init: function() {
      this.appendValueInput("WIDTH")
          .setCheck("Number")
          .appendField("set canvas size to width:");
      this.appendValueInput("HEIGHT")
          .setCheck("Number")
          .appendField("height:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['canvas_resize'] = function(block, generator) {
    var value_width = generator.valueToCode(block, 'WIDTH', javascript.Order.ATOMIC);
    var value_height = generator.valueToCode(block, 'HEIGHT', javascript.Order.ATOMIC);
    var code = `canvas.width = ${value_width}; canvas.height = ${value_height};\n`;
    return code;
};

Blockly.Blocks['canvas_width'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("canvas width");
      this.setOutput(true, "Number");
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_width'] = function(block, generator) {
    var code = 'canvas.width';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['canvas_height'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("canvas height");
      this.setOutput(true, "Number");
      this.setColour(190);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_height'] = function(block, generator) {
    var code = 'canvas.height';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['math_createparser'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("create parser")
          .appendField(new Blockly.FieldTextInput("parser"), "PARSER");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['math_createparser'] = function(block, generator) {
    var text_parser = block.getFieldValue('PARSER');
    var code = `const ${text_parser} = math.parser();\n`;
    return code;
};

Blockly.Blocks['math_parsereval'] = {
    init: function() {
      this.appendValueInput("MATH")
          .setCheck(null)
          .appendField("evaluate");
      this.appendDummyInput()
          .appendField("with")
          .appendField(new Blockly.FieldTextInput("parser"), "PARSER");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['math_parsereval'] = function(block, generator) {
    var value_math = generator.valueToCode(block, 'MATH', javascript.Order.ATOMIC);
    var text_parser = block.getFieldValue('PARSER');
    var code = `${text_parser}.evaluate(${value_math});\n`;
    return code;
};

Blockly.Blocks['math_roundparsereval'] = {
    init: function() {
      this.appendValueInput("MATH")
          .setCheck(null)
          .appendField("evaluate");
      this.appendDummyInput()
          .appendField("with")
          .appendField(new Blockly.FieldTextInput("parser"), "PARSER");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['math_roundparsereval'] = function(block, generator) {
    var value_math = generator.valueToCode(block, 'MATH', javascript.Order.ATOMIC);
    var text_parser = block.getFieldValue('PARSER');
    var code = `${text_parser}.evaluate(${value_math})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['math_clearparser'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("clear parser")
          .appendField(new Blockly.FieldTextInput("parser"), "PARSER");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
  javascript.javascriptGenerator.forBlock['math_clearparser'] = function(block, generator) {
    var text_parser = block.getFieldValue('PARSER');
    var code = `${text_parser}.clear();\n`;
    return code;
};

Blockly.Blocks['canvas_drawcurve'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw quadratic curve with");
      this.appendValueInput("CPX")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("control x:");
      this.appendValueInput("CPY")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("control y:");
      this.appendValueInput("X")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("end x:");
      this.appendValueInput("Y")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("end y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_drawcurve'] = function(block, generator) {
    var value_cpx = generator.valueToCode(block, 'CPX', javascript.Order.ATOMIC);
    var value_cpy = generator.valueToCode(block, 'CPY', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `context.quadraticCurveTo(${value_cpx}, ${value_cpy}, ${value_x}, ${value_y});\n`;
    return code;
};

Blockly.Blocks['controller_connected'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("is controller")
          .appendField(new Blockly.FieldDropdown([["A","0"], ["B","1"], ["C","2"], ["D","3"]]), "INDEX")
          .appendField("connected?");
      this.setOutput(true, "Boolean");
      this.setColour("#1f618d");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['controller_connected'] = function(block, generator) {
    var dropdown_index = block.getFieldValue('INDEX');
    var code = `(Controller.getController(${dropdown_index}) != undefined)`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['controller_name'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("name of controller")
          .appendField(new Blockly.FieldDropdown([["A","0"], ["B","1"], ["C","2"], ["D","3"]]), "INDEX");
      this.setOutput(true, null);
      this.setColour("#1f618d");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['controller_name'] = function(block, generator) {
    var dropdown_index = block.getFieldValue('INDEX');
    var code = `Controller.getController(${dropdown_index}).name`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['controller_button'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("button")
          .appendField(new Blockly.FieldDropdown([["face 1","FACE_1"], ["face 2","FACE_2"], ["face 3","FACE_3"], ["face 4","FACE_4"], ["left shoulder","LEFT_SHOULDER"], ["right shoulder","RIGHT_SHOULDER"], ["left shoulder bottom","LEFT_SHOULDER_BOTTOM"], ["right shoulder bottom","RIGHT_SHOULDER_BOTTOM"], ["select","SELECT"], ["start","START"], ["left analog button","LEFT_ANALOG_BUTTON"], ["right analog button","RIGHT_ANALOG_BUTTON"], ["dpad up","DPAD_UP"], ["dpad down","DPAD_DOWN"], ["dpad left","DPAD_LEFT"], ["dpad right","DPAD_RIGHT"], ["home","HOME"]]), "TYPE")
          .appendField("pressed on controller")
          .appendField(new Blockly.FieldDropdown([["A","0"], ["B","1"], ["C","2"], ["D","3"]]), "INDEX")
          .appendField("?");
      this.setOutput(true, "Boolean");
      this.setColour("#1f618d");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['controller_button'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var dropdown_index = block.getFieldValue('INDEX');
    var code = `(currentControllerButtons[${dropdown_index}] == '${dropdown_type}')`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['controller_analog'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["x","x"], ["y","y"]]), "POSITION")
          .appendField("position of")
          .appendField(new Blockly.FieldDropdown([["left","Left"], ["right","Right"]]), "TYPE")
          .appendField("analog stick on controller")
          .appendField(new Blockly.FieldDropdown([["A","0"], ["B","1"], ["C","2"], ["D","3"]]), "INDEX");
      this.setOutput(true, null);
      this.setColour("#1f618d");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['controller_analog'] = function(block, generator) {
    var dropdown_position = block.getFieldValue('POSITION');
    var dropdown_type = block.getFieldValue('TYPE');
    var dropdown_index = block.getFieldValue('INDEX');
    var code = `currentController${dropdown_type}AnalogSticks[${dropdown_index}].${dropdown_position}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['controller_trigger'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("force value of ")
          .appendField(new Blockly.FieldDropdown([["left","Left"], ["right","Right"]]), "TYPE")
          .appendField("trigger on controller")
          .appendField(new Blockly.FieldDropdown([["A","0"], ["B","1"], ["C","2"], ["D","3"]]), "INDEX");
      this.setOutput(true, null);
      this.setColour("#1f618d");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['controller_trigger'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var dropdown_index = block.getFieldValue('INDEX');
    var code = `currentController${dropdown_type}Triggers[${dropdown_index}]`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['controller_vibrate'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("vibrate controller")
          .appendField(new Blockly.FieldDropdown([["A","0"], ["B","1"], ["C","2"], ["D","3"]]), "INDEX")
          .appendField("with");
      this.appendValueInput("DURATION")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("duration:");
      this.appendValueInput("WEAK")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("weak magnitude:");
      this.appendValueInput("STRONG")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("strong magnitude:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1f618d");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['controller_vibrate'] = function(block, generator) {
    var dropdown_index = block.getFieldValue('INDEX');
    var value_duration = generator.valueToCode(block, 'DURATION', javascript.Order.ATOMIC);
    var value_weak = generator.valueToCode(block, 'WEAK', javascript.Order.ATOMIC);
    var value_strong = generator.valueToCode(block, 'STRONG', javascript.Order.ATOMIC);
    var code = `navigator.getGamepads()[${dropdown_index}].vibrationActuator.playEffect("dual-rumble", {startDelay: 0, duration: ${value_duration}, weakMagnitude: ${value_weak}, strongMagnitude: ${value_strong}});\n`;
    return code;
};

Blockly.Blocks['controller_watch'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("enable controller")
          .appendField(new Blockly.FieldDropdown([["A","0"], ["B","1"], ["C","2"], ["D","3"]]), "INDEX");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1f618d");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['controller_watch'] = function(block, generator) {
    var dropdown_index = block.getFieldValue('INDEX');
    var code = `Controller.getController(${dropdown_index}).watch();\n`;
    return code;
};

Blockly.Blocks['controller_unwatch'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("disable controller")
          .appendField(new Blockly.FieldDropdown([["A","0"], ["B","1"], ["C","2"], ["D","3"]]), "INDEX");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#1f618d");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['controller_unwatch'] = function(block, generator) {
    var dropdown_index = block.getFieldValue('INDEX');
    var code = `Controller.getController(${dropdown_index}).unwatch();\n`;
    return code;
};

Blockly.Blocks['math_bitwise'] = {
    init: function() {
      this.appendValueInput("ONE")
          .setCheck("Number");
      this.appendValueInput("TWO")
          .setCheck("Number")
          .appendField(new Blockly.FieldDropdown([["&","&"], ["|","|"], ["^","^"], ["<<","<<"], [">>",">>"], [">>>",">>>"]]), "OPERATION");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['math_bitwise'] = function(block, generator) {
    var value_one = generator.valueToCode(block, 'ONE', javascript.Order.ATOMIC);
    var dropdown_operation = block.getFieldValue('OPERATION');
    var value_two = generator.valueToCode(block, 'TWO', javascript.Order.ATOMIC);
    var code = `${value_one} ${dropdown_operation} ${value_two}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_getfromtimestamp'] = {
    init: function() {
      this.appendValueInput("TIMESTAMP")
          .setCheck(null)
          .appendField("get")
          .appendField(new Blockly.FieldDropdown([["milliseconds","getMilliseconds"], ["seconds","getSeconds"], ["minutes","getMinutes"], ["hours","getHours"], ["day","getDay"], ["date","getDate"], ["month","getMonth"], ["year","getFullYear"], ["unix time","getTime"], ["timezone offset","getTimezoneOffset"], ["string","toString"], ["locale string","toLocaleString"], ["date string","toDateString"], ["time string","toTimeString"], ["locale date string","toLocaleDateString"], ["locale time string","toLocaleTimeString"]]), "DATA")
          .appendField("from timestamp");
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_getfromtimestamp'] = function(block, generator) {
    var dropdown_data = block.getFieldValue('DATA');
    var value_timestamp = generator.valueToCode(block, 'TIMESTAMP', javascript.Order.ATOMIC);
    var code = `${value_timestamp}.${dropdown_data}()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['web_modifytimestamp'] = {
    init: function() {
      this.appendValueInput("VALUE")
          .setCheck("Number")
          .appendField("set")
          .appendField(new Blockly.FieldDropdown([["milliseconds","setMilliseconds"], ["seconds","setSeconds"], ["minutes","setMinutes"], ["hours","setHours"], ["day","setDay"], ["date","setDate"], ["month","setMonth"], ["year","setFullYear"], ["unix time","setTime"]]), "DATA")
          .appendField("to");
      this.appendValueInput("TIMESTAMP")
          .setCheck(null)
          .appendField("in timestamp");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_modifytimestamp'] = function(block, generator) {
    var dropdown_data = block.getFieldValue('DATA');
    var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
    var value_timestamp = generator.valueToCode(block, 'TIMESTAMP', javascript.Order.ATOMIC);
    var code = `${value_timestamp}.${dropdown_data}(${value_value})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['types_instanceof'] = {
    init: function() {
      this.appendValueInput("INPUT")
          .setCheck(null)
          .appendField("is");
      this.appendDummyInput()
          .appendField("an instance of")
          .appendField(new Blockly.FieldTextInput(""), "TYPE")
          .appendField("?");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['types_instanceof'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var text_type = block.getFieldValue('TYPE');
    var code = value_input + ' instanceof ' + text_type;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['dates_date'] = {
    init: function() {
      this.appendValueInput("INPUT")
          .setCheck("String")
          .appendField("date");
      this.appendValueInput("FORMAT")
          .setCheck("String")
          .appendField("with format");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#d17896");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['dates_date'] = function(block, generator) {
    var value_input = generator.valueToCode(block, 'INPUT', javascript.Order.ATOMIC);
    var value_format = generator.valueToCode(block, 'FORMAT', javascript.Order.ATOMIC);
    var code = `dayjs(${value_input}, ${value_format})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['dates_currentdate'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("current date");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#d17896");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['dates_currentdate'] = function(block, generator) {
    var code = 'dayjs()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['dates_valid'] = {
    init: function() {
      this.appendValueInput("DATE")
          .setCheck(null)
          .appendField("is");
      this.appendDummyInput()
          .appendField("a valid date?");
      this.setOutput(true, "Boolean");
      this.setColour("#d17896");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['dates_valid'] = function(block, generator) {
    var value_date = generator.valueToCode(block, 'DATE', javascript.Order.ATOMIC);
    var code = `${value_date}.isValid()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['dates_get'] = {
    init: function() {
      this.appendValueInput("DATE")
          .setCheck(null)
          .appendField("get")
          .appendField(new Blockly.FieldDropdown([["millisecond","millisecond"], ["second","second"], ["minute","minute"], ["hour","hour"], ["day","day"], ["date","date"], ["month","month"], ["year","year"]]), "UNIT")
          .appendField("from date");
      this.setOutput(true, null);
      this.setColour("#d17896");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['dates_get'] = function(block, generator) {
    var dropdown_unit = block.getFieldValue('UNIT');
    var value_date = generator.valueToCode(block, 'DATE', javascript.Order.ATOMIC);
    var code = `${value_date}.get('${dropdown_unit}')`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['dates_set'] = {
    init: function() {
      this.appendValueInput("DATE")
          .setCheck(null)
          .appendField("set")
          .appendField(new Blockly.FieldDropdown([["millisecond","millisecond"], ["second","second"], ["minute","minute"], ["hour","hour"], ["day","day"], ["date","date"], ["month","month"], ["year","year"]]), "UNIT")
          .appendField("in date");
      this.appendValueInput("VALUE")
          .setCheck("Number")
          .appendField("to");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#d17896");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['dates_set'] = function(block, generator) {
    var dropdown_unit = block.getFieldValue('UNIT');
    var value_date = generator.valueToCode(block, 'DATE', javascript.Order.ATOMIC);
    var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
    var code = `${value_date}.set('${dropdown_unit}', ${value_value})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['dates_add'] = {
    init: function() {
      this.appendValueInput("VALUE")
          .setCheck("Number")
          .appendField("add");
      this.appendValueInput("DATE")
          .setCheck(null)
          .appendField(new Blockly.FieldDropdown([["millisecond","millisecond"], ["second","second"], ["minute","minute"], ["hour","hour"], ["day","day"], ["date","date"], ["month","month"], ["year","year"]]), "UNIT")
          .appendField("to date");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#d17896");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['dates_add'] = function(block, generator) {
    var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
    var dropdown_unit = block.getFieldValue('UNIT');
    var value_date = generator.valueToCode(block, 'DATE', javascript.Order.ATOMIC);
    var code = `${value_date}.add(${value_value}, '${dropdown_unit}')`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['dates_subtract'] = {
    init: function() {
      this.appendValueInput("VALUE")
          .setCheck("Number")
          .appendField("subtract");
      this.appendValueInput("DATE")
          .setCheck(null)
          .appendField(new Blockly.FieldDropdown([["millisecond","millisecond"], ["second","second"], ["minute","minute"], ["hour","hour"], ["day","day"], ["date","date"], ["month","month"], ["year","year"]]), "UNIT")
          .appendField("from date");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#d17896");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['dates_subtract'] = function(block, generator) {
    var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
    var dropdown_unit = block.getFieldValue('UNIT');
    var value_date = generator.valueToCode(block, 'DATE', javascript.Order.ATOMIC);
    var code = `${value_date}.subtract(${value_value}, '${dropdown_unit}')`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['dates_format'] = {
    init: function() {
      this.appendValueInput("DATE")
          .setCheck(null)
          .appendField("display date");
      this.appendValueInput("FORMAT")
          .setCheck("String")
          .appendField("with format");
      this.setInputsInline(true);
      this.setOutput(true, "String");
      this.setColour("#d17896");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['dates_format'] = function(block, generator) {
    var value_date = generator.valueToCode(block, 'DATE', javascript.Order.ATOMIC);
    var value_format = generator.valueToCode(block, 'FORMAT', javascript.Order.ATOMIC);
    var code = `${value_date}.format(${value_format})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['dates_fromnow'] = {
    init: function() {
      this.appendValueInput("DATE")
          .setCheck(null)
          .appendField("display date");
      this.appendDummyInput()
          .appendField("from/to now");
      this.setInputsInline(true);
      this.setOutput(true, "String");
      this.setColour("#d17896");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['dates_fromnow'] = function(block, generator) {
    var value_date = generator.valueToCode(block, 'DATE', javascript.Order.ATOMIC);
    var code = `${value_date}.fromNow()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['dates_beforeafter'] = {
    init: function() {
      this.appendValueInput("DATE1")
          .setCheck(null)
          .appendField("is date");
      this.appendValueInput("DATE2")
          .setCheck(null)
          .appendField(new Blockly.FieldDropdown([["before","isBefore"], ["after","isAfter"], ["same as","isSame"], ["same or before","isSameOrBefore"], ["same or after","isSameOrAfter"]]), "NAME")
          .appendField("date");
      this.appendDummyInput()
          .appendField("?");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour("#d17896");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['dates_beforeafter'] = function(block, generator) {
    var value_date1 = generator.valueToCode(block, 'DATE1', javascript.Order.ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    var value_date2 = generator.valueToCode(block, 'DATE2', javascript.Order.ATOMIC);
    var code = `${value_date1}.${dropdown_name}(${value_date2})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['dates_between'] = {
    init: function() {
      this.appendValueInput("DATE1")
          .setCheck(null)
          .appendField("is date");
      this.appendValueInput("DATE2")
          .setCheck(null)
          .appendField("between date");
      this.appendValueInput("DATE3")
          .setCheck(null)
          .appendField("and date");
      this.appendDummyInput()
          .appendField("?");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour("#d17896");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['dates_between'] = function(block, generator) {
    var value_date1 = generator.valueToCode(block, 'DATE1', javascript.Order.ATOMIC);
    var value_date2 = generator.valueToCode(block, 'DATE2', javascript.Order.ATOMIC);
    var value_date3 = generator.valueToCode(block, 'DATE3', javascript.Order.ATOMIC);
    var code = `${value_date1}.isBetween(${value_date2}, ${value_date3})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['console_debugger'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("data:image/png;base64,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", 30, 30, { alt: "", flipRtl: "FALSE" }))
          .appendField("is debugger on?");
      this.setOutput(true, "Boolean");
      this.setColour("#72503e");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['console_debugger'] = function(block, generator) {
    var code = 'debugger_on';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['advanced_pressbutton'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("press the")
          .appendField(new Blockly.FieldDropdown([["start","0"], ["stop","1"], ["debugger","2"], ["display","3"]]), "NAME")
          .appendField("button");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['advanced_pressbutton'] = function(block, generator) {
    var dropdown_name = block.getFieldValue('NAME');
    var code = `document.getElementsByClassName('controlButton')[${dropdown_name}].click();\n`;
    return code;
};

Blockly.Blocks['web_freeze'] = {
    init: function() {
      this.appendValueInput("DELAY")
          .setCheck("Number")
          .appendField("freeze page for");
      this.appendDummyInput()
          .appendField("milliseconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#2E7D32");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['web_freeze'] = function(block, generator) {
    var value_delay = generator.valueToCode(block, 'DELAY', javascript.Order.ATOMIC);
    var code = `freezePageWithDelay(${value_delay});\n`;
    return code;
};

Blockly.Blocks['canvas_createinput'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("create")
          .appendField(new Blockly.FieldDropdown([["text","text"], ["password","password"], ["email","email"], ["telephone","tel"], ["search","search"], ["URL","url"], ["number","number"], ["date","date"], ["time","time"], ["date time","datetime-local"], ["month","month"], ["week","week"], ["checkbox","checkbox"], ["radio button","radio"], ["range slider","range"], ["file","file"], ["color","color"], ["hidden","hidden"], ["submit","submit"], ["reset","reset"], ["button","button"]]), "TYPE")
          .appendField("input with");
      this.appendValueInput("ID")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("id:");
      this.appendValueInput("STYLE")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("style:");
      this.appendValueInput("X")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("x:");
      this.appendValueInput("Y")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#98795e");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_createinput'] = function(block, generator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var value_id = generator.valueToCode(block, 'ID', javascript.Order.ATOMIC);
    var value_style = generator.valueToCode(block, 'STYLE', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `createCanvasInput('${dropdown_type}', ${value_id}, ${value_style}, ${value_x}, ${value_y});\n`;
    return code;
};

Blockly.Blocks['canvas_removeallinputs'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("remove all inputs/labels");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#98795e");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_removeallinputs'] = function(block, generator) {
    var code = '$(".basic-canvas-input").remove();\n';
    return code;
};

Blockly.Blocks['canvas_removeinput'] = {
    init: function() {
      this.appendValueInput("ID")
          .setCheck("String")
          .appendField("remove input/label");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#98795e");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_removeinput'] = function(block, generator) {
    var value_id = generator.valueToCode(block, 'ID', javascript.Order.ATOMIC);
    var code = `$('#' + ${value_id}).remove();\n`;
    return code;
};

Blockly.Blocks['canvas_moveinput'] = {
    init: function() {
      this.appendValueInput("ID")
          .setCheck("String")
          .appendField("move input/label");
      this.appendValueInput("X")
          .setCheck("Number")
          .appendField("to x:");
      this.appendValueInput("Y")
          .setCheck("Number")
          .appendField("y:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#98795e");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_moveinput'] = function(block, generator) {
    var value_id = generator.valueToCode(block, 'ID', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `moveCanvasInput(${value_id}, ${value_x}, ${value_y});\n`;
    return code;
};

Blockly.Blocks['canvas_changeinputproperty'] = {
    init: function() {
      this.appendValueInput("ID")
          .setCheck("String")
          .appendField("change")
          .appendField(new Blockly.FieldDropdown([["value","value"], ["checked","checked"], ["min","min"], ["max","max"], ["max length","maxlength"], ["step","step"], ["pattern","pattern"], ["disabled","disabled"], ["required","required"], ["size","size"], ["read-only","readonly"]]), "NAME")
          .appendField("of input");
      this.appendValueInput("VALUE")
          .setCheck(null)
          .appendField("to");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#98795e");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_changeinputproperty'] = function(block, generator) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_id = generator.valueToCode(block, 'ID', javascript.Order.ATOMIC);
    var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
    var code = `document.getElementById(${value_id}).${dropdown_name} = ${value_value};\n`;
    return code;
};

Blockly.Blocks['canvas_createlabel'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("create label with");
      this.appendValueInput("ID")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("id:");
      this.appendValueInput("STYLE")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("style:");
      this.appendValueInput("TEXT")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("text:");
      this.appendValueInput("X")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("x:");
      this.appendValueInput("Y")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("y:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#98795e");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_createlabel'] = function(block, generator) {
    var value_id = generator.valueToCode(block, 'ID', javascript.Order.ATOMIC);
    var value_style = generator.valueToCode(block, 'STYLE', javascript.Order.ATOMIC);
    var value_text = generator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC);
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    var code = `createCanvasLabel(${value_id}, ${value_style}, ${value_text}, ${value_x}, ${value_y});\n`;
    return code;
};

Blockly.Blocks['canvas_changelabeltext'] = {
    init: function() {
      this.appendValueInput("ID")
          .setCheck("String")
          .appendField("change text of label");
      this.appendValueInput("VALUE")
          .setCheck("String")
          .appendField("to");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#98795e");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_changelabeltext'] = function(block, generator) {
    var value_id = generator.valueToCode(block, 'ID', javascript.Order.ATOMIC);
    var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
    var code = `document.getElementById(${value_id}).innerHTML = ${value_value};\n`;
    return code;
};

Blockly.Blocks['canvas_getinputproperty'] = {
    init: function() {
      this.appendValueInput("ID")
          .setCheck("String")
          .appendField("get")
          .appendField(new Blockly.FieldDropdown([["value","value"], ["checked","checked"], ["min","min"], ["max","max"], ["max length","maxlength"], ["step","step"], ["pattern","pattern"], ["disabled","disabled"], ["required","required"], ["size","size"], ["read-only","readonly"]]), "NAME")
          .appendField("of input");
      this.setOutput(true, null);
      this.setColour("#98795e");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_getinputproperty'] = function(block, generator) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_id = generator.valueToCode(block, 'ID', javascript.Order.ATOMIC);
    var code = `document.getElementById(${value_id}).${dropdown_name}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['canvas_getlabeltext'] = {
    init: function() {
      this.appendValueInput("ID")
          .setCheck("String")
          .appendField("get text of label");
      this.setOutput(true, null);
      this.setColour("#98795e");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_getlabeltext'] = function(block, generator) {
    var value_id = generator.valueToCode(block, 'ID', javascript.Order.ATOMIC);
    var code = `document.getElementById(${value_id}).innerHTML`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['canvas_addinputeventlistener'] = {
    init: function() {
      this.appendValueInput("ID")
          .setCheck("String")
          .appendField("add event listener")
          .appendField(new Blockly.FieldDropdown([["keydown", "keydown"], ["keyup", "keyup"], ["keypress", "keypress"], ["click", "click"], ["dblclick", "dblclick"], ["mousedown", "mousedown"], ["mouseup", "mouseup"], ["mouseover", "mouseover"], ["mouseout", "mouseout"], ["mousemove", "mousemove"], ["focus", "focus"], ["blur", "blur"], ["focusin", "focusin"], ["focusout", "focusout"], ["change", "change"], ["input", "input"], ["submit", "submit"], ["reset", "reset"], ["copy", "copy"], ["cut", "cut"], ["paste", "paste"], ["drag", "drag"], ["dragstart", "dragstart"], ["dragend", "dragend"], ["dragenter", "dragenter"], ["dragover", "dragover"], ["dragleave", "dragleave"], ["drop", "drop"], ["contextmenu", "contextmenu"], ["wheel", "wheel"], ["select", "select"]]), "NAME")
          .appendField("for input/label");
      this.appendStatementInput("CODE")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#98795e");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['canvas_addinputeventlistener'] = function(block, generator) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_id = generator.valueToCode(block, 'ID', javascript.Order.ATOMIC);
    var statements_code = generator.statementToCode(block, 'CODE');
    var code = `document.getElementById(${value_id}).addEventListener('${dropdown_name}', function(){${statements_code}});\n`;
    return code;
};

Blockly.Blocks['advanced_resettimer'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("reset timer");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['advanced_resettimer'] = function(block, generator) {
    var code = `timer_start_time = dayjs().valueOf();\n`;
    return code;
};

Blockly.Blocks['advanced_gettimer'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("get timer");
      this.setOutput(true, null);
      this.setColour("#555555");
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['advanced_gettimer'] = function(block, generator) {
    var code = `dayjs().valueOf() - timer_start_time`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};