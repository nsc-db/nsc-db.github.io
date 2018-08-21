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
const skills = JSON.parse(fs.readFileSync('eng/skills2.json', 'utf8'));
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
        name : characterInfo[i]['charaProfileId'],
        title : characterInfo[i]['cardSubName'],
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
                arr.push(db[i]['id']['name'])
                arr.push(db[i]['id']['title'])
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
                arr.push(abilitys[a]['abilityDescription'])
                resolve(arr)
            }
        }
    })
}

function getSkills(id){
    return new Promise(function(resolve, reject) {
        var arr = [];
        for (let a in skills) {
            if ( skills[a]['cardBattleSkillId'] == id) {
                arr.push(skills[a]['description'])
                resolve(arr)
            }
        }
    })
}

function getName(id){
    return new Promise(function(resolve, reject) {
        var arr = [];
        for (let a in charNames) {
            if ( charNames[a]['charaProfileId'] == id) {

                arr.push(charNames[a]['name'])
                resolve(arr)
            }
        }
    })
}


function getLeaderSkill(id){
    return new Promise(function(resolve, reject) {
        var lead = [];
        for (let a in leaderSKills) {
            if ( leaderSKills[a]['cardLeaderSkillId'] == id) {
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
    if (message.content.split(" ")[0] === '!ID' || message.content.split(" ")[0] === '!id') {
        var charInfo = []
    	var x = [message.content.split(" ")[1]]
        x = x[0]
        getAllIDs(x).then(function(Ids){
            console.log(Ids)
            charInfo.push(getAbilities(Ids[0]))
            charInfo.push(getAbilities(Ids[1]))
            charInfo.push(getSkills(Ids[2]))
            charInfo.push(getSkills(Ids[3]))
            charInfo.push(getLeaderSkill(Ids[4]))
            charInfo.push(getName(Ids[5]))        

            Promise.all(charInfo).then(function(abc) {


                color: 3447003,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL
                },
                title: "This is an embed",
                url: "http://google.com",
                description: "This is a test embed to showcase what they look like and what they can do.",
                fields: [{
                    name: "Fields",
                    value: "They can have different fields with small headlines."
                  },
                  {
                    name: "Masked links",
                    value: "You can put [masked links](http://google.com) inside of rich embeds."
                  },
                  {
                    name: "Markdown",
                    value: "You can put all the *usual* **__Markdown__** inside of them."
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "© Example"
                }
              }

                            
                            // message.channel.send('**Name** : ' + abc[5] + ', ' + Ids[6] + '\n**Skill1** : ' + abc[2] + '\n**Skill2** : ' + abc[3] + '**\nAbility1** : ' + abc[0] + '\n**Ability2** : ' + abc[1] + '\n**Lead** : ' + abc[4])
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
    if (message.content == '!renshin' || message.content == '!Renshin' ||message.content == '!riab' ||message.content == '!RIAB' ) {
        message.channel.send('Renshin is a bitch')
    }



    if (message.content == '!TEST') {
        message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "This is an embed",
    url: "http://google.com",
    description: "This is a test embed to showcase what they look like and what they can do.",
    fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
});
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
