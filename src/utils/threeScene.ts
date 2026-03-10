import * as THREE from 'three';

export class Experience3D {
    private container: HTMLElement;
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private clock: THREE.Clock;
    private mouseX: number = 0;
    private mouseY: number = 0;

    private mainLight!: THREE.PointLight;
    private backLight!: THREE.PointLight;

    constructor(container: HTMLElement) {
        this.container = container;
        this.scene = new THREE.Scene();

        // Pure high-end deep black
        this.scene.background = new THREE.Color(0x000000);

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });

        this.clock = new THREE.Clock();

        this.init();
        this.createAtmosphericLighting();

        this.animate();
        this.handleResize();
    }

    private init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);
        this.camera.position.z = 10;
    }

    private createAtmosphericLighting() {
        // High-end cinematic light play
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
        this.scene.add(ambientLight);

        // Main sweeping light (Purple/Neon)
        this.mainLight = new THREE.PointLight(0x9333ea, 15, 60);
        this.mainLight.position.set(5, 5, 5);
        this.scene.add(this.mainLight);

        // Accent secondary light (Cyan)
        this.backLight = new THREE.PointLight(0x00d4ff, 10, 50);
        this.backLight.position.set(-10, -5, -5);
        this.scene.add(this.backLight);
    }

    public updateCamera(progress: number, section: string) {
        const globalProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

        // --- THE "BREATHING" BACKGROUND ---
        // Light travels as you scroll
        this.mainLight.position.y = 20 - globalProgress * 40;
        this.mainLight.position.x = Math.sin(globalProgress * Math.PI) * 15;

        this.backLight.position.y = -20 + globalProgress * 40;
        this.backLight.position.z = Math.cos(globalProgress * Math.PI) * 10;

        // Subtle camera travel
        this.camera.position.y = -globalProgress * 10;

        progress; section;
    }

    public handleMouseMove(x: number, y: number) {
        this.mouseX = x;
        this.mouseY = y;
    }

    private handleResize() {
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    private animate() {
        const elapsedTime = this.clock.getElapsedTime();

        // Cinematic "Shadow Dancing" - Lights move subtly even without scrolling
        this.mainLight.intensity = 15 + Math.sin(elapsedTime * 0.5) * 5;
        this.backLight.intensity = 10 + Math.cos(elapsedTime * 0.5) * 4;

        this.mainLight.position.x += Math.sin(elapsedTime * 0.2) * 0.05;
        this.backLight.position.z += Math.cos(elapsedTime * 0.3) * 0.05;

        // Mouse Parallax shifts the "shadows"
        this.camera.position.x += (this.mouseX * 2 - this.camera.position.x) * 0.02;
        this.camera.position.z += (10 + this.mouseY * 2 - this.camera.position.z) * 0.02;

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.animate());
    }
}
