import * as THREE from 'three';
import images from './images' ;

import vertex from '../shaders/vertex.glsl'
import fragment from '../shaders/fragment.glsl'

function lerp(start, end, t) {
    return start * (1-t) + end * t;
}


// Mouse Cordinates
let targetX  = 0;
let targetY = 0;

// Load image texture for MESH

const textureOne = new THREE.TextureLoader().load(images.imageOne);
const textureTwo = new THREE.TextureLoader().load(images.imageTwo);
const textureThree = new THREE.TextureLoader().load(images.imageThree);
const textureFour = new THREE.TextureLoader().load(images.imageFour);

class Webgl {
    constructor() {
        this.container = document.querySelector('main');
        this.links = [...document.querySelectorAll('li')];
        this.scene = new THREE.Scene();
        this.perspective = 1000; // camera perspective / distance on the z axis
        this.sizes = new THREE.Vector2(0,0); // Mesh sizes
        this.offset = new THREE.Vector2(0,0); // Mesh position on the screen
        this.uniforms = {
            uTexture: {value: textureOne},
            uAlpha: {value: 0.0},
            uOffset: {value: new THREE.Vector2(0.0, 0.0)}
        }
        this.links.forEach((link, idx) => {
            link.addEventListener('mouseenter', () => {
                switch (idx) {
                    case 0:
                        this.uniforms.uTexture.value = textureOne;
                        break;
                    case 1:
                        this.uniforms.uTexture.value = textureTwo;
                        break;
                    case 2:
                        this.uniforms.uTexture.value = textureThree;
                        break;
                    case 3:
                        this.uniforms.uTexture.value = textureFour;
                        break;
                }
            })
        })
        this.addEventListeners(document.querySelector('ul'));
        this.setupCamera();
        this.onMousemove();
        this.createMesh();
        this.render();
    }

    get viewport() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let aspectRatio = width / height;

        return {
            width,
            height,
            aspectRatio
        }
    }

    onMousemove() {
        window.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        })
    }

    addEventListeners(element) {
        element.addEventListener('mouseenter', () => {
            this.links.Hover = true;
        })
        element.addEventListener('mouseleave', () => {
            this.links.Hover = false;
        })
    }

    setupCamera() {
        // READJUST DIMENSIONS ON WINDOW RESIZE
        window.addEventListener('resize', this.onWindowResize.bind(this));

        let fov = (180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective))) / Math.PI;
        this.camera = new THREE.PerspectiveCamera(fov, this.viewport.aspectRatio, 0.1, 1000);
        this.camera.position.set( 0, 0, this.perspective);

        // Renderer / canvas
        this.renderer = new THREE.WebGL1Renderer({antialias: true, alpha: true});
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.container.appendChild(this.renderer.domElement);
    }

    onWindowResize() {
        this.camera.aspect = this.viewport.aspectRatio;
        this.camera.fov = (180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective))) / Math.PI;
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.camera.updateProjectionMatrix();
    }

    createMesh() {
        this.geometry = new THREE.PlaneGeometry(1,1,20,20);
        // this.material = new THREE.MeshBasicMaterial({color: 0xff0000});
        this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertex,
            fragmentShader: fragment,
            transparent: true
        })
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.sizes.set(250, 350);
        this.mesh.scale.set(this.sizes.x, this.sizes.y);
        this.mesh.position.set(this.offset.x, this.offset.y, 0);
        this.scene.add(this.mesh);

    }

    render() {
        this.offset.X = lerp(this.offset.x, targetX, 0.1)
        this.offset.Y = lerp(this.offset.y, targetY, 0.1)
        this.uniforms.uOffset.value.set((targetX - this.offset.x) * 0.0005, -(targetY - this.offset.y) * 0.0005);
        this.mesh.position.set(this.offset.x - (window.innerWidth / 2), -this.offset.y + (window.innerHeight / 2));

        this.linksHover 
        ? this.uniforms.uAlpha.value = lerp(this.uniforms.uAlpha.value, 1.0, 1.0)
        : this.uniforms.uAlpha.value = lerp(this.uniforms.uAlpha.value, 0.0, 1.0)

        for(let i = 0; i < this.links.length; i++) {
            if(this.linksHover) {
                this.links[i].style.opacity = 0.2;
            }else {
                this.links[i].style.opacity = 0.2;
            }
        }


        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render.bind(this));
    }
}

new Webgl();