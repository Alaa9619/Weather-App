const request = require('request')
const url = 'https://api.darksky.net/forecast/c869d2ed3aea4f1ec32c97bfdef39f2d/37.8267,-122.4233?lang=ar'
request({url:url, json: true}, (error, response) => {
    console.log(response.body.daily.data[0].summary+' it is currently a '+response.body.currently.temperature+' degreees out. there is a chance '+response.body.currently.precipProbability+' to rain')

})