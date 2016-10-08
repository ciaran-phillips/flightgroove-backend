"use strict"

const moment = require('moment');


module.exports = class DatesForRouteProcessor {

    transform(data) {
        const outgoingDates = this._getOutgoingDates(data.Dates);
        const columnHeaders = outgoingDates.map((date) => {
            return (date === null) ? null : this._formatDate(date);
        });
        return {
            columnHeaders : columnHeaders,
            rows : this._getRows(data.Dates.slice(1), outgoingDates.slice(1))
        };
    }

    _getOutgoingDates(dateTable) {
        return dateTable[0].map((element) => {
            return (element === null) ? null : element.DateString;
        });
    }

    _getRows(dateTable, outgoingDates) {
        return dateTable.map((row) => {
            const head = row[0];
            const tail = row.slice(1);
            const inboundDate = head.DateString;
            const rowHeader = this._formatDate(inboundDate);
            return {
                rowHeader : rowHeader,
                cells : this._getCells(tail, inboundDate, outgoingDates)
            }
        });
    }

    _getCells(row, inboundDate, outgoingDates) {
        return row.map((element, index) => {
            if (element === null) {
                return null;
            }
            else {
                return {
                    priceCredits : element.MinPrice,
                    priceDisplay : element.MinPrice.toString(),
                    outboundDate : outgoingDates[index],
                    inboundDate : inboundDate
                };
            }
        });
    }

    _formatDate(date) {
        return moment(date).format("MMM DD");
    }
}

