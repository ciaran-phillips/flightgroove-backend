const assert = require('assert');

describe('LivePricingProcessor', function () {
    describe('#transform()', function () {
        const LivePricingProcessor = require('../../api/postprocessors/livePricingProcessor.js');
        
        it('should lowercase keys of flat objects', function () {
            const testData = flatObject();
            const processor = new LivePricingProcessor;

            const result = processor.transform(testData.input);

            assert.deepStrictEqual(testData.expected, result);
        });

        
        it('should lowercase keys of nested objects', function () {
            const testData = nestedObject();
            const processor = new LivePricingProcessor;

            const result = processor.transform(testData.input);

            assert.deepStrictEqual(testData.expected, result);
        });

        
        it('should lowercase keys of objects in complicated object/array trees', function () {
            const testData = objectWithComplexArrays();
            const processor = new LivePricingProcessor;

            const result = processor.transform(testData.input);

            assert.deepStrictEqual(testData.expected, result);
        });


        function flatObject() {
            return {
                input : {
                    "UpperCamelCase" : "UpperCamelCase",
                    "lowercase" : 5,
                    "ALLCAPS" : "ALLCAPS_VALUE",
                    "iMixeD" : "iMixeD",
                    "23No_letter_at_start" : "23No letter at start value",
                    "UpperCamelCase2" : "UpperCamelCase"
                },
                expected : {
                    "upperCamelCase" : "UpperCamelCase",
                    "lowercase" : 5,
                    "aLLCAPS" : "ALLCAPS_VALUE",
                    "iMixeD" : "iMixeD",
                    "23No_letter_at_start" : "23No letter at start value",
                    "upperCamelCase2" : "UpperCamelCase"
                }
            }
        }

        function nestedObject() {
            return {
                input : {
                    "UpperCamelCase" : "UpperCamelCase",
                    "Nested" : {
                        "FirstLevelOne" : "Nested one",
                        "FirstLevelTwo" : {
                            "SecondLevelOne" : "second level one",
                            "SecondLevelTwo" : "second level two",
                        },
                        "FirstLevelThree" : "Nested two",
                        "FirstLevelFour" : {
                            "SecondLevelOne" : {
                                "ThirdLevelOne" : "third level one"
                            }
                        },
                    },
                    "UpperCamelCase2" : "UpperCamelCase2"
                },
                expected : {
                    "upperCamelCase" : "UpperCamelCase",
                    "nested" : {
                        "firstLevelOne" : "Nested one",
                        "firstLevelTwo" : {
                            "secondLevelOne" : "second level one",
                            "secondLevelTwo" : "second level two",
                        },
                        "firstLevelThree" : "Nested two",
                        "firstLevelFour" : {
                            "secondLevelOne" : {
                                "thirdLevelOne" : "third level one"
                            }
                        },
                    },
                    "upperCamelCase2" : "UpperCamelCase2"
                }
            }
        }

        function objectWithComplexArrays() {
            return {
                input : {
                    "ArrayOfObject" : [
                        {
                            "ObjectInArrayOne" : "Object in array",
                            "ObjectInArrayTwo" : "Object in array"
                        }
                    ],
                    "ArrayOfArrays" : [
                        [
                            { "Object" : "Object"},
                            { "Object" : "Object"}
                        ],
                        [ 
                            23, 43, 54
                        ],
                        [ 
                            [
                                4,
                                { "Object" : "Object"}
                            ]
                        ]
                    ]
                },
                expected : {
                    "arrayOfObject" : [
                        {
                            "objectInArrayOne" : "Object in array",
                            "objectInArrayTwo" : "Object in array"
                        }
                    ],
                    "arrayOfArrays" : [
                        [
                            { "object" : "Object"},
                            { "object" : "Object"}
                        ],
                        [ 
                            23, 43, 54
                        ],
                        [ 
                            [
                                4,
                                { "object" : "Object"}
                            ]
                        ]
                    ]
                }
            }
        }
    });
});
