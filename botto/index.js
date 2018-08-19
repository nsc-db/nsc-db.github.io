const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require('fs');
var Promise = require('bluebird');

// var skillNames = require('/eng/skillNames.js');



const abilitys = JSON.parse(fs.readFileSync("eng/ability.json", "utf8"));
const characterInfo = JSON.parse(fs.readFileSync('eng/chara.json', 'utf8'));
const charNames = JSON.parse(fs.readFileSync('eng/charaname.json', 'utf8'));
const key = JSON.parse(fs.readFileSync('eng/key.json', 'utf8'));
const leaderSKills = JSON.parse(fs.readFileSync('eng/lead.json', 'utf8'));
// const skills = JSON.parse(fs.readFileSync('eng/skill.json', 'utf8'));
const skillNames = JSON.parse(fs.readFileSync('eng/skillname.json', 'utf8'));
const evo = JSON.parse(fs.readFileSync('eng/evo.json', 'utf8'));




var db = []


for (i in characterInfo) {
    var info = []
    // var key = characterInfo[i]['cardId']
    var id = characterInfo[i]['cardId']


     var data = {
       id: {
        id : id,
        ability1 : characterInfo[i]['abilityId1'],
        ability2 : characterInfo[i]['abilityId2'],
        skill1 : characterInfo[i]['battleSkillId1'],
        skill2 : characterInfo[i]['battleSkillId2'],
        lead : characterInfo[i]['leaderSkillId'],  
       }
    };

db.push(data)

}


// PASSIVE 1 PASSIVE 2  SKILL 1 SKILL 2 LEAD
function getAllIDs(id){
    return new Promise(function(resolve, reject) {
        var arr = []
        for (let i in db ) {
            if (db[i]['id']['id'] == id)
            {
                arr.push(db[i]['id']['ability1'])
                arr.push(db[i]['id']['ability2'])
                arr.push(db[i]['id']['skill1'])
                arr.push(db[i]['id']['skill2'])
                arr.push(db[i]['id']['lead'])
                resolve(arr)
            }
        }

    })
}


function getAbilities(id){
    return new Promise(function(resolve, reject) {
        var arr = [];
        for (let a in abilitys) {
            if ( abilitys[a]['abilityId'] == id) {
                // console.log(abilitys[b]['abilityDescription'])
                arr.push(abilitys[a]['abilityDescription'])
                console.log('done')
                resolve(arr)
            }
        }
    })
}
function getSkills(){
    return new Promise(function(resolve, reject){


        resolve()
    })

}

function getLeaderSkill(id){
    return new Promise(function(resolve, reject) {
        var lead = [];
        console.log(id)
        for (let a in leaderSKills) {
            if ( leaderSKills[a]['cardLeaderSkillId'] == id) {
                
                // console.log(abilitys[b]['abilityDescription'])
                lead.push(leaderSKills[a]['description'])
                resolve(lead)
            }
        }
    })
}

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    console.log(message.content)
    if (message.content.split(" ")[0] === '!ID' || message.content.split(" ")[0] === '!id') {
        var charInfo = []
    	var x = [message.content.split(" ")[1]]
        x = x[0]
        getAllIDs(x).then(function(Ids){
            console.log(Ids)
            charInfo.push(getAbilities(Ids[0]))
            charInfo.push(getAbilities(Ids[1]))
            charInfo.push(getLeaderSkill(Ids[4]))    

            Promise.all(charInfo).then(function(abc) {
                console.log(abc);
                message.channel.send('**Ability1** : ' + abc[0] + '\n**Ability2** : ' + abc[1] + '\n**Lead** : ' + abc[2])
                });
        })

    }









//STUPID STUFF
    if (message.content == '<:FeelsBanMan:230163351131389952>') {
        message.react('230163351131389952')
    }
    if (message.content == '<:FeelsHighMan:230163773145612299>') {
        message.react('230163773145612299')
    }

});





    // if (message.content.split(" ")[0] === '!NICK') {
    //  // if (typeof message.content.split(" ")[1] !== "string")
    //  var x = \[message.content.split(" ")[1]]
    //     // send back "Pong." to the channel the message was sent in
    //  message.channel.send(`test ` + x['abilityDescription']);
    // }
    // if (message.content.split(" ")[0] === '!NAME') {
    //  // if (typeof message.content.split(" ")[1] !== "string")
    //  var x = \[message.content.split(" ")[1]]
    //     // send back "Pong." to the channel the message was sent in
    //  message.channel.send(`test ` + x['abilityDescription']);
    // }
