var moneyspent = 0
var gemspent = 0
var summonsdone = 0
var multidone = 0
var feature = ['00000033']
var fourlimited = ['00000012']
var fpull = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var flpull = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fourStar = ["00000005", "00000008", "00000011", "00000022", "00000030"];
var fourpull = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];	 
var threeStar = ["00000006", "00000007", "00000009", "00000010"];
var threepull =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var twoStar = ["00000014", "00000015", "00000017", "00000018", "00000020", "00000023", "00000024"];;
var twopull = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var oneStar = ["00000013", "00000016", "00000019", "00000021"];

var onepull = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var five = []
var four = []
var rates = 120
var length = createPool(five, four);
var featureUnit = ''
var fourLimitedUnit = ''
var fourUnit = ''
var threeUnit = ''
var twoUnit = ''
var oneUnit = ''
for(var x = 1; x <= feature.length; x++){
	featureUnit += '<td><img id="f' + x + 'img" src="./../../../common/assets/img/tactics/art/' + feature[x-1] + '.png" width="100"></td>' + 
	'<td id="f' + x + 'p">0</td>'
}
for(var x = 1; x <= fourlimited.length; x++){
	fourLimitedUnit += '<td><img id="4l' + x + 'img" src="./../../../common/assets/img/tactics/art/' + fourlimited[x-1] + '.png" width="100"></td>' + 
	'<td id="4l' + x + '">0</td>'
}

for(var x = 1; x <= fourStar.length; x++){
	fourUnit += '<td><img id="4' + x + 'img" src="./../../../common/assets/img/tactics/art/' + fourStar[x-1] + '.png" width="100"></td>' + 
	'<td id="4' + x + '">0</td>'
}

for(var x = 1; x <= threeStar.length; x++){
	threeUnit += '<td><img id="3' + x + 'img" src="./../../../common/assets/img/tactics/art/' + threeStar[x-1] + '.png" width="100"></td>' + 
	'<td id="3' + x + '">0</td>'
}

for(var x = 1; x <= twoStar.length; x++){
	twoUnit += '<td><img id="2' + x + 'img" src="./../../../common/assets/img/tactics/art/' + twoStar[x-1] + '.png" width="100"></td>' + 
	'<td id="2' + x + '">0</td>'
}

