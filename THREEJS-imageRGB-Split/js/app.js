import * as THREE from 'three';




const scrollable = document.querySelector('.scrollable');

let current = 0;
let target = 0;
let ease = 0.075;

// Linear interpolation used for smooth scrolling and image offset uniform adjustment
function lerp(start, end, t) {
    return start * (1 -t) + end * t;
}

// To make the height of the document equal to the scrollable div
function init() {
    document.body.style.height = `${scrollable.getBoundingClientRect().height}px`
}

function smoothScroll() {
    target = window.scrollY;
    current = lerp(current, target, ease);
    scrollable.style.transform = `translate3d(0, ${-current}px, 0)`;
    requestAnimationFrame(smoothScroll)
}


class EffectCanvas {
    constructor() {
        this.container = document.querySelector('main');
        this.images = [...document.querySelectorAll('img')];
        this.meshItems = []; // used to store all meshes we will be creating
        this.setupCamera();
        this.createMeshItems();
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

    setupCamera() {

        window.addEventListener('resize', this.onWindowResize.bind(this));

        this.scene = new THREE.Scene();

        // perspective camera
        let perspective = 1000;
        const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI;
        this.camera = new THREE.PerspectiveCamera(fov, this.viewport.aspectRatio, 1, 1000);
        this.camera.position.set(0, 0, perspective)

        this.renderer = new THREE.WebGL1Renderer({antialias: true, alpha: true});
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);
    }

    onWindowResize() {
        init();
        this.camera.aspect = this.viewport.aspect;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.viewport.width, this.viewport.height)
    }

    createMeshItems() {}
}

class MeshItem {
    constructor(element, scene) {
        this.element = element;
        this.scene = scene;
        this.offset = new THREE.Vector2(0,0);
        this.sizes = new THREE.Vector2(0,0);
        this.createMesh();
    }

    getDimensions() {
        const { width, height, top, left } = this.element.getBoundingClientRect();
        this.sizes.set(width, height);
        this.offset.set(left - window.innerWidth / 2 + width / 2, -top + window.innerHeight/2 - height / 2)
    }

    createMesh() {
        this.geometry = new THREE.PlaneBufferGeometry(1, 1, 30, 30);
        this.imageTexture = new THREE.TextureLoader().load(this.element.src);
        this.uniforms = {
            uTexture: {value: this.imageTexture},
            uOffset: {value: new THREE.Vector2(0.0, 0.0)},
            uAlpha: {value: 1.0}
        }
        this.material = new THREE.ShaderMaterial({ 
            uniforms:this.uniforms,
            
        })
    }
}




init()
smoothScroll()

new EffectCanvas()