var loc = window.location.toString()
var temp = 'https://nsc-db.github.io/test/unit/20000001/index.htm'
var id = loc.slice(35,43);
//var id = loc.slice(38, 46);
//var id = loc.slice(69,77)
console.log(id)

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
		var dodge = unit["avoidanceLot"] / 100 + "%"
		var cc = unit["criticalLot"] / 100 + "%"
		var cd = unit["criticalDamageLot"] / 100 + "%"
		var sd 
		var tag
		var p1hp=0
		var p1atk=0
		var p1def=0
		var p1spd=0
		var p2hp=0
		var p2atk=0
		var p2def=0
		var p2spd=0
		var p3hp=0
		var p3atk=0
		var p3def=0
		var p3spd=0
		var p4hp= 0
		var p4atk= 0
		var p4def= 0
		var p4spd= 0
		var p2sd=0
		var f1hp=0
		var f1atk=0
		var f1def=0
		var f1spd=0
		var f2hp=0
		var f2atk=0
		var f2def=0
		var f2spd=0
		var f2chakra=0
		var f3hp=0
		var f3atk=0
		var f3def=0
		var f3spd=0
		var f3sd=0
		var f4hp= 0
		var f4atk= 0
		var f4def= 0
		var f4spd= 0
		var f4sd= 0	
		var lhp = 800000*3
		var latk = 50000*3
		var ldef = 50000*3
		var lspd = 10*5 
		var shp = 0
		var satk = 0
		var sdef = 0
		var sspd = 0
		var ssd = 0
		var ahp = 0
		var achakra = 0
		var aatk = 0
		var adef = 0
		var aspd = 0
		var asd = 0
		var maxhp =0
		var maxchakra =0
		var maxatk =0
		var maxdef =0
		var maxspd =0
		var maxsd =0
		var pvphp = 0
		var pvpdef = 0
		var pvpsd = 0
		var statehp = 0
		var stateatk = 0
		var statedef = 0
		var statespd = 0
		var statesd = 0

		var abilityhp = 0
		var abilitychakra = 0;
		var abilityatk = 0
		var abilitydef = 0
		var abilityspd = 0
		var abilitysd = 0

		var gearhp = 0
		var gearchakra = 0
		var gearatk = 0
		var geardef = 0
		var gearspd = 0
		var gearsd = 0

		var head = 'Hey'

		
		var kizuna = document.getElementById("kizuna");;
		
		var unitType = checkType(unit)
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

		if(id == 60070401 || id == 60070501 || id == 60061201 || id == 60060701 || id == 60070601 || id == 60070901 ){
			tempId = id-1
		}
		else if(id == 60070402 || id == 60070502 || id == 60061202 || id == 60060702 || id == 60070602 || id == 60070902){
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
		else if(id == 60070601 || id == 60070602){
			kizuna.style.display = "block"
			$("#kizunatype").text(window.engkizuna[4]['nature'])
			$("#kizunaname").text(window.engkizuna[4]['name'])
			$("#kizunaspeed").text(window.engkizuna[4]['cs'])
			$("#kizunacost").text(window.engkizuna[4]['cost'])
			$("#kizunadesc").text(window.engkizuna[4]['description'])

		}
		else if(id == 60070901 || id == 60070902){
			kizuna.style.display = "block"
			$("#kizunatype").text(window.engkizuna[5]['nature'])
			$("#kizunaname").text(window.engkizuna[5]['name'])
			$("#kizunaspeed").text(window.engkizuna[5]['cs'])
			$("#kizunacost").text(window.engkizuna[5]['cost'])
			$("#kizunadesc").text(window.engkizuna[5]['description'])

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
			$('#rating').text('Rating: ' + charaBreakdown['rating'])
			$('#rating').attr('data-ps', 'LP Rating: ' + charaBreakdown['larate'])

			if(charaBreakdown['rating'] == 100){
				$('#tier').text('Tier: \SSS')
				$('#tier').attr('data-ps', 'LP Tier: SSS')
				$('.tier-header').attr('style', 'background-color: #9A0000;')
			}
			else if(charaBreakdown['rating'] >= 95 && charaBreakdown['rating'] < 100){
				$('#tier').text('Tier: SS')
				$('#tier').attr('data-ps', 'LP Tier: SS')
				$('.tier-header').attr('style', 'background-color: #CC0001;')
			}
			else if(charaBreakdown['rating'] >= 90 && charaBreakdown['rating'] < 95){
				$('#tier').text('Tier: S')
				$('#tier').attr('data-ps', 'LP Tier: S')
				$('.tier-header').attr('style', 'background-color: #E06665;')
			}
			else if(charaBreakdown['rating'] >= 85 && charaBreakdown['rating'] < 90){
				$('#tier').text('Tier: A+')
				$('#tier').attr('data-ps', 'LP Tier: A+')
				$('.tier-header').attr('style', 'background-color: #F4CCCC;')
			}
			else if(charaBreakdown['rating'] >= 80 && charaBreakdown['rating'] < 85){
				$('#tier').text('Tier: A')
				$('#tier').attr('data-ps', 'LP Tier: A')
				$('.tier-header').attr('style', 'background-color: #F1C332;')
			}
			else if(charaBreakdown['rating'] >= 70 && charaBreakdown['rating'] < 80){
				$('#tier').text('Tier: B')
				$('#tier').attr('data-ps', 'LP Tier: B')
				$('.tier-header').attr('style', 'background-color: #FED966;')
			}
			else{
				$('#tier').text('Tier: C')
				$('#tier').attr('data-ps', 'LP Tier: C')
				$('.tier-header').attr('style', 'background-color: #ffffed;')				
			}
			var stateCounter = 1;

			for(var x in charaBreakdown['status']){
				for(var y in window.state){
					if(charaBreakdown['status'][x] == window.state[y]['iconId']){
						if(window.state[y]['iconId'] == "ik"){
							$('#state-' + stateCounter + 'img').attr('src', '../../../common/assets/img/states/' + window.state[y]['iconId'] + '.gif');
							$('#state-' + stateCounter).attr('data-ps', window.state[y]['name'] + ": " + window.state[y]['description']);
							stateCounter++
						}
						else{
							$('#state-' + stateCounter + 'img').attr('src', '../../../common/assets/img/states/' + window.state[y]['iconId'] + '.png');
							$('#state-' + stateCounter).attr('data-ps', window.state[y]['name'] + ": " + window.state[y]['description']);
							stateCounter++
						}
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

			for(var x in charaBreakdown['beast']){
				for(var y in window.state){
					if(charaBreakdown['beast'][x] == window.state[y]['iconId']){
						$('#state-' + stateCounter + 'img').attr('src', '../../../common/assets/img/states/' + window.state[y]['iconId'] + '.png');
						$('#state-' + stateCounter).attr('data-unique', window.state[y]['name'] + ": " + window.state[y]['description']);
						stateCounter++
					}
				}
			}

			for(var x in charaBreakdown['terrain']){
				for(var y in window.field){
					if(charaBreakdown['terrain'][x] == window.field[y]['id']){
						$('#state-' + stateCounter + 'img').attr('src', '../../../common/assets/img/terrain/' + window.field[y]['id'] + '.png');
						$('#state-' + stateCounter).attr('data-unique', window.field[y]['name'] + ": " + window.field[y]['description']);
						stateCounter++
					}
				}
			}

			//State Stats
			shp = charaBreakdown['buff'][0]
			satk = charaBreakdown['buff'][1]
			sdef = charaBreakdown['buff'][2]
			sspd = charaBreakdown['buff'][3]
			ssd  = charaBreakdown['buff'][4]

			ahp = charaBreakdown['ability'][0]
			achakra = charaBreakdown['ability'][1]
			aatk = charaBreakdown['ability'][2]
			adef = charaBreakdown['ability'][3]
			aspd = charaBreakdown['ability'][4]
			asd  = charaBreakdown['ability'][5]

			var statehp = parseInt(hp * (shp / 100))
			var stateatk = parseInt(atk * (satk / 100))
			var statedef = parseInt(def * (sdef / 100))
			var statespd = parseInt(spd * (sspd / 100))
			var statesd = ssd

			var abilityhp = parseInt(hp * (ahp / 100));
			var abilitychakra = parseInt(achakra);
			var abilityatk = parseInt(atk * (aatk / 100));
			var abilitydef = parseInt(def * (adef / 100));
			var abilityspd = parseInt(spd * (aspd / 100));
			var abilitysd = parseInt(asd);

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

		//Legendary Awakening
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
			else{
				lp.style.display = "block"
				ls.style.display = "block"
				$('#caltrop').text("[Caltrop Lv3]: Chance to Deal 2,000,000 Damage after an Enemy Action");
				$('#kunai').text("[Kunai Lv3]: Chance to Deal 2,000,000 Damage after using a Skill");
				$('#food').text("[Food Pills Lv3]: HP and Chakra Recovery +45% on Movement Selection");
				$('#subs').text("[Substitution Lv3]: Chance for Withstand +1-+3");

				lhp = 400000*3

				lbhp = 200000*15
				lbspd = 100*15
				lbrec = 200000*15
				lbch = 10*15

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
			var lbhp = 0
			var lbspd = 0
			var lbrec = 0
			var lbch = 0
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
				else if(pname[0] == "潜在覚醒・風"){

					p1hp = 10500*2
					p1atk = 5300*3
					p1def = 5500*2
					p1spd = 1*4

					p2hp = 14500*2
					p2atk = 4400*5
					p2def = 15000*1
					p2spd = 1*4
					p2sd = 25*4

					p3hp = 19000*2
					p3atk = 9700*3
					p3def = 6700*3
					p3spd = 2*3

					f1hp = 6300*4
					f1atk = 6300*3
					f1def = 6500*2
					f1spd = 2*3

					f2hp = 17500*2
					f2atk = 6800*4
					f2def = 9000*2
					f2spd = 2*4
					f2chakra = 40*4

					f3hp = 23000*2
					f3atk = 11700*3
					f3def = 12000*2
					f3spd = 2*4
					f3sd = 25*3

					if(pability.length == 8){
						p4hp = 9500*4
						p4atk = 9700*3
						p4def = 10000*2
						p4spd = 2*3

						f4hp = 23000*2
						f4atk = 7000*3
						f4def = 24000*2
						f4spd = 2*4
						f4sd = 25*3
					}
				}

				else if(pname[0] == "潜在覚醒・水"){

					p1hp = 5300*4
					p1atk = 5300*3
					p1def = 5500*2
					p1spd = 1*3

					p2hp = 14500*2
					p2atk = 5500*5
					p2def = 7500*2
					p2spd = 1*4
					p2sd = 25*4

					p3hp = 19000*2
					p3atk = 9700*3
					p3def = 10000*2
					p3spd = 2*4

					f1hp = 12500*2
					f1atk = 3800*5
					f1def = 13000*1
					f1spd = 1*4

					f2hp = 17500*2
					f2atk = 9000*3
					f2def = 6000*3
					f2spd = 2*3
					f2chakra = 40*4

					f3hp = 11500*4
					f3atk = 11700*3
					f3def = 12000*2
					f3spd = 3*3
					f3sd = 25*3

					if(pability.length == 8){
						p4hp = 19000*2
						p4atk = 5800*5
						p4def = 20000*1
						p4spd = 2*4

						f4hp = 23000*2
						f4atk = 8800*4
						f4def = 12000*2
						f4spd = 2*4
						f4sd = 25*3
					}
				}
				else if(pname[0] == "潜在覚醒・雷"){

					p1hp = 10500*2
					p1atk = 3200*5
					p1def = 11000*1
					p1spd = 1*4

					p2hp = 14500*2
					p2atk = 7300*3
					p2def = 5000*2
					p2spd = 2*4
					p2sd = 25*4

					p3hp = 9500*2
					p3atk = 9700*3
					p3def = 10000*2
					p3spd = 2*3

					f1hp = 12500*2
					f1atk = 4800*5
					f1def = 6500*2
					f1spd = 1*4

					f2hp = 17500*2
					f2atk = 9000*3
					f2def = 9000*2
					f2spd = 2*4
					f2chakra = 40*4

					f3hp = 23000*2
					f3atk = 7000*5
					f3def = 24000*1
					f3spd = 2*3
					f3sd = 25*3

					if(pability.length == 8){
						p4hp = 19000*2
						p4atk = 9700*3
						p4def = 6700*3
						p4spd = 2*3

						f4hp = 23000*2
						f4atk = 8800*4
						f4def = 12000*2
						f4spd = 2*4
						f4sd = 25*3
					}
				}
				else{
					p1hp = 10500*2
					p1atk = 4000*4
					p1def = 5500*2
					p1spd = 1*4

					p2hp = 14500*2
					p2atk = 7300*3
					p2def = 7500*3
					p2spd = 1*3
					p2sd = 25*4

					p3hp = 19000*2
					p3atk = 5800*5
					p3def = 20000*1
					p3spd = 2*4

					f1hp = 12500*2
					f1atk = 6300*3
					f1def = 4300*3
					f1spd = 2*3

					f2hp = 8800*4
					f2atk = 9000*3
					f2def = 9000*2
					f2spd = 2*3
					f2chakra = 40*4

					f3hp = 23000*2
					f3atk = 8800*4
					f3def = 12000*1
					f3spd = 2*4
					f3sd = 25*3

					if(pability.length == 8){
						p4hp = 19000*2
						p4atk = 9700*3
						p4def = 6700*3
						p4spd = 2*3

						f4hp = 23000*2
						f4atk = 11700*3
						f4def = 12000*2
						f4spd = 2*4
						f4sd = 25*3
					}
				}
			}
			else{
				if(pname[0] == "潜在覚醒・土"){

					p1hp = 4500*2
					p1atk = 2700*3
					p1def = 1300*3
					p1spd = 1*3

					p2hp = 3300*4
					p2atk = 3700*3
					p2def = 3000*2
					p2spd = 2*3
					p2sd = 15*4

					p3hp = 8000*2
					p3atk = 3800*4
					p3def = 35000*4
					p3spd = 2*4

					f1hp = 5500*2
					f1atk = 3300*3
					f1def = 2500*3
					f1spd = 1*3

					f2hp = 7500*2
					f2atk = 2600*3
					f2def = 7000*1
					f2spd = 2*4
					f2chakra = 20*4

					f3hp = 10000*2
					f3atk = 5700*3
					f3def = 3000*3
					f3spd = 3*3
					f3sd = 15*3
				}
				else if(pname[0] == "潜在覚醒・風"){

					p1hp = 4500*2
					p1atk = 2700*3
					p1def = 2000*2
					p1spd = 1*4

					p2hp = 6500*2
					p2atk = 2200*5
					p2def = 6000*1
					p2spd = 1*4
					p2sd = 15*4

					p3hp = 8000*2
					p3atk = 5000*3
					p3def = 2300*3
					p3spd = 2*3

					f1hp = 2800*4
					f1atk = 3300*3
					f1def = 2500*2
					f1spd = 2*3

					f2hp = 7500*2
					f2atk = 3300*4
					f2def = 3500*2
					f2spd = 2*4
					f2chakra = 20*4

					f3hp = 10000*2
					f3atk = 5700*3
					f3def = 4500*2
					f3spd = 2*4
					f3sd = 15*3
				}

				else if(pname[0] == "潜在覚醒・水"){

					p1hp = 2300*4
					p1atk = 2700*3
					p1def = 2000*2
					p1spd = 1*3

					p2hp = 6500*2
					p2atk = 280*5
					p2def = 3000*2
					p2spd = 1*4
					p2sd = 15*4

					p3hp = 8000*2
					p3atk = 5000*3
					p3def = 3500*2
					p3spd = 2*4

					f1hp = 5500*2
					f1atk = 2000*5
					f1def = 5000*1
					f1spd = 1*4

					f2hp = 7500*2
					f2atk = 4300*3
					f2def = 2300*3
					f2spd = 2*3
					f2chakra = 20*4

					f3hp = 5000*4
					f3atk = 5700*3
					f3def = 4500*2
					f3spd = 3*3
					f3sd = 15*3
				}
				else if(pname[0] == "潜在覚醒・雷"){

					p1hp = 4500*2
					p1atk = 1600*5
					p1def = 4000*1
					p1spd = 1*4

					p2hp = 6500*2
					p2atk = 3700*3
					p2def = 2000*2
					p2spd = 2*4
					p2sd = 15*4

					p3hp = 4000*2
					p3atk = 5000*3
					p3def = 3500*2
					p3spd = 2*3

					f1hp = 5500*2
					f1atk = 2500*5
					f1def = 2500*2
					f1spd = 1*4

					f2hp = 7500*2
					f2atk = 4300*3
					f2def = 3500*2
					f2spd = 2*4
					f2chakra = 20*4

					f3hp = 10000*2
					f3atk = 3400*5
					f3def = 9000*1
					f3spd = 2*3
					f3sd = 15*3
				}
				else{
					p1hp = 4500*2
					p1atk = 2000*4
					p1def = 2000*2
					p1spd = 1*4

					p2hp = 14500*2
					p2atk = 3300*3
					p2def = 3000*3
					p2spd = 1*3
					p2sd = 25*4

					p3hp = 8000*2
					p3atk = 3000*5
					p3def = 7000*1
					p3spd = 2*4

					f1hp = 5500*2
					f1atk = 3300*3
					f1def = 1300*3
					f1spd = 2*3

					f2hp = 3800*4
					f2atk = 4300*3
					f2def = 3500*2
					f2spd = 2*3
					f2chakra = 40*4

					f3hp = 10000*2
					f3atk = 4300*4
					f3def = 4500*1
					f3spd = 2*4
					f3sd = 25*3
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
		

		var charaProfileId = unit['charaProfileId']

		var gearPage = ''
		var ownGear = []
		var idArr = []
		for(var x in window.unique){
			idArr = window.unique[x]['charaIds'].split(",")
			for(var y in idArr){
				if(charaProfileId == idArr[y]){
					ownGear.push(window.unique[x])
					break;
				}
			}
		}
		var gearCount = 1
		for(var x in ownGear){
			for(var y in window.gear){
				if(ownGear[x]['targetCrystal'] == window.gear[y]['recipeId']){
					var ningu = window.gear[y]
					break;

				}
			}
			var gearType = checkGearType(ningu);
			gearPage 	+='<div class="base-gear">' 
						+		'<div class="icon">'
						+			'<img src="../../../common/assets/img/gear/ningu_' + ningu['crystalImageId'] + '.png">'
						+		'</div>' 
						+		'<div class="info">'
						+			'<div class="header-gear">'
						+				'<div class="type-gear">'
						+					'<h4 type="' + gearType + '">' + gearType + '</h4>'
						+				'</div>'
						+			'<div class="title">'
						+				'<h3>' + ningu['crystalName'] + '</h3>'
						+			'</div>'
						+			'<div class="equip">'
						+				'<input type="checkbox" id="gear' + gearCount + '" value="' + ownGear[x]['targetCrystal'] +'" title="' + ningu['crystalImageId'] + '">'
						+				'<label id="equiptext" for="gear' + gearCount + '">Equip</label>'
						+			'</div>'
						+		'</div>'
						+		'<div class="description">'
						+			'<p>' + ownGear[x]['description'] + '</p>'
						+		'</div>'
						+	'</div>'
						+'</div>';
			gearCount++
	
		}
		
		document.getElementById("gear").innerHTML = gearPage;

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
		$("#unit-type").text(unitType)
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

		$("#skill-hp").text(statehp.toLocaleString())
		$("#skill-atk").text(stateatk.toLocaleString())
		$("#skill-def").text(statedef.toLocaleString())
		$("#skill-spd").text(statespd.toLocaleString())
		$("#skill-sd").text(statesd.toLocaleString() + "%")

		$("#ability-hp").text(abilityhp.toLocaleString())
		$("#ability-chakra").text(abilitychakra.toLocaleString())
		$("#ability-atk").text(abilityatk.toLocaleString())
		$("#ability-def").text(abilitydef.toLocaleString())
		$("#ability-spd").text(abilityspd.toLocaleString())
		$("#ability-sd").text(abilitysd.toLocaleString() + "%")



		$("#max-dodge").text(dodge)
		$("#max-cc").text(cc)
		$("#max-cd").text(cd)
		$("#pvp-dodge").text(dodge)
		$("#pvp-cc").text(cc)
		$("#pvp-cd").text(cd)
		$("#enemy-dodge").text(dodge)
		$("#enemy-cc").text(cc)
		$("#enemy-cd").text(cd)
		$("#base-sd").text(sd)

		$("#pot-hp").text((p1hp + p2hp + p3hp + p4hp + f1hp + f2hp + f3hp + f4hp + (lhp*5) + lbhp).toLocaleString())
		$("#pot-atk").text((p1atk + p2atk + p3atk + p4atk + f1atk + f2atk + f3atk + f4atk + (latk*5)).toLocaleString())
		$("#pot-def").text((p1def + p2def + p3def + p4def + f1def + f2def + f3def + f4def + (ldef*5)).toLocaleString())
		$("#pot-spd").text((p1spd + p2spd + p3spd + p4spd + f1spd + f2spd + f3spd + f4spd + (lspd*5)).toLocaleString())
		$("#pot-chakra").text(f2chakra)
		$("#pot-sd").text(p2sd + f3sd + f4sd + "%")

		maxhp = hp + statehp + abilityhp + p1hp + p2hp + p3hp + p4hp + f1hp + f2hp + f3hp + f4hp + (lhp*5) + lbhp
		maxchakra = 100 + abilitychakra + f2chakra
		maxatk = atk + stateatk + abilityatk + p1atk + p2atk + p3atk + p4atk + f1atk + f2atk + f3atk + f4atk + (latk*5)
		maxdef = def + statedef + abilitydef + p1def + p2def + p3def + p4def + f1def + f2def + f3def + f4def + (ldef*5)
		maxspd = spd + statespd + abilityspd + p1spd + p2spd + p3spd + p4spd + f1spd + f2spd + f3spd + f4spd + (lspd*5)
		maxsd = statesd + abilitysd + p2sd + f3sd + f4sd

		$("#max-hp").text(parseInt(maxhp).toLocaleString())
		$("#max-chakra").text(maxchakra)
		$("#max-atk").text(parseInt(maxatk).toLocaleString())
		$("#max-def").text(parseInt(maxdef).toLocaleString())
		$("#max-spd").text(parseInt(maxspd).toLocaleString())
		$("#max-sd").text(maxsd + '%')


		pvphp = maxhp + (hp*15)
		pvpdef = maxdef - (def*1.5)
		pvpsd = maxsd - 95
		$("#pvp-hp").text(parseInt(pvphp).toLocaleString())
		$("#pvp-chakra").text(maxchakra)
		$("#pvp-atk").text(parseInt(maxatk).toLocaleString())
		$("#pvp-def").text(parseInt(maxdef).toLocaleString())
		$("#pvp-spd").text(parseInt(maxspd).toLocaleString())
		$("#pvp-sd").text(pvpsd + "%")

		enemyhp = maxhp + (hp*25)
		enemyspd = maxspd + spd
		enemysd = maxsd - 60
		$("#enemy-hp").text(parseInt(enemyhp).toLocaleString())
		$("#enemy-chakra").text(maxchakra)
		$("#enemy-atk").text(parseInt(maxatk).toLocaleString())
		$("#enemy-def").text(parseInt(maxdef).toLocaleString())
		$("#enemy-spd").text(parseInt(enemyspd).toLocaleString())
		$("#enemy-sd").text(enemysd + "%")

		var ctx = document.getElementById('statsRadar').getContext('2d');
		var myChart = new Chart(ctx, {
		    type: 'radar',
		    data: {
		        labels: ['HP', 'Chakra', 'ATK', 'DEF', 'SPD', 'Skill Damage'],
		        datasets: [{
		        	label: 'Total Stats',
		            data: [maxhp/4,maxchakra*15000,maxatk*4,maxdef*4,maxspd*1000,maxsd*5000],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1,
		        }
		        ]
		    },
		    options: {
		      legend:{
		      	display: false
		      },
		      scale: {
		         ticks: {
		         	max: 6000000,
		            display: false,
		            maxTicksLimit: 4

		         },
		         gridLines: {
				  color: "#FFFFFF"
				 },
		      },
		   }
		});
		 Chart.defaults.global.defaultFontColor='black';

		function equipGear(){
			$('#equip1').attr('src', '');
			$('#equip2').attr('src', '');
			$('#equip3').attr('src', '');
			$('#equip4').attr('src', '');
			$('#equip5').attr('src', '');
			var equipCount = 0
			var equipArr = []
			var equipUniqueArr = []
			gearhp = 0
			gearchakra = 0
			gearatk = 0
			geardef = 0
			gearspd = 0
			gearsd = 0
			for(var x = 1; x < gearCount; x++){
				var equipedGear = document.getElementById("gear" + x);

				if(equipedGear.checked){
					equipCount++
					equipArr.push(equipedGear.title)
					equipUniqueArr.push(equipedGear.value)
				}
			}
			for(var x in equipArr){
				console.log("Equipping")
				var num = parseInt(x)+1
				$('#equip' + num).attr('src', '../../../common/assets/img/gear/ningu_' + equipArr[x] + '.png');
				console.log(equipArr[x])
				for(var y in window.unique){
					if(equipUniqueArr[x] == window.unique[y]['targetCrystal']){
						var gearStats = [0,0,0,0,0,0]
						

						gearStats = checkEffect(window.unique[y])

						gearhp += gearStats[0]
						gearchakra += gearStats[1]
						gearatk += gearStats[2]
						geardef += gearStats[3]
						gearspd += gearStats[4]
						gearsd += gearStats[5]
						
					}
				}	
			}	

			console.log("HP:" + gearhp)
			console.log("Chakra:" + gearchakra)
			console.log("Atk:" + gearatk)
			console.log("Def:" + geardef)
			console.log("Spd:" + gearspd)
			console.log("Sd:" + gearsd)

			$("#gear-hp").text(parseInt((hp*(gearhp/100))).toLocaleString())
			$("#gear-chakra").text(gearchakra)
			$("#gear-atk").text(parseInt((atk*(gearatk/100))).toLocaleString())
			$("#gear-def").text(parseInt((def*(geardef/100))).toLocaleString())
			$("#gear-spd").text(parseInt((spd*(gearspd/100))).toLocaleString())
			$("#gear-sd").text(gearsd + '%')

			$("#max-hp").text(parseInt(maxhp + (hp*(gearhp/100))).toLocaleString())
			$("#max-chakra").text(maxchakra + gearchakra)
			$("#max-atk").text(parseInt(maxatk + (atk*(gearatk/100))).toLocaleString())
			$("#max-def").text(parseInt(maxdef + (def*(geardef/100))).toLocaleString())
			$("#max-spd").text(parseInt(maxspd + (spd*(gearspd/100))).toLocaleString())
			$("#max-sd").text(statesd + abilitysd + p2sd + f3sd + f4sd + gearsd +'%')


			$("#pvp-hp").text(parseInt(pvphp + (hp*(gearhp/100))).toLocaleString())
			$("#pvp-chakra").text(maxchakra + gearchakra)
			$("#pvp-atk").text(parseInt(maxatk + (atk*(gearatk/100))).toLocaleString())
			$("#pvp-def").text(parseInt(maxdef + (def*(geardef/100))).toLocaleString())
			$("#pvp-spd").text(parseInt(maxspd + (spd*(gearspd/100))).toLocaleString())
			$("#pvp-sd").text(pvpsd + gearsd + "%")

			$("#enemy-hp").text(parseInt(enemyhp + (hp*(gearhp/100))).toLocaleString())
			$("#enemy-chakra").text(maxchakra + gearchakra)
			$("#enemy-atk").text(parseInt(maxatk  + (atk*(gearatk/100))).toLocaleString())
			$("#enemy-def").text(parseInt(maxdef + (def*(geardef/100))).toLocaleString())
			$("#enemy-spd").text(parseInt(enemyspd + (spd*(gearspd/100))).toLocaleString())
			$("#enemy-sd").text(enemysd + gearsd + "%")

			if(charaBreakdown != ""){
				var s1d = charaBreakdown["s1d"]
				var s1s = charaBreakdown["s1ds"] / 100
				var s1m = charaBreakdown["s1m"]
				var s1t = charaBreakdown["s1dt"]
				var s1add1d = charaBreakdown["s1add1d"]
				var s1add1s = charaBreakdown["s1add1s"] / 100
				var s1addhit = charaBreakdown["s1add1h"]
				var s1add2d = charaBreakdown["s1add2d"]
				var s1add2s = charaBreakdown["s1add2s"] / 100
				var s1add2hit = charaBreakdown["s1add2h"]
				var s2d = charaBreakdown["s2d"]
				var s2s = charaBreakdown["s2ds"] / 100
				var s2m = charaBreakdown["s2m"]
				var s2t = charaBreakdown["s2dt"]
				var s2add1d = charaBreakdown["s2add1d"]
				var s2add1s = charaBreakdown["s2add1s"] / 100
				var s2addhit = charaBreakdown["s2add1h"]
				var s2add2d = charaBreakdown["s2add2d"]
				var s2add2s = charaBreakdown["s2add2s"] / 100
				var s2add2hit = charaBreakdown["s2add2h"]

				var s1dam = parseInt(s1d + ((maxatk + (atk*(gearatk/100))) * s1s))
				var s1add1dam = parseInt(s1add1d + ((maxatk + (atk*(gearatk/100))) * s1add1s))
				var s1add2dam = parseInt(s1add2d + ((maxatk + (atk*(gearatk/100))) * s1add2s))
				var s2dam = parseInt(s2d + ((maxatk + (atk*(gearatk/100)) * s2s)))
				var s2add1dam = parseInt(s2add1d + ((maxatk + (atk*(gearatk/100))) * s2add1s))
				var s2add2dam = parseInt(s2add2d + ((maxatk + (atk*(gearatk/100))) * s2add2s))
				var s2dam = parseInt(s2d + ((maxatk + (atk*(gearatk/100))) * s2s))		

				var basedamage = parseInt(s1dam * ((maxsd + gearsd + 100) / 100) * s1m)
				var add1damage = parseInt(s1add1dam * ((maxsd + gearsd + 100) / 100) * s1m)
				var add2damage = parseInt(s1add2dam * ((maxsd + gearsd + 100) / 100) * s1m)
				var basedamages2 = parseInt(s2dam * ((maxsd + gearsd + 100) / 100) * s2m)
				var add1damages2 = parseInt(s2add1dam * ((maxsd + gearsd + 100) / 100) * s2m)
				var add2damages2 = parseInt(s2add2dam * ((maxsd + gearsd + 100) / 100) * s2m)


				if(s1s > 0){
				baseadv*= 2
				}
				if(s1add1s > 0){
					s1addadv*= 2
				}
				if(s1add2s > 0){
					s2addadv*= 2
				}

				if(s2s > 0){
				baseadvs2*= 2
				}
				if(s2add1s > 0){
					s1addadvs2*= 2
				}
				if(s2add2s > 0){
					s2addadvs2*= 2
				}

				$("#s1d").text(parseInt(basedamage).toLocaleString())
				$("#s1add1").text(parseInt(add1damage).toLocaleString())
				$("#s1add1hit").text(s1addhit)
				$("#s1add2").text(parseInt(add2damage).toLocaleString())
				$("#s1add2hit").text(s1add2hit)

				$("#s2d").text(parseInt(basedamages2).toLocaleString())
				$("#s2add1").text(parseInt(add1damages2).toLocaleString())
				$("#s2add1hit").text(s2addhit)
				$("#s2add2").text(parseInt(add2damages2).toLocaleString())
				$("#s2add2hit").text(s2add2hit)

				var baseadv = basedamage
				var s1addadv = add1damage
				var s2addadv = add2damage

				var baseadvs2 = basedamages2
				var s1addadvs2 = add1damages2
				var s2addadvs2 = add2damages2
				var totaldamage = basedamage + (add1damage * s1addhit) + (add2damage * s1add2hit)
				var totaldamages2 = basedamages2 + (add1damages2 * s2addhit) + (add2damages2 * s2add2hit)
				
				if(s1s > 0){
					baseadv*= 2
				}
				if(s1add1s > 0){
					s1addadv*= 2
				}
				if(s1add2s > 0){
					s2addadv*= 2
				}

				if(s2s > 0){
					baseadvs2*= 2
				}
				if(s2add1s > 0){
					s1addadvs2*= 2
				}
				if(s2add2s > 0){
					s2addadvs2*= 2
				}

				var pvpbasedamage = parseInt(s1dam * ((maxsd + gearsd - 95 + 100) / 100) * s1m)
				var pvpadd1damage = parseInt(s1add1dam * ((maxsd + gearsd - 95 + 100) / 100) * s1m)
				var pvpadd2damage = parseInt(s1add2dam * ((maxsd + gearsd - 95 + 100) / 100) * s1m)
				var pvpbasedamages2 = parseInt(s2dam * ((maxsd + gearsd - 95 + 100) / 100) * s2m)
				var pvpadd1damages2 = parseInt(s2add1dam * ((maxsd + gearsd - 95 + 100) / 100) * s2m)
				var pvpadd2damages2 = parseInt(s2add2dam * ((maxsd + gearsd - 95 + 100) / 100) * s2m)
				if(s1t == 2){
					pvpbasedamage /= 2
					pvpadd1damage /= 2
					pvpadd2damage /= 2
				}
				if(s2t == 2){
					pvpbasedamages2 /= 2
					pvpadd1damages2 /= 2
					pvpadd2damages2 /= 2
				}
				var advdamage = baseadv + (s1addadv * s1addhit) + (s2addadv * s1add2hit)
				var advdamages2 = baseadvs2 + (s1addadvs2 * s2addhit) + (s2addadvs2 * s2add2hit)
				
				$("#s1total").text(parseInt(totaldamage).toLocaleString())
				$("#s1totaladv").text(parseInt(advdamage).toLocaleString())
				$("#s2total").text(parseInt(totaldamages2).toLocaleString())
				$("#s2adv").text(parseInt(advdamages2).toLocaleString())

				var pvptotaldamage = pvpbasedamage + (pvpadd1damage * s1addhit) + (pvpadd2damage * s1add2hit)
				var pvptotaldamages2 = pvpbasedamages2 + (pvpadd1damages2 * s2addhit) + (pvpadd2damages2* s2add2hit)

				var pvpbaseadv = pvpbasedamage
				var pvps1addadv = pvpadd1damage
				var pvps2addadv = pvpadd2damage

				var pvpbaseadvs2 = pvpbasedamages2
				var pvps1addadvs2 = pvpadd1damages2
				var pvps2addadvs2 = pvpadd2damages2
				if(s1s > 0){
					pvpbaseadv*= 2
				}
				if(s1add1s > 0){
					pvps1addadv*= 2
				}
				if(s1add2s > 0){
					pvps2addadv*= 2
				}

				if(s2s > 0){
					pvpbaseadvs2*= 2
				}
				if(s2add1s > 0){
					pvps1addadvs2*= 2
				}
				if(s2add2s > 0){
					pvps2addadvs2*= 2
				}
				var pvpadvdamage = pvpbaseadv + (pvps1addadv * s1addhit) + (pvps2addadv * s1add2hit)
				var pvpadvdamages2 = pvpbaseadvs2 + (pvps1addadvs2 * s2addhit) + (pvps2addadvs2 * s2add2hit)

				$("#s1pvp").text(parseInt(pvptotaldamage).toLocaleString())
				$("#s1pvpadv").text(parseInt(pvpadvdamage).toLocaleString())
				$("#s2pvp").text(parseInt(pvptotaldamages2).toLocaleString())
				$("#s2pvpadv").text(parseInt(pvpadvdamages2).toLocaleString())

				if(id > 60000000){
					document.getElementById("kizunadamage").style.display = "";
					document.getElementById("kizunad").style.display = "";
					document.getElementById("kizunaadd1").style.display = "";
					document.getElementById("kizunaadd1hit").style.display = "";
					document.getElementById("kizunaadd2").style.display = "";
					document.getElementById("kizunaadd2hit").style.display = "";
					document.getElementById("kizunatotal").style.display = "";
					document.getElementById("kizunaadv").style.display = "";
					document.getElementById("kizunapvp").style.display = "";
					document.getElementById("kizunapvpadv").style.display = "";

					var kizunad = charaBreakdown["kizunad"]
					var kizunas = charaBreakdown["kizunads"] / 100
					var kizunam = charaBreakdown["kizunam"]
					var kizunat = charaBreakdown["kizunadt"]
					var kizunadam = parseInt(kizunad + ((maxatk + (atk*(gearatk/100))) * kizunas))
					var kizunadamage = parseInt(kizunad * ((maxsd + gearsd + 100) / 100))
					$("#kizunad").text(parseInt(kizunadamage).toLocaleString())
					$("#kizunatotal").text(parseInt(kizunadamage).toLocaleString())
					$("#kizunapvp").text(parseInt(kizunadamage).toLocaleString())
					$("#kizunaadv").text(parseInt(kizunadamage*2).toLocaleString())
					$("#kizunapvpadv").text(parseInt(kizunadamage*2).toLocaleString())

				}
			}
	
		}

		if(charaBreakdown != ""){
			var s1d = charaBreakdown["s1d"]
			var s1s = charaBreakdown["s1ds"] / 100
			var s1m = charaBreakdown["s1m"]
			var s1t = charaBreakdown["s1dt"]
			var s1add1d = charaBreakdown["s1add1d"]
			var s1add1s = charaBreakdown["s1add1s"] / 100
			var s1addhit = charaBreakdown["s1add1h"]
			var s1add2d = charaBreakdown["s1add2d"]
			var s1add2s = charaBreakdown["s1add2s"] / 100
			var s1add2hit = charaBreakdown["s1add2h"]

			var s2d = charaBreakdown["s2d"]
			var s2s = charaBreakdown["s2ds"] / 100
			var s2m = charaBreakdown["s2m"]
			var s2t = charaBreakdown["s2dt"]
			var s2add1d = charaBreakdown["s2add1d"]
			var s2add1s = charaBreakdown["s2add1s"] / 100
			var s2addhit = charaBreakdown["s2add1h"]
			var s2add2d = charaBreakdown["s2add2d"]
			var s2add2s = charaBreakdown["s2add2s"] / 100
			var s2add2hit = charaBreakdown["s2add2h"]

			var s1dam = parseInt(s1d + (maxatk * s1s))
			var s1add1dam = parseInt(s1add1d + (maxatk * s1add1s))
			var s1add2dam = parseInt(s1add2d + (maxatk * s1add2s))
			var s2dam = parseInt(s2d + (maxatk * s2s))
			var s2add1dam = parseInt(s2add1d + (maxatk * s2add1s))
			var s2add2dam = parseInt(s2add2d + (maxatk * s2add2s))

			var basedamage = parseInt(s1dam * ((maxsd + 100) / 100) * s1m)
			var add1damage = parseInt(s1add1dam * ((maxsd + 100) / 100) * s1m)
			var add2damage = parseInt(s1add2dam * ((maxsd + 100) / 100) * s1m)
			var basedamages2 = parseInt(s2dam * ((maxsd + 100) / 100) * s2m)
			var add1damages2 = parseInt(s2add1dam * ((maxsd + 100) / 100) * s2m)
			var add2damages2 = parseInt(s2add2dam * ((maxsd + 100) / 100) * s2m)



			if(id > 60000000){
				document.getElementById("kizunadamage").style.display = "";
				document.getElementById("kizunad").style.display = "";
				document.getElementById("kizunaadd1").style.display = "";
				document.getElementById("kizunaadd1hit").style.display = "";
				document.getElementById("kizunaadd2").style.display = "";
				document.getElementById("kizunaadd2hit").style.display = "";
				document.getElementById("kizunatotal").style.display = "";
				document.getElementById("kizunaadv").style.display = "";
				document.getElementById("kizunapvp").style.display = "";
				document.getElementById("kizunapvpadv").style.display = "";

				var kizunad = charaBreakdown["kizunad"]
				var kizunas = charaBreakdown["kizunads"] / 100
				var kizunam = charaBreakdown["kizunam"]
				var kizunat = charaBreakdown["kizunadt"]
				var kizunadam = parseInt(kizunad + (maxatk * kizunas))
				var kizunadamage = parseInt(kizunad * ((maxsd + 100) / 100))
				$("#kizunad").text(parseInt(kizunadamage).toLocaleString())
				$("#kizunatotal").text(parseInt(kizunadamage).toLocaleString())
				$("#kizunapvp").text(parseInt(kizunadamage).toLocaleString())
				$("#kizunaadv").text(parseInt(kizunadamage*2).toLocaleString())
				$("#kizunapvpadv").text(parseInt(kizunadamage*2).toLocaleString())

			}

			$("#s1d").text(parseInt(basedamage).toLocaleString())
			$("#s1add1").text(parseInt(add1damage).toLocaleString())
			$("#s1add1hit").text(s1addhit)
			$("#s1add2").text(parseInt(add2damage).toLocaleString())
			$("#s1add2hit").text(s1add2hit)
			
			$("#s2d").text(parseInt(basedamages2).toLocaleString())
			$("#s2add1").text(parseInt(add1damages2).toLocaleString())
			$("#s2add1hit").text(s2addhit)
			$("#s2add2").text(parseInt(add2damages2).toLocaleString())
			$("#s2add2hit").text(s2add2hit)

			var baseadv = basedamage
			var s1addadv = add1damage
			var s2addadv = add2damage

			var baseadvs2 = basedamages2
			var s1addadvs2 = add1damages2
			var s2addadvs2 = add2damages2
			var totaldamage = basedamage + (add1damage * s1addhit) + (add2damage * s1add2hit)
			var totaldamages2 = basedamages2 + (add1damages2 * s2addhit) + (add2damages2 * s2add2hit)
			
			if(s1s > 0){
				baseadv*= 2
			}
			if(s1add1s > 0){
				s1addadv*= 2
			}
			if(s1add2s > 0){
				s2addadv*= 2
			}

			if(s2s > 0){
				baseadvs2*= 2
			}
			if(s2add1s > 0){
				s1addadvs2*= 2
			}
			if(s2add2s > 0){
				s2addadvs2*= 2
			}

			var pvpbasedamage = parseInt(s1dam * ((maxsd - 95 + 100) / 100) * s1m)
			var pvpadd1damage = parseInt(s1add1dam * ((maxsd - 95 + 100) / 100) * s1m)
			var pvpadd2damage = parseInt(s1add2dam * ((maxsd - 95 + 100) / 100) * s1m)
			var pvpbasedamages2 = parseInt(s2dam * ((maxsd - 95 + 100) / 100) * s2m)
			var pvpadd1damages2 = parseInt(s2add1dam * ((maxsd - 95 + 100) / 100) * s2m)
			var pvpadd2damages2 = parseInt(s2add2dam * ((maxsd - 95 + 100) / 100) * s2m)
			if(s1t == 2){
				pvpbasedamage /= 2
				pvpadd1damage /= 2
				pvpadd2damage /= 2
			}
			if(s2t == 2){
				pvpbasedamages2 /= 2
				pvpadd1damages2 /= 2
				pvpadd2damages2 /= 2
			}
			var advdamage = baseadv + (s1addadv * s1addhit) + (s2addadv * s1add2hit)
			var advdamages2 = baseadvs2 + (s1addadvs2 * s2addhit) + (s2addadvs2 * s2add2hit)
			
			$("#s1total").text(parseInt(totaldamage).toLocaleString())
			$("#s1totaladv").text(parseInt(advdamage).toLocaleString())
			$("#s2total").text(parseInt(totaldamages2).toLocaleString())
			$("#s2adv").text(parseInt(advdamages2).toLocaleString())

			var pvptotaldamage = pvpbasedamage + (pvpadd1damage * s1addhit) + (pvpadd2damage * s1add2hit)
			var pvptotaldamages2 = pvpbasedamages2 + (pvpadd1damages2 * s2addhit) + (pvpadd2damages2* s2add2hit)

			var pvpbaseadv = pvpbasedamage
			var pvps1addadv = pvpadd1damage
			var pvps2addadv = pvpadd2damage

			var pvpbaseadvs2 = pvpbasedamages2
			var pvps1addadvs2 = pvpadd1damages2
			var pvps2addadvs2 = pvpadd2damages2
			if(s1s > 0){
				pvpbaseadv*= 2
			}
			if(s1add1s > 0){
				pvps1addadv*= 2
			}
			if(s1add2s > 0){
				pvps2addadv*= 2
			}

			if(s2s > 0){
				pvpbaseadvs2*= 2
			}
			if(s2add1s > 0){
				pvps1addadvs2*= 2
			}
			if(s2add2s > 0){
				pvps2addadvs2*= 2
			}
			var pvpadvdamage = pvpbaseadv + (pvps1addadv * s1addhit) + (pvps2addadv * s1add2hit)
			var pvpadvdamages2 = pvpbaseadvs2 + (pvps1addadvs2 * s2addhit) + (pvps2addadvs2 * s2add2hit)

			$("#s1pvp").text(parseInt(pvptotaldamage).toLocaleString())
			$("#s1pvpadv").text(parseInt(pvpadvdamage).toLocaleString())
			$("#s2pvp").text(parseInt(pvptotaldamages2).toLocaleString())
			$("#s2pvpadv").text(parseInt(pvpadvdamages2).toLocaleString())

			if(legendary == 1){
				document.getElementById("ladamage").style.display = "";
				document.getElementById("s1la").style.display = "";
				document.getElementById("s2la").style.display = "";

				var doubledamage = totaldamage * 2
				var penAdd = 1500000 * ((maxsd + 100) / 100) * 5
				var doubledamages2 = totaldamages2 * 2
				var penAdds2 = 1500000 * ((maxsd + 100) / 100) * 5

				$("#s1la").text(parseInt(doubledamage + penAdd).toLocaleString())
				$("#s2la").text(parseInt(doubledamages2 + penAdds2).toLocaleString())
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

function checkEffect(gear){
	var effect1 = gear['effectIdx1']
	var effect2 = gear['effectIdx2']
	var effect3 = gear['effectIdx3']
	var effect4 = gear['effectIdx4']
	if(gear['effectIds'] != null){
		var effectArr = gear['effectIds'].split(",")
	}
	var hp = 0
	var chakra = 0
	var atk = 0
	var def = 0
	var spd = 0
	var sd = 0
	for(var i in window.key){
		if(window.key[i][0] == 'effect'){
			if(effect1 == window.key[i][1]){

				hp += window.key[i][2]
				chakra += window.key[i][3]
				atk += window.key[i][4]
				def += window.key[i][5]
				spd += window.key[i][6]
				sd += window.key[i][7]
			}
			if(effect2 == window.key[i][1]){
				hp += window.key[i][2]
				chakra += window.key[i][3]
				atk += window.key[i][4]
				def += window.key[i][5]
				spd += window.key[i][6]
				sd += window.key[i][7]
			}
			if(effect3 == window.key[i][1]){
				hp += window.key[i][2]
				chakra += window.key[i][3]
				atk += window.key[i][4]
				def += window.key[i][5]
				spd += window.key[i][6]
				sd += window.key[i][7]
			}
			if(effect4 == window.key[i][1]){
				hp += window.key[i][2]
				chakra += window.key[i][3]
				atk += window.key[i][4]
				def += window.key[i][5]
				spd += window.key[i][6]
				sd += window.key[i][7]
			}
			for(var x in effectArr){
				if(effectArr[x] != effect1 && effectArr[x] != effect2 && effectArr[x] != effect3 && effectArr[x] != effect4){
					if(effectArr[x] == window.key[i][1]){
						hp += window.key[i][2]
						chakra += window.key[i][3]
						atk += window.key[i][4]
						def += window.key[i][5]
						spd += window.key[i][6]
						sd += window.key[i][7]
					}
				}
			}
		}
	}
	var statsArr = [hp, chakra, atk, def, spd, sd]
	return statsArr
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