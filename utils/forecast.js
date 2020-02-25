const request = require('request')
const forecast = (latitude, longitude, callback) =>{
const url = 'https://api.darksky.net/forecast/c869d2ed3aea4f1ec32c97bfdef39f2d/'+ latitude +','+ longitude
request({url: url, json: true },(error,response)=>{
    if(error){ //error occures when there is no internet connection
     callback('unable to connect to weather app!', undefined)
    } else if(response.body.error){ 
        callback('unable to find location', undefined) //error when we don't provide Latitude
    }else{
        callback(undefined, response.body.daily.data[0].summary +' it is currently a '+response.body.currently.temperature+' degreees out. there is a chance '+response.body.currently.precipProbability+' to rain')
    }
})
}
module.exports= forecast