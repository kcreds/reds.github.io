import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    antialias: true,
});
const container = document.getElementById('three-container');
container.appendChild(renderer.domElement);

camera.position.z = -2.5;
camera.position.x = -3;

const ambient = new THREE.AmbientLight(0xffffff);
scene.add(ambient);

// const directionalLightTop = new THREE.AmbientLight(0x970000, 5);
// directionalLightTop.position.set(5, 5, 5);
// scene.add(directionalLightTop);

// const directionalLightBottom = new THREE.AmbientLight(0x970000, 10);
// directionalLightBottom.position.set(-10, -10, -10);
// scene.add(directionalLightBottom);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let tooLazyToHandleLoadingProperly = 0;
const loadingLol = () => tooLazyToHandleLoadingProperly++;
const ENV_URL = 'image/water.jpg';
const reflectionCube = new THREE.TextureLoader().load(ENV_URL, loadingLol, undefined, undefined, undefined, undefined, undefined, true);
const refractionCube = new THREE.TextureLoader().load(ENV_URL, loadingLol, undefined, undefined, undefined, undefined, undefined, true);
reflectionCube.mapping = THREE.EquirectangularReflectionMapping;
refractionCube.mapping = THREE.EquirectangularRefractionMapping;

reflectionCube.magFilter = THREE.LinearFilter;
reflectionCube.minFilter = THREE.LinearMipmapLinearFilter;
refractionCube.magFilter = THREE.LinearFilter;
refractionCube.minFilter = THREE.LinearMipmapLinearFilter;

reflectionCube.wrapS = THREE.RepeatWrapping;
reflectionCube.wrapT = THREE.RepeatWrapping;
scene.background = reflectionCube;
scene.environment = reflectionCube;
scene.background = new THREE.Color(0x000000);

// const directionalLight = new THREE.DirectionalLight(0xff0000, 0.5);
// directionalLight.position.set(0, 1, 0);
// scene.add(directionalLight);

const geometry = new THREE.SphereGeometry(2, 128, 128);
const base = geometry.attributes.position.array.slice();
const refractionMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xc3e4f9,
    envMap: refractionCube,
    metalness: 1,
    reflectivity: 0,
    refractionRatio: 0.1,
    roughness: 0,
    side: THREE.DoubleSide,
    opacity: 0.8,
    transparent: true,
    map: reflectionCube,
});

const reflectionMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xc3e4f9,
    envMap: reflectionCube,
    envMapIntensity: 1,
    metalness: 0.55,
    reflectivity: 0.9,
    roughness: 0,
    side: THREE.DoubleSide,
    transmission: 1,
    opacity: 0.7,
    transparent: true,
    map: reflectionCube,
});

const refractionSphere = new THREE.Mesh(geometry, refractionMaterial);
const reflectionSphere = new THREE.Mesh(geometry, reflectionMaterial);
const sphere = new THREE.Object3D();
sphere.add(refractionSphere);
sphere.add(reflectionSphere);
scene.add(sphere);
sphere.lookAt(camera.position);
camera.lookAt(sphere.position);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false;
controls.enableRotate = true;

const animate = function (dt) {
    requestAnimationFrame(animate);
    controls.update();
    if (tooLazyToHandleLoadingProperly !== 2) return;

    geometry.attributes.position.array.forEach((val, i, arr) => {
        const place = i % 3;

        if (place === 0) {
            arr[i] = base[i] + Math.sin(base[i + 1] * 2 + dt * 0.001) * 0.1;
        }

        if (place === 1) {
            arr[i] = base[i] + Math.cos(base[i - 1] * 3 + dt * 0.002) * 0.08;
        }

        if (place === 2) {
            arr[i] = base[i] + Math.sin(base[i - 2] * 3 + dt * 0.001) * 0.03;
        }
    });

    geometry.computeVertexNormals();
    geometry.normalizeNormals();
    geometry.attributes.position.needsUpdate = true;

    const { innerWidth: w, innerHeight: h } = window;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
};

animate();
