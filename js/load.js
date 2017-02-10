   //上传图片
   function initFileUpload(id) {
		var a ="/testback/userAccount/uploadImg.htm";
		$("#" + id).submitFile({
			action : a,
			zindex : 0,
			type : "text",
			success : function(url, obj) {
				console.log(url);
				if(url != ""){
					 //上传logo
					if(id == "load-logo"){
						$(".main-wrap a#load-logo").css("display","none");
					    $(".main-wrap a.logo-img").css("display","inline-block");
					    $(".logo-img img").attr("src", url);
					    $("#submitFile_file_load-logo").css("z-index",-1);
					    $("#file_upload_load-logo").css("z-index",-1);
					}else if(id == "clinic-shang1"){
						$("#clinic-shang1").addClass("successimg");
						$("#clinic-shang1 a").css("background",'url('+url+') no-repeat center center');
						$("#clinic-shang1 a").attr("value",url);
					}else if(id == "clinic-shang2"){
						$("#clinic-shang2").addClass("successimg");
						$("#clinic-shang2 a").css("background",'url('+url+') no-repeat center center');
						$("#clinic-shang2 a").attr("value",url);
					}else if(id == "clinic-shang3"){
						$("#clinic-shang3").addClass("successimg");
						$("#clinic-shang3 a").css("background",'url('+url+') no-repeat center center');
						$("#clinic-shang3 a").attr("value",url);
					}else if(id == "clicnic-add"){
						//反复添加
						var myhtml = $('<div class="upload_item" id="addload-imgs">'+
								'<img id="practicingRegister" style="display:none;">'+
								'<a class="upload add-img huanjingimg"></a>'+
								'<span class="shan-cha">×</span>'+
							'</div>');
							 $(".alltupian").append(myhtml);
							 $(".upload_item .add-img").css("background",'url('+url+') no-repeat center center');
							 $(".upload_item .add-img").attr("value",url);
							 $(".upload").removeClass("add-img");
					}
				
			 }
				removeLoad();
				//环境照片的删除
			   	$(".shan-cha").click(function(){
			   		$(this).parents("div.upload_item").remove();
			   	})
				$(".cancel-cha").click(function(){
					console.log(11);
					$(this).attr("src","");
					$("#submitFile_file_load-logo").css("z-index",0);
					$("#file_upload_load-logo").css("z-index",0);
				})
			}
		});
	}