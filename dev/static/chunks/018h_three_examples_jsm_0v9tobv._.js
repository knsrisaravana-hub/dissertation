(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/experiences/dissertation-books/node_modules/three/examples/jsm/controls/OrbitControls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrbitControls",
    ()=>OrbitControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
/**
 * Fires when the camera has been transformed by the controls.
 *
 * @event OrbitControls#change
 * @type {Object}
 */ const _changeEvent = {
    type: 'change'
};
/**
 * Fires when an interaction was initiated.
 *
 * @event OrbitControls#start
 * @type {Object}
 */ const _startEvent = {
    type: 'start'
};
/**
 * Fires when an interaction has finished.
 *
 * @event OrbitControls#end
 * @type {Object}
 */ const _endEvent = {
    type: 'end'
};
const _ray = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ray"]();
const _plane = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plane"]();
const _TILT_LIMIT = Math.cos(70 * __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].DEG2RAD);
const _v = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const _twoPI = 2 * Math.PI;
const _STATE = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6
};
const _EPS = 0.000001;
/**
 * Orbit controls allow the camera to orbit around a target.
 *
 * OrbitControls performs orbiting, dollying (zooming), and panning. Unlike {@link TrackballControls},
 * it maintains the "up" direction `object.up` (+Y by default).
 *
 * - Orbit: Left mouse / touch: one-finger move.
 * - Zoom: Middle mouse, or mousewheel / touch: two-finger spread or squish.
 * - Pan: Right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move.
 *
 * ```js
 * const controls = new OrbitControls( camera, renderer.domElement );
 *
 * // controls.update() must be called after any manual changes to the camera's transform
 * camera.position.set( 0, 20, 100 );
 * controls.update();
 *
 * function animate() {
 *
 * 	// required if controls.enableDamping or controls.autoRotate are set to true
 * 	controls.update();
 *
 * 	renderer.render( scene, camera );
 *
 * }
 * ```
 *
 * @augments Controls
 * @three_import import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
 */ class OrbitControls extends __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controls"] {
    /**
	 * Constructs a new controls instance.
	 *
	 * @param {Object3D} object - The object that is managed by the controls.
	 * @param {?HTMLElement} domElement - The HTML element used for event listeners.
	 */ constructor(object, domElement = null){
        super(object, domElement);
        this.state = _STATE.NONE;
        /**
		 * The focus point of the controls, the `object` orbits around this.
		 * It can be updated manually at any point to change the focus of the controls.
		 *
		 * @type {Vector3}
		 */ this.target = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        /**
		 * The focus point of the `minTargetRadius` and `maxTargetRadius` limits.
		 * It can be updated manually at any point to change the center of interest
		 * for the `target`.
		 *
		 * @type {Vector3}
		 */ this.cursor = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        /**
		 * How far you can dolly in (perspective camera only).
		 *
		 * @type {number}
		 * @default 0
		 */ this.minDistance = 0;
        /**
		 * How far you can dolly out (perspective camera only).
		 *
		 * @type {number}
		 * @default Infinity
		 */ this.maxDistance = Infinity;
        /**
		 * How far you can zoom in (orthographic camera only).
		 *
		 * @type {number}
		 * @default 0
		 */ this.minZoom = 0;
        /**
		 * How far you can zoom out (orthographic camera only).
		 *
		 * @type {number}
		 * @default Infinity
		 */ this.maxZoom = Infinity;
        /**
		 * How close you can get the target to the 3D `cursor`.
		 *
		 * @type {number}
		 * @default 0
		 */ this.minTargetRadius = 0;
        /**
		 * How far you can move the target from the 3D `cursor`.
		 *
		 * @type {number}
		 * @default Infinity
		 */ this.maxTargetRadius = Infinity;
        /**
		 * How far you can orbit vertically, lower limit. Range is `[0, Math.PI]` radians.
		 *
		 * @type {number}
		 * @default 0
		 */ this.minPolarAngle = 0;
        /**
		 * How far you can orbit vertically, upper limit. Range is `[0, Math.PI]` radians.
		 *
		 * @type {number}
		 * @default Math.PI
		 */ this.maxPolarAngle = Math.PI;
        /**
		 * How far you can orbit horizontally, lower limit. If set, the interval `[ min, max ]`
		 * must be a sub-interval of `[ - 2 PI, 2 PI ]`, with `( max - min < 2 PI )`.
		 *
		 * @type {number}
		 * @default -Infinity
		 */ this.minAzimuthAngle = -Infinity;
        /**
		 * How far you can orbit horizontally, upper limit. If set, the interval `[ min, max ]`
		 * must be a sub-interval of `[ - 2 PI, 2 PI ]`, with `( max - min < 2 PI )`.
		 *
		 * @type {number}
		 * @default -Infinity
		 */ this.maxAzimuthAngle = Infinity;
        /**
		 * Set to `true` to enable damping (inertia), which can be used to give a sense of weight
		 * to the controls. Note that if this is enabled, you must call `update()` in your animation
		 * loop.
		 *
		 * @type {boolean}
		 * @default false
		 */ this.enableDamping = false;
        /**
		 * The damping inertia used if `enableDamping` is set to `true`.
		 *
		 * Note that for this to work, you must call `update()` in your animation loop.
		 *
		 * @type {number}
		 * @default 0.05
		 */ this.dampingFactor = 0.05;
        /**
		 * Enable or disable zooming (dollying) of the camera.
		 *
		 * @type {boolean}
		 * @default true
		 */ this.enableZoom = true;
        /**
		 * Speed of zooming / dollying.
		 *
		 * @type {number}
		 * @default 1
		 */ this.zoomSpeed = 1.0;
        /**
		 * Enable or disable horizontal and vertical rotation of the camera.
		 *
		 * Note that it is possible to disable a single axis by setting the min and max of the
		 * `minPolarAngle` or `minAzimuthAngle` to the same value, which will cause the vertical
		 * or horizontal rotation to be fixed at that value.
		 *
		 * @type {boolean}
		 * @default true
		 */ this.enableRotate = true;
        /**
		 * Speed of rotation.
		 *
		 * @type {number}
		 * @default 1
		 */ this.rotateSpeed = 1.0;
        /**
		 * How fast to rotate the camera when the keyboard is used.
		 *
		 * @type {number}
		 * @default 1
		 */ this.keyRotateSpeed = 1.0;
        /**
		 * Enable or disable camera panning.
		 *
		 * @type {boolean}
		 * @default true
		 */ this.enablePan = true;
        /**
		 * Speed of panning.
		 *
		 * @type {number}
		 * @default 1
		 */ this.panSpeed = 1.0;
        /**
		 * Defines how the camera's position is translated when panning. If `true`, the camera pans
		 * in screen space. Otherwise, the camera pans in the plane orthogonal to the camera's up
		 * direction.
		 *
		 * @type {boolean}
		 * @default true
		 */ this.screenSpacePanning = true;
        /**
		 * How fast to pan the camera when the keyboard is used in
		 * pixels per keypress.
		 *
		 * @type {number}
		 * @default 7
		 */ this.keyPanSpeed = 7.0;
        /**
		 * Setting this property to `true` allows to zoom to the cursor's position.
		 *
		 * @type {boolean}
		 * @default false
		 */ this.zoomToCursor = false;
        /**
		 * Set to true to automatically rotate around the target
		 *
		 * Note that if this is enabled, you must call `update()` in your animation loop.
		 * If you want the auto-rotate speed to be independent of the frame rate (the refresh
		 * rate of the display), you must pass the time `deltaTime`, in seconds, to `update()`.
		 *
		 * @type {boolean}
		 * @default false
		 */ this.autoRotate = false;
        /**
		 * How fast to rotate around the target if `autoRotate` is `true`. The default  equates to 30 seconds
		 * per orbit at 60fps.
		 *
		 * Note that if `autoRotate` is enabled, you must call `update()` in your animation loop.
		 *
		 * @type {number}
		 * @default 2
		 */ this.autoRotateSpeed = 2.0;
        /**
		 * This object contains references to the keycodes for controlling camera panning.
		 *
		 * ```js
		 * controls.keys = {
		 * 	LEFT: 'ArrowLeft', //left arrow
		 * 	UP: 'ArrowUp', // up arrow
		 * 	RIGHT: 'ArrowRight', // right arrow
		 * 	BOTTOM: 'ArrowDown' // down arrow
		 * }
		 * ```
		 * @type {Object}
		 */ this.keys = {
            LEFT: 'ArrowLeft',
            UP: 'ArrowUp',
            RIGHT: 'ArrowRight',
            BOTTOM: 'ArrowDown'
        };
        /**
		 * This object contains references to the mouse actions used by the controls.
		 *
		 * ```js
		 * controls.mouseButtons = {
		 * 	LEFT: THREE.MOUSE.ROTATE,
		 * 	MIDDLE: THREE.MOUSE.DOLLY,
		 * 	RIGHT: THREE.MOUSE.PAN
		 * }
		 * ```
		 * @type {Object}
		 */ this.mouseButtons = {
            LEFT: __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOUSE"].ROTATE,
            MIDDLE: __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOUSE"].DOLLY,
            RIGHT: __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOUSE"].PAN
        };
        /**
		 * This object contains references to the touch actions used by the controls.
		 *
		 * ```js
		 * controls.mouseButtons = {
		 * 	ONE: THREE.TOUCH.ROTATE,
		 * 	TWO: THREE.TOUCH.DOLLY_PAN
		 * }
		 * ```
		 * @type {Object}
		 */ this.touches = {
            ONE: __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOUCH"].ROTATE,
            TWO: __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOUCH"].DOLLY_PAN
        };
        /**
		 * Used internally by `saveState()` and `reset()`.
		 *
		 * @type {Vector3}
		 */ this.target0 = this.target.clone();
        /**
		 * Used internally by `saveState()` and `reset()`.
		 *
		 * @type {Vector3}
		 */ this.position0 = this.object.position.clone();
        /**
		 * Used internally by `saveState()` and `reset()`.
		 *
		 * @type {number}
		 */ this.zoom0 = this.object.zoom;
        this._cursorStyle = 'auto';
        // the target DOM element for key events
        this._domElementKeyEvents = null;
        // internals
        this._lastPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._lastQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._lastTargetPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        // so camera.up is the orbit axis
        this._quat = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]().setFromUnitVectors(object.up, new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0));
        this._quatInverse = this._quat.clone().invert();
        // current position in spherical coordinates
        this._spherical = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spherical"]();
        this._sphericalDelta = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spherical"]();
        this._scale = 1;
        this._panOffset = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._rotateStart = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
        this._rotateEnd = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
        this._rotateDelta = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
        this._panStart = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
        this._panEnd = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
        this._panDelta = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
        this._dollyStart = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
        this._dollyEnd = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
        this._dollyDelta = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
        this._dollyDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._mouse = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
        this._performCursorZoom = false;
        this._pointers = [];
        this._pointerPositions = {};
        this._controlActive = false;
        // event listeners
        this._onPointerMove = onPointerMove.bind(this);
        this._onPointerDown = onPointerDown.bind(this);
        this._onPointerUp = onPointerUp.bind(this);
        this._onContextMenu = onContextMenu.bind(this);
        this._onMouseWheel = onMouseWheel.bind(this);
        this._onKeyDown = onKeyDown.bind(this);
        this._onTouchStart = onTouchStart.bind(this);
        this._onTouchMove = onTouchMove.bind(this);
        this._onMouseDown = onMouseDown.bind(this);
        this._onMouseMove = onMouseMove.bind(this);
        this._interceptControlDown = interceptControlDown.bind(this);
        this._interceptControlUp = interceptControlUp.bind(this);
        //
        if (this.domElement !== null) {
            this.connect(this.domElement);
        }
        this.update();
    }
    /**
	 * Defines the visual representation of the cursor.
	 *
	 * @type {('auto'|'grab')}
	 * @default 'auto'
	 */ set cursorStyle(type) {
        this._cursorStyle = type;
        if (type === 'grab') {
            this.domElement.style.cursor = 'grab';
        } else {
            this.domElement.style.cursor = 'auto';
        }
    }
    get cursorStyle() {
        return this._cursorStyle;
    }
    connect(element) {
        super.connect(element);
        this.domElement.addEventListener('pointerdown', this._onPointerDown);
        this.domElement.addEventListener('pointercancel', this._onPointerUp);
        this.domElement.addEventListener('contextmenu', this._onContextMenu);
        this.domElement.addEventListener('wheel', this._onMouseWheel, {
            passive: false
        });
        const document = this.domElement.getRootNode(); // offscreen canvas compatibility
        document.addEventListener('keydown', this._interceptControlDown, {
            passive: true,
            capture: true
        });
        this.domElement.style.touchAction = 'none'; // Disable touch scroll
    }
    disconnect() {
        this.domElement.removeEventListener('pointerdown', this._onPointerDown);
        this.domElement.ownerDocument.removeEventListener('pointermove', this._onPointerMove);
        this.domElement.ownerDocument.removeEventListener('pointerup', this._onPointerUp);
        this.domElement.removeEventListener('pointercancel', this._onPointerUp);
        this.domElement.removeEventListener('wheel', this._onMouseWheel);
        this.domElement.removeEventListener('contextmenu', this._onContextMenu);
        this.stopListenToKeyEvents();
        const document = this.domElement.getRootNode(); // offscreen canvas compatibility
        document.removeEventListener('keydown', this._interceptControlDown, {
            capture: true
        });
        this.domElement.style.touchAction = ''; // Restore touch scroll
    }
    dispose() {
        this.disconnect();
    }
    /**
	 * Get the current vertical rotation, in radians.
	 *
	 * @return {number} The current vertical rotation, in radians.
	 */ getPolarAngle() {
        return this._spherical.phi;
    }
    /**
	 * Get the current horizontal rotation, in radians.
	 *
	 * @return {number} The current horizontal rotation, in radians.
	 */ getAzimuthalAngle() {
        return this._spherical.theta;
    }
    /**
	 * Returns the distance from the camera to the target.
	 *
	 * @return {number} The distance from the camera to the target.
	 */ getDistance() {
        return this.object.position.distanceTo(this.target);
    }
    /**
	 * Adds key event listeners to the given DOM element.
	 * `window` is a recommended argument for using this method.
	 *
	 * @param {HTMLElement} domElement - The DOM element
	 */ listenToKeyEvents(domElement) {
        domElement.addEventListener('keydown', this._onKeyDown);
        this._domElementKeyEvents = domElement;
    }
    /**
	 * Removes the key event listener previously defined with `listenToKeyEvents()`.
	 */ stopListenToKeyEvents() {
        if (this._domElementKeyEvents !== null) {
            this._domElementKeyEvents.removeEventListener('keydown', this._onKeyDown);
            this._domElementKeyEvents = null;
        }
    }
    /**
	 * Save the current state of the controls. This can later be recovered with `reset()`.
	 */ saveState() {
        this.target0.copy(this.target);
        this.position0.copy(this.object.position);
        this.zoom0 = this.object.zoom;
    }
    /**
	 * Reset the controls to their state from either the last time the `saveState()`
	 * was called, or the initial state.
	 */ reset() {
        this.target.copy(this.target0);
        this.object.position.copy(this.position0);
        this.object.zoom = this.zoom0;
        this.object.updateProjectionMatrix();
        this.dispatchEvent(_changeEvent);
        this.update();
        this.state = _STATE.NONE;
    }
    /**
	 * Programmatically pan the camera.
	 *
	 * @param {number} deltaX - The horizontal pan amount in pixels.
	 * @param {number} deltaY - The vertical pan amount in pixels.
	 */ pan(deltaX, deltaY) {
        this._pan(deltaX, deltaY);
        this.update();
    }
    /**
	 * Programmatically dolly in (zoom in for perspective camera).
	 *
	 * @param {number} dollyScale - The dolly scale factor.
	 */ dollyIn(dollyScale) {
        this._dollyIn(dollyScale);
        this.update();
    }
    /**
	 * Programmatically dolly out (zoom out for perspective camera).
	 *
	 * @param {number} dollyScale - The dolly scale factor.
	 */ dollyOut(dollyScale) {
        this._dollyOut(dollyScale);
        this.update();
    }
    /**
	 * Programmatically rotate the camera left (around the vertical axis).
	 *
	 * @param {number} angle - The rotation angle in radians.
	 */ rotateLeft(angle) {
        this._rotateLeft(angle);
        this.update();
    }
    /**
	 * Programmatically rotate the camera up (around the horizontal axis).
	 *
	 * @param {number} angle - The rotation angle in radians.
	 */ rotateUp(angle) {
        this._rotateUp(angle);
        this.update();
    }
    update(deltaTime = null) {
        const position = this.object.position;
        _v.copy(position).sub(this.target);
        // rotate offset to "y-axis-is-up" space
        _v.applyQuaternion(this._quat);
        // angle from z-axis around y-axis
        this._spherical.setFromVector3(_v);
        if (this.autoRotate && this.state === _STATE.NONE) {
            this._rotateLeft(this._getAutoRotationAngle(deltaTime));
        }
        if (this.enableDamping) {
            this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor;
            this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor;
        } else {
            this._spherical.theta += this._sphericalDelta.theta;
            this._spherical.phi += this._sphericalDelta.phi;
        }
        // restrict theta to be between desired limits
        let min = this.minAzimuthAngle;
        let max = this.maxAzimuthAngle;
        if (isFinite(min) && isFinite(max)) {
            if (min < -Math.PI) min += _twoPI;
            else if (min > Math.PI) min -= _twoPI;
            if (max < -Math.PI) max += _twoPI;
            else if (max > Math.PI) max -= _twoPI;
            if (min <= max) {
                this._spherical.theta = Math.max(min, Math.min(max, this._spherical.theta));
            } else {
                this._spherical.theta = this._spherical.theta > (min + max) / 2 ? Math.max(min, this._spherical.theta) : Math.min(max, this._spherical.theta);
            }
        }
        // restrict phi to be between desired limits
        this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi));
        this._spherical.makeSafe();
        // move target to panned location
        if (this.enableDamping === true) {
            this.target.addScaledVector(this._panOffset, this.dampingFactor);
        } else {
            this.target.add(this._panOffset);
        }
        // Limit the target distance from the cursor to create a sphere around the center of interest
        this.target.sub(this.cursor);
        this.target.clampLength(this.minTargetRadius, this.maxTargetRadius);
        this.target.add(this.cursor);
        let zoomChanged = false;
        // adjust the camera position based on zoom only if we're not zooming to the cursor or if it's an ortho camera
        // we adjust zoom later in these cases
        if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) {
            this._spherical.radius = this._clampDistance(this._spherical.radius);
        } else {
            const prevRadius = this._spherical.radius;
            this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale);
            zoomChanged = prevRadius != this._spherical.radius;
        }
        _v.setFromSpherical(this._spherical);
        // rotate offset back to "camera-up-vector-is-up" space
        _v.applyQuaternion(this._quatInverse);
        position.copy(this.target).add(_v);
        this.object.lookAt(this.target);
        if (this.enableDamping === true) {
            this._sphericalDelta.theta *= 1 - this.dampingFactor;
            this._sphericalDelta.phi *= 1 - this.dampingFactor;
            this._panOffset.multiplyScalar(1 - this.dampingFactor);
        } else {
            this._sphericalDelta.set(0, 0, 0);
            this._panOffset.set(0, 0, 0);
        }
        // adjust camera position
        if (this.zoomToCursor && this._performCursorZoom) {
            let newRadius = null;
            if (this.object.isPerspectiveCamera) {
                // move the camera down the pointer ray
                // this method avoids floating point error
                const prevRadius = _v.length();
                newRadius = this._clampDistance(prevRadius * this._scale);
                const radiusDelta = prevRadius - newRadius;
                this.object.position.addScaledVector(this._dollyDirection, radiusDelta);
                this.object.updateMatrixWorld();
                zoomChanged = !!radiusDelta;
            } else if (this.object.isOrthographicCamera) {
                // adjust the ortho camera position based on zoom changes
                const mouseBefore = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this._mouse.x, this._mouse.y, 0);
                mouseBefore.unproject(this.object);
                const prevZoom = this.object.zoom;
                this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale));
                this.object.updateProjectionMatrix();
                zoomChanged = prevZoom !== this.object.zoom;
                const mouseAfter = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this._mouse.x, this._mouse.y, 0);
                mouseAfter.unproject(this.object);
                this.object.position.sub(mouseAfter).add(mouseBefore);
                this.object.updateMatrixWorld();
                newRadius = _v.length();
            } else {
                console.warn('WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.');
                this.zoomToCursor = false;
            }
            // handle the placement of the target
            if (newRadius !== null) {
                if (this.screenSpacePanning) {
                    // position the orbit target in front of the new camera position
                    this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(newRadius).add(this.object.position);
                } else {
                    // get the ray and translation plane to compute target
                    _ray.origin.copy(this.object.position);
                    _ray.direction.set(0, 0, -1).transformDirection(this.object.matrix);
                    // if the camera is 20 degrees above the horizon then don't adjust the focus target to avoid
                    // extremely large values
                    if (Math.abs(this.object.up.dot(_ray.direction)) < _TILT_LIMIT) {
                        this.object.lookAt(this.target);
                    } else {
                        _plane.setFromNormalAndCoplanarPoint(this.object.up, this.target);
                        _ray.intersectPlane(_plane, this.target);
                    }
                }
            }
        } else if (this.object.isOrthographicCamera) {
            const prevZoom = this.object.zoom;
            this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale));
            if (prevZoom !== this.object.zoom) {
                this.object.updateProjectionMatrix();
                zoomChanged = true;
            }
        }
        this._scale = 1;
        this._performCursorZoom = false;
        // update condition is:
        // min(camera displacement, camera rotation in radians)^2 > EPS
        // using small-angle approximation cos(x/2) = 1 - x^2 / 8
        if (zoomChanged || this._lastPosition.distanceToSquared(this.object.position) > _EPS || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > _EPS || this._lastTargetPosition.distanceToSquared(this.target) > _EPS) {
            this.dispatchEvent(_changeEvent);
            this._lastPosition.copy(this.object.position);
            this._lastQuaternion.copy(this.object.quaternion);
            this._lastTargetPosition.copy(this.target);
            return true;
        }
        return false;
    }
    _getAutoRotationAngle(deltaTime) {
        if (deltaTime !== null) {
            return _twoPI / 60 * this.autoRotateSpeed * deltaTime;
        } else {
            return _twoPI / 60 / 60 * this.autoRotateSpeed;
        }
    }
    _getZoomScale(delta) {
        const normalizedDelta = Math.abs(delta * 0.01);
        return Math.pow(0.95, this.zoomSpeed * normalizedDelta);
    }
    _rotateLeft(angle) {
        this._sphericalDelta.theta -= angle;
    }
    _rotateUp(angle) {
        this._sphericalDelta.phi -= angle;
    }
    _panLeft(distance, objectMatrix) {
        _v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
        _v.multiplyScalar(-distance);
        this._panOffset.add(_v);
    }
    _panUp(distance, objectMatrix) {
        if (this.screenSpacePanning === true) {
            _v.setFromMatrixColumn(objectMatrix, 1);
        } else {
            _v.setFromMatrixColumn(objectMatrix, 0);
            _v.crossVectors(this.object.up, _v);
        }
        _v.multiplyScalar(distance);
        this._panOffset.add(_v);
    }
    // deltaX and deltaY are in pixels; right and down are positive
    _pan(deltaX, deltaY) {
        const element = this.domElement;
        if (this.object.isPerspectiveCamera) {
            // perspective
            const position = this.object.position;
            _v.copy(position).sub(this.target);
            let targetDistance = _v.length();
            // half of the fov is center to top of screen
            targetDistance *= Math.tan(this.object.fov / 2 * Math.PI / 180.0);
            // we use only clientHeight here so aspect ratio does not distort speed
            this._panLeft(2 * deltaX * targetDistance / element.clientHeight, this.object.matrix);
            this._panUp(2 * deltaY * targetDistance / element.clientHeight, this.object.matrix);
        } else if (this.object.isOrthographicCamera) {
            // orthographic
            this._panLeft(deltaX * (this.object.right - this.object.left) / this.object.zoom / element.clientWidth, this.object.matrix);
            this._panUp(deltaY * (this.object.top - this.object.bottom) / this.object.zoom / element.clientHeight, this.object.matrix);
        } else {
            // camera neither orthographic nor perspective
            console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
            this.enablePan = false;
        }
    }
    _dollyOut(dollyScale) {
        if (this.object.isPerspectiveCamera || this.object.isOrthographicCamera) {
            this._scale /= dollyScale;
        } else {
            console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
            this.enableZoom = false;
        }
    }
    _dollyIn(dollyScale) {
        if (this.object.isPerspectiveCamera || this.object.isOrthographicCamera) {
            this._scale *= dollyScale;
        } else {
            console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
            this.enableZoom = false;
        }
    }
    _updateZoomParameters(x, y) {
        if (!this.zoomToCursor) {
            return;
        }
        this._performCursorZoom = true;
        const rect = this.domElement.getBoundingClientRect();
        const dx = x - rect.left;
        const dy = y - rect.top;
        const w = rect.width;
        const h = rect.height;
        this._mouse.x = dx / w * 2 - 1;
        this._mouse.y = -(dy / h) * 2 + 1;
        this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
    }
    _clampDistance(dist) {
        return Math.max(this.minDistance, Math.min(this.maxDistance, dist));
    }
    //
    // event callbacks - update the object state
    //
    _handleMouseDownRotate(event) {
        this._rotateStart.set(event.clientX, event.clientY);
    }
    _handleMouseDownDolly(event) {
        this._updateZoomParameters(event.clientX, event.clientX);
        this._dollyStart.set(event.clientX, event.clientY);
    }
    _handleMouseDownPan(event) {
        this._panStart.set(event.clientX, event.clientY);
    }
    _handleMouseMoveRotate(event) {
        this._rotateEnd.set(event.clientX, event.clientY);
        this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
        const element = this.domElement;
        this._rotateLeft(_twoPI * this._rotateDelta.x / element.clientHeight); // yes, height
        this._rotateUp(_twoPI * this._rotateDelta.y / element.clientHeight);
        this._rotateStart.copy(this._rotateEnd);
        this.update();
    }
    _handleMouseMoveDolly(event) {
        this._dollyEnd.set(event.clientX, event.clientY);
        this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart);
        if (this._dollyDelta.y > 0) {
            this._dollyOut(this._getZoomScale(this._dollyDelta.y));
        } else if (this._dollyDelta.y < 0) {
            this._dollyIn(this._getZoomScale(this._dollyDelta.y));
        }
        this._dollyStart.copy(this._dollyEnd);
        this.update();
    }
    _handleMouseMovePan(event) {
        this._panEnd.set(event.clientX, event.clientY);
        this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed);
        this._pan(this._panDelta.x, this._panDelta.y);
        this._panStart.copy(this._panEnd);
        this.update();
    }
    _handleMouseWheel(event) {
        this._updateZoomParameters(event.clientX, event.clientY);
        if (event.deltaY < 0) {
            this._dollyIn(this._getZoomScale(event.deltaY));
        } else if (event.deltaY > 0) {
            this._dollyOut(this._getZoomScale(event.deltaY));
        }
        this.update();
    }
    _handleKeyDown(event) {
        let needsUpdate = false;
        switch(event.code){
            case this.keys.UP:
                if (event.ctrlKey || event.metaKey || event.shiftKey) {
                    if (this.enableRotate) {
                        this._rotateUp(_twoPI * this.keyRotateSpeed / this.domElement.clientHeight);
                    }
                } else {
                    if (this.enablePan) {
                        this._pan(0, this.keyPanSpeed);
                    }
                }
                needsUpdate = true;
                break;
            case this.keys.BOTTOM:
                if (event.ctrlKey || event.metaKey || event.shiftKey) {
                    if (this.enableRotate) {
                        this._rotateUp(-_twoPI * this.keyRotateSpeed / this.domElement.clientHeight);
                    }
                } else {
                    if (this.enablePan) {
                        this._pan(0, -this.keyPanSpeed);
                    }
                }
                needsUpdate = true;
                break;
            case this.keys.LEFT:
                if (event.ctrlKey || event.metaKey || event.shiftKey) {
                    if (this.enableRotate) {
                        this._rotateLeft(_twoPI * this.keyRotateSpeed / this.domElement.clientHeight);
                    }
                } else {
                    if (this.enablePan) {
                        this._pan(this.keyPanSpeed, 0);
                    }
                }
                needsUpdate = true;
                break;
            case this.keys.RIGHT:
                if (event.ctrlKey || event.metaKey || event.shiftKey) {
                    if (this.enableRotate) {
                        this._rotateLeft(-_twoPI * this.keyRotateSpeed / this.domElement.clientHeight);
                    }
                } else {
                    if (this.enablePan) {
                        this._pan(-this.keyPanSpeed, 0);
                    }
                }
                needsUpdate = true;
                break;
        }
        if (needsUpdate) {
            // prevent the browser from scrolling on cursor keys
            event.preventDefault();
            this.update();
        }
    }
    _handleTouchStartRotate(event) {
        if (this._pointers.length === 1) {
            this._rotateStart.set(event.pageX, event.pageY);
        } else {
            const position = this._getSecondPointerPosition(event);
            const x = 0.5 * (event.pageX + position.x);
            const y = 0.5 * (event.pageY + position.y);
            this._rotateStart.set(x, y);
        }
    }
    _handleTouchStartPan(event) {
        if (this._pointers.length === 1) {
            this._panStart.set(event.pageX, event.pageY);
        } else {
            const position = this._getSecondPointerPosition(event);
            const x = 0.5 * (event.pageX + position.x);
            const y = 0.5 * (event.pageY + position.y);
            this._panStart.set(x, y);
        }
    }
    _handleTouchStartDolly(event) {
        const position = this._getSecondPointerPosition(event);
        const dx = event.pageX - position.x;
        const dy = event.pageY - position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        this._dollyStart.set(0, distance);
    }
    _handleTouchStartDollyPan(event) {
        if (this.enableZoom) this._handleTouchStartDolly(event);
        if (this.enablePan) this._handleTouchStartPan(event);
    }
    _handleTouchStartDollyRotate(event) {
        if (this.enableZoom) this._handleTouchStartDolly(event);
        if (this.enableRotate) this._handleTouchStartRotate(event);
    }
    _handleTouchMoveRotate(event) {
        if (this._pointers.length == 1) {
            this._rotateEnd.set(event.pageX, event.pageY);
        } else {
            const position = this._getSecondPointerPosition(event);
            const x = 0.5 * (event.pageX + position.x);
            const y = 0.5 * (event.pageY + position.y);
            this._rotateEnd.set(x, y);
        }
        this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
        const element = this.domElement;
        this._rotateLeft(_twoPI * this._rotateDelta.x / element.clientHeight); // yes, height
        this._rotateUp(_twoPI * this._rotateDelta.y / element.clientHeight);
        this._rotateStart.copy(this._rotateEnd);
    }
    _handleTouchMovePan(event) {
        if (this._pointers.length === 1) {
            this._panEnd.set(event.pageX, event.pageY);
        } else {
            const position = this._getSecondPointerPosition(event);
            const x = 0.5 * (event.pageX + position.x);
            const y = 0.5 * (event.pageY + position.y);
            this._panEnd.set(x, y);
        }
        this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed);
        this._pan(this._panDelta.x, this._panDelta.y);
        this._panStart.copy(this._panEnd);
    }
    _handleTouchMoveDolly(event) {
        const position = this._getSecondPointerPosition(event);
        const dx = event.pageX - position.x;
        const dy = event.pageY - position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        this._dollyEnd.set(0, distance);
        this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed));
        this._dollyOut(this._dollyDelta.y);
        this._dollyStart.copy(this._dollyEnd);
        const centerX = (event.pageX + position.x) * 0.5;
        const centerY = (event.pageY + position.y) * 0.5;
        this._updateZoomParameters(centerX, centerY);
    }
    _handleTouchMoveDollyPan(event) {
        if (this.enableZoom) this._handleTouchMoveDolly(event);
        if (this.enablePan) this._handleTouchMovePan(event);
    }
    _handleTouchMoveDollyRotate(event) {
        if (this.enableZoom) this._handleTouchMoveDolly(event);
        if (this.enableRotate) this._handleTouchMoveRotate(event);
    }
    // pointers
    _addPointer(event) {
        this._pointers.push(event.pointerId);
    }
    _removePointer(event) {
        delete this._pointerPositions[event.pointerId];
        for(let i = 0; i < this._pointers.length; i++){
            if (this._pointers[i] == event.pointerId) {
                this._pointers.splice(i, 1);
                return;
            }
        }
    }
    _isTrackingPointer(event) {
        for(let i = 0; i < this._pointers.length; i++){
            if (this._pointers[i] == event.pointerId) return true;
        }
        return false;
    }
    _trackPointer(event) {
        let position = this._pointerPositions[event.pointerId];
        if (position === undefined) {
            position = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
            this._pointerPositions[event.pointerId] = position;
        }
        position.set(event.pageX, event.pageY);
    }
    _getSecondPointerPosition(event) {
        const pointerId = event.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
        return this._pointerPositions[pointerId];
    }
    //
    _customWheelEvent(event) {
        const mode = event.deltaMode;
        // minimal wheel event altered to meet delta-zoom demand
        const newEvent = {
            clientX: event.clientX,
            clientY: event.clientY,
            deltaY: event.deltaY
        };
        switch(mode){
            case 1:
                newEvent.deltaY *= 16;
                break;
            case 2:
                newEvent.deltaY *= 100;
                break;
        }
        // detect if event was triggered by pinching
        if (event.ctrlKey && !this._controlActive) {
            newEvent.deltaY *= 10;
        }
        return newEvent;
    }
}
function onPointerDown(event) {
    if (this.enabled === false) return;
    if (this._pointers.length === 0) {
        this.domElement.setPointerCapture(event.pointerId);
        this.domElement.ownerDocument.addEventListener('pointermove', this._onPointerMove);
        this.domElement.ownerDocument.addEventListener('pointerup', this._onPointerUp);
    }
    //
    if (this._isTrackingPointer(event)) return;
    //
    this._addPointer(event);
    if (event.pointerType === 'touch') {
        this._onTouchStart(event);
    } else {
        this._onMouseDown(event);
    }
    if (this._cursorStyle === 'grab') {
        this.domElement.style.cursor = 'grabbing';
    }
}
function onPointerMove(event) {
    if (this.enabled === false) return;
    if (event.pointerType === 'touch') {
        this._onTouchMove(event);
    } else {
        this._onMouseMove(event);
    }
}
function onPointerUp(event) {
    this._removePointer(event);
    switch(this._pointers.length){
        case 0:
            this.domElement.releasePointerCapture(event.pointerId);
            this.domElement.ownerDocument.removeEventListener('pointermove', this._onPointerMove);
            this.domElement.ownerDocument.removeEventListener('pointerup', this._onPointerUp);
            this.dispatchEvent(_endEvent);
            this.state = _STATE.NONE;
            if (this._cursorStyle === 'grab') {
                this.domElement.style.cursor = 'grab';
            }
            break;
        case 1:
            const pointerId = this._pointers[0];
            const position = this._pointerPositions[pointerId];
            // minimal placeholder event - allows state correction on pointer-up
            this._onTouchStart({
                pointerId: pointerId,
                pageX: position.x,
                pageY: position.y
            });
            break;
    }
}
function onMouseDown(event) {
    let mouseAction;
    switch(event.button){
        case 0:
            mouseAction = this.mouseButtons.LEFT;
            break;
        case 1:
            mouseAction = this.mouseButtons.MIDDLE;
            break;
        case 2:
            mouseAction = this.mouseButtons.RIGHT;
            break;
        default:
            mouseAction = -1;
    }
    switch(mouseAction){
        case __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOUSE"].DOLLY:
            if (this.enableZoom === false) return;
            this._handleMouseDownDolly(event);
            this.state = _STATE.DOLLY;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOUSE"].ROTATE:
            if (event.ctrlKey || event.metaKey || event.shiftKey) {
                if (this.enablePan === false) return;
                this._handleMouseDownPan(event);
                this.state = _STATE.PAN;
            } else {
                if (this.enableRotate === false) return;
                this._handleMouseDownRotate(event);
                this.state = _STATE.ROTATE;
            }
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOUSE"].PAN:
            if (event.ctrlKey || event.metaKey || event.shiftKey) {
                if (this.enableRotate === false) return;
                this._handleMouseDownRotate(event);
                this.state = _STATE.ROTATE;
            } else {
                if (this.enablePan === false) return;
                this._handleMouseDownPan(event);
                this.state = _STATE.PAN;
            }
            break;
        default:
            this.state = _STATE.NONE;
    }
    if (this.state !== _STATE.NONE) {
        this.dispatchEvent(_startEvent);
    }
}
function onMouseMove(event) {
    switch(this.state){
        case _STATE.ROTATE:
            if (this.enableRotate === false) return;
            this._handleMouseMoveRotate(event);
            break;
        case _STATE.DOLLY:
            if (this.enableZoom === false) return;
            this._handleMouseMoveDolly(event);
            break;
        case _STATE.PAN:
            if (this.enablePan === false) return;
            this._handleMouseMovePan(event);
            break;
    }
}
function onMouseWheel(event) {
    if (this.enabled === false || this.enableZoom === false || this.state !== _STATE.NONE) return;
    event.preventDefault();
    this.dispatchEvent(_startEvent);
    this._handleMouseWheel(this._customWheelEvent(event));
    this.dispatchEvent(_endEvent);
}
function onKeyDown(event) {
    if (this.enabled === false) return;
    this._handleKeyDown(event);
}
function onTouchStart(event) {
    this._trackPointer(event);
    switch(this._pointers.length){
        case 1:
            switch(this.touches.ONE){
                case __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOUCH"].ROTATE:
                    if (this.enableRotate === false) return;
                    this._handleTouchStartRotate(event);
                    this.state = _STATE.TOUCH_ROTATE;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOUCH"].PAN:
                    if (this.enablePan === false) return;
                    this._handleTouchStartPan(event);
                    this.state = _STATE.TOUCH_PAN;
                    break;
                default:
                    this.state = _STATE.NONE;
            }
            break;
        case 2:
            switch(this.touches.TWO){
                case __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOUCH"].DOLLY_PAN:
                    if (this.enableZoom === false && this.enablePan === false) return;
                    this._handleTouchStartDollyPan(event);
                    this.state = _STATE.TOUCH_DOLLY_PAN;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOUCH"].DOLLY_ROTATE:
                    if (this.enableZoom === false && this.enableRotate === false) return;
                    this._handleTouchStartDollyRotate(event);
                    this.state = _STATE.TOUCH_DOLLY_ROTATE;
                    break;
                default:
                    this.state = _STATE.NONE;
            }
            break;
        default:
            this.state = _STATE.NONE;
    }
    if (this.state !== _STATE.NONE) {
        this.dispatchEvent(_startEvent);
    }
}
function onTouchMove(event) {
    this._trackPointer(event);
    switch(this.state){
        case _STATE.TOUCH_ROTATE:
            if (this.enableRotate === false) return;
            this._handleTouchMoveRotate(event);
            this.update();
            break;
        case _STATE.TOUCH_PAN:
            if (this.enablePan === false) return;
            this._handleTouchMovePan(event);
            this.update();
            break;
        case _STATE.TOUCH_DOLLY_PAN:
            if (this.enableZoom === false && this.enablePan === false) return;
            this._handleTouchMoveDollyPan(event);
            this.update();
            break;
        case _STATE.TOUCH_DOLLY_ROTATE:
            if (this.enableZoom === false && this.enableRotate === false) return;
            this._handleTouchMoveDollyRotate(event);
            this.update();
            break;
        default:
            this.state = _STATE.NONE;
    }
}
function onContextMenu(event) {
    if (this.enabled === false) return;
    event.preventDefault();
}
function interceptControlDown(event) {
    if (event.key === 'Control') {
        this._controlActive = true;
        const document = this.domElement.getRootNode(); // offscreen canvas compatibility
        document.addEventListener('keyup', this._interceptControlUp, {
            passive: true,
            capture: true
        });
    }
}
function interceptControlUp(event) {
    if (event.key === 'Control') {
        this._controlActive = false;
        const document = this.domElement.getRootNode(); // offscreen canvas compatibility
        document.removeEventListener('keyup', this._interceptControlUp, {
            passive: true,
            capture: true
        });
    }
}
;
}),
"[project]/experiences/dissertation-books/node_modules/three/examples/jsm/geometries/RoundedBoxGeometry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoundedBoxGeometry",
    ()=>RoundedBoxGeometry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const _tempNormal = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
