var moneyspent = 0
var gemspent = 0
var summonsdone = 0
var multidone = 0
var feature = [60071001]
var kizuna = [60070601, 60070501, 60070401, 60061201, 60060701]
var fpull = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var flpull = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var seven90 = [20070807, 20070806, 20070805, 20070706, 20070609, 20070607, 20070506, 20070502, 20070404, 20070310];
var fourpull = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];	 
var lp = [20050505];
var threepull =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var six90 = [20051202, 20051109, 20051103, 20051003, 20050916, 20050905, 20050826, 20050825, 20050824,
	20050823, 20050822, 20050821, 20050820, 20050715, 20050714, 20050703, 20050603, 20050506,
	 20050503, 20050303, 20050211, 20041203];
var twopull = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fourty = [20060706, 20060703, 20060702, 20060608, 20060607, 20060604, 20060602, 20060508, 20060507, 20060410,
			  20060403, 20060402, 20060305, 20060302, 20060218, 20060113, 20060109, 20060107, 20060105, 20051212, 
			  20051211, 20051210, 20051203, 20051113, 20051112, 20051008, 20051007, 20051006, 20051004, 20050914];
var narutokizuna = [60070601, 60070401, 60060701]
var sevenNaruto = [20070706, 20070209, 20061004, 20060414, 20051005]
var sixNaruto = [20050820, 20050503, 20050103, 20040802]
var fourtyNaruto = [20060703, 20060410, 20051211, 20050813, 20050717, 20050716, 20050408, 20041006, 20031011]
var onepull = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var five = []
var fivepull = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
	,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var four = []
var rates = 104
var rates2 = 208
var rates3 = 408
var length = createPool(five, four);
var featureUnit = ''
var kizunaUnit = ''
var fourUnit = ''
var threeUnit = ''
var twoUnit = ''
var oneUnit = ''
var fiveUnit = ''
for(var x = 0; x < feature.length; x++){
	featureUnit += '<td><img id="f' + x + 'img" src="./../../../common/assets/img/units/icons/thumb_' + feature[x] + '_7.png" width="75"></td>' + 
	'<td id="f' + x + 'p">0</td>'
}
for(var x = 0; x < kizuna.length; x++){
	kizunaUnit += '<td><img id="4l' + x + 'img" src="./../../../common/assets/img/units/icons/thumb_' + kizuna[x] + '_7.png" width="75"></td>' + 
	'<td id="4l' + x + '">0</td>'
}

for(var x = 0; x < seven90.length; x++){
	fourUnit += '<td><img id="4' + x + 'img" src="./../../../common/assets/img/units/icons/thumb_' + seven90[x] + '_7.png" width="75"></td>' + 
	'<td id="4' + x + '">0</td>'
}

for(var x = 0; x < lp.length; x++){
	threeUnit += '<td><img id="3' + x + 'img" src="./../../../common/assets/img/units/icons/thumb_' + lp[x] + '_7.png" width="75"></td>' + 
	'<td id="3' + x + '">0</td>'
}

for(var x = 0; x < six90.length; x++){
	if(x % 10 == 0){
		twoUnit += '</table><table>'
	}
	twoUnit += '<td><img id="2' + x + 'img" src="./../../../common/assets/img/units/icons/thumb_' + six90[x] + '_7.png" width="75"></td>' + 
	'<td id="2' + x + '">0</td>'
}

for(var x = 0; x < fourty.length; x++){
	if(x % 10 == 0){
		oneUnit += '</table><table>'
	}
	oneUnit += '<td><img id="1' + x + 'img" src="./../../../common/assets/img/units/icons/thumb_' + fourty[x] + '_7.png" width="75"></td>' + 
	'<td id="1' + x + '">0</td>'
}
for(var x = 0; x < five.length; x++){
	if(x % 10 == 0){
		fiveUnit += '</table><table>'
	}
	fiveUnit += '<td><img id="5' + x + 'img" src="./../../../common/assets/img/units/icons/thumb_' + five[x] + '.png" width="75"></td>' + 
	'<td id="5' + x + '">0</td>'
}
document.getElementById("feature-unit").innerHTML = featureUnit;
document.getElementById("kizuna-unit").innerHTML = kizunaUnit;
document.getElementById("7s-unit").innerHTML = fourUnit;
document.getElementById("lp-unit").innerHTML = threeUnit;
document.getElementById("6s-unit").innerHTML = twoUnit;
document.getElementById("40c-unit").innerHTML = oneUnit;
document.getElementById("5-unit").innerHTML = fiveUnit;

