(function(){

	function _createCard(data, name, type, hp, atk, def, spd, rare, affi, id, rate, tag, target, cast, damage, nature, voiced, type_tag){
		var image;
		//Rarity Check
		if(rare == 6){
			image = id + "_6.png";
		}
		else{
			image = id + ".png";
		}

		//Champion Check
		if(data["cost"] == 100){
			image = id + ".png";
		}
		//Create Entries in the Table
		var model = '<tr class="clickable" data-toggle="modal" data-target="#newModal">'
					+'		<td class="text-center"><img id="icon-table" src="../common/assets/img/units/icons/thumb_' + image + '"height="60px" width="60px" /><div style="display:none">' + data['cardId'] + '</td>'
					+'		<td class="text-left"><a href= "view/' + data["cardId"] + '" data-toggle="modal" data-target="#newModal">' + name + ", " + data["cardSubName"] + '</a></td>'
					+'		<td class="text-center"><img id="icon-table" src="../common/assets/img/rarity/' + type_tag + '" /><div style="display:none">' + type_tag + '</div></td>'
					+'		<td class="text-center affiliation" affiliation="' + affi + '"><div style="display:none;">' + affi + '</div></td>'
					+'		<td class="text-center rarity" rarity="' + rare + '"><div style="display:none">' + rare + '</div></td>'
					+'		<td class="text-center">' + data["cost"] + '</td>'
					+'		<td class="text-center">' + hp + '</td>'
					+'		<td class="text-center">' + atk + '</td>'
					+'		<td class="text-center">' + def + '</td>'
					+'		<td class="text-center">' + spd + '</td>'
					+'		<td class="text-center">' + rate + '</td>'					
					+'		<td class="text-center">' + tag + '</td>'
					+'		<td class="text-center">' + target + '</td>'		
					+'		<td class="text-center">' + cast + '</td>'		
					+'		<td class="text-center">' + damage + '</td>'	
					+'		<td class="text-center">' + nature + '</td>'
					+'		<td class="text-center">' + voiced + '</td>'																																						
					+'</tr>';
		return model;
	}
	
	$(document).ready(function(){
		
		// --------------------------------------------- CARDS
		
		var content = ''; 
		
		var units = []; // Character's Info
		var name = '';	// Charavter Name
		var type = '';	// Character Type
		var hp;			// Character HP
		var atk;		// Character ATK
		var def;		// Character DEF
		var spd;		// Character SPD
		var rare;		// Character Rarity
		var affi;		// Character Affiliation
		var id;			// Character ID
		var tags;		// Character Tag
		var target = '';// Character Attack Target
		var cast = '';	// Character Chakra Cost
		var damage = '';// Character Damage Type
		var nature = '';// Character Nature
		var voiced = '';
		var type_tag = '';

		for(var i in window.chara){
			var unit = window.chara[i];

			if(unit["translated"] == 1){
				//Adds Character Name
				for(var y in window.charaname){
					if(window.charaname[y]["charaProfileId"] == unit["charaProfileId"]){
						name = window.charaname[y]['name'];
					}
				}
				//Set default max stats
				hp = unit["hpMax"];
				atk = unit["attackMax"];
				def = unit["defenseMax"];
				spd = unit["speedMax"];
				rare = unit["rare"];
				//Check Type and Convert to Kanji
				type = checkType(unit);

				//Add Stats from Evo Bonus
				for(var n in window.evo){
					if(unit["cardId"] == window.evo[n]['cardId']){
						hp = parseInt(hp,10) + parseInt(window.evo[n]['hp'], 10);
						atk = parseInt(atk,10) + parseInt(window.evo[n]['attack'], 10);
						def = parseInt(def,10) + parseInt(window.evo[n]['defense'], 10);
						spd = parseInt(spd,10) + parseInt(window.evo[n]['speed'], 10);
						if((unit["rare"] != window.evo[n]['rare']) && window.evo[n]['rare'] != 0){
							rare = window.evo[n]['rare'];
						}
					}
				}
				id = unit['cardId'];

				//Affi
				affi = checkAffi(unit);
				rate = window.tags[i]['rate'];
				tag = window.tags[i]['tag'];

				type_tag += type + "_" + rare;

				if(tag == "ex-5" || tag == "ex-6"){
					type_tag += "_ex.png";
				}
				else if(tag == "god"){
					type_tag += "_god.png";
				}
				else if(tag == "pvp-reward"){
					type_tag += "_pvp.png";
				}
				else{
					type_tag += ".png";
				}

				//Find Skills Info
				for(var n in window.skill){
					//Find Skill 1 Info
					if(unit["battleSkillId1"] == window.skill[n]["cardBattleSkillId"]){
						if(target != ''){
							target += checkTarget(window.skill[n]);
							cast += checkWait(window.skill[n])
							nature += checkSkill(window.skill[n]);
							if(checkTarget(window.skill[n]) == "One" || checkTarget(window.skill[n]) == "All"){
								if(checkDamage(window.skill[n]) == "強化"){
									damage += "Debuff";
								}
								else{
									damage += checkDamage(window.skill[n]);
								}
							}
							else{
								damage += checkDamage(window.skill[n]);
							}
						}
						else{
							target += checkTarget(window.skill[n]) +",";
							cast += checkWait(window.skill[n]) + ",";
							nature += checkSkill(window.skill[n]) + ",";
							if(checkTarget(window.skill[n]) == "One" || checkTarget(window.skill[n]) == "All"){
								if(checkDamage(window.skill[n]) == "強化"){
									damage += "Debuff,";
								}
								else{
									damage += checkDamage(window.skill[n]) + ",";
								}
							}
							else{
								damage += checkDamage(window.skill[n]) + ",";
							}
						}
					}
					//Find Skill 2 Info
					if(unit["battleSkillId2"] == window.skill[n]["cardBattleSkillId"]){
						if(target == ''){
							target += checkTarget(window.skill[n]) + ",";
							cast += checkWait(window.skill[n]) + ","; 
							nature += checkSkill(window.skill[n]) + ",";
							if(checkTarget(window.skill[n]) == "One" || checkTarget(window.skill[n]) == "All"){
								if(checkDamage(window.skill[n]) == "強化"){
									damage += "Debuff,";
								}
								else{
									damage += checkDamage(window.skill[n]) + ",";
								}
							}
							else{
								damage += checkDamage(window.skill[n]) + ",";
							}
						}
						else{
							target += checkTarget(window.skill[n]);
							cast += checkWait(window.skill[n]);
							nature += checkSkill(window.skill[n]);
							if(checkTarget(window.skill[n]) == "One" || checkTarget(window.skill[n]) == "All"){
								if(checkDamage(window.skill[n]) == "強化"){
									damage += "Debuff";
								}
								else{
									damage += checkDamage(window.skill[n]);
								}
							}
							else{
								damage += checkDamage(window.skill[n]);
							}
						}

						
					}
				}

				for(var n in window.vo){
					if(id == window.vo[n]['cardId']){
						voiced = 1;
						break;
					}
					else{
						voiced = 0;
					}
				}

				if(units.indexOf(chara[0]) == -1){ // << verifica se já criou o card pelo [ID]
					units.push(unit[0]); // << Salvo o id do card, para impedir cards repetidos de existirem			
					content += _createCard(unit, name, type, hp, atk, def, spd, rare, affi, id, rate, tag, target, cast, damage, nature, voiced, type_tag); // chama a função passando os dados do card
					target = '';
					cast = '';
					damage = '';
					nature = '';
					voiced = 0;
					type_tag = '';

				}
			}
		}
		console.log(i, window.chara[i]);
		
		$('.cards').html(content);
		
		// --------------------------------------------- CLICK
		
		// Para cada coluna clicável
		$('.clickable').click(function(e){
		   // Seleciono o e <a href> e extraio o ID do link
		   e = $(this).find('a[href*="view"]');
		   if(e != null){
				var id = parseInt(e.attr('href').split('view/').pop());
				var thumb = $(this).find('img').attr('src');
				var unit = [];
				var cid = 0;
				// Procura pelas informações da unidade
				for(i in window.chara){
					i = window.chara[i];
					// Verifica o ID da unidade
					if(i["cardId"]==id) {
						/*
							Se for o id que procuramos, salva o index 0 pra ser o 'five' e o index 1 para ser o 'six', para isso
							  ▼ ID do card                                                 Raridade, 0 para 'five' e um para 'six' ▼ 
							[579, "Madara Uchiha, End of the World", "Body", "None", 6, 35, 14789, 17589, 14605, 163, 16, 16, 147, 0]
							[579, "Madara Uchiha, End of the World", "Body", "None", 6, 35, 14789, 17589, 14605, 163, 16, 16, 147, 1]
									  ▲ ------------------ O que cada dessas variaveis significam? ----------------------------▲
						*/
						unit[i[i.length-1]] = i;
					}
					cid = id;
				}
				// Crio um objeto com os dois tipos de cards
				var cards = {
					"five":{
					  	unit:chara[0]
    				},
					"six":{
				 		unit:chara[0]
					}
				}
				console.log(cards);
				_buildCardModal(id, thumb, cards, cid);
		   }
		});
		
		
	});

	function _buildCardModal(id, thumb, cards, cid){
		// Icon
		checkImage('../common/assets/img/units/icons/thumb_' + cid + '_6.png', 
			function(){
			 $('#icon-unit').attr('src', '../common/assets/img/units/icons/thumb_' + cid + '_6.png'); 
			}, 
			function(){
			 $('#icon-unit').attr('src', '../common/assets/img/units/icons/thumb_' + cid + '.png'); 
			  } );
		var name = '';
		for(var x in window.chara){
			if(cid == window.chara[x]['cardId']){
				for(var y in window.charaname){
					if(window.charaname[y]["charaProfileId"] == window.chara[x]["charaProfileId"]){
						name = window.charaname[y]['name'];
					}
				}
			}
		}
		// Name
		for(var y in window.chara){
			if(cid == window.chara[y]['cardId']){
				$('#name-unit').text(name + ', ' + window.chara[y]['cardSubName']);
			}
		}
		//Type
		//Type
		for(var x in window.chara){
			if(cid == window.chara[x]['cardId']){
				var change = 0;
				var stuff = '';
				var rare;
				stuff += checkType(window.chara[x]);

				//Add Stats from Evo Bonus
				for(var n in window.evo){
					if(window.chara[x]["cardId"] == window.evo[n]['cardId']){
						if((window.chara[x]["rare"] != window.evo[n]['rare']) && window.evo[n]['rare'] != 0){
							rare = window.evo[n]['rare'];
							change = 1;
							break;
						}
					}
				}
				if (change == 0){
					rare = window.chara[x]['rare']
				}
				stuff += "_" + rare;


				if(window.tags[x]['tag'] == "ex-5" || window.tags[x]['tag'] == "ex-6"){
					stuff += "_ex.png";
				}
				else if(window.tags[x]['tag'] == "god"){
					stuff += "_god.png";
				}
				else if(window.tags[x]['tag'] == "pvp-reward"){
					stuff += "_pvp.png";
				}
				else{
					stuff += ".png";
				}

				$('#type-unit').attr('src', '../common/assets/img/rarity/' + stuff); 
			}
		}
	
		
		//Character Image
		checkImage('../common/assets/img/units/' + cid + '.png', 
			function(){
			 $('#card-art-five-star').attr('src', '../common/assets/img/units/' + cid + '.png'); 
			}, 
			function(){
			 $('#card-art-five-star').attr('src', '../common/assets/img/units/' + cid + '_6.png');
			  } );
		
		checkImage('../common/assets/img/units/' + cid + '_6.png', 
			function(){
			 $('#card-art-six-star').attr('src', '../common/assets/img/units/' + cid + '_6.png'); 
			}, 
			function(){
			 $('#card-art-six-star').attr('src', '../common/assets/img/units/' + cid + '.png');
			  } );
		
		
		/*
			Usamos os nome five e six para determinar o ID a ser escrito os valores
						   ▼ j				       ▼ i					▼ k
			$('#' + nome_do_detalhe + '_' + ('five'|'six')).text(valor_do_detalhe);
			
			Nota: Precisamos determinar a regra das variaves dentro de [unit] pra poder escreve-las na modal, e também a thumb e as duas imagens do card
			
		*/
		
		// Character Stats
		
		
		for(i in cards){
			//Stats
			var c = cards[i];
			var ninguCharaId = [];
			var ninguCardId = [];
			var ninguGroup = [];
			var ninguGearList = [];

			//Character Lead
			for(var x in window.chara){
				if(cid == window.chara[x]['cardId']){

					//Character Voice
					for(var y in window.vo){
						if(cid == window.vo[y]['cardId']){
							
							var dir = String(window.vo[y]['dirName']);
							var appear = window.vo[y]['voiceAppear'];
							var skill = window.vo[y]['voiceSkill1'];
							var pursuit =  window.vo[y]['voicePursuit'];
							var win = window.vo[y]['voiceWin'];
							var death = window.vo[y]['voiceDeath'];

							var voice = '<h3>Voice:&ensp; </h3>'
									  + '<button id="voiceAppear" class="" value="" onclick="voiceAppear()">Appear</button>'
									  + '<button id="voiceSkill" class="" value="" onclick="voiceSkill()">Skill</button>'
									  + '<button id="voiceWin" class="" value="" onclick="voiceWin()">Win</button>'
									  + '<button id="voiceDeath" class="" value="" onclick="voiceDeath()">Death</button>';
									 

							document.getElementById("voice").innerHTML = voice;
							$("#voiceAppear").attr('class', dir);
							$("#voiceAppear").attr('value', appear);
							$("#voiceSkill").attr('class', dir);
							$("#voiceSkill").attr('value', skill);
							$("#voicePursuit").attr('class', dir);
							$("#voicePursuit").attr('value', pursuit);
							$("#voiceWin").attr('class', dir);
							$("#voiceWin").attr('value', win);
							$("#voiceDeath").attr('class', dir);
							$("#voiceDeath").attr('value', death);
							break;
						}
						else{
							document.getElementById("voice").innerHTML = "";

						}
					}

					for(var y in window.unique){
						var unique = window.unique[y]['charaIds'].split(",");
						for(var z in unique){
							if(window.chara[x]['charaProfileId'] == unique[z]){
								ninguCharaId.push(window.unique[y]);
								break;
							}
						}
						var cardsID = window.unique[y]['cardIds'].split(",");
						for(var z in cardsID){
							if(window.chara[x]['cardId'] == cardsID[z]){
								ninguCardId.push(window.unique[y]);
								break;
							}
						}
						var group = window.unique[y]['charaGroupIds'].split(",");
						for(var z in group){
							if(group == "600000" && window.chara[x]['charaType'] == '8'){
								ninguGroup.push(window.unique[y]);
								break;
							}
							if(group == "600001"){
								if(window.chara[x]['charaProfileId'] == "201" || window.chara[x]['charaProfileId'] == "202" || window.chara[x]['charaProfileId'] == "203" || window.chara[x]['charaProfileId'] == "204" ||
								window.chara[x]['charaProfileId'] == "205" ||	window.chara[x]['charaProfileId'] == "206" || window.chara[x]['charaProfileId'] == "207" || window.chara[x]['charaProfileId'] == "208" 
								|| window.chara[x]['charaProfileId'] == "210" || window.chara[x]['charaProfileId'] == "4101" || window.chara[x]['charaProfileId'] == "4701" || window.chara[x]['charaProfileId'] == "11601" || window.chara[x]['charaProfileId'] == "11602" 
								|| window.chara[x]['charaProfileId'] == "11603" || window.chara[x]['charaProfileId'] == "13701" || window.chara[x]['charaProfileId'] == "13702"  || window.chara[x]['charaProfileId'] == "13705"  || window.chara[x]['charaProfileId'] == "13801" 
								|| window.chara[x]['charaProfileId'] == "50801" || window.chara[x]['charaProfileId'] == "50901" || window.chara[x]['charaProfileId'] == "50902" || window.chara[x]['charaProfileId'] == "50903" ){
									ninguGroup.push(window.unique[y]);
									break;
								}
							}
							if(group == "700001"){
								if(window.chara[x]['charaProfileId'] == "110" || window.chara[x]['charaProfileId'] == "14001" ||　window.chara[x]['charaProfileId'] == "109" || window.chara[x]['charaProfileId'] == "50903" ||　window.chara[x]['charaProfileId'] == "111"
								|| window.chara[x]['charaProfileId'] == "1202"	){
									ninguGroup.push(window.unique[y]);
									break;
								}
							}
							if(group == "700000"){
								if(window.chara[x]['charaProfileId'] == "110" || window.chara[x]['charaProfileId'] == "14001" ||　window.chara[x]['charaProfileId'] == "109" || window.chara[x]['charaProfileId'] == "50903"
								|| window.chara[x]['charaProfileId'] == "1202" || window.chara[x]['charaProfileId'] == "20301"　|| window.chara[x]['charaProfileId'] == "402"	|| window.chara[x]['charaProfileId'] == "502"　|| window.chara[x]['charaProfileId'] == "602"){
									ninguGroup.push(window.unique[y]);
									break;
								}
							}
							if(group == "100301"){
								if(window.chara[x]['charaProfileId'] == "110" || window.chara[x]['charaProfileId'] == "106" ||　window.chara[x]['charaProfileId'] == "109"){
									ninguGroup.push(window.unique[y]);
									break;
								}
							}
							if(group == "600002"){
								if(window.chara[x]['charaProfileId'] == "11801" || window.chara[x]['charaProfileId'] == "13304" ||　window.chara[x]['charaProfileId'] == "13101"){
									ninguGroup.push(window.unique[y]);
									break;
								}
							}
							if(group == "300001"){
								if(window.chara[x]['charaProfileId'] == "1701" || window.chara[x]['charaProfileId'] == "1702" || window.chara[x]['charaProfileId'] == "1703" 
								|| window.chara[x]['charaProfileId'] == "1704" || window.chara[x]['charaProfileId'] == "1706" ){
									ninguGroup.push(window.unique[y]);
									break;
								}
							}
							if(group == "300002"){
								if(window.chara[x]['charaProfileId'] == "101" || window.chara[x]['charaProfileId'] == "102" || window.chara[x]['charaProfileId'] == "103" || window.chara[x]['charaProfileId'] == "104" ||
								window.chara[x]['charaProfileId'] == "105" ||	window.chara[x]['charaProfileId'] == "106" || window.chara[x]['charaProfileId'] == "107" || window.chara[x]['charaProfileId'] == "108" 
								|| window.chara[x]['charaProfileId'] == "110" || window.chara[x]['charaProfileId'] == "111" ){
									ninguGroup.push(window.unique[y]);
									break;
								}
							}
							if(group == "300003"){
								if(window.chara[x]['charaProfileId'] == "201" || window.chara[x]['charaProfileId'] == "202" || window.chara[x]['charaProfileId'] == "203" || window.chara[x]['charaProfileId'] == "204" ||
								window.chara[x]['charaProfileId'] == "205" ||	window.chara[x]['charaProfileId'] == "206" || window.chara[x]['charaProfileId'] == "207" || window.chara[x]['charaProfileId'] == "208" 
								|| window.chara[x]['charaProfileId'] == "210" ){
									ninguGroup.push(window.unique[y]);
									break;
								}
							}
							if(group == "300002,300003"){
								if(window.chara[x]['charaProfileId'] == "101" || window.chara[x]['charaProfileId'] == "102" || window.chara[x]['charaProfileId'] == "103" || window.chara[x]['charaProfileId'] == "104" ||
								window.chara[x]['charaProfileId'] == "105" ||	window.chara[x]['charaProfileId'] == "106" || window.chara[x]['charaProfileId'] == "107" || window.chara[x]['charaProfileId'] == "108" 
								|| window.chara[x]['charaProfileId'] == "110" || window.chara[x]['charaProfileId'] == "111" || window.chara[x]['charaProfileId'] == "201" || window.chara[x]['charaProfileId'] == "202" || 
								window.chara[x]['charaProfileId'] == "203" || window.chara[x]['charaProfileId'] == "204" || window.chara[x]['charaProfileId'] == "205" ||	window.chara[x]['charaProfileId'] == "206" ||
								 window.chara[x]['charaProfileId'] == "207" || window.chara[x]['charaProfileId'] == "208" || window.chara[x]['charaProfileId'] == "210" ){
									ninguGroup.push(window.unique[y]);
									break;
								}
							}
						}
					}
					
					var gear = '';
					for(var y in ninguCharaId){
						for(var z in window.gear){
							if(ninguCharaId[y]['targetCrystal'] == window.gear[z]['recipeId']){
								var ningu = window.gear[z];
								ninguGearList.push(window.gear[z]['crystalImageId']);
								break;
							}
						}
						var gearType = checkGearType(ningu);
						gear += '<div class="base-gear">' 
								+		'<div class="icon">'
								+			'<img src="../common/assets/img/gear/ningu_' + ningu['crystalImageId'] + '.png">'
								+		'</div>' 
								+		'<div class="info">'
								+			'<div class="header">'
								+				'<div class="type">'
								+					'<h4 type="' + gearType + '">' + gearType + '</h4>'
								+				'</div>'
								+			'<div class="title">'
								+				'<h3>' + ningu['crystalName'] + '</h3>'
								+			'</div>'
								+		'</div>'
								+		'<div class="description">'
								+			'<p>' + ninguCharaId[y]['description'] + '</p>'
								+		'</div>'
								+	'</div>'
								+'</div>';
					}
					for(var y in ninguCardId){
						var dupe = 0;
						for(var z in window.gear){
							if(ninguCardId[y]['targetCrystal'] == window.gear[z]['recipeId']){
								for(var g in ninguGearList){
									if(ninguGearList[g] == window.gear[z]["crystalImageId"]){
										 dupe = 1;
									}
								}
								if(dupe == 0){
									var ningu = window.gear[z];
								}
								break;
							}
						}
						var gearType = checkGearType(ningu);
						if(dupe == 0){
							gear += '<div class="base-gear">' 
									+		'<div class="icon">'
									+			'<img src="../common/assets/img/gear/ningu_' + ningu['crystalImageId'] + '.png">'
									+		'</div>' 
									+		'<div class="info">'
									+			'<div class="header">'
									+				'<div class="type">'
									+					'<h4 type="' + gearType + '">' + gearType + '</h4>'
									+				'</div>'
									+			'<div class="title">'
									+				'<h3>' + ningu['crystalName'] + '</h3>'
									+			'</div>'
									+		'</div>'
									+		'<div class="description">'
									+			'<p>' + ninguCardId[y]['description'] + '</p>'
									+		'</div>'
									+	'</div>'
									+'</div>';
						}
					}
					for(var y in ninguGroup){
						var dupe = 0;
						for(var z in window.gear){
							if(ninguGroup[y]['targetCrystal'] == window.gear[z]['recipeId']){
								for(var g in ninguGearList){
									if(ninguGearList[g] == window.gear[z]["crystalImageId"]){
										 dupe = 1;
									}
								}
								if(dupe == 0){
									var ningu = window.gear[z];
								}
								break;
							}
						}
						var gearType = checkGearType(ningu);
						if(dupe == 0){
							gear += '<div class="base-gear">' 
									+		'<div class="icon">'
									+			'<img src="../common/assets/img/gear/ningu_' + ningu['crystalImageId'] + '.png">'
									+		'</div>' 
									+		'<div class="info">'
									+			'<div class="header">'
									+				'<div class="type">'
									+					'<h4 type="' + gearType + '">' + gearType + '</h4>'
									+				'</div>'
									+			'<div class="title">'
									+				'<h3>' + ningu['crystalName'] + '</h3>'
									+			'</div>'
									+		'</div>'
									+		'<div class="description">'
									+			'<p>' + ninguGroup[y]['description'] + '</p>'
									+		'</div>'
									+	'</div>'
									+'</div>';
						}
					}

					document.getElementById("gear").innerHTML = gear;
					document.getElementById("gear-six").innerHTML = gear;

					for(var n in window.lead){
						if(window.chara[x]['leaderSkillId'] == window.lead[n]['cardLeaderSkillId']){
							
							//A
							$('#leadname-' + i).text(window.chara[x]['cardSubName']);
							$('#lead-' + i).text(window.lead[n]['description']);
							$('#leadname-six').text(window.chara[x]['cardSubName']);
							$('#lead-six').text(window.lead[n]['description']);
						}
					}

					for(var n in window.ability){
						if(window.chara[x]['abilityId1'] == window.ability[n]['abilityId']){
							var check = 0;
							$('#ability1name-' + i).text(window.ability[n]['abilityName']);
							$('#ability1-' + i).text(window.ability[n]['abilityDescription']);
							//Check Evo File
							for(var g in window.evo){
								//Compare Character ID to Evo ID
								if(window.chara[x]['cardId'] == window.evo[g]['cardId']){
									//Check if Evo ID has changed
									if(window.evo[g]['abilityId1'] != 0){
										//Check all abilities
										for(var t in window.ability){
											//Check 
											if(window.evo[g]['abilityId1'] == window.ability[t]['abilityId']){
												$('#ability1name-six').text(window.ability[t]['abilityName']);
												$('#ability1-six').text(window.ability[t]['abilityDescription']);
												check = 1;
											}
										}
									}
								}
							}

							if(check == 0){
								$('#ability1name-six').text(window.ability[n]['abilityName']);
								$('#ability1-six').text(window.ability[n]['abilityDescription']);
							}
						}

						if(window.chara[x]['abilityId2'] == window.ability[n]['abilityId']){
							var check = 0;
							$('#ability2name-' + i).text(window.ability[n]['abilityName']);
							$('#ability2-' + i).text(window.ability[n]['abilityDescription']);
							//Check Evo File
							for(var g in window.evo){
								//Compare Character ID to Evo ID
								if(window.chara[x]['cardId'] == window.evo[g]['cardId']){
									//Check if Evo ID has changed
									if(window.evo[g]['abilityId2'] != 0){
										//Check all abilities
										for(var t in window.ability){
											//Check 
											if(window.evo[g]['abilityId2'] == window.ability[t]['abilityId']){
												$('#ability2name-six').text(window.ability[t]['abilityName']);
												$('#ability2-six').text(window.ability[t]['abilityDescription']);
												check = 1;
											}
										}
									}
								}
							}

							if(check == 0){
								$('#ability2name-six').text(window.ability[n]['abilityName']);
								$('#ability2-six').text(window.ability[n]['abilityDescription']);
							}
						}
					}

					for(var n in window.skill){
						if(window.chara[x]['battleSkillId1'] == window.skill[n]['cardBattleSkillId']){
							var check = 0;
							var wait = '';
							for(var g in window.skillname){
								if(window.skill[n]['nameIdx'] == window.skillname[g]['cardBattleSkillNameId']){
									$('#skill1name-' + i).text(window.skillname[g]['eng']);
									$('#skill1ogname-' + i).text(window.skillname[g]['name']);
									$('#skill1name-six').text(window.skillname[g]['eng']);
									$('#skill1ogname-six').text(window.skillname[g]['name']);
								}
							}
							//Replace Type
							skill = checkSkill(window.skill[n]);
							$('#skill1type-' + i).text(skill);
							//Replace Wait
							wait = checkWait(window.skill[n]);
							$('#skill1speed-' + i).text(wait);
							$('#skill1cost-' + i).text(window.skill[n]['battleSkillCnt']);
							$('#skill1-' + i).text(window.skill[n]['description']);



							for(var g in window.evo){
								//Compare Character ID to Evo ID
								if(window.chara[x]['cardId'] == window.evo[g]['cardId']){
									//Check if Evo ID has changed
									if(window.evo[g]['battleSkillId1'] != 0){
										//Check all Skill
										for(var t in window.skill){
											//Check 
											if(window.evo[g]['battleSkillId1'] == window.skill[t]['cardBattleSkillId']){
												skill = checkSkill(window.skill[t]);
												$('#skill1type-six').text(skill);
												wait = checkWait(window.skill[t]);

												$('#skill1speed-six').text(wait);
												$('#skill1cost-six').text(window.skill[t]['battleSkillCnt']);
												$('#skill1-six').text(window.skill[t]['description']);
	
												check = 1;
											}
										}
									}
								}
							}

							if(check == 0){
								skill = checkSkill(window.skill[n]);
								$('#skill1type-six').text(skill);
								wait = checkWait(window.skill[n]);

								$('#skill1speed-six').text(wait);
								$('#skill1cost-six').text(window.skill[n]['battleSkillCnt']);
								$('#skill1-six').text(window.skill[n]['description']);
							}
						}
							
						if(window.chara[x]['battleSkillId2'] == window.skill[n]['cardBattleSkillId']){
							var check = 0;
							var wait = '';
							var skill = '';
							for(var g in window.skillname){
								if(window.skill[n]['nameIdx'] == window.skillname[g]['cardBattleSkillNameId']){
									$('#skill2name-' + i).text(window.skillname[g]['eng']);
									$('#skill2ogname-' + i).text(window.skillname[g]['name']);
									$('#skill2name-six').text(window.skillname[g]['eng']);
									$('#skill2ogname-six').text(window.skillname[g]['name']);
								}
							}
							//Replace Type with Words
							skill = checkSkill(window.skill[n]);
							$('#skill2type-' + i).text(skill);
							
							//Replace Wait with Words
							wait = checkWait(window.skill[n]);
							$('#skill2speed-' + i).text(wait);
							
							$('#skill2cost-' + i).text(window.skill[n]['battleSkillCnt']);
							$('#skill2-' + i).text(window.skill[n]['description']);
							
							for(var g in window.evo){
								//Compare Character ID to Evo ID
								if(window.chara[x]['cardId'] == window.evo[g]['cardId']){
									//Check if Evo ID has changed
									if(window.evo[g]['battleSkillId2'] != 0){
										//Check all Skill
										for(var t in window.skill){
											//Check 
											if(window.evo[g]['battleSkillId2'] == window.skill[t]['cardBattleSkillId']){
												skill = checkSkill(window.skill[t]);
												$('#skill2type-six').text(skill);
												wait = checkWait(window.skill[t]);

												$('#skill2speed-six').text(wait);
												$('#skill2cost-six').text(window.skill[t]['battleSkillCnt']);
												$('#skill2-six').text(window.skill[t]['description']);
	
												check = 1;
											}
										}
									}
								}
							}

							if(check == 0){
								skill = checkSkill(window.skill[n]);
								$('#skill2type-six').text(skill);
								wait = checkWait(window.skill[n]);

								$('#skill2speed-six').text(wait);
								$('#skill2cost-six').text(window.skill[n]['battleSkillCnt']);
								$('#skill2-six').text(window.skill[n]['description']);
							}
						}
					}
				}
			}
		
		}
		
		// Abre a modal
		$('#card-modal').modal();
		
	}

	function checkImage(imageSrc, good, bad) {
	    var img = new Image();
	    img.onload = good; 
	    img.onerror = bad;
	    img.src = imageSrc;
	}

	function checkImage(imageSrc, good, bad, image) {
	    var img = new Image();
	    img.onload = good; 
	    img.onerror = bad;
	    img.src = imageSrc;
	}

	function checkGearType(gear){
		for(var i in window.key){
			if(window.key[i][0] == "gear"){
				if(gear['crystalType'] == window.key[i][1]){
					type = window.key[i][2];
					return type;
				}
			}
		}
	}

	function checkType(unit){
		for(var i in window.key){
			if(window.key[i][0] == 'type'){
				if(unit['attribute'] == window.key[i][1]){
					type = window.key[i][2];
					return type;
				}
			}
		}
	}

	function checkTarget(unit){
		for(var i in window.key){
			if(window.key[i][0] == 'target'){
				if(unit['targetMode'] == window.key[i][1]){
					type = window.key[i][2];
					return type;
				}
			}
		}
	}

	function checkDamage(unit){
		for(var i in window.key){
			if(window.key[i][0] == 'damage'){
				if(unit['calcType'] == window.key[i][1]){
					type = window.key[i][2];
					return type;
				}
			}
		}
	}

	function checkAffi(unit){
		for(var i in window.key){
			if(window.key[i][0] == 'affi'){
				if(unit['charaType'] == window.key[i][1]){
					affi = window.key[i][2];
					return affi;
				}
			}
		}
	}

	function checkWait(skill){
		var y;
		var wait;
		for(var i in window.key){
			if(window.key[i][0] == 'wait'){
				if(skill['waitTime'] == window.key[i][1]){
					wait = window.key[i][2];
					return wait;
				}
			}
		}
	}

	function checkSkill(skill){
		var y;
		var nature;
		for(var i in window.key){
			if(window.key[i][0] == 'skill'){
				if(skill['battleSkillType'] == window.key[i][1]){
					nature = window.key[i][2];
					return nature;
				}
			}
		}
	}

})();