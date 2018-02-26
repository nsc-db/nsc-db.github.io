(function(){

	function _createCard(data){
		var model = '<tr class="clickable" data-toggle="modal" data-target="#newModal">'
					+'		<td class="text-center">' + data[0] + '</td>'
					+'		<td class="text-center"><img src="assets/img/units/icons/' + data[0] + '.png" height="60px" width="60px" /></td>'
					+'		<td class="text-left"><a href= "view/' + data[0] + '" data-toggle="modal" data-target="#newModal">' + data[1] + '</a></td>'
					+'		<td class="text-center">' + data[2] + '</td>'
					+'		<td class="text-center affiliation" affiliation="' + data[3] + '"><div style="display:none;">' + data[3] + '</div></td>'
					+'		<td class="text-center rarity" rarity="' + data[4] + '"></td>'
					+'		<td class="text-center">' + data[5] + '</td>'
					+'		<td class="text-center">' + data[6] + '</td>'
					+'		<td class="text-center">' + data[7] + '</td>'
					+'		<td class="text-center">' + data[8] + '</td>'
					+'		<td class="text-center">' + data[9] + '</td>'
					+'		<td class="text-center">' + data[13] + '</td>'
					+'</tr>';
		return model;
	}
	
	
	$(document).ready(function(){
		
		// --------------------------------------------- CARDS
		
		var content = ''; 
		
		var units = []; // << salvo o id de cards que eu criei
		for(var i in window.unit){
			var unit = window.unit[i];
			if(units.indexOf(unit[0]) == -1){ // << verifica se já criou o card pelo [ID]
				units.push(unit[0]); // << Salvo o id do card, para impedir cards repetidos de existirem
				content += _createCard(unit); // chama a função passando os dados do card
			}
		}
		console.log(i, window.unit[i]);
		
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
				// Procura pelas informações da unidade
				for(i in window.unit){
					i = window.unit[i];
					// Verifica o ID da unidade
					if(i[0]==id) {
						/*
							Se for o id que procuramos, salva o index 0 pra ser o 'five' e o index 1 para ser o 'six', para isso
							  ▼ ID do card                                                 Raridade, 0 para 'five' e um para 'six' ▼ 
							[579, "Madara Uchiha, End of the World", "Body", "None", 6, 35, 14789, 17589, 14605, 163, 16, 16, 147, 0]
							[579, "Madara Uchiha, End of the World", "Body", "None", 6, 35, 14789, 17589, 14605, 163, 16, 16, 147, 1]
									  ▲ ------------------ O que cada dessas variaveis significam? ----------------------------▲
						*/
						unit[i[i.length-1]] = i;
					}
				}
				// Crio um objeto com os dois tipos de cards
				var cards = {
					"five":{unit:unit[0],detail:window.detail[id]},
					"six":{unit:unit[1],detail:window.detail[id + "_6"]}
				}
				console.log(cards);
				_buildCardModal(id, thumb, cards);
		   }
		});
		
		
	});

	
	function _buildCardModal(id, thumb, cards){
		
		// Icon
		$('#icon-unit').attr('src', 'assets/img/units/icons/' + id + '.png');
		
		// Name
		$('#name-unit').text(cards.five.unit[1]);
		
		// Type
		$('#type-unit').text(cards.five.unit[2]);
		$('#type-unit').attr('type', cards.five.unit[2]);
		
		// Imagem pricipal (de onde pega essas imagens?)
		$('#card-art-five-star').attr('src', 'assets/img/units/' + id + '.png');
		checkImage(
			'assets/img/units/' + id + '_6.png', 
			function(){ 
				$('#card-art-six-star').attr('src', 'assets/img/units/' + id + '_6.png');
			}, 
		 	function(){ 
		 		$('#card-art-six-star').attr('src', 'assets/img/units/' + id + '.png');
		 	});
		
		
		/*
			Usamos os nome five e six para determinar o ID a ser escrito os valores
						   ▼ j				       ▼ i					▼ k
			$('#' + nome_do_detalhe + '_' + ('five'|'six')).text(valor_do_detalhe);
			
			Nota: Precisamos determinar a regra das variaves dentro de [unit] pra poder escreve-las na modal, e também a thumb e as duas imagens do card
			
		*/
		
		// Esse bloco grava as skills e abilidades nas duas abas
		
		var ix = 6;
		var iy = 7;
		for(i in cards){
			var c = cards[i];
			var damage = [];
			for(y in window.damage){
				if(window.damage[y][0] ==id){
					damage = window.damage[y];	
				}
			}
			var hp = ~~(c.unit[ix] * damage[1]);
			var atk = ~~(c.unit[ix+1] * damage[2]);
			var def = ~~(c.unit[ix+2] * damage[3]);
			var spd = ~~(c.unit[ix+3] * damage[4]);
			var eva = ~~damage[5];
			var cc = ~~(damage[6]);
			var crit = ~~(damage[7]);
			var skill = ~~(damage[8]);

			var satk = ~~(c.unit[ix+1] * damage[iy+2]);
			var sdef = ~~(c.unit[ix+2] * damage[iy+3]);
			var sspd = ~~(c.unit[ix+3] * damage[iy+4]);
			var seva = ~~damage[iy+5];
			var scc = ~~(damage[iy+6]);
			var scrit = ~~(damage[iy+7]);
			var sskill = ~~(damage[iy+8]);
			
			var s = {
				'base-hp':c.unit[ix],
				'base-atk':c.unit[ix+1],
				'base-def':c.unit[ix+2],
				'base-agility':c.unit[ix+3],
				'base-evasion':c.unit[ix+4] + "%",
				'base-criticalrate':c.unit[ix+5] + "%",
				'base-criticalpower':c.unit[ix+6] + "%",
				'ability-hp': hp,
				'ability-atk': atk,
				'ability-def': def,
				'ability-agility': spd,
				'ability-evasion': eva  + "%",
				'ability-criticalrate': cc  + "%",
				'ability-criticalpower': crit  + "%",
				'gear-hp': 0,
				'gear-atk': satk,
				'gear-def': sdef,
				'gear-agility': sspd,
				'gear-evasion': seva  + "%",
				'gear-criticalrate': scc  + "%",
				'gear-criticalpower': scrit  + "%",
				'max-hp':c.unit[ix] + hp,
				'max-atk':c.unit[ix+1] + atk + satk,
				'max-def':c.unit[ix+2] + def + sdef,
				'max-agility':c.unit[ix+3] + spd + sspd,
				'max-evasion':c.unit[ix+4] + eva + seva + "%", 
				'max-criticalrate':c.unit[ix+5] + cc + scc + "%", 
				'max-criticalpower':c.unit[ix+6] + crit + scrit + "%",
				'base-skilldamage': 0 + "%",
				'ability-skilldamage': skill + "%",
				'gear-skilldamage': sskill + "%",
				'max-skilldamage': skill + sskill + "%",
			};
			for(j in c.detail){
				var k = c.detail[j];
				$('#' + j + '-' + i).text(k);
			}
			for(j in s){
				var k = s[j];
				$('#' + j + '-' + i).text(k);
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
})();