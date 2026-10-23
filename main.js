import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
import './style.css'

// setup of 3.js
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

// you will not be able to view your new scene until you tell the renderer to render the scene
renderer.render(scene, camera);

//Set the pixel ratio, the size, and the camera position
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);

// create the object
const geometry = new THREE.BoxGeometry(10, 10, 10);

// set the color of the basic material in the object parameters `{}`

const material = new THREE.MeshBasicMaterial( { color: 0xFF4787 } );

const cube = new THREE.Mesh( geometry, material );

// add cube to the scene
scene.add( cube );

// position and rotation
cube.position.z = -15;
cube.position.x = -15;
cube.rotation.x = 2;
cube.rotation.y = .5;

//lights
const ambientLight = new THREE.AmbientLight(0xFFF);
ambientLight.position.set(25, -15, -400);

scene.add(ambientLight);

//animate
function animate() {
    requestAnimationFrame( animate );
    // slowly rotate the cube:
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
}
animate();

// orbit control
const controls = new OrbitControls(camera, renderer.domElement)

// background
const spaceTexture = new THREE.TextureLoader().load('images/galaxy.jpg')
scene.background = spaceTexture;

// object texture mapping

const smileTexture = new THREE.TextureLoader().load('images/verity.jpg')

const sphereGeometry = new THREE.SphereGeometry( 10, 22, 10 );

const smileMaterial = new THREE.MeshBasicMaterial({map: smileTexture})

const smileMesh = new THREE.Mesh(sphereGeometry, smileMaterial);

scene.add(smileMesh);