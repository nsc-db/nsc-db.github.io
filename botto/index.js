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
var db2 = []
var nickarr = []
var timer = ''
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
    var id = characterInfo[i]['cardId']
    var data = {
        [id]: {
            ability1: characterInfo[i]['abilityId1'],
            ability2: characterInfo[i]['abilityId2'],
            skill1: characterInfo[i]['battleSkillId1'],
            skill2: characterInfo[i]['battleSkillId2'],
            lead: characterInfo[i]['leaderSkillId'],
            name: characterInfo[i]['charaProfileId'],
            title: characterInfo[i]['cardSubName'],
        }
    };
    db2 = Object.assign(data, db2)
}

for (let i in db2) {
    check6Star(i).then(function (Star) {
        let temp = []
        temp.push(getLeaderSkill(db2[i].lead))
        temp.push(getName(db2[i].name))
        temp.push(checkURL(i))
        temp.push(getVideo(i))
        temp.push(getRoles(i))
        if (Star[0] == 0 || Star[0] == undefined) {
            temp.push(getAbilities(db2[i].ability1))
            temp.push(getAbilities(db2[i].ability2))
            temp.push(getSkills(db2[i].skill1))
            temp.push(getSkills(db2[i].skill2))
            temp.push(getSpeed(db2[i].skill1))
            temp.push(getType(db2[i].skill1))
            temp.push(getSpeed(db2[i].skill2))
            temp.push(getType(db2[i].skill2))
        }
        else {
            temp.push(getAbilities(Star[0]))
            temp.push(getAbilities(Star[1]))
            temp.push(getSkills(Star[2]))
            temp.push(getSkills(Star[3]))
            temp.push(getSpeed(Star[2]))
            temp.push(getType(Star[2]))
            temp.push(getSpeed(Star[3]))
            temp.push(getType(Star[3]))

        }
        Promise.all(temp).then(function (abc) {
            var regex = /embed\//gi;

            db2[i].lead = abc[0]
            db2[i].name = abc[1]
            db2[i].url = abc[2]
            db2[i].video = abc[3].replace(regex, 'watch?v=')
            db2[i].roles = abc[4]
            db2[i].ability1 = abc[5]
            db2[i].ability2 = abc[6]
            db2[i].skill1 = abc[7]
            db2[i].skill2 = abc[8]
            db2[i].skill1spd = abc[9]
            db2[i].skill1type = abc[10]
            db2[i].skill2spd = abc[11]
            db2[i].skill2type = abc[12]
        });
    })

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


function editInfo(msg, x) {
    msg.edit({
        embed: {
            color: 3447003,
            author: {
                name: String(db2[x].name),
                icon_url: "http://nsc-db.github.io/common/assets/img/units/icons/thumb_" + x + db2[x].url
            },
            "thumbnail": {
                "url": "http://nsc-db.github.io/common/assets/img/units/" + x + db2[x].url
            },
            // Thumbnail : '',
            title: "Name",
            color: 3447003,
            description: db2[x].name + ', ' + db2[x].title,
            fields: [{
                name: "Roles",
                value: '**Main Role** : ' + db2[x].roles[0] + ' **Rating**: ' + db2[x].roles[1] + '\n**Secondary Role** : ' + db2[x].roles[2] + ' **Rating**: ' + db2[x].roles[3],
            },
            {
                name: "Skills",
                value: '**Skill1** : ' + db2[x].skill1 + '**\n' + db2[x].skill1spd + ', ' + db2[x].skill1type[0] + ', ' + db2[x].skill1type[1] + '**\n**Skill2** : ' + db2[x].skill2 + '**\n' + db2[x].skill2spd + ', ' + db2[x].skill2type[0] + ', ' + db2[x].skill2type[1] + '**',
            },
            {
                name: "Passives",
                value: '**Ability1** : ' + db2[x].ability1 + '\n**Ability2** : ' + db2[x].ability2,
            },
            {
                name: "Leader Skill",
                value: "" + db2[x].lead
            }
            ],
        }
    })
}


function sendMessage(msg, x) {
    msg.channel.send({
        embed: {
            color: 3447003,
            author: {
                name: String(db2[x].name),
                icon_url: "http://nsc-db.github.io/common/assets/img/units/icons/thumb_" + x + db2[x].url
            },
            "thumbnail": {
                "url": "http://nsc-db.github.io/common/assets/img/units/" + x + db2[x].url
            },
            // Thumbnail : '',
            title: "Name",
            color: 3447003,
            description: db2[x].name + ', ' + db2[x].title,
            fields: [{
                name: "Roles",
                value: '**Main Role** : ' + db2[x].roles[0] + ' **Rating**: ' + db2[x].roles[1] + '\n**Secondary Role** : ' + db2[x].roles[2] + ' **Rating**: ' + db2[x].roles[3],
            },
            {
                name: "Skills",
                value: '**Skill1** : ' + db2[x].skill1 + '**\n' + db2[x].skill1spd + ', ' + db2[x].skill1type[0] + ', ' + db2[x].skill1type[1] + '**\n**Skill2** : ' + db2[x].skill2 + '**\n' + db2[x].skill2spd + ', ' + db2[x].skill2type[0] + ', ' + db2[x].skill2type[1] + '**',
            },
            {
                name: "Passives",
                value: '**Ability1** : ' + db2[x].ability1 + '\n**Ability2** : ' + db2[x].ability2,
            },
            {
                name: "Leader Skill",
                value: "" + db2[x].lead
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
            if (msg.author.id == 175714457723338752 || 148584580398448640){
                message.react("👍")
            }
            client.on("messageReactionAdd", (reaction, user) => {
                let author = msg.author.id
                if (author == user.id) {
                    if (reaction.emoji.name == "👍" && (user.id == 175714457723338752 || user.id == 148584580398448640)) {
                        clearTimeout(timer);
                    }
                    if (reaction.emoji.name == "🇦") {
                        editArt(message, x)
                    }
                    if (reaction.emoji.name == "🇹") {
                        editThumb(message, x)
                    }
                    if (reaction.emoji.name == "🇮") {
                        editInfo(message, x)
                    }
                    if (reaction.emoji.name == "🇻") {
                        editVideo(message, x)
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
        for (let i in animations) {
            if (animations[i]['targetCardId'] == id) {
                if (animations[i]['skillUrl'] != null) {
                    video = animations[i]['skillUrl']
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
    if (msg.author.id == '479376809696165899') {
        if (aggrsz === true) {
            timer = setTimeout(function(){        msg.delete(0).catch(console.log("duplicate request"));        }, aggrtimeout)
        }
    }

    if (msg.content.split(" ")[0].toLowerCase() === '!id') {
        var x = [msg.content.split(" ")[1]]
        msg.delete(msg.id)
        x = x[0]
        if (db2[x] != undefined) {
            sendMessage(msg, x)
        }
    }

    if (msg.content.split(" ")[0].toLowerCase() === '!nick') {
        var x = msg.content.slice(6);
        msg.delete(msg.id)
        for (let i in tag) {
            if (tag[i].nickname.toLowerCase().includes(x.toLowerCase())) {
                x = tag[i].cardId
            }
        }
        if (db2[x] != undefined) {
            sendMessage(msg, x)
        }
    }

    if (msg.content.split(" ")[0].toLowerCase() === '!thumb') {
        var x = msg.content.slice(7);
        msg.delete(msg.id)

        for (let i in tag) {
            if (tag[i].nickname.toLowerCase().includes(x.toLowerCase())) {
                x = tag[i].cardId
            }
        }
        if (db2[x] != undefined) {
            sendThumb(msg, x)
        }
    }

    if (msg.content.split(" ")[0].toLowerCase() === '!art') {
        var x = msg.content.slice(5);
        msg.delete(msg.id)

        for (let i in tag) {
            if (tag[i].nickname.toLowerCase().includes(x.toLowerCase())) {
                x = tag[i].cardId
            }
        }
        if (db2[x] != undefined) {
            sendArt(msg, x)
        }
    }

    // //STUPID STUFF
    // if (message.content == '<:FeelsBanMan:230163351131389952>') {
    //     message.react('230163351131389952')
    // }
    // if (message.content == '<:FeelsHighMan:230163773145612299>') {
    //     message.react('230163773145612299')
    // }
    if (msg.content.toLowerCase() == '!renshin') {
        msg.channel.send('Renshin is a bitch')
    }

    if (msg.content.split(" ")[0].toLowerCase() === '!search') {
        var x = [msg.content.split(" ")[1]]
        msg.delete(msg.id)

        x = x[0]
        var output = nickarr.filter(s => s.toLowerCase().includes(x.toLowerCase()))
        if (output != "") {
            msg.channel.send(output)
        }
    }

    if (msg.content.toLowerCase() == '!nindo') {
        msg.delete(msg.id)
        msg.channel.send("```Nindo levels can be raised by leveling up a character with duplicates of them or with 3 star, 4 star, and 5 star nindo tickets. God units and pvp reward units can only have their nindo levels raised with duplicates of them.  With each level increase of a character's nindo the character's hp, attack, and defense will get incremental buffs. When maxed out you will have the opportunity to select a buff to them such as an increase to a specific stat, additional chakra, additional skill damage boosts, or a cast speed boost by 1 stage.```")
    }

    if (msg.content == '!help' || msg.content == '!Help' || msg.content == '!HELP') {
        msg.delete(msg.id)

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
        message.delete(0).catch(console.log("duplicate request"));
    }
}
client.login(process.env.token);

function sendThumb(msg, x) {
    msg.channel.send({
        "embed": {
            "image": {
                "url": "http://nsc-db.github.io/common/assets/img/units/icons/thumb_" + x + db2[x].url
            }
        }
    });
}


function editThumb(msg, x) {
    msg.edit({
        "embed": {
            "image": {
                "url": "http://nsc-db.github.io/common/assets/img/units/icons/thumb_" + x + db2[x].url
            }
        }
    });
}


function sendArt(msg, x) {
    msg.channel.send({
        "embed": {
            "image": {
                "url": "http://nsc-db.github.io/common/assets/img/units/" + x + db2[x].url
            }
        }
    });
}


function editArt(msg, x) {
    msg.edit({
        "embed": {
            "image": {
                "url": "http://nsc-db.github.io/common/assets/img/units/" + x + db2[x].url
            }
        }
    });
}


function editVideo(msg, x) {
    msg.edit(db2[x].video, { "embed": {} });
}
