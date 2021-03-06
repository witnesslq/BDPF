/**
 * @description 学生管理管理JS脚本
 * @auth wwq
 */
var clas = {};

/**
 * 学生管理查询
 */
function back(){
	window.location.href=window.ctx +"/student";
};

//学生管理管理form表单验证
clas.validateForm = function(tagid){
	validator = $("#" + tagid).validate({
		rules :{//对指定的字段进行判空或者重复
			debug:false,
			txtFoo:{//上传文件
				required:true,
			},
		},
		messages:{//对指定的字段进行消息提示
			txtFoo:{//上传文件
				required:'请选择文件上传!',
		    },			    
		},
		 submitHandler:function(form){
			 loadGif();//加载提示框
			var url = window.ctx + '/student/upload';
			var suf=$('#'+tagid).serialize();
			url=url+"?"+suf;
			var data = $('#'+tagid).serializeArray();
		    var fileName = $("#file").val();//文件名
		    fileName = fileName.split("\\");  
		    jQuery.ajaxSettings.traditional = true;  
		    fileName = fileName[fileName.length-1]; 
		    $.ajaxFileUpload({  
		        url : url,  
		        secureuri : false,//安全协议  
		        fileElementId:'file',//id  
		        type : 'POST',  
		        dataType : 'json',  
		        data:data,  
		        async : false,  
		        error : function(data,status,e) {  
		        },  
		        success : function(feedbak){
					if(feedbak.successful){
						var $box = $(".modal-box .modal-content");
						$box.append("<div class='modal-footer'><a class='btn btn-primary btn-save mr30'>确定</a></div>");
						if(feedbak.message.length>0){
							showError(feedbak.message);
						}else{
							showError("学生信息导入成功，点击确定返回！");
						}
						$(".btn-save").on("click",function(){
							$('.modal').modal('hide');//先隐藏弹出框
							$box.find(".btn-save").remove();
							back();
						})
					}else{
						showError(feedbak.message)
					}
				}
		    });  
		}
	});
};
