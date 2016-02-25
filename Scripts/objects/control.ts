/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    //Last Modified by      Vishal Guleria
    //Date last Modified    February 25,2016
    //Program description   COMP392 - Assignment 2 - Solar System with 5 planets and 1 planet with 2 moons. Used 2 Cameras for the view and can be changed on run time via GUI.    
    //Revision History      v08
    
    
    export class Control { 
        //PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++
        public Camera: number;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(Camera: number) {
            this.Camera = Camera;
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
       
    }
}
