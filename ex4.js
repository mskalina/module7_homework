function Electrodevice(power){
  this.power = power+' Watt',
  this.isPlug = 'unplug',
  this.plug = function(){
    this.isPlug ='plug'
  }
  this.unplug = function(){
    this.isPlug ='unplug'
  }
}
  
function Kettle(power) {
  this.type = 'Kettle',
  this.power = power+' Watt',
  this.timeToOn = '',
  this.setTime = function (h, m){
    this.timeToOn = h +' hours '+m+' minutes'
    console.log(`Sheduled switch on: ${h} hours and ${m} minutes`)
  }
}

Kettle.prototype = new Electrodevice()

function Iron(power) {
  this.type = 'Iron',
  this.power = power+' Watt',
  this.autoOff = '15 min',
  this.setAutoOff = function (m){
    this.autoOff = m+' minutes'
    console.log(`Auto Off set on ${m} minutes`)
  }  
}

Iron.prototype = new Electrodevice()

const kettle1 = new Kettle (1400)
const iron1 = new Iron (2200)

console.log(kettle1)
kettle1.setTime(15,30)
console.log(kettle1)
iron1.plug()
console.log(iron1)
