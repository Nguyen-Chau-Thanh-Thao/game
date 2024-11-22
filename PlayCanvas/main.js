// Khi trang đã được tải xong, bắt đầu chạy PlayCanvas
window.addEventListener('DOMContentLoaded', function() {
    // Tạo canvas PlayCanvas và gắn vào div container
    var canvas = document.createElement('canvas');
    document.getElementById('canvas-container').appendChild(canvas);
  
    // Tạo ứng dụng PlayCanvas và gắn canvas vào
    var app = new pc.Application(canvas, {
      mouse: new pc.Mouse(canvas),
      touch: new pc.TouchDevice(canvas)
    });
  
    // Thiết lập kích thước canvas
    app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
    app.setCanvasResolution(pc.RESOLUTION_AUTO);
  
    // Tạo một cảnh mới
    var scene = app.scene;
  
    // Tạo một camera và gắn vào trong cảnh
    var camera = new pc.Entity();
    camera.addComponent('camera', {
      clearColor: new pc.Color(0.5, 0.5, 0.5)
    });
    scene.addEntity(camera);
    camera.setPosition(0, 0, 3);
  
    // Tạo ánh sáng cho cảnh
    var light = new pc.Entity();
    light.addComponent('light');
    scene.addEntity(light);
    light.setPosition(0, 2, 3);
  
    // Tạo một hình lập phương (cube) và thêm vào cảnh
    var box = new pc.Entity();
    box.addComponent('model', {
      type: 'box'
    });
    scene.addEntity(box);
    box.setPosition(0, 0, 0);
  
    // Hàm render để render cảnh
    app.start();
  
    // Cập nhật góc quay của hình lập phương
    app.on('update', function(dt) {
      box.rotate(10 * dt, 10 * dt, 0);
    });
  });
  