function getUv(faceDirVector, normal, uvAxis, projectionAxis, radius, sideLength) {
    const totArcLength = 2 * Math.PI * radius / 4;
    // length of the planes between the arcs on each axis
    const centerLength = Math.max(sideLength - 2 * radius, 0);
    const halfArc = Math.PI / 4;
    // Get the vector projected onto the Y plane
    _tempNormal.copy(normal);
    _tempNormal[projectionAxis] = 0;
    _tempNormal.normalize();
    // total amount of UV space alloted to a single arc
    const arcUvRatio = 0.5 * totArcLength / (totArcLength + centerLength);
    // the distance along one arc the point is at
    const arcAngleRatio = 1.0 - _tempNormal.angleTo(faceDirVector) / halfArc;
    if (Math.sign(_tempNormal[uvAxis]) === 1) {
        return arcAngleRatio * arcUvRatio;
    } else {
        // total amount of UV space alloted to the plane between the arcs
        const lenUv = centerLength / (totArcLength + centerLength);
        return lenUv + arcUvRatio + arcUvRatio * (1.0 - arcAngleRatio);
    }
}
/**
 * A special type of box geometry with rounded corners and edges.
 *
 * ```js
 * const geometry = new THREE.RoundedBoxGeometry();
 * const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
 * const cube = new THREE.Mesh( geometry, material );
 * scene.add( cube );
 * ```
 *
 * @augments BoxGeometry
 * @three_import import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
 */ class RoundedBoxGeometry extends __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"] {
    /**
	 * Constructs a new rounded box geometry.
	 *
	 * @param {number} [width=1] - The width. That is, the length of the edges parallel to the X axis.
	 * @param {number} [height=1] - The height. That is, the length of the edges parallel to the Y axis.
	 * @param {number} [depth=1] - The depth. That is, the length of the edges parallel to the Z axis.
	 * @param {number} [segments=2] - Number of segments that form the rounded corners.
	 * @param {number} [radius=0.1] - The radius of the rounded corners.
	 */ constructor(width = 1, height = 1, depth = 1, segments = 2, radius = 0.1){
        // calculate total segments needed &
        // ensure it's odd so that we have a plane connecting the rounded corners
        const totalSegments = segments * 2 + 1;
        // ensure radius isn't bigger than shortest side
        radius = Math.min(width / 2, height / 2, depth / 2, radius);
        // start with a unit box geometry, its vertices will be modified to form the rounded box
        super(1, 1, 1, totalSegments, totalSegments, totalSegments);
        this.type = 'RoundedBoxGeometry';
        /**
		 * Holds the constructor parameters that have been
		 * used to generate the geometry. Any modification
		 * after instantiation does not change the geometry.
		 *
		 * @type {Object}
		 */ this.parameters = {
            width: width,
            height: height,
            depth: depth,
            segments: segments,
            radius: radius
        };
        // if totalSegments is 1, no rounding is needed - return regular box
        if (totalSegments === 1) return;
        const geometry2 = this.toNonIndexed();
        this.index = null;
        this.attributes.position = geometry2.attributes.position;
        this.attributes.normal = geometry2.attributes.normal;
        this.attributes.uv = geometry2.attributes.uv;
        //
        const position = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        const normal = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        const box = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](width, height, depth).divideScalar(2).subScalar(radius);
        const positions = this.attributes.position.array;
        const normals = this.attributes.normal.array;
        const uvs = this.attributes.uv.array;
        const faceTris = positions.length / 6;
        const faceDirVector = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        const halfSegmentSize = 0.5 / totalSegments;
        for(let i = 0, j = 0; i < positions.length; i += 3, j += 2){
            position.fromArray(positions, i);
            normal.copy(position);
            normal.x -= Math.sign(normal.x) * halfSegmentSize;
            normal.y -= Math.sign(normal.y) * halfSegmentSize;
            normal.z -= Math.sign(normal.z) * halfSegmentSize;
            normal.normalize();
            positions[i + 0] = box.x * Math.sign(position.x) + normal.x * radius;
            positions[i + 1] = box.y * Math.sign(position.y) + normal.y * radius;
            positions[i + 2] = box.z * Math.sign(position.z) + normal.z * radius;
            normals[i + 0] = normal.x;
            normals[i + 1] = normal.y;
            normals[i + 2] = normal.z;
            const side = Math.floor(i / faceTris);
            switch(side){
                case 0:
                    // generate UVs along Z then Y
                    faceDirVector.set(1, 0, 0);
                    uvs[j + 0] = getUv(faceDirVector, normal, 'z', 'y', radius, depth);
                    uvs[j + 1] = 1.0 - getUv(faceDirVector, normal, 'y', 'z', radius, height);
                    break;
                case 1:
                    // generate UVs along Z then Y
                    faceDirVector.set(-1, 0, 0);
                    uvs[j + 0] = 1.0 - getUv(faceDirVector, normal, 'z', 'y', radius, depth);
                    uvs[j + 1] = 1.0 - getUv(faceDirVector, normal, 'y', 'z', radius, height);
                    break;
                case 2:
                    // generate UVs along X then Z
                    faceDirVector.set(0, 1, 0);
                    uvs[j + 0] = 1.0 - getUv(faceDirVector, normal, 'x', 'z', radius, width);
                    uvs[j + 1] = getUv(faceDirVector, normal, 'z', 'x', radius, depth);
                    break;
                case 3:
                    // generate UVs along X then Z
                    faceDirVector.set(0, -1, 0);
                    uvs[j + 0] = 1.0 - getUv(faceDirVector, normal, 'x', 'z', radius, width);
                    uvs[j + 1] = 1.0 - getUv(faceDirVector, normal, 'z', 'x', radius, depth);
                    break;
                case 4:
                    // generate UVs along X then Y
                    faceDirVector.set(0, 0, 1);
                    uvs[j + 0] = 1.0 - getUv(faceDirVector, normal, 'x', 'y', radius, width);
                    uvs[j + 1] = 1.0 - getUv(faceDirVector, normal, 'y', 'x', radius, height);
                    break;
                case 5:
                    // generate UVs along X then Y
                    faceDirVector.set(0, 0, -1);
                    uvs[j + 0] = getUv(faceDirVector, normal, 'x', 'y', radius, width);
                    uvs[j + 1] = 1.0 - getUv(faceDirVector, normal, 'y', 'x', radius, height);
                    break;
            }
        }
    }
    /**
	 * Factory method for creating an instance of this class from the given
	 * JSON object.
	 *
	 * @param {Object} data - A JSON object representing the serialized geometry.
	 * @returns {RoundedBoxGeometry} A new instance.
	 */ static fromJSON(data) {
        return new RoundedBoxGeometry(data.width, data.height, data.depth, data.segments, data.radius);
    }
}
;
}),
"[project]/experiences/dissertation-books/node_modules/three/examples/jsm/loaders/OBJLoader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OBJLoader",
    ()=>OBJLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/experiences/dissertation-books/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
