var canvas;
var gl;

function init() {
  canvas = document.querySelector("#glCanvas");
  gl = canvas.getContext("webgl");

  // Only continue if WebGL is available and working
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }

  gl.clearColor(0.2, 0.25, 0.3, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}

