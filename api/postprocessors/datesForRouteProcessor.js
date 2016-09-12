"use strict"


module.exports = class DatesForRouteProcessor {

    transform(data) {
        return {
            grid : {
                columnHeaders : this._getColumnHeaders(data.Dates),
                rows : this._getRows(data.Dates.slice(1))
            }
        };
    }

    _getColumnHeaders(dateTable) {
        return dateTable[0].map((element) => {
            return (element === null) ? null : element.DateString;
        });
    }

    _getRows(dateTable) {
        return dateTable.map((row) => {
            const head = row[0];
            const tail = row.slice(1);
            return {
                rowHeader : head.DateString,
                cells : this._getCells(tail)
            }
        });
    }

    _getCells(row) {
        return row.map((element) => {
            if (element === null) {
                return null;
            }
            else {
                return {
                    priceCredits : element.MinPrice,
                    priceDisplay : element.MinPrice.toString()
                };
            }
        });
    }
}

