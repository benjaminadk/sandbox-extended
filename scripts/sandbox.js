$(document).ready(function(){
  //VARIABLES
  //BOX
  var height = $("#height"),
      width = $("#width"),
      top = $("#top"),
      left = $("#left"),
      padding = $("#padding"),
      scale = $("#scale"),
      rotateX = $("#rotateX"),
      rotateY = $("#rotateY"),
      rotateZ = $("#rotateZ"),
      twist = $("#twist"),
      opacity = $("#opacity"),
      bsOffsetX = $("#bsOffsetX"),
      bsOffsetY = $("#bsOffsetY"),
      bsBlur = $("#bsBlur"),
      bsColor = document.getElementById("bsColor"),
      borderColor = document.getElementById("borderColor"),
      borderSize = $("#borderSize"),
      borderRadius = $("#borderRadius"),
      outlineColor = document.getElementById("outlineColor"),
      outlineSize = $("#outlineSize"),
      outlineOffset = $("#outlineOffset"),
      //TEXT IN BOX
      $textInput = $("#boxText"),
      textInput = document.getElementById("boxText"),
      fontSize = $("#fontSize"),
      lineHeight = $("#lineHeight"),
      letterSpacing = $("#letterSpacing"),
      boxTextColor = document.getElementById("sandboxTextColor"),
      tsOffsetX = $("#tsOffsetX"),
      tsOffsetY = $("#tsOffsetY"),
      tsBlur = $("#tsBlur"),
      tsColor = document.getElementById("tsColor"),
      tOutline = document.getElementById("tOutline"),
      outlineToggle = $("#outlineToggle"),
      //ADVANCED
      helpButton = $("#helpButton"),
      metaButton = $("#metaButton"),
      showCode = $("#showCode"),
      code = $("#code"),
      metaOptions = $("#metaOptions"),
      time = $("#transitionTime"),
      bez1 = $("#bez1"),
      bez2 = $("#bez2"),
      bez3 = $("#bez3"),
      bez4 = $("#bez4"),
      cb1 = $("#cb1"),
      cb2 = $("#cb2"),
      cb3 = $("#cb3"),
      cb4 = $("#cb4"),
      box = $("#cssSandbox"),
      $text = $("#cssSandboxText"),
      text = document.getElementById("cssSandboxText");
      
      
  
  //MAIN OPTIONS
  //HEIGHT IN PX
  height.slider({
    orientation: "horizontal",
    max: 600,
    min:0,
    step: 1,
    value: 100,
    animate: 500,
    slide: function(event,ui){
      document.documentElement.style.setProperty("--height",ui.value + "px");
      $("#heightDisplay").html(ui.value + "px");
    }
  });
  
  //WIDTH IN PX
  width.slider({
    orientation: "horizontal",
    max: 800,
    min:0,
    step: 1,
    value: 100,
    animate: 500,
    slide: function(event,ui){
      document.documentElement.style.setProperty("--width",ui.value + "px");
      $("#widthDisplay").html(ui.value + "px");
    }
  });
  
  //POSITION TOP IN VH
  top.slider({
    orientation: "horizontal",
    max: 95,
    min: 0,
    step: 1,
    value: 50,
    animate: 500,
    slide: function(event,ui){
      document.documentElement.style.setProperty("--top",ui.value + "vh");
      $("#topDisplay").html(ui.value + "vh");
    }
  });
  
  //POSITION LEFT IN VW
  left.slider({
    orientation: "horizontal",
    max: 95,
    min: 0,
    step: 1,
    value: 50,
    animate: 500,
    slide: function(event,ui){
      document.documentElement.style.setProperty("--left",ui.value + "vw");
      $("#leftDisplay").html(ui.value + "vw");
    }
  });
  
  //PADDING
  padding.slider({
    orientation: "horizontal",
    max: 50,
    min:0,
    step: 1,
    value: 0,
    animate: 500,
    slide: function(event,ui){
      document.documentElement.style.setProperty("--padding",ui.value + "px");
      $("#paddingDisplay").html(ui.value + "px");
    }
  });
  
  //TRANSFORM SCALE
  scale.slider({
    orientation: "horizontal",
    max: 5,
    min: 0,
    step: .25,
    value: 1,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--scale",ui.value);
      $("#scaleDisplay").html(ui.value);
    }
  });
  
   //TRANSFORM ROTATE X
  rotateX.slider({
    orientation: "horizontal",
    max: 720,
    min: 0,
    step: 1,
    value: 0,
    animate: 500,
    slide: function(event,ui){
      document.documentElement.style.setProperty("--rotatex",ui.value + "deg");
      $("#rotateXDisplay").html(ui.value + "deg");
    }
  });
  
  //TRANSFORM ROTATE Y
  rotateY.slider({
    orientation: "horizontal",
    max: 720,
    min: 0,
    step: 1,
    value: 0,
    animate: 500,
    slide: function(event,ui){
      document.documentElement.style.setProperty("--rotatey",ui.value + "deg");
      $("#rotateYDisplay").html(ui.value + "deg");
    }
  });
  
  //TRANSFORM ROTATE Z
  rotateZ.slider({
    orientation: "horizontal",
    max: 720,
    min: 0,
    step: 1,
    value: 0,
    animate: 500,
    slide: function(event,ui){
      document.documentElement.style.setProperty("--rotatez",ui.value + "deg");
      $("#rotateZDisplay").html(ui.value + "deg");
    }
  });
  
  //TRANSFORM TWIST-A-MATIC
  twist.slider({
    orientation: "horizontal",
    max: 720,
    min: 0,
    step: 1,
    value: 0,
    animate: 500,
    slide: function(event,ui){
      document.documentElement.style.setProperty("--rotatex",ui.value + "deg");
      document.documentElement.style.setProperty("--rotatey",ui.value + "deg");
      document.documentElement.style.setProperty("--rotatez",ui.value + "deg");
      rotateX.slider( "option", "value", ui.value);
      rotateY.slider( "option", "value", ui.value);
      rotateZ.slider( "option", "value", ui.value);
      $("#rotateXDisplay").html(ui.value + "deg");
      $("#rotateYDisplay").html(ui.value + "deg");
      $("#rotateZDisplay").html(ui.value + "deg");
    }
  });
  
  //CSS SANDBOX BACKGROUND COLOR
  var sandboxColor = document.getElementById("sandboxColor");
  sandboxColor.addEventListener("change", function(){
    document.documentElement.style.setProperty("--sandboxColor", "#" + sandboxColor.value);
  });
  
  //CSS SANDBOX TEXT COLOR
  boxTextColor.addEventListener("change", function(){
    document.documentElement.style.setProperty("--textColor", "#" + boxTextColor.value);
  });
  
  //OPACITY
  opacity.slider({
    orientation: "horizontal",
    max: 1,
    min:0,
    step: .05,
    value: 1,
    animate: 500,
    slide: function(event,ui){
      document.documentElement.style.setProperty("--opacity",ui.value);
      $("#opacityZDisplay").html(ui.value);
    }
  });
  
  //BOX SHADOW OFFSET X
  bsOffsetX.slider({
    orientation: "horizontal",
    max: 50,
    min: -50,
    step: 1,
    value: 0,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--bsOffsetX",ui.value + "px");
      $("#boxShadowXDisplay").html(ui.value + "px");
    }
  });
  
  //BOX SHADOW OFFSET Y
  bsOffsetY.slider({
    orientation: "horizontal",
    max: 50,
    min: -50,
    step: 1,
    value: 0,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--bsOffsetY",ui.value + "px");
      $("#boxShadowYDisplay").html(ui.value + "px");
    }
  });
  
  //BOX SHADOW BLUR
  bsBlur.slider({
    orientation: "horizontal",
    max: 40,
    min: 0,
    step: 1,
    value: 0,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--bsBlur",ui.value + "px");
      $("#boxShadowBDisplay").html(ui.value + "px");
    }
  });
  
  //BOX SHADOW COLOR
  bsColor.addEventListener("change",function(){
    document.documentElement.style.setProperty("--bsColor","#" + bsColor.value);
  });
  
  //TEXT SHADOW OFFSET X
  tsOffsetX.slider({
    orientation: "horizontal",
    max: 50,
    min: -50,
    step: 1,
    value: 0,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--tsOffsetX",ui.value + "px");
      $("#textShadowXDisplay").html(ui.value + "px");
    }
  });
  
  //TEXT SHADOW OFFSET Y
  tsOffsetY.slider({
    orientation: "horizontal",
    max: 50,
    min: -50,
    step: 1,
    value: 0,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--tsOffsetY",ui.value + "px");
      $("#textShadowYDisplay").html(ui.value + "px");
    }
  });
  
  //TEXT SHADOW BLUR
  tsBlur.slider({
    orientation: "horizontal",
    max: 20,
    min: 0,
    step: 1,
    value: 0,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--tsBlur",ui.value + "px");
      $("#textShadowBDisplay").html(ui.value + "px");
    }
  });
  
  //TEXT SHADOW COLOR
  tsColor.addEventListener("change",function(){
    document.documentElement.style.setProperty("--tsColor","#" + tsColor.value);
  });
  
  //TEXT OUTLINE COLOR
  tOutline.addEventListener("change",function(){
    document.documentElement.style.setProperty("--tOutline","#" + tOutline.value);
  });
  
  //TEXT OUTLINE TOGGLE BUTTON
  outlineToggle.button({
    label: "Clear Text Outline",
    classes: {
      "ui-button": "outlineToggle"
    }
  });
  
  outlineToggle.click(function(){
    document.documentElement.style.setProperty("--tOutline",null);
  });
  
 //BORDER-STYLE
  window.borderStyleSet = function
  (){
    var bs = document.getElementById('borderStyle');
    var style = bs.options[bs.selectedIndex].text;
    document.documentElement.style.setProperty("--borderStyle", style);
  };
  
  //BORDER-COLOR
  borderColor.addEventListener("change",function(){
    document.documentElement.style.setProperty("--borderColor","#" + borderColor.value);
  });
  
  //BORDER-SIZE
  borderSize.slider({
    orientation: "horizontal",
    max: 20,
    min: 0,
    step: 1,
    value: 1,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--borderSize",ui.value + "px");
    }
  });
  
  //OUTLINE-STYLE
  window.outlineStyleSet = function
  (){
    var os = document.getElementById('outlineStyle');
    var style = os.options[os.selectedIndex].text;
    document.documentElement.style.setProperty("--outlineStyle", style);
  };
  
  //OUTLINE-COLOR
  outlineColor.addEventListener("change", function(){
    document.documentElement.style.setProperty("--outlineColor","#" + outlineColor.value);
  });
  
  //OUTLINE-SIZE
  outlineSize.slider({
    orientation: "horizontal",
    max: 20,
    min: 0,
    step: 1,
    value: 1,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--outlineSize",ui.value + "px");
    }
  });
  
  //OUTLINE OFFSET
  outlineOffset.slider({
    orientation: "horizontal",
    max: 30,
    min: 0,
    step: 1,
    value: 0,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--outlineOffset",ui.value + "px");
    }
  });

  //BORDER-RADIUS
  borderRadius.slider({
    orientation: "horizontal",
    max: 50,
    min: 0,
    step: .5,
    value: 0,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--borderRadius",ui.value + "%");
    }
  });
  
  //TEXT-CONTENT
  textInput.addEventListener("keyup",function(){
    text.innerHTML = textInput.value;
  });
  
  //FONT SIZE
  fontSize.slider({
    orientation: "horizontal",
    max: 80,
    min: 0,
    step: 1,
    value: 16,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--fontSize",ui.value + "px");
    }
  });
  
  //FONT FAMILY
  window.fontFamilySet = function
  (){
    var ff = document.getElementById('fontFamily');
    var font = ff.options[ff.selectedIndex].text;
    $text.css("font-family", font);
  };
  
  //TEXT ALIGN
  window.alignText = function
  (){
    var ta = document.getElementById('textAlign');
    var align = ta.options[ta.selectedIndex].text;
    document.documentElement.style.setProperty("--textAlign", align);
  };
  
  //LINE HEIGHT
  lineHeight.slider({
    orientation: "horizontal",
    max: 5,
    min: 0,
    step: .1,
    value: 1,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--lineHeight", ui.value);
    }
  });
  
  //LETTER SPACING
  letterSpacing.slider({
    orientation: "horizontal",
    max: 15,
    min: -7,
    step: .1,
    value: 1,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--letterSpacing", ui.value + "px");
    }
  });
  
  //ADVANCED OPTIONS
  //ADVANCED OPTIONS OPEN BUTTON
    metaButton.button({
    icon: "fa fa-gear",
    classes: {
      "ui-button": "colButton"
    }
  });
  //SHOW CODE BUTTON INIT
   showCode.button({
    icon: "fa fa-code",
    classes: {
      "ui-button": "colButton"
    }
  });
  
  //SHOW CODE BUTTON ON CLICK OPENS CODE DIALOG
  showCode.click(function(){
    code.dialog("open");
    
    var html = [`HTML:<br>&lt;div id='box'&gt;<br>&lt;p id='text'&gt;` + textInput.textContent + `&lt;&frasl;p&gt;<br>&lt;&frasl;div&gt;<br>CSS:<br>#box {`];
    
    var styles = box.css(["width","height","position","top","left","padding","background-color","opacity","box-shadow","border","border-radius","outline","outline-offset","transform","overflow","display"]);
    
    $.each(styles, function(prop,value){
      html.push( prop + ": " + value + ";" );
    });
    
    html.push([`}<br>#text {`]);
    
    var textStyles = $text.css(["font-size","font-family","text-align","line-height","letter-spacing","color","text-shadow"]);
    
    $.each(textStyles, function(prop,value){
      html.push( prop + ": " + value + ";");
    });
    
    html.push(["}"]);
    
    $( "#result" ).html( html.join( "<br>" ) );
  });
  
  //CODE DIALOG
  code.dialog({
    autoOpen:false,
    classes:{"ui-dialog":"codeDialog","ui-dialog-titlebar":"codeTitle"},
    height: 500,
    width: 500,
    resizable: false,
    position: { my: "right top+50px", at: "right top", of: window },
    show: { effect: "blind", duration: 1000 },
    hide: { effect: "pulsate", duration: 1000 }
  });
  //HELP BUTTON INIT
   helpButton.button({
     icon: "fa fa-question",
    classes: {
      "ui-button": "colButton"
    }
   });
  //ON CLICK OPENS ADVANCED OPTIONS DIALOG
  metaButton.click(function() {
    metaOptions.dialog("open");
  });
  
  //ADVANCED OPTIONS DIALOG
  metaOptions.dialog({
    autoOpen: false,
    classes:{"ui-dialog":"metaOptions","ui-dialog-titlebar":"metaTitle"},
    height: 500,
    width: 500,
    resizable: false,
    position: { my: "right top+50px", at: "right top", of: window },
    show: { effect: "blind", duration: 1000 },
    hide: { effect: "pulsate", duration: 1000 }
  });
  
  //TRANSITION DURATION
  time.slider({
    orientation: "horizontal",
    max: 5,
    min: 0,
    step: .1,
    value: 2,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--transitionTime",ui.value + "s");
    }
  });
  
  //CUBIC BEZIER COMPONENTS
  bez1.slider({
    orientation: "vertical",
    max: 1,
    min: 0,
    step: .01,
    value: 0,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--bez1",ui.value);
      cb1.html(ui.value);
    }
  });
  
  bez2.slider({
    orientation: "vertical",
    max: 1,
    min: 0,
    step: .01,
    value: 0,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--bez2",ui.value);
      cb2.html(ui.value);
    }
  });
  
  bez3.slider({
    orientation: "vertical",
    max: 1,
    min: 0,
    step: .01,
    value: 1,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--bez3",ui.value);
      cb3.html(ui.value);
    }
  });
  
  bez4.slider({
    orientation: "vertical",
    max: 1,
    min: 0,
    step: .01,
    value: 1,
    animate: 500,
    change: function(event,ui){
      document.documentElement.style.setProperty("--bez4",ui.value);
      cb4.html(ui.value);
    }
  });
  
  //OPENS CUBIC BEZIER VIDEO DIALOG MODAL
  $("#bezierHelpButton").button({
    icon: "fa fa-youtube",
    classes: {
      "ui-button": "colButton"
    }
  });
  
  //CONTAINS CUBIC BEZIER SITE
  $("#bezierHelpDialog").dialog({
    autoOpen: false,
    modal: true,
    show: { effect: "explode", duration: 2000 },
    hide: { effect: "fold", duration: 2000 },
    width: 600,
    resizable: false,
    closeOnEscape: true
  });
  
  //OPENS CUBIC BEZIER HELP SITE 
  $("#bezierHelpButton").click(function(){
      $("#bezierHelpDialog").dialog("open");
  });
  
  //SITE COLORS CONTROLS
  var color1 = document.getElementById("color1"),
      color2 = document.getElementById("color2"),
      color3 = document.getElementById("color3"),
      color4 = document.getElementById("color4"),
      color4Focus = document.getElementById("color4Focus"),
      bgColor = document.getElementById("bgColor"),
      textColor = document.getElementById("textColor");
  
  color1.addEventListener("change",function(){
    document.documentElement.style.setProperty("--color1","#" + color1.value);
  });
  
  color2.addEventListener("change",function(){
    var color = color2.value;
    document.documentElement.style.setProperty("--color2","#" + color);
  });
  
  color3.addEventListener("change",function(){
    var color = color3.value;
    document.documentElement.style.setProperty("--color3","#" + color);
  });
  
  color4.addEventListener("change",function(){
    var color = color4.value;
    document.documentElement.style.setProperty("--color4","#" + color);
  });
  
  color4Focus.addEventListener("change",function(){
    var color = color4Focus.value;
    document.documentElement.style.setProperty("--colorFocus","#" + color);
  });
  
  bgColor.addEventListener("change",function(){
    var color = bgColor.value;
    document.documentElement.style.setProperty("--bgColorBody","#" + color);
  });
  
  textColor.addEventListener("change",function(){
    var color = textColor.value;
    document.documentElement.style.setProperty("--textColorBody","#" + color);
  });
  
  //BOX DISPLAY PROPERTY
  //TEXT ALIGN
  window.boxDisplaySet = function
  (){
    var bd = document.getElementById('boxDisplay');
    var display = bd.options[bd.selectedIndex].text;
    document.documentElement.style.setProperty("--boxDisplay", display);
  };
  
  
  
  
  
 

});


  
