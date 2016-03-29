$("#event_manage_audit").click(function(){
    location.href='Member_audit.html?sauthtoken='+ a+'&tid='+d;
});
$(".title_back").click(function(){
//  window.location.href=document.referrer;   //返回刷新
	window.history.back();       //返回不刷新
});
$("#event_manage_fund").click(function(){
    location.href="Fund_manage.html"
});
$("#event_manage_member").click(function(){
    location.href='Member_manage.html?sauthtoken='+ a+'&tid='+d;
});
$("#club_manage_editor").click(function(){
    location.href='Editor_club.html?sauthtoken='+ a+'&parenteid='+ b +'&fid='+c
});
$("#club_manage_create").click(function(){
    location.href='Release_event.html?sauthtoken='+ a +'&fid='+c
});
$(".title_close").click(function(){
	//  window.location.href=document.referrer;   //返回刷新
	window.close();       //返回不刷新
    //javascript:window.opener=null;//非弹出窗体关闭
    //window.open('','_self');
    //window.close()
});
$("#club_manage_member").click(function(){
    location.href='Club_member.html?sauthtoken='+ a +'&fid='+c
});












