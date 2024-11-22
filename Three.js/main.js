// Khởi tạo cảnh Three.js
let scene, camera, renderer;

function init() {
  // Tạo cảnh
  scene = new THREE.Scene();

  // Tạo camera (fov, aspect, near, far)
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Tạo renderer và thêm vào thẻ HTML
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('container').appendChild(renderer.domElement);

  // Tạo một hình lập phương (cube)
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Hàm animate để cập nhật cảnh và render lại
  function animate() {
    requestAnimationFrame(animate);

    // Quay hình lập phương
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render cảnh
    renderer.render(scene, camera);
  }

  animate();
}

// Gọi hàm khởi tạo
init();

// Điều chỉnh lại kích thước canvas khi thay đổi kích thước cửa sổ
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
