const fs = require('fs')
const abilityScores = require('./5e-SRD-Ability-Scores.json')
const classes = require('./5e-SRD-Classes.json')
const conditions = require('./5e-SRD-Conditions.json')
const damageTypes = require('./5e-SRD-Damage-Types.json')
const equipmentCategories = require('./5e-SRD-Equipment-Categories.json')
const equipment = require('./5e-SRD-Equipment.json')
const features = require('./5e-SRD-Features.json')
const languages = require('./5e-SRD-Languages.json')
const levels = require('./5e-SRD-Levels.json')
const magicSchools = require('./5e-SRD-Magic-Schools.json')
const monsters = require('./5e-SRD-Monsters.json')
const proficiencies = require('./5e-SRD-Proficiencies.json')
const races = require('./5e-SRD-Races.json')
const skills = require('./5e-SRD-Skills.json')
const spellcasting = require('./5e-SRD-Spellcasting.json')
const spells = require('./5e-SRD-Spells.json')
const startingEquipment = require('./5e-SRD-StartingEquipment.json')
const subClasses = require('./5e-SRD-Subclasses.json')
const subraces = require('./5e-SRD-Subraces.json')
const traits = require('./5e-SRD-Traits.json')
const weaponProperties = require('./5e-SRD-Weapon-Properties.json')
const equipLinks = require('./equipLink.json')
const fetch = require('node-fetch')

// const files = [
//   abilityScores,
//   classes,
//   conditions,
//   damageTypes,
//   equipmentCategories,
  // equipment,
//   features,
//   languages,
//   levels,
//   magicSchools,
//   monsters,
//   proficiencies,
//   races,
//   skills,
//   spellcasting,
//   spells,
//   startingEquipment,
//   subraces,
//   traits,
//   weaponProperties,
// ]



// const abilityScoresObj = {}

// abilityScores.forEach(as=> {
//   abilityScoresObj[as.name] = as
// })

// fs.writeFile('abilityScores.json', JSON.stringify(abilityScoresObj), 'utf8', (err)=> {
//   if(err) console.log(err)
//   else console.log('done with abilityScores')
// })


// files.forEach((file, index) => {
//   const obj = {}
//   file.forEach((x) => {
//     obj[x.name] = x
//   })
//   fs.writeFile(`${index}.json`, JSON.stringify(obj), 'utf8', (err)=>{
//     if(err) console.log(`${index} errored`)
//     else {
//       console.log(`${index} success`)
//   }
//   })
// })


// let spellsobj = {}

// spells.forEach(spell=> {
//   let name = spell.name.replace(/\W/g, '')
//   spellsobj[name] = spell
// })

// fs.writeFile('spells.json', JSON.stringify(spellsobj), 'utf8', (err)=> {
//     if(err) console.log('error')
//     else console.log('spellsobj created')
//   })

// let featureObj = {}
// features.forEach(feat => {
//   let name = feat.name.replace(/\W/g, '_').toLowerCase().replace(/__/g, '_')
//   featureObj[name] = feat
// })
// fs.writeFile('features.json', JSON.stringify(featureObj), 'utf8', (err)=> {
//       if(err) console.log('error')
//       else console.log('featureObj created')
//     })

// let monstersObj = {}
// monsters.forEach(monster=> {
//   console.log(monster.name)
//   let name = monster.name.replace(/\W/g, '_').toLowerCase().replace(/__/g, '_')
//   monstersObj[name] = monster
// })

// fs.writeFile('monsters.json', JSON.stringify(monstersObj), 'utf8', (err)=> {
//       if(err) console.log('error')
//       else console.log('monsters created')
//     })

let subRacesObj = {}
subraces.forEach(prof=> {
  console.log(prof.name)
  let name = prof.name.replace(/\W/g, '_').toLowerCase().replace(/__/g, '_')
  subRacesObj[name] = prof
})

fs.writeFile('subraces.json', JSON.stringify(subRacesObj), 'utf8', (err)=> {
      if(err) console.log('error')
      else console.log('subraces created')
    })


// let spellCastingObj = {}

// spellcasting.forEach(spellcast => {
//   if(!spellCastingObj[spellcast.class.name]){
//     spellCastingObj[spellcast.class.name] = []
//   }
//     spellCastingObj[spellcast.class.name] = spellcast
// })

// fs.writeFile('spellcasting.json', JSON.stringify(spellCastingObj), 'utf8', (err)=> {
//       if(err) console.log('error')
//       else console.log('spellcasting created')
//     })

// let traitsObj = {}

// traits.forEach(trait => {
//   traitsObj[trait.name] = trait
// })

// fs.writeFile('traits.json', JSON.stringify(traitsObj), 'utf8', (err)=> {
//       if(err) console.log('error')
//       else console.log('traits created')
//     })

