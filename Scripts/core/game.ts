/// <reference path="_reference.ts"/>

// MAIN GAME FILE

// THREEJS Aliases
import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import Geometry = THREE.Geometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Material = THREE.Material;
import Mesh = THREE.Mesh;
import Object3D = THREE.Object3D;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import Face3 = THREE.Face3;
import Point = objects.Point;
import CScreen = config.Screen;

//Custom Game Objects
import gameObject = objects.gameObject;

var scene: Scene;
var renderer: Renderer;
var camera1: PerspectiveCamera;
var camera2: PerspectiveCamera;
var axes: AxisHelper;
var cube: Mesh;
var plane: Mesh;
var sphere: Mesh;
var ambientLight: AmbientLight;
var spotLight: SpotLight;
var control: Control;
var gui: GUI;
var stats: Stats;
var step: number = 0;
var cubeGeometry:CubeGeometry;
var cubeMaterial:LambertMaterial;
var sun;
var iplanet1;
var iplanet2;
var iplanet3;
var iplanet4;
var iplanet5;
var iplanet6;
var iplanet7;
var planet1;
var planet2;
var planet3;
var planet4;
var planet5;
var planet6;
var planet7;

function init() {
    // Instantiate a new Scene object
    scene = new Scene();

    setupRenderer(); // setup the default renderer
	
    setupCamera(); // setup the camera
	
    // add an axis helper to the scene
    axes = new AxisHelper(100);
    scene.add(axes);
    console.log("Added Axis Helper to scene...");
    
    
    var geometry = new THREE.SphereGeometry( 10, 32, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    sun = new THREE.Mesh( geometry );
    sun.position.set(0, 0, 0);
    
    
    var geometry1 = new THREE.SphereGeometry( .5, 32, 32 );
    var material1 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    iplanet1 = new THREE.Mesh( );
    planet1 = new THREE.Mesh( geometry1, material1 );
    iplanet1.position.set(0, 0, 0);
    planet1.position.set(15, 0, 0);
    
    var geometry2 = new THREE.SphereGeometry( 1, 32, 32 );
    var material2 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    iplanet2 = new THREE.Mesh(  );
    planet2 = new THREE.Mesh( geometry2, material2 );
    iplanet2.position.set(0, 0, 0);
    planet2.position.set(25, 0, 0);
    
    var geometry3 = new THREE.SphereGeometry( 1.5, 32, 32 );
    var material3 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    iplanet3 = new THREE.Mesh(  );
    iplanet3.position.set(0, 0, 0);
    planet3 = new THREE.Mesh( geometry3, material3 );
    planet3.position.set(40, 0, 0);
    
    var geometry4 = new THREE.SphereGeometry( 4, 32, 32 );
    var material4 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    iplanet4 = new THREE.Mesh( );
    iplanet4.position.set(0, 0, 0);
    planet4 = new THREE.Mesh( geometry4, material4 );
    planet4.position.set(70, 0, 0);
    
    var geometry5 = new THREE.SphereGeometry( 1, 32, 32 );
    var material5 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    iplanet5 = new THREE.Mesh(  );
    iplanet5.position.set(0, 0, 0);
    planet5 = new THREE.Mesh( geometry5, material5 );
    planet5.position.set(100, 0, 0);
    
    var geometry6 = new THREE.SphereGeometry( 1.2, 32, 32 );
    var material6 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    iplanet6 = new THREE.Mesh(  );
    iplanet6.position.set(0, 0, 0);
    planet6 = new THREE.Mesh( geometry6, material6 );
    planet6.position.set(10, 0, 0);
    
    var geometry7 = new THREE.SphereGeometry( .8, 32, 32 );
    var material7 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    iplanet7 = new THREE.Mesh( );
    iplanet7.position.set(0, 0, 0);
    planet7 = new THREE.Mesh( geometry7, material7 );
    planet7.position.set(15, 0, 0);
    

    iplanet1.add(planet1);
    iplanet2.add(planet2);
    iplanet3.add(planet3);
    iplanet4.add(planet4);
    iplanet5.add(planet5);
    planet4.add(iplanet6);
    planet4.add(iplanet7);
    iplanet6.add(planet6);
    iplanet7.add(planet7);

    //scene.add( sun );
    scene.add( iplanet1 );
    scene.add( iplanet2 );
    scene.add( iplanet3 );
    scene.add( iplanet4 );
    scene.add( iplanet5 );
    
    
    
    
    
    
    //Add a Plane to the Scene
    // plane = new gameObject(
    //     new PlaneGeometry(20, 20, 1, 1),
    //     new LambertMaterial({ color: 0xff00ff }),
    //     0, 0, 0);

    // plane.rotation.x = -0.5 * Math.PI;

    // scene.add(plane);
    // console.log("Added Plane Primitive to scene...");
    
    // //Add a Cube to the Scene
    // cubeMaterial = new LambertMaterial({color:0x00ff00});
    // cubeGeometry = new CubeGeometry(2, 2, 2);
    // cube = new Mesh(cubeGeometry, cubeMaterial);
    // cube.castShadow = true;
    // cube.receiveShadow = true;
    // cube.position.y = 1;
    
    // scene.add(cube);
    // console.log("Added Cube Primitive to scene...");
    
    
    // // Add an AmbientLight to the scene
    // ambientLight = new AmbientLight(0x090909);
    // scene.add(ambientLight);
    // console.log("Added an Ambient Light to Scene");
	
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(0, 0, 0);
    spotLight.lookAt(planet4);
    spotLight.castShadow = true;
    spotLight.shadowMapWidth = 1024;
    spotLight.shadowMapHeight = 1024;

    spotLight.shadowCameraNear = 500;
    spotLight.shadowCameraFar = 4000;
    spotLight.shadowCameraFov = 30;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    
    // add controls
    gui = new GUI();
    control = new Control(0);
    addControl(control);

    // Add framerate stats
    addStatsObject();
    console.log("Added Stats to scene...");

    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    
    window.addEventListener('resize', onResize, false);
}

function onResize(): void {
    camera1.aspect = CScreen.RATIO;
    camera2.aspect = CScreen.RATIO;
    //camera.aspect = window.innerWidth / window.innerHeight;
    camera1.updateProjectionMatrix();
    camera2.updateProjectionMatrix();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
}

function addControl(controlObject: Control): void {
    gui.add(controlObject, 'rotationSpeed',-0.5,0.5);
}

function addStatsObject() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}

// Setup main game loop
function gameLoop(): void {
    stats.update();

    iplanet1.rotation.y += 0.05;
    iplanet2.rotation.y += 0.04;
    iplanet3.rotation.y += 0.03;
    iplanet4.rotation.y += 0.02;
    iplanet5.rotation.y += 0.01;
    iplanet6.rotation.y += 0.03;
    iplanet7.rotation.y += 0.02;
    
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
	
    // render the scene
    renderer.render(scene, camera1);
}

// Setup default renderer
function setupRenderer(): void {
    renderer = new Renderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}

// Setup main camera for the scene
function setupCamera(): void {
    camera1 = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera1.position.x = 0;
    camera1.position.y = 50;
    camera1.position.z = 150;
    camera1.lookAt(new Vector3(0, -25, 0));
    console.log("Finished setting up Camera...");
    
    
        camera2 = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera2.position.x = 0;
    camera2.position.y = 30;
    camera2.position.z = 50;
    camera2.lookAt(new Vector3(0, 0, 0));
    console.log("Finished setting up Camera...");
}
