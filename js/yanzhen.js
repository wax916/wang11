var yanzhen = function(){
		var rex = /^([A-Za-z]|[\u4E00-\u9FA5])+$/;
	   		var qy_person = $("#txtuserName").val();
	   		if(rex.test(qy_person)==false){
				$(".wrong1").css("display","block");
				$("#txtuserName").addClass("txt-error");
			}else{
				$(".wrong1").css("display","none");
				$("#txtuserName").removeClass("txt-error");
			}
			//上传的logo
			if($(".logo-img img").attr("src") == ""){
				$(".clinic-load").addClass("txt-error");
			}else{
				$(".clinic-load").removeClass("txt-error");
			}
			//执业许可编号
			if($("#practicingLicenseNo").val() == ""){
				$("#practicingLicenseNo").addClass("txt-error");
			}else{
				$("#practicingLicenseNo").removeClass("txt-error");
			}
			//区县请选择的验证
			var myyan = $('#selDistrict option:selected').val();
			if(myyan == 0){
				$("#selDistrict").addClass("txt-error");
			}else{
				$("#selDistrict").removeClass("txt-error");
			}
			//详细门牌号
			var myyan1 = $('#suggestId').val();
			if(myyan1 == ""){
				$("#suggestId").addClass("txt-error");
			}else{
				$("#suggestId").removeClass("txt-error");
			}
			//手机号码
			var myyan2 = $('#mobile').val();
			var res = /^1[34578][0-9]{9}$/;
			console.log(res.test(myyan2))
			if(myyan2 == ""){
				$("#mobile").addClass("txt-error");
			}else if(res.test(myyan2) == false){
				$("#mobile").addClass("txt-error");
			}else{
				$("#mobile").removeClass("txt-error");
			}
			//医疗机构许可1
			if($("#clinic-shang1").hasClass("successimg")){
				$("#clinic-shang1").removeClass("txt-error");
			}else{
				$("#clinic-shang1").addClass("txt-error");
			}
			
			//医疗机构许可2
			if($("#clinic-shang2").hasClass("successimg")){
				$("#clinic-shang2").removeClass("txt-error");
			}else{
				$("#clinic-shang2").addClass("txt-error");
			}
			
			//医疗机构许可1
			if($("#clinic-shang3").hasClass("successimg")){
				$("#clinic-shang3").removeClass("txt-error");
			}else{
				$("#clinic-shang3").addClass("txt-error");
			}
	}