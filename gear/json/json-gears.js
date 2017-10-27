(function(){
	
	function _createGears(data){
		var model = '<tr">'
					+'		<td class="text-center"><img src="icons/' + data[0] + '.png" height="60px" width="60px" /></td>'
					+'		<td>' 	+ data[1] + '</td>'
					+'		<td class="text-center">' 	+ data[2] + '</td>'
					+'		<td>' 	+ data[3] + '</td>'
					+'		<td>' 	+ data[4] + '</td>'
					+'		<td>' 	+ data[5] + '</td>'
					+'</tr>';
		return model;
	}
	
	
	$(document).ready(function(){
		
		// --------------------------------------------- CARDS
		
		var content = ''; 
		
		var gears = []; // << salvo o id de cards que eu criei
		for(var i in window.gear){
			var gear = window.gear[i];
			if(	gears.indexOf(gear[0]) == -1){ // << verifica se já criou o card pelo [ID]
				gears.push(gear[0]); // << Salvo o id do card, para impedir cards repetidos de existirem
				content += _createGears(gear); // chama a função passando os dados do card
			}
		}
		console.log(i, window.gear[i]);
		$('.gears').html(content);	
		
	});
	
})();