const request = require('request')
const geocode= require('./utils/geocode')
const forecast= require('./utils/forecast')
const address = process.argv[2] // third item in it is the arg given by the user
// Callback chaining 
geocode(address, (error, data) =>{
  if(!address){
   return console.log('please provide the address first')
  }else{
  if(error){ // return allows you to stop when there is an error occures in the geocode
    return console.log(error)
  }
  forecast(data.latitude, data.longitude, (error, forecastData) => { //  because we have the same naming we change it to avoid overwriting
   if(error){ 
     return console.log(error)
   }
   console.log(data.location)
   console.log(forecastData)
  })
}
} )

