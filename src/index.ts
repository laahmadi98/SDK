const showcase = document.getElementById('showcase') as HTMLIFrameElement;
const key = 'u12xi5z82e0a4nbrhgxc3fk2d';

// declare this file is a module
export { };

// augment window with the MP_SDK property
declare global {
  interface Window {
    MP_SDK: any;
  }
}

showcase.addEventListener('load', async function () {
  let sdk;

  try {
    sdk = await showcase.contentWindow.MP_SDK.connect(showcase, key, '3.6');
    const lights = await sdk.Scene.createNode();
    lights.addComponent('mp.lights');
    lights.start();
    
    
  }
  catch (e) {
    console.error(e);
    return;
  }

  console.log('%c  Hello Bundle SDK! ', 'background: #333333; color: #00dd00');
  console.log(sdk);
  const modelNode = await sdk.Scene.createNode();
  

  // Store the fbx component since we will need to adjust it in the next step.
  const fbxComponent = modelNode.addComponent(sdk.Scene.Component.GLTF_LOADER, {
    url: 'https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/gltf/Duck/glTF-Binary/Duck.glb',
  });

  
  const fbxComponent1 = modelNode.addComponent(sdk.Scene.Component.FBX_LOADER, {
    url: 'https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/fbx/stanford-bunny.fbx',
  });


 
  fbxComponent.inputs.localScale = {
    x: 0.3,
    y: 0.3,
    z: 0.3
  };

  fbxComponent1.inputs.localScale = {
    x: 0.00002,
    y: 0.00002,
    z: 0.00002
  };

  fbxComponent1.inputs.localPosition = {
    x: 0,
    y: -1,
    z: 0
  }

  fbxComponent1.inputs.localRotaion = {
    x: 1,
    y: 1,
    z: 1
  }

  console.log("fbxComponent", fbxComponent );


  modelNode.obj3D.position.set(0,0,0);
  // modelNode.obj3D.position.set(0,1,0);

  modelNode.start();


  const tick = function() {
    requestAnimationFrame(tick);
    modelNode.obj3D.rotation.y += 0.02;
  }
  tick();


});