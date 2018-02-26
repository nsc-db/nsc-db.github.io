(function(){

	function _createCard(data, name, type, hp, atk, def, spd, rare, id){
		var image;
		//Rarity Check
		if(rare == 6){
			image = id + "_6.png";
		}
		else{
			image = id + ".png";
		}

		//Pvp Reward Check
		if(data["cost"] == 100){
			image = id + ".png";
		}
		var model = '<tr class="clickable" data-toggle="modal" data-target="#newModal">'
					+'		<td class="text-center"><img id="icon-table" src="assets/img/units/icons/thumb_' + image + '"height="60px" width="60px" /><div style="display:none">' + data['cardId'] + '</td>'
					+'		<td class="text-left"><a href= "view/' + data["cardId"] + '" data-toggle="modal" data-target="#newModal">' + name + " 【" + data["cardSubName"] + '】</a></td>'
					+'		<td class="text-center">' + type + '</td>'
					+'		<td class="text-center affiliation" affiliation="Konoha"><div style="display:none;">Konoha</div></td>'
					+'		<td class="text-center rarity" rarity="' + rare + '"></td>'
					+'		<td class="text-center">' + data["cost"] + '</td>'
					+'		<td class="text-center">' + hp + '</td>'
					+'		<td class="text-center">' + atk + '</td>'
					+'		<td class="text-center">' + def + '</td>'
					+'		<td class="text-center">' + spd + '</td>'
					+'</tr>';
		return model;
	}
	
	$(document).ready(function(){
		
		// --------------------------------------------- CARDS
		
		var content = ''; 
		
		var units = []; // Character's Info
		var name = '';
		var type = '';
		var hp;
		var atk;
		var def;
		var spd;
		var rare;
		var id;
		for(var i in window.chara){
			var unit = window.chara[i];
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
			if(units.indexOf(chara[0]) == -1){ // << verifica se já criou o card pelo [ID]
				units.push(unit[0]); // << Salvo o id do card, para impedir cards repetidos de existirem			
				content += _createCard(unit, name, type, hp, atk, def, spd, rare, id); // chama a função passando os dados do card
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
		checkImage('assets/img/units/icons/thumb_' + cid + '_6.png', 
			function(){
			 $('#icon-unit').attr('src', 'assets/img/units/icons/thumb_' + cid + '_6.png'); 
			}, 
			function(){
			 $('#icon-unit').attr('src', 'assets/img/units/icons/thumb_' + cid + '.png'); 
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
				$('#name-unit').text(name + ' 【' + window.chara[y]['cardSubName'] + '】');
			}
		}
		//Type
		for(var x in window.chara){
			if(cid == window.chara[x]['cardId']){
				var type = checkType(window.chara[x]);
				$('#type-unit').text(type);
				$('#type-unit').attr('type', type);
			}
		}
	
		
		//Character Image
		checkImage('assets/img/units/' + cid + '.png', 
			function(){
			 $('#card-art-five-star').attr('src', 'assets/img/units/' + cid + '.png'); 
			}, 
			function(){
			 $('#card-art-five-star').attr('src', 'assets/img/units/' + cid + '_6.png');
			  } );
		
		checkImage('assets/img/units/' + cid + '_6.png', 
			function(){
			 $('#card-art-six-star').attr('src', 'assets/img/units/' + cid + '_6.png'); 
			}, 
			function(){
			 $('#card-art-six-star').attr('src', 'assets/img/units/' + cid + '.png');
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
			
			//Character Lead
			for(var x in window.chara){
				if(cid == window.chara[x]['cardId']){
					for(var n in window.lead){
						if(window.chara[x]['leaderSkillId'] == window.lead[n]['cardLeaderSkillId']){
							
							//A
							$('#leadname-' + i).text(window.lead[n]['name']);
							$('#lead-' + i).text(window.lead[n]['description']);
							$('#leadname-six').text(window.lead[n]['name']);
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
									$('#skill1name-' + i).text(window.skillname[g]['name']);
									//$('#skill1ogname-' + i).text(window.skillname[g]['name']);
									$('#skill1name-six').text(window.skillname[g]['name']);
									//$('#skill1ogname-six').text(window.skillname[g]['name']);
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
									$('#skill2name-' + i).text(window.skillname[g]['name']);
									//$('#skill2ogname-' + i).text(window.skillname[g]['name']);
									$('#skill2name-six').text(window.skillname[g]['name']);
									//$('#skill2ogname-six').text(window.skillname[g]['name']);
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

	function checkType(unit){
		var y;
		for(var i in window.key){
			if(window.key[i][0] == 'type'){
				if(unit['attribute'] == window.key[i][1]){
					type = window.key[i][2];
					return type;
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