/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    export class gameObject extends THREE.Mesh {
        //Last Modified by      Vishal Guleria
        //Date last Modified    February 25,2016
        //Program description   COMP392 - Assignment 2 - Solar System with 5 planets and 1 planet with 2 moons. Used 2 Cameras for the view and can be changed on run time via GUI.    
        //Revision History      v12
        
        //PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++
        private _geometry: THREE.Geometry;
        private _material: THREE.Material;
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(geometry: THREE.Geometry, material: THREE.Material, x: number, y: number, z: number) {
            super(geometry, material);
            this._geometry = geometry;
            this._material = material;
            this.position.x = x;
            this.position.y = y;
            this.position.z = z;
            this.receiveShadow = true;
            this.castShadow = true;
        }
    }
}