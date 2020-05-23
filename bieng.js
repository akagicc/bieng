


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
//只要在立绘的class里加入动画效果的class就行，每次只会执行新加入的
function donghuadou(x){
document.getElementById(x).classList.add("animated", "shake");
}

function baocunjindu(){
if(!window.localStorage){
    alert("浏览器不支持存档系统，求求你换个现代的浏览器吧");
}else{
    var storage=window.localStorage;
    //写入a字段
    storage["a"]=jindu;//没啥用，就是告诉你也可以用其他方式存数据，我从教程网站复制的，教程建议用第三种
    //写入b字段
    storage.b=1;
    //写入c字段
    storage.setItem("jd",jindu);
    console.log(typeof storage["a"]);
    console.log(typeof storage["b"]);
    console.log(typeof storage["jd"]);
	alert("将会储存当前章节的进度，之后在章节初始化界面点击继续即可回到当前进度。不同的章节有不同的进度存档，同时存档会覆盖之前所存储的此章节存档。注意储存的是此次游玩的进度而不是点击储存时所处的进度，后退后无需返回最新进度再保存。");
    
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
	最无脑的存档方法，只要数数别数错了，肯定不会出bug，就是写着麻烦
	不过存档和其他功能联系不大，用函数简化更好
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
   //bgm和配音列表，也可以写在对话界面
 var bgm1= new Audio("../music/May'n - ダイアモンド クレバス.mp3");//路径写上mp3文件在项目中的相对路径
  bgm1.volume=0.05;//volume是设定音量，0-1
 
  var bgm2= new Audio("../music/Play_Song.mp3");
  bgm2.volume=0.05;//
  //每句话的配音，其实也可以写在对话的界面，和每句话写在一起，如果剧本上就有数字编号，那写在外部最好，因为这些编号定好基本就不改了
  //如果要加新的对话，可以把id写成小数、分数，比如50和51之间想加一句话的话，就写50.5吧
  var peiyin1= new Audio("../music/peiyin1.m4a");
  var peiyin2= new Audio("../music/peiyin1.m4a");
  var peiyin3= new Audio("../music/peiyin1.m4a");
  var peiyin4= new Audio("../music/peiyin1.m4a");
  var peiyin5= new Audio("../music/peiyin1.m4a");
  var peiyin6= new Audio("../music/peiyin1.m4a");
  var peiyin7= new Audio("../music/peiyin1.m4a");
  var peiyin8= new Audio("../music/peiyin1.m4a");
  var peiyin9= new Audio("../music/peiyin1.m4a");
  var peiyin10= new Audio("../music/peiyin1.m4a");
  var peiyin11= new Audio("../music/peiyin1.m4a");
  var peiyin12= new Audio("../music/peiyin1.m4a");
  
  function 
   