function singleSummon(){
	var single = document.getElementById("single");
	var multi = document.getElementById("multi");
	moneyspent+= 3
	gemspent+= 5
	summonsdone++
	var card;
	var roll =[];
	var id =[];
	var summon = Math.floor(Math.random()* 999);
	var roll = summon;

	//Feature
	if(summon >= 100 && summon < 104){
		var size = getLength(feature);
        summon = Math.floor(Math.random()* (size));

        card = feature[summon] + '_7';
        fpull[summon] = fpull[summon] + 1
        id.push(card);
        $('#char').attr('style', 'background: linear-gradient(to bottom right,red,magenta,blue,aqua,lime,yellow,red) border-box;box-shadow: 2px 2px 5px 2px red, -3px 2px 5px 2px magenta, -3px -2px 5px 2px blue, 3px -2px 5px 2px aqua, 3px 2px 5px 2px lime, -3px 2px 5px 2px yellow, -3px -2px 10px 2px red, 2px 2px 5px 2px rgba(0,0,0,0);'); 

	}
	//kizuna
	else if(summon >= 410 && summon < 418){
		var size = getLength(kizuna);
		summon = Math.floor(Math.random()* (size));

		card = kizuna[summon] + '_6';
		flpull[summon] = flpull[summon] + 1
		id.push(card);
        $('#char').attr('style', 'background: linear-gradient(to bottom right,gold,white, gold) border-box;box-shadow: 2px 2px 20px 2px gold, 3px 0px 16px 8px white;'); 
	
	}
	//7s 90c
	else if(summon >= 320 && summon < 328){
		var size = getLength(seven90);
		summon = Math.floor(Math.random()* (size));

		card = seven90[summon] + '_6';
		fourpull[summon] = fourpull[summon] + 1
		id.push(card);
        $('#char').attr('style', 'background: linear-gradient(to bottom right,gold,white, gold) border-box;box-shadow: 2px 2px 20px 2px gold, 3px 0px 16px 8px white;'); 

	}
	//Monthly LP
	else if(summon >= 200 && summon < 220){
		var size = getLength(lp);
		summon = Math.floor(Math.random()* (size));

		card = lp[summon] + '_6';
		threepull[summon] = threepull[summon] + 1
		id.push(card);
        $('#char').attr('style', 'background: linear-gradient(to bottom right,silver,white, silver) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px white;'); 

	}
	//6* 90c
	else if(summon >= 500 && summon < 524){
		var size = getLength(six90);
		summon = Math.floor(Math.random()* (size));

		card = six90[summon] + '_6';
		twopull[summon] = twopull[summon] + 1
		id.push(card);
        $('#char').attr('style', 'background: linear-gradient(to bottom right,silver,white, silver) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px white;'); 


	}
	else if(summon >= 600 && summon < 670){
		var size = getLength(fourty);
		summon = Math.floor(Math.random()* (size));

		card = fourty[summon] + '_6' ;
		onepull[summon] = onepull[summon] + 1
		id.push(card);
        $('#char').attr('style', 'background: linear-gradient(to bottom right,darkblue,royalblue, darkblue) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px royalblue;'); 


	}
	else{
		var size = getLength(fourty);
		summon = Math.floor(Math.random()* (size));

		card = five[summon];
		fivepull[summon] = fivepull[summon] + 1
		id.push(card);
		$('#char').attr('style', 'margin-top: 20px;'); 

	}
	
	$('#chara-summon').attr('src', './../../../common/assets/img/units/' + card + '.png'); 

	if (multi.style.display === "block"){
		multi.style.display = "none";
	}
	if (single.style.display === "none") {
        single.style.display = "block";
    } 

    var spent = "$" + moneyspent
    document.getElementById("money").innerHTML = spent;
    document.getElementById("gems").innerHTML = gemspent;
    document.getElementById("summons").innerHTML = summonsdone;
    document.getElementById("multis").innerHTML = multidone;
	document.getElementById("f1").innerHTML = fpull[0];

	for(var x = 0; x < feature.length; x++){
		document.getElementById("f" + x + "p").innerHTML = fpull[x];

	}
	for(var x = 0; x < kizuna.length; x++){
		document.getElementById("4l" + x).innerHTML = flpull[x];
	}

	for(var x = 0; x < seven90.length; x++){
		document.getElementById("4" + x).innerHTML = fourpull[x];
	}
	for(var x = 0; x < lp.length; x++){
		document.getElementById("3" + x).innerHTML = threepull[x];
	}
	for(var x = 0; x < six90.length; x++){
		document.getElementById("2" + x).innerHTML = twopull[x];
	}
	for(var x = 0; x < fourty.length; x++){
		document.getElementById("1" + x).innerHTML = onepull[x];
	}
    console.log(roll);
    console.log(card);
}

