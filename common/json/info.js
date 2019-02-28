{
          //General Info
          "cardId": "20001519",                   //101
          "name": "Naruto Uzumaki",               //1100 Found by using 'charaProfileID'
          "cardSubName": "Awakening Sage Jutsu",  //101
          "charaType": "1",                       //101
          "attribute": "1",                       //101
          "rare": "6",                            //101 and 116 (Check if the 'rare' index from 116 increments from starting 'rare' in 101. Always grab the highest rare in 116. Note always starts at 0)
          "hp": "11270",                          //101 and 116 (Match both 'cardID' and increment stats) 
          "attack": "13269",                      //101 and 116 (Match both 'cardID' and increment stats)
          "defense": "10059",                     //101 and 116 (Match both 'cardID' and increment stats)
          "speed": "161",                         //101 and 116 (Match both 'cardID' and increment stats)
          "avoidanceLot": "1450",                 //101
          "criticalLot": "1550",                  //101
          "criticalDamageLot": "15800",           //101
          "cost": "30",                           //101
          "charaProfileId": "102",                //101 Use this to find name
          
          //Skills
          //Match 'battleSkillId1' and 'battleSkillId2' from 101 to 'cardBattleSkillId' in 103
          //Note: Keep a variable with battleSkillId1 and 2. You'll need to compare it with the same index in 116 for upgrade skills
          "skill1name": "Wind Style: Rasenshuriken (Sage Mode)",          //105 and eng/skillname.js On ini, use eng/skillname.js to fill it up with english names. Called 'eng' in eng/skillname.js, Afterwards use leave blank
          "skill1og": "風遁・螺旋手裏剣（仙人ﾓｰﾄﾞ）",                        //105 match with 'nameIdx' from 103 to 'cardBattleSkillNameId' in 105 . Called 'name' in 105
          "skill1": "Deal 7% + 2,000 to one enemy and his Surroundings", //103 called 'description'
          "skill1cost": "75",                                            //103 called 'battleSkillCnt'
          "skill1speed": "3",                                            //103 called 'waitTime
          "skill1nature": "20",                                          //103 called 'battleSkillType
          "skill1target": "1",                                           //103 called 'targetMode'
          "skill1calctype": "1",                                         //103 called 'calcType'
          "skill2name": "Frog Kumite", 
          "skill2og": "蛙組手",
          "skill2": "Deal 4x ATK Damage to one enemy ignoring 50% DEF",
          "skill2cost": "70",
          "skill2speed": "1",
          "skill2nature": "20",
          "skill2target": "1",
          "skill2calctype": "1",
          //Compare the value of battleSkillId 1 and 2 from 103 to the same index from 116
          //If the battleSkillId != && 116 battleSkillId != 0, repeat the step from above and fill this up with the upgraded skills
          "upgradeskill1name": "Wind Style: Rasenshuriken (Sage Mode)", 
          "upgradeskill1og": "風遁・螺旋手裏剣（仙人ﾓｰﾄﾞ）",
          "upgradeskill1": "Deal 7% + 10,000 to one enemy and his Surroundings. Deal 2x damage when own SPD is buffed",
          "upgradeskill1cost": "70",
          "upgradeskill1speed": "2",
          "upgradeskill1nature": "20",
          "upgradeskill1target": "1",
          "upgradeskill1calctype": "1",
          "upgradeskill2name": "Frog Kumite", 
          "upgradeskill2og": "蛙組手",
          "upgradeskill2": "Deal 5x ATK damage to one enemy ignoring 50% DEF. Deal 2.5x damage when own ATK is buffed",
          "upgradeskill2cost": "65",
          "upgradeskill2speed": "1",
          "upgradeskill2nature": "20",
          "upgradeskill2target": "1",
          "upgradeskill2calctype": "1",
          //Abilities
          //Same as above but with abilityId
          "ability1name": "Sage Mode",                                     //109 called 'abilityName'
          "ability1": "For 5 turns, Chakra Cost -50%, Skill Damage +150%", //109 called 'abilityName'
          "ability2name": "Give Up on Me Giving Up",   
          "ability2": "When HP reach 30% or lower, Recover all HP and ATK, DEF and SPD +50%",
          //Same as above
          "upgradeability1name": "Sage Mode",
          "upgradeability1": "Chakra Cost -50%, Skill Damage +250% and ATK +80%",
          "upgradeability2name": "Give Up on Me Giving Up",
          "upgradeability2": "When HP reach 30% or lower, Recover all HP and ATK, DEF and SPD +100%",
          "lead": "Konoha Characters Maximum HP +20% and HP Regen +5%",  //108 called 'description'
          //Get everything in tags at ini. Then in the future, leave em blank
          "tag": "ex-5",
          "skill1damage": "256128",
          "skill2damage": "0",
          "nickname": "Sage Naruto v1 | OG Sage Naruto",
          "role": "",
          "rolerating": "",
          "secondary": "",
          "secondaryrating": ""
},