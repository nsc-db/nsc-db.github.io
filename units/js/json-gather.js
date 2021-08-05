(function(){

	function _createCard(data, name, type, hp, atk, def, spd, rare, affi, id, tag, type_tag){
		var image;

		//Rarity Check
		if(rare == 7){
			image = id + "_7.png";
		}
		else if(rare == 6){
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
					+'		<td class="text-left"><a href= "view/' + data["cardId"] + '" data-toggle="modal" data-target="#newModal">' + name + '</a></td>'
					+'		<td class="text-center"><img id="icon-table" src="../common/assets/img/rarity/' + type_tag + '" /><div style="display:none">' + type_tag + '</div></td>'
					+'		<td class="text-center affiliation" affiliation="' + affi + '"><div style="display:none;">' + affi + '</div></td>'
					+'		<td class="text-center rarity" rarity="' + rare + '"><div style="display:none">' + rare + '</div></td>'
					+'		<td class="text-center">' + data["cost"] + '</td>'
					+'		<td class="text-center">' + hp + '</td>'
					+'		<td class="text-center">' + atk + '</td>'
					+'		<td class="text-center">' + def + '</td>'
					+'		<td class="text-center">' + spd + '</td>'
					+'		<td class="text-center">' + tag + '</td>'
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
		var type_tag = ''


		for(var i in window.detail){
			//Set Unit to Current Detail
			var unitDetail = window.detail[i]
			var chara;
			name = unitDetail['name'] + ", " + unitDetail['subtext'];
			id = unitDetail['id'];
			for(var y in window.chara){
				if(id == window.chara[y]["cardId"]){
					chara = window.chara[y]
					break;
				}
			}

			//Set default max stats
			hp = chara["hpMax"];
			atk = chara["attackMax"];
			def = chara["defenseMax"];
			spd = chara["speedMax"];
			rare = chara["rare"];
			//Check Type and Convert to Kanji
			type = checkType(chara);

			//Add Stats from Evo Bonus
			for(var n in window.evo){
				if(id == window.evo[n]['cardId']){
					hp = parseInt(hp,10) + parseInt(window.evo[n]['hp'], 10);
					atk = parseInt(atk,10) + parseInt(window.evo[n]['attack'], 10);
					def = parseInt(def,10) + parseInt(window.evo[n]['defense'], 10);
					spd = parseInt(spd,10) + parseInt(window.evo[n]['speed'], 10);
					if((chara["rare"] != window.evo[n]['rare']) && window.evo[n]['rare'] != 0){
						rare = window.evo[n]['rare'];
					}
				}
			}
			//Character Affi
			affi = checkAffi(chara);
			//Character Tag
			for(var n in window.charainfo){
				if(id == window.charainfo[n]["targetCardId"]){
					switch(window.charainfo[n]["limitedFlg"]){
						case "102":
							tags = "ex"
							break;
						case "104":
							tags = "god"
							break;
						case "105":
							tags = "killers"
							break;
						case "106":
							tags = "origin"
							break;
						case "107":
							tags = "gk"
							break;
						case "108":
							tags = "ranbu"
							break;	
						case "109":
							tags = "kizuna"
							break;	
						case "120":
							tags = "pvp-reward"
							break;
						default:
							tags = "other"
							break;	
					}
					break;
				}
				else{
					tags = "other"
				}

			}

			//Tag Image
			type_tag = type + "_" + rare;
			if(tags == "ex"){
				type_tag += "_ex.png";
			}
			else if(tags == "god"){
				type_tag += "_god.png";
			}
			else if(tags == "pvp-reward"){
				type_tag += "_pvp.png";
			}
			else if(tags == "origin"){
				type_tag += "_origin.png";
			}
			else if(tags == "gk"){
				type_tag += "_gk.png";
			}
			else if(tags == "killers"){
				type_tag += "_killers.png";
			}
			else if(tags == "kizuna"){
				type_tag += ".png";
			}
			else if(tags == "ranbu"){
				type_tag = "ranbu.png";
			}
			else{
				type_tag += ".png";
			}

			if (id == "50051001" || id == "50060307"){
				type_tag = "ranbu.png";
			}
			if(id > 60060700){
				type_tag = type + "_" + rare + ".png";
			}

			var passTag = type_tag
			if(units.indexOf(chara[0]) == -1){
				content += _createCard(chara, name, type, hp, atk, def, spd, rare, affi, id, tags, type_tag); // chama a função passando os dados do card
				type_tag = ''
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
				for(i in window.detail){
					i = window.detail[i];
					// Verifica o ID da unidade
					if(detail["id"]==id) {
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
				var unitData
				for(var x in window.detail){
					if(cid == window.detail[x]['id']){
						unitData = window.detail[x]
					}
				}
				var charaData
				for(var y in window.chara){
				if(cid == window.chara[y]["cardId"]){
					charaData = window.chara[y]
					break;
				}
			}
				_buildCardModal(id, thumb, charaData, cid, unitData, passTag);
		   }
		});
		
		
	});

	function _buildCardModal(id, thumb, chara, cid, unit, type_tag){
		// Icon
		checkImage('../common/assets/img/units/icons/thumb_' + cid + '_7.png', 
			function(){
			 $('#icon-unit').attr('src', '../common/assets/img/units/icons/thumb_' + cid + '_7.png'); 
			}, 
			function(){
			 $('#icon-unit').attr('src', '../common/assets/img/units/icons/thumb_' + cid + '_6.png'); 
			}, 
			function(){
			 $('#icon-unit').attr('src', '../common/assets/img/units/icons/thumb_' + cid + '.png'); 
			  } );


		var name = unit['name']
		var leadname = unit['subtext']
		var lead = unit['lead']
		var s1n = unit['s1n']
		var s1 = unit['s1']
		var s1ntr = unit['s1ntr']
		var s1cs = unit['s1cs']
		var s1c = unit['s1c']
		var s2n = unit['s2n']
		var s2 = unit['s2']
		var s2ntr = unit['s2ntr']
		var s2cs = unit['s2cs']
		var s2c = unit['s2c']
		var a1n = unit['a1n']
		var a1 = unit['a1']
		var a2n = unit['a2n']
		var a2 = unit['a2']
		var a3n = unit['a3n']
		var a3 = unit['a3']
		var charaId = chara['charaProfileId']

		// Name
		var fullName = name + ", " + leadname
		$('#name-unit').text(fullName);
		$('#leadname-five').text(leadname);
		$('#lead-five').text(lead);
		$('#leadname-six').text(leadname);
		$('#lead-six').text(lead);

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
						}
					}
				}
				if (change == 0){
					rare = window.chara[x]['rare']
				}
				stuff += "_" + rare;

				//Get Tag
				var tags
				for(var n in window.charainfo){
					if(id == window.charainfo[n]["targetCardId"]){
						switch(window.charainfo[n]["limitedFlg"]){
							case "102":
								tags = "ex"
								break;
							case "104":
								tags = "god"
								break;
							case "105":
								tags = "killers"
								break;
							case "106":
								tags = "origin"
								break;
							case "107":
								tags = "gk"
								break;
							case "108":
								tags = "ranbu"
								break;	
							case "120":
								tags = "pvp-reward"
								break;
							default:
								tags = "other"
								break;
							
						}
					}
				}

				if(tags == "ex"){
					stuff += "_ex.png";
				}
				else if(tags == "god"){
					stuff += "_god.png";
				}
				else if(tags == "pvp-reward"){
					stuff += "_pvp.png";
				}
				else if(tags == "killers"){
					stuff += "_killers.png";
				}
				else if(tags == "origin"){
					stuff += "_origin.png";
				}
				else if(tags == "killers"){
					stuff += "_killers.png";
				}
				else if(tags == "ranbu"){
					stuff = "ranbu.png";
				}
				else{
					stuff += ".png";
				}

				$('#type-unit').attr('src', '../common/assets/img/rarity/' + stuff); 
			}
		}

		$('#skill1name-five').text(s1n);
		$('#skill1-five').text(s1);
		$('#skill1type-five').text(s1ntr);
		$('#skill1speed-five').text(s1cs);
		$('#skill1cost-five').text(s1c);
		$('#skill1name-six').text(s1n);
		$('#skill1-six').text(s1);
		$('#skill1type-six').text(s1ntr);
		$('#skill1speed-six').text(s1cs);
		$('#skill1cost-six').text(s1c);

		$('#skill2name-five').text(s2n);
		$('#skill2-five').text(s2);
		$('#skill2type-five').text(s2ntr);
		$('#skill2speed-five').text(s2cs);
		$('#skill2cost-five').text(s2c);
		$('#skill2name-six').text(s2n);
		$('#skill2-six').text(s2);
		$('#skill2type-six').text(s2ntr);
		$('#skill2speed-six').text(s2cs);
		$('#skill2cost-six').text(s2c);

		$('#ability1name-five').text(a1n);
		$('#ability1-five').text(a1);
		$('#ability1name-six').text(a1n);
		$('#ability1-six').text(a1);

		$('#ability2name-five').text(a2n);
		$('#ability2-five').text(a2);
		$('#ability2name-six').text(a2n);
		$('#ability2-six').text(a2);

		$('#ability3name-five').text(a3n);
		$('#ability3-five').text(a3);
		$('#ability3name-six').text(a3n);
		$('#ability3-six').text(a3);

		if(cid == 60060701 || cid == 60060702){
			$('#kizuna').attr('style', 'display:block'); 
			$('#kizuna-six').attr('style', 'display:block'); 
		
			$('#kizunaname-five').text(window.engkizuna[0]['name']);
			$('#kizunaname-six').text(window.engkizuna[0]['name']);
			//Replace Type
			$('#kizunatype-five').text(window.engkizuna[0]['nature']);
			$('#kizunatype-six').text(window.engkizuna[0]['nature']);
			//Replace Wait
			$('#kizunaspeed-five').text(window.engkizuna[0]['cs']);
			$('#kizunaspeed-six').text(window.engkizuna[0]['cs']);

			$('#kizunacost-five').text(window.engkizuna[0]['cost']);
			$('#kizunacost-six').text(window.engkizuna[0]['cost']);
			$('#kizunadesc-five').text(window.engkizuna[0]['description']);
			$('#kizunadesc-six').text(window.engkizuna[0]['description']);
			
		}
		else if(cid == 60061201 || cid == 60061202){
			$('#kizuna').attr('style', 'display:block'); 
			$('#kizuna-six').attr('style', 'display:block'); 
		
			$('#kizunaname-five').text(window.engkizuna[1]['name']);
			$('#kizunaname-six').text(window.engkizuna[1]['name']);
			//Replace Type
			$('#kizunatype-five').text(window.engkizuna[1]['nature']);
			$('#kizunatype-six').text(window.engkizuna[1]['nature']);
			//Replace Wait
			$('#kizunaspeed-five').text(window.engkizuna[1]['cs']);
			$('#kizunaspeed-six').text(window.engkizuna[1]['cs']);

			$('#kizunacost-five').text(window.engkizuna[1]['cost']);
			$('#kizunacost-six').text(window.engkizuna[1]['cost']);
			$('#kizunadesc-five').text(window.engkizuna[1]['description']);
			$('#kizunadesc-six').text(window.engkizuna[1]['description']);
		}

		else if(cid == 60070401 || cid == 60070402){
			$('#kizuna').attr('style', 'display:block'); 
			$('#kizuna-six').attr('style', 'display:block'); 
		
			$('#kizunaname-five').text(window.engkizuna[2]['name']);
			$('#kizunaname-six').text(window.engkizuna[2]['name']);
			//Replace Type
			$('#kizunatype-five').text(window.engkizuna[2]['nature']);
			$('#kizunatype-six').text(window.engkizuna[2]['nature']);
			//Replace Wait
			$('#kizunaspeed-five').text(window.engkizuna[2]['cs']);
			$('#kizunaspeed-six').text(window.engkizuna[2]['cs']);

			$('#kizunacost-five').text(window.engkizuna[2]['cost']);
			$('#kizunacost-six').text(window.engkizuna[2]['cost']);
			$('#kizunadesc-five').text(window.engkizuna[2]['description']);
			$('#kizunadesc-six').text(window.engkizuna[2]['description']);
		}
		else if(cid == 60070501 || cid == 60070502){
			$('#kizuna').attr('style', 'display:block'); 
			$('#kizuna-six').attr('style', 'display:block'); 
		
			$('#kizunaname-five').text(window.engkizuna[3]['name']);
			$('#kizunaname-six').text(window.engkizuna[3]['name']);
			//Replace Type
			$('#kizunatype-five').text(window.engkizuna[3]['nature']);
			$('#kizunatype-six').text(window.engkizuna[3]['nature']);
			//Replace Wait
			$('#kizunaspeed-five').text(window.engkizuna[3]['cs']);
			$('#kizunaspeed-six').text(window.engkizuna[3]['cs']);

			$('#kizunacost-five').text(window.engkizuna[3]['cost']);
			$('#kizunacost-six').text(window.engkizuna[3]['cost']);
			$('#kizunadesc-five').text(window.engkizuna[3]['description']);
			$('#kizunadesc-six').text(window.engkizuna[3]['description']);
		}
		else if(cid == 60070601 || cid == 60070602){
			$('#kizuna').attr('style', 'display:block'); 
			$('#kizuna-six').attr('style', 'display:block'); 
		
			$('#kizunaname-five').text(window.engkizuna[4]['name']);
			$('#kizunaname-six').text(window.engkizuna[4]['name']);
			//Replace Type
			$('#kizunatype-five').text(window.engkizuna[4]['nature']);
			$('#kizunatype-six').text(window.engkizuna[4]['nature']);
			//Replace Wait
			$('#kizunaspeed-five').text(window.engkizuna[4]['cs']);
			$('#kizunaspeed-six').text(window.engkizuna[4]['cs']);

			$('#kizunacost-five').text(window.engkizuna[4]['cost']);
			$('#kizunacost-six').text(window.engkizuna[4]['cost']);
			$('#kizunadesc-five').text(window.engkizuna[4]['description']);
			$('#kizunadesc-six').text(window.engkizuna[4]['description']);
		}
		else{
			$('#kizuna').attr('style', 'display:none');
			$('#kizuna-six').attr('style', 'display:none'); 
		}

		var pability = []
		var fability = []
		var tempId
		if(cid == 60061202 || cid == 60061201){
			tempId = 60061200
		}
		else if(cid == 60060702 || cid == 60060701){
			tempId = 60060700
		}
		else if(cid == 60070401 || cid == 60070402){
			tempId = 60070400
		}
		else{
			tempId = cid
		}
		for(var y in window.potential){
			if(tempId == window.potential[y]['cardId']){
				if(window.potential[y]['type'] == "2"){
					var abilityArr = window.potential[y]['abilityId'].split(",")
					for(var x in abilityArr){
						for(var z in window.engpotential){
							if(abilityArr[x] == window.engpotential[z]['abilityId']){
								if(window.potential[y]['panelType'] == "1"){
									pability.push(window.engpotential[z]['abilityDescription'])
								}
								else{
									fability.push(window.engpotential[z]['abilityDescription'])
								}
							}
						}
					}
					
				}
			}
		}


		if(pability.length == 4){
			$('#icon-unit').attr('style', 'background: linear-gradient(to bottom right,white,gold,white, gold) border-box;'); 
			$('#card-art-six-star').attr('style', 'padding: 10px;background: linear-gradient(to bottom right,white,gold,white, gold) border-box;'); 
			$('#card-art-five-star').attr('style', 'padding: 10px;background: linear-gradient(to bottom right,white,gold,white, gold) border-box;'); 
			document.getElementById("potential1").innerHTML = pability[0];
			document.getElementById("potential2").innerHTML = pability[1];
			document.getElementById("potential3").innerHTML = pability[2];
			document.getElementById("potential4").innerHTML = pability[3];
			document.getElementById("potential5").innerHTML = 'なし'
			document.getElementById("potential6").innerHTML = 'なし'
			document.getElementById("potential7").innerHTML = 'なし'
			document.getElementById("potential8").innerHTML = 'なし'
			document.getElementById("forbidden1").innerHTML = fability[0];
			document.getElementById("forbidden2").innerHTML = fability[1];
			document.getElementById("forbidden3").innerHTML = fability[2];
			document.getElementById("forbidden4").innerHTML = fability[3];
			document.getElementById("forbidden5").innerHTML = 'なし';
			document.getElementById("forbidden6").innerHTML = 'なし'
			document.getElementById("forbidden7").innerHTML = 'なし'
			document.getElementById("forbidden8").innerHTML = 'なし'
			
		}
		else if(pability.length == 8){
			$('#icon-unit').attr('style', 'background: linear-gradient(to bottom right,red,magenta,blue,aqua,lime,yellow,red) border-box;'); 
			$('#card-art-six-star').attr('style', 'padding: 10px;background: linear-gradient(to bottom right,red,magenta,blue,aqua,lime,yellow,red) border-box;'); 
			$('#card-art-five-star').attr('style', 'padding: 10px;background: linear-gradient(to bottom right,red,magenta,blue,aqua,lime,yellow,red) border-box;'); 
			document.getElementById("potential1").innerHTML = pability[0];
			document.getElementById("potential2").innerHTML = pability[1];
			document.getElementById("potential3").innerHTML = pability[2];
			document.getElementById("potential4").innerHTML = pability[3];
			document.getElementById("potential5").innerHTML = pability[4];
			document.getElementById("potential6").innerHTML = pability[5];
			document.getElementById("potential7").innerHTML = pability[6];
			document.getElementById("potential8").innerHTML = pability[7];
			document.getElementById("forbidden1").innerHTML = fability[0];
			document.getElementById("forbidden2").innerHTML = fability[1];
			document.getElementById("forbidden3").innerHTML = fability[2];
			document.getElementById("forbidden4").innerHTML = fability[3];
			document.getElementById("forbidden5").innerHTML = fability[4];
			document.getElementById("forbidden6").innerHTML = fability[5];
			document.getElementById("forbidden7").innerHTML = fability[6];
			document.getElementById("forbidden8").innerHTML = fability[7];
		}
		else{
			$('#icon-unit').attr('style', ''); 
			$('#card-art-six-star').attr('style', ''); 
			$('#card-art-five-star').attr('style', ''); 
			document.getElementById("potential1").innerHTML = 'なし'
			document.getElementById("potential2").innerHTML = 'なし'
			document.getElementById("potential3").innerHTML = 'なし'
			document.getElementById("potential4").innerHTML = 'なし'
			document.getElementById("potential5").innerHTML = 'なし'
			document.getElementById("potential6").innerHTML = 'なし'
			document.getElementById("potential7").innerHTML = 'なし'
			document.getElementById("potential8").innerHTML = 'なし'
			document.getElementById("forbidden1").innerHTML = 'なし'
			document.getElementById("forbidden2").innerHTML = 'なし'
			document.getElementById("forbidden3").innerHTML = 'なし'
			document.getElementById("forbidden4").innerHTML = 'なし'
			document.getElementById("forbidden5").innerHTML = 'なし';
			document.getElementById("forbidden6").innerHTML = 'なし'
			document.getElementById("forbidden7").innerHTML = 'なし'
			document.getElementById("forbidden8").innerHTML = 'なし'
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
		
		
		//Animation
		for(var y in window.charainfo){
			if(cid == window.charainfo[y]["targetCardId"]){
				$('#animation').attr('src', window.charainfo[y]["skillUrl"])
				$('#animation-six').attr('src', window.charainfo[y]["skillUrl"])
				break
			}
		}


		// Character Stats
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

		var ninguCharaId = [];
		var ninguCardId = [];
		var ninguGroup = [];
		var ninguGearList = [];
		var gear = ''

		for(var y in window.enggear){
			var charaIdMatch = window.enggear[y]['charaIds'].split(",");
			for(var z in charaIdMatch){

				if(charaId == charaIdMatch[z]){
					gear += '<div class="base-gear">' 
						+		'<div class="icon">'
						+			'<img src="../common/assets/img/gear/ningu_' + window.enggear[y]['id'] + '.png">'
						+		'</div>' 
						+		'<div class="info">'
						+			'<div class="header">'
						+				'<div class="type">'
						+					'<h4 type="' + window.enggear[y]['type'] + '">' + window.enggear[y]['type'] + '</h4>'
						+				'</div>'
						+			'<div class="title">'
						+				'<h3>' + window.enggear[y]['name'] + '</h3>'
						+			'</div>'
						+		'</div>'
						+		'<div class="description">'
						+			'<p>' + window.enggear[y]['effect'] + '</p>'
						+		'</div>'
						+	'</div>'
						+'</div>';
				}
			}

			var cardIds = window.enggear[y]['cardIds'].split(",");
			for(var z in cardIds){
				if(cid == cardIds[z]){
					gear += '<div class="base-gear">' 
						+		'<div class="icon">'
						+			'<img src="../common/assets/img/gear/ningu_' + window.enggear[y]['id'] + '.png">'
						+		'</div>' 
						+		'<div class="info">'
						+			'<div class="header">'
						+				'<div class="type">'
						+					'<h4 type="' + window.enggear[y]['type'] + '">' + window.enggear[y]['type'] + '</h4>'
						+				'</div>'
						+			'<div class="title">'
						+				'<h3>' + window.enggear[y]['name'] + '</h3>'
						+			'</div>'
						+		'</div>'
						+		'<div class="description">'
						+			'<p>' + window.enggear[y]['effect'] + '</p>'
						+		'</div>'
						+	'</div>'
						+'</div>';
				}
			}

			var group = window.enggear[y]['charaGroupIds'].split(",");
			for(var z in group){
				if(group == "600000" && chara['charaType'] == '8'){
					gear += '<div class="base-gear">' 
						+		'<div class="icon">'
						+			'<img src="../common/assets/img/gear/ningu_' + window.enggear[y]['id'] + '.png">'
						+		'</div>' 
						+		'<div class="info">'
						+			'<div class="header">'
						+				'<div class="type">'
						+					'<h4 type="' + window.enggear[y]['type'] + '">' + window.enggear[y]['type'] + '</h4>'
						+				'</div>'
						+			'<div class="title">'
						+				'<h3>' + window.enggear[y]['name'] + '</h3>'
						+			'</div>'
						+		'</div>'
						+		'<div class="description">'
						+			'<p>' + window.enggear[y]['effect'] + '</p>'
						+		'</div>'
						+	'</div>'
						+'</div>';
					break;
				}
				if(group == "600001"){
					if(charaId == "201" || charaId == "202" || charaId == "203" || charaId == "204" ||
					charaId == "205" ||	charaId == "206" || charaId == "207" || charaId == "208" 
					|| charaId == "210" || charaId == "4101" || charaId == "4701" || charaId == "11601" || charaId == "11602" 
					|| charaId == "11603" || charaId == "13701" || charaId == "13702"  || charaId == "13705"  || charaId == "13801" 
					|| charaId == "50801" || charaId == "50901" || charaId == "50902" || charaId == "50903" ){
						gear += '<div class="base-gear">' 
						+		'<div class="icon">'
						+			'<img src="../common/assets/img/gear/ningu_' + window.enggear[y]['id'] + '.png">'
						+		'</div>' 
						+		'<div class="info">'
						+			'<div class="header">'
						+				'<div class="type">'
						+					'<h4 type="' + window.enggear[y]['type'] + '">' + window.enggear[y]['type'] + '</h4>'
						+				'</div>'
						+			'<div class="title">'
						+				'<h3>' + window.enggear[y]['name'] + '</h3>'
						+			'</div>'
						+		'</div>'
						+		'<div class="description">'
						+			'<p>' + window.enggear[y]['effect'] + '</p>'
						+		'</div>'
						+	'</div>'
						+'</div>';
						break;
					}
				}
				if(group == "700001"){
					if(charaId == "110" || charaId == "14001" ||　charaId == "109" || charaId == "50903" ||　charaId == "111"
					|| charaId == "1202"	){
						gear += '<div class="base-gear">' 
						+		'<div class="icon">'
						+			'<img src="../common/assets/img/gear/ningu_' + window.enggear[y]['id'] + '.png">'
						+		'</div>' 
						+		'<div class="info">'
						+			'<div class="header">'
						+				'<div class="type">'
						+					'<h4 type="' + window.enggear[y]['type'] + '">' + window.enggear[y]['type'] + '</h4>'
						+				'</div>'
						+			'<div class="title">'
						+				'<h3>' + window.enggear[y]['name'] + '</h3>'
						+			'</div>'
						+		'</div>'
						+		'<div class="description">'
						+			'<p>' + window.enggear[y]['effect'] + '</p>'
						+		'</div>'
						+	'</div>'
						+'</div>';
						break;
					}
				}
				if(group == "700000"){
					if(charaId == "110" || charaId == "14001" ||　charaId == "109" || charaId == "50903"
					|| charaId == "1202" || charaId == "20301"　|| charaId == "402"	|| charaId == "502"　|| charaId == "602"){
						gear += '<div class="base-gear">' 
						+		'<div class="icon">'
						+			'<img src="../common/assets/img/gear/ningu_' + window.enggear[y]['id'] + '.png">'
						+		'</div>' 
						+		'<div class="info">'
						+			'<div class="header">'
						+				'<div class="type">'
						+					'<h4 type="' + window.enggear[y]['type'] + '">' + window.enggear[y]['type'] + '</h4>'
						+				'</div>'
						+			'<div class="title">'
						+				'<h3>' + window.enggear[y]['name'] + '</h3>'
						+			'</div>'
						+		'</div>'
						+		'<div class="description">'
						+			'<p>' + window.enggear[y]['effect'] + '</p>'
						+		'</div>'
						+	'</div>'
						+'</div>';
						break;
					}
				}
				if(group == "100301"){
					if(charaId == "110" || charaId == "106" ||　charaId == "109"){
						gear += '<div class="base-gear">' 
						+		'<div class="icon">'
						+			'<img src="../common/assets/img/gear/ningu_' + window.enggear[y]['id'] + '.png">'
						+		'</div>' 
						+		'<div class="info">'
						+			'<div class="header">'
						+				'<div class="type">'
						+					'<h4 type="' + window.enggear[y]['type'] + '">' + window.enggear[y]['type'] + '</h4>'
						+				'</div>'
						+			'<div class="title">'
						+				'<h3>' + window.enggear[y]['name'] + '</h3>'
						+			'</div>'
						+		'</div>'
						+		'<div class="description">'
						+			'<p>' + window.enggear[y]['effect'] + '</p>'
						+		'</div>'
						+	'</div>'
						+'</div>';
						break;
					}
				}
				if(group == "600002"){
					if(charaId == "11801" || charaId == "13304" ||　charaId == "13101"){
						gear += '<div class="base-gear">' 
						+		'<div class="icon">'
						+			'<img src="../common/assets/img/gear/ningu_' + window.enggear[y]['id'] + '.png">'
						+		'</div>' 
						+		'<div class="info">'
						+			'<div class="header">'
						+				'<div class="type">'
						+					'<h4 type="' + window.enggear[y]['type'] + '">' + window.enggear[y]['type'] + '</h4>'
						+				'</div>'
						+			'<div class="title">'
						+				'<h3>' + window.enggear[y]['name'] + '</h3>'
						+			'</div>'
						+		'</div>'
						+		'<div class="description">'
						+			'<p>' + window.enggear[y]['effect'] + '</p>'
						+		'</div>'
						+	'</div>'
						+'</div>';
						break;
					}
				}
				if(group == "300001"){
					if(charaId == "1701" || charaId == "1702" || charaId == "1703" 
					|| charaId == "1704" || charaId == "1706" ){
						gear += '<div class="base-gear">' 
						+		'<div class="icon">'
						+			'<img src="../common/assets/img/gear/ningu_' + window.enggear[y]['id'] + '.png">'
						+		'</div>' 
						+		'<div class="info">'
						+			'<div class="header">'
						+				'<div class="type">'
						+					'<h4 type="' + window.enggear[y]['type'] + '">' + window.enggear[y]['type'] + '</h4>'
						+				'</div>'
						+			'<div class="title">'
						+				'<h3>' + window.enggear[y]['name'] + '</h3>'
						+			'</div>'
						+		'</div>'
						+		'<div class="description">'
						+			'<p>' + window.enggear[y]['effect'] + '</p>'
						+		'</div>'
						+	'</div>'
						+'</div>';
						break;
					}
				}
				if(group == "300002"){
					if(charaId == "101" || charaId == "102" || charaId == "103" || charaId == "104" ||
					charaId == "105" ||	charaId == "106" || charaId == "107" || charaId == "108" 
					|| charaId == "110" || charaId == "111" ){
						gear += '<div class="base-gear">' 
						+		'<div class="icon">'
						+			'<img src="../common/assets/img/gear/ningu_' + window.enggear[y]['id'] + '.png">'
						+		'</div>' 
						+		'<div class="info">'
						+			'<div class="header">'
						+				'<div class="type">'
						+					'<h4 type="' + window.enggear[y]['type'] + '">' + window.enggear[y]['type'] + '</h4>'
						+				'</div>'
						+			'<div class="title">'
						+				'<h3>' + window.enggear[y]['name'] + '</h3>'
						+			'</div>'
						+		'</div>'
						+		'<div class="description">'
						+			'<p>' + window.enggear[y]['effect'] + '</p>'
						+		'</div>'
						+	'</div>'
						+'</div>';
						break;
					}
				}
				if(group == "300003"){
					if(charaId == "201" || charaId == "202" || charaId == "203" || charaId == "204" ||
					charaId == "205" ||	charaId == "206" || charaId == "207" || charaId == "208" 
					|| charaId == "210" ){
						gear += '<div class="base-gear">' 
						+		'<div class="icon">'
						+			'<img src="../common/assets/img/gear/ningu_' + window.enggear[y]['id'] + '.png">'
						+		'</div>' 
						+		'<div class="info">'
						+			'<div class="header">'
						+				'<div class="type">'
						+					'<h4 type="' + window.enggear[y]['type'] + '">' + window.enggear[y]['type'] + '</h4>'
						+				'</div>'
						+			'<div class="title">'
						+				'<h3>' + window.enggear[y]['name'] + '</h3>'
						+			'</div>'
						+		'</div>'
						+		'<div class="description">'
						+			'<p>' + window.enggear[y]['effect'] + '</p>'
						+		'</div>'
						+	'</div>'
						+'</div>';
						break;
					}
				}
				if(group == "300002,300003"){
					if(charaId == "101" || charaId == "102" || charaId == "103" || charaId == "104" ||
					charaId == "105" ||	charaId == "106" || charaId == "107" || charaId == "108" 
					|| charaId == "110" || charaId == "111" || charaId == "201" || charaId == "202" || 
					charaId == "203" || charaId == "204" || charaId == "205" ||	charaId == "206" ||
					 charaId == "207" || charaId == "208" || charaId == "210" ){
						gear += '<div class="base-gear">' 
						+		'<div class="icon">'
						+			'<img src="../common/assets/img/gear/ningu_' + window.enggear[y]['id'] + '.png">'
						+		'</div>' 
						+		'<div class="info">'
						+			'<div class="header">'
						+				'<div class="type">'
						+					'<h4 type="' + window.enggear[y]['type'] + '">' + window.enggear[y]['type'] + '</h4>'
						+				'</div>'
						+			'<div class="title">'
						+				'<h3>' + window.enggear[y]['name'] + '</h3>'
						+			'</div>'
						+		'</div>'
						+		'<div class="description">'
						+			'<p>' + window.enggear[y]['effect'] + '</p>'
						+		'</div>'
						+	'</div>'
						+'</div>';
						break;
					}
				}
			}

		}

		document.getElementById("gear").innerHTML = gear;
		document.getElementById("gear-six").innerHTML = gear;
		
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