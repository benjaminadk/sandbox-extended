$(document).ready(function(){
  //DEFINE UI ITEMS
 
  var progress = $("#progress");
  var options = {animationDuration:1000};
  var magellan = new Foundation.Magellan($("#arrowWrap"),options);
  //SLIDER THAT CONTROLS POSITION OF CIRCLE
  $("#col1").slider({
    classes:{"ui-slider":"box1Slider","ui-slider-handle":"box1Handle"},
    orientation: "vertical",
    animate: "slow",
    max: 300,
    min: 30,
    step: 1,
    value: 30,
    change: function(event,ui){
      $("#col1Box").css("--box1Left",ui.value + "px");
      console.log(ui.value + "px")
    }
  });
  
  //OPENS YOUTUBE VIDEO DIALOG MODAL
  $("#col1Button").button({
    icon: "fa fa-youtube",
    classes: {
      "ui-button": "colButton"
    }
  });
  
  //CONTAINS YOU TUBE VIDEO INTRO
  $("#col1Dialog").dialog({
    autoOpen: false,
    modal: true,
    show: { effect: "explode", duration: 2000 },
    hide: { effect: "fold", duration: 2000 },
    width: 600,
    resizable: false,
    closeOnEscape: true
  });
  
  //OPENS LIST OF COLORS VIDEO 
  $("#col1Button").click(function(){
      $("#col1Dialog").dialog("open");
  });
  
  //DEFINES LOOK OF BUTTON
  $("#col2Button").button({
    icon: "fa fa-youtube",
    classes: {
      "ui-button": "colButton"
    }
  });
  
  //BUTTON TO OPEN COL 2 DIALOG
  $("#col2Button").click(function(){
    $("#col2Dialog").dialog("open");
  });
  
  //CONTAINS COLOR VIDEO it will i hope
  $("#col2Dialog").dialog({
    autoOpen: false,
    modal: true,
    show: { effect: "explode", duration: 2000 },
    hide: { effect: "fold", duration: 2000 },
    width: 600,
    resizable: false,
    title: "One Practical Reason To Use CSS Variables",
    closeOnEscape: true
  });
  
  //FUNCTION THAT CHANGES SQUARES COLOR
		var col2 = document.getElementById("col2");
  
    col2.addEventListener("change",function(){
      var newColor = col2.value;
    document.documentElement.style.setProperty("--col2BoxColor", newColor);
    document.documentElement.style.setProperty("--bs", "none");
      var randomColor = $(":root").css("--col2Random");
      if(newColor===randomColor){
        $("#guess").html("WOW! Correct.");
      }
      else{
        $("#guess").html("NOPE! Try Again.");
      }
    });
  
  //ARRAY OF RANDOM COLORS
  var randomColor = ["crimson","red","darkred","darksalmon","firebrick","indianred","lightcoral","lightsalmon","salmon","deeppink","hotpink","orangered","orange","gold","yellow","darkorange","saddlebrown","sienna","maroon","peru","tan","blue","navy","royalblue","skyblue","dodgerblue","deepskyblue","darkviolet","mediumorchid","darkorchid","purple","teal","grey","darkslategrey"];
  var randomIndex = Math.floor(randomColor.length * Math.random());
  document.documentElement.style.setProperty("--col2Random",randomColor[randomIndex]);
  //GENERATES NEW COLOR ON LOAD AND ON CLICK
  var col2RandomRefresh = $("#col2RandomRefresh");
  col2RandomRefresh.button({
    icon: "fa fa-refresh",
    classes: {
      "ui-button": "colButton"
    }
  });
  //GENERATES RANDOM COLOR INDEX
  col2RandomRefresh.click(function(){
    randomIndex = Math.floor(randomColor.length * Math.random());
    document.documentElement.style.setProperty("--col2Random",randomColor[randomIndex]);
  });
  //INITITIALIZE ANSWER BUTTON
  var col2Answer = $("#col2Answer");
  col2Answer.button({
    icon: "fa fa-question",
    classes: {
      "ui-button": "colButton"
    }
  });
  //GIVES THE ANSWER UP AND FILLS IN INPUT AND BOX WOW
  col2Answer.click(function(){
    col2.value = $(":root").css("--col2Random");
    document.documentElement.style.setProperty("--bs", "none");
    var newColor = col2.value;
    document.documentElement.style.setProperty("--col2BoxColor", newColor);
    $("#guess").html("There's the Answer");
  });
  
  //DROP UP FOR CSS COLOR NAMES NOW WEIRD NAMES
 var uglyColors = new Foundation.Dropdown($("#uglyColors"), {hover:true});
});

//INITIALIZE BUTTON COLUMN 3
$("#col3Button").button({
  icon: "fa fa-lightbulb-o",
    classes: {
      "ui-button": "colButton"}
});

//SET INTERVAL TO FILL PROGRESS BALL
$("#col3Button").click(function(){
  progress.value = 0;
  $("#progress").removeClass("boom");
  var a = 0;
  var circleFIll = setInterval(timer,100);
  function timer(){
  progress.value +=1;
    a += 1;
    
    if(progress.value === 100){
      clearInterval(timer);
      $("#progress").addClass("boom");
    }
  }
  
  

  
  
  
  
  
  

  
  
});