$(document).ready(function(){
	var begin = 0;
	var sbegin = 0;
	var pts =  '<h1 class="story-title">PTS</h1>';
	var shippuden = '<h1 class="story-title">Shippuden</h1>';
	for(var x in window.story){
		if((window.story[x]["worldStageId"] - 11000) >= 0){
			if(window.story[x]['priority'] == 1){
				if(sbegin == 0){
					var chapter = window.story[x]['worldStageId'] - 10999;
					shippuden += '<h2 class="chapter">Chapter ' + chapter + '</h2>'
						   + '<table class="story-table table">'
						   + 	'<col width="100">'
  						   + 	'<col width="300">'
  						   + 	'<col width="300">'
						   +	'<tr>'
						   +		'<th>Stage</th>'
						   +		'<th>Normal</th>'
						   +		'<th>Hard</th>'
						   +	'</tr>'
						   +	'<tr>'
						   +		'<td>' + chapter + '-' + window.story[x]['priority'] + '<br/>' + window.story[x]['phaseName'] + '</td>'
						   +		'<td>'
						   +			'<li>' + findReq1(window.story[x]) + '</li>'
						   +			'<li>' + findReq2(window.story[x]) + '</li>'
						   +			'<li>' + findReq3(window.story[x]) + '</li>'
						   +		'</td>'
						   +		'<td>'
						   +			'<li>' + findReq1(window.hard[x]) + '</li>'
						   +			'<li>' + findReq2(window.hard[x]) + '</li>'
						   +			'<li>' + findReq3(window.hard[x]) + '</li>'
						   +		'</td>';


					sbegin++;
				}
				else{
					var chapter = window.story[x]['worldStageId'] - 10999;
					shippuden += '</table>'
						   + '<div class="col-md-12">'
						   + 	'<hr>'
						   + '</div>'
						   + '<h2 class="chapter">Chapter ' + chapter + '</h2>'
						   + '<table class="story-table table">'
						   + 	'<col width="100">'
  						   + 	'<col width="300">'
  						   + 	'<col width="300">'
						   +	'<tr>'
						   +		'<th>Stage</th>'
						   +		'<th>Normal</th>'
						   +		'<th>Hard</th>'
						   +	'</tr>'
						   +	'<tr>'
						   +		'<td>' + chapter + '-' + window.story[x]['priority'] + '<br/>' + window.story[x]['phaseName'] + '</td>'
						   +		'<td>'
						   +			'<li>' + findReq1(window.story[x]) + '</li>'
						   +			'<li>' + findReq2(window.story[x]) + '</li>'
						   +			'<li>' + findReq3(window.story[x]) + '</li>'
						   +		'</td>'
						   +		'<td>'
						   +			'<li>' + findReq1(window.hard[x]) + '</li>'
						   +			'<li>' + findReq2(window.hard[x]) + '</li>'
						   +			'<li>' + findReq3(window.hard[x]) + '</li>'
						   +		'</td>';
				}
			}
			else{
				shippuden += '<tr>'
					   + '<td>' + chapter + '-' + window.story[x]['priority'] + '<br/>' + window.story[x]['phaseName'] + '</td>'
					   +		'<td>'
					   +			'<li>' + findReq1(window.story[x]) + '</li>'
					   +			'<li>' + findReq2(window.story[x]) + '</li>'
					   +			'<li>' + findReq3(window.story[x]) + '</li>'
					   +		'</td>'
					   +		'<td>'
					   +			'<li>' + findReq1(window.hard[x]) + '</li>'
					   +			'<li>' + findReq2(window.hard[x]) + '</li>'
					   +			'<li>' + findReq3(window.hard[x]) + '</li>'
					   +		'</td>';
						   
			}		
		}

		else{
			if(window.story[x]['priority'] == 1){
				if(begin == 0){
					var chapter = window.story[x]['worldStageId'] - 10000;
					pts += '<h2 class="chapter">Chapter ' + chapter + '</h2>'
						   + '<table class="story-table table">'
						   + 	'<col width="100">'
  						   + 	'<col width="300">'
  						   + 	'<col width="300">'
						   +	'<tr>'
						   +		'<th>Stage</th>'
						   +		'<th>Normal</th>'
						   +		'<th>Hard</th>'
						   +	'</tr>'
						   +	'<tr>'
						   +		'<td>' + chapter + '-' + window.story[x]['priority'] + '<br/>' + window.story[x]['phaseName'] + '</td>'
						   +		'<td>'
						   +			'<li>' + findReq1(window.story[x]) + '</li>'
						   +			'<li>' + findReq2(window.story[x]) + '</li>'
						   +			'<li>' + findReq3(window.story[x]) + '</li>'
						   +		'</td>'
						   +		'<td>'
						   +			'<li>' + findReq1(window.hard[x]) + '</li>'
						   +			'<li>' + findReq2(window.hard[x]) + '</li>'
						   +			'<li>' + findReq3(window.hard[x]) + '</li>'
						   +		'</td>';

					begin++;
				}
				else{
					var chapter = window.story[x]['worldStageId'] - 10000;
					pts += '</table>'
						   + '<div class="col-md-12">'
						   + 	'<hr>'
						   + '</div>'
						   + '<h2 class="chapter">Chapter ' + chapter + '</h2>'
						   + '<table class="story-table table">'
						   + 	'<col width="100">'
  						   + 	'<col width="300">'
  						   + 	'<col width="300">'
						   +	'<tr>'
						   +		'<th>Stage</th>'
						   +		'<th>Normal</th>'
						   +		'<th>Hard</th>'
						   +	'</tr>'
						   +	'<tr>'
						   +		'<td>' + chapter + '-' + window.story[x]['priority'] + '<br/>' + window.story[x]['phaseName'] + '</td>'
						   +		'<td>'
						   +			'<li>' + findReq1(window.story[x]) + '</li>'
						   +			'<li>' + findReq2(window.story[x]) + '</li>'
						   +			'<li>' + findReq3(window.story[x]) + '</li>'
						   +		'</td>'
						   +		'<td>'
						   +			'<li>' + findReq1(window.hard[x]) + '</li>'
						   +			'<li>' + findReq2(window.hard[x]) + '</li>'
						   +			'<li>' + findReq3(window.hard[x]) + '</li>'
						   +		'</td>';
				}
			}
			else{
				pts += '<tr>'
					   + '<td>' + chapter + '-' + window.story[x]['priority'] + '<br/>' + window.story[x]['phaseName'] + '</td>'
					   +		'<td>'
					   +			'<li>' + findReq1(window.story[x]) + '</li>'
					   +			'<li>' + findReq2(window.story[x]) + '</li>'
					   +			'<li>' + findReq3(window.story[x]) + '</li>'
					   +		'</td>'
					   +		'<td>'
					   +			'<li>' + findReq1(window.hard[x]) + '</li>'
					   +			'<li>' + findReq2(window.hard[x]) + '</li>'
					   +			'<li>' + findReq3(window.hard[x]) + '</li>'
					   +		'</td>';
						   
			}		
		}
	}
	document.getElementById("pts").innerHTML = pts;
	document.getElementById("shippuden").innerHTML = shippuden;
});

function findReq1(mission){
	for(var x in window.req){
		if(mission['achievement1'] == window.req[x]['worldMissionId']){
			return window.req[x]['description'];
		}
	}
}

function findReq2(mission){
	for(var x in window.req){
		if(mission['achievement2'] == window.req[x]['worldMissionId']){
			return window.req[x]['description'];
		}
	}
}

function findReq3(mission){
	for(var x in window.req){
		if(mission['achievement3'] == window.req[x]['worldMissionId']){
			return window.req[x]['description'];
		}
	}
}

function showPTS(){
	var pts = document.getElementById("pts");
	var shippuden = document.getElementById("shippuden");
	
	if (pts.style.display === "none") {
        pts.style.display = "block";
        shippuden.style.display = "none";
    } 
    else{
    	pts.style.display = "none";
    }
}

function showShippuden(){
	var pts = document.getElementById("pts");
	var shippuden = document.getElementById("shippuden");
	
	if (shippuden.style.display === "none") {
        shippuden.style.display = "block";
        pts.style.display = "none";
    } 
    else{
    	shippuden.style.display = "none";
    }
}
