/// <reference path="_reference.ts"/>
// MAIN GAME FILE
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
var CScreen = config.Screen;
//Custom Game Objects
var gameObject = objects.gameObject;
var scene;
var renderer;
var camera1;
var camera2;
var axes;
var cube;
var plane;
var sphere;
var ambientLight;
var spotLight;
var control;
var gui;
var stats;
var step = 0;
var cubeGeometry;
var cubeMaterial;
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
    var geometry = new THREE.SphereGeometry(10, 32, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    sun = new THREE.Mesh(geometry);
    sun.position.set(0, 0, 0);
    var geometry1 = new THREE.SphereGeometry(.5, 32, 32);
    var material1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    iplanet1 = new THREE.Mesh();
    planet1 = new THREE.Mesh(geometry1, material1);
    iplanet1.position.set(0, 0, 0);
    planet1.position.set(15, 0, 0);
    var geometry2 = new THREE.SphereGeometry(1, 32, 32);
    var material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    iplanet2 = new THREE.Mesh();
    planet2 = new THREE.Mesh(geometry2, material2);
    iplanet2.position.set(0, 0, 0);
    planet2.position.set(25, 0, 0);
    var geometry3 = new THREE.SphereGeometry(1.5, 32, 32);
    var material3 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    iplanet3 = new THREE.Mesh();
    iplanet3.position.set(0, 0, 0);
    planet3 = new THREE.Mesh(geometry3, material3);
    planet3.position.set(40, 0, 0);
    var geometry4 = new THREE.SphereGeometry(4, 32, 32);
    var material4 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    iplanet4 = new THREE.Mesh();
    iplanet4.position.set(0, 0, 0);
    planet4 = new THREE.Mesh(geometry4, material4);
    planet4.position.set(70, 0, 0);
    var geometry5 = new THREE.SphereGeometry(1, 32, 32);
    var material5 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    iplanet5 = new THREE.Mesh();
    iplanet5.position.set(0, 0, 0);
    planet5 = new THREE.Mesh(geometry5, material5);
    planet5.position.set(100, 0, 0);
    var geometry6 = new THREE.SphereGeometry(1.2, 32, 32);
    var material6 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    iplanet6 = new THREE.Mesh();
    iplanet6.position.set(0, 0, 0);
    planet6 = new THREE.Mesh(geometry6, material6);
    planet6.position.set(10, 0, 0);
    var geometry7 = new THREE.SphereGeometry(.8, 32, 32);
    var material7 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    iplanet7 = new THREE.Mesh();
    iplanet7.position.set(0, 0, 0);
    planet7 = new THREE.Mesh(geometry7, material7);
    planet7.position.set(15, 0, 0);
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
    //scene.add( sun );
    scene.add(iplanet1);
    scene.add(iplanet2);
    scene.add(iplanet3);
    scene.add(iplanet4);
    scene.add(iplanet5);
    //Add a Plane to the Scene
    plane = new gameObject(new PlaneGeometry(20, 20, 1, 1), new LambertMaterial({ color: 0xff0000 }), 0, 0, 0);
    plane.rotation.x = -0.5 * Math.PI;
    scene.add(plane);
    // console.log("Added Plane Primitive to scene...");
    //Add a Cube to the Scene
    cubeMaterial = new LambertMaterial({ color: 0x00ff00 });
    cubeGeometry = new CubeGeometry(2, 2, 2);
    cube = new Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.position.y = 1;
    scene.add(cube);
    console.log("Added Cube Primitive to scene...");
    // Add an AmbientLight to the scene
    ambientLight = new AmbientLight(0x111111);
    scene.add(ambientLight);
    console.log("Added an Ambient Light to Scene");
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff, 10000, 150);
    spotLight.position.set(0, 15, 25);
    spotLight.lookAt(new Vector3(0, 0, 0));
    spotLight.castShadow = true;
    spotLight.shadowMapWidth = 1024;
    spotLight.shadowMapHeight = 1024;
    spotLight.shadowCameraNear = 1;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    // add controls
    //gui = new GUI();
    //control = new Control(0);
    //addControl(control);
    // Add framerate stats
    addStatsObject();
    console.log("Added Stats to scene...");
    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    window.addEventListener('resize', onResize, false);
}
function onResize() {
    camera1.aspect = CScreen.RATIO;
    camera2.aspect = CScreen.RATIO;
    //camera.aspect = window.innerWidth / window.innerHeight;
    camera1.updateProjectionMatrix();
    camera2.updateProjectionMatrix();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
}
function addControl(controlObject) {
    gui.add(controlObject, 'rotationSpeed', -0.5, 0.5);
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
function gameLoop() {
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
function setupRenderer() {
    renderer = new Renderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}
// Setup main camera for the scene
function setupCamera() {
    camera1 = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera1.position.x = 15;
    // camera1.position.y = 50;
    // camera1.position.z = 150;
    camera1.position.y = 15;
    camera1.position.z = -25;
    // camera1.lookAt(new Vector3(0, -25, 0));
    camera1.lookAt(new Vector3(0, -5, 0));
    console.log("Finished setting up Camera...");
    camera2 = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera2.position.x = 0;
    camera2.position.y = 10;
    camera2.position.z = 25;
    camera2.lookAt(new Vector3(0, -5.5, 0));
    console.log("Finished setting up Camera...");
}

//# sourceMappingURL=game.js.map
