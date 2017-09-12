// JavaScript Document
$(document).ready(function() {
	$("#J_readNow").click(function(){
        $("#testp").load("E:\dwCode\书香之家\book\book1.txt");
    });
	
	/*function import(){
    var selectedFile = document.getElementById("files").files[0];//获取读取的File对象
    var name = selectedFile.name;//读取选中文件的文件名
    var size = selectedFile.size;//读取选中文件的大小
    console.log("文件名:"+name+"大小："+size);

    var reader = new FileReader();//这里是核心！！！读取操作就是由它完成的。
    reader.readAsText(selectedFile);//读取文件的内容

    reader.onload = function(){
        console.log(this.result);//当读取完成之后会回调这个函数，然后此时文件的内容存储到了result中。直接操作即可。
    }
	}*/

		/*$.ajax({
        url:"/text/book1.txt",
        dataType: 'text',
        success: function(data) {
            alert("1");
        }
    	});*/
  		/*htmlobj=$.ajax({url:"/text/book1.txt",async:false});
		alert(htmlobj);*/
  		/*$("#myDiv").html(htmlobj.responseText);*/
		
});