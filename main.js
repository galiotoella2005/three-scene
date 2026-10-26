import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
import './style.css'

// setup of 3.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// setup of GLTFLoader
const loader = new GLTFLoader();
const loadedData = await loader.loadAsync('./loaders/Flamingo.glb');

// flamingo import
const flamingo = loadedData.scene;
scene.add(flamingo);

// adjust the flamingo's position and size
flamingo.position.set(0, 0, 0);
flamingo.scale.set(0.1, 0.1, 0.1);


// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

//Set the pixel ratio, the size, and the camera position
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);

// you will not be able to view your new scene until you tell the renderer to render the scene
renderer.render(scene, camera);


// ambient lighting 
const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

// direct lighting
const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);


// orbit control
const controls = new OrbitControls(camera, renderer.domElement)

// background
const spaceTexture = new THREE.TextureLoader().load('images/sky.avif')
scene.background = spaceTexture;

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();