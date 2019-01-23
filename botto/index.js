'use strict';
const Discord = require('discord.js');
var URLexists = require('url-exists');
const client = new Discord.Client();
const _ = require('underscore');
var sz = true;
var aggrsz = true;
var aggrtimeout = 30000;
var fs = require('fs');
var Promise = require('bluebird');
var url = ""
var db = []
var nickarr = []

const abilitys = JSON.parse(fs.readFileSync("../common/eng/ability.js", "utf8").slice(15));
const characterInfo = JSON.parse(fs.readFileSync('../common/eng/chara.js', 'utf8').slice(13));
const charNames = JSON.parse(fs.readFileSync('../common/eng/charaname.js', 'utf8').slice(17));
const key = JSON.parse(fs.readFileSync('../common/eng/key.js', 'utf8').slice(11));
const leaderSKills = JSON.parse(fs.readFileSync('../common/eng/lead.js', 'utf8').slice(12));
const skills = JSON.parse(fs.readFileSync('../common/eng/skill.js', 'utf8').slice(13));
//const skillNames = JSON.parse(fs.readFileSync('eng/skillname.json', 'utf8'));
const tag = JSON.parse(fs.readFileSync('../common/json/tags.js', 'utf8').slice(12));
const evo = JSON.parse(fs.readFileSync('../common/json/evo.js', 'utf8').slice(11));
var animation = fs.readFileSync('../modified/990402.plist.json', 'utf8')
animation = "[" + animation + "]"
const animations = JSON.parse(animation);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ game: { name: 'Reaction Menu Added' }, status: 'busy' });
});


for (let i in tag) {
    if (tag[i].nickname !== '') {
        if (nickarr.indexOf(tag[i].nickname) == '-1') {
            nickarr.push(tag[i].nickname)
        }
    }
}


for (let i in characterInfo) {
    var info = []
    // var key = characterInfo[i]['cardId']
    var id = characterInfo[i]['cardId']
    var data = {
        id: {
            id: id,
            ability1: characterInfo[i]['abilityId1'],
            ability2: characterInfo[i]['abilityId2'],
            skill1: characterInfo[i]['battleSkillId1'],
            skill2: characterInfo[i]['battleSkillId2'],
            lead: characterInfo[i]['leaderSkillId'],
            name: characterInfo[i]['charaProfileId'],
            title: characterInfo[i]['cardSubName'],
        }
    };
    db.push(data)
}


function check6Star(x) {
    return new Promise(function (resolve, reject) {
        var arr = []
        for (let a in evo) {
            if (evo[a]['conditionValue'] == '6') {
                if (evo[a]['cardId'] == x) {
                    arr.push(evo[a]['abilityId1'])
                    arr.push(evo[a]['abilityId2'])
                    arr.push(evo[a]['battleSkillId1'])
                    arr.push(evo[a]['battleSkillId2'])
                    resolve(arr)
                }
            }
        }
        resolve(0)
    })
}


