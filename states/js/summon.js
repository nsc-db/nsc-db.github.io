function singleSummon(){
	var single = document.getElementById("single");
	var multi = document.getElementById("multi");

	var length = 0;
	var origin = [];
	var killer = []
	var five = [];
	var six = [];
	var ex = [];
	var god = [];
	
	var card;
	length = createPool(five, origin, killer, ex, six, god);
	var id = 0;
	var summon = Math.floor(Math.random()* 99);
	var roll = summon;

	console.log(roll);
    console.log(card);
    	
	if(summon == 69 || summon == 6 || summon == 9 || summon == 66){
		var size = getLength(six);
		summon = Math.floor(Math.random()* (size));

		card = six[summon]['cardId'];
	}
	else if(summon == 29){
		var size = getLength(god);
		summon = Math.floor(Math.random()* (size));

		card = god[summon]['cardId'];
	}
	else if(summon == 21 || summon == 58 || summon == 91 || summon == 55){
		var size = getLength(killer);
		summon = Math.floor(Math.random()* (size));

		card = killer[summon]['cardId'];
	}
	else if(summon == 77  ){
		var size = getLength(origin);
		summon = Math.floor(Math.random()* (size));

		card = origin[summon]['cardId'];
	}
	else if(summon == 10 || summon == 20 || summon == 30 || summon == 40 || summon == 50 || summon == 60 || summon == 70 || summon == 80 || summon == 90 || summon == 99){
		var size = getLength(ex);
		summon = Math.floor(Math.random()* (size));

		card = ex[summon]['cardId'];
	}
	else{
		var size = getLength(five) -1;
		summon = Math.floor(Math.random()* (size));


		card = five[summon]['cardId'];
	}

	for(var n in window.tags){
		if(card == window.tags[n]['cardId']){
			if(window.tags[n]['tag'] == "ex-6" || window.tags[n]['tag'] == "limited-6" || window.tags[n]['tag'] == "killers" || window.tags[n]['tag'] == "origin" || window.tags[n]['tag'] == "god"
			|| window.tags[n]['tag'] == "saitama" || window.tags[n]['tag'] == "kami-destroyer"){
				card = card + '_6';
			}
		}
	}

	$('#chara-summon').attr('src', './../common/assets/img/units/' + card + '.png'); 

	if (multi.style.display === "block"){
		multi.style.display = "none";
	}
	if (single.style.display === "none") {
        single.style.display = "block";
    } 
}

function multiSummon(){
	var multi = document.getElementById("multi");
	var single = document.getElementById("single");
	
	var length = 0;
	var origin = [];
	var killer = []
	var five = [];
	var six = [];
	var ex = [];
	var god = [];
	
	var card;
	length = createPool(five, origin, killer, ex, six, god);
	var id = 0;
	var roll =[];
	var id =[];
	for(var i = 1; i <= 10; i++){
		var summon = Math.floor(Math.random()* 99);
		roll.push(summon);
		if(summon == 69 || summon == 6 || summon == 9 || summon == 66){
			var size = getLength(six);
			summon = Math.floor(Math.random()* (size));

			card = six[summon]['cardId'];
			id.push(card);
		}
		else if(summon == 29){
			var size = getLength(god);
			summon = Math.floor(Math.random()* (size));

			card = god[summon]['cardId'];
			id.push(card);
		}
		else if(summon == 21 || summon == 58 || summon == 91 || summon == 55){
			var size = getLength(killer);
			summon = Math.floor(Math.random()* (size));

			card = killer[summon]['cardId'];
			id.push(card);
		}
		else if(summon == 77  ){
			var size = getLength(origin);
			summon = Math.floor(Math.random()* (size));

			card = origin[summon]['cardId'];
			id.push(card);
		}
		else if(summon == 10 || summon == 20 || summon == 30 || summon == 40 || summon == 50 || summon == 60 || summon == 70 || summon == 80 || summon == 90 || summon == 99){
			var size = getLength(ex);
			summon = Math.floor(Math.random()* (size));

			card = ex[summon]['cardId'];
			id.push(card);
		}
		else{
			var size = getLength(five) -1;
			summon = Math.floor(Math.random()* (size));


			card = five[summon]['cardId'];
			id.push(card);
		}
		for(var n in window.tags){
			if(card == window.tags[n]['cardId']){
				if(window.tags[n]['tag'] == "ex-5" ||window.tags[n]['tag'] == "ex-6" || window.tags[n]['tag'] == "limited-6" || window.tags[n]['tag'] == "killers" || window.tags[n]['tag'] == "pvp-reward"|| window.tags[n]['tag'] == "origin" || window.tags[n]['tag'] == "god"
			|| window.tags[n]['tag'] == "saitama" || window.tags[n]['tag'] == "kami-destroyer" || window.tags[n]['cardId'] == "20050306" || window.tags[n]['cardId'] == "20050305"){
					card = card + '_6';
				}
			}
		}
		$('#chara-summon-' + i).attr('src', './../common/assets/img/units/' + card + '.png'); 
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


function createPool(five, origin, killer, ex, six, god){
	var length = 0;
	for(var n in window.tags){		
		if(window.tags[n]['tag'] == 'ex-5'){
			ex.push(window.tags[n]); 
		}
		else if(window.tags[n]['tag'] == 'ex-6' || window.tags[n]['tag'] == 'limited-6'){
			six.push(window.tags[n]);
		}
		else if(window.tags[n]['tag'] == 'origin'){
			origin.push(window.tags[n]);
		}
		else if(window.tags[n]['tag'] == 'kami-destroyer' || window.tags[n]['tag'] == 'killers'){
			killer.push(window.tags[n]);
		}
		else if(window.tags[n]['tag'] == 'god' || window.tags[n]['tag'] == "pvp-reward"){
			god.push(window.tags[n]);
		}
		else if(window.tags[n]['rare'] == '5' && window.tags[n]['cardId']){
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