// Khởi tạo Babylon.js
window.addEventListener('DOMContentLoaded', function() {
    // Tạo một canvas để Babylon.js sử dụng
    const canvas = document.getElementById('renderCanvas'); 
  
    // Khởi tạo engine Babylon.js
    const engine = new BABYLON.Engine(canvas, true); 
  
    // Tạo một scene
    const scene = new BABYLON.Scene(engine); 
  
    // Tạo camera (ArcRotateCamera cho phép người dùng di chuyển xung quanh)
    const camera = new BABYLON.ArcRotateCamera("camera1", Math.PI / 2, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
  
    // Tạo đèn cho cảnh
    const light = new BABYLON.HemisphericLight("light1", BABYLON.Vector3.Up(), scene);
    light.intensity = 0.7;
  
    // Tạo một hình lập phương (box) trong scene
    const box = BABYLON.MeshBuilder.CreateBox("box", { size: 2 }, scene);
  
    // Cấu hình các thuộc tính vật liệu
    const material = new BABYLON.StandardMaterial("boxMaterial", scene);
    material.diffuseColor = new BABYLON.Color3(0, 1, 0); // Màu xanh lá cây
    box.material = material;
  
    // Vòng lặp render scene
    engine.runRenderLoop(function() {
      scene.render();
    });
  
    // Cập nhật kích thước khi thay đổi kích thước cửa sổ
    window.addEventListener('resize', function() {
      engine.resize();
    });
  });
  