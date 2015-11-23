/// <reference path="../../merges/android/scripts/platformOverrides.js" />
require.config({
    paths: {
        platformOverrides_android: '..\..\merges\android\scripts\platformOverrides'
    }
});

require(["test", "person"], function (test, person, poA) {
    var te = new test.testFunc();
    te.A;
    
    var t = new test.testFunc();
    
});

