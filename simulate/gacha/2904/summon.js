var moneyspent = 0
var gemspent = 0
var summonsdone = 0
var multidone = 0
var feature = [20070102, 20070103]
var fpull = [0,0]
var seven = [20060905, 20060312];
var sevenpull = [0,0];	 
var six = [20060607, 20060107, 20060104, 20060103, 20050613, 20050612];
var sixpull = [0,0,0,0,0,0];
var fourty = [20050408, 20050409, 20050418, 20050417, 20050316, 20050317, 20050310, 20050313, 
              20050308, 20050212, 20050113, 20041206, 20041211, 20041210, 20041205, 20041110, 20041105, 
              20041006, 20041009, 20040907, 20040905, 20040702, 20040407, 20040309, 20040303,
              20040304, 20040210, 20040201, 20040115, 20031011]
var fourtypull = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var five = []
var four = []
var length = createPool(five, four);

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

        card = feature[summon] + "_6";
        fpull[summon] = fpull[summon] + 1
        id.push(card);
	}
	//7* God and GK
	else if(summon >= 200 && summon < 203){
		var size = getLength(seven);
		summon = Math.floor(Math.random()* (size));

		card = seven[summon] + "_6";
		sevenpull[summon] = sevenpull[summon] + 1
		id.push(card);
	}
	//6* God and GK
	else if(summon >= 300 && summon < 330){
		var size = getLength(six);
		summon = Math.floor(Math.random()* (size));

		card = six[summon] + "_6";
		sixpull[summon] = sixpull[summon] + 1
		id.push(card);
	}
	else if(summon >= 400 && summon < 470){
		var size = getLength(fourty);
		summon = Math.floor(Math.random()* (size));

		card = fourty[summon] + "_6";
		fourtypull[summon] = fourtypull[summon] + 1
		id.push(card);
	}
	else if(summon >= 500 && summon < 887){
		var size = getLength(four);
		summon = Math.floor(Math.random()* (size));

		card = four[summon];
		id.push(card);
	}
	else{
		var size = getLength(five);
		summon = Math.floor(Math.random()* (size));

		card = five[summon];
		id.push(card);
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
    document.getElementById("f2").innerHTML = fpull[1];

    document.getElementById("71").innerHTML = sevenpull[0];
    document.getElementById("72").innerHTML = sevenpull[1];
    
    document.getElementById("61").innerHTML = sixpull[0];
    document.getElementById("62").innerHTML = sixpull[1];
    document.getElementById("63").innerHTML = sixpull[2];
    document.getElementById("64").innerHTML = sixpull[3];
    document.getElementById("65").innerHTML = sixpull[4];
    document.getElementById("66").innerHTML = sixpull[5];
    

    document.getElementById("401").innerHTML = fourtypull[0];
    document.getElementById("402").innerHTML = fourtypull[1];
    document.getElementById("403").innerHTML = fourtypull[2];
    document.getElementById("404").innerHTML = fourtypull[3];
    document.getElementById("405").innerHTML = fourtypull[4];
    document.getElementById("406").innerHTML = fourtypull[5];
    document.getElementById("407").innerHTML = fourtypull[6];
    document.getElementById("408").innerHTML = fourtypull[7];
    document.getElementById("409").innerHTML = fourtypull[8];
    document.getElementById("4010").innerHTML = fourtypull[9];
    document.getElementById("4011").innerHTML = fourtypull[10];
    document.getElementById("4012").innerHTML = fourtypull[11];
    document.getElementById("4013").innerHTML = fourtypull[12];
    document.getElementById("4014").innerHTML = fourtypull[13];
    document.getElementById("4015").innerHTML = fourtypull[14];
    document.getElementById("4016").innerHTML = fourtypull[15];
    document.getElementById("4017").innerHTML = fourtypull[16];
    document.getElementById("4018").innerHTML = fourtypull[17];
    document.getElementById("4019").innerHTML = fourtypull[18];
    document.getElementById("4020").innerHTML = fourtypull[19];
    document.getElementById("4021").innerHTML = fourtypull[20];
    document.getElementById("4022").innerHTML = fourtypull[21];
    document.getElementById("4023").innerHTML = fourtypull[22];
    document.getElementById("4024").innerHTML = fourtypull[23];
    document.getElementById("4025").innerHTML = fourtypull[24];
    document.getElementById("4026").innerHTML = fourtypull[25];
    document.getElementById("4027").innerHTML = fourtypull[26];
    document.getElementById("4028").innerHTML = fourtypull[27];
    document.getElementById("4029").innerHTML = fourtypull[28];
    document.getElementById("4030").innerHTML = fourtypull[29];
    console.log(roll);
    console.log(card);
}

