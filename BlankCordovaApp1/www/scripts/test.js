define(function () {
    ///<summary>a test summary</summary>
    var testF = function () {
        /// this is A
        this.A = 10;
    }

    return {
        /// comment on number
        numberProperty: 23,
        childObject: {
            stringProperty: ""
        },
        
        testFunc: testF
    };
});