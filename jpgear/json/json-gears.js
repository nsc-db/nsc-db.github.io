(function(){
	
	function _createGears(id, name, type, normal, unique, chara){
		var model = '<tr">'
					+'		<td class="text-center"><img src="../common/assets/img/gear/ningu_' + id + '.png" height="60px" width="60px" /></td>'
					+'		<td>' 	+ name + '</td>'
					+'		<td class="text-center">' 	+ type + '</td>'
					+'		<td>' 	+ normal + '</td>'
					+'		<td>' 	+ unique + '</td>'
					+'		<td>' 	+ chara + '</td>'
					+'</tr>';
		return model;
	}
	
	
	$(document).ready(function(){
		
		// --------------------------------------------- CARDS
		
		var content = ''; 
		
		var gears = []; // << salvo o id de cards que eu criei

		var id = ''
		var name = '';
		var type = '';
		var normal = '';
		var unique = 'None';
		var chara = "None";

		for(var i in window.gear){
			var gear = window.gear[i];

			id = gear["crystalImageId"];
			name = gear["crystalName"];
			type = checkType(gear);
			normal = gear["crystalDescription"];

			for(var x in window.unique){
				if(gear["recipeId"] == window.unique[x]['targetCrystal']){
					unique = window.unique[x]['description'];

					chara = "";
					if(window.unique[x]['charaIds'] != 0){
						chara += "Chara ID: " + findChara(window.unique[x]['charaIds']);
					}
					if(window.unique[x]['cardIds'] != 0){
						chara += "\nUnique Cards: " + findCard(window.unique[x]['cardIds']);
					}
					if(window.unique[x]['charaGroupIds'] != 0){
						chara += "\nGroup: " + findGroup(window.unique[x]['charaGroupIds']);
					}

				}
				
			
			}

			
			content += _createGears(id, name, type, normal, unique, chara); // chama a função passando os dados do card
			unique = "None";
			chara = "None";
			
		}
		console.log(i, window.gear[i]);
		$('.gears').html(content);	
		
	});

	function checkType(gear){
		for(var i in window.key){
			if(window.key[i][0] == "gear"){
				if(gear['crystalType'] == window.key[i][1]){
					type = window.key[i][2];
					return type;
				}
			}
		}
	}

	function findChara(chara){
		var character = chara.split(',');
		var name = []
		var result = ""; 
		for(var i in character){
			if(result == ""){
				for(var x in window.charaname){
					if(character[i] == window.charaname[x]["charaProfileId"]){
						name.push(window.charaname[x]["name"]);
						result += window.charaname[x]["name"];
					}
				}
			}
			else{
				for(var x in window.charaname){
					if(character[i] == window.charaname[x]["charaProfileId"]){
						for(var n in name){
							if(name[n] != window.charaname[x]["name"]){
								name.push(window.charaname[x]["name"]);
								result += ", " + window.charaname[x]["name"];

							}
						}
					}
				}
			}
		}
		return result;
	}

	function findCard(card){
		var character = card.split(',');
		var name = [];
		var result = ""; 
		for(var i in character){
			if(result == ""){
				for(var y in window.chara){
					if(character[i] == window.chara[y]["cardId"]){
						for(var x in window.charaname){
							if(window.chara[y]['charaProfileId'] == window.charaname[x]["charaProfileId"]){
								name.push(window.charaname[x]["name"]);
								result += window.charaname[x]["name"];
							}
						}
					}
				}
				
			}
			else{
				for(var y in window.chara){
					if(character[i] == window.chara[y]["cardId"]){
						for(var x in window.charaname){
							if(window.chara[y]['charaProfileId'] == window.charaname[x]["charaProfileId"]){
								for(var n in name){
									if(name[n] != window.charaname[x]["name"]){
										name.push(window.charaname[x]["name"]);
										result += ", " + window.charaname[x]["name"];
									}
								}
							}
						}
					}
				}
			}
		}
		return result;
	}

	function findGroup(group){
		var character = group.split(',');
		var result = ""; 
		for(var i in character){
			if(result == ""){
				if(character[i] == "600000"){
					result += "暁";
				}
				else if(character[i] == "600001"){
					result += "うちは";
				}
				else if(character[i] == "600002"){
					result += "ペイン";
				}
				else if(character[i] == "100301"){
					result += "仙術";
				}
				else if(character[i] == "700000"){
					result += "六道ナルト, 十尾マダラ, 十尾オビト, 仮面の男, テンテン, 秋道チョウジ , 山中いの, 奈良シカマル, ダルイ";
				}
				else if(character[i] == "700001"){
					result += "六道ナルト, 十尾マダラ, 十尾オビト, 仮面の男, テンテン";
				}
			}
			else{
				
			}
		}
		return result;
	}
	
})();