// let dataObj = {}

// async function fetchData(link) {
//   let res = await fetch(link)
//   let data = await res.json()
//   return data
// }

// fs.writeFile('equipLink.json', JSON.stringify(dataObj), 'utf8', (err=> {
//   if(err) console.log('error')
//     else console.log('traits created')
//   }))



// let equipObj = {}

// async function getEquipment(){
//   for(let equip in equipLinks){
//     equipObj[equip] = await fetchData(equipLinks[equip])
//   }
//   fs.writeFile('equipment.json', JSON.stringify(equipObj), 'utf8', (err=> {
//   if(err) console.log('error')
//     else console.log('equipment created')
//   }))
// }

// getEquipment()

// let equipObj = {}


// equipmentCategories.forEach(cat=>{
//   if(!equipObj[cat.name]){
//     equipObj[cat.name] = []
//   }
//   cat.equipment.forEach(equip=>{
//     equipObj[cat.name].push(equip.name)
//   })
// })

//   fs.writeFile('equipment-categories.json', JSON.stringify(equipObj), 'utf8', (err=> {
//   if(err) console.log('error')
//     else console.log('equipment created')
//   }))

// let weaponObj = {}

//weapons
//simple melee weapons
//simple ranged weapons
//martial melee weapons
//martial ranged weapons
//ammunition

// equipment.forEach(equip => {
//   let name = equip.name.replace(/\W/g, '_').toLowerCase().replace(/__/g, '_')
//   equipObj[name] = {}
//   equip.equipment.forEach(equip=>{
//     let fixedName = equip.name.replace(/\W/g, '_').toLowerCase().replace(/__/g, '_')
//     equipObj[name][fixedName] = equip.name
//   })
// })
let simpleMW = [
  'Club',
  'Dagger',
  'Greatclub',
  'Handaxe',
  'Javelin',
  'Light Hammer',
  'Mace',
  'QuarterStaff',
  'Sickle',
  'Spear',
]

let simpleRange = [
  'Crossbow, light',
  'Dart',
  'Shortbow',
  'Sling'
]

let martialMelee = [
  'Battleaxe',
  'Flail',
  'Glaive',
  'Greataxe',
  'Greatsword',
  'Halberd',
  'Lance',
  'Longsword',
  'Maul',
  'Morningstar',
  'Pike',
  'Rapier',
  'Scimitar',
  'Shortsword',
  'Trident',
  'War Pick',
  'Warhammer',
  'Whip',
]

let martialRanged = [
  'Blowgun',
  'Crossbow, hand',
  'Crossbow, heavy',
  'Longbow',
  'Net'
]

let ammunition = [
  'Arrow',
  'Blowgun needle',
  'Crossbow bolt',
  'Sling bullet'
]

// let simpleRangedObj = {}
// equipment.forEach(equip => {
//   if(simpleRange.indexOf(equip.name) > -1){
//     let name = equip.name.replace(/\W/g, '_').toLowerCase().replace(/__/g, '_')
//     simpleRangedObj[name] = equip
//   }
// })

// fs.writeFile('simple_ranged_weapons.json', JSON.stringify(simpleRangedObj), 'utf8', (err=> {
// if(err) console.log('error')
//   else console.log('martial_melee_weapons created')
// }))


// let martialMeleeObj = {}
// equipment.forEach(equip => {
//   if(martialMelee.indexOf(equip.name) > -1){
//     let name = equip.name.replace(/\W/g, '_').toLowerCase().replace(/__/g, '_')
//     martialMeleeObj[name] = equip
//   }
// })

// fs.writeFile('martial_melee_weapons.json', JSON.stringify(martialMeleeObj), 'utf8', (err=> {
// if(err) console.log('error')
//   else console.log('martial_melee_weapons created')
// }))

// let martialRangedObj = {}
// equipment.forEach(equip => {
//   if(martialRanged.indexOf(equip.name) > -1){
//     let name = equip.name.replace(/\W/g, '_').toLowerCase().replace(/__/g, '_')
//     martialRangedObj[name] = equip
//   }
// })

// fs.writeFile('martial_ranged_weapons.json', JSON.stringify(martialRangedObj), 'utf8', (err=> {
// if(err) console.log('error')
//   else console.log('martial_ranged_weapons created')
// }))

// let ammunitionObj = {}
// equipment.forEach(equip => {
//   if(ammunition.indexOf(equip.name) > -1){
//     let name = equip.name.replace(/\W/g, '_').toLowerCase().replace(/__/g, '_')
//     ammunitionObj[name] = equip
//   }
// })

// fs.writeFile('ammunition.json', JSON.stringify(ammunitionObj), 'utf8', (err=> {
// if(err) console.log('error')
//   else console.log('ammunition created')
// }))
























