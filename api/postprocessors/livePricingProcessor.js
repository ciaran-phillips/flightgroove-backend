"use strict"


module.exports = class LivePricingProcessor {


    /**
     * We're passing through the whole response for the moment, but converting 
     * everything to lowerCamelCase'
     */
    transform(response) {
        return this._traverse(response);
    }

    _traverse(leaf) {
        if (this._isObject(leaf)) {
            return this._transformObjectKeys(leaf);
        }
        else if (Array.isArray(leaf)) {
            return leaf.map((element) => this._traverse(element));
        }
        else {
            return leaf;
        }
    }

    _transformObjectKeys(object) {
        let newObject = {};
        for (let key in object) {
            const lowerCaseKey = this._toLowerCase(key);
            newObject[lowerCaseKey] = this._traverse(object[key]);
        }
        return newObject;
    }

    _toLowerCase(str) {
        const head = str.slice(0, 1);
        const tail = str.slice(1);
        return head.toLowerCase(head) + tail;
    }

    _isObject(val) {
        return (typeof val === 'object')
            && (!Array.isArray(val))
            && (val !== null);
    }
}

