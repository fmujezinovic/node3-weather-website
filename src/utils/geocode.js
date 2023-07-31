
const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=2&access_token=pk.eyJ1IjoiZmFyaXMxIiwiYSI6ImNsa2xudDNycjA0NWszZms0bGN6MTdsczAifQ.NqfK0fAgsCMEQoTH7_JPlA'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to locations services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find loation. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode