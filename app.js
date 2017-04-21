var health = 100;
var hits = 0;
var block = false;
var blockStrength = 0;
var docR = document.getElementById("result")
var docH = document.getElementById("hit")
var docA = document.getElementById("armor")
var docS = document.getElementById("shield")
var docF = document.getElementById("forcefield")


var Item = function (name, modifier, description) {
  this.name = name;
  this.modifier = modifier;
  this.description = description;
}

var item = [{
  armor: new Item("armor", .3, "Low Strength")
}, {
  shield: new Item("shield", .6, "Medium Strength")
}, {
  forcefeild: new Item("forcefield", .9, "High Strength")
}]




function addMods(type) {
  for (var i = 0; i < item.length; i++) {
    var curI = item[i];
    if (type === "armor") {
      block = true
      blockStrength = .3
      docA.disabled = true
    }
    if (type === "shield") {
      block = true
      blockStrength = .6
      docS.disabled = true
    }
    if (type === "forcefield") {
      block = true
      blockStrength = .9
      docF.disabled = true
    }
  }
}





function damage(hit) {
  if (health >= 1) {
    if (hit === "slap") {
      health -= 1
      health = Math.floor(health)
      hits += 1
      checkBlock()
      dead()
    }
    if ((hit === "punch")) {
      hits += 1
      health = Math.floor(health)
      if (health < 5) {
        health = 0
      }else{
        health -= 5
      }
      checkBlock()
      dead()
    }
    if ((hit === "kick")) {
      hits += 1
      health = Math.floor(health)
      if (health < 10) {
        health = 0
      }else{
        health -= 10
      }
      checkBlock()
      dead()
    }
  }
}


function checkBlock() {
  if (block) {
    health += blockStrength
    block = false
  }
}


function dead() {
  docR.innerHTML = health
  docH.innerHTML = hits
  if (health === 0) {
    document.getElementById("body").style.backgroundColor = "red";
  }
}

function reset() {
  health = 100;
  hits = 0;
  block = false
  docA.disabled = false
  docS.disabled = false
  docF.disabled = false
  docR.innerHTML = health
  docH.innerHTML = hits
  document.getElementById("body").style.backgroundColor = "white";
}