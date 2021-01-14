$(document).ready( function () {
			var table = $('#myTable').DataTable({
				stateSave: true,
				responsive: true,
				"order": [[0, "desc"]],
				"columnDefs": [
			        {"className": "dt-left", "targets": [1]},
   			        {"className": "dt-center", "targets": "_all"}
			      ],
				columns: [
		            { 
		            	title: "Icon",												//0
		            	responsivePriority: 1

		            },
		            { 
		            	title: "Name",												//1
		            	responsivePriority: 2
		        	},
		            { title: "Type" },												//2
		            { title: "Affi" },												//3
 					{ 
		            	title: "Rarity",											//4
		            	"visible": false,
		            	"searchable": true
		            },		            
		            { title: "Cost" },												//5
		            { title: "HP" },												//6
		            { title: "ATK" },												//7
		            { title: "DEF" },												//8
		            { title: "SPD" },												//9
		            {
		            	title: "tag",												//10
		            	"visible": false,
		            	"searchable": true
		            }
		        ],
      			 responsive: true
			});

			var tagArr = [];
			var typeArr = [];
			var affiArr = [];
			var rareArr = [];
			var targetArr = [];
			var castArr = [];
			var damageArr = [];
			var natureArr = [];
			var buffArr = [];
			var debuffArr = [];
			var surviveArr = [];
			var healthArr = [];
			var specialArr = [];
			var positiveArr = [];
			var negativeArr = [];
			var godArr = [];
			var damageLimit = 0;

			 table
			 .column(0)
		     .search(0, true, false)
		     .draw();

		     //Skills
		     //Target
		     $("#filter-target").on("click", ".btn", function(e) {
				e.preventDefault();
		     	if($(this).attr('class') == 'btn btn-primary'){
					$(this).attr('class', "btn");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < targetArr.length; x++){
						if(targetArr[x] == remove){
							location = x;
						}
					}
					targetArr.splice(location, 1);
					
					var target = "";
					//Create Tags
					for(var x = 0; x < targetArr.length; x++){
						if(!target){
							target += targetArr[x];
						}
						else{
							target += "|";
							target += targetArr[x];
						}
					}
					table
				 	.columns(12)
			     	.search(target, true, false)
			     	.draw();
			     	
		     	}
		     	else{
		     		$(this).attr('class', "btn btn-primary");
		     		targetArr.push($(this).attr('id'));
					var target = "";
					//Create Tags
					for(var x = 0; x < targetArr.length; x++){
						if(!target){
							target += targetArr[x];
						}
						else{
							target += "|";
							target += targetArr[x];
						}
					}
					table
				 	.columns(12)
			     	.search(target, true, false)
			     	.draw();
				 	
		     	}
		     });

		     //Cast Speed
		      $("#filter-cast").on("click", ".btn", function(e) {
				e.preventDefault();
		     	if($(this).attr('class') == 'btn btn-primary'){
					$(this).attr('class', "btn");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < castArr.length; x++){
						if(castArr[x] == remove){
							location = x;
						}
					}
					castArr.splice(location, 1);
					
					var cast = "";
					//Create Tags
					for(var x = 0; x < castArr.length; x++){
						if(!cast){
							cast += castArr[x];
						}
						else{
							cast += "|";
							cast += castArr[x];
						}
					}
					table
				 	.columns(13)
			     	.search(cast, true, false)
			     	.draw();
			     	
		     	}
		     	else{
		     		$(this).attr('class', "btn btn-primary");
		     		castArr.push($(this).attr('id'));
					var cast = "";
					//Create Tags
					for(var x = 0; x < castArr.length; x++){
						if(!cast){
							cast += castArr[x];
						}
						else{
							cast += "|";
							cast += castArr[x];
						}
					}
					table
				 	.columns(13)
			     	.search(cast, true, false)
			     	.draw();
		     	}
		     });

		     //Damage
		      $("#filter-damage").on("click", ".btn", function(e) {
				e.preventDefault();
				if(damageLimit != 0){
					if($(this).attr('class') == 'btn btn-primary'){
						$(this).attr('class', "btn");
						damageLimit = 0;


						//Remove Filter
						var remove = $(this).attr('id');

						var location;
						for(var x = 0; x < damageArr.length; x++){
							if(damageArr[x] == remove){
								location = x;
							}
						}
						damageArr.splice(location, 1);
						
						var damage = "";
						//Create Tags
						for(var x = 0; x < damageArr.length; x++){
							if(!damage){
								damage += damageArr[x];
							}
							else{
								damage += "|";
								damage += damageArr[x];
							}
						}
						table
					 	.columns(14)
				     	.search(damage, true, false)
				     	.draw();
			     	
					}
		     	}
		     	else{
					if($(this).attr('class') == 'btn'){
			     		$(this).attr('class', "btn btn-primary");
			     		damageLimit++;

			     		damageArr.push($(this).attr('id'));
						var damage = "";
						//Create Tags
						for(var x = 0; x < damageArr.length; x++){
							if(!damage){
								damage += damageArr[x];
							}
							else{
								damage += "|";
								damage += damageArr[x];
							}
						}
						table
					 	.columns(14)
				     	.search(damage, true, false)
				     	.draw();
		     		}
		     	}
		     });

		     //Nature
		      $("#filter-nature").on("click", ".btn", function(e) {
				e.preventDefault();
		     	if($(this).attr('class') == 'btn btn-primary'){
					$(this).attr('class', "btn");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < castArr.length; x++){
						if(castArr[x] == remove){
							location = x;
						}
					}
					castArr.splice(location, 1);
					
					var cast = "";
					//Create Tags
					for(var x = 0; x < castArr.length; x++){
						if(!cast){
							cast += castArr[x];
						}
						else{
							cast += "|";
							cast += castArr[x];
						}
					}
					table
				 	.columns(15)
			     	.search(cast, true, false)
			     	.draw();
			     	
		     	}
		     	else{
		     		$(this).attr('class', "btn btn-primary");
		     		castArr.push($(this).attr('id'));
					var cast = "";
					//Create Tags
					for(var x = 0; x < castArr.length; x++){
						if(!cast){
							cast += castArr[x];
						}
						else{
							cast += "|";
							cast += castArr[x];
						}
					}
					table
				 	.columns(15)
			     	.search(cast, true, false)
			     	.draw();
		     	}
		     });

		     //Buff
		      $("#filter-buff").on("click", ".btn", function(e) {
				e.preventDefault();
		     	if($(this).attr('class') == 'btn btn-primary'){
					$(this).attr('class', "btn");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < buffArr.length; x++){
						if(buffArr[x] == remove){
							location = x;
						}
					}
					buffArr.splice(location, 1);
					
					var buff = "";
					//Create Tags
					for(var x = 0; x < buffArr.length; x++){
						if(!buff){
							buff += buffArr[x];
						}
						else{
							buff += "|";
							buff += buffArr[x];
						}
					}
					table
				 	.columns(19)
			     	.search(buff, true, false)
			     	.draw();
			     	
		     	}
		     	else{
		     		$(this).attr('class', "btn btn-primary");
		     		buffArr.push($(this).attr('id'));
					var buff = "";
					//Create Tags
					for(var x = 0; x < buffArr.length; x++){
						if(!buff){
							buff += buffArr[x];
						}
						else{
							buff += "|";
							buff += buffArr[x];
						}
					}
					table
				 	.columns(19)
			     	.search(buff, true, false)
			     	.draw();
		     	}
		     }); 

		      //Debuff
		      $("#filter-debuff").on("click", ".btn", function(e) {
				e.preventDefault();
		     	if($(this).attr('class') == 'btn btn-primary'){
					$(this).attr('class', "btn");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < debuffArr.length; x++){
						if(debuffArr[x] == remove){
							location = x;
						}
					}
					debuffArr.splice(location, 1);
					
					var debuff = "";
					//Create Tags
					for(var x = 0; x < debuffArr.length; x++){
						if(!debuff){
							debuff += debuffArr[x];
						}
						else{
							debuff += "|";
							debuff += debuffArr[x];
						}
					}
					table
				 	.columns(20)
			     	.search(debuff, true, false)
			     	.draw();
			     	
		     	}
		     	else{
		     		$(this).attr('class', "btn btn-primary");
		     		debuffArr.push($(this).attr('id'));
					var debuff = "";
					//Create Tags
					for(var x = 0; x < debuffArr.length; x++){
						if(!debuff){
							debuff += debuffArr[x];
						}
						else{
							debuff += "|";
							debuff += debuffArr[x];
						}
					}
					table
				 	.columns(20)
			     	.search(debuff, true, false)
			     	.draw();
		     	}
		     }); 


		     //Survival
		      $("#filter-survival").on("click", ".btn", function(e) {
				e.preventDefault();
		     	if($(this).attr('class') == 'btn btn-primary'){
					$(this).attr('class', "btn");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < surviveArr.length; x++){
						if(surviveArr[x] == remove){
							location = x;
						}
					}
					surviveArr.splice(location, 1);
					
					var survive = "";
					//Create Tags
					for(var x = 0; x < surviveArr.length; x++){
						if(!survive){
							survive += surviveArr[x];
						}
						else{
							survive += "|";
							survive += surviveArr[x];
						}
					}
					table
				 	.columns(21)
			     	.search(survive, true, false)
			     	.draw();
			     	
		     	}
		     	else{
		     		$(this).attr('class', "btn btn-primary");
		     		surviveArr.push($(this).attr('id'));
					var survive = "";
					//Create Tags
					for(var x = 0; x < surviveArr.length; x++){
						if(!survive){
							survive += surviveArr[x];
						}
						else{
							survive += "|";
							survive += surviveArr[x];
						}
					}
					table
				 	.columns(21)
			     	.search(survive, true, true)
			     	.draw();
		     	}
		     }); 


		      //health
		      $("#filter-health").on("click", ".btn", function(e) {
				e.preventDefault();
		     	if($(this).attr('class') == 'btn btn-primary'){
					$(this).attr('class', "btn");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < healthArr.length; x++){
						if(healthArr[x] == remove){
							location = x;
						}
					}
					healthArr.splice(location, 1);
					
					var health = "";
					//Create Tags
					for(var x = 0; x < healthArr.length; x++){
						if(!health){
							health += healthArr[x];
						}
						else{
							health += "|";
							health += healthArr[x];
						}
					}
					table
				 	.columns(22)
			     	.search(health, true, false)
			     	.draw();
			     	
		     	}
		     	else{
		     		$(this).attr('class', "btn btn-primary");
		     		healthArr.push($(this).attr('id'));
					var health = "";
					//Create Tags
					for(var x = 0; x < healthArr.length; x++){
						if(!health){
							health += healthArr[x];
						}
						else{
							health += "|";
							health += healthArr[x];
						}
					}
					table
				 	.columns(22)
			     	.search(health, true, false)
			     	.draw();
		     	}
		     }); 

		     //special
		      $("#filter-special").on("click", ".btn", function(e) {
				e.preventDefault();
		     	if($(this).attr('class') == 'btn btn-primary'){
					$(this).attr('class', "btn");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < specialArr.length; x++){
						if(specialArr[x] == remove){
							location = x;
						}
					}
					specialArr.splice(location, 1);
					
					var special = "";
					//Create Tags
					for(var x = 0; x < specialArr.length; x++){
						if(!special){
							special += specialArr[x];
						}
						else{
							special += "|";
							special += specialArr[x];
						}
					}
					table
				 	.columns(23)
			     	.search(special, true, false)
			     	.draw();
			     	
		     	}
		     	else{
		     		$(this).attr('class', "btn btn-primary");
		     		specialArr.push($(this).attr('id'));
					var special = "";
					//Create Tags
					for(var x = 0; x < specialArr.length; x++){
						if(!special){
							special += specialArr[x];
						}
						else{
							special += "|";
							special += specialArr[x];
						}
					}
					table
				 	.columns(23)
			     	.search(special, true, false)
			     	.draw();
		     	}
		     }); 

		      //positive
		      $("#filter-positivestate").on("click", ".btn", function(e) {
				e.preventDefault();
		     	if($(this).attr('class') == 'btn btn-primary'){
					$(this).attr('class', "btn");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < positiveArr.length; x++){
						if(positiveArr[x] == remove){
							location = x;
						}
					}
					positiveArr.splice(location, 1);
					
					var positive = "";
					//Create Tags
					for(var x = 0; x < positiveArr.length; x++){
						if(!positive){
							positive += positiveArr[x];
						}
						else{
							positive += "|";
							positive += positiveArr[x];
						}
					}
					table
				 	.columns(24)
			     	.search(positive, true, false)
			     	.draw();
			     	
		     	}
		     	else{
		     		$(this).attr('class', "btn btn-primary");
		     		positiveArr.push($(this).attr('id'));
					var positive = "";
					//Create Tags
					for(var x = 0; x < positiveArr.length; x++){
						if(!positive){
							positive += positiveArr[x];
						}
						else{
							positive += "|";
							positive += positiveArr[x];
						}
					}
					table
				 	.columns(24)
			     	.search(positive, true, false)
			     	.draw();
		     	}
		     }); 

		      //negative
		      $("#filter-negativestate").on("click", ".btn", function(e) {
				e.preventDefault();
		     	if($(this).attr('class') == 'btn btn-primary'){
					$(this).attr('class', "btn");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < negativeArr.length; x++){
						if(negativeArr[x] == remove){
							location = x;
						}
					}
					negativeArr.splice(location, 1);
					
					var negative = "";
					//Create Tags
					for(var x = 0; x < negativeArr.length; x++){
						if(!negative){
							negative += negativeArr[x];
						}
						else{
							negative += "|";
							negative += negativeArr[x];
						}
					}
					table
				 	.columns(25)
			     	.search(negative, true, false)
			     	.draw();
			     	
		     	}
		     	else{
		     		$(this).attr('class', "btn btn-primary");
		     		negativeArr.push($(this).attr('id'));
					var negative = "";
					//Create Tags
					for(var x = 0; x < negativeArr.length; x++){
						if(!negative){
							negative += negativeArr[x];
						}
						else{
							negative += "|";
							negative += negativeArr[x];
						}
					}
					table
				 	.columns(25)
			     	.search(negative, true, false)
			     	.draw();
		     	}
		     }); 

		      //god
		      $("#filter-godstate").on("click", ".btn", function(e) {
				e.preventDefault();
		     	if($(this).attr('class') == 'btn btn-primary'){
					$(this).attr('class', "btn");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < godArr.length; x++){
						if(godArr[x] == remove){
							location = x;
						}
					}
					godArr.splice(location, 1);
					
					var god = "";
					//Create Tags
					for(var x = 0; x < godArr.length; x++){
						if(!god){
							god += godArr[x];
						}
						else{
							god += "|";
							god += godArr[x];
						}
					}
					table
				 	.columns(26)
			     	.search(god, true, false)
			     	.draw();
			     	
		     	}
		     	else{
		     		$(this).attr('class', "btn btn-primary");
		     		godArr.push($(this).attr('id'));
					var god = "";
					//Create Tags
					for(var x = 0; x < godArr.length; x++){
						if(!god){
							god += godArr[x];
						}
						else{
							god += "|";
							god += godArr[x];
						}
					}
					table
				 	.columns(26)
			     	.search(god, true, false)
			     	.draw();
		     	}
		     }); 


		     //General
			 //Attribute
		  	 $("#filter-attribute").on("click", ".list-group-item", function(e) {
				e.preventDefault();
				if($(this).attr('class') == 'list-group-item active'){
					$(this).attr('class', "list-group-item");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < typeArr.length; x++){
						if(typeArr[x] == remove){
							location = x;
						}
					}
					typeArr.splice(location, 1);
					
					var type = "";
					//Create Tags
					for(var x = 0; x < typeArr.length; x++){
						if(!type){
							type += typeArr[x];
						}
						else{
							type += "|";
							type += typeArr[x];
						}
					}
					table
				 	.column(2)
			     	.search(type, true, false)
			     	.draw();
				}

				else{
					$(this).attr('class', "list-group-item active");
					typeArr.push($(this).attr('id'));

					var type = "";
					//Create Tags
					for(var x = 0; x < typeArr.length; x++){
						if(!type){
							type += typeArr[x];
						}
						else{
							type += "|";
							type += typeArr[x];
						}
					}
					table
				 	.column(2)
			     	.search(type, true, false)
			     	.draw();
		   	   }
			 });

		  	  $("#filter-rare").on("click", ".list-group-item", function(e) {
				e.preventDefault();
				if($(this).attr('class') == 'list-group-item active'){
					$(this).attr('class', "list-group-item");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < rareArr.length; x++){
						if(rareArr[x] == remove){
							location = x;
						}
					}
					rareArr.splice(location, 1);
					
					var rare = "";
					//Create Tags
					for(var x = 0; x < rareArr.length; x++){
						if(!rare){
							rare += rareArr[x];
						}
						else{
							rare += "|";
							rare += rareArr[x];
						}
					}
					table
				 	.column(4)
			     	.search(rare, true, false)
			     	.draw();
				}

				else{
					$(this).attr('class', "list-group-item active");
					rareArr.push($(this).attr('id'));

					var rare = "";
					//Create Tags
					for(var x = 0; x < rareArr.length; x++){
						if(!rare){
							rare += rareArr[x];
						}
						else{
							rare += "|";
							rare += rareArr[x];
						}
					}
					table
				 	.column(4)
			     	.search(rare, true, false)
			     	.draw();
		   	   }
			 });

		  	 //Tags
		  	 $("#filter-tags").on("click", ".list-group-item", function(e) {
				e.preventDefault();
				if($(this).attr('id') == "voiced"){
					if($(this).attr('class') == 'list-group-item active'){
					$(this).attr('class', "list-group-item");	
					table
				 	.column(16)
			     	.search("", true, false)
			     	.draw();
				}
				else{
					$(this).attr('class', "list-group-item active");
					
					table
				 	.column(16)
			     	.search(1, true, false)
			     	.draw();
		   	   }
				}
				else if($(this).attr('class') == 'list-group-item active'){
					$(this).attr('class', "list-group-item");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < tagArr.length; x++){
						if(tagArr[x] == remove){
							location = x;
						}
					}
					tagArr.splice(location, 1);
					
					var tag = "";
					//Create Tags
					for(var x = 0; x < tagArr.length; x++){
						if(!tag){
							tag += tagArr[x];
						}
						else{
							tag += "|";
							tag += tagArr[x];
						}
					}
					table
				 	.column(11)
			     	.search(tag, true, false)
			     	.draw();
				}
				else{
					$(this).attr('class', "list-group-item active");
					tagArr.push($(this).attr('id'));
					var tag = "";
					//Create Tags
					for(var x = 0; x < tagArr.length; x++){
						if(!tag){
							tag += tagArr[x];
						}
						else{
							tag += "|";
							tag += tagArr[x];
						}
					}
					table
				 	.column(11)
			     	.search(tag, true, false)
			     	.draw();
		   	   }
			 });

		  	 //Affi
		  	 $("#filter-affi").on("click", ".list-group-item", function(e) {
				e.preventDefault();
				if($(this).attr('class') == 'list-group-item active'){
					$(this).attr('class', "list-group-item");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < affiArr.length; x++){
						if(affiArr[x] == remove){
							location = x;
						}
					}
					affiArr.splice(location, 1);
					
					var affi = "";
					//Create Tags
					for(var x = 0; x < affiArr.length; x++){
						if(!affi){
							affi += affiArr[x];
						}
						else{
							affi += "|";
							affi += affiArr[x];
						}
					}
					table
				 	.column(3)
			     	.search(affi, true, false)
			     	.draw();
				}
				else{
					$(this).attr('class', "list-group-item active");
					affiArr.push($(this).attr('id'));
					var affi = "";
					//Create Tags
					for(var x = 0; x < affiArr.length; x++){
						if(!affi){
							affi += affiArr[x];
						}
						else{
							affi += "|";
							affi += affiArr[x];
						}
					}
					table
				 	.column(3)
			     	.search(affi, true, false)
			     	.draw();
		   	   }
			 });

		  	 //Reset
		  	$("#reset-filter").on("click", function(e) {
				e.preventDefault();
				$("#1").attr('class', "list-group-item");
				$("#2").attr('class', "list-group-item");
				$("#3").attr('class', "list-group-item");
				$("#4").attr('class', "list-group-item");
				$("#5").attr('class', "list-group-item");
				$("#6").attr('class', "list-group-item");
				$("#Heart").attr('class', "list-group-item");
				$("#Technique").attr('class', "list-group-item");
				$("#Body").attr('class', "list-group-item");
				$("#Intellect").attr('class', "list-group-item");
				$("#Courage").attr('class', "list-group-item");
				$("#ex-6").attr('class', "list-group-item");
				$("#ex-5").attr('class', "list-group-item");
				$("#pvp-reward").attr('class', "list-group-item");
				$("#kami-destroyer").attr('class', "list-group-item");
				$("#god").attr('class', "list-group-item");
				$("#killers").attr('class', "list-group-item");
				$("#limited-6").attr('class', "list-group-item");
				$("#limited").attr('class', "list-group-item");
				$("#event").attr('class', "list-group-item");
				$("#slayer").attr('class', "list-group-item");
				$("#special").attr('class', "list-group-item");
				$("#gacha").attr('class', "list-group-item");
				$("#fp").attr('class', "list-group-item");
				$("#voiced").attr('class', "list-group-item");
				$("#Konoha").attr('class', "list-group-item");
				$("#“Akatsuki”").attr('class', "list-group-item");
				$("#None").attr('class', "list-group-item");
				$("#Suna").attr('class', "list-group-item");
				$("#Kiri").attr('class', "list-group-item");
				$("#“Taka”").attr('class', "list-group-item");
				$("#“Hebi”").attr('class', "list-group-item");
				$("#Iwa").attr('class', "list-group-item");
				$("#Kumo").attr('class', "list-group-item");
				$("#Ame").attr('class', "list-group-item");
				$("#Oto").attr('class', "list-group-item");
				$("#Taki").attr('class', "list-group-item");
				$("#Iron").attr('class', "list-group-item");

				for(var x = 0; x <= 26; x++){
					table
				 	.column(x)
			     	.search("", true, false)
			     	.draw();	
		     	}
			 });
		});
