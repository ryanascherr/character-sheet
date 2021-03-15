var spellAttackRollResult = document.querySelector("#spell-attack-roll-result");
var skillsRollResult = document.querySelector("#skills-roll-result");
var healingSpellResult = document.querySelector("#healing-spell-result");
var normal = document.querySelector("#normal");
var advantage = document.querySelector("#advantage");
var disadvantage = document.querySelector("#disadvantage");
var skills = document.querySelector(".skills");
var savingThrows = document.querySelector(".saving-throws");
var spellLevels = document.querySelector(".spell-levels");
var allSpellLevels = document.querySelectorAll(".spell-level");
var healingWord = document.querySelector("#healing-word");
var cureWounds = document.querySelector("#cure-wounds");
var tollTheDead = document.querySelector("#toll-the-dead");
var guidingBolt = document.querySelector("#guiding-bolt");
var holyHaymaker = document.querySelector("#holy-haymaker");
var test = document.querySelector("#test");
var rollType = document.querySelectorAll(".roll-type");

var proficiencyBonus = 5;
var castingModifier = 5;
var spellAttack = proficiencyBonus + castingModifier;
var spellLevel;
var whatRoll;

test.addEventListener("click", function(event){

    var element = event.target;

    //to set the roll type
    if (element.matches(".roll-type")) {
        for (var i = 0; i < rollType.length; i++) {
            rollType[i].setAttribute("class", "plain roll-type");
        }
        whatRoll = element.getAttribute("data-attribute");
        console.log(whatRoll);
        element.setAttribute("class", "selected roll-type");

    //to display d20 roll based on roll type
    } else if (element.matches(".attack-spell")) {

        //if straight roll
        if (whatRoll === "normal") {

            var roll = Math.floor(Math.random() * 20 + 1);
            var result = roll + spellAttack;

            if (roll === 1) {
                document.getElementById("roll-result").setAttribute("class", "natural-1");
                document.getElementById("roll-result").textContent = "CRITICAL MISS! :(";
            } else if (roll === 20) {
                document.getElementById("roll-result").setAttribute("class", "natural-20");
                document.getElementById("roll-result").textContent = "CRITICAL HIT! :)";
            } else {
                document.getElementById("roll-result").setAttribute("class", "plain");
                document.getElementById("roll-result").textContent = "Dice Roll: " + result;
            }

        //if roll with advantage
        } else if (whatRoll === "adv") {

            var roll1 = Math.floor(Math.random() * 20 + 1);
            var roll2 = Math.floor(Math.random() * 20 + 1);
            var result1 = roll1 + spellAttack;
            var result2 = roll2 + spellAttack;

            if (roll1 === roll2 && roll1 === 1) {
                document.getElementById("roll-result").setAttribute("class", "natural-1");
                document.getElementById("roll-result").textContent = "CRITICAL MISS! :(";
            } else if ((roll1 === roll2 && roll1 === 20) || (roll1 > roll2 && roll1 === 20) || (roll1 < roll2 && roll2 === 20)) {
                document.getElementById("roll-result").setAttribute("class", "natural-20");
                document.getElementById("roll-result").textContent = "CRITICAL HIT :)";
            } else if (roll1 > roll2 || roll1 === roll2) {
                document.getElementById("roll-result").setAttribute("class", "plain");
                document.getElementById("roll-result").textContent = "Dice Roll: " + result1;
            } else if (roll1 < roll2) {
                document.getElementById("roll-result").setAttribute("class", "plain");
                document.getElementById("roll-result").textContent = "Dice Roll: " + result2;
            }

        //if roll with disadvantage
        } else if (whatRoll === "dis") {
            var roll1 = Math.floor(Math.random() * 20 + 1);
            var roll2 = Math.floor(Math.random() * 20 + 1);
            var result1 = roll1 + spellAttack;
            var result2 = roll2 + spellAttack;

            if (roll1 === roll2 && roll1 === 20) {
                document.getElementById("roll-result").setAttribute("class", "natural-20");
                document.getElementById("roll-result").textContent = "CRITICAL HIT! :)";
            } else if ((roll1 === roll2 && roll1 === 1) || (roll1 < roll2 && roll1 === 1) || (roll1 > roll2 && roll2 === 1)) {
                document.getElementById("roll-result").setAttribute("class", "natural-1");
                document.getElementById("roll-result").textContent = "CRITICAL MISS! :(";
            } else if (roll1 > roll2) {
                document.getElementById("roll-result").setAttribute("class", "plain");
                document.getElementById("roll-result").textContent = "Dice Roll: " + result2;
            } else if (roll1 < roll2 || roll1 === roll2) {
                document.getElementById("roll-result").setAttribute("class", "plain");
                document.getElementById("roll-result").textContent = "Dice Roll: " + result1;
            }
        }

        //if guiding bolt is selected
        if (element.matches("#guiding-bolt")) {
            var roll = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);

            for (i = 1; i < spellLevel; i ++) {
                roll += Math.floor(Math.random() * 6 + 1);
            }

            if (document.getElementById("roll-result").matches(".natural-20")) {
                if (!spellLevel) {
                    document.getElementById("damage-result").textContent = "Please select a spell level.";
                } else {
                    document.getElementById("damage-result").innerHTML = "Damage: " + roll*2 + " Radiant." + "<br> Advantage on next attack.";
                }
            } else if (document.getElementById("roll-result").matches(".natural-1")) {
                if (!spellLevel) {
                    document.getElementById("damage-result").textContent = "Please select a spell level.";
                } else {
                    document.getElementById("damage-result").innerHTML = "";
                }
            } else {
                if (!spellLevel) {
                    document.getElementById("damage-result").textContent = "Please select a spell level.";
                } else {
                    document.getElementById("damage-result").innerHTML = "Damage: " + roll + " Radiant." + "<br> Advantage on next attack.";
                }
            }

        //if holy haymaker is selected
        } else if (element.matches("#holy-haymaker")) {
            var roll = Math.floor(Math.random() * 10 + 1) + Math.floor(Math.random() * 10 + 1) + Math.floor(Math.random() * 10 + 1);

            for (i = 1; i < spellLevel; i ++) {
                roll += Math.floor(Math.random() * 10 + 1);
            }

            if (document.getElementById("roll-result").matches(".natural-20")) {
                if (!spellLevel) {
                    document.getElementById("damage-result").textContent = "Please select a spell level.";
                } else {
                    document.getElementById("damage-result").innerHTML = "Damage: " + roll*2 + " Necrotic.";
                }
            } else if (document.getElementById("roll-result").matches(".natural-1")) {
                if (!spellLevel) {
                    document.getElementById("damage-result").textContent = "Please select a spell level.";
                } else {
                    document.getElementById("damage-result").innerHTML = "";
                }
            } else {
                if (!spellLevel) {
                    document.getElementById("damage-result").textContent = "Please select a spell level.";
                } else {
                    document.getElementById("damage-result").innerHTML = "Damage: " + roll + " Necrotic.";
                }
            }
        }
    }})
        
    
