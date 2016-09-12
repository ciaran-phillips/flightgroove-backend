"use strict"


module.exports = class LocationsForQueryProcessor {


    /**
     * Process location list to include only the stuff we need, in lowerCamelCase
     * 
     * @param object data
     *      Data returned from a skyscanner autosuggest call
     * 
     * @return object
     *      Result in the form { locations : locationArray }
     */
    transform(data) {
        return {
            locations : data.Places.map(this._transformLocation)
        };
    }

    _transformLocation(location) {
        return {
            placeId : location.PlaceId,
            placeName : location.PlaceName,
            countryName : location.CountryName
        };
    }
}

