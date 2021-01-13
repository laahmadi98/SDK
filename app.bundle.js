(function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
    /******/
    /******/ 		// Check if module is in cache
    /******/ 		if(installedModules[moduleId]) {
    /******/ 			return installedModules[moduleId].exports;
    /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = installedModules[moduleId] = {
    /******/ 			i: moduleId,
    /******/ 			l: false,
    /******/ 			exports: {}
    /******/ 		};
    /******/
    /******/ 		// Execute the module function
    /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ 		// Flag the module as loaded
    /******/ 		module.l = true;
    /******/
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function(exports, name, getter) {
    /******/ 		if(!__webpack_require__.o(exports, name)) {
    /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
    /******/ 		}
    /******/ 	};
    /******/
    /******/ 	// define __esModule on exports
    /******/ 	__webpack_require__.r = function(exports) {
    /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    /******/ 		}
    /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
    /******/ 	};
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/ 	__webpack_require__.t = function(value, mode) {
    /******/ 		if(mode & 1) value = __webpack_require__(value);
    /******/ 		if(mode & 8) return value;
    /******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /******/ 		var ns = Object.create(null);
    /******/ 		__webpack_require__.r(ns);
    /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
    /******/ 		return ns;
    /******/ 	};
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function(module) {
    /******/ 		var getter = module && module.__esModule ?
    /******/ 			function getDefault() { return module['default']; } :
    /******/ 			function getModuleExports() { return module; };
    /******/ 		__webpack_require__.d(getter, 'a', getter);
    /******/ 		return getter;
    /******/ 	};
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
    /******/ })
    /************************************************************************/
    /******/ ({
    
    /***/ "./src/index.ts":
    /*!**********************!*\
      !*** ./src/index.ts ***!
      \**********************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    //let it all begin
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    const showcase = document.getElementById('showcase');
    const key = 'ppbuyxf83b8gf792q7afw8nqa';
    showcase.addEventListener('load', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let sdk;
            try {
                sdk = yield showcase.contentWindow.MP_SDK.connect(showcase, key, '3.6');
            }
            catch (e) {
                console.error(e);
                return;
            }
            console.log('%c  Hello Bundle SDK! ', 'background: #333333; color: #00dd00');
            console.log(sdk);
            //ADDING LIGHTS
            const lights = yield sdk.Scene.createNode();
            var initial_light = {
                enabled: true,
                color: {
                    r: 1, g: 1, b: 1
                },
                intensity: 2,
            };
            lights.addComponent('mp.lights', initial_light);
            lights.start();
            //ADDING MODEL0---------------Main Floor (1)--------------------
            const modelNode0 = yield sdk.Scene.createNode();
            // Store the fbx component since we will need to adjust it in the next step.
            const objComponent0 = modelNode0.addComponent(sdk.Scene.Component.OBJ_LOADER, {
                url: '/3D_models/cage-tables-by-tacchini/Coffe_Table_Cage_tables.obj',
                materialUrl: '/3D_models/cage-tables-by-tacchini/Coffe_Table_Cage_tables.mtl',
            });
            //initial scaling 
            objComponent0.inputs.localScale = {
                x: 1,
                y: 1,
                z: 1
            };
            //initial positioning 
            modelNode0.obj3D.position.set(4.18, -0.45, -0.34); // (x, z, -y ) 
            modelNode0.obj3D.rotation.set(0, 0, 0); // (x, z, -y ) 
            modelNode0.start();
            //ADDING MODEL1---------------Main Floor (2)--------------------
            const modelNode1 = yield sdk.Scene.createNode();
            // Store the fbx component since we will need to adjust it in the next step.
            const objComponent1 = modelNode1.addComponent(sdk.Scene.Component.OBJ_LOADER, {
                url: '/3D_models/Armchair With Pillows/Armchair with pillows.obj',
                materialUrl: '/3D_models/Armchair With Pillows/Armchair with pillows.mtl',
            });
            //initial scaling 
            objComponent1.inputs.localScale = {
                x: 1,
                y: 1,
                z: 1
            };
            //initial positioning 
            modelNode1.obj3D.position.set(-9.7, -0.45, -2.06); // (x, z, -y ) 
            modelNode1.obj3D.rotation.set(0, 0, 0); // (x, z, -y ) 
            modelNode1.start();
            //ADDING MODEL2---------------Main Floor (3)--------------------
            const modelNode2 = yield sdk.Scene.createNode();
            // Store the fbx component since we will need to adjust it in the next step.
            const objComponent2 = modelNode2.addComponent(sdk.Scene.Component.OBJ_LOADER, {
                url: '/3D_models/Armchair With Pillows/Armchair with pillows.obj',
                materialUrl: '/3D_models/Armchair With Pillows/Armchair with pillows.mtl',
            });
            //initial scaling 
            objComponent2.inputs.localScale = {
                x: 1,
                y: 1,
                z: 1
            };
            //initial positioning 
            modelNode2.obj3D.position.set(-9.7, -0.45, -0.81); // (x, z, -y ) 
            modelNode2.obj3D.rotation.set(0, 0, 0); // (x, z, -y ) 
            modelNode2.start();
            //ADDING MODEL3---------------Main Floor (7)--------------------
            const modelNode3 = yield sdk.Scene.createNode();
            // Store the fbx component since we will need to adjust it in the next step.
            const objComponent3 = modelNode3.addComponent(sdk.Scene.Component.OBJ_LOADER, {
                url: '/3D_models/Poliform Dune Sofa 3D Model Files/sofa.obj',
                materialUrl: '/3D_models/Poliform Dune Sofa 3D Model Files/sofa.mtl',
            });
            //initial scaling 
            objComponent3.inputs.localScale = {
                x: 1,
                y: 1,
                z: 1
            };
            //initial positioning 
            modelNode3.obj3D.position.set(4.2, -0.45, 0.96); // (x, z, -y ) 
            modelNode3.obj3D.rotation.set(0, -4.71225, 0); // (x, z, -y ) 
            modelNode3.start();
        });
    });
    
    
    /***/ })
    
    /******/ });
    //# sourceMappingURL=app.bundle.js.map