for(var x = 1; x <= oneStar.length; x++){
	oneUnit += '<td><img id="1' + x + 'img" src="./../../../common/assets/img/tactics/art/' + oneStar[x-1] + '.png" width="100"></td>' + 
	'<td id="1' + x + '">0</td>'
}
document.getElementById("feature-unit").innerHTML = featureUnit;
document.getElementById("limited-unit").innerHTML = fourLimitedUnit;
document.getElementById("four-unit").innerHTML = fourUnit;
document.getElementById("three-unit").innerHTML = threeUnit;
document.getElementById("two-unit").innerHTML = twoUnit;
document.getElementById("one-unit").innerHTML = oneUnit;

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
	if(summon >= 100 && summon < 120){
		var size = getLength(feature);
        summon = Math.floor(Math.random()* (size));

        card = feature[summon];
        fpull[summon] = fpull[summon] + 1
        id.push(card);
        $('#char').attr('style', 'background: linear-gradient(to bottom right,red,magenta,blue,aqua,lime,yellow,red) border-box;box-shadow: 2px 2px 5px 2px red, -3px 2px 5px 2px magenta, -3px -2px 5px 2px blue, 3px -2px 5px 2px aqua, 3px 2px 5px 2px lime, -3px 2px 5px 2px yellow, -3px -2px 10px 2px red, 2px 2px 5px 2px rgba(0,0,0,0);border-radius:30%;margin-top: 20px;'); 

	}
	//4* Limited
	else if(summon == 1){
		var size = getLength(fourlimited);
		summon = Math.floor(Math.random()* (size));

		card = fourlimited[summon];
		flpull[summon] = flpull[summon] + 1
		id.push(card);
	    $('#char').attr('style', 'background: linear-gradient(to bottom right,red,magenta,blue,aqua,lime,yellow,red) border-box;box-shadow: 2px 2px 5px 2px red, -3px 2px 5px 2px magenta, -3px -2px 5px 2px blue, 3px -2px 5px 2px aqua, 3px 2px 5px 2px lime, -3px 2px 5px 2px yellow, -3px -2px 10px 2px red, 2px 2px 5px 2px rgba(0,0,0,0);border-radius:30%;margin-top: 20px;'); 
	
	}
	//4*
	else if(summon >= 300 && summon < 310){
		var size = getLength(fourStar);
		summon = Math.floor(Math.random()* (size));

		card = fourStar[summon];
		fourpull[summon] = fourpull[summon] + 1
		id.push(card);
        $('#char').attr('style', 'background: linear-gradient(to bottom right,gold,white, gold) border-box;box-shadow: 2px 2px 20px 2px gold, 3px 0px 16px 8px white;border-radius:30%;margin-top: 20px;'); 

	}
	//3*
	else if(summon >= 400 && summon < 550){
		var size = getLength(threeStar);
		summon = Math.floor(Math.random()* (size));

		card = threeStar[summon];
		threepull[summon] = threepull[summon] + 1
		id.push(card);
        $('#char').attr('style', 'background: linear-gradient(to bottom right,silver,white, silver) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px white;border-radius:30%;margin-top: 20px;'); 

	}
	//2*
	else if(summon >= 500 && summon < 949){
		var size = getLength(twoStar);
		summon = Math.floor(Math.random()* (size));

		card = twoStar[summon];
		twopull[summon] = twopull[summon] + 1
		id.push(card);
		$('#char').attr('style', 'margin-top: 20px;'); 


	}
	else{
		var size = getLength(oneStar);
		summon = Math.floor(Math.random()* (size));

		card = oneStar[summon];
		onepull[summon] = onepull[summon] + 1
		id.push(card);
		$('#char').attr('style', 'margin-top: 20px;'); 

	}
	
	$('#chara-summon').attr('src', './../../../common/assets/img/tactics/art/' + card + '.png'); 

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
	document.getElementById("f1p").innerHTML = fpull[0];

    document.getElementById("4l1").innerHTML = flpull[0];

	for(var x = 1; x <= fourStar.length; x++){
		document.getElementById("4" + x).innerHTML = fourpull[x-1];
	}
	for(var x = 1; x <= threeStar.length; x++){
		document.getElementById("3" + x).innerHTML = threepull[x-1];
	}
	for(var x = 1; x <= twoStar.length; x++){
		document.getElementById("2" + x).innerHTML = twopull[x-1];
	}
	for(var x = 1; x <= oneStar.length; x++){
		document.getElementById("1" + x).innerHTML = onepull[x-1];
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
		if(summon >= 100 && summon < 120){
			var size = getLength(feature);
			summon = Math.floor(Math.random()* (size));
	
			card = feature[summon];
			fpull[summon] = fpull[summon] + 1
            id.push(card);
			$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,red,magenta,blue,aqua,lime,yellow,red) border-box;box-shadow: 2px 2px 5px 2px red, -3px 2px 5px 2px magenta, -3px -2px 5px 2px blue, 3px -2px 5px 2px aqua, 3px 2px 5px 2px lime, -3px 2px 5px 2px yellow, -3px -2px 10px 2px red, 2px 2px 5px 2px rgba(0,0,0,0);border-radius:30%;margin-top: 20px;'); 

		}
		//4* Limited
		else if(summon == 1){
			var size = getLength(fourlimited);
			summon = Math.floor(Math.random()* (size));

			card = fourlimited[summon];
			flpull[summon] = flpull[summon] + 1
			id.push(card);
			$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,red,magenta,blue,aqua,lime,yellow,red) border-box;box-shadow: 2px 2px 5px 2px red, -3px 2px 5px 2px magenta, -3px -2px 5px 2px blue, 3px -2px 5px 2px aqua, 3px 2px 5px 2px lime, -3px 2px 5px 2px yellow, -3px -2px 10px 2px red, 2px 2px 5px 2px rgba(0,0,0,0);border-radius:30%;margin-top: 20px;'); 
		
		}
			//4*
		else if(summon >= 300 && summon < 310){
			var size = getLength(fourStar);
			summon = Math.floor(Math.random()* (size));

			card = fourStar[summon];
			fourpull[summon] = fourpull[summon] + 1
			id.push(card);
			$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,gold,white, gold) border-box;box-shadow: 2px 2px 20px 2px gold, 3px 0px 16px 8px white;border-radius:30%;margin-top: 20px;'); 

		}
		//3*
		else if(summon >= 400 && summon < 550){
			var size = getLength(threeStar);
			summon = Math.floor(Math.random()* (size));

			card = threeStar[summon];
			threepull[summon] = threepull[summon] + 1
			id.push(card);
			$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,silver,white, silver) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px white;border-radius:30%;margin-top: 20px;'); 

		}
		//2*
		else if(summon >= 500 && summon < 949){
			var size = getLength(twoStar);
			summon = Math.floor(Math.random()* (size));

			card = twoStar[summon];
			twopull[summon] = twopull[summon] + 1
			id.push(card);
			$('.char-' + i).attr('style', 'margin-top: 20px;'); 


		}
		else{
			var size = getLength(oneStar);
			summon = Math.floor(Math.random()* (size));

			card = oneStar[summon];
			onepull[summon] = onepull[summon] + 1
			id.push(card);
			$('.char-' + i).attr('style', 'margin-top: 20px;'); 

		}
		
		$('#chara-summon-' + i).attr('src', './../../../common/assets/img/tactics/art/' + card + '.png'); 
	}
	var i = 11
	var summon = Math.floor(Math.random()* 999);
	roll.push(summon);
	if(summon >= 100 && summon < 105){
		var size = getLength(feature);
		summon = Math.floor(Math.random()* (size));

		card = feature[summon];
		fpull[summon] = fpull[summon] + 1
		id.push(card);
		$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,red,magenta,blue,aqua,lime,yellow,red) border-box;box-shadow: 2px 2px 5px 2px red, -3px 2px 5px 2px magenta, -3px -2px 5px 2px blue, 3px -2px 5px 2px aqua, 3px 2px 5px 2px lime, -3px 2px 5px 2px yellow, -3px -2px 10px 2px red, 2px 2px 5px 2px rgba(0,0,0,0);border-radius:30%;margin-top: 20px;'); 
	}
	//4* Limited
	else if(summon == 1){
		var size = getLength(fourlimited);
		summon = Math.floor(Math.random()* (size));

		card = fourlimited[summon];
		flpull[summon] = flpull[summon] + 1
		id.push(card);
		$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,red,magenta,blue,aqua,lime,yellow,red) border-box;box-shadow: 2px 2px 5px 2px red, -3px 2px 5px 2px magenta, -3px -2px 5px 2px blue, 3px -2px 5px 2px aqua, 3px 2px 5px 2px lime, -3px 2px 5px 2px yellow, -3px -2px 10px 2px red, 2px 2px 5px 2px rgba(0,0,0,0);border-radius:30%;margin-top: 20px;'); 
	
	}
		//4*
	else if(summon >= 300 && summon < 310){
		var size = getLength(fourStar);
		summon = Math.floor(Math.random()* (size));

		card = fourStar[summon];
		fourpull[summon] = fourpull[summon] + 1
		id.push(card);
		$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,gold,white, gold) border-box;box-shadow: 2px 2px 20px 2px gold, 3px 0px 16px 8px white;border-radius:30%;margin-top: 20px;'); 

	}
	//3*
	else{
		var size = getLength(threeStar);
		summon = Math.floor(Math.random()* (size));

		card = threeStar[summon];
		threepull[summon] = threepull[summon] + 1
		id.push(card);
		$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,silver,white, silver) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px white;border-radius:30%;margin-top: 20px;'); 

	}
		


	$('#chara-summon-11').attr('src', './../../../common/assets/img/tactics/art/' + card + '.png'); 

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
	document.getElementById("f1p").innerHTML = fpull[0];

    document.getElementById("4l1").innerHTML = flpull[0];

	for(var x = 1; x <= fourStar.length; x++){
		document.getElementById("4" + x).innerHTML = fourpull[x-1];
	}
	for(var x = 1; x <= threeStar.length; x++){
		document.getElementById("3" + x).innerHTML = threepull[x-1];
	}
	for(var x = 1; x <= twoStar.length; x++){
		document.getElementById("2" + x).innerHTML = twopull[x-1];
	}
	for(var x = 1; x <= oneStar.length; x++){
		document.getElementById("1" + x).innerHTML = onepull[x-1];
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