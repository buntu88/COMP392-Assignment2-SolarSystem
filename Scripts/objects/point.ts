/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // POINT CLASS ++++++++++++++++++++++++++++++++++++++++++
    //Last Modified by      Vishal Guleria
    //Date last Modified    February 25,2016
    //Program description   COMP392 - Assignment 2 - Solar System with 5 planets and 1 planet with 2 moons. Used 2 Cameras for the view and can be changed on run time via GUI.    
    //Revision History      v08

    export class Point {
        public x: number;
        public y: number;
        public z: number;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(x: number, y: number, z: number) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
    }
}
