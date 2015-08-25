var login_url=null; //初始化连接

/**
 * 弹出发送验证码框前检查手机号是否合法
 */
function common_showMobileSend() {
	var mobile = $('#hmstar_header_box_register_form_mobile').val();
	if(!/^1\d{10}$/.test(mobile)) {
		popBox('请填写正确的手机号码','error')
		return false;
	}
	$('#hmstar_header_box_form_gettelcode').modal({
	    backdrop: 'static'
	  })
	$('#hmstar_header_box_form_gettelcode').modal('show');
}

$(document).ready(function(){
	/**
	 * 注册
	 */
	$.formValidator.initConfig({formid:"hmstar_header_box_register_form",validatorgroup:"99",onerror:function(msg){/*popBox(msg,'error');*/return false;},onsuccess:function(){
		if(!$("input[type='checkbox'][id='hmstar_header_box_register_form_xieyi_input_value']").is(':checked')) {
			popBox('请选择注册协议后再提交','info');return false;
		}
		$('#register_button').attr('disabled', 'disabled');
		$.post("/hmstar/user/add",{mobile:$('#hmstar_header_box_register_form_mobile').val(),mobilecode:$('#hmstar_header_box_register_form_telcode').val(),password:$('#hmstar_header_box_register_form_password').val(),xieyi:$('#hmstar_header_box_register_form_xieyi_input_value').val(),btn_submit:'register'},function(data){
			if(data.status==1) {
				//执行回调地址
				$("body").append(data.data);
				popBox(data.msg,'success',2);
				setTimeout(function(){window.location.reload();},2000)
			} else {
				$('#register_button').removeAttr('disabled');
				popBox(data.msg,'error');
			}
		})
		return false;
	}});
	$("#hmstar_header_box_register_form_mobile").formValidator({validatorgroup:"99",onshow:"请输正确的11位手机号码",onfocus:"请输入正确的手机号码",oncorrect:"该手机号可以注册"})
		.inputValidator({min:11,max:11,onerror:"你输入的手机号非法,请确认"})
		.functionValidator({
			fun:function(val, obj){
				var res = /^1\d{10}$/.test(val);
				if(res==false) {
					return false;
				}
				return true;
			},
			onerror : "手机号码格式不正确"
		})
		.ajaxValidator({
			type : "get",
			url : "/hmstar/user/checkmobile",
			datatype : "json",
			success : function(data){
				if( data.status == "1" ) {
					return true;
				} else {
					return false;
				}
			},
			buttons: $("#button"),
			error: function(){ popBox('服务器没有返回数据，可能服务器忙，请重试','error');},
			onerror : "手机号码格式不正确或手机号已存在",
			onwait : "正在对手机号进行合法性校验，请稍候..."
		});
	$("#hmstar_header_box_register_form_telcode").formValidator({validatorgroup:"99",onshow:"请输入手机验证码",onfocus:"手机验证码不能为空",oncorrect:" "}).inputValidator({min:1,empty:{leftempty:false,rightempty:false,emptyerror:"手机验证码不能有空符号"},onerror:"手机验证码不能为空,请确认"});
	$("#hmstar_header_box_register_form_password").formValidator({validatorgroup:"99",onshow:"请输入密码",onfocus:"密码不能为空",oncorrect:" "}).inputValidator({min:6,empty:{leftempty:false,rightempty:false,emptyerror:"密码两边不能有空符号"},onerror:"密码不能为空,请确认"});
	/**
	 * 登陆
	 */
	$.formValidator.initConfig({formid:"hmstar_header_box_login_form",validatorgroup:"98",onerror:function(msg){},onsuccess:function(){
		var remembername = 0;
		if($("input[type='checkbox'][name='remembername']").is(':checked')) {
			remembername = 1;
		}
		$('#login_button').attr('disabled', 'disabled');
		$.post('/hmstar/user/signin',{username:$('#hmstar_header_box_login_form_usename').val(),password:$('#hmstar_header_box_login_form_password').val(),btn_submit:'login',remembername:remembername},function(data){
			if(data.status==1) {
				function successJump() {
					if(login_url) {
						setTimeout(function(){window.location.href=login_url;},2000)
					} else {
						setTimeout(function(){window.location.reload();},2000)
					}
                }
				popBox(data.msg,'success',2);successJump();
			} else if(data.status=='-5') {
				$('#login_button').removeAttr('disabled', 'disabled');
				popBox(data.msg,'info');
			}else {
				$('#login_button').removeAttr('disabled', 'disabled');
				popBox(data.msg,'error');
			}
		})
		return false;
	}});
	$("#hmstar_header_box_login_form_usename").formValidator({validatorgroup:"98",onshow:"请输入用户名或者手机号码",onfocus:"请输入正确的用户名或手机号码",oncorrect:" "})
		.inputValidator({min:6,empty:{leftempty:false,rightempty:false,emptyerror:"用户名两边不能有空符号"},onerrormin:'用户名长度最少6位',onerror:"用户名不能为空,请确认"})
		.functionValidator({
			fun:function(val,obj){
				var reg = /^1[0-9]d{9}$/; //手机
				var reg2 = /^[a-zA-Z0-9]{6,30}$/; //用户名
				var reg3  = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/; //邮箱
				if(val[0]==0 || (!reg.test($.trim(val)) && !reg2.test($.trim(val)) && !reg3.test($.trim(val))) ) {
					return false;
				}
				return true;
			},
			onerror : "请输入正确的用户名或手机号码"
		});
	$("#hmstar_header_box_login_form_password").formValidator({validatorgroup:"98",onshow:"请输入密码",onfocus:"密码不能为空",oncorrect:" "}).inputValidator({min:6,empty:{leftempty:false,rightempty:false,emptyerror:"密码两边不能有空符号"},onerrormin:'密码最少6位',onerror:"密码不能为空,请确认"});

	/**
	 * 显示登录
	 */
    $('.ajax_login').unbind("click");
	$('.ajax_login').live("click", function(){
		var url = $(this).attr('href'); //获取点击的链接
		if(url) {
			login_url = url;
		}
		hmstar_common_show_user();
		return false;
	});
	/**
	 * 登录事件
	 */
	$('#login_button').click(function(){
		return jQuery.formValidator.pageIsValid(98);
	})
	/**
	 * 注册事件
	 */
	$('#register_button').click(function(){
		return jQuery.formValidator.pageIsValid(99);
	})
});

/**
 * 显示登隐藏注册
 */
function showLogin() {
	$('#hmstar_header_box_register_li').removeClass('hmstar_header_box_login_li_now');
	$('#hmstar_header_box_login_li').addClass('hmstar_header_box_login_li_now');
	$('#hmstar_header_box_register_form').hide();
	$('#hmstar_header_box_login_form').show();
}
/**
 * 显示注册隐藏登陆
 */
function showRegister() {
	$('#hmstar_header_box_login_li').removeClass('hmstar_header_box_login_li_now');
	$('#hmstar_header_box_register_li').addClass('hmstar_header_box_login_li_now');
	$('#hmstar_header_box_login_form').hide();
	$('#hmstar_header_box_register_form').show();
}

/**
 * 登录/注册
 */
function hmstar_common_show_user(type, url) {
	type = type ? type : 'login';
	url = url ? url : '';
	if(url) {
		setCookie('loginsuccjump_url', url, 1);
	}
	if(type=='register') {
	   showRegister();
	} else {
	   showLogin();
	}
	$('#hmstar_header_box_login').modal({
		backdrop: 'static'
	})
	$('#hmstar_header_box_login').modal('show');
}