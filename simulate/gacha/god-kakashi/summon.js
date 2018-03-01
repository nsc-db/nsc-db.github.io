function singleSummon(){
	var single = document.getElementById("single");
	var multi = document.getElementById("multi");

	var kakashi = [];
	var rin = [];
	var slayer = [];
	var five = [];
	
	var card;
	var length = createPool(kakashi, rin, slayer, five);
	var roll =[];
	var id =[];
	var summon = Math.floor(Math.random()* 99);
	var roll = summon;

	if(summon == 10){
			var size = getLength(kakashi);
			summon = Math.floor(Math.random()* (size));

			card = kakashi[summon]['cardId'];
			id.push(card);
	}		
	else if(summon == 29){
		var size = getLength(rin);
		summon = Math.floor(Math.random()* (size));

		card = rin[summon]['cardId'];
		id.push(card);
	}
	else if(summon == 90 && summon == 20){
		var size = getLength(slayer);
		summon = Math.floor(Math.random()* (size));

		card = slayer[summon]['cardId'];
		id.push(card);
	}
	else{
		var size = getLength(five);
		summon = Math.floor(Math.random()* (size));

		card = five[summon]['cardId'];
		id.push(card);
	}
	for(var n in window.tags){
		if(card == window.tags[n]['cardId']){
			if(window.tags[n]['tag'] == "ex-6" || window.tags[n]['tag'] == "limited-6" || window.tags[n]['tag'] == "special" || window.tags[n]['tag'] == "killers" || window.tags[n]['tag'] == "saitama"){
				card = card + '_6';
			}
		}
	}
	$('#chara-summon').attr('src', './../../assets/img/units/' + card + '.png'); 

	if (multi.style.display === "block"){
		multi.style.display = "none";
	}
	if (single.style.display === "none") {
        single.style.display = "block";
    } 
    console.log(roll);
    console.log(card);
}

function multiSummon(){
	var multi = document.getElementById("multi");
	var single = document.getElementById("single");
	
	var kakashi = [];
	var rin = [];
	var slayer = [];
	var five = [];
	
	var card;
	var length = createPool(kakashi, rin, slayer, five);
	var roll =[];
	var id =[];
	for(var i = 1; i <= 10; i++){
		var summon = Math.floor(Math.random()* 99);
		roll.push(summon);
		if(summon == 10){
			var size = getLength(kakashi);
			summon = Math.floor(Math.random()* (size));

			card = kakashi[summon]['cardId'];
			id.push(card);
		}		
		else if(summon == 29){
			var size = getLength(rin);
			summon = Math.floor(Math.random()* (size));

			card = rin[summon]['cardId'];
			id.push(card);
		}
		else if(summon == 90 && summon == 20){
			var size = getLength(slayer);
			summon = Math.floor(Math.random()* (size));

			card = slayer[summon]['cardId'];
			id.push(card);
		}
		else{
			var size = getLength(five);
			summon = Math.floor(Math.random()* (size));

			card = five[summon]['cardId'];
			id.push(card);
		}
		for(var n in window.tags){
			if(card == window.tags[n]['cardId']){
				if(window.tags[n]['tag'] == "ex-6" || window.tags[n]['tag'] == "limited-6" || window.tags[n]['tag'] == "special" || window.tags[n]['tag'] == "killers" || window.tags[n]['tag'] == "saitama"){
					card = card + '_6';
				}
			}
		}
		$('#chara-summon-' + i).attr('src', './../../assets/img/units/' + card + '.png'); 
	}
	if (single.style.display === "block"){
		single.style.display = "none";
	}
	if (multi.style.display === "none") {
        multi.style.display = "block";
    } 
    console.log(roll[0] + ", " + roll[1] + ", " + roll[2] + ", " + roll[3] + ", " + roll[4] + ", " + roll[5] + ", " + roll[6] + ", " + roll[7] + ", " + roll[8] + ", " + roll[9]);
    console.log(id[0] + ", " + id[1] + ", " + id[2] + ", " + id[3] + ", " + id[4] + ", " + id[5] + ", " + id[6] + ", " + id[7] + ", " + id[8] + ", " + id[9]);
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

function createPool(kakashi, rin, slayer, five){
	var length = 0;
	for(var n in window.tags){
		if(window.tags[n]['cardId'] == "20040302"){
			kakashi.push(window.tags[n]);
		}
		else if(window.tags[n]['cardId'] == '20031218'){
			rin.push(window.tags[n]); 
		}
		else if(window.tags[n]['cardId'] == '20001658' || window.tags[n]['cardId'] == '20001657'){
			slayer.push(window.tags[n]);
		}
		else if(window.tags[n]['rare'] == '5' && window.tags[n]['tag'] == 'gacha'){
			five.push(window.tags[n]);
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