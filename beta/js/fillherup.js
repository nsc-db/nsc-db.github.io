var kizunaArr = [60070502,60070501,60070402,60070401,60061202,
				 60061201,60060702,60060701]
var duoArr = [20070605,20070503,20070403,20070312,20070207,20060511]
var godArr = [20070607,20070502,20070404,20070307,20070304,20070209,
			  20070205,20070108,20070106,20061204,20061109,
			  20061104,20061009,20061004,20060910,20060905,
			  20060809,20060805,20060705,20060611,20060603,
			  20060510,20060415,20060407,20060312,20060308,
			  20060307,20060217,20060203,20041003]
 
var gkArr = [20070506,20070310,20070203,20070104,20061206,20061106,
			 20061006,20060810,20060806,20060707,20060606,
			 20060504,20060414,20060202]
 
var exArr = [20070405,20070208,20070107,20070105,20070103,
			 20061203,20061107,20061102,20060908,20060907,
			 20060902,20060804,20060803,20060709,20060706,
			 20060703,20060608,20060605,20060508,20060502,
			 20060409,20060305,20060218]
 
var originArr = [20070402,20070308,20070306,20070102,20061207,
				 20061105,20061007,20061003,20061002,20060909,
				 20060906,20060904,20060808,20060807,20060702,
				 20060607,20060604,20060602,20060410,20060406,
				 20060403,20060402,20060302,20060206,20060109]
				 
var destroyerArr = [20070504,20070305,20070302,20070202,20061202,
					20061108,20061008,20061005,20060903,20060802,
					20060609,20060507,20060506,20060405,20060404,
					20060309,20060306,20060214,20060209]

var limitedArr = [20070606,20070602,20070603]

var kizuna = ''
var duo = ''
var god = ''
var gk = ''
var ex = ''
var origin = ''
var destroyer = ''
var limited = ''
for(var x in kizunaArr){
	console.log(kizunaArr[x])
	kizuna += '<div class="unit-char col-md-2">'
		   + '<a href="unit/' + kizunaArr[x] + '/index.html"><img src="../common/assets/img/units/' + kizunaArr[x] + '_6.png" alt="" width="100%"></a>'
		   + '</div>'
}
for(var x in duoArr){
	console.log(duoArr[x])
	duo += '<div class="unit-char col-md-2">'
		   + '<a href="unit/' + duoArr[x] + '/index.html"><img src="../common/assets/img/units/' + duoArr[x] + '_6.png" alt="" width="100%"></a>'
		   + '</div>'
}
 
for(var x in godArr){
	console.log(godArr[x])
	god += '<div class="unit-char col-md-2">'
		   + '<a href="unit/' + godArr[x] + '/index.html"><img src="../common/assets/img/units/' + godArr[x] + '_6.png" alt="" width="100%"></a>'
		   + '</div>'
}
 
for(var x in gkArr){
	console.log(gkArr[x])
	gk += '<div class="unit-char col-md-2">'
		   + '<a href="unit/' + gkArr[x] + '/index.html"><img src="../common/assets/img/units/' + gkArr[x] + '_6.png" alt="" width="100%"></a>'
		   + '</div>'
}
for(var x in exArr){
	console.log(exArr[x])
	ex += '<div class="unit-char col-md-2">'
		   + '<a href="unit/' + exArr[x] + '/index.html"><img src="../common/assets/img/units/' + exArr[x] + '_6.png" alt="" width="100%"></a>'
		   + '</div>'
}
for(var x in originArr){
	console.log(originArr[x])
	origin += '<div class="unit-char col-md-2">'
		   + '<a href="unit/' + originArr[x] + '/index.html"><img src="../common/assets/img/units/' + originArr[x] + '_6.png" alt="" width="100%"></a>'
		   + '</div>'
}
for(var x in destroyerArr){
	console.log(destroyerArr[x])
	destroyer += '<div class="unit-char col-md-2">'
		   + '<a href="unit/' + destroyerArr[x] + '/index.html"><img src="../common/assets/img/units/' + destroyerArr[x] + '_6.png" alt="" width="100%"></a>'
		   + '</div>'
}
for(var x in limitedArr){
	console.log(limitedArr[x])
	limited += '<div class="unit-char col-md-2">'
		   + '<a href="unit/' + limitedArr[x] + '/index.html"><img src="../common/assets/img/units/' + limitedArr[x] + '_6.png" alt="" width="100%"></a>'
		   + '</div>'
} 
 
 
document.getElementById("kizuna").innerHTML = kizuna;
document.getElementById("duo").innerHTML = duo;
document.getElementById("god").innerHTML = god;
document.getElementById("gk").innerHTML = gk;
document.getElementById("ex").innerHTML = ex;
document.getElementById("origin").innerHTML = origin;
document.getElementById("destroyer").innerHTML = destroyer;
document.getElementById("limited").innerHTML = limited;