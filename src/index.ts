

const showcase = document.getElementById('showcase') as HTMLIFrameElement;
const key = 'ppbuyxf83b8gf792q7afw8nqa';

export { }
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


    //ADDING MODEL4---------------Main Floor (1)--------------------
    
    // const modelNode4 = await sdk.Scene.createNode();
    // // Store the fbx component since we will need to adjust it in the next step.
    // const objComponent4 = modelNode4.addComponent(sdk.Scene.Component.OBJ_LOADER, {
    //     url: '/3D_models/17-potted_plant_obj/potted_plant_obj.obj',
    //     materialUrl: '/3D_models/17-potted_plant_obj/potted_plant_obj.mtl',
    // });
    // //initial scaling 
    // objComponent4.inputs.localScale = {
    //     x: 0.03,
    //     y: 0.03,
    //     z: 0.03,
    // };
    // //initial positioning 
    // modelNode4.obj3D.position.set(4.1, 0, -0.35); // (x, z, -y ) 
    // modelNode4.obj3D.rotation.set(0, -1.1, 0); // (x, z, -y ) 
    // modelNode4.start();
   

    //ADDING MODEL5---------------Main Floor (1)--------------------
    const modelNode5 = await sdk.Scene.createNode();
    // Store the fbx component since we will need to adjust it in the next step.
    const objComponent5 = modelNode5.addComponent(sdk.Scene.Component.FBX_LOADER, {
        url: '/3D_models/uploads_files_629071_Gasteria_FBX/cactus_gasteria.fbx',
    });
    //initial scaling 
    objComponent5.inputs.localScale = {
        x: 0.03,
        y: 0.03,
        z: 0.03,
    };
    //initial positioning 
    modelNode5.obj3D.position.set(4.1, 0, -0.35); // (x, z, -y ) 
    modelNode5.obj3D.rotation.set(0, -1.1, 0); // (x, z, -y ) 
    modelNode5.start();


        //ADDING MODEL6--------------Main Floor (1)--------------------
        const modelNode6 = await sdk.Scene.createNode();
        // Store the fbx component since we will need to adjust it in the next step.
        const objComponent6= modelNode6.addComponent(sdk.Scene.Component.OBJ_LOADER, {
            url: '/3D_models/flower-obj/flower.obj',
            materialUrl: '/3D_models/flower-obj/flower.mtl',
        });
        //initial scaling 
        objComponent6.inputs.localScale = {
            x: 0.01,
            y: 0.01,
            z: 0.01,
        };
        //initial positioning 
        modelNode6.obj3D.position.set(6, -0.2, -1.8); // (x, z, -y ) 
        modelNode6.obj3D.rotation.set(0, -1.1, 0); // (x, z, -y ) 
        modelNode6.start();


        
        //ADDING MODEL7--------------Main Floor (1)--------------------
        const modelNode7 = await sdk.Scene.createNode();
        // Store the fbx component since we will need to adjust it in the next step.
        const objComponent7= modelNode7.addComponent(sdk.Scene.Component.OBJ_LOADER, {
            url: '/3D_models/uploads_files_2057468_Branches+in+Vases+OBJM1/OBJ+MTL.obj',
            materialUrl: '/3D_models/uploads_files_2057468_Branches+in+Vases+OBJM1/OBJ+MTL.mtl',
        });
        //initial scaling 
        objComponent7.inputs.localScale = {
            x: 0.003,
            y: 0.003,
            z: 0.003,
        };
        //initial positioning 
        modelNode7.obj3D.position.set(0.6, 0.47, 1.1); // (x, z, -y ) 
        modelNode7.obj3D.rotation.set(0, 0, 0); // (x, z, -y ) 
        modelNode7.start();


             //ADDING MODEL8--------------Main Floor (1)--------------------
             const modelNode8 = await sdk.Scene.createNode();
             // Store the fbx component since we will need to adjust it in the next step.
             const objComponent8= modelNode8.addComponent(sdk.Scene.Component.FBX_LOADER, {
                 url: '/3D_models/kitchen/Cookie-Sheet-1.fbx',
                //  materialUrl: '/3D_models/Apfel/Apfel.mtl',
             });
             //initial scaling 
             objComponent8.inputs.localScale = {
                 x:1,
                 y:1,
                 z:1,
             };
             //initial positioning 
             modelNode8.obj3D.position.set(-1,0.4, -1.1); // (x, z, -y ) 
             modelNode8.obj3D.rotation.set(0, 0, 0); // (x, z, -y ) 
             modelNode8.start();

             //ADDING MODEL9--------------Main Floor (1)--------------------
             const modelNode9 = await sdk.Scene.createNode();
             // Store the fbx component since we will need to adjust it in the next step.
             const objComponent9= modelNode9.addComponent(sdk.Scene.Component.FBX_LOADER, {
                 url: '/3D_models/kitchen/Bowl-1-Soup.fbx',
                //  materialUrl: '/3D_models/Apfel/Apfel.mtl',
             });
             //initial scaling 
             objComponent9.inputs.localScale = {
                 x:1,
                 y:1,
                 z:1,
             };
             //initial positioning 
             modelNode9.obj3D.position.set(-0.1,0.5, -2.5); // (x, z, -y ) 
             modelNode9.obj3D.rotation.set(0, 0, 0); // (x, z, -y ) 
             modelNode9.start();

             
             //ADDING MODEL10--------------Main Floor (1)--------------------
             const modelNode10 = await sdk.Scene.createNode();
             // Store the fbx component since we will need to adjust it in the next step.
             const objComponent10= modelNode10.addComponent(sdk.Scene.Component.FBX_LOADER, {
                 url: '/3D_models/kitchen/Mug-1.fbx',
                //  materialUrl: '/3D_models/Apfel/Apfel.mtl',
             });
             //initial scaling 
             objComponent10.inputs.localScale = {
                 x:1,
                 y:1,
                 z:1,
             };
             //initial positioning 
             modelNode10.obj3D.position.set(-0.3,0.5, -2.5); // (x, z, -y ) 
             modelNode10.obj3D.rotation.set(0, 0, 0); // (x, z, -y ) 
             modelNode10.start();


             

                  //ADDING MODEL10--------------Main Floor (1)--------------------
                  const modelNode11 = await sdk.Scene.createNode();
                  // Store the fbx component since we will need to adjust it in the next step.
                  const objComponent11= modelNode11.addComponent(sdk.Scene.Component.OBJ_LOADER, {
                      url: '/3D_models/animal/11706_stuffed_animal_L2.obj',
                      materialUrl: '/3D_models/animal/11706_stuffed_animal_L2.mtl',
                  });
                  //initial scaling 
                  objComponent11.inputs.localScale = {
                      x:0.02,
                      y:0.02,
                      z:0.02,
                  };
                  //initial positioning 
                  modelNode11.obj3D.position.set(3.9,0.50, -2.6); // (x, z, -y ) 
                  modelNode11.obj3D.rotation.set(-1.7, 0, 0); // (x, z, -y ) 
                  modelNode11.start();


});
