var loc = window.location.toString()
var temp = 'https://nsc-db.github.io/test/unit/20000001/index.htm'
var id = loc.slice(35,43);
//var id = loc.slice(38, 46);


//Info Insertion

//Card Art
$('#card-art').attr('src', '../../../common/assets/img/units/' + id + '_6.png');

for(var i in window.chara){
	if(id == window.chara[i]["cardId"]){
		var unit = window.chara[i]
		var tempId
		var affi = checkAffi(unit)
		var hp = unit["hpMax"];
		var atk = unit["attackMax"];
		var def = unit["defenseMax"];
		var spd = unit["speedMax"];
		var dodge
		var cc
		var cd
		var sd 
		var tag
		var p1hp
		var p1atk
		var p1def
		var p1spd
		var p2hp
		var p2atk
		var p2def
		var p2spd
		var p3hp
		var p3atk
		var p3def
		var p3spd
		var p4hp= 0
		var p4atk= 0
		var p4def= 0
		var p4spd= 0
		var p2sd
		var f1hp
		var f1atk
		var f1def
		var f1spd
		var f2hp
		var f2atk
		var f2def
		var f2spd
		var f2chakra
		var f3hp
		var f3atk
		var f3def
		var f3spd
		var f3sd
		var f4hp= 0
		var f4atk= 0
		var f4def= 0
		var f4spd= 0
		var f4sd= 0	
		var lhp = 800000*3
		var latk = 50000*3
		var ldef = 50000*3
		var lspd = 10*5 

		var kizuna =document.getElementById("kizuna");;

		var type = checkType(unit)
		//Base Stats
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

		if(id == 60070401 || id == 60070501 || id == 60071201 || id == 60060701){
			tempId = id-1
		}
		else if(id == 60070402 || id == 60070502 || id == 60061202 || id == 60060702){
			tempId = id-2
		}
		else{
			tempId = id
		}
		//Tag
		for(var n in window.charainfo){
			if(tempId == window.charainfo[n]['targetCardId']){
				tag = checkTag(window.charainfo[n]['limitedFlg'])
			}
		}

		//Kizuna
		if(id == 60070401 || id == 60070402){
			kizuna.style.display = "block"
			$("#kizunatype").text(window.engkizuna[2]['nature'])
			$("#kizunaname").text(window.engkizuna[2]['name'])
			$("#kizunaspeed").text(window.engkizuna[2]['cs'])
			$("#kizunacost").text(window.engkizuna[2]['cost'])
			$("#kizunadesc").text(window.engkizuna[2]['description'])

		}
		else if(id == 60070501 || id == 60070502){
			kizuna.style.display = "block"
			$("#kizunatype").text(window.engkizuna[3]['nature'])
			$("#kizunaname").text(window.engkizuna[3]['name'])
			$("#kizunaspeed").text(window.engkizuna[3]['cs'])
			$("#kizunacost").text(window.engkizuna[3]['cost'])
			$("#kizunadesc").text(window.engkizuna[3]['description'])

		}
		else if(id == 60061201 || id == 60061202){
			kizuna.style.display = "block"
			$("#kizunatype").text(window.engkizuna[1]['nature'])
			$("#kizunaname").text(window.engkizuna[1]['name'])
			$("#kizunaspeed").text(window.engkizuna[1]['cs'])
			$("#kizunacost").text(window.engkizuna[1]['cost'])
			$("#kizunadesc").text(window.engkizuna[1]['description'])

		}
		else if(id == 60060701 || id == 60060702){
			kizuna.style.display = "block"
			$("#kizunatype").text(window.engkizuna[0]['nature'])
			$("#kizunaname").text(window.engkizuna[0]['name'])
			$("#kizunaspeed").text(window.engkizuna[0]['cs'])
			$("#kizunacost").text(window.engkizuna[0]['cost'])
			$("#kizunadesc").text(window.engkizuna[0]['description'])

		}
		else{
			kizuna.style.display = "none"
		}

		var eng
		//Skill and Abilities
		for(var x in window.detail){
			if(id == window.detail[x]['id']){
				eng = window.detail[x]
			}
		}


		var name = eng['name']
		var leadname = eng['subtext']
		var lead = eng['lead']
		var s1n = eng['s1n']
		var s1 = eng['s1']
		var s1ntr = eng['s1ntr']
		var s1cs = eng['s1cs']
		var s1c = eng['s1c']
		var s2n = eng['s2n']
		var s2 = eng['s2']
		var s2ntr = eng['s2ntr']
		var s2cs = eng['s2cs']
		var s2c = eng['s2c']
		var a1n = eng['a1n']
		var a1 = eng['a1']
		var a2n = eng['a2n']
		var a2 = eng['a2']
		var a3n = eng['a3n']
		var a3 = eng['a3']
		var fullName = name + ", " + leadname


		//State
		var charaBreakdown = ""
		for(var x in window.breakdown){
			if(id == window.breakdown[x]['id']){
				charaBreakdown = window.breakdown[x]
			}
		}

		if(charaBreakdown != ""){
			var stateCounter = 1;

			for(var x in charaBreakdown['status']){
				for(var y in window.state){
					if(charaBreakdown['status'][x] == window.state[y]['iconId']){
						$('#state-' + stateCounter + 'img').attr('src', '../../../common/assets/img/states/' + window.state[y]['iconId'] + '.png');
						$('#state-' + stateCounter).attr('data-ps', window.state[y]['name'] + ": " + window.state[y]['description']);
						stateCounter++
					}
				}
			}
			for(var x in charaBreakdown['posstate']){
				for(var y in window.state){
					if(charaBreakdown['posstate'][x] == window.state[y]['iconId']){
						$('#state-' + stateCounter + 'img').attr('src', '../../../common/assets/img/states/' + window.state[y]['iconId'] + '.png');
						$('#state-' + stateCounter).attr('data-ps', window.state[y]['name'] + ": " + window.state[y]['description']);
						stateCounter++
					}
				}
			}

			for(var x in charaBreakdown['negstate']){
				for(var y in window.state){
					if(charaBreakdown['negstate'][x] == window.state[y]['iconId']){
						$('#state-' + stateCounter + 'img').attr('src', '../../../common/assets/img/states/' + window.state[y]['iconId'] + '.png');
						$('#state-' + stateCounter).attr('data-ns', window.state[y]['name'] + ": " + window.state[y]['description']);
						stateCounter++
					}
				}
			}

			for(var x in charaBreakdown['posgod']){
				for(var y in window.state){
					if(charaBreakdown['posgod'][x] == window.state[y]['iconId']){
						$('#state-' + stateCounter + 'img').attr('src', '../../../common/assets/img/states/' + window.state[y]['iconId'] + '.png');
						$('#state-' + stateCounter).attr('data-pg', window.state[y]['name'] + ": " + window.state[y]['description']);
						stateCounter++
					}
				}
			}

			for(var x in charaBreakdown['neggod']){
				for(var y in window.state){
					if(charaBreakdown['neggod'][x] == window.state[y]['iconId']){
						$('#state-' + stateCounter + 'img').attr('src', '../../../common/assets/img/states/' + window.state[y]['iconId'] + '.png');
						$('#state-' + stateCounter).attr('data-ng', window.state[y]['name'] + ": " + window.state[y]['description']);
						stateCounter++
					}
				}
			}

			for(var x in charaBreakdown['unique']){
				for(var y in window.state){
					if(charaBreakdown['unique'][x] == window.state[y]['iconId']){
						$('#state-' + stateCounter + 'img').attr('src', '../../../common/assets/img/states/' + window.state[y]['iconId'] + '.png');
						$('#state-' + stateCounter).attr('data-unique', window.state[y]['name'] + ": " + window.state[y]['description']);
						stateCounter++
					}
				}
			}
		}


		//Potential
		var abilityArr = []
		var pability = []
		var pname = []
		var fability = []
		var fname = []
		var legendary = 0

		for(var y in window.potential){
			if(tempId == window.potential[y]['cardId']){
				if(window.potential[y]['type'] == "3"){
					legendary = 1;
				}
				if(window.potential[y]['type'] == "2"){
					abilityArr = window.potential[y]['abilityId'].split(",")
					for(var x in abilityArr){
						for(var z in window.ability){
							if(abilityArr[x] == window.ability[z]['abilityId']){
								if(window.potential[y]['panelType'] == "1"){
									pname.push(window.potential[y]['name'])
									pability.push(window.ability[z]['abilityDescription'])
								}
								else{
									fname.push(window.potential[y]['name'])
									fability.push(window.ability[z]['abilityDescription'])
								}
							}
						}
					}
				}
				if(window.potential[y]['type'] == "1"){
					if(window.potential[y]['panelType'] == "1"){
						pname.push(window.potential[y]['name'])
					}
					else{
						fname.push(window.potential[y]['name'])
					}
				}
			}
		}


		if(pability.length == 8){
			$('.unit-char').attr('id', 'rainbow');
			if(legendary == 1){
				$('.unit-char').attr('id', 'legendaryR');

			}
		}		
		else if(pability.length == 4){
			$('.unit-char').attr('id', 'gold');
			if(legendary == 1){
				$('.unit-char').attr('id', 'legendaryG');

			}
		}

		var lp = document.getElementById("lp");
		var ls = document.getElementById("ls");
		var forb4 = document.getElementById("forb4");
		var for4 = document.getElementById("for4");
		var pt4 = document.getElementById("pt4");

		var lbhp = 300000*15
		var lbspd = 150*15
		var lbrec = 300000*15
		var lbch = 10*15
		if(legendary == 1){
			if(id >= 20051202){
				lp.style.display = "block"
				ls.style.display = "block"
				$('#caltrop').text("[Caltrop Lv3]: Chance to Deal 2,000,000 Damage after an Enemy Action");
				$('#kunai').text("[Kunai Lv3]: Chance to Deal 2,000,000 Damage after using a Skill");
				$('#food').text("[Food Pills Lv3]: HP and Chakra Recovery +45% on Movement Selection");
				$('#subs').text("[Substitution Lv3]: Chance for Withstand +1-+3");

				$('#l1hp').text(lhp.toLocaleString());
				$('#l1atk').text(latk.toLocaleString());
				$('#l1def').text(ldef.toLocaleString());
				$('#l1spd').text(lspd.toLocaleString());

				$('#l2hp').text(lhp.toLocaleString());
				$('#l2atk').text(latk.toLocaleString());
				$('#l2def').text(ldef.toLocaleString());
				$('#l2spd').text(lspd.toLocaleString());

				$('#l3hp').text(lhp.toLocaleString());
				$('#l3atk').text(latk.toLocaleString());
				$('#l3def').text(ldef.toLocaleString());
				$('#l3spd').text(lspd.toLocaleString());

				$('#l4hp').text(lhp.toLocaleString());
				$('#l4atk').text(latk.toLocaleString());
				$('#l4def').text(ldef.toLocaleString());
				$('#l4spd').text(lspd.toLocaleString());

				$('#l5hp').text(lhp.toLocaleString());
				$('#l5atk').text(latk.toLocaleString());
				$('#l5def').text(ldef.toLocaleString());
				$('#l5spd').text(lspd.toLocaleString());

				$('#lbhp').text(lbhp.toLocaleString());
				$('#lbspd').text(lbspd.toLocaleString());
				$('#lbrec').text(lbrec.toLocaleString());
				$('#lbch').text(lbch.toLocaleString());
			}
		}
		else{
			lhp = 0
			latk = 0
			ldef = 0
			lspd = 0
		}


		if(pability.length  >= 4){
			$('#potential1').text(pability[0]);
			$('#potential2').text(pability[1]);
			$('#potential3').text(pability[2]);
			$('#potential4').text(pability[3]);
			$('#potentialtitle1').text(pname[0]);
			$('#potentialtitle2').text(pname[4]);
			$('#potentialtitle3').text(pname[5]);
			$('#potentialtitlen3').text(pname[5]);
			$('#forbidden1').text(fability[0]);
			$('#forbidden2').text(fability[1]);
			$('#forbidden3').text(fability[2]);
			$('#forbidden4').text(fability[3]);
			$('#forbiddentitle1').text(fname[0]);
			$('#forbiddentitle2').text(fname[1]);
			$('#forbiddentitle3').text(fname[4]);
			$('#forbiddentitlen3').text(fname[4]);
			if(unit['cost'] == 90){
				if(pname[0] == "潜在覚醒・土"){

					p1hp = 10500*2
					p1atk = 5300*3
					p1def = 3700*3
					p1spd = 1*3

					p2hp = 7300*4
					p2atk = 7300*3
					p2def = 7500*2
					p2spd = 2*3
					p2sd = 25*4

					p3hp = 19000*2
					p3atk = 7300*4
					p3def = 10000*4
					p3spd = 2*4

					f1hp = 12500*2
					f1atk = 6300*3
					f1def = 6500*3
					f1spd = 1*3

					f2hp = 17500*2
					f2atk = 5400*3
					f2def = 18000*1
					f2spd = 2*4
					f2chakra = 40*4

					f3hp = 23000*2
					f3atk = 11700*3
					f3def = 8000*3
					f3spd = 3*3
					f3sd = 25*3

					if(pability.length == 8){
						p4hp = 19000*2
						p4atk = 7300*3
						p4def = 10000*2
						p4spd = 2*4

						f4hp = 11500*4
						f4atk = 11700*3
						f4def = 12000*2
						f4spd = 3*3
						f4sd = 25*3
					}
					
				}


				$('#p1hp').text(p1hp.toLocaleString());
				$('#p1atk').text(p1atk.toLocaleString());
				$('#p1def').text(p1def.toLocaleString());
				$('#p1spd').text(p1spd.toLocaleString());

				$('#p2hp').text(p2hp.toLocaleString());
				$('#p2atk').text(p2atk.toLocaleString());
				$('#p2def').text(p2def.toLocaleString());
				$('#p2spd').text(p2spd.toLocaleString());
				$('#p2sd').text(p2sd + "%");

				$('#p3hp').text(p3hp.toLocaleString());
				$('#p3atk').text(p3atk.toLocaleString());
				$('#p3def').text(p3def.toLocaleString());
				$('#p3spd').text(p3spd.toLocaleString());

				$('#p4hp').text(p4hp.toLocaleString());
				$('#p4atk').text(p4atk.toLocaleString());
				$('#p4def').text(p4def.toLocaleString());
				$('#p4spd').text(p4spd.toLocaleString());

				$('#f1hp').text(f1hp.toLocaleString());
				$('#f1atk').text(f1atk.toLocaleString());
				$('#f1def').text(f1def.toLocaleString());
				$('#f1spd').text(f1spd.toLocaleString());

				$('#f2hp').text(f2hp.toLocaleString());
				$('#f2atk').text(f2atk.toLocaleString());
				$('#f2def').text(f2def.toLocaleString());
				$('#f2spd').text(f2spd.toLocaleString());
				$('#f2chakra').text(f2chakra.toLocaleString());

				$('#f3hp').text(f3hp.toLocaleString());
				$('#f3atk').text(f3atk.toLocaleString());
				$('#f3def').text(f3def.toLocaleString());
				$('#f3spd').text(f3spd.toLocaleString());
				$('#f3sd').text(f3sd + "%");


				$('#f4hp').text(f4hp.toLocaleString());
				$('#f4atk').text(f4atk.toLocaleString());
				$('#f4def').text(f4def.toLocaleString());
				$('#f4spd').text(f4spd.toLocaleString());
				$('#f4sd').text(f4sd + "%");

			}

			if(pability.length == 8){
				forb4.style.display = "block"
				pot4.style.display = "block"
				for4.style.display = "block"
				pt4.style.display = "block"
				$('#potential5').text(pability[4]);
				$('#potential6').text(pability[5]);
				$('#potential7').text(pability[6]);
				$('#potential8').text(pability[7]);
				$('#potentialtitle4').text(pname[8]);
				$('#potentialtitlen4').text(pname[8]);

				$('#forbidden5').text(fability[4]);
				$('#forbidden6').text(fability[5]);
				$('#forbidden7').text(fability[6]);
				$('#forbidden8').text(fability[7]);
				$('#forbiddentitle4').text(fname[8]);
				$('#forbiddentitlen4').text(fname[8]);

		
			}
		}
		


		$('#chara-name').text(fullName);
		$('#leadname').text(leadname);
		$('#lead').text(lead);

		$('#skill1name').text(s1n);
		$('#skill1').text(s1);
		$('#skill1type').text(s1ntr);
		$('#skill1speed').text(s1cs);
		$('#skill1cost').text(s1c);
		$('#skill2name').text(s2n);
		$('#skill2').text(s2);
		$('#skill2type').text(s2ntr);
		$('#skill2speed').text(s2cs);
		$('#skill2cost').text(s2c);

		$('#ability1name').text(a1n);
		$('#ability1').text(a1);
		$('#ability2name').text(a2n);
		$('#ability2').text(a2);
		$('#ability3name').text(a3n);
		$('#ability3').text(a3);

		$("#unit-cost").text(unit['cost'])
		$("#unit-type").text(type)
		$("#unit-affi").text(affi)
		$("#unit-tag").text(tag)

		$("#base-hp").text(hp.toLocaleString())
		$("#base-chakra").text(100)
		$("#base-atk").text(atk.toLocaleString())
		$("#base-def").text(def.toLocaleString())
		$("#base-spd").text(spd.toLocaleString())
		$("#base-dodge").text(dodge)
		$("#base-cc").text(cc)
		$("#base-cd").text(cd)
		$("#base-sd").text(sd)

		$("#pot-hp").text((p1hp + p2hp + p3hp + p4hp + f1hp + f2hp + f3hp + f4hp + (lhp*5) + lbhp).toLocaleString())
		$("#pot-atk").text((p1atk + p2atk + p3atk + p4atk + f1atk + f2atk + f3atk + f4atk + (latk*5)).toLocaleString())
		$("#pot-def").text((p1def + p2def + p3def + p4def + f1def + f2def + f3def + f4def + (ldef*5)).toLocaleString())
		$("#pot-spd").text((p1spd + p2spd + p3spd + p4spd + f1spd + f2spd + f3spd + f4spd + (lspd*5)).toLocaleString())
		$("#pot-chakra").text(f2chakra)
		$("#pot-sd").text(p2sd + f3sd + f4sd + "%")


		$("#max-hp").text((hp + p1hp + p2hp + p3hp + p4hp + f1hp + f2hp + f3hp + f4hp + (lhp*5) + lbhp).toLocaleString())
		$("#max-chakra").text(100 + f2chakra)
		$("#max-atk").text((atk + p1atk + p2atk + p3atk + p4atk + f1atk + f2atk + f3atk + f4atk + (latk*5)).toLocaleString())
		$("#max-def").text((def + p1def + p2def + p3def + p4def + f1def + f2def + f3def + f4def + (ldef*5)).toLocaleString())
		$("#max-spd").text((spd + p1spd + p2spd + p3spd + p4spd + f1spd + f2spd + f3spd + f4spd + (lspd*5)).toLocaleString())
		$("#max-sd").text(p2sd + f3sd + f4sd + "%")

		$("#pvp-hp").text((hp + p1hp + p2hp + p3hp + p4hp + f1hp + f2hp + f3hp + f4hp + (lhp*5) + lbhp + (hp*15)).toLocaleString())
		$("#pvp-chakra").text(100 + f2chakra)
		$("#pvp-atk").text((atk + p1atk + p2atk + p3atk + p4atk + f1atk + f2atk + f3atk + f4atk + (latk*5)).toLocaleString())
		$("#pvp-def").text((def + p1def + p2def + p3def + p4def + f1def + f2def + f3def + f4def + (ldef*5) - (def * 1.5)).toLocaleString())
		$("#pvp-spd").text((spd + p1spd + p2spd + p3spd + p4spd + f1spd + f2spd + f3spd + f4spd + (lspd*5)).toLocaleString())
		$("#pvp-sd").text(p2sd + f3sd + f4sd - 95 + "%")

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

function checkTag(tag){
	for(var i in window.key){
		if(window.key[i][0] == 'tag'){
			if(tag == window.key[i][1]){
				tags = window.key[i][2];
				return tags;
			}
		}
	}
}