/*
normal.addEventListener("click", function(){
    var roll = Math.floor(Math.random() * 20 + 1);
    var result = roll + spellAttack;

    console.log(roll);

    if (roll === 1) {
        spellAttackRollResult.setAttribute("class", "natural-1");
        spellAttackRollResult.textContent = "CRITICAL MISS! :(";
    } else if (roll === 20) {
        spellAttackRollResult.setAttribute("class", "natural-20");
        spellAttackRollResult.textContent = "CRITICAL HIT! :)";
    } else {
        spellAttackRollResult.setAttribute("class", "plain");
        spellAttackRollResult.textContent = result;
    }
})

advantage.addEventListener("click", function(){
    var roll1 = Math.floor(Math.random() * 20 + 1);
    var roll2 = Math.floor(Math.random() * 20 + 1);
    var result1 = roll1 + spellAttack;
    var result2 = roll2 + spellAttack;

    console.log(roll1);
    console.log(roll2);

    if (roll1 === roll2 && roll1 === 1) {
        spellAttackRollResult.setAttribute("class", "natural-1");
        spellAttackRollResult.textContent = "CRITICAL MISS! :(";
    } else if ((roll1 === roll2 && roll1 === 20) || (roll1 > roll2 && roll1 === 20) || (roll1 < roll2 && roll2 === 20)) {
        spellAttackRollResult.setAttribute("class", "natural-20");
        spellAttackRollResult.textContent = "CRITICAL HIT :)";
    } else if (roll1 > roll2 || roll1 === roll2) {
        spellAttackRollResult.setAttribute("class", "plain");
        spellAttackRollResult.textContent = result1;
    } else if (roll1 < roll2) {
        spellAttackRollResult.setAttribute("class", "plain");
        spellAttackRollResult.textContent = result2;
    }
})

disadvantage.addEventListener("click", function(){
    var roll1 = Math.floor(Math.random() * 20 + 1);
    var roll2 = Math.floor(Math.random() * 20 + 1);
    var result1 = roll1 + spellAttack;
    var result2 = roll2 + spellAttack;

    console.log(roll1);
    console.log(roll2);

    if (roll1 === roll2 && roll1 === 20) {
        spellAttackRollResult.setAttribute("class", "natural-20");
        spellAttackRollResult.textContent = "CRITICAL HIT! :)";
    } else if ((roll1 === roll2 && roll1 === 1) || (roll1 < roll2 && roll1 === 1) || (roll1 > roll2 && roll2 === 1)) {
        spellAttackRollResult.setAttribute("class", "natural-1");
        spellAttackRollResult.textContent = "CRITICAL MISS! :(";
    } else if (roll1 > roll2) {
        spellAttackRollResult.setAttribute("class", "plain");
        spellAttackRollResult.textContent = result2;
    } else if (roll1 < roll2 || roll1 === roll2) {
        spellAttackRollResult.setAttribute("class", "plain");
        spellAttackRollResult.textContent = result1;
    }
})
*/

