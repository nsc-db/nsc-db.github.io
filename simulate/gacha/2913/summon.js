var moneyspent = 0
var gemspent = 0
var summonsdone = 0
var multidone = 0
var feature = [20070108]
var fpull = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var seven = [20061206, 20061204, 20061109, 20061106, 20061104, 20061009, 20061006, 20061004, 20060910, 20060905, 20060810,
			 20060809, 20060806, 20060805, 20060707, 20060705, 20060611, 20060606, 20060603, 20060510];
var sevenpull = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];	 
var sixgod = [20051202, 20051109, 20051103, 20051003, 20050916, 20050905, 20050826, 20050825, 20050824,
			  20050823, 20050822, 20050821, 20050820, 20050715, 20050714, 20050703, 20050603, 20050506, 20050505,
			  20050504, 20050503, 20050407, 20050303, 20050211, 20050103, 20041203, 20041003, 20040811, 20040803, 20040802];
var sixgodpull =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var six = [20061202, 20060904, 20051206, 20050410, 20040606, 20040208, 20031105];
var sixpull = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fourty = [20050412, 20050318, 20050315, 20050314, 20050311, 20050206, 20050204,
			 20050203, 20050112, 20050117, 20050116, 20050115, 20050114, 20050111, 20041103, 
			 20041012, 20040908, 20040904, 20040810, 20040707, 20040708, 20040607, 20040606, 
			 20040402, 20040205, 20040112, 20031209, 20031206, 20031104]
var fourtypull = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ranbu = [50061101, 50061001, 50060801, 50060701, 50060601, 50060501, 
			 50060401, 50060306, 50060205, 50060104]
var ranbupull = [0,0,0,0,0,0,0,0,0,0]
var five = []
var four = []
var rates = 104
var length = createPool(five, four);

$('#f1img').attr('src', './../../../common/assets/img/units/icons/thumb_' + feature[0] + '_7.png'); 

