const request = require('request')
const geocode =(address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+ //encodeURIComponent --> avoid crashing when the address actually has a special char that means something in url 
    '.json?access_token=pk.eyJ1IjoiYWxhYWtoYWxlZDU1ODgiLCJhIjoiY2s0dnI4YWV2MDhuajNqbDJkMWp6cWQ1dSJ9.FZcEaRvCV1u4RC9GxpaARQ'
    request({url, json:true},(error,{body}) =>{
        if(error){
            callback('unable to connect to the services!', undefined)
        }else if (body.features.length === 0){
            callback('unable to find location', undefined)

        }else{
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name


                      })
        }


    })
}
module.exports= geocode