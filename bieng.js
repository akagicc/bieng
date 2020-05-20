
function tucengjianyi(x)
{

document.getElementById(x).style.zIndex=99;
}



function duihuashangfu(x)
{
	

document.getElementById(x).style.zIndex=50;
}

function duihuaxiachen(x)
{

document.getElementById(x).style.zIndex=-50;
}

function beijingshangfu(x)
{
	

document.getElementById(x).style.zIndex=10;
}

function beijingxiachen(x)
{

document.getElementById(x).style.zIndex=-10;
}
function lihuishangfu(x)
{
	

document.getElementById(x).style.zIndex=30;
}
function lihuixiachen(x)
{
	

document.getElementById(x).style.zIndex=-30;
}

function tucengshangfu1(x)
{
	i=document.getElementById(x).style.zIndex;
	i=i+100;

document.getElementById(x).style.zIndex=i;
}

function tucengxiachen1(x)
{
i=document.getElementById(x).style.zIndex;
	i=i-100;

document.getElementById(x).style.zIndex=i;
}


function donghuabeng(x){
document.getElementById(x).classList.add("animated", "bounce");
}

function donghuadou(x){
document.getElementById(x).classList.add("animated", "shake");
}

function baocunjindu(){
if(!window.localStorage){
    alert("浏览器不支持存档系统，求求你换个现代的浏览器吧");
}else{
    var storage=window.localStorage;
    //写入a字段
    storage["a"]=jindu;
    //写入b字段
    storage.b=1;
    //写入c字段
    storage.setItem("jd",jindu);
    console.log(typeof storage["a"]);
    console.log(typeof storage["b"]);
    console.log(typeof storage["jd"]);
    
}
}
function jixujindu(){
	if(!window.localStorage){
	    alert("浏览器不支持存档系统，求求你换个现代的浏览器吧");
	}else{
	var storage=window.localStorage;
//第一种方法读取
    var a=storage.a;
    console.log(a);
    //第二种方法读取
    var b=storage["b"];
    console.log(b);
    //第三种方法读取
    var jdid=storage.getItem("jd");
   
	alert("当前的进度代码"+localStorage.jd+"跳转目标为"+jindutiaozhuan(jdid)+"仅为测试用，发布应删掉警示框");
	duihuaxiachen("duihua_0");
	function jindutiaozhuan(){
		var tzid;
		
	
		tzid="duihua_"+jdid;
		return tzid;
	}
	duihuashangfu(jindutiaozhuan(jdid));
	}
	}
	/*
	if(tzid=jdid){
		var tzidzf;
		tzidzf="duihua_"+tzid;
		duihuashangfu(tzidzf);
	}
	
	
	}
	}
	if(jdid=2){
		duihuashangfu("duihua_1");
	if(jdid=3){
		duihuashangfu("duihua_2");
	if(jdid=4){
		duihuashangfu("duihua_3");
	if(jdid=5){
		duihuashangfu("duihua_4");
	if(jdid=6){
		duihuashangfu("duihua_5");
	if(jdid=7){
		duihuashangfu("duihua_6");
	if(jdid=8){
		duihuashangfu("duihua_7");
	if(jdid=9){
		duihuashangfu("duihua_8");							
	}
	*/