$('#71img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[0] + '_7.png'); 
$('#72img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[1] + '_7.png'); 
$('#73img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[2] + '_7.png'); 
$('#74img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[3] + '_7.png'); 
$('#75img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[4] + '_7.png');
$('#76img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[5] + '_7.png'); 
$('#77img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[6] + '_7.png'); 
$('#78img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[7] + '_7.png'); 
$('#79img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[8] + '_7.png'); 
$('#710img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[9] + '_7.png'); 
$('#711img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[10] + '_7.png'); 
$('#712img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[11] + '_7.png'); 
$('#713img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[12] + '_7.png'); 
$('#714img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[13] + '_7.png');
$('#715img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[14] + '_7.png'); 
$('#716img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[15] + '_7.png'); 
$('#717img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[16] + '_7.png'); 
$('#718img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[17] + '_7.png');
$('#719img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[18] + '_7.png'); 
$('#720img').attr('src', './../../../common/assets/img/units/icons/thumb_' + seven[19] + '_7.png');

$('#6g1img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[0] + '_7.png'); 
$('#6g2img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[1] + '_7.png'); 
$('#6g3img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[2] + '_7.png'); 
$('#6g4img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[3] + '_7.png'); 
$('#6g5img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[4] + '_7.png');
$('#6g6img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[5] + '_7.png'); 
$('#6g7img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[6] + '_7.png'); 
$('#6g8img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[7] + '_7.png'); 
$('#6g9img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[8] + '_7.png'); 
$('#6g10img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[9] + '_7.png'); 
$('#6g11img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[10] + '_7.png'); 
$('#6g12img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[11] + '_7.png'); 
$('#6g13img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[12] + '_7.png');
$('#6g14img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[13] + '_7.png'); 
$('#6g15img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[14] + '_7.png'); 
$('#6g16img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[15] + '_7.png'); 
$('#6g17img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[16] + '_7.png');
$('#6g18img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[17] + '_7.png'); 
$('#6g19img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[18] + '_7.png'); 
$('#6g20img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[19] + '_7.png'); 
$('#6g21img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[20] + '_7.png'); 
$('#6g22img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[21] + '_6.png'); 
$('#6g23img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[22] + '_6.png');
$('#6g24img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[23] + '_6.png'); 
$('#6g25img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[24] + '_6.png'); 
$('#6g26img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[25] + '_7.png'); 
$('#6g27img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[26] + '_6.png');
$('#6g28img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[27] + '_6.png'); 
$('#6g29img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[28] + '_6.png'); 
$('#6g30img').attr('src', './../../../common/assets/img/units/icons/thumb_' + sixgod[29] + '_6.png'); 

$('#61img').attr('src', './../../../common/assets/img/units/icons/thumb_' + six[0] + '_7.png'); 
$('#62img').attr('src', './../../../common/assets/img/units/icons/thumb_' + six[1] + '_7.png'); 
$('#63img').attr('src', './../../../common/assets/img/units/icons/thumb_' + six[2] + '_7.png'); 
$('#64img').attr('src', './../../../common/assets/img/units/icons/thumb_' + six[3] + '_7.png'); 
$('#65img').attr('src', './../../../common/assets/img/units/icons/thumb_' + six[4] + '_6.png');
$('#66img').attr('src', './../../../common/assets/img/units/icons/thumb_' + six[5] + '_6.png'); 
$('#67img').attr('src', './../../../common/assets/img/units/icons/thumb_' + six[6] + '_6.png');

$('#401img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[0] + '_7.png'); 
$('#402img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[1] + '_6.png'); 
$('#403img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[2] + '_6.png'); 
$('#404img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[3] + '_6.png'); 
$('#405img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[4] + '_6.png');
$('#406img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[5] + '_6.png'); 
$('#407img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[6] + '_6.png'); 
$('#408img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[7] + '_6.png'); 
$('#409img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[8] + '_6.png');
$('#4010img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[9] + '_6.png'); 
$('#4011img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[10] + '_6.png'); 
$('#4012img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[11] + '_6.png');
$('#4013img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[12] + '_6.png'); 
$('#4014img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[13] + '_6.png');
$('#4015img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[14] + '_6.png'); 
$('#4016img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[15] + '_6.png'); 
$('#4017img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[16] + '_6.png'); 
$('#4018img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[17] + '_6.png'); 
$('#4019img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[18] + '_6.png');
$('#4020img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[19] + '_6.png'); 
$('#4021img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[20] + '_6.png'); 
$('#4022img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[21] + '_6.png'); 
$('#4023img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[22] + '_6.png');
$('#4024img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[23] + '_6.png'); 
$('#4025img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[24] + '_6.png'); 
$('#4026img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[25] + '_6.png');
$('#4027img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[26] + '_6.png'); 
$('#4028img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[27] + '_6.png');
$('#4029img').attr('src', './../../../common/assets/img/units/icons/thumb_' + fourty[28] + '_6.png'); 


function singleSummon(){
	var single = document.getElementById("single");
	var multi = document.getElementById("multi");
	moneyspent+= 3
	gemspent+= 5
	summonsdone++
	var card;
	var roll =[];
	var id =[];
	var summon = Math.floor(Math.random()* 999);
	var roll = summon;

	//Feature
	if(summon >= 100 && summon < 104){
		var size = getLength(feature);
        summon = Math.floor(Math.random()* (size));

        card = feature[summon] + "_6";
        fpull[summon] = fpull[summon] + 1
        id.push(card);
            $('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,red,magenta,blue,aqua,lime,yellow,red) border-box;box-shadow: 2px 2px 5px 2px red, -3px 2px 5px 2px magenta, -3px -2px 5px 2px blue, 3px -2px 5px 2px aqua, 3px 2px 5px 2px lime, -3px 2px 5px 2px yellow, -3px -2px 10px 2px red, 2px 2px 5px 2px rgba(0,0,0,0);'); 

	}
	//7* God and GK
	else if(summon >= 200 && summon < 206){
		var size = getLength(seven);
		summon = Math.floor(Math.random()* (size));

		card = seven[summon] + "_6";
		sevenpull[summon] = sevenpull[summon] + 1
		id.push(card);
	    $('#char').attr('style', 'background: linear-gradient(to bottom right,gold,white, gold) border-box;box-shadow: 2px 2px 20px 2px gold, 3px 0px 16px 8px white;'); 
	
	}
	//6* God and GK
	else if(summon >= 300 && summon < 330){
		var size = getLength(six);
		summon = Math.floor(Math.random()* (size));

		card = six[summon] + "_6";
		sixpull[summon] = sixpull[summon] + 1
		id.push(card);
        $('#char').attr('style', 'background: linear-gradient(to bottom right,silver,white, silver) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px white;'); 

	}
	else if(summon >= 400 && summon < 470){
		var size = getLength(fourty);
		summon = Math.floor(Math.random()* (size));

		card = fourty[summon] + "_6";
		fourtypull[summon] = fourtypull[summon] + 1
		id.push(card);
        $('#char').attr('style', 'background: linear-gradient(to bottom right,darkblue,royalblue, darkblue) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px royalblue;'); 

	}
	else if(summon >= 500 && summon < 520){
		var size = getLength(sixgod);
		summon = Math.floor(Math.random()* (size));

		card = sixgod[summon] + "_6";
		sixgodpull[summon] = sixgodpull[summon] + 1
		id.push(card);
        $('#char').attr('style', 'background: linear-gradient(to bottom right,silver,white, silver) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px white;'); 

	}
	else{
		var size = getLength(five);
		summon = Math.floor(Math.random()* (size));

		card = five[summon];
		id.push(card);
		$('#char').attr('style', 'background: ""'); 

	}
	
	$('#chara-summon').attr('src', './../../../common/assets/img/units/' + card + '.png'); 

	if (multi.style.display === "block"){
		multi.style.display = "none";
	}
	if (single.style.display === "none") {
        single.style.display = "block";
    } 

    var spent = "$" + moneyspent
    document.getElementById("money").innerHTML = spent;
    document.getElementById("gems").innerHTML = gemspent;
    document.getElementById("summons").innerHTML = summonsdone;
    document.getElementById("multis").innerHTML = multidone;
    document.getElementById("f1").innerHTML = fpull[0];




    document.getElementById("71").innerHTML = sevenpull[0];
    document.getElementById("72").innerHTML = sevenpull[1];
    document.getElementById("73").innerHTML = sevenpull[2];
	document.getElementById("74").innerHTML = sevenpull[3];
    document.getElementById("75").innerHTML = sevenpull[4];
    document.getElementById("76").innerHTML = sevenpull[5];
	document.getElementById("77").innerHTML = sevenpull[6];
    document.getElementById("78").innerHTML = sevenpull[7];
    document.getElementById("79").innerHTML = sevenpull[8];
    document.getElementById("710").innerHTML = sevenpull[9];
    document.getElementById("711").innerHTML = sevenpull[10];
    document.getElementById("712").innerHTML = sevenpull[11];
	document.getElementById("713").innerHTML = sevenpull[12];
    document.getElementById("714").innerHTML = sevenpull[13];
    document.getElementById("715").innerHTML = sevenpull[14];
	document.getElementById("716").innerHTML = sevenpull[15];
    document.getElementById("717").innerHTML = sevenpull[16];
    document.getElementById("718").innerHTML = sevenpull[17];
    document.getElementById("719").innerHTML = sevenpull[18];
    document.getElementById("720").innerHTML = sevenpull[19];

    document.getElementById("6g1").innerHTML = sixgodpull[0];
    document.getElementById("6g2").innerHTML = sixgodpull[1];
    document.getElementById("6g3").innerHTML = sixgodpull[2];
    document.getElementById("6g4").innerHTML = sixgodpull[3];
    document.getElementById("6g5").innerHTML = sixgodpull[4];
    document.getElementById("6g6").innerHTML = sixgodpull[5];
	document.getElementById("6g7").innerHTML = sixgodpull[6];
    document.getElementById("6g8").innerHTML = sixgodpull[7];
	document.getElementById("6g9").innerHTML = sixgodpull[8];
    document.getElementById("6g10").innerHTML = sixgodpull[9];
    document.getElementById("6g11").innerHTML = sixgodpull[10];
    document.getElementById("6g12").innerHTML = sixgodpull[11];
    document.getElementById("6g13").innerHTML = sixgodpull[12];
    document.getElementById("6g14").innerHTML = sixgodpull[13];
	document.getElementById("6g15").innerHTML = sixgodpull[14];
    document.getElementById("6g16").innerHTML = sixgodpull[15];
    document.getElementById("6g17").innerHTML = sixgodpull[16];
    document.getElementById("6g18").innerHTML = sixgodpull[17];
    document.getElementById("6g19").innerHTML = sixgodpull[18];
	document.getElementById("6g20").innerHTML = sixgodpull[19];
	document.getElementById("6g21").innerHTML = sixgodpull[20];
    document.getElementById("6g22").innerHTML = sixgodpull[21];
    document.getElementById("6g23").innerHTML = sixgodpull[22];
    document.getElementById("6g24").innerHTML = sixgodpull[23];
	document.getElementById("6g25").innerHTML = sixgodpull[24];
    document.getElementById("6g26").innerHTML = sixgodpull[25];
    document.getElementById("6g27").innerHTML = sixgodpull[26];
    document.getElementById("6g28").innerHTML = sixgodpull[27];
    document.getElementById("6g29").innerHTML = sixgodpull[28];
	document.getElementById("6g30").innerHTML = sixgodpull[29];

    document.getElementById("61").innerHTML = sixpull[0];
    document.getElementById("62").innerHTML = sixpull[1];
    document.getElementById("63").innerHTML = sixpull[2];
    document.getElementById("64").innerHTML = sixpull[3];
    document.getElementById("65").innerHTML = sixpull[4];
    document.getElementById("66").innerHTML = sixpull[5];
    document.getElementById("67").innerHTML = sixpull[6];

    document.getElementById("401").innerHTML = fourtypull[0];
    document.getElementById("402").innerHTML = fourtypull[1];
    document.getElementById("403").innerHTML = fourtypull[2];
    document.getElementById("404").innerHTML = fourtypull[3];
    document.getElementById("405").innerHTML = fourtypull[4];
    document.getElementById("406").innerHTML = fourtypull[5];
    document.getElementById("407").innerHTML = fourtypull[6];
    document.getElementById("408").innerHTML = fourtypull[7];
    document.getElementById("409").innerHTML = fourtypull[8];
    document.getElementById("4010").innerHTML = fourtypull[9];
    document.getElementById("4011").innerHTML = fourtypull[10];
    document.getElementById("4012").innerHTML = fourtypull[11];
    document.getElementById("4013").innerHTML = fourtypull[12];
    document.getElementById("4014").innerHTML = fourtypull[13];
    document.getElementById("4015").innerHTML = fourtypull[14];
    document.getElementById("4016").innerHTML = fourtypull[15];
    document.getElementById("4017").innerHTML = fourtypull[16];
    document.getElementById("4018").innerHTML = fourtypull[17];
    document.getElementById("4019").innerHTML = fourtypull[18];
    document.getElementById("4020").innerHTML = fourtypull[19];
    document.getElementById("4021").innerHTML = fourtypull[20];
    document.getElementById("4022").innerHTML = fourtypull[21];
    document.getElementById("4023").innerHTML = fourtypull[22];
    document.getElementById("4024").innerHTML = fourtypull[23];
    document.getElementById("4025").innerHTML = fourtypull[24];
    document.getElementById("4026").innerHTML = fourtypull[25];
    document.getElementById("4027").innerHTML = fourtypull[26];
    document.getElementById("4028").innerHTML = fourtypull[27];
    document.getElementById("4029").innerHTML = fourtypull[28];
    console.log(roll);
    console.log(card);
}

function multiSummon(){
	var multi = document.getElementById("multi");
	var single = document.getElementById("single");
	gemspent += 50
	moneyspent += 26
	summonsdone += 11
	multidone++
	var card;
	var roll =[];
	var id =[];

	for(var i = 1; i <= 10; i++){
		var summon = Math.floor(Math.random()* 999);
		roll.push(summon);
		//Feature Character Rate .4%
		if(summon >= 100 && summon < 104){
			var size = getLength(feature);
            summon = Math.floor(Math.random()* (size));

            card = feature[summon] + "_6";
            fpull[summon] = fpull[summon] + 1
            id.push(card);
            $('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,red,magenta,blue,aqua,lime,yellow,red) border-box;box-shadow: 2px 2px 5px 2px red, -3px 2px 5px 2px magenta, -3px -2px 5px 2px blue, 3px -2px 5px 2px aqua, 3px 2px 5px 2px lime, -3px 2px 5px 2px yellow, -3px -2px 10px 2px red, 2px 2px 5px 2px rgba(0,0,0,0);'); 

		}
		//7* God and GK
		else if(summon >= 200 && summon < 206){
			var size = getLength(seven);
			summon = Math.floor(Math.random()* (size));

			card = seven[summon] + "_6";
			sevenpull[summon] = sevenpull[summon] + 1
			id.push(card);
            $('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,gold,white, gold) border-box;box-shadow: 2px 2px 20px 2px gold, 3px 0px 16px 8px white;'); 

		}
		//6* God and GK
		else if(summon >= 300 && summon < 330){
			var size = getLength(six);
			summon = Math.floor(Math.random()* (size));

			card = six[summon] + "_6";
			sixpull[summon] = sixpull[summon] + 1
			id.push(card);
            $('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,silver,white, silver) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px white;'); 

		}
		else if(summon >= 400 && summon < 470){
			var size = getLength(fourty);
			summon = Math.floor(Math.random()* (size));

			card = fourty[summon] + "_6";
			fourtypull[summon] = fourtypull[summon] + 1
			id.push(card);
            $('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,darkblue,royalblue, darkblue) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px royalblue;'); 

		}
		else if(summon >= 900 && summon < 920){
			var size = getLength(sixgod);
			summon = Math.floor(Math.random()* (size));

			card = sixgod[summon] + "_6";
			sixgodpull[summon] = sixgodpull[summon] + 1
			id.push(card);
            $('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,silver,white, silver) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px white;'); 

		}
		else{
			var size = getLength(five);
			summon = Math.floor(Math.random()* (size));

			card = five[summon];
			id.push(card);
			$('.char-' + i).attr('style', 'background: '); 

		}
		
		$('#chara-summon-' + i).attr('src', './../../../common/assets/img/units/' + card + '.png'); 
	}
	var i = 11
	var summon = Math.floor(Math.random()* 999);
	roll.push(summon);
	if(multidone == 2){
		rates = 105
	}
	else if(multidone == 3){
		rates = 108
		rates2 = 435
	}
	else if(multidone == 4){
		rates = 120
	}
	else if( multidone > 4){
		rates = 120
	}

	if(summon >= 100 && summon < rates){
		var size = getLength(feature);
        summon = Math.floor(Math.random()* (size));

        card = feature[summon] + "_6";
        fpull[summon] = fpull[summon] + 1
        id.push(card);
            $('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,red,magenta,blue,aqua,lime,yellow,red) border-box;box-shadow: 2px 2px 5px 2px red, -3px 2px 5px 2px magenta, -3px -2px 5px 2px blue, 3px -2px 5px 2px aqua, 3px 2px 5px 2px lime, -3px 2px 5px 2px yellow, -3px -2px 10px 2px red, 2px 2px 5px 2px rgba(0,0,0,0);'); 

	}
	//7* God and GK
	else if(summon >= 200 && summon < 206){
		var size = getLength(seven);
		summon = Math.floor(Math.random()* (size));

		card = seven[summon] + "_6";
		sevenpull[summon] = sevenpull[summon] + 1
		id.push(card);
		$('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,gold,white, gold) border-box;box-shadow: 2px 2px 20px 2px gold, 3px 0px 16px 8px white;'); 

	}
	//6* God and GK
	else if(summon >= 750 && summon < 730){
		var size = getLength(six);
		summon = Math.floor(Math.random()* (size));

		card = six[summon] + "_6";
		sixpull[summon] = sixpull[summon] + 1
		id.push(card);
	    $('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,silver,white, silver) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px white;'); 
	
	}
	else if(summon >= 40 && summon < 60){
		var size = getLength(sixgod);
		summon = Math.floor(Math.random()* (size));

		card = sixgod[summon] + "_6";
		sixgodpull[summon] = sixgodpull[summon] + 1
		id.push(card);
	    $('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,silver,white, silver) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px white;'); 
	
	}
	else{
		
			var size = getLength(fourty);
			summon = Math.floor(Math.random()* (size));

			card = fourty[summon] + "_6";
			fourtypull[summon] = fourtypull[summon] + 1
			id.push(card);
	        $('.char-' + i).attr('style', 'background: linear-gradient(to bottom right,darkblue,royalblue, darkblue) border-box;box-shadow: 2px 2px 20px 2px silver, 3px 0px 16px 8px royalblue;'); 
	}
		


	$('#chara-summon-11').attr('src', './../../../common/assets/img/units/' + card + '.png'); 

	if (single.style.display === "block"){
		single.style.display = "none";
	}
	if (multi.style.display === "none") {
        multi.style.display = "block";
    } 
    var spent = "$" + moneyspent
    document.getElementById("money").innerHTML = spent;
    document.getElementById("gems").innerHTML = gemspent;
    document.getElementById("summons").innerHTML = summonsdone;
    document.getElementById("multis").innerHTML = multidone;
    var featurerate = 0
    featurerate = ((rates - 100) / 1000) * 100
    
    document.getElementById("frates").innerHTML =  featurerate + '%';

    document.getElementById("f1").innerHTML = fpull[0];




    document.getElementById("71").innerHTML = sevenpull[0];
    document.getElementById("72").innerHTML = sevenpull[1];
    document.getElementById("73").innerHTML = sevenpull[2];
	document.getElementById("74").innerHTML = sevenpull[3];
    document.getElementById("75").innerHTML = sevenpull[4];
    document.getElementById("76").innerHTML = sevenpull[5];
	document.getElementById("77").innerHTML = sevenpull[6];
    document.getElementById("78").innerHTML = sevenpull[7];
    document.getElementById("79").innerHTML = sevenpull[8];
    document.getElementById("710").innerHTML = sevenpull[9];
    document.getElementById("711").innerHTML = sevenpull[10];
    document.getElementById("712").innerHTML = sevenpull[11];
	document.getElementById("713").innerHTML = sevenpull[12];
    document.getElementById("714").innerHTML = sevenpull[13];
    document.getElementById("715").innerHTML = sevenpull[14];
	document.getElementById("716").innerHTML = sevenpull[15];
    document.getElementById("717").innerHTML = sevenpull[16];
    document.getElementById("718").innerHTML = sevenpull[17];
    document.getElementById("719").innerHTML = sevenpull[18];
    document.getElementById("720").innerHTML = sevenpull[19];

    document.getElementById("6g1").innerHTML = sixgodpull[0];
    document.getElementById("6g2").innerHTML = sixgodpull[1];
    document.getElementById("6g3").innerHTML = sixgodpull[2];
    document.getElementById("6g4").innerHTML = sixgodpull[3];
    document.getElementById("6g5").innerHTML = sixgodpull[4];
    document.getElementById("6g6").innerHTML = sixgodpull[5];
	document.getElementById("6g7").innerHTML = sixgodpull[6];
    document.getElementById("6g8").innerHTML = sixgodpull[7];
	document.getElementById("6g9").innerHTML = sixgodpull[8];
    document.getElementById("6g10").innerHTML = sixgodpull[9];
    document.getElementById("6g11").innerHTML = sixgodpull[10];
    document.getElementById("6g12").innerHTML = sixgodpull[11];
    document.getElementById("6g13").innerHTML = sixgodpull[12];
    document.getElementById("6g14").innerHTML = sixgodpull[13];
	document.getElementById("6g15").innerHTML = sixgodpull[14];
    document.getElementById("6g16").innerHTML = sixgodpull[15];
    document.getElementById("6g17").innerHTML = sixgodpull[16];
    document.getElementById("6g18").innerHTML = sixgodpull[17];
    document.getElementById("6g19").innerHTML = sixgodpull[18];
	document.getElementById("6g20").innerHTML = sixgodpull[19];
	document.getElementById("6g21").innerHTML = sixgodpull[20];
    document.getElementById("6g22").innerHTML = sixgodpull[21];
    document.getElementById("6g23").innerHTML = sixgodpull[22];
    document.getElementById("6g24").innerHTML = sixgodpull[23];
	document.getElementById("6g25").innerHTML = sixgodpull[24];
    document.getElementById("6g26").innerHTML = sixgodpull[25];
    document.getElementById("6g27").innerHTML = sixgodpull[26];
    document.getElementById("6g28").innerHTML = sixgodpull[27];
    document.getElementById("6g29").innerHTML = sixgodpull[28];
	document.getElementById("6g30").innerHTML = sixgodpull[29];

    document.getElementById("61").innerHTML = sixpull[0];
    document.getElementById("62").innerHTML = sixpull[1];
    document.getElementById("63").innerHTML = sixpull[2];
    document.getElementById("64").innerHTML = sixpull[3];
    document.getElementById("65").innerHTML = sixpull[4];
    document.getElementById("66").innerHTML = sixpull[5];
    document.getElementById("67").innerHTML = sixpull[6];

    document.getElementById("401").innerHTML = fourtypull[0];
    document.getElementById("402").innerHTML = fourtypull[1];
    document.getElementById("403").innerHTML = fourtypull[2];
    document.getElementById("404").innerHTML = fourtypull[3];
    document.getElementById("405").innerHTML = fourtypull[4];
    document.getElementById("406").innerHTML = fourtypull[5];
    document.getElementById("407").innerHTML = fourtypull[6];
    document.getElementById("408").innerHTML = fourtypull[7];
    document.getElementById("409").innerHTML = fourtypull[8];
    document.getElementById("4010").innerHTML = fourtypull[9];
    document.getElementById("4011").innerHTML = fourtypull[10];
    document.getElementById("4012").innerHTML = fourtypull[11];
    document.getElementById("4013").innerHTML = fourtypull[12];
    document.getElementById("4014").innerHTML = fourtypull[13];
    document.getElementById("4015").innerHTML = fourtypull[14];
    document.getElementById("4016").innerHTML = fourtypull[15];
    document.getElementById("4017").innerHTML = fourtypull[16];
    document.getElementById("4018").innerHTML = fourtypull[17];
    document.getElementById("4019").innerHTML = fourtypull[18];
    document.getElementById("4020").innerHTML = fourtypull[19];
    document.getElementById("4021").innerHTML = fourtypull[20];
    document.getElementById("4022").innerHTML = fourtypull[21];
    document.getElementById("4023").innerHTML = fourtypull[22];
    document.getElementById("4024").innerHTML = fourtypull[23];
    document.getElementById("4025").innerHTML = fourtypull[24];
    document.getElementById("4026").innerHTML = fourtypull[25];
    document.getElementById("4027").innerHTML = fourtypull[26];
    document.getElementById("4028").innerHTML = fourtypull[27];
    document.getElementById("4029").innerHTML = fourtypull[28];
    console.log(roll);
    console.log(card);

    console.log(roll[0] + ", " + roll[1] + ", " + roll[2] + ", " + roll[3] + ", " + roll[4] + ", " + roll[5] + ", " + roll[6] + ", " + roll[7] + ", " + roll[8] + ", " + roll[9]);
    console.log(id[0] + ", " + id[1] + ", " + id[2] + ", " + id[3] + ", " + id[4] + ", " + id[5] + ", " + id[6] + ", " + id[7] + ", " + id[8] + ", " + id[9] + ", " + id[9]);
    console.log(moneyspent)
}

function reset(){
	moneyspent = 0
	gemspent = 0
	summonsdone = 0
	multidone = 0

	var spent = "$" + moneyspent
    document.getElementById("money").innerHTML = spent;
    document.getElementById("gems").innerHTML = gemspent;
    document.getElementById("summons").innerHTML = summonsdone;
    document.getElementById("multis").innerHTML = multidone;

	single.style.display = "none";
    multi.style.display = "none";
}

function showRates(){
	var rate = document.getElementById("rates-percent");

	
	if (rate.style.display === "none") {
        rate.style.display = "block";
    } 
    else{
    	rate.style.display = "none";
    }
}

function createPool(five, four){
	for(var n in window.tags){

		if(window.tags[n]['rare'] == '5' && window.tags[n]['tag'] == 'gacha'){
			five.push(window.tags[n]['cardId']);
		}
		if(window.tags[n]['rare'] == '4' && window.tags[n]['tag'] == 'gacha'){
			four.push(window.tags[n]['cardId']);
		}
		length++;
	}
	return length;
}


function getLength(arr){
	var size = 0;
	for (var n in arr){
		size++;
	}
	return size;
}