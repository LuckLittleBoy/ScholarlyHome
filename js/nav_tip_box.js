// JavaScript Document
$(document).ready(function(e) {
	var displayBox = $(".public_nav_tip_box");
	var displayli2 = $("#i2");
	var displayli3 = $("#i3");
	var displayli4 = $("#i4");
	var displayli5 = $("#i5");
	var displayli6 = $("#i6");
	var displayli7 = $("#i7");
	
	$("#li2").hover(function(){	
		displayBox.show();
		displayli2.show();

	},
	
	function()
	{
		displayli2.hide();
		judge(displayli2);
	}
	);
	
	$("#tip2").hover(function(){
			displayli2.show();
		},
		
		function()
		{
			displayli2.hide();
		}
	);
		
	$("#li3").hover(function(){
		displayli2.hide();
		displayBox.show();
		displayli3.show();

	},
	
	function()
	{
		displayli3.hide();
	}
	);
	
	$("#tip3").hover(function(){
			displayli3.show();
		},
		
		function()
		{
			displayli3.hide();
		}
	);
	
	$("#li4").hover(function(){
		displayli2.hide();
		displayBox.show();
		displayli4.show();

	},
	
	function()
	{
		displayli4.hide();
	}
	);
	
	$("#tip4").hover(function(){
			displayli4.show();
		},
		
		function()
		{
			displayli4.hide();
		}
	);
	
	$("#li5").hover(function(){
		displayli2.hide();
		displayBox.show();
		var display = $("#i5");
		display.show();

	},
	
	function()
	{
		var display = $("#i5");
		display.hide();
		judge(display);
	}
	);
	
	$("#tip5").hover(function(){
			displayli5.show();
		},
		
		function()
		{
			displayli5.hide();
		}
	);
	
	$("#li6").hover(function(){
		displayli2.hide();
		displayBox.show();
		var display = $("#i6");
		display.show();

	},
	
	function()
	{
		var display = $("#i6");
		display.hide();
		judge(display);
	}
	);
	
	$("#tip6").hover(function(){
			displayli6.show();
		},
		
		function()
		{
			displayli6.hide();
		}
	);
	
	$("#li7").hover(function(){
		displayli2.hide();
		displayBox.show();
		var display = $("#i7");
		display.show();

	},
	
	function()
	{
		var display = $("#i7");
		display.hide();
		judge(display);
	}
	);
	
	$("#tip7").hover(function(){
			displayli7.show();
		},
		
		function()
		{
			displayli7.hide();
		}
	);
	
});