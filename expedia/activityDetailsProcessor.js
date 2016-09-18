module.exports = class ActivityDetailsProcessor {
    process(rawDetails) {
        const fieldsToKeep = [
            "id",
            "title",
            "description",
            "images",
            "highlights",
            "fromPrice",
            "fromPriceLabel",
            "duration",
            "inclusions",
            "exclusions",
            "cancellationPolicyText",
            "knowBeforeYouBook",
            "address",
            "location"
        ];
        let details = {};

        for (let key in rawDetails) {
            if (fieldsToKeep.indexOf(key) !== -1) {
                details[key] = rawDetails[key];
            }
        }
        return details;
    }
}