skills.addEventListener("click", function(event){
    var element = event.target;

    if (element.matches(".skill")) {
        var modifier = element.getAttribute("data-modifier");
        var modifierNumber = parseInt(modifier);
        console.log(modifierNumber);
        var roll1 = Math.floor(Math.random() * 20 + 1);
        console.log(roll1);
        var roll2 = Math.floor(Math.random() * 20 + 1);
        console.log(roll2);
        var result1 = roll1 + modifierNumber;
        var result2 = roll2 + modifierNumber;
        console.log(result1, result2);
        if (roll1 === 1) {
            document.getElementById("skill-roll-1").setAttribute("class", "natural-1");
        } else if (roll2 === 1) {
            document.getElementById("skill-roll-2").setAttribute("class", "natural-1");
        } else if (roll1 === 20) {
            document.getElementById("skill-roll-1").setAttribute("class", "natural-20");
        } else if (roll2 === 20) {
            document.getElementById("skill-roll-2").setAttribute("class", "natural-20");
        } else {
            document.getElementById("skill-roll-1").setAttribute("class", "plain");
            document.getElementById("skill-roll-2").setAttribute("class", "plain");
        }
        document.getElementById("skill-roll-1").textContent = result1;
        document.getElementsByClassName("space")[0].textContent = " | ";
        document.getElementById("skill-roll-2").textContent = result2;
    }
})

savingThrows.addEventListener("click", function(event){
    var element = event.target;

    if (element.matches(".saving-throw")) {
        var modifier = element.getAttribute("data-modifier");
        var modifierNumber = parseInt(modifier);
        console.log(modifierNumber);
        var roll1 = Math.floor(Math.random() * 20 + 1);
        console.log(roll1);
        var roll2 = Math.floor(Math.random() * 20 + 1);
        console.log(roll2);
        var result1 = roll1 + modifierNumber;
        var result2 = roll2 + modifierNumber;
        console.log(result1, result2);
        if (roll1 === 1) {
            document.getElementById("saving-throw-roll-1").setAttribute("class", "natural-1");
        } else if (roll2 === 1) {
            document.getElementById("saving-throw-roll-2").setAttribute("class", "natural-1");
        } else if (roll1 === 20) {
            document.getElementById("saving-throw-roll-1").setAttribute("class", "natural-20");
        } else if (roll2 === 20) {
            document.getElementById("saving-throw-roll-2").setAttribute("class", "natural-20");
        } else {
            document.getElementById("saving-throw-roll-1").setAttribute("class", "plain");
            document.getElementById("saving-throw-roll-2").setAttribute("class", "plain");
        }
        document.getElementById("saving-throw-roll-1").textContent = result1;
        document.getElementsByClassName("space")[1].textContent = " | ";
        document.getElementById("saving-throw-roll-2").textContent = result2;
    }
})