// o object_name | g group_name
const _object_pattern = /^[og]\s*(.+)?/;
// mtllib file_reference
const _material_library_pattern = /^mtllib /;
// usemtl material_name
const _material_use_pattern = /^usemtl /;
// usemap map_name
const _map_use_pattern = /^usemap /;
const _face_vertex_data_separator_pattern = /\s+/;
const _vA = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const _vB = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const _vC = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const _ab = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const _cb = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const _color = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
function ParserState() {
    const state = {
        objects: [],
        object: {},
        vertices: [],
        normals: [],
        colors: [],
        uvs: [],
        materials: {},
        materialLibraries: [],
        startObject: function(name, fromDeclaration) {
            // If the current object (initial from reset) is not from a g/o declaration in the parsed
            // file. We need to use it for the first parsed g/o to keep things in sync.
            if (this.object && this.object.fromDeclaration === false) {
                this.object.name = name;
                this.object.fromDeclaration = fromDeclaration !== false;
                return;
            }
            const previousMaterial = this.object && typeof this.object.currentMaterial === 'function' ? this.object.currentMaterial() : undefined;
            if (this.object && typeof this.object._finalize === 'function') {
                this.object._finalize(true);
            }
            this.object = {
                name: name || '',
                fromDeclaration: fromDeclaration !== false,
                geometry: {
                    vertices: [],
                    normals: [],
                    colors: [],
                    uvs: [],
                    hasUVIndices: false
                },
                materials: [],
                smooth: true,
                startMaterial: function(name, libraries) {
                    const previous = this._finalize(false);
                    // New usemtl declaration overwrites an inherited material, except if faces were declared
                    // after the material, then it must be preserved for proper MultiMaterial continuation.
                    if (previous && (previous.inherited || previous.groupCount <= 0)) {
                        this.materials.splice(previous.index, 1);
                    }
                    const material = {
                        index: this.materials.length,
                        name: name || '',
                        mtllib: Array.isArray(libraries) && libraries.length > 0 ? libraries[libraries.length - 1] : '',
                        smooth: previous !== undefined ? previous.smooth : this.smooth,
                        groupStart: previous !== undefined ? previous.groupEnd : 0,
                        groupEnd: -1,
                        groupCount: -1,
                        inherited: false,
                        clone: function(index) {
                            const cloned = {
                                index: typeof index === 'number' ? index : this.index,
                                name: this.name,
                                mtllib: this.mtllib,
                                smooth: this.smooth,
                                groupStart: 0,
                                groupEnd: -1,
                                groupCount: -1,
                                inherited: false
                            };
                            cloned.clone = this.clone.bind(cloned);
                            return cloned;
                        }
                    };
                    this.materials.push(material);
                    return material;
                },
                currentMaterial: function() {
                    if (this.materials.length > 0) {
                        return this.materials[this.materials.length - 1];
                    }
                    return undefined;
                },
                _finalize: function(end) {
                    const lastMultiMaterial = this.currentMaterial();
                    if (lastMultiMaterial && lastMultiMaterial.groupEnd === -1) {
                        lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
                        lastMultiMaterial.groupCount = lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
                        lastMultiMaterial.inherited = false;
                    }
                    // Ignore objects tail materials if no face declarations followed them before a new o/g started.
                    if (end && this.materials.length > 1) {
                        for(let mi = this.materials.length - 1; mi >= 0; mi--){
                            if (this.materials[mi].groupCount <= 0) {
                                this.materials.splice(mi, 1);
                            }
                        }
                    }
                    // Guarantee at least one empty material, this makes the creation later more straight forward.
                    if (end && this.materials.length === 0) {
                        this.materials.push({
                            name: '',
                            smooth: this.smooth
                        });
                    }
                    return lastMultiMaterial;
                }
            };
            // Inherit previous objects material.
            // Spec tells us that a declared material must be set to all objects until a new material is declared.
            // If a usemtl declaration is encountered while this new object is being parsed, it will
            // overwrite the inherited material. Exception being that there was already face declarations
            // to the inherited material, then it will be preserved for proper MultiMaterial continuation.
            if (previousMaterial && previousMaterial.name && typeof previousMaterial.clone === 'function') {
                const declared = previousMaterial.clone(0);
                declared.inherited = true;
                this.object.materials.push(declared);
            }
            this.objects.push(this.object);
        },
        finalize: function() {
            if (this.object && typeof this.object._finalize === 'function') {
                this.object._finalize(true);
            }
        },
        parseVertexIndex: function(value, len) {
            const index = parseInt(value, 10);
            return (index >= 0 ? index - 1 : index + len / 3) * 3;
        },
        parseNormalIndex: function(value, len) {
            const index = parseInt(value, 10);
            return (index >= 0 ? index - 1 : index + len / 3) * 3;
        },
        parseUVIndex: function(value, len) {
            const index = parseInt(value, 10);
            return (index >= 0 ? index - 1 : index + len / 2) * 2;
        },
        addVertex: function(a, b, c) {
            const src = this.vertices;
            const dst = this.object.geometry.vertices;
            dst.push(src[a + 0], src[a + 1], src[a + 2]);
            dst.push(src[b + 0], src[b + 1], src[b + 2]);
            dst.push(src[c + 0], src[c + 1], src[c + 2]);
        },
        addVertexPoint: function(a) {
            const src = this.vertices;
            const dst = this.object.geometry.vertices;
            dst.push(src[a + 0], src[a + 1], src[a + 2]);
        },
        addVertexLine: function(a) {
            const src = this.vertices;
            const dst = this.object.geometry.vertices;
            dst.push(src[a + 0], src[a + 1], src[a + 2]);
        },
        addNormal: function(a, b, c) {
            const src = this.normals;
            const dst = this.object.geometry.normals;
            dst.push(src[a + 0], src[a + 1], src[a + 2]);
            dst.push(src[b + 0], src[b + 1], src[b + 2]);
            dst.push(src[c + 0], src[c + 1], src[c + 2]);
        },
        addFaceNormal: function(a, b, c) {
            const src = this.vertices;
            const dst = this.object.geometry.normals;
            _vA.fromArray(src, a);
            _vB.fromArray(src, b);
            _vC.fromArray(src, c);
            _cb.subVectors(_vC, _vB);
            _ab.subVectors(_vA, _vB);
            _cb.cross(_ab);
            _cb.normalize();
            dst.push(_cb.x, _cb.y, _cb.z);
            dst.push(_cb.x, _cb.y, _cb.z);
            dst.push(_cb.x, _cb.y, _cb.z);
        },
        addColor: function(a, b, c) {
            const src = this.colors;
            const dst = this.object.geometry.colors;
            if (src[a] !== undefined) dst.push(src[a + 0], src[a + 1], src[a + 2]);
            if (src[b] !== undefined) dst.push(src[b + 0], src[b + 1], src[b + 2]);
            if (src[c] !== undefined) dst.push(src[c + 0], src[c + 1], src[c + 2]);
        },
        addUV: function(a, b, c) {
            const src = this.uvs;
            const dst = this.object.geometry.uvs;
            dst.push(src[a + 0], src[a + 1]);
            dst.push(src[b + 0], src[b + 1]);
            dst.push(src[c + 0], src[c + 1]);
        },
        addDefaultUV: function() {
            const dst = this.object.geometry.uvs;
            dst.push(0, 0);
            dst.push(0, 0);
            dst.push(0, 0);
        },
        addUVLine: function(a) {
            const src = this.uvs;
            const dst = this.object.geometry.uvs;
            dst.push(src[a + 0], src[a + 1]);
        },
        addFace: function(a, b, c, ua, ub, uc, na, nb, nc) {
            const vLen = this.vertices.length;
            let ia = this.parseVertexIndex(a, vLen);
            let ib = this.parseVertexIndex(b, vLen);
            let ic = this.parseVertexIndex(c, vLen);
            this.addVertex(ia, ib, ic);
            this.addColor(ia, ib, ic);
            // normals
            if (na !== undefined && na !== '') {
                const nLen = this.normals.length;
                ia = this.parseNormalIndex(na, nLen);
                ib = this.parseNormalIndex(nb, nLen);
                ic = this.parseNormalIndex(nc, nLen);
                this.addNormal(ia, ib, ic);
            } else {
                this.addFaceNormal(ia, ib, ic);
            }
            // uvs
            if (ua !== undefined && ua !== '') {
                const uvLen = this.uvs.length;
                ia = this.parseUVIndex(ua, uvLen);
                ib = this.parseUVIndex(ub, uvLen);
                ic = this.parseUVIndex(uc, uvLen);
                this.addUV(ia, ib, ic);
                this.object.geometry.hasUVIndices = true;
            } else {
                // add placeholder values (for inconsistent face definitions)
                this.addDefaultUV();
            }
        },
        addPointGeometry: function(vertices) {
            this.object.geometry.type = 'Points';
            const vLen = this.vertices.length;
            for(let vi = 0, l = vertices.length; vi < l; vi++){
                const index = this.parseVertexIndex(vertices[vi], vLen);
                this.addVertexPoint(index);
                this.addColor(index);
            }
        },
        addLineGeometry: function(vertices, uvs) {
            this.object.geometry.type = 'Line';
            const vLen = this.vertices.length;
            const uvLen = this.uvs.length;
            for(let vi = 0, l = vertices.length; vi < l; vi++){
                this.addVertexLine(this.parseVertexIndex(vertices[vi], vLen));
            }
            for(let uvi = 0, l = uvs.length; uvi < l; uvi++){
                this.addUVLine(this.parseUVIndex(uvs[uvi], uvLen));
            }
        }
    };
    state.startObject('', false);
    return state;
}
/**
 * A loader for the OBJ format.
 *
 * The [OBJ format](https://en.wikipedia.org/wiki/Wavefront_.obj_file) is a simple data-format that
 * represents 3D geometry in a human readable format as the position of each vertex, the UV position of
 * each texture coordinate vertex, vertex normals, and the faces that make each polygon defined as a list
 * of vertices, and texture vertices.
 *
 * ```js
 * const loader = new OBJLoader();
 * const object = await loader.loadAsync( 'models/monster.obj' );
 * scene.add( object );
 * ```
 *
 * @augments Loader
 * @three_import import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
 */ class OBJLoader extends __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"] {
    /**
	 * Constructs a new OBJ loader.
	 *
	 * @param {LoadingManager} [manager] - The loading manager.
	 */ constructor(manager){
        super(manager);
        /**
		 * A reference to a material creator.
		 *
		 * @type {?MaterialCreator}
		 * @default null
		 */ this.materials = null;
    }
    /**
	 * Starts loading from the given URL and passes the loaded OBJ asset
	 * to the `onLoad()` callback.
	 *
	 * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
	 * @param {function(Group)} onLoad - Executed when the loading process has been finished.
	 * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
	 * @param {onErrorCallback} onError - Executed when errors occur.
	 */ load(url, onLoad, onProgress, onError) {
        const scope = this;
        const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileLoader"](this.manager);
        loader.setPath(this.path);
        loader.setRequestHeader(this.requestHeader);
        loader.setWithCredentials(this.withCredentials);
        loader.load(url, function(text) {
            try {
                onLoad(scope.parse(text));
            } catch (e) {
                if (onError) {
                    onError(e);
                } else {
                    console.error(e);
                }
                scope.manager.itemError(url);
            }
        }, onProgress, onError);
    }
    /**
	 * Sets the material creator for this OBJ. This object is loaded via {@link MTLLoader}.
	 *
	 * @param {MaterialCreator} materials - An object that creates the materials for this OBJ.
	 * @return {OBJLoader} A reference to this loader.
	 */ setMaterials(materials) {
        this.materials = materials;
        return this;
    }
    /**
	 * Parses the given OBJ data and returns the resulting group.
	 *
	 * @param {string} text - The raw OBJ data as a string.
	 * @return {Group} The parsed OBJ.
	 */ parse(text) {
        const state = new ParserState();
        if (text.indexOf('\r\n') !== -1) {
            // This is faster than String.split with regex that splits on both
            text = text.replace(/\r\n/g, '\n');
        }
        if (text.indexOf('\\\n') !== -1) {
            // join lines separated by a line continuation character (\)
            text = text.replace(/\\\n/g, '');
        }
        const lines = text.split('\n');
        let result = [];
        for(let i = 0, l = lines.length; i < l; i++){
            const line = lines[i].trimStart();
            if (line.length === 0) continue;
            const lineFirstChar = line.charAt(0);
            // @todo invoke passed in handler if any
            if (lineFirstChar === '#') continue; // skip comments
            if (lineFirstChar === 'v') {
                const data = line.split(_face_vertex_data_separator_pattern);
                switch(data[0]){
                    case 'v':
                        state.vertices.push(parseFloat(data[1]), parseFloat(data[2]), parseFloat(data[3]));
                        if (data.length >= 7) {
                            _color.setRGB(parseFloat(data[4]), parseFloat(data[5]), parseFloat(data[6]), __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"]);
                            state.colors.push(_color.r, _color.g, _color.b);
                        } else {
                            // if no colors are defined, add placeholders so color and vertex indices match
                            state.colors.push(undefined, undefined, undefined);
                        }
                        break;
                    case 'vn':
                        state.normals.push(parseFloat(data[1]), parseFloat(data[2]), parseFloat(data[3]));
                        break;
                    case 'vt':
                        state.uvs.push(parseFloat(data[1]), parseFloat(data[2]));
                        break;
                }
            } else if (lineFirstChar === 'f') {
                const lineData = line.slice(1).trim();
                const vertexData = lineData.split(_face_vertex_data_separator_pattern);
                const faceVertices = [];
                // Parse the face vertex data into an easy to work with format
                for(let j = 0, jl = vertexData.length; j < jl; j++){
                    const vertex = vertexData[j];
                    if (vertex.length > 0) {
                        const vertexParts = vertex.split('/');
                        faceVertices.push(vertexParts);
                    }
                }
                // Draw an edge between the first vertex and all subsequent vertices to form an n-gon
                const v1 = faceVertices[0];
                for(let j = 1, jl = faceVertices.length - 1; j < jl; j++){
                    const v2 = faceVertices[j];
                    const v3 = faceVertices[j + 1];
                    state.addFace(v1[0], v2[0], v3[0], v1[1], v2[1], v3[1], v1[2], v2[2], v3[2]);
                }
            } else if (lineFirstChar === 'l') {
                const lineParts = line.substring(1).trim().split(' ');
                let lineVertices = [];
                const lineUVs = [];
                if (line.indexOf('/') === -1) {
                    lineVertices = lineParts;
                } else {
                    for(let li = 0, llen = lineParts.length; li < llen; li++){
                        const parts = lineParts[li].split('/');
                        if (parts[0] !== '') lineVertices.push(parts[0]);
                        if (parts[1] !== '') lineUVs.push(parts[1]);
                    }
                }
                state.addLineGeometry(lineVertices, lineUVs);
            } else if (lineFirstChar === 'p') {
                const lineData = line.slice(1).trim();
                const pointData = lineData.split(' ');
                state.addPointGeometry(pointData);
            } else if ((result = _object_pattern.exec(line)) !== null) {
                // o object_name
                // or
                // g group_name
                // WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
                // let name = result[ 0 ].slice( 1 ).trim();
                const name = (' ' + result[0].slice(1).trim()).slice(1);
                state.startObject(name);
            } else if (_material_use_pattern.test(line)) {
                // material
                state.object.startMaterial(line.substring(7).trim(), state.materialLibraries);
            } else if (_material_library_pattern.test(line)) {
                // mtl file
                state.materialLibraries.push(line.substring(7).trim());
            } else if (_map_use_pattern.test(line)) {
                // the line is parsed but ignored since the loader assumes textures are defined MTL files
                // (according to https://www.okino.com/conv/imp_wave.htm, 'usemap' is the old-style Wavefront texture reference method)
                console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
            } else if (lineFirstChar === 's') {
                result = line.split(' ');
                // smooth shading
                // @todo Handle files that have varying smooth values for a set of faces inside one geometry,
                // but does not define a usemtl for each face set.
                // This should be detected and a dummy material created (later MultiMaterial and geometry groups).
                // This requires some care to not create extra material on each smooth value for "normal" obj files.
                // where explicit usemtl defines geometry groups.
                // Example asset: examples/models/obj/cerberus/Cerberus.obj
                /*
					 * http://paulbourke.net/dataformats/obj/
					 *
					 * From chapter "Grouping" Syntax explanation "s group_number":
					 * "group_number is the smoothing group number. To turn off smoothing groups, use a value of 0 or off.
					 * Polygonal elements use group numbers to put elements in different smoothing groups. For free-form
					 * surfaces, smoothing groups are either turned on or off; there is no difference between values greater
					 * than 0."
					 */ if (result.length > 1) {
                    const value = result[1].trim().toLowerCase();
                    state.object.smooth = value !== '0' && value !== 'off';
                } else {
                    // ZBrush can produce "s" lines #11707
                    state.object.smooth = true;
                }
                const material = state.object.currentMaterial();
                if (material) material.smooth = state.object.smooth;
            } else {
                // Handle null terminated files without exception
                if (line === '\0') continue;
                console.warn('THREE.OBJLoader: Unexpected line: "' + line + '"');
            }
        }
        state.finalize();
        const container = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
        container.materialLibraries = [].concat(state.materialLibraries);
        const hasPrimitives = !(state.objects.length === 1 && state.objects[0].geometry.vertices.length === 0);
        if (hasPrimitives === true) {
            for(let i = 0, l = state.objects.length; i < l; i++){
                const object = state.objects[i];
                const geometry = object.geometry;
                const materials = object.materials;
                const isLine = geometry.type === 'Line';
                const isPoints = geometry.type === 'Points';
                let hasVertexColors = false;
                // Skip o/g line declarations that did not follow with any faces
                if (geometry.vertices.length === 0) continue;
                const buffergeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
                buffergeometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](geometry.vertices, 3));
                if (geometry.normals.length > 0) {
                    buffergeometry.setAttribute('normal', new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](geometry.normals, 3));
                }
                if (geometry.colors.length > 0) {
                    hasVertexColors = true;
                    buffergeometry.setAttribute('color', new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](geometry.colors, 3));
                }
                if (geometry.hasUVIndices === true) {
                    buffergeometry.setAttribute('uv', new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](geometry.uvs, 2));
                }
                // Create materials
                const createdMaterials = [];
                for(let mi = 0, miLen = materials.length; mi < miLen; mi++){
                    const sourceMaterial = materials[mi];
                    const materialHash = sourceMaterial.name + '_' + sourceMaterial.smooth + '_' + hasVertexColors;
                    let material = state.materials[materialHash];
                    if (this.materials !== null) {
                        material = this.materials.create(sourceMaterial.name);
                        // mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
                        if (isLine && material && !(material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"])) {
                            const materialLine = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]();
                            __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].prototype.copy.call(materialLine, material);
                            materialLine.color.copy(material.color);
                            material = materialLine;
                        } else if (isPoints && material && !(material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"])) {
                            const materialPoints = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                                size: 10,
                                sizeAttenuation: false
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].prototype.copy.call(materialPoints, material);
                            materialPoints.color.copy(material.color);
                            materialPoints.map = material.map;
                            material = materialPoints;
                        }
                    }
                    if (material === undefined) {
                        if (isLine) {
                            material = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]();
                        } else if (isPoints) {
                            material = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                                size: 1,
                                sizeAttenuation: false
                            });
                        } else {
                            material = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]();
                        }
                        material.name = sourceMaterial.name;
                        material.flatShading = sourceMaterial.smooth ? false : true;
                        material.vertexColors = hasVertexColors;
                        state.materials[materialHash] = material;
                    }
                    createdMaterials.push(material);
                }
                // Create mesh
                let mesh;
                if (createdMaterials.length > 1) {
                    for(let mi = 0, miLen = materials.length; mi < miLen; mi++){
                        const sourceMaterial = materials[mi];
                        buffergeometry.addGroup(sourceMaterial.groupStart, sourceMaterial.groupCount, mi);
                    }
                    if (isLine) {
                        mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineSegments"](buffergeometry, createdMaterials);
                    } else if (isPoints) {
                        mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](buffergeometry, createdMaterials);
                    } else {
                        mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](buffergeometry, createdMaterials);
                    }
                } else {
                    if (isLine) {
                        mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineSegments"](buffergeometry, createdMaterials[0]);
                    } else if (isPoints) {
                        mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](buffergeometry, createdMaterials[0]);
                    } else {
                        mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](buffergeometry, createdMaterials[0]);
                    }
                }
                mesh.name = object.name;
                container.add(mesh);
            }
        } else {
            // if there is only the default parser state object with no geometry data, interpret data as point cloud
            if (state.vertices.length > 0) {
                const material = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                    size: 1,
                    sizeAttenuation: false
                });
                const buffergeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
                buffergeometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](state.vertices, 3));
                if (state.colors.length > 0 && state.colors[0] !== undefined) {
                    buffergeometry.setAttribute('color', new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](state.colors, 3));
                    material.vertexColors = true;
                }
                const points = new __TURBOPACK__imported__module__$5b$project$5d2f$experiences$2f$dissertation$2d$books$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](buffergeometry, material);
                container.add(points);
            }
        }
        return container;
    }
}
;
}),
]);

//# sourceMappingURL=018h_three_examples_jsm_0v9tobv._.js.map