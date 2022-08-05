const strokeBtn = document.getElementById("Stroke-btn");
const fillBtn = document.getElementById("Fill-btn");
const color = document.getElementById("color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // context : brush임
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

let isPainting = false;
let isStroke = true;

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
  if (!isStroke) {
    ctx.closePath();
    ctx.fill();
  }
}

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    if (!isStroke) {
      let region = new Path2D();
      region.lineTo(event.offsetX, event.offsetY);
    }
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mousemove", onMove);

color.addEventListener("change", onColorChange);
fillBtn.addEventListener("click", () => (isStroke = false));
strokeBtn.addEventListener("click", () => (isStroke = true));
