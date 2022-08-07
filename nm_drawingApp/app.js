const drawOptions = document.querySelectorAll("button.drawOption");
const fontOptions = document.querySelectorAll("button.fontOption");
const fontsBtns = document.querySelectorAll("button.font");
const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const eraserBtn = document.getElementById("eraser-btn");
const destroyBtn = document.getElementById("destroy-btn");
const modeBtn = document.getElementById("mode-btn");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const fontSize = document.getElementById("font-size");
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // context : brush임
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;
let fontFill = true;
let drawFill = true;
let FONTSIZE = 45;
const FONT1 = `'Oleo Script Swash Caps', cursive`;
const FONT2 = `'Alumni Sans Inline One', cursive;`;
const FONT3 = `'Indie Flower', cursive`;
const fontFamily = {
  font1: "Oleo Script Swash Caps",
  font2: "Alumni Sans Inline One",
  font3: "Indie Flower",
};

function onMove(event) {
  //ctx.beginPath();
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startpainting(event) {
  isPainting = true;
}

function cancelPainting(event) {
  isPainting = false;
  if (drawFill) {
    ctx.fill();
  }
  ctx.beginPath();
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value; // 선색상
  ctx.fillStyle = event.target.value; // 채우기
}

function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue; // 선색상
  ctx.fillStyle = colorValue; // 채우기
  color.value = colorValue;
}

function onModeClick(event) {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick() {
  ctx.strokeStyle = "white";
  // 다시 draw모드로
  isFilling = false;
  modeBtn.innerText = "Fill";
}

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  // console.log(url);//blob:http://127.0.0.1:550~~~~
  //>> 크롬브라우저에만 존재하는 url임 >> 다른브라우저에선 접근x

  const image = new Image(); // == <img src="".></img>
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}

function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save(); // ctx의 현재상태, 색상, 스타일 등 모든것 저장
    ctx.lineWidth = 1;
    ctx.font = `${FONTSIZE}px ${fontFamily[textInput.className]}`;
    if (fontFill) {
      ctx.fillText(text, event.offsetX, event.offsetY);
    } else {
      ctx.strokeText(text, event.offsetX, event.offsetY);
    }
    ctx.restore();
  }
}

function onFontSizeChange(event) {
  FONTSIZE = event.target.value;
}

function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}

function onFontsClick(event) {
  const changeFont = event.target.id;
  textInput.className = changeFont;
  for (const fontsBtn of fontsBtns) {
    fontsBtn.classList.remove("selected");
  }
  event.target.classList.add("selected");
}

function onfontOptionsClick(event) {
  if (event.target.classList.contains("fill")) {
    fontFill = true;
  } else {
    fontFill = false;
  }
  for (const fontOption of fontOptions) {
    fontOption.classList.remove("selected");
  }
  event.target.classList.add("selected");
}

function ondrawOptionClick(event) {
  if (event.target.classList.contains("drawFill")) {
    drawFill = true;
  } else {
    drawFill = false;
  }
  for (const drawOption of drawOptions) {
    drawOption.classList.remove("selected");
  }
  event.target.classList.add("selected");
}

canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startpainting);
// 화면밖에 나가서 마우스떼도 false되도록
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("mouseup", cancelPainting);
//document.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("click", onCanvasClick);

fontSize.addEventListener("change", onFontSizeChange);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);
for (const fontsBtn of fontsBtns) {
  fontsBtn.addEventListener("click", onFontsClick);
}
for (const fontOption of fontOptions) {
  fontOption.addEventListener("click", onfontOptionsClick);
}
for (const drawOption of drawOptions) {
  drawOption.addEventListener("click", ondrawOptionClick);
}
