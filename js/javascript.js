var oSlidePic = document.getElementById('slidePic');
var aSPLis = oSlidePic.getElementsByTagName('li');
var oSlideBtn = document.getElementById('slideBtn');
var aSBLis = oSlideBtn.getElementsByTagName('li');

var e=0;
aSPLis[e].style.opacity = '1';

for(var i=0;i<aSBLis.length;i++){
	aSBLis[i].index = i;
	aSBLis[i].onclick = function(){
		for(var i=0;i<aSBLis.length;i++){
			aSBLis[i].className = '';
			animate(aSPLis[i],{'opacity':0});
//          aSPLis[i].style.opacity = 0;
		}
		this.className = 'slide-btn-active';
		animate(aSPLis[this.index],{'opacity':100});
//      aSPLis[this.index].style.opacity = 1;
        e=this.index;
	}
	
}

function slidePic(){
	var j=e;
	e<aSPLis.length-1?e++:e=0;
	animate(aSPLis[j],{'opacity':0});
	animate(aSPLis[e],{'opacity':100});
//  aSPLis[j].style.opacity = 0;
//  aSPLis[e].style.opacity = 1;
	aSBLis[j].className = '';
	aSBLis[e].className = 'slide-btn-active';
	
}
var timer = null;
var timer1 = null;
var timer2 = null;
clearInterval(timer1)
timer1 = setInterval(slidePic,3000);


var oChooseNav = document.getElementById('chooseNav');
var aAs = oChooseNav.getElementsByTagName('a');
var oChooseBg = document.getElementById('chooseBg');
var oUls = document.getElementById('slideContent').getElementsByTagName('ul');

var arr = [];


oUls[0].style.display = 'block';


for(var i=0;i<aAs.length;i++){
	arr.push(aAs[i].offsetWidth);
	
}

for(var i=0;i<aAs.length;i++){
	var sum = '';
	aAs[i].index = i;
	
	aAs[i].onmouseover = function(){
		var a = this.index
		var sum = 0;
		for(var i=0;i<aAs.length;i++){
			aAs[i].style.color = '#5a5a5a';
			oUls[i].style.display = 'none';
			clearTimeout(timer2);
		}
		oUls[this.index].style.display = 'block';
		for(var j=0;j<this.index;j++){
			sum += arr[j];
		}
		timer2 = setTimeout(function(){
			aAs[a].style.color = '#ffffff';
		},300)
		
//		console.log(sum)
    	switch(this.index){
    		case 0:animate(oChooseBg,{'left':sum});break;
    		case 1:animate(oChooseBg,{'left':sum+(arr[1]-arr[0])/2});break;
    		case 2:animate(oChooseBg,{'left':sum+(arr[1]-arr[0])/2});break;
    		case 3:animate(oChooseBg,{'left':sum});break;
    	}
	}
}

//var oBtnLeft = document.getElementById('btnLeft');
//var oBtnRigth = document.getElementById('btnRight');
//
//oBtnRigth.onclick = function(){
//	if(oUls[0].offsetLeft>=894){
//		oUls[0].style.left = 0;
//	}if(oUls[0].offsetLeft<894){
//		oUls[0].style.left = 894 + 'px';
//	}
//}

var oInform = document.getElementById('inform');
var aPs =  oInform.getElementsByTagName('p');

var timer3 = null;
clearInterval(timer3);
timer3 = setInterval(function(){
	var target = aPs[0].offsetTop-aPs[0].parentNode.offsetHeight;
	if(target<=-aPs[0].offsetHeight){
		animate(aPs[0],{'top':0})
	}else{
		animate(aPs[0],{'top':target})
	}
	
},2000)
//alert(aPs[0].offsetHeight)
