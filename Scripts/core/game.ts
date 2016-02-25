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
import DirectionalLight = THREE.DirectionalLight;

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
var spotLight1;
var spotLight2;
var spotLight3;
var spotLight4;
var spotLight5;
var spotLight6;
var spotLight7;
var spotLight8;
var control: Control;
var gui: GUI;
var stats: Stats;
var step: number = 0;
var cubeGeometry:CubeGeometry;
var cubeMaterial:LambertMaterial;
var sun;
var universe;
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
var cam: number;



function init() {
    // Instantiate a new Scene object
    scene = new Scene();

    setupRenderer(); // setup the default renderer
	
    setupCamera(); // setup the camera
	
    // add an axis helper to the scene
    axes = new AxisHelper(150);
    scene.add(axes);
    console.log("Added Axis Helper to scene...");
    
    // load a texture, set wrap mode to repeat
    var texture = new THREE.TextureLoader().load( "Texturers\1.png" );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 4, 4 );
    
    
    
    var geometry = new THREE.SphereGeometry( 8, 32, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    sun = new THREE.Mesh( geometry, material );
    sun.position.set(0, 0, 0);

    
    
    
    var geometry1 = new THREE.SphereGeometry( 0.5, 32, 32 );
    var material1 = new THREE.MeshLambertMaterial( {color: 0xE6E6E6 } );
    iplanet1 = new Mesh;
    planet1 = new THREE.Mesh( geometry1, material1 );
    iplanet1.position.set(0, 0, 0);
    planet1.position.set(30, 0, 0);
    
    
    var geometry2 = new THREE.SphereGeometry( 1, 32, 32 );
    var material2 = new THREE.MeshLambertMaterial( {color: 0xf0e7e7} );
    iplanet2 = new Mesh;
    planet2 = new THREE.Mesh( geometry2, material2 );
    iplanet2.position.set(0, 0, 0);
    planet2.position.set(35, 0, 0);
    
    var geometry3 = new THREE.SphereGeometry( 1.5, 32, 32 );
    var material3 = new THREE.MeshLambertMaterial( {color: 0xc99039} );
    iplanet3 = new Mesh;
    iplanet3.position.set(0, 0, 0);
    planet3 = new THREE.Mesh( geometry3, material3 );
    planet3.position.set(40, 0, 0);
    
    var geometry4 = new THREE.SphereGeometry( 4, 32, 32 );
    var material4 = new THREE.MeshLambertMaterial( {color: 0x0000A0 } );
    iplanet4 = new Mesh;
    iplanet4.position.set(0, 0, 0);
    planet4 = new THREE.Mesh( geometry4, material4 );
    planet4.position.set(70, 0, 0);
    planet4.castShadow = true;
planet4.receiveShadow = true
    
    var geometry5 = new THREE.SphereGeometry( 1, 32, 32 );
    var material5 = new THREE.MeshLambertMaterial( {color: 0xfff1d5} );
    iplanet5 = new Mesh;
    iplanet5.position.set(0, 0, 0);
    planet5 = new THREE.Mesh( geometry5, material5 );
    planet5.position.set(100, 0, 0);
    
    var geometry6 = new THREE.SphereGeometry( 1.2, 32, 32 );
    var material6 = new THREE.MeshLambertMaterial( {color: 0xFEFCD7 } );
    iplanet6 = new Mesh;
    iplanet6.position.set(0, 0, 0);
    planet6 = new THREE.Mesh( geometry6, material6 );
    planet6.position.set(10, 0, 0);
    planet6.castShadow = true;
    planet6.receiveShadow = true
    
    var geometry7 = new THREE.SphereGeometry( .8, 32, 32 );
    var material7 = new THREE.MeshLambertMaterial( {color: 0x5b5ddf} );
    iplanet7 = new Mesh;
    iplanet7.position.set(0, 0, 0);
    planet7 = new THREE.Mesh( geometry7, material7 );
    planet7.position.set(15, 0, 0);
    planet7.castShadow = true;
    planet7.receiveShadow = true
    



    iplanet1.add(planet1);
    iplanet2.add(planet2);
    iplanet3.add(planet3);
    iplanet4.add(planet4);
    iplanet5.add(planet5);
    planet4.add(camera2);
    planet4.add(iplanet6);
    planet4.add(iplanet7);
    iplanet6.add(planet6);
    iplanet7.add(planet7);

 
    scene.add( sun );
    scene.add( iplanet1 );
    scene.add( iplanet2 );
    scene.add( iplanet3 );
    scene.add( iplanet4 );
    scene.add( iplanet5 );
    
    
    

    spotLight1 = new SpotLight(0xffffff,2,200);
    spotLight1.position.set(15, 0, 0);
    spotLight1.lookAt(new Vector3(150, 0, 0));
    spotLight1.castShadow = true;
    spotLight1.shadowMapWidth = 1024;
    spotLight1.shadowMapHeight = 1024;
    spotLight1.shadowCameraNear = 1;
    spotLight1.shadowCameraFar = 1;
    spotLight1.angle =  Math.PI/2;
    spotLight1.shadowCameraVisible = true;

    spotLight2 = new SpotLight(0xffffff,2,200);
    spotLight2.position.set(-15, 0, 0);
    spotLight2.lookAt(new Vector3(-150, 0, 0));
    spotLight2.castShadow = true;
    spotLight2.shadowMapWidth = 1024;
    spotLight2.shadowMapHeight = 1024;
    spotLight2.shadowCameraNear = 1;
    spotLight2.shadowCameraFar = 1;
    spotLight2.angle = Math.PI/2;
    spotLight2.shadowCameraVisible = true;
   
    spotLight3 = new SpotLight(0xffffff,2,200);
    spotLight3.position.set(0, 0, 15);
    spotLight3.lookAt(new Vector3(0, 0, 150));
    spotLight3.castShadow = true;
    spotLight3.shadowMapWidth = 1024;
    spotLight3.shadowMapHeight = 1024;
    spotLight3.shadowCameraNear = 1;
    spotLight3.shadowCameraFar = 1;
    spotLight3.angle = Math.PI/2;
    spotLight3.shadowCameraVisible = true;
    
    spotLight4 = new SpotLight(0xffffff,2,200);
    spotLight4.position.set(0, 0, -15);
    spotLight4.lookAt(new Vector3(0, 0, -150));
    spotLight4.castShadow = true;
    spotLight4.shadowMapWidth = 1024;
    spotLight4.shadowMapHeight = 1024;
    spotLight4.shadowCameraNear = 1;
    spotLight4.shadowCameraFar = 1;
    spotLight4.angle = Math.PI/2;
    spotLight4.shadowCameraVisible = true;
    
    
    spotLight5 = new SpotLight(0xffffff,2,200);
    spotLight5.position.set(15, 0, 15);
    spotLight5.lookAt(new Vector3(150, 0, 150));
    spotLight5.castShadow = true;
    spotLight5.shadowMapWidth = 1024;
    spotLight5.shadowMapHeight = 1024;
    spotLight5.shadowCameraNear = 1;
    spotLight5.shadowCameraFar = 1;
    spotLight5.angle =  Math.PI/2;
    spotLight5.shadowCameraVisible = true;

    spotLight6 = new SpotLight(0xffffff,2,200);
    spotLight6.position.set(-15, 0, 15);
    spotLight6.lookAt(new Vector3(-150, 0, -150));
    spotLight6.castShadow = true;
    spotLight6.shadowMapWidth = 1024;
    spotLight6.shadowMapHeight = 1024;
    spotLight6.shadowCameraNear = 1;
    spotLight6.shadowCameraFar = 1;
    spotLight6.angle = Math.PI/2;
    spotLight6.shadowCameraVisible = true;
   
    spotLight7 = new SpotLight(0xffffff,2,200);
    spotLight7.position.set(15, 0, -15);
    spotLight7.lookAt(new Vector3(150, 0, -150));
    spotLight7.castShadow = true;
    spotLight7.shadowMapWidth = 1024;
    spotLight7.shadowMapHeight = 1024;
    spotLight7.shadowCameraNear = 1;
    spotLight7.shadowCameraFar = 1;
    spotLight7.angle = Math.PI/2;
    spotLight7.shadowCameraVisible = true;
    
    spotLight8 = new SpotLight(0xffffff, 2,200);
    spotLight8.position.set(-15, 0, -15);
    spotLight8.lookAt(new Vector3(-150, 0, -150));
    spotLight8.castShadow = true;
    spotLight8.shadowMapWidth = 1024;
    spotLight8.shadowMapHeight = 1024;
    spotLight8.shadowCameraNear = 1;
    spotLight8.shadowCameraFar = 1;
    spotLight8.angle = Math.PI/2;
    spotLight8.shadowCameraVisible = true;    
    
 

    
    scene.add(spotLight1);
    scene.add(spotLight2);
    scene.add(spotLight3);
    scene.add(spotLight4);
    scene.add(spotLight5);
    scene.add(spotLight6);
    scene.add(spotLight7);
    scene.add(spotLight8);

    
    console.log("Added a SpotLight Light to Scene");

    // add controls
    gui = new GUI();
    control = new Control(0);
    addControl(control);


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
    gui.add(controlObject, 'Camera',0,1);
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
    
    
    cam = control.Camera;
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
	
    if(cam < 0.5)
    {
        renderer.render(scene, camera1);
    }
    else
    {
        renderer.render(scene, camera2);
    }
    
}

// Setup default renderer
function setupRenderer(): void {
    renderer = new Renderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMapType = THREE.PCFSoftShadowMap;
    console.log("Finished setting up Renderer...");
}

// Setup main camera for the scene
function setupCamera(): void {
    camera1 = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera1.position.x = 15;
    camera1.position.y = 50;
    camera1.position.z = 150;
    camera1.lookAt(new Vector3(0, -25, 0));
    
    
    console.log("Finished setting up Camera...");
    
    
        camera2 = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera2.position.x = 0;
    camera2.position.y = 10;
    camera2.position.z = 25;

    camera2.lookAt(new Vector3(0, -5.5, 0));
    console.log("Finished setting up Camera...");
}
