(function(){

	function _createCard(data){
		var model = '<tr class="clickable" data-toggle="modal" data-target="#newModal">'
					+'		<td class="text-center">' + data[0] + '</td>'
					+'		<td class="text-center"><img src="assets/img/units/icons/' + data[0] + '.png" height="60px" width="60px" /></td>'
					+'		<td class="text-left"><a href= "view/' + data[0] + '" data-toggle="modal" data-target="#newModal">' + data[1] + '</a></td>'
					+'		<td class="text-center affiliation" affiliation="' + data[3] + '"><div style="display:none;">' + data[3] + '</div></td>'
					+'		<td class="text-center rarity" rarity="' + data[4] + '"></td>'
					+'		<td class="text-center">' + data[5] + '</td>'
					+'		<td class="text-center">' + data[6] + '</td>'
					+'		<td class="text-center">' + data[7] + '</td>'
					+'		<td class="text-center">' + data[8] + '</td>'
					+'		<td class="text-center">' + data[9] + '</td>'
					+'		<td class="text-center">' + data[14] + '</td>'
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
		$('#card-art-six-star').attr('src', 'assets/img/units/' + id + '_6.png');
		
		
		/*
			Usamos os nome five e six para determinar o ID a ser escrito os valores
						   ▼ j				       ▼ i					▼ k
			$('#' + nome_do_detalhe + '_' + ('five'|'six')).text(valor_do_detalhe);
			
			Nota: Precisamos determinar a regra das variaves dentro de [unit] pra poder escreve-las na modal, e também a thumb e as duas imagens do card
			
		*/
		
		// Esse bloco grava as skills e abilidades nas duas abas
		
		var ix = 6;
		
		for(i in cards){
			var c = cards[i];
			var s = {
				'base-hp':c.unit[ix],
				'base-atk':c.unit[ix+1],
				'base-def':c.unit[ix+2],
				'base-agility':c.unit[ix+3],
				'base-evasion':c.unit[ix+4],
				'base-criticalrate':c.unit[ix+5],
				'base-criticalpower':c.unit[ix+6],
				'ability-hp':c.unit[ix],
				'ability-atk':c.unit[ix+1],
				'ability-def':c.unit[ix+2],
				'ability-agility':c.unit[ix+3],
				'ability-evasion':c.unit[ix+4],
				'ability-criticalrate':c.unit[ix+5],
				'ability-criticalpower':c.unit[ix+6],
				'gear-hp':c.unit[ix],
				'gear-atk':c.unit[ix+1],
				'gear-def':c.unit[ix+2],
				'gear-agility':c.unit[ix+3],
				'gear-evasion':c.unit[ix+4],
				'gear-criticalrate':c.unit[ix+5],
				'gear-criticalpower':c.unit[ix+6],
				'max-hp':c.unit[ix],
				'max-atk':c.unit[ix+1],
				'max-def':c.unit[ix+2],
				'max-agility':c.unit[ix+3],
				'max-evasion':c.unit[ix+4],
				'max-criticalrate':c.unit[ix+5],
				'max-criticalpower':c.unit[ix+6],
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
	
})();