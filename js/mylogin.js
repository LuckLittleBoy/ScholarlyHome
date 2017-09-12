// JavaScript Document

	function check_login()
	{
	 var name=$("#user_name").val();
	 var pass=$("#password").val();
	 if(name=="1" && pass=="1")
	 {
	  alert("登录成功！")
	  return true;
	 }
	 else
	 {
	  $("#login_form").removeClass('shake_effect');  
	  setTimeout(function()
	  {
	   $("#login_form").addClass('shake_effect')
	  },1);  
	  return false;
	 }
	}
	function check_register(){
		var name = $("#r_user_name").val();
		var pass = $("#r_password").val();
		var email = $("r_email").val();
		if(name!="" && pass=="" && email != "")
		 {
		  alert("注册成功！");
		  $("#user_name").val("");
		  $("#password").val("");
		 }
		 else
		 {
		  $("#login_form").removeClass('shake_effect');  
		  setTimeout(function()
		  {
		   $("#login_form").addClass('shake_effect')
		  },1);  
		 }
	}
	$(function(){
		
		$("#username-clear").click(function(){
    		$("#user_name").val("");
    		$("#user_name").focus();
		})
		
		$("#psw-clear").click(function(){
    		$("#password").val("");
    		$("#password").focus();
		})
		
		
		$("#user_name").focus(function(){
			$("#user-i").css("color","green");
			})
			
		$("#password").focus(function(){
			$("#psw-i").css("color","green");
			})
			
		$("#user_name").focusout(function(){
			$("#user-i").css("color","#ccc");
			})
		
		$("#password").focusout(function(e) {
            $("#psw-i").css("color","#ccc");	
        });
		
		
		$("#create").click(function(){
			check_register();
			return false;
		})
		$("#login").click(function(){
			return check_login();
		})
		$('.message a').click(function () {
		    $('form').animate({
		        height: 'toggle',
		        opacity: 'toggle'
		    }, 'slow');
		});
	})
	