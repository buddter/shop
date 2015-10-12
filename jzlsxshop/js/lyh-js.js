function Lhead2(){
	var oSpan=document.getElementById('lyh-nav-head2').getElementsByTagName('span');
	for(var i=0;i<oSpan.length;i++){
		oSpan[i].onmouseover=function(){
			for(var j=0;j<oSpan.length;j++){
				oSpan[j].style.color="";
			}
			this.style.color="rgb(169,0,0)";
		}
	}
}
Lhead2();
function Lcent1(){
	var oLi=document.getElementById('lyh-nav_cent1').getElementsByTagName('li');
	var oImg=document.getElementById('lyh-nav_cent1').getElementsByTagName('img');
	var oDiv=document.getElementsByName('lyh-name');
	var oDiv1=document.getElementById('lyh-nav_cent');
	var time=null;
	var arr=["rgb(245,166,48)","#709CFF","#2D7DF8","#001DDF","#3088FF"," #F6B446","#F34057","#FFE382","#FFCDAA","#FA3B6C","#031627","#1DCCCA","#B2CCE7","#54999E"];
	for(var i=0;i<oLi.length;i++){
		oLi[i].index=i;
		oLi[i].onmouseover=function(){
			for(var j=0;j<oLi.length;j++){
				oLi[j].style.background="";
				oImg[j].style.display="none"
				oDiv[j].style.display="none"
			}
		
			this.style.background="rgb(169,0,0)";
			oImg[this.index].style.display="block";
			oDiv[this.index].style.display="block";
			oDiv[this.index].style.background="rgba("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+",0.5)";
			oDiv1.style.background=arr[this.index]+" url(images/banner"+this.index+".jpg) no-repeat 268px 0px";
		
		}
	    oDiv[i].index=i
		oDiv[i].onmouseout=function(){
			
				oDiv[this.index].style.display='none';
			
		}
		oDiv[i].onmouseover =function(){
				oDiv[this.index].style.display='block';
		}
		
}
	
}
Lcent1();
function Lth(){
	var oSpan=document.getElementById('lyh-cnt0_l_th').getElementsByTagName('span');
	var oDiv1=document.getElementById('lyh-cnt0_l_tf1');
	var oDiv2=document.getElementById('lyh-cnt0_l_tf2');
	var oDiv3=document.getElementById('lyh-cnt0_l_tf3');
	var oDiv4=document.getElementById('lyh-cnt0_l_tf4');
	var oDiv5=document.getElementById('lyh-cnt0_l_tf5');
	var arr=[oDiv1,oDiv2,oDiv3,oDiv4,oDiv5];
	for(var i=0;i<oSpan.length;i++){
		oSpan[i].index=i;
		oSpan[i].onmouseover=function(){
			for(var j=0;j<oSpan.length;j++){
				oSpan[j].style.background="";
				oSpan[j].style.color="";
				arr[j].style.display="none"
			}
			this.style.color="rgb(206,16,24)";
			this.style.background="url(images/454.png) no-repeat 5px 43px";
			arr[this.index].style.display="block";
		}
	}
}
Lth(); 
function LthL(){
	var oDiv=document.getElementsByName("lyh-cnt0_l_tfL");
	var oDiv3=document.getElementsByName("lyh-cnt0_l_tfR");
	var oaa=document.getElementsByName("Lname");
	var oDiv1=document.getElementById('lyh-cnt0_l_tfL1');
	var oDiv2=document.getElementById('lyh-cnt0_l_tfL2');
	var time;
	var time1;
		oDiv2.innerHTML+=oDiv2.innerHTML;
		oDiv2.style.width=1544+'px';
	for (var i = 0; i < oDiv.length; i++) {
		oDiv[i].onclick=function(){
		clearInterval(time);
		time=setInterval(fn,1);
		function fn(){
			oDiv1.scrollLeft++;
			if(oDiv1.scrollLeft ==772){
						oDiv1.scrollLeft = 0;
					}
			if(parseInt(oDiv1.scrollLeft)%193==0){
						clearInterval(time);
					}	
			}
		}
	};
	for (var i = 0; i < oDiv.length; i++) {
		oDiv3[i].onclick=function(){
		clearInterval(time1);
		time1=setInterval(fn,1);
		function fn(){
			oDiv1.scrollLeft--;
			if(oDiv1.scrollLeft ==0){
						oDiv1.scrollLeft = 772;
					}
			if(parseInt(oDiv1.scrollLeft)%193==0){
						clearInterval(time1);
					}	
			}
		}
	}
}
LthL();
function LthR(){
	var oDiv=document.getElementsByName("lyh-cnt0_l_tbL");
	var oDiv3=document.getElementsByName("lyh-cnt0_l_tbR");
	var oaa=document.getElementsByName("Lname1");
	var oDiv1=document.getElementById('lyh-cnt0_l_tbL1');
	var oDiv2=document.getElementById('lyh-cnt0_l_tbL2');
	var time;
	var time1;
		oDiv2.innerHTML+=oDiv2.innerHTML;
		oDiv2.style.width=1544+'px';
	for (var i = 0; i < oDiv.length; i++) {
		oDiv[i].onclick=function(){
		clearInterval(time);
		time=setInterval(fn,1);
		function fn(){
			oDiv1.scrollLeft++;
			if(oDiv1.scrollLeft ==772){
						oDiv1.scrollLeft = 0;
					}
			if(parseInt(oDiv1.scrollLeft)%193==0){
						clearInterval(time);
					}	
			}
		}
	};
	for (var i = 0; i < oDiv.length; i++) {
		oDiv3[i].onclick=function(){
		clearInterval(time1);
		time1=setInterval(fn,1);
		function fn(){
			oDiv1.scrollLeft--;
			if(oDiv1.scrollLeft ==0){
						oDiv1.scrollLeft = 772;
					}
			if(parseInt(oDiv1.scrollLeft)%193==0){
						clearInterval(time1);
					}	
			}
		}
	}
}
LthR();
function Lbh(){
	var oSpan=document.getElementById('lyh-cnt0_l_bh').getElementsByTagName('span');
	var oDiv1=document.getElementById('lyh-cnt0_l_bf1');
	var oDiv2=document.getElementById('lyh-cnt0_l_bf2');
	var oDiv3=document.getElementById('lyh-cnt0_l_bf3');
	var oDiv4=document.getElementById('lyh-cnt0_l_bf4');
	var oDiv5=document.getElementById('lyh-cnt0_l_bf5');
	var arr=[oDiv1,oDiv2,oDiv3,oDiv4,oDiv5];
	for(var i=0;i<oSpan.length;i++){
		oSpan[i].index=i;
		oSpan[i].onmouseover=function(){
			for(var j=0;j<oSpan.length;j++){
				oSpan[j].style.background="";
				oSpan[j].style.color="";
				arr[j].style.display="none" 
			}
			this.style.color="#FFFFFF";
			this.style.background="rgb(196,0,0) url(images/lyh-jiantou_03.jpg) no-repeat bottom";
			arr[this.index].style.display="block";
		}
	}
}
Lbh();
function Lr_tt(){
	var oSpan=document.getElementById('lyh-cnt0_r_tt').getElementsByTagName('span');
	for(var i=0;i<3;i++){
		oSpan[i].onmouseover=function(){
			for(var j=0;j<3;j++){
				oSpan[j].style.background="";
				oSpan[j].style.borderBottom="1px solid rgb(221,221,221)";
				
			}
			this.style.background="white";
			this.style.borderBottom="0";
		}
	}
}
 Lr_tt();
 function L_r_gundong(){
 	var oMain=document.getElementById('lyh-cnt0_r_b');
 	var oInner=document.getElementById('lyh-cnt0_r_bi');
 	var oImgs= oInner.getElementsByTagName('img');
 	var timer1 = null,timer2 = null,timer3=null,timer4=null;
	function automove () {
			clearInterval(timer1);
			timer1 = setInterval(function(){
				if(oMain.scrollLeft == 1208){
					oMain.scrollLeft = 0;
				}
				if(parseInt(oMain.scrollLeft)%302==0){
					clearInterval(timer1);
					timer3 = setTimeout(function(){
						clock();
					},500)
				}
				oMain.scrollLeft++;
			},1)
	}
	oMain.onmouseover = function(){
		clearInterval(timer1);
		clearTimeout(timer3);
	}
	oMain.onmouseout = function(){
		clearInterval(timer1);
		clearTimeout(timer3);
		clock();
	}
	function clock(){
		automove();
	}
	clock();
}
L_r_gundong();
function Lcebian(){
	var oDiv=document.getElementById('lyh-cebian');
	var oDiv1=document.getElementById('lyh-l-cebian');
	var oTop=document.getElementById('lyh-cebian').getElementsByTagName('span')[0];
	var oClen=document.getElementById('lyh-cebian').getElementsByTagName('span')[3];
	var oTime=null;
	var v;
	window.onscroll=function(){
		var h=document.body.scrollTop || document.documentElement.scrollTop;
		if(h>500){
			oDiv.style.display="block";
			oDiv1.style.display="block"
		}else{
			oDiv.style.display="none";
			oDiv1.style.display="none";
		}if(h==0){
			clearInterval(oTime);
			}
		oTop.onclick=function(){
			v=document.body.scrollTop/100 || document.documentElement.scrollTop/100;
			clearInterval(oTime);
			oTime=setInterval(function(){
				document.body.scrollTop-=v;
				document.documentElement.scrollTop-=v;
				if(h==0){
					clearInterval(oTime);
				}
			},1);
		}
	}
	oClen.onclick=function(){
			oDiv.style.display="none";
		}
}
Lcebian();
function L1Ft(){
	var oSpan=document.getElementById('lyh-content1_1Ft').getElementsByTagName('span');
	var oDiv1=document.getElementById("lyh-content1_1Fb_R1");
	var oDiv2=document.getElementById("lyh-content1_1Fb_R2");
	var oDiv3=document.getElementById("lyh-content1_1Fb_R3");
	var oDiv4=document.getElementById("lyh-content1_1Fb_R4");
	var oDiv5=document.getElementById("lyh-content1_1Fb_R5");
	var oDiv6=document.getElementById("lyh-content1_1Fb_R6");
	var oDiv7=document.getElementById("lyh-content1_1Fb_R7");
	var oDiv8=document.getElementById("lyh-content1_1Fb_R8");
	var oDiv9=document.getElementById("lyh-content1_1Fb_R9");
	var arr=[oDiv1,oDiv2,oDiv3];
	for(var i=0;i<3;i++){
		oSpan[i].index=i;
		oSpan[i].onclick=function(){
			for(var j=0;j<3;j++){
				oDiv1.style.display="none";
				oDiv2.style.display="none";
				oDiv3.style.display="none";
				oSpan[j].style.background="";
				oSpan[j].style.color="";
			}
			this.style.background="rgb(23,180,187)";
			this.style.color="white";
			arr[this.index].style.display="block";
		}
	}
}
L1Ft();
function L2Ft(){
	var oSpan=document.getElementById('lyh-content1_1Ft2').getElementsByTagName('span');
	var oDiv4=document.getElementById("lyh-content1_1Fb_R4");
	var oDiv5=document.getElementById("lyh-content1_1Fb_R5");
	var oDiv6=document.getElementById("lyh-content1_1Fb_R6");
	var arr=[oDiv4,oDiv5,oDiv6];
	for(var i=0;i<3;i++){
		oSpan[i].index=i;
		oSpan[i].onclick=function(){
			for(var j=0;j<3;j++){
				oDiv4.style.display="none";
				oDiv5.style.display="none";
				oDiv6.style.display="none";
				oSpan[j].style.background="";
				oSpan[j].style.color="";
			}
			this.style.background="rgb(23,180,187)";
			this.style.color="white";
			arr[this.index].style.display="block";
		}
	}
}
L2Ft();
function L3Ft(){
	var oSpan=document.getElementById('lyh-content1_1Ft3').getElementsByTagName('span');
	var oDiv7=document.getElementById("lyh-content1_1Fb_R7");
	var oDiv8=document.getElementById("lyh-content1_1Fb_R8");
	var oDiv9=document.getElementById("lyh-content1_1Fb_R9");
	var arr=[oDiv7,oDiv8,oDiv9];
	for(var i=0;i<3;i++){
		oSpan[i].index=i;
		oSpan[i].onclick=function(){
			for(var j=0;j<3;j++){
				oDiv7.style.display="none";
				oDiv8.style.display="none";
				oDiv9.style.display="none";
				oSpan[j].style.background="";
				oSpan[j].style.color="";
			}
			this.style.background="rgb(23,180,187)";
			this.style.color="white";
			arr[this.index].style.display="block";
		}
	}
}
L3Ft();