spellLevels.addEventListener("click", function(event){
    var element = event.target;

    for (var i = 0; i < allSpellLevels.length; i++) {
        allSpellLevels[i].setAttribute("class", "plain spell-level");
    }

    if (element.matches(".spell-level")) {
        var level = element.getAttribute("data-level");
        
        element.setAttribute("class", "selected spell-level");

        spellLevel = parseInt(level);
    }
})

healingWord.addEventListener("click", function(){
    var roll = 0;
    for (i = 0; i < spellLevel; i ++) {
        roll += Math.floor(Math.random() * 4 + 1);
        console.log(roll);
    }
    console.log(roll);
    var result = roll + 5 + spellLevel + 2;
    var selfHealing = spellLevel + 2

    if (!spellLevel) {
        document.getElementsByClassName("space")[2].textContent = "Please select a spell level.";
    } else {
        document.getElementById("heals").textContent = "Heal: " + result;
        document.getElementsByClassName("space")[2].textContent = " | ";
        document.getElementById("self-heals").textContent = "Self Heal: " + selfHealing;
    }
})

cureWounds.addEventListener("click", function(){
    var roll = 0;
    for (i = 0; i < spellLevel; i ++) {
        roll += Math.floor(Math.random() * 8 + 1);
        console.log(roll);
    }
    console.log(roll);
    var result = roll + 5 + spellLevel + 2;
    var selfHealing = spellLevel + 2

    if (!spellLevel) {
        document.getElementsByClassName("space")[2].textContent = "Please select a spell level.";
    } else {
        document.getElementById("heals").textContent = "Heal: " + result;
        document.getElementsByClassName("space")[2].textContent = " | ";
        document.getElementById("self-heals").textContent = "Self Heal: " + selfHealing;
    }
})

/*
tollTheDead.addEventListener("click", function(){
    var noDamageRoll = Math.floor(Math.random() * 8 + 1) + Math.floor(Math.random() * 8 + 1) + Math.floor(Math.random() * 8 + 1);
    var damageRoll = Math.floor(Math.random() * 12 + 1) + Math.floor(Math.random() * 12 + 1) + Math.floor(Math.random() * 12 + 1);
    var blessedStrike = Math.floor(Math.random() * 8 + 1);

    document.getElementById("damage-result").innerHTML = "Damage: " + noDamageRoll + " | " + damageRoll + " Necrotic" + "<br>Blessed Strike: " + blessedStrike + " Radiant";
})

guidingBolt.addEventListener("click", function(){
    var roll = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);

    console.log(roll);

    for (i = 1; i < spellLevel; i ++) {
        roll += Math.floor(Math.random() * 6 + 1);
        console.log(roll);
    }

    if (!spellLevel) {
        document.getElementById("damage-result").textContent = "Please select a spell level.";
    } else {
        document.getElementById("damage-result").innerHTML = "Damage: " + roll + " Radiant." + "<br> Advantage on next attack.";
    }

})

holyHaymaker.addEventListener("click", function(){
    var roll = Math.floor(Math.random() * 10 + 1) + Math.floor(Math.random() * 10 + 1) + Math.floor(Math.random() * 10 + 1);

    console.log(roll);

    for (i = 1; i < spellLevel; i ++) {
        roll += Math.floor(Math.random() * 10 + 1);
        console.log(roll);
    }

    if (!spellLevel) {
        document.getElementById("damage-result").textContent = "Please select a spell level.";
    } else {
        document.getElementById("damage-result").innerHTML = "Damage: " + roll + " Necrotic.";
    }
})
*/
