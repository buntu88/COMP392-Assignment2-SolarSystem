var config;
(function (config) {
    //Last Modified by      Vishal Guleria
    //Date last Modified    February 25,2016
    //Program description   COMP392 - Assignment 2 - Solar System with 5 planets and 1 planet with 2 moons. Used 2 Cameras for the view and can be changed on run time via GUI.    
    //Revision History      v12
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 1280;
        Screen.HEIGHT = 720;
        Screen.RATIO = 16 / 9;
        return Screen;
    })();
    config.Screen = Screen;
})(config || (config = {}));

//# sourceMappingURL=screen.js.map
