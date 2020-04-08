$('#username').focus(function(){
   if(/[a-z0-9A-Z]{1,14}/.test($('#username').val()) && !(/^[0-9]+$/.test($('#username').val()))) {
        $('#username-invalidate').html("")
   }
   else {
     if($('#username').val().length == 0) {
          $('#username-invalidate').html("用户名不能为空");
     }
     else {
          $('#username-invalidate').html("仅支持中英文数字和下划线，且不支持纯数字");

     }
        $('#username-invalidate').css("border:1px solid red")

   }
}
)
$('#username').blur(function(){
    if(/[a-z0-9A-Z]{1,14}/.test($('#username').val()) && !(/^[0-9]+$/.test($('#username').val()))) {
         $('#username-invalidate').html("")
    }
    else {
        
     if($('#username').val().length == 0) {
          $('#username-invalidate').html("用户名不能为空");
     }
     else {
          $('#username-invalidate').html("仅支持中英文数字和下划线，且不支持纯数字");

     }
 
    }
 }
 )
 function checkUsername(){
     if(/[a-z0-9A-Z]{1,14}/.test($('#username').val()) && !(/^[0-9]+$/.test($('#username').val()))) {
          $('#username-invalidate').html("");
          return true;
     }
     else {
          console.log(($('#username').val()).length);
          if($('#username').val().length == 0) {
               $('#username-invalidate').html("用户名不能为空");
          }
          else {$('#username-invalidate').html("仅支持中英文数字和下划线，且不支持纯数字");}
          $('#username').focus();
          return false;
  
     }
 }



function checkTell(num) {     
     if(/^1[3|4|5|8|9][0-9]\d{8}/.test(num)) {
          $('#tell-invalidate').html("");
          console.log('通过');
          return true;
     }
     else {
          if(num=='') {
               $('#tell-invalidate').html("请输入手机号");
          } 
          else {
               $('#tell-invalidate').html("请输入正确手机号");

          }
     }
}

$('#telephone').focusout(function() {
     checkTell($(this).val());
     console.log('focusout')

});

$('#telephone').blur(function(e) {
     checkTell($(this).val());
});


function checkPwd(str) {
     if(str.length <= 14 && str.length >= 8 && /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,12}$/.test(str)){ 
          console.log('successs');
          $('#pwd-invalidate').html('')
          return true;
     }
     else {
          if(str == '') {
               $('#pwd-invalidate').html('密码不能为空')
               
          }
          else {
               $('#pwd-invalidate').html('请输入8-14位字符，有特殊字符和数字和字母中的一种，且不含空格和汉字')
          }
          return false;
     }
}

$("#pwd").focus(function() {
     checkPwd($('#pwd').val());
});

$("#pwd").blur(function() {
     checkPwd($('#pwd').val());
});

$('#get').click(function() {
     console.log('点击按钮');
     if(/^1[3|4|5|8|9][0-9]\d{8}/.test($('#telephone').val())) {
          console.log('123');
          btnCheck();
          
     }
     else {
          $('#telephone').focus();
          $('#tell-invalidate').html("请输入正确手机号");
          console.log('test');
     }
})

function btnCheck() {
     $(this).addClass('on');
     var time = 5;
     $(this).attr('disabled',true);
     var timer = setInterval(function(){
          if(time == 0) {
               clearInterval(timer);
               $('#get').attr("disabled",false);
               $('#get').html('获取验证码');
               $('#get').removeClass('on');

          }else {
               $('#get').html("重新发送"+"("+time + ")");
               time -- ;
          }
     },1000);
}
function checkIden(str) {
     if(str.length == 0) {
          $('#iden-invalidate').html('验证码不能为空');
     }
     else {
          $('#iden-invalidate').html('请输入正确验证码');
          
     }
}
$('#btn').click(function(){
     if(!checkUsername()) {
          return true;
     }
     if(!checkTell($('#telephone').val())) {
          $('#telephone').focus();
     }
     if(!checkPwd($('#pwd').val())) {
          $('#pwd').focus();
     }
     if(!checkIden($('#iden').val())) {

     }

     
})
