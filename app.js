const request = require('request')
const geocode= require('./utils/geocode')
const forecast= require('./utils/forecast')

// const url = 'https://api.darksky.net/forecast/c869d2ed3aea4f1ec32c97bfdef39f2d/37.8267'//,-122.4233 (should be added to the url for getting a useful data)
// request({url:url, json: true}, (error, response) => {// if you have a value of error there is no value of response and vice versa
//     if(error){ //error occures when there is no internet connection
//         console.log('unable to connect to weather app!')

//     }else if(response.body.error){ //error when we don't provide Latitude
//         console.log('unable to find location')

//     }else{
//     console.log(response.body.daily.data[0].summary +' it is currently a '+response.body.currently.temperature+' degreees out. there is a chance '+response.body.currently.precipProbability+' to rain')
//     }
// })
// request({url:mapURL, json:true},(error, response) => {
//     if(error){
//         console.log('unable to connect to the services!')
//     }else if(response.body.features.length === 0){
//         console.log('unable to find location')
//     }else{
//     console.log('log = '+ response.body.features[0].center[0]+' lat ='+response.body.features[0].center[1])
//     }
// })



forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})