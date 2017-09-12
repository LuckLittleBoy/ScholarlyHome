// JavaScript Document
$(document).ready(function(e) {
		var thisEle = $("p").css("font-size"); 
		var textFontSize = parseFloat(thisEle , 10); 
		var unit = thisEle.slice(-2); //获取单位
		
   		$("#font-plus").click(function(){
		 
		if( textFontSize <= 20 )
		{ 
			textFontSize += 2; 
		} 

		$("p").css("font-size", textFontSize + unit);  	 
	});
    $("#font-minus").click(function () { 
		
		if( textFontSize >= 14 )
		{ 
			textFontSize -= 2; 
		} 
		$("p").css("font-size", textFontSize + unit); 
	});
});
