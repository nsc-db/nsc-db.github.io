(function(){

	function _createCard(name, subname, cost, type, hp, atk, def, spd, rare, affi, id, rate, tag, target, cast, damage, nature, voiced, type_tag, pvp, nickname){
		var image;
		//Rarity Check
		if(rare == 6){
			image = id + "_6.png";
		}
		else{
			image = id + ".png";
		}

		//Champion Check
		if(cost == 100){
			image = id + ".png";
		}
		//Create Entries in the Table
		var model = '<tr class="clickable" data-toggle="modal" data-target="#newModal">'
					+'		<td class="text-center"><img id="icon-table" src="../common/assets/img/units/icons/thumb_' + image + '"height="60px" width="60px" /><div style="display:none">' + id + '</td>'
					+'		<td class="text-left"><a href= "view/' + id + '" data-toggle="modal" data-target="#newModal">' + name + ", " + subname + '</a></td>'
					+'		<td class="text-center"><img id="icon-table" src="../common/assets/img/rarity/' + type_tag + '" /><div style="display:none">' + type_tag + '</div></td>'
					+'		<td class="text-center affiliation" affiliation="' + affi + '"><div style="display:none;">' + affi + '</div></td>'
					+'		<td class="text-center rarity" rarity="' + rare + '"><div style="display:none">' + rare + '</div></td>'
					+'		<td class="text-center">' + cost + '</td>'
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
					+'		<td class="text-center">' + pvp + '</td>'	
					+'		<td class="text-center">' + nickname + '</td>'																																																																																																																																																		
					+'</tr>';
		return model;
	}
	
	$(document).ready(function(){
		
		// --------------------------------------------- CARDS
		
		var content = ''; 
		
		var units = []; // Character's Info
		var name = '';	// Charavter Name
		var subname = ''
		var cost
		var type = '';	// Character Type
		var hp;			// Character HP
		var atk;		// Character ATK
		var def;		// Character DEF
		var spd;		// Character SPD
		var rare;		// Character Rarity
		var affi;		// Character Affiliation
		var id;			// Character ID
		var tag;		// Character Tag
		var target = '';// Character Attack Target
		var cast = '';	// Character Chakra Cost
		var damage = '';// Character Damage Type
		var nature = '';// Character Nature
		var voiced = '';
		var type_tag = '';
		var pvp = '';
		var nickname = '';

		for(var x in full){

				//Adds Character Name
				for(var y in window.charaname){
	                if(window.charaname[y]["charaProfileId"] == full[x].charaProfileId){
	                    name = window.charaname[y]['name'];
	                }
	            }  
	            subname = full[x].cardSubName

				//Set default max stats
            	cost = full[x].cost
				hp = full[x].hp 
				atk = full[x].attack
				def = full[x].defense
				spd = full[x].speed
				rare = full[x].rare
				//Check Type and Convert to Kanji
				type = checkTypeUpdate(x);	

				id = x;

				//Affi
				affi = checkAffi(x);
				rate = 'Something';
				tag = full[x].tag;
				pvp = 'Something';
				nickname = full[x].nickname;				
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
				var target = checkTarget(full[x].upgradeskill1target) + "," + checkTarget(full[x].upgradeskill2target);// Character Attack Target
	            var cast = full[x].upgradeskill1spd + "," + full[x].upgradeskill2spd;   // Character Chakra Cost
	            var damage = checkDamage(full[x].upgradeskill1calctype) + "," + checkDamage(full[x].upgradeskill2calctype);// Character Damage Type
	            var nature = full[x].upgradeskill1type + "," + full[x].upgradeskill2type;// Character Nature

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
					units.push(full[x]); // << Salvo o id do card, para impedir cards repetidos de existirem			
					content += _createCard(name, subname, cost, type, hp, atk, def, spd, rare, affi, id, rate, tag, target, cast, damage, nature, voiced, type_tag, pvp, nickname); // chama a função passando os dados do card
					target = '';
					cast = '';
					damage = '';
					nature = '';
					voiced = 0;
					type_tag = '';

				}
			}
		
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
				for(i in full){
					i = full[i];
					// Verifica o ID da unidade
					if(i.cardID==id) {
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

		checkImage('../common/assets/img/units/icons/thumb_' + id + '_6.png', 
			function(){
			 $('#icon-unit').attr('src', '../common/assets/img/units/icons/thumb_' + id + '_6.png'); 
			}, 
			function(){
			 $('#icon-unit').attr('src', '../common/assets/img/units/icons/thumb_' + id + '.png'); 
			  } );

		var name = '';
		
		for(var y in window.charaname){
            if(window.charaname[y]["charaProfileId"] == full[id].charaProfileId){
                name = window.charaname[y]['name'];
            }
        }  
	    var subname = full[id].cardSubName
	    $('#name-unit').text(name + ', ' + subname);
		
		//Type
		var type = checkTypeUpdate(id)
		var rare = full[id].rare
		var tag = full[id].tag
		var type_tag = type + "_" + rare;

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
		$('#type-unit').attr('src', '../common/assets/img/rarity/' + type_tag); 
		
		//Character Image
		checkImage('../common/assets/img/units/' + id + '.png', 
			function(){
			 $('#card-art-five-star').attr('src', '../common/assets/img/units/' + id + '.png'); 
			}, 
			function(){
			 $('#card-art-five-star').attr('src', '../common/assets/img/units/' + id + '_6.png');
			  } );
		
		checkImage('../common/assets/img/units/' + id + '_6.png', 
			function(){
			 $('#card-art-six-star').attr('src', '../common/assets/img/units/' + id + '_6.png'); 
			}, 
			function(){
			 $('#card-art-six-star').attr('src', '../common/assets/img/units/' + id + '.png');
			  } );
		
		for(i in cards){

			var ninguCharaId = [];
			var ninguCardId = [];
			var ninguGroup = [];
			var ninguGearList = [];

			for(var x in window.chara){
				if(cid == window.chara[x]['cardId']){

					for(var y in window.vo){
						if(id == window.vo[y]['cardId']){
							
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
							if(full[id].charaProfileId == unique[z]){
								ninguCharaId.push(window.unique[y]);
								break;
							}
						}
						var cardsID = window.unique[y]['cardIds'].split(",");
						for(var z in cardsID){
							if(full[id].cardID == cardsID[z]){
								ninguCardId.push(window.unique[y]);
								break;
							}
						}
						var group = window.unique[y]['charaGroupIds'].split(",");
						for(var z in group){
							if(group == "600000" && full[id].charaType == '8'){
								ninguGroup.push(window.unique[y]);
								break;
							}
							if(group == "600001"){
								if(full[id].charaProfileId == "201" || full[id].charaProfileId == "202" || full[id].charaProfileId == "203" || full[id].charaProfileId == "204" ||
								full[id].charaProfileId == "205" ||	full[id].charaProfileId == "206" || full[id].charaProfileId == "207" || full[id].charaProfileId == "208" 
								|| full[id].charaProfileId == "210" || full[id].charaProfileId == "4101" || full[id].charaProfileId == "4701" || full[id].charaProfileId == "11601" || full[id].charaProfileId == "11602" 
								|| full[id].charaProfileId == "11603" || full[id].charaProfileId == "13701" || full[id].charaProfileId == "13702"  || full[id].charaProfileId == "13705"  || full[id].charaProfileId == "13801" 
								|| full[id].charaProfileId == "50801" || full[id].charaProfileId == "50901" || full[id].charaProfileId == "50902" || full[id].charaProfileId == "50903" ){
									ninguGroup.push(window.unique[y]);
									break;
								}
							}
							if(group == "700001"){
								if(full[id].charaProfileId == "110" || full[id].charaProfileId == "14001" ||　full[id].charaProfileId == "109" || full[id].charaProfileId == "50903" ||　full[id].charaProfileId == "111"
								|| full[id].charaProfileId == "1202"	){
									ninguGroup.push(window.unique[y]);
									break;
								}
							}
							if(group == "700000"){
								if(full[id].charaProfileId == "110" || full[id].charaProfileId == "14001" ||　full[id].charaProfileId == "109" || full[id].charaProfileId == "50903"
								|| full[id].charaProfileId == "1202" || full[id].charaProfileId == "20301"　|| full[id].charaProfileId == "402"	|| full[id].charaProfileId == "502"　|| full[id].charaProfileId == "602"){
									ninguGroup.push(window.unique[y]);
									break;
								}
							}
							if(group == "100301"){
								if(full[id].charaProfileId == "110" || full[id].charaProfileId == "106" ||　full[id].charaProfileId == "109"){
									ninguGroup.push(window.unique[y]);
									break;
								}
							}
							if(group == "600002"){
								if(full[id].charaProfileId == "11801" || full[id].charaProfileId == "13304" ||　full[id].charaProfileId == "13101"){
									ninguGroup.push(window.unique[y]);
									break;
								}
							}
							if(group == "300001"){
								if(full[id].charaProfileId == "1701" || full[id].charaProfileId == "1702" || full[id].charaProfileId == "1703" 
								|| full[id].charaProfileId == "1704" || full[id].charaProfileId == "1706" ){
									ninguGroup.push(window.unique[y]);
									break;
								}
							}
							if(group == "300002"){
								if(full[id].charaProfileId == "101" || full[id].charaProfileId == "102" || full[id].charaProfileId == "103" || full[id].charaProfileId == "104" ||
								full[id].charaProfileId == "105" ||	full[id].charaProfileId == "106" || full[id].charaProfileId == "107" || full[id].charaProfileId == "108" 
								|| full[id].charaProfileId == "110" || full[id].charaProfileId == "111" ){
									ninguGroup.push(window.unique[y]);
									break;
								}
							}
							if(group == "300003"){
								if(full[id].charaProfileId == "201" || full[id].charaProfileId == "202" || full[id].charaProfileId == "203" || full[id].charaProfileId == "204" ||
								full[id].charaProfileId == "205" ||	full[id].charaProfileId == "206" || full[id].charaProfileId == "207" || full[id].charaProfileId == "208" 
								|| full[id].charaProfileId == "210" ){
									ninguGroup.push(window.unique[y]);
									break;
								}
							}
							if(group == "300002,300003"){
								if(full[id].charaProfileId == "101" || full[id].charaProfileId == "102" || full[id].charaProfileId == "103" || full[id].charaProfileId == "104" ||
								full[id].charaProfileId == "105" ||	full[id].charaProfileId == "106" || full[id].charaProfileId == "107" || full[id].charaProfileId == "108" 
								|| full[id].charaProfileId == "110" || full[id].charaProfileId == "111" || full[id].charaProfileId == "201" || full[id].charaProfileId == "202" || 
								full[id].charaProfileId == "203" || full[id].charaProfileId == "204" || full[id].charaProfileId == "205" ||	full[id].charaProfileId == "206" ||
								 full[id].charaProfileId == "207" || full[id].charaProfileId == "208" || full[id].charaProfileId == "210" ){
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

						
							
					//A
					$('#leadname-' + i).text(full[id].cardSubName);
					$('#lead-' + i).text(full[id].lead);
					$('#leadname-six').text(full[id].cardSubName);
					$('#lead-six').text(full[id].lead);
					$('#ability1name-' + i).text(full[id].upgradeability1name);
					$('#ability1-' + i).text(full[id].ability1);
					$('#ability1name-six').text(full[id].upgradeability1name);
					$('#ability1-six').text(full[id].upgradeability1);
					$('#ability2name-' + i).text(full[id].upgradeability2name);
					$('#ability2-' + i).text(full[id].ability1);								
					$('#ability2name-six').text(full[id].upgradeability2name);
					$('#ability2-six').text(full[id].upgradeability2);
					$('#skill1name-' + i).text(full[id].upgradeskill1name);
					$('#skill1ogname-' + i).text(full[id].upgradeskill1name);
					$('#skill1name-six').text(full[id].upgradeskill1name);
					$('#skill1ogname-six').text(full[id].upgradeskill1name);							
					$('#skill1type-' + i).text(full[id].skill1type);
					$('#skill1type-six').text(full[id].upgradeskill1type);
					$('#skill1speed-' + i).text(full[id].skill1spd);
					$('#skill1speed-six').text(full[id].upgradeskill1spd);									
					$('#skill1cost-' + i).text(full[id].skill1cost);
					$('#skill1cost-six').text(full[id].upgradeskill1cost);
					$('#skill1-' + i).text(full[id].skill1);
					$('#skill1-six').text(full[id].upgradeskill1);							
					$('#skill2name-' + i).text(full[id].upgradeskill2name);
					$('#skill2ogname-' + i).text(full[id].upgradeskill2name);
					$('#skill2name-six').text(full[id].upgradeskill2name);
					$('#skill2ogname-six').text(full[id].upgradeskill2name);							
					$('#skill2type-' + i).text(full[id].skill2type);
					$('#skill2type-six').text(full[id].upgradeskill2type);
					$('#skill2speed-' + i).text(full[id].skill2spd);
					$('#skill2speed-six').text(full[id].upgradeskill2spd);									
					$('#skill2cost-' + i).text(full[id].skill2cost);
					$('#skill2cost-six').text(full[id].upgradeskill2cost);
					$('#skill2-' + i).text(full[id].skill2);
					$('#skill2-six').text(full[id].upgradeskill2);
	
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

	function checkTypeUpdate(id){
		for(var i in window.key){
			if(window.key[i][0] == 'type'){
				if(full[id].attribute == window.key[i][1]){
					type = window.key[i][2];
					return type;
				}
			}
		}
	}

	function checkTarget(code){
        for(var i in window.key){
            if(window.key[i][0] == 'target'){
                if(code == window.key[i][1]){
                    type = window.key[i][2];
                    return type;
                }
            }
        }
    }
 
    function checkDamage(code){
        for(var i in window.key){
            if(window.key[i][0] == 'damage'){
                if(code == window.key[i][1]){
                    type = window.key[i][2];
                    return type;
                }
            }
        }
    }

	function checkAffi(id){
		for(var i in window.key){
			if(window.key[i][0] == 'affi'){
				if(full[id].charaType == window.key[i][1]){
					affi = window.key[i][2];
					return affi;
				}
			}
		}
	}

})();