function multiSummon(){
	var multi = document.getElementById("multi");
	var single = document.getElementById("single");
	gemspent += 50
	moneyspent += 26
	summonsdone += 11
	multidone++
	var card;
	var roll =[];
	var id =[];

	for(var i = 1; i <= 10; i++){
		var summon = Math.floor(Math.random()* 999);
		roll.push(summon);
		//Feature Character Rate 2%
		if(summon >= 100 && summon < 104){
			var size = getLength(feature);
			summon = Math.floor(Math.random()* (size));
	
			card = feature[summon] + '_6';
			fpull[summon] = fpull[summon] + 1
            id.push(card);
			$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,red,magenta,blue,aqua,lime,yellow,red) border-box;box-shadow: 2px 2px 5px 2px red, -3px 2px 5px 2px magenta, -3px -2px 5px 2px blue, 3px -2px 5px 2px aqua, 3px 2px 5px 2px lime, -3px 2px 5px 2px yellow, -3px -2px 10px 2px red, 2px 2px 5px 2px rgba(0,0,0,0);'); 

		}
		//4* Limited
		else if(summon >= 110 && summon < 118){
			var size = getLength(kizuna);
			summon = Math.floor(Math.random()* (size));

			card = kizuna[summon] + '_6';
			flpull[summon] = flpull[summon] + 1
			id.push(card);
			$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,gold,white, gold) border-box;box-shadow: 2px 2px 20px 2px gold, 3px 0px 16px 8px white;'); 
		
		}
			//4*
		else if(summon >= 200 && summon < 208){
			var size = getLength(seven90);
			summon = Math.floor(Math.random()* (size));

			card = seven90[summon] + '_6';
			fourpull[summon] = fourpull[summon] + 1
			id.push(card);
			$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,gold,white, gold) border-box;box-shadow: 2px 2px 20px 2px gold, 3px 0px 16px 8px white;'); 

		}
		//3*
		else if(summon >= 300 && summon < 320){
			var size = getLength(lp);
			summon = Math.floor(Math.random()* (size));

			card = lp[summon] + '_6';
			threepull[summon] = threepull[summon] + 1
			id.push(card);
			$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,silver,white, silver) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px white;'); 

		}
		//2*
		else if(summon >= 400 && summon < 424){
			var size = getLength(six90);
			summon = Math.floor(Math.random()* (size));

			card = six90[summon] + '_6';
			twopull[summon] = twopull[summon] + 1
			id.push(card);
			$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,silver,white, silver) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px white;'); 


		}
		else if(summon >= 500 && summon < 570){
			var size = getLength(fourty);
			summon = Math.floor(Math.random()* (size));

			card = fourty[summon] + '_6' ;
			onepull[summon] = onepull[summon] + 1
			id.push(card);
			$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,darkblue,royalblue, darkblue) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px royalblue;'); 


		}
		else{
			var size = getLength(five);
			summon = Math.floor(Math.random()* (size));

			card = five[summon];
			fivepull[summon] = fivepull[summon] + 1
			id.push(card);
			$('.char-' + i).attr('style', 'margin-top: 20px;'); 

		}
		
		$('#chara-summon-' + i).attr('src', './../../../common/assets/img/units/' + card + '.png'); 
	}
	var i = 11
	if(multidone == 2){
		rates = 107
	}
	else if(multidone == 3){
		rates = 108
	}
	else if(multidone == 4){
		rates = 113
	}
	else if( multidone == 5){
		rates = 176
		rates2 = 300
		rates3 = 985
	}
	else if (multidone > 5){
		rates = 150
		rates2 = 208
		rates3 = 408
	}
	var summon = Math.floor(Math.random()* 999);
	roll.push(summon);
	if(summon >= 100 && summon < rates){
		var size = getLength(feature);
		summon = Math.floor(Math.random()* (size));

		card = feature[summon] + '_6';
		fpull[summon] = fpull[summon] + 1
		id.push(card);
		$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,red,magenta,blue,aqua,lime,yellow,red) border-box;box-shadow: 2px 2px 5px 2px red, -3px 2px 5px 2px magenta, -3px -2px 5px 2px blue, 3px -2px 5px 2px aqua, 3px 2px 5px 2px lime, -3px 2px 5px 2px yellow, -3px -2px 10px 2px red, 2px 2px 5px 2px rgba(0,0,0,0);'); 
	}
	//4* Limited
	else if(summon >= 200 && summon < rates2){
		var size = getLength(kizunaNaruto);
		summon = Math.floor(Math.random()* (size));

		card = kizunaNaruto[summon] + '_6';
		id.push(card);
		$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,gold,white, gold) border-box;box-shadow: 2px 2px 20px 2px gold, 3px 0px 16px 8px white;'); 
	
	}
		//4*
	else if(summon >= 400 && summon < rates3){
		var size = getLength(sevenNaruto);
		summon = Math.floor(Math.random()* (size));

		card = sevenNaruto[summon] + '_6';
		id.push(card);
		$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,gold,white, gold) border-box;box-shadow: 2px 2px 20px 2px gold, 3px 0px 16px 8px white;'); 

	}
	//2*
	else if(summon >= 10 && summon < 34){
		var size = getLength(sixNaruto);
		summon = Math.floor(Math.random()* (size));

		card = sixNaruto[summon] + '_6';
		id.push(card);
		$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,silver,white, silver) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px white;'); 

	}
	else{
		var size = getLength(fourtyNaruto);
		summon = Math.floor(Math.random()* (size));

		card = fourtyNaruto[summon] + '_6' ;
		id.push(card);
		$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,darkblue,royalblue, darkblue) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px royalblue;'); 


	}


	$('#chara-summon-11').attr('src', './../../../common/assets/img/units/' + card + '.png'); 

	if (single.style.display === "block"){
		single.style.display = "none";
	}
	if (multi.style.display === "none") {
        multi.style.display = "block";
    } 
    var spent = "$" + moneyspent
    document.getElementById("money").innerHTML = spent;
    document.getElementById("gems").innerHTML = gemspent;
    document.getElementById("summons").innerHTML = summonsdone;
    document.getElementById("multis").innerHTML = multidone;
    var featurerate = 0
    featurerate = ((rates - 100) / 1000) * 100
    
    document.getElementById("frates").innerHTML =  featurerate + '%';
	document.getElementById("f1").innerHTML = fpull[0];


	for(var x = 0; x < feature.length; x++){
		document.getElementById("f" + x + "p").innerHTML = fpull[x];

	}
	for(var x = 0; x < kizuna.length; x++){
		document.getElementById("4l" + x).innerHTML = flpull[x];
	}
	for(var x = 0; x < seven90.length; x++){
		document.getElementById("4" + x).innerHTML = fourpull[x];
	}
	for(var x = 0; x < lp.length; x++){
		document.getElementById("3" + x).innerHTML = threepull[x];
	}
	for(var x = 0; x < six90.length; x++){
		document.getElementById("2" + x).innerHTML = twopull[x];
	}
	for(var x = 0; x < fourty.length; x++){
		document.getElementById("1" + x).innerHTML = onepull[x];
	}
	for(var x = 0; x < five.length; x++){
		document.getElementById("5" + x).innerHTML = fivepull[x];
	}
    console.log(roll);
    console.log(card);

    console.log(roll[0] + ", " + roll[1] + ", " + roll[2] + ", " + roll[3] + ", " + roll[4] + ", " + roll[5] + ", " + roll[6] + ", " + roll[7] + ", " + roll[8] + ", " + roll[9]);
    console.log(id[0] + ", " + id[1] + ", " + id[2] + ", " + id[3] + ", " + id[4] + ", " + id[5] + ", " + id[6] + ", " + id[7] + ", " + id[8] + ", " + id[9] + ", " + id[9]);
    console.log(moneyspent)
}

function reset(){
	moneyspent = 0
	gemspent = 0
	summonsdone = 0
	multidone = 0

	var spent = "$" + moneyspent
    document.getElementById("money").innerHTML = spent;
    document.getElementById("gems").innerHTML = gemspent;
    document.getElementById("summons").innerHTML = summonsdone;
    document.getElementById("multis").innerHTML = multidone;

	single.style.display = "none";
    multi.style.display = "none";
}

function showRates(){
	var rate = document.getElementById("rates-percent");

	
	if (rate.style.display === "none") {
        rate.style.display = "block";
    } 
    else{
    	rate.style.display = "none";
    }
}

function createPool(five, four){
	for(var n in window.tags){

		if(window.tags[n]['rare'] == '5' && window.tags[n]['tag'] == 'gacha'){
			five.push(window.tags[n]['cardId']);
		}
		if(window.tags[n]['rare'] == '4' && window.tags[n]['tag'] == 'gacha'){
			four.push(window.tags[n]['cardId']);
		}
		length++;
	}
	return length;
}


function getLength(arr){
	var size = 0;
	for (var n in arr){
		size++;
	}
	return size;
}