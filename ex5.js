class Electrodevice{
  constructor (){
    this.isPlug = 'unplug'
  }
  plug() {
    this.isPlug='plug'
  }
  unplug() {
    this.isPlug='unplug'
  }
}
  
class Kettle extends Electrodevice {
  constructor(power){
    super();
    this.type = 'Kettle';
    this.power = power+' Watt';
    this.timeToOn = '';
  }
  setTime(h, m){
    this.timeToOn = h +' hours '+m+' minutes'
    console.log(`Sheduled switch on: ${h} hours and ${m} minutes`)
  }
}

class Iron extends Electrodevice{
  constructor (power){
    super();
    this.type = 'Iron';
    this.power = power+' Watt';
    this.autoOff = '15 min';
  }
  setAutoOff(m){
    this.autoOff = m+' minutes'
    console.log(`Auto Off set on ${m} minutes`)
  }  
}

const kettle1 = new Kettle (1400)
const iron1 = new Iron (2200)

console.log(kettle1)
kettle1.setTime(15,30)
console.log(kettle1)
iron1.plug()
console.log(iron1)