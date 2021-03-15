var spellAttackRollResult = document.querySelector("#spell-attack-roll-result");
var skillsRollResult = document.querySelector("#skills-roll-result");
var normal = document.querySelector("#normal");
var advantage = document.querySelector("#advantage");
var disadvantage = document.querySelector("#disadvantage");
var skills = document.querySelector(".skills");
var savingThrows = document.querySelector(".saving-throws");

var proficiencyBonus = 5;
var castingModifier = 5;
var spellAttack = proficiencyBonus + castingModifier;
var primaryStats;
//var skills;
var savingThrows;

normal.addEventListener("click", function(){
    var roll = Math.floor(Math.random() * 20 + 1);
    var result = roll + spellAttack;

    console.log(roll);

    if (roll === 1) {
        spellAttackRollResult.setAttribute("class", "natural-1");
        spellAttackRollResult.textContent = "CRITICAL MISS";
    } else if (roll === 20) {
        spellAttackRollResult.setAttribute("class", "natural-20");
        spellAttackRollResult.textContent = "CRITICAL HIT";
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
        spellAttackRollResult.textContent = "CRITICAL MISS";
    } else if ((roll1 === roll2 && roll1 === 20) || (roll1 > roll2 && roll1 === 20) || (roll1 < roll2 && roll2 === 20)) {
        spellAttackRollResult.setAttribute("class", "natural-20");
        spellAttackRollResult.textContent = "CRITICAL HIT";
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
        spellAttackRollResult.textContent = "CRITICAL HIT";
    } else if ((roll1 === roll2 && roll1 === 1) || (roll1 < roll2 && roll1 === 1) || (roll1 > roll2 && roll2 === 1)) {
        spellAttackRollResult.setAttribute("class", "natural-1");
        spellAttackRollResult.textContent = "CRITICAL MISS";
    } else if (roll1 > roll2) {
        spellAttackRollResult.setAttribute("class", "plain");
        spellAttackRollResult.textContent = result2;
    } else if (roll1 < roll2 || roll1 === roll2) {
        spellAttackRollResult.setAttribute("class", "plain");
        spellAttackRollResult.textContent = result1;
    }
})

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

