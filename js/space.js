let camera, scene, renderer, controls;

init();
animate();

function init() {
  scene = new THREE.Scene();

  let width = window.innerWidth;
  let height = window.innerHeight;

  // cubemap
  scene.background = new THREE.CubeTextureLoader()
    .setPath( 'img/' )
    .load( [
      'posx.jpg',
      'negx.jpg',
      'posy.jpg',
      'negy.jpg',
      'posz.jpg',
      'negz.jpg'
    ] );
  }