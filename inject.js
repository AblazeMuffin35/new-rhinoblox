//Inject Blockly
const theme = Blockly.Theme.defineTheme('myTheme', {
    'base': Blockly.Themes.Classic,
    'componentStyles': {
      'workspaceBackgroundColour': '#1c1a26',
      'toolboxBackgroundColour': '#2c2a36',
      'toolboxForegroundColour': '#fff',
      'flyoutBackgroundColour': '#23212b',
      'flyoutForegroundColour': '#ccc',
      'flyoutOpacity': 1,
      'scrollbarColour': '#797979',
      'insertionMarkerColour': '#fff',
      'insertionMarkerOpacity': 0.3,
      'scrollbarOpacity': 0.4,
      'cursorColour': '#d0d0d0',
      'blackBackground': '#333',
    }
 });

var options = {
    plugins: {
        'blockDragger': MultiselectBlockDragger // Required to work
    },
    useDoubleClick: false,
    bumpNeighbours: false,
    multiFieldUpdate: true,
    multiselectIcon: {
      hideIcon: false,
      weight: 3,
      enabledIcon: 'resources/multiselect on.svg',
      disabledIcon: 'resources/multiselect off.svg',
    },
    multiselectCopyPaste: {
      crossTab: true,
      menu: true,
    },
    zoom:
        {controls: true,
            wheel: true,
            startScale: 0.8,
            maxScale: 1.5,
            minScale: 0.5,
            scaleSpeed: 1.1,
            pinch: true},
    grid:
        {spacing: 30,
            length: 2,
            colour: '#5c5c5c',
            snap: true},
    toolbox: document.getElementById('toolbox'),
    renderer: 'zelos',
    theme: theme
}

var workspace = Blockly.inject('blocklyDiv', options);
const multiselectPlugin = new Multiselect(workspace);
multiselectPlugin.init(options);

//Inject Monaco Editor
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs' }});
require(["vs/editor/editor.main"], () => {
  monaco.editor.create(document.getElementById('monacoEditor'), {
    value: ``,
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true,
    readOnly: true
  });
});

//Reload code editors
setTimeout(function(){changeEditor()}, 300);
setTimeout(function(){changeEditor()}, 400);

//Inform user about security threats
console.clear();
console.log("%cStop!", "color: red; font-size: 30px; font-weight: bold");
console.log("Don't paste any code here you don't understand, as it might be an attempt to hack your accounts.\nIf you know what you're doing, this console can be used for debugging and testing code.");

//Make <body> visible
setTimeout(function(){jQuery('body').css('opacity', '1');},500);

