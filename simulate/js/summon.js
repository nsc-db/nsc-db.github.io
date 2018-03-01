function singleSummon(){
	var single = document.getElementById("single");
	var multi = document.getElementById("multi");

	var length = 0;
	var four = [];
	var five = [];
	var six = [];
	var ex = [];
	var god = [];
	
	var card;
	length = createPool(four, five, six, ex, god);
	var id = 0;
	var summon = Math.floor(Math.random()* 99);
	var roll = summon;

	if(summon == 1 || summon == 6 || summon == 10){
		var size = getLength(six);
		summon = Math.floor(Math.random()* (size));

		card = six[summon]['cardId'];
	}
	else if(summon == 29){
		var size = getLength(god);
		summon = Math.floor(Math.random()* (size));

		card = god[summon]['cardId'];
	}
	else if(summon > 96 && summon <= 99){
		var size = getLength(ex);
		summon = Math.floor(Math.random()* (size));

		card = ex[summon]['cardId'];
	}
	else if(summon > 73 && summon <= 96){
		var size = getLength(five);
		summon = Math.floor(Math.random()* (size));

		card = five[summon]['cardId'];
	}
	else{
		var size = getLength(four);
		summon = Math.floor(Math.random()* (size));


		card = four[summon]['cardId'];
	}

	for(var n in window.tags){
		if(card == window.tags[n]['cardId']){
			if(window.tags[n]['tag'] == "ex-6" || window.tags[n]['tag'] == "limited-6" || window.tags[n]['tag'] == "special" || window.tags[n]['tag'] == "killers" || window.tags[n]['tag'] == "saitama"){
				card = card + '_6';
			}
		}
	}

	$('#chara-summon').attr('src', './/assets/img/units/' + card + '.png'); 

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
	
	var four = [];
	var five = [];
	var six = [];
	var ex = [];
	var god = [];
	
	var card;
	var length = createPool(four, five, six, ex, god);
	var roll =[];
	var id =[];
	for(var i = 1; i <= 10; i++){
		var summon = Math.floor(Math.random()* 99);
		roll.push(summon);
		if(summon == 1 || summon == 6 || summon == 10){
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
		else if(summon > 96 && summon <= 99){
			var size = getLength(ex);
			summon = Math.floor(Math.random()* (size));

			card = ex[summon]['cardId'];
			id.push(card);
		}
		else if(summon > 73 && summon <= 96){
			var size = getLength(five);
			summon = Math.floor(Math.random()* (size));

			card = five[summon]['cardId'];
			id.push(card);
		}
		else{
			var size = getLength(four);
			summon = Math.floor(Math.random()* (size));

			card = four[summon]['cardId'];
			id.push(card);
		}
		for(var n in window.tags){
			if(card == window.tags[n]['cardId']){
				if(window.tags[n]['tag'] == "ex-6" || window.tags[n]['tag'] == "limited-6" || window.tags[n]['tag'] == "special" || window.tags[n]['tag'] == "killers" || window.tags[n]['tag'] == "saitama"){
					card = card + '_6';
				}
			}
		}
		$('#chara-summon-' + i).attr('src', './assets/img/units/' + card + '.png'); 
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

function createPool(four, five, six, ex, god){
	var length = 0;
	for(var n in window.tags){
		if(window.tags[n]['rare'] == "4"){
			four.push(window.tags[n]);
		}
		else if(window.tags[n]['tag'] == 'ex'){
			ex.push(window.tags[n]); 
		}
		else if(window.tags[n]['tag'] == 'ex-6' || window.tags[n]['rare'] == 'killers'){
			six.push(window.tags[n]);
		}
		else if(window.tags[n]['tag'] == 'god'){
			god.push(window.tags[n]);
		}
		else if(window.tags[n]['rare'] == '5' && window.tags[n]['cardId'] != "20040118" && window.tags[n]['tag'] != "special" && window.tags[n]['tag'] != 'event'
			&& window.tags[n]['tag'] != 'pmiles'){
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