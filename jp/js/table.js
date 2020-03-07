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
		            	title: "Icon",
		            	responsivePriority: 1

		            },
		            { 
		            	title: "名前",
		            	responsivePriority: 2
		        	},
		            { title: "属性" },
		            { title: "所属" },
		            { 
		            	title: "レア",
		            	"visible": false,
		            	"searchable": true
		            },
		            { title: "コスト" },
		            { title: "HP" },
		            { title: "攻" },
		            { title: "防" },
		            { title: "早" },
		            {
		            	title: "tag",
		            	"visible": false,
		            	"searchable": true
		            },
		            {
		            	title: "target",
		            	"visible": false,
		            	"searchable": true
		            },
		            {
		            	title: "cast",
		            	"visible": false,
		            	"searchable": true
		            },
		            {
		            	title: "damage",
		            	"visible": false,
		            	"searchable": true
		            },
		            {
		            	title: "nature",
		            	"visible": false,
		            	"searchable": true
		            },
		            {
		            	title: "voiced",
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
				 	.column(10)
			     	.search("", true, false)
			     	.draw();
				}
				else{
					$(this).attr('class', "list-group-item active");
					
					table
				 	.column(10)
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
				 	.column(10)
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
				 	.column(10)
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
				$("#心").attr('class', "list-group-item");
				$("#技").attr('class', "list-group-item");
				$("#体").attr('class', "list-group-item");
				$("#知").attr('class', "list-group-item");
				$("#勇").attr('class', "list-group-item");
				$("#ex-6").attr('class', "list-group-item");
				$("#ex").attr('class', "list-group-item");
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
				$("#木ノ葉").attr('class', "list-group-item");
				$("#“暁”").attr('class', "list-group-item");
				$("#その他").attr('class', "list-group-item");
				$("#砂").attr('class', "list-group-item");
				$("#霧").attr('class', "list-group-item");
				$("#“鷹”").attr('class', "list-group-item");
				$("#“蛇”").attr('class', "list-group-item");
				$("#岩").attr('class', "list-group-item");
				$("#雲").attr('class', "list-group-item");
				$("#雨").attr('class', "list-group-item");
				$("#音").attr('class', "list-group-item");
				$("#滝").attr('class', "list-group-item");
				$("#鉄").attr('class', "list-group-item");
				
				for(var x = 0; x <= 18; x++){
					table
				 	.column(x)
			     	.search("", true, false)
			     	.draw();	
		     	}
			 });
		});
		
		var slider = document.getElementById("chakraCost");
		var output = document.getElementById("cost");
		output.innerHTML = slider.value;

		slider.oninput = function(){
			  output.innerHTML = this.value;
		}