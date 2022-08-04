var nav1 = document.getElementById('navleft').children
for(var i=0;i<nav1.length;i++){
    nav1[i].onclick=function(){
        for(t=0;t<nav1.length;t++){
            nav1[t].removeAttribute('class')
        }
        this.setAttribute('class','navcurrent')
        // return false;
    }
}
var nav2 = document.getElementById('navright').children
for(var i=0;i<nav2.length;i++){
    nav2[i].onclick=function(){
        for(t=0;t<nav2.length;t++){
            nav2[t].removeAttribute('class')
        }
        this.setAttribute('class','navcurrent')
        return false
    }
}

//城市模态窗口打开关闭
opencity.onclick=function(e){
    opencitydiv.setAttribute('class','city opencity')
    shade.style.display = "block";
    e.stopPropagation();
    e.preventDefault();
}
//点击空白处关闭，document获取整个页面
document.onclick=function(e){
    opencitydiv.setAttribute('class','city opencity2')
    longinbox.style.display = "none";  
    regiterbox.style.display = "none";
    shade.style.display = "none"; 
}
//document获取整个页面后，要给div增加点击事件
opencitydiv.onclick=function(e){
    opencitydiv.style.display = "block";
    shade.style.display = "block";  
    e.stopPropagation();
}
closediv.onclick=function(){
    opencitydiv.setAttribute('class','opencity2')
    shade.style.display = "none";
}



//城市排他
var listcitynav=document.getElementById('navcity').children
var listcity = document.getElementById('opencitybox').children
for(var i=0;i<listcitynav.length;i++){
   listcitynav[i].setAttribute('index',i)
   listcitynav[i].onclick=function(){
        var c=this.getAttribute('index')
        for(t=0;t<listcitynav.length;t++){
           listcitynav[t].removeAttribute('class')
           listcity[t].setAttribute('class','opencitybox1') 
        }
        listcity[c].setAttribute('class','opencitybox1 mycurrent2')
        this.setAttribute('class','mycurrent1')
    }
}

// 立即登录按钮点击事件
loginbtn.onclick=function(e) {
    longinbox.style.display = "block";
    shade.style.display = "block";    
    e.stopPropagation();
    e.preventDefault();
}
//点击空白处关闭，document获取整个页面
document.onclick=function(e){
    opencitydiv.setAttribute('class','city opencity2')
    longinbox.style.display = "none";  
    regiterbox.style.display = "none";
    shade.style.display = "none"; 
}
//document获取整个页面后，要给div增加点击事件
longinbox.onclick=function(e){
    longinbox.style.display = "block";
    shade.style.display = "block";  
    e.stopPropagation();
}
// 关闭模态框事件
exit.onclick=function(e) {
    shade.style.display = "none";
    longinbox.style.display = "none";
    e.stopPropagation();
}

// 立即注册按钮点击事件
regieterbtn.onclick=function(e) {
regiterbox.style.display = "block";
shade.style.display = "block";    
    e.stopPropagation();
    e.preventDefault();
}

regiterbox.onclick=function(e){
    regiterbox.style.display = "block";
    shade.style.display = "block";  
    e.stopPropagation();
}
// 关闭模态框事件
exit2.onclick=function(e) {
    shade.style.display = "none";
    regiterbox.style.display = "none";
    e.stopPropagation();
}










// 下载二维码
var zip=document.getElementById('zip').children;
for(var i=0;i<zip.length;i++){
    zip[i].onmouseenter=function(){

        if(this.children.length!=0){
            this.children[0].style.display='inline-block'
        }
    }
    zip[i].onmouseleave=function(){
        if(this.children.length!=0){
            this.children[0].style.display='none'
        }
    }
}