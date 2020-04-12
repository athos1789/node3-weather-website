const request = require("request")

// const url = "http://api.weatherstack.com/current?access_key=a974efeb983ee25914ff573a64829dc6&query=New York?units=m"

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to weather service");
//     } else if (response.body.error) {
//         console.log("Unable to find location");
        
//     } else {
//         console.log("It is currently " + response.body.current.temperature + " degrees out, but it feels like " + response.body.current.feelslike + " degrees");
//     }
// })

const forecast = (callback) => {
    const url = "http://api.weatherstack.com/current?access_key=a974efeb983ee25914ff573a64829dc6&query=New York?units=m";
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback("Unable to connect to weather service", undefined)
        } else if (response.body.error) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, {
                temperature: response.body.current.temperature,
                feelsLike: response.body.current.feelslike
            })
        }
    })
}

module.exports = forecast;