// app.js

// Kiểm tra xem phần tử canvas có tồn tại không
var canvas = document.getElementById("renderCanvas");
if (!canvas) {
    console.error("Không tìm thấy phần tử canvas!");
    return;
}

// Khởi tạo Babylon.js Engine
var engine = new BABYLON.Engine(canvas, true);  // true cho phép anti-aliasing

// Tạo scene
var scene = new BABYLON.Scene(engine);

// Tạo camera, sử dụng ArcRotateCamera để di chuyển quanh vật thể
var camera = new BABYLON.ArcRotateCamera("camera1", Math.PI / 2, Math.PI / 2, 10, BABYLON.Vector3.Zero(), scene);
camera.attachControl(canvas, true);

// Tạo ánh sáng
var light = new BABYLON.HemisphericLight("light1", BABYLON.Vector3.Up(), scene);

// Tạo một vật thể - quả cầu
var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2}, scene);

// Vòng lặp render: render lại cảnh mỗi khi trình duyệt cập nhật
engine.runRenderLoop(function() {
    scene.render();
});

// Điều chỉnh lại kích thước canvas khi cửa sổ thay đổi kích thước
window.addEventListener("resize", function() {
    engine.resize();
});

// Kiểm tra WebGL có được hỗ trợ không
if (!BABYLON.Engine.isSupported()) {
    alert("WebGL không được hỗ trợ trên trình duyệt của bạn.");
}