var modal = document.getElementById("creditsModal");
var btn = document.getElementById("creditsModalBtn");
var span = document.getElementsByClassName("credits-modal-close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Special Functions
window.onbeforeunload = function()
{
    return "...";
}

function resetAllSettings() {
    clearConsole();
    clearCanvas();
    forceDeleteTimers();
    clearCanvasFilter();
    setCanvasCursor('auto');
    canvas.width = 500;
    canvas.height = 500;
    Controller.search();
}

function getCode() {
    return Blockly.JavaScript.workspaceToCode(workspace);
}

function runCodeWithConsole() {
    try {
        var result = eval(getCode());
        if (($("#console").html().match(/\<br\>/g) || []).length > 23) { $("#console").html(""); }
        if (debugger_on) {
            switch (typeof result) {
                case "string":
                    $("#console").html($("#console").html() + "<span style='color: #505050'>&nbsp> </span><span style='color: #ce916c'>'" + result + "'</span><br>"); console.push(result);
                    break;
                case "number":
                case "bigint":
                    $("#console").html($("#console").html() + "<span style='color: #505050'>&nbsp> </span><span style='color: #b5cea8'>" + result + "</span><br>"); console.push(result);
                    break;
                case "boolean":
                    $("#console").html($("#console").html() + "<span style='color: #505050'>&nbsp> </span><span style='color: #398cd6'>" + result + "</span><br>"); console.push(result);
                    break;
                case "function":
                    $("#console").html($("#console").html() + "<span style='color: #505050'>&nbsp> </span><span style='color: #ffde71'>" + result + "</span><br>"); console.push(result);
                    break;
                default:
                    if (result == undefined || result == null) {
                        $("#console").html($("#console").html() + "<span style='color: #505050'>&nbsp> </span><span style='color: #505050'>" + result + "</span><br>"); console.push(result);
                    }
                    else if (result instanceof Array) {
                        $("#console").html($("#console").html() + "<span style='color: #505050'>&nbsp> </span><span style='color: #4ec994'>" + JSON.stringify(result) + "</span><br>"); console.push(JSON.stringify(result));
                    }
                    else {
                        $("#console").html($("#console").html() + "<span style='color: #505050'>&nbsp> </span><span style='color: #4ec994'>" + result + "</span><br>"); console.push(result);
                    }
            }
        }
    }
    catch (error) {
        if (($("#console").html().match(/\<br\>/g) || []).length > 23) { $("#console").html(""); }
        if (debugger_on) { $("#console").html($("#console").html() + "<span style='color: #505050'>&nbsp> </span><span style='color: #ec5959'>" + error + "</span><br>"); console.push(error);}
    }
}

var console_open = true;
function changeConsole() {
    console_open = !console_open;
    if (console_open){
        $("#canvasContainer").attr("hidden", true);
        $('#console').removeAttr('hidden');
    }
    else{
        $("#console").attr("hidden", true);
        $('#canvasContainer').removeAttr('hidden');
    }
}

var debugger_on = true;
function toggleDebugger() {
    debugger_on = !debugger_on;
    if (debugger_on){
        document.getElementById("debuggerButton").src = "resources/debugger_on.png";
    }
    else{
        document.getElementById("debuggerButton").src = "resources/debugger_off.png";
    }
}

var blockly_open = true;
function changeEditor() {
    blockly_open = !blockly_open;
    if (blockly_open){
        $("#monacoEditor").attr("hidden", true);
        $('#blocklyDiv').removeAttr('hidden');
        $("#editorChanger").html("JavaScript");
    }
    else{
        $("#blocklyDiv").attr("hidden", true);
        $('#monacoEditor').removeAttr('hidden');
        $("#editorChanger").html("Blocks");
        monaco.editor.getModels()[0].setValue((getCode()).substring(0, getCode().length - 1));
    }
}

function downloadFile(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}
function downloadDataURL(filename, dataurl) {
    var element = document.createElement('a');
    element.setAttribute('href', dataurl);
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}
function handle_file_select( evt ) {
    //console.log( "[Event] file chooser" );

    let fl_files = evt.target.files; // JS FileList object

    // use the 1st file from the list
    let fl_file = fl_files[0];

    let reader = new FileReader(); // built in API

    let display_file = ( e ) => { // set the contents of the <textarea>
        //console.log( '. . got: ', e.target.result.length, e );
        loadedJson = JSON.parse(e.target.result);
        Blockly.serialization.workspaces.load(loadedJson, Blockly.getMainWorkspace());
        };

    let on_reader_load = ( fl ) => {
        //console.log( '. file reader load', fl );
        return display_file; // a function
        };

    // Closure to capture the file information.
    reader.onload = on_reader_load( fl_file );

    // Read the file as text.
    reader.readAsText( fl_file );
}
document.getElementById('actual-btn').addEventListener('change', handle_file_select, false);



function myBrowser() {
    try {
        let has = (input) => navigator.userAgent.includes(input);
        if (has("Firefox")) return "Firefox";
        if (has("SamsungBrowser")) return "Samsung Internet";
        if ((has("Opera") || has("OPR")) && has("GX")) return "Opera GX";
        if (has("Opera") || has("OPR")) return "Opera";
        if (has("Trident")) return "Internet Explorer";
        if (has("Edge")) return "Edge Legacy";
        if (has("Edg")) return "Edge";
        if (has("YaBrowser") || has("YaSearchBrowser")) return "Yandex";
        if (has("Miui")) return "Mi Browser";
        if (has("UBrowser")) return "Uc Browser";
        if (has("Chrome")) return "Chrome";
        if (has("Safari")) return "Safari";
        return "not detected";
    } catch (err) {
        return "not detected";
    }
}
function myPageInfo(type) {
    if (type == "title"){
        return document.title;
    }
    else if (type == "URL"){
        return window.location.href;
    }
    else if (type == "domain name"){
        return window.location.hostname;
    }
    else if (type == "path"){
        return window.location.pathname;
    }
    else if (type == "protocol"){
        return window.location.protocol;
    }
}
function setPageInfo(type, value) {
    if (type == "title"){
        document.title = value;
    }
    else if (type == "URL"){
        window.location.href = value;
    }
    else if (type == "domain name"){
        window.location.hostname = value;
    }
    else if (type == "path"){
        window.location.pathname = value;
    }
    else if (type == "protocol"){
        window.location.protocol = value;
    }
}
var newWindow;
function openNewWindow(type, input, width, height, left, top) {
    if (type == "URL"){
      window.open(input, "", `width=${width},height=${height},left=${left},top=${top}`);
    }
    if (type == "HTML"){
      newWindow = window.open("", "", `width=${width},height=${height},left=${left},top=${top}`);
      newWindow.document.write(input);
    }
}
function playSound(source) {
    var audio = new Audio(source);
    audio.play();
}
function searchRequestUrl(request, name) {
    if (name == "Google"){
        return "https://www.google.com/search?q=" + request;
    }
    else if (name == "Bing"){
        return "https://www.bing.com/search?q=" + request;
    }
    else if (name == "Yahoo"){
        return "https://search.yahoo.com/search?p=" + request;
    }
    else if (name == "Yandex"){
        return "https://yandex.com/search/?text=" + request;
    }
    else if (name == "DuckDuckGo"){
        return "https://duckduckgo.com/?t=h_&q=" + request;
    }
}

function getPitch(pitch) {
    if (pitch == 0) {return "C3"}
    else if (pitch == 1) {return "D3"}
    else if (pitch == 2) {return "E3"}
    else if (pitch == 3) {return "F3"}
    else if (pitch == 4) {return "G3"}
    else if (pitch == 5) {return "A3"}
    else if (pitch == 6) {return "B3"}
    else if (pitch == 7) {return "C4"}
    else if (pitch == 8) {return "D4"}
    else if (pitch == 9) {return "E4"}
    else if (pitch == 10) {return "F4"}
    else if (pitch == 11) {return "G4"}
    else if (pitch == 12) {return "A4"}
}

var console = [];

function clearConsole(){
    $("#console").html("");
    console = [];
}

function writeConsole(input){
    $("#console").html($("#console").html() + "<span style='color: #505050'>&nbsp> </span>" + input + "<br>");
    console.push(input);
}

function colorwriteConsole(input, color){
    $("#console").html($("#console").html() + "<span style='color: #505050'>&nbsp> </span><span style='color: " + color + "'>" + input + "<br>");
    console.push(input);
}

function forceDeleteTimers(){
    //This function may sometimes clear timers that you don't want to clear!
    var highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    }
}

