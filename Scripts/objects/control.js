/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    //Last Modified by      Vishal Guleria
    //Date last Modified    February 25,2016
    //Program description   COMP392 - Assignment 2 - Solar System with 5 planets and 1 planet with 2 moons. Used 2 Cameras for the view and can be changed on run time via GUI.    
    //Revision History      v12
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(Camera) {
            this.Camera = Camera;
        }
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));

//# sourceMappingURL=control.js.map