// PASSIVE 1 PASSIVE 2  SKILL 1 SKILL 2 LEAD
function getFromIDs(id, Star) {
    return new Promise(function (resolve, reject) {
        var arr = []
        if (Star[0] == 0 || Star[0] == undefined) {
            for (let i in db) {
                if (db[i]['id']['id'] == id) {
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
        }
        else {
            for (let i in db) {
                if (db[i]['id']['id'] == id) {
                    arr.push(Star[0])
                    arr.push(Star[1])
                    arr.push(Star[2])
                    arr.push(Star[3])
                    arr.push(db[i]['id']['lead'])
                    arr.push(db[i]['id']['name'])
                    arr.push(db[i]['id']['title'])
                    resolve(arr)
                }
            }
        }
    })
}


function editInfo(msg, abc, x, Ids) {
    msg.edit({
        embed: {
            color: 3447003,
            author: {
                name: String(abc[5]),
                icon_url: "http://nsc-db.github.io/common/assets/img/units/icons/thumb_" + x + abc[6]
            },
            "thumbnail": {
                "url": "http://nsc-db.github.io/common/assets/img/units/" + x + abc[6]
            },
            // Thumbnail : '',
            title: "Name",
            color: 3447003,
            description: abc[5] + ', ' + Ids[6],
            fields: [{
                name: "Skills",
                value: '**Skill1** : ' + abc[2] + '**\n' + abc[7] + ', ' + abc[8][1] + ', ' + abc[8][0] + '**\n**Skill2** : ' + abc[3] + '**\n' + abc[9] + ', ' + abc[10][1] + ', ' + abc[10][0] + '**',
            },
            {
                name: "Passives",
                value: '**Ability1** : ' + abc[0] + '\n**Ability2** : ' + abc[1],
            },
            {
                name: "Leader Skill",
                value: "" + abc[4]
            }
            ],
        }
    })
}


function sendMessage(msg, abc, x, Ids) {
    msg.channel.send({
        embed: {
            color: 3447003,
            author: {
                name: String(abc[5]),
                icon_url: "http://nsc-db.github.io/common/assets/img/units/icons/thumb_" + x + abc[6]
            },
            "thumbnail": {
                "url": "http://nsc-db.github.io/common/assets/img/units/" + x + abc[6]
            },
            // Thumbnail : '',
            title: "Name",
            color: 3447003,
            description: abc[5] + ', ' + Ids[6],
            fields: [{
                name: "Roles",
                value: '**Main Role** : ' + abc[12][0] + ' **Rating**: ' + abc[12][1] + '\n**Secondary Role** : ' + abc[12][2] + ' **Rating**: ' + abc[12][3],
            },{
                name: "Skills",
                value: '**Skill1** : ' + abc[2] + '**\n' + abc[7] + ', ' + abc[8][1] + ', ' + abc[8][0] + '**\n**Skill2** : ' + abc[3] + '**\n' + abc[9] + ', ' + abc[10][1] + ', ' + abc[10][0] + '**',
            },
            {
                name: "Passives",
                value: '**Ability1** : ' + abc[0] + '\n**Ability2** : ' + abc[1],
            },
            {
                name: "Leader Skill",
                value: "" + abc[4]
            }
            ],
        }
    })
        .then(function (message) {
            message.react("🇮")
            message.react("🇦")
            message.react("🇹")
            message.react("🇻")
            message.react("👌")
            client.on("messageReactionAdd", (reaction, user) => {
                let author = msg.author.id
                if (author == user.id) {
                    if (reaction.emoji.name == "🇦") {
                        editArt(message, abc, x)
                    }
                    if (reaction.emoji.name == "🇹") {
                        editThumb(message, abc, x)
                    }
                    if (reaction.emoji.name == "🇮") {
                        editInfo(message, abc, x, Ids)
                    }
                    if (reaction.emoji.name == "🇻") {
                        editVideo(message, abc, x, Ids)
                    }
                    if (reaction.emoji.name == "👌") {
                        message.delete()
                    }
                }
            })
        })
}


function getAbilities(id) {
    return new Promise(function (resolve, reject) {
        var arr = [];
        for (let a in abilitys) {
            if (abilitys[a]['abilityId'] == id) {
                arr.push(abilitys[a]['abilityDescription'])
                resolve(arr)
            }
        }
    })
}


function getSkills(id) {
    return new Promise(function (resolve, reject) {
        var arr = [];
        for (let a in skills) {
            if (skills[a]['cardBattleSkillId'] == id) {
                arr.push(skills[a]['description'])
                resolve(arr)
            }
        }
    })
}


function getType(id) {
    return new Promise(function (resolve, reject) {
        var arr = [];
        for (let a in skills) {
            if (skills[a]['cardBattleSkillId'] == id) {
                var type = skills[a]['battleSkillType']
                arr.push(skills[a]['battleSkillCnt'])
                for (let i in key) {
                    if (key[i][0] == 'skill') {
                        if (key[i][1] == type) {
                            arr.push(key[i][2])
                        }
                    }
                }
                resolve(arr)
            }
        }
    })
}


function getSpeed(id) {
    return new Promise(function (resolve, reject) {
        var arr = [];
        for (let a in skills) {
            if (skills[a]['cardBattleSkillId'] == id) {
                var speed = skills[a]['waitTime']
                for (let i in key) {
                    if (key[i][0] == 'wait') {
                        if (key[i][1] == speed) {
                            arr.push(key[i][2])
                        }
                    }
                }
                resolve(arr)
            }
        }
    })
}


function getName(id) {
    return new Promise(function (resolve, reject) {
        var arr = [];
        for (let a in charNames) {
            if (charNames[a]['charaProfileId'] == id) {
                arr.push(charNames[a]['name'])
                resolve(arr)
            }
        }
    })
}


function getVideo(id) {
    return new Promise(function (resolve, reject) {
        var video = ""
        for (let i in animations[0]["resData"][990402]['gachaCardAdditionM']) {
            if (animations[0]["resData"][990402]['gachaCardAdditionM'][i]['targetCardId'] == id) {
                if (animations[0]["resData"][990402]['gachaCardAdditionM'][i]['skillUrl'] != null) {
                    video = animations[0]["resData"][990402]['gachaCardAdditionM'][i]['skillUrl']
                }
            }
        }
        resolve(video)
    })
}


function getRoles(id) {
    return new Promise(function (resolve, reject) {
        let tags = []
        for (let i in tag) {
            if (tag[i].cardId == id) {
                tags.push(tag[i].role)
                tags.push(tag[i].rolerating)
                tags.push(tag[i].secondary)
                tags.push(tag[i].secondaryrating)
            }
        } 
        resolve(tags)
    })
}


function getLeaderSkill(id) {
    return new Promise(function (resolve, reject) {
        var lead = [];
        for (let a in leaderSKills) {
            if (leaderSKills[a]['cardLeaderSkillId'] == id) {
                lead.push(leaderSKills[a]['description'])
                resolve(lead)
            }
        }
    })
}


function checkURL(x) {
    return new Promise(function (resolve, reject) {
        url = "http://nsc-db.github.io/common/assets/img/units/icons/thumb_" + x + "_6.png"
        URLexists(url, function (err, exist) {
            if (exist == true) {
                resolve("_6.png")
            }
            else {
                resolve(".png")
            }
        });
    })
}


client.on('message', msg => {

    if (msg.author.bot === true) {
        if (aggrsz === true) {
            sanitize(msg, aggrtimeout);
        }
    }

    if (msg.content.split(" ")[0].toLowerCase() === '!id') {
        var x = [msg.content.split(" ")[1]]
        x = x[0]
        findID(x, msg)
    }

    if (msg.content.split(" ")[0].toLowerCase() === '!nick') {
        var x = msg.content.slice(6);
        for (let i in tag) {
            if (tag[i].nickname.toLowerCase().includes(x.toLowerCase())) {
                x = tag[i].cardId
            }
        }
        findID(x, msg)
    }

    if (msg.content.split(" ")[0].toLowerCase() === '!thumb') {
        var charInfo = []
        var x = msg.content.slice(7);
        for (let i in tag) {
            if (tag[i].nickname.toLowerCase().includes(x.toLowerCase())) {
                x = tag[i].cardId
            }
        }
        check6Star(x).then(function (Star) {
            getFromIDs(x, Star).then(function (Ids) {
                charInfo.push(getAbilities(Ids[0]))    //0
                charInfo.push(getAbilities(Ids[1]))    //1
                charInfo.push(getSkills(Ids[2]))    //2
                charInfo.push(getSkills(Ids[3]))    //3
                charInfo.push(getLeaderSkill(Ids[4]))    //4
                charInfo.push(getName(Ids[5]))      //5
                charInfo.push(checkURL(x))    //6
                charInfo.push(getSpeed(Ids[2]))    //7
                charInfo.push(getType(Ids[2]))    //8
                charInfo.push(getSpeed(Ids[3]))    //9
                charInfo.push(getType(Ids[3]))    //10

                Promise.all(charInfo).then(function (abc) {
                    sendThumb(msg, abc, x)
                });
            })
        })
    }

    if (msg.content.split(" ")[0].toLowerCase() === '!art') {
        var charInfo = []
        var x = msg.content.slice(5);
        for (let i in tag) {
            if (tag[i].nickname.toLowerCase().includes(x.toLowerCase())) {
                x = tag[i].cardId
            }
        }
        check6Star(x).then(function (Star) {
            getFromIDs(x, Star).then(function (Ids) {
                charInfo.push(getAbilities(Ids[0]))    //0
                charInfo.push(getAbilities(Ids[1]))    //1
                charInfo.push(getSkills(Ids[2]))    //2
                charInfo.push(getSkills(Ids[3]))    //3
                charInfo.push(getLeaderSkill(Ids[4]))    //4
                charInfo.push(getName(Ids[5]))      //5
                charInfo.push(checkURL(x))    //6
                charInfo.push(getSpeed(Ids[2]))    //7
                charInfo.push(getType(Ids[2]))    //8
                charInfo.push(getSpeed(Ids[3]))    //9
                charInfo.push(getType(Ids[3]))    //10

                Promise.all(charInfo).then(function (abc) {
                    sendArt(msg, abc, x)
                });
            })
        })
    }

    // //STUPID STUFF
    // if (message.content == '<:FeelsBanMan:230163351131389952>') {
    //     message.react('230163351131389952')
    // }
    // if (message.content == '<:FeelsHighMan:230163773145612299>') {
    //     message.react('230163773145612299')
    // }
    // if (message.content == '!renshin' || message.content == '!Renshin' || message.content == '!riab' || message.content == '!RIAB') {
    //     message.channel.send('Renshin is a bitch')
    // }

    if (msg.content.split(" ")[0].toLowerCase() === '!search') {
        var charInfo = []
        var x = [msg.content.split(" ")[1]]
        x = x[0]
        var output = nickarr.filter(s => s.toLowerCase().includes(x.toLowerCase()))
        if (output != "") {
            msg.channel.send(output)
        }
    }

    if (msg.content == '!nindo' || msg.content == '!NINDO' || msg.content == '!Nindo') {
        msg.channel.send("```Nindo levels can be raised by leveling up a character with duplicates of them or with 3 star, 4 star, and 5 star nindo tickets. God units and pvp reward units can only have their nindo levels raised with duplicates of them.  With each level increase of a character's nindo the character's hp, attack, and defense will get incremental buffs. When maxed out you will have the opportunity to select a buff to them such as an increase to a specific stat, additional chakra, additional skill damage boosts, or a cast speed boost by 1 stage.```")
    }

    if (msg.content == '!help' || msg.content == '!Help' || msg.content == '!HELP') {
        msg.channel.send({
            embed: {
                title: "!Help",
                color: 3447003,
                description: "List of Commands",
                fields: [{
                    name: "!Search",
                    value: "Searches for nicknames that match the search"
                },
                {
                    name: "!Nick",
                    value: "!Nick CharacterNicknameHere where you find the nickname with !search"
                },
                {
                    name: "!Art & !Thumb",
                    value: "Same input as !Nick but result in Character arts"
                },
                {
                    name: "!Nindo",
                    value: "Information on how Nindo works"
                },
                {
                    name: "!FAQ",
                    value: "Displays the FAQ"
                },
                {
                    name: "!Update",
                    value: "WIP"
                },
                ],
            }
        })
    }
});


function sanitize(message, time) {
    if (sz === true) {
        message.delete(time).catch(console.log("duplicate request"));
    }
}
client.login(process.env.token);

function sendThumb(msg, abc, x) {
    msg.channel.send({
        "embed": {
            "image": {
                "url": "http://nsc-db.github.io/common/assets/img/units/icons/thumb_" + x + abc[6]
            }
        }
    });
}


function editThumb(msg, abc, x) {
    msg.edit({
        "embed": {
            "image": {
                "url": "http://nsc-db.github.io/common/assets/img/units/icons/thumb_" + x + abc[6]
            }
        }
    });
}


function sendArt(msg, abc, x) {
    msg.channel.send({
        "embed": {
            "image": {
                "url": "http://nsc-db.github.io/common/assets/img/units/" + x + abc[6]
            }
        }
    });
}


function editArt(msg, abc, x) {
    msg.edit({
        "embed": {
            "image": {
                "url": "http://nsc-db.github.io/common/assets/img/units/" + x + abc[6]
            }
        }
    });
}


function editVideo(msg, abc, x) {
    var regex = /embed\//gi;
    let video = abc[11]
    video = video.replace(regex, 'watch?v=')
    msg.edit(video, { "embed": {} });
}


function findID(x, msg) {
    var charInfo = []
    check6Star(x).then(function (Star) {
        getFromIDs(x, Star).then(function (Ids) {
            charInfo.push(getAbilities(Ids[0]))    //0
            charInfo.push(getAbilities(Ids[1]))    //1
            charInfo.push(getSkills(Ids[2]))    //2
            charInfo.push(getSkills(Ids[3]))    //3
            charInfo.push(getLeaderSkill(Ids[4]))    //4
            charInfo.push(getName(Ids[5]))      //5
            charInfo.push(checkURL(x))    //6
            charInfo.push(getSpeed(Ids[2]))    //7
            charInfo.push(getType(Ids[2]))    //8
            charInfo.push(getSpeed(Ids[3]))    //9
            charInfo.push(getType(Ids[3]))    //10
            charInfo.push(getVideo(x))        //11
            charInfo.push(getRoles(x))        //12


            Promise.all(charInfo).then(function (abc) {
                sendMessage(msg, abc, x, Ids)
            });
        })
    })
}
