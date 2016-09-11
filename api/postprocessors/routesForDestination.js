"use strict"


module.exports = class RoutesForDestinationProcessor {
    constructor() {
        this.currencyFormatter = null;
        this.airportLocator = null;
    }

    /**
     * Manually override the default currency formatter dependency
     * 
     * @param object formatter
     *      object exposing a function in the form:
     *          format(Int amount) -> String
     */
    setCurrencyFormatter(formatter) {
        this.currencyFormatter = formatter;
    }

    /**
     * Manually override the default airport locator dependency
     * 
     * @param object locator
     *      object exposing a function in the form:
     *          getLocation(String iataCode) -> [Float, Float]
     */
    setAirportLocator(locator) {
        this.airportLocator = locator;
    }

    /**
     * Get a small summary of available routes
     * 
     * @param object data
     *      Data returned from a skyscanner BrowseRoutes call
     * 
     * @return object
     *      Result in the form { routes : routesArray }
     */
    transform(data) {
        const self = this;
        const routes = data.Routes.map((element) => {
            return self._transformRoute(element, data.Places);
        });
        
        return {
            routes
        };
    }

    _transformRoute(route, placeList) {
        return {
            priceCredits : route.Price,
            priceDisplay : this._getCurrencyFormatter().format(route.Price),
            destination : this._transformPlace(route.DestinationId, placeList)
        }
    }

    _transformPlace(placeId, placeList) {
        const place = placeList
            .filter((el, i, arr) => {
                return el.PlaceId === placeId;
            })
            .pop();

        const location = this._getAirportLocator().getLocation(place.IataCode);

        return {
            placeId : placeId,
            airportCode : place.IataCode,
            cityName : place.CityName,
            countryName : place.CountryName,
            latitude : location.latitude,
            longitude : location.longitude
        };
    }


    _getCurrencyFormatter() {
        return this.currencyFormatter;
    }


    _getAirportLocator() {
        return this.airportLocator;
    }
}

