

const showcase = document.getElementById('showcase') as HTMLIFrameElement;
const key = 'ppbuyxf83b8gf792q7afw8nqa';

export {}
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
        }
        catch (e) {
            console.error(e);
            return;
        }
        console.log('%c  Hello Bundle SDK! ', 'background: #333333; color: #00dd00');
        console.log(sdk);
        //ADDING LIGHTS
        const lights = await sdk.Scene.createNode();
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
        const modelNode0 = await sdk.Scene.createNode();
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
        modelNode0.obj3D.position.set(4.18, -0.45, -0.45); // (x, z, -y ) 
        modelNode0.obj3D.rotation.set(0, 0, 0); // (x, z, -y ) 
        modelNode0.start();


    //ADDING MODEL3---------------Main Floor (7)--------------------
    const modelNode3 = await sdk.Scene.createNode();
    // Store the fbx component since we will need to adjust it in the next step.
    const objComponent3 = modelNode3.addComponent(sdk.Scene.Component.OBJ_LOADER, {
        url: '/3D_models/cage-tables-by-tacchini/sofa.obj',
        materialUrl: '/3D_models/cage-tables-by-tacchini/sofa.mtl',
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

         //ADDING MODEL1---------------Main Floor (2)--------------------
         const modelNode1 = await sdk.Scene.createNode();
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
         const modelNode2 = await sdk.Scene.createNode();
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
      

});