function multiSummon(){
	var multi = document.getElementById("multi");
	var single = document.getElementById("single");
	moneyspent += 26
	gemspent += 50
	summonsdone += 11
	multidone++
	
	var card;
	var roll =[];
	var id =[];

	for(var i = 1; i <= 10; i++){
		var summon = Math.floor(Math.random()* 999);
		roll.push(summon);
		//Feature Character Rate .4%
		if(summon >= 100 && summon < 120){
			var size = getLength(feature);
            summon = Math.floor(Math.random()* (size));

            card = feature[summon] + "_6";
            fpull[summon] = fpull[summon] + 1
            id.push(card);
		}
		//7* God and GK
		else if(summon >= 200 && summon < 203){
			var size = getLength(seven);
			summon = Math.floor(Math.random()* (size));

			card = seven[summon] + "_6";
			sevenpull[summon] = sevenpull[summon] + 1
			id.push(card);
		}
		//6* God and GK
		else if(summon >= 300 && summon < 330){
			var size = getLength(six);
			summon = Math.floor(Math.random()* (size));

			card = six[summon] + "_6";
			sixpull[summon] = sixpull[summon] + 1
			id.push(card);
		}
		else if(summon >= 400 && summon < 470){
			var size = getLength(fourty);
			summon = Math.floor(Math.random()* (size));

			card = fourty[summon] + "_6";
			fourtypull[summon] = fourtypull[summon] + 1
			id.push(card);
		}
		else if(summon >= 500 && summon < 887){
			var size = getLength(four);
			summon = Math.floor(Math.random()* (size));

			card = four[summon];
			id.push(card);
		}
		else{
			var size = getLength(five);
			summon = Math.floor(Math.random()* (size));

			card = five[summon];
			id.push(card);
		}
		
		$('#chara-summon-' + i).attr('src', './../../../common/assets/img/units/' + card + '.png'); 
	}
	var summon = Math.floor(Math.random()* 999);
	roll.push(summon);
	if(summon >= 100 && summon < 650){
		var size = getLength(feature);
        summon = Math.floor(Math.random()* (size));

        card = feature[summon] + "_6";
        fpull[summon] = fpull[summon] + 1
        id.push(card);
	}
	//7* God and GK
	else if(summon >= 700 && summon < 703){
		var size = getLength(seven);
		summon = Math.floor(Math.random()* (size));

		card = seven[summon] + "_6";
		sevenpull[summon] = sevenpull[summon] + 1
		id.push(card);
	}
	//6* God and GK
	else if(summon >= 800 && summon < 830){
		var size = getLength(six);
		summon = Math.floor(Math.random()* (size));

		card = six[summon] + "_6";
		sixpull[summon] = sixpull[summon] + 1
		id.push(card);
	}
	else if(summon >= 900 && summon < 970){
		var size = getLength(fourty);
		summon = Math.floor(Math.random()* (size));

		card = fourty[summon] + "_6";
		fourtypull[summon] = fourtypull[summon] + 1
		id.push(card);
	}
	else{
		var size = getLength(five);
		summon = Math.floor(Math.random()* (size));

		card = five[summon];
		id.push(card);
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
    document.getElementById("f1").innerHTML = fpull[0];
    document.getElementById("f2").innerHTML = fpull[1];
    
    document.getElementById("71").innerHTML = sevenpull[0];
    document.getElementById("72").innerHTML = sevenpull[1];
    

    document.getElementById("61").innerHTML = sixpull[0];
    document.getElementById("62").innerHTML = sixpull[1];
    document.getElementById("63").innerHTML = sixpull[2];
    document.getElementById("64").innerHTML = sixpull[3];
    document.getElementById("65").innerHTML = sixpull[4];
    document.getElementById("66").innerHTML = sixpull[5];
    

    document.getElementById("401").innerHTML = fourtypull[0];
    document.getElementById("402").innerHTML = fourtypull[1];
    document.getElementById("403").innerHTML = fourtypull[2];
    document.getElementById("404").innerHTML = fourtypull[3];
    document.getElementById("405").innerHTML = fourtypull[4];
    document.getElementById("406").innerHTML = fourtypull[5];
    document.getElementById("407").innerHTML = fourtypull[6];
    document.getElementById("408").innerHTML = fourtypull[7];
    document.getElementById("409").innerHTML = fourtypull[8];
    document.getElementById("4010").innerHTML = fourtypull[9];
    document.getElementById("4011").innerHTML = fourtypull[10];
    document.getElementById("4012").innerHTML = fourtypull[11];
    document.getElementById("4013").innerHTML = fourtypull[12];
    document.getElementById("4014").innerHTML = fourtypull[13];
    document.getElementById("4015").innerHTML = fourtypull[14];
    document.getElementById("4016").innerHTML = fourtypull[15];
    document.getElementById("4017").innerHTML = fourtypull[16];
    document.getElementById("4018").innerHTML = fourtypull[17];
    document.getElementById("4019").innerHTML = fourtypull[18];
    document.getElementById("4020").innerHTML = fourtypull[19];
    document.getElementById("4021").innerHTML = fourtypull[20];
    document.getElementById("4022").innerHTML = fourtypull[21];
    document.getElementById("4023").innerHTML = fourtypull[22];
    document.getElementById("4024").innerHTML = fourtypull[23];
    document.getElementById("4025").innerHTML = fourtypull[24];
    document.getElementById("4026").innerHTML = fourtypull[25];
    document.getElementById("4027").innerHTML = fourtypull[26];
    document.getElementById("4028").innerHTML = fourtypull[27];
    document.getElementById("4029").innerHTML = fourtypull[28];
    document.getElementById("4030").innerHTML = fourtypull[29];

    console.log(roll[0] + ", " + roll[1] + ", " + roll[2] + ", " + roll[3] + ", " + roll[4] + ", " + roll[5] + ", " + roll[6] + ", " + roll[7] + ", " + roll[8] + ", " + roll[9]);
    console.log(id[0] + ", " + id[1] + ", " + id[2] + ", " + id[3] + ", " + id[4] + ", " + id[5] + ", " + id[6] + ", " + id[7] + ", " + id[8] + ", " + id[9] + ", " + id[9]);
    console.log(moneyspent)
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