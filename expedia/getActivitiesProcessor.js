module.exports = class GetActivitiesProcessor {
    process(data) {
        return {
            destination: data.destination,
            fullName: data.fullName,
            activities: this._processActivities(data.activities)
        }
    }

    _processActivities(activities) {
        if (typeof activities === 'undefined' || !Array.isArray(activities)) {
            return []
        }
        return activities
            .filter((activity) => {
                return !this._isTransfer(activity)
            })
            .map((activity) => {
                return {
                    id: activity.id,
                    title: activity.title,
                    imageUrl: activity.imageUrl,
                    fromPrice: activity.fromPrice.replace('$', '€'),
                    fromPriceLabel: activity.fromPriceLabel,
                    duration: activity.duration,
                    supplierName: activity.supplierName
                };
            });
    }

    _isTransfer(activity) {
        return (activity.categories.indexOf('Shared Transfers') !== -1) || 
            (activity.categories.indexOf('Private Transfers') !== -1);
    }
}