const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`;

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
function clearCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}

var canvas_position;
window.addEventListener("mousemove", (e) => {
    var rect = canvas.getBoundingClientRect();
    canvas_position = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
    };
})

var canvas_mouse = false;
canvas.onmousedown = function() { 
    canvas_mouse = true;
}
canvas.onmouseup = function() {
    canvas_mouse = false;
}

function digitsOfPi(digits){
    if ((digits % 1) != 0){
        return digitsOfPi(Math.round(digits));
    }
    else if (digits > 0){
        let i = 1n;
        let x = 3n * (10n ** (BigInt(digits)+20n));
        let pi = x;
        while (x > 0) {
            x = x * i / ((i + 1n) * 4n);
            pi += x / (i + 2n);
            i += 2n;
        }
        return "3."+((pi / (10n ** 20n)).toString().slice(1));
    }
    else {
        return 3;
    }
}

function canvasDetectAreaHover(x1, y1, x2, y2) {
    return (Math.round(canvas_position.x)) > x1 && (Math.round(canvas_position.x)) < x2 && (Math.round(canvas_position.y)) > y1 && (Math.round(canvas_position.y)) < y2;
}

function canvasDetectAreaClick(x1, y1, x2, y2) {
    return (canvas_mouse) && (Math.round(canvas_position.x)) > x1 && (Math.round(canvas_position.x)) < x2 && (Math.round(canvas_position.y)) > y1 && (Math.round(canvas_position.y)) < y2;
}

document.getElementById("canvas").style.filter = 'none';

function setCanvasFilter(filter, value) {
    document.getElementById("canvas").style.filter = `${filter}(${value})`;
}

function clearCanvasFilter() {
    document.getElementById("canvas").style.filter = 'none';
}

function getCurrentCanvasFilter() {
    return document.getElementById("canvas").style.filter;
}

var currentKey = 'noKeyCurrentlyPressed';
var currentKeyLocation;

$(document).on("keydown", function (e) {
    currentKey = e.key;
    currentKeyLocation = e.originalEvent.location;
});
$(document).on("keyup", function (e) {
    currentKey = 'noKeyCurrentlyPressed';
});

function checkIfKeyDown(key, location) {
    if(key != 'noKeyCurrentlyPressed') {
        if (location != 'any') {
            return (key == currentKey) && (location == currentKeyLocation);
        }
        else {
            return key == currentKey;
        }
    }
    else {
        return false;
    }
}

var lastKey;

$(document).on("keydown", function (e) {
    lastKey = e.key;
});

let mouseDownTime = 0;
let mouseHoldDuration = 0;
let intervalId = null;

$(document).on("mousedown", function () {
    mouseDownTime = new Date().getTime();
    mouseHoldDuration = 0;
    intervalId = setInterval(function () {
        let currentTime = new Date().getTime();
        mouseHoldDuration = currentTime - mouseDownTime;
    }, 1);
});

$(document).on("mouseup", function () {
    clearInterval(intervalId);
    mouseHoldDuration = 0;
});

function loadExampleProject(project) {
    let loadedJson = JSON.parse(project);
    Blockly.serialization.workspaces.load(loadedJson, Blockly.getMainWorkspace());
}

document.getElementById("canvasContainer").style.cursor = "auto";

function setCanvasCursor(cursor) {
    document.getElementById("canvasContainer").style.cursor = cursor;
}

function getCanvasCursor() {
    return document.getElementById("canvasContainer").style.cursor;
}

var currentControllerButtons = ['noButtonCurrentlyPressed', 'noButtonCurrentlyPressed', 'noButtonCurrentlyPressed', 'noButtonCurrentlyPressed'];

window.addEventListener('gc.button.press', detectControllerButtonPress, false);
window.addEventListener('gc.button.release', detectControllerButtonRelease, false);

function detectControllerButtonPress(event) {
    currentControllerButtons[event.detail.controllerIndex] = event.detail.name;
}
function detectControllerButtonRelease(event) {
    currentControllerButtons[event.detail.controllerIndex] = 'noButtonCurrentlyPressed';
}

var currentControllerLeftAnalogSticks = [{}, {}, {}, {}];
var currentControllerRightAnalogSticks = [{}, {}, {}, {}];

window.addEventListener('gc.analog.change', detectAnalogStickChange, false);

function detectAnalogStickChange(event) {
    if (event.detail.name == "LEFT_ANALOG_STICK") {
        currentControllerLeftAnalogSticks[event.detail.controllerIndex] = event.detail.position;
    }
    else if (event.detail.name == "RIGHT_ANALOG_STICK") {
        currentControllerRightAnalogSticks[event.detail.controllerIndex] = event.detail.position;
    }
}

var currentControllerLeftTriggers = [0, 0, 0, 0];
var currentControllerRightTriggers = [0, 0, 0, 0];

window.addEventListener('gc.button.hold', detectTriggerChange, false);
window.addEventListener('gc.button.release', detectTriggerChange, false);

function detectTriggerChange(event) {
    if (event.detail.name == "LEFT_SHOULDER_BOTTOM") {
        currentControllerLeftTriggers[event.detail.controllerIndex] = event.detail.value;
    }
    else if (event.detail.name == "RIGHT_SHOULDER_BOTTOM") {
        currentControllerRightTriggers[event.detail.controllerIndex] = event.detail.value;
    }
}