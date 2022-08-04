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

// -----------------------------------
var box=document.getElementById('box');
// a.children  选择a的子级 得到的是类数组
var list=document.getElementById('list').children
var div = document.getElementById('img2')
var num=0;
var timer 
timer =setInterval(function(){
    num++;
    if(num==6){num=0};
    
    // 移动
    box.style.transition='all 1s'
    box.style.transform='translateX('+-num*1200+'px)';

    for(t=0;t<list.length;t++){
            list[t].removeAttribute('class')
    }
    // 圆点变色
    list[num].setAttribute('class','current')
    },2000)

    // 鼠标移入移出
    div.onmouseenter=function(){
        clearInterval(timer)
    }
    div.onmouseleave=function(){
        timer =setInterval(function(){
        num++;
        if(num==6){num=0};
        
        // 移动
        box.style.transition='all 1s'
        box.style.transform='translateX('+-num*1200+'px)';

        for(t=0;t<list.length;t++){
                list[t].removeAttribute('class')
        }
        // 圆点变色
        list[num].setAttribute('class','current')
        },2000)
    }

//点击圆点，移动图片，圆点自身变色
var li1=document.getElementById('list').children
var li2=document.getElementById('box').children
 for(var i=0; i<li1.length; i++){
    li1[i].setAttribute('index',i)
    li1[i].onclick=function(){
        num = this.getAttribute('index')
        for(j=0; j<li1.length; j++){
            
            li1[j].removeAttribute('class')
        }
        box.style.transition='all 1s'
        box.style.transform='translateX('+-num*1200+'px)';

        this.setAttribute('class','current')
    }
 }

// 左右按钮点击
var left = document.getElementById('left')
var right = document.getElementById('right')

left.onclick=function(){
    num--
    if(num==-1){num=5};
    box.style.transition='all 1s'
    box.style.transform='translateX('+-num*1200+'px)';
    for(var i=0;i<li1.length; i++){
        li1[i].removeAttribute('class')
    }
    li1[num].setAttribute('class','current')
}

right.onclick=function(){
    num++
    if(num==6){num=0};
    box.style.transition='all 1s'
    box.style.transform='translateX('+-num*1200+'px)';
    for(var i=0;i<li1.length; i++){
        li1[i].removeAttribute('class')
    }
    li1[num].setAttribute('class','current')
}
// --------------------------------------------------
//排行榜
var div1 = document.getElementsByClassName('box2one')
var div2 = document.getElementsByClassName('box2two')
var list1 = document.getElementById('box2').children
for(var i=0; i<div1.length; i++){
    list1[i].onmouseenter=function(){
        for(var j=0; j<div1.length; j++){
            div1[j].style.display='block'  
            div2[j].style.display='none'
        }
        this.children[0].style.display='none'
        this.children[1].style.display='block'
    }
}
// ---------------------------------------------------
//正在热映
var selectcar = document.getElementById('hot').children
var selectshow = document.getElementById('hot2').children
for(var i=0; i<selectcar.length; i++){
    selectcar[i].setAttribute('index',i)
    selectcar[i].onclick=function(){
        var c = this.getAttribute('index')
        for(var j=0; j<selectcar.length;j++){
            selectcar[j].removeAttribute('class')
            selectshow[j].setAttribute('class','lefttoptwo')
        }
        selectshow[c].setAttribute('class','lefttoptwo current')
        this.setAttribute('class','current1')
    }
}
// -----------------------------------------------------------
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