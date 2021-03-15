var spellAttackRollResult = document.querySelector("#spell-attack-roll-result");
var normal = document.querySelector("#normal");
var advantage = document.querySelector("#advantage");
var disadvantage = document.querySelector("#disadvantage");

var proficiencyBonus = 5;
var castingModifier = 5;
var spellAttack = proficiencyBonus + castingModifier;
var primaryStats;
var skills;
var savingThrows;

normal.addEventListener("click", function(){
    var result = Math.floor(Math.random() * 20 + 1 + spellAttack);
    spellAttackRollResult.textContent = result;
})

advantage.addEventListener("click", function(){
    var result1 = Math.floor(Math.random() * 20 + 1 + spellAttack);
    var result2 = Math.floor(Math.random() * 20 + 1 + spellAttack);
    console.log(result1);
    console.log(result2);
    if (result1 > result2) {
        spellAttackRollResult.textContent = result1;
    } else {
        spellAttackRollResult.textContent = result2;
    }
})

disadvantage.addEventListener("click", function(){
    var result1 = Math.floor(Math.random() * 20 + 1 + spellAttack);
    var result2 = Math.floor(Math.random() * 20 + 1 + spellAttack);
    console.log(result1);
    console.log(result2);
    if (result1 > result2) {
        spellAttackRollResult.textContent = result2;
    } else {
        spellAttackRollResult.textContent = result1;
    }
})