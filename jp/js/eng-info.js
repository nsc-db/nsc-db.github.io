var unitId
var s1
var s1n
var s1ntr
var s1c
var s1cs

var s2
var s2n
var s2ntr
var s2c
var s2cs

var a1
var a1n
var a2
var a2n
var a2
var a2n

var charaName 
var subtext
var leader

var kn
var ks
var kntr
var kcs
var kc
var found = 0
function engInfo(unitId, charaName, subtext, lead, s1n, s1, s1ntr, s1cs, s1c, s2n, s2, s2ntr, s2cs, s2c, a1n, a1, a2n, a2, a3, a3n, kn, ks, kntr, kcs, kc){
	if(document.getElementById("eng-button").innerHTML == 'ENG'){
		for(var x in window.detail){
			if(unitId == window.detail[x]['id']){
				found = 1
				document.getElementById("eng-button").innerHTML = 'JP'	
				$('#name-unit').text(window.detail[x]['name'] + ', ' + window.detail[x]['subtext']);
				$('#leadname-five').text(window.detail[x]['subtext'])
				$('#leadname-six').text(window.detail[x]['subtext'])
				$('#lead-five').text(window.detail[x]['lead'])
				$('#lead-six').text(window.detail[x]['lead'])

				$('#skill1name-five').text( window.detail[x]['s1n']);
				$('#skill1-five').text( window.detail[x]['s1']);
				$('#skill1type-five').text( window.detail[x]['s1ntr']);
				$('#skill1speed-five').text( window.detail[x]['s1cs']);
				$('#skill1cost-five').text( window.detail[x]['s1c']);
				$('#skill1name-six').text( window.detail[x]['s1n']);
				$('#skill1-six').text( window.detail[x]['s1']);
				$('#skill1type-six').text( window.detail[x]['s1ntr']);
				$('#skill1speed-six').text( window.detail[x]['s1cs']);
				$('#skill1cost-six').text( window.detail[x]['s1c']);

				$('#skill2name-five').text( window.detail[x]['s2n']);
				$('#skill2-five').text( window.detail[x]['s2']);
				$('#skill2type-five').text( window.detail[x]['s2ntr']);
				$('#skill2speed-five').text( window.detail[x]['s2cs']);
				$('#skill2cost-five').text( window.detail[x]['s2c']);
				$('#skill2name-six').text( window.detail[x]['s2n']);
				$('#skill2-six').text( window.detail[x]['s2']);
				$('#skill2type-six').text( window.detail[x]['s2ntr']);
				$('#skill2speed-six').text( window.detail[x]['s2cs']);
				$('#skill2cost-six').text( window.detail[x]['s2c']);

				$('#ability1name-five').text(window.detail[x]['a1n']);
				$('#ability1-five').text(window.detail[x]['a1']);
				$('#ability1name-six').text(window.detail[x]['a1n']);
				$('#ability1-six').text(window.detail[x]['a1']);

				$('#ability2name-five').text(window.detail[x]['a2n']);
				$('#ability2-five').text(window.detail[x]['a2']);
				$('#ability2name-six').text(window.detail[x]['a2n']);
				$('#ability2-six').text(window.detail[x]['a2']);

				$('#ability3name-five').text(window.detail[x]['a3n']);
				$('#ability3-five').text(window.detail[x]['a3']);
				$('#ability3name-six').text(window.detail[x]['a3n']);
				$('#ability3-six').text(window.detail[x]['a3']);
				}
		}
		if(found == 0){
			alert("Not translated")
		}
		if(unitId == 60061201 || unitId == 60061202){
			$('#kizunaname-five').text(window.engkizuna[1]['name']);
			$('#kizunaname-six').text(window.engkizuna[1]['name']);
			$('#kizunatype-five').text(window.engkizuna[1]['nature']);
			$('#kizunatype-six').text(window.engkizuna[1]['nature']);
			$('#kizunaspeed-five').text(window.engkizuna[1]['cs']);
			$('#kizunaspeed-six').text(window.engkizuna[1]['cs']);
			$('#kizunacost-five').text(window.engkizuna[1]['cost']);
			$('#kizunacost-six').text(window.engkizuna[1]['cost']);
			$('#kizunadesc-five').text(window.engkizuna[1]['description']);
			$('#kizunadesc-six').text(window.engkizuna[1]['description']);
		}
		else if(unitId == 60060701 || unitId == 60060702){
			$('#kizunaname-five').text(window.engkizuna[0]['name']);
			$('#kizunaname-six').text(window.engkizuna[0]['name']);
			$('#kizunatype-five').text(window.engkizuna[0]['nature']);
			$('#kizunatype-six').text(window.engkizuna[0]['nature']);
			$('#kizunaspeed-five').text(window.engkizuna[0]['cs']);
			$('#kizunaspeed-six').text(window.engkizuna[0]['cs']);
			$('#kizunacost-five').text(window.engkizuna[0]['cost']);
			$('#kizunacost-six').text(window.engkizuna[0]['cost']);
			$('#kizunadesc-five').text(window.engkizuna[0]['description']);
			$('#kizunadesc-six').text(window.engkizuna[0]['description']);
		}
	}
	else{
		document.getElementById("eng-button").innerHTML = 'ENG'
		$('#name-unit').text(charaName + ' 【' + subtext + '】');
		$('#leadname-five').text(subtext)
		$('#leadname-six').text(subtext)
		$('#lead-five').text(leader)
		$('#lead-six').text(leader)
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


		if(unitId == 60061201 || unitId == 60061202 || unitId == 60060701 || unitId == 60060702)
		$('#kizunaname-five').text(kn);
		$('#kizunaname-six').text(kn);
		$('#kizunatype-five').text(kntr);
		$('#kizunatype-six').text(kntr);
		$('#kizunaspeed-five').text(kcs);
		$('#kizunaspeed-six').text(kcs);
		$('#kizunacost-five').text(kc);
		$('#kizunacost-six').text(kc);
		$('#kizunadesc-five').text(ks);
		$('#kizunadesc-six').text(ks);
	}
}