
document.getElementById('envelope').addEventListener('click', () => {
  const envelope = document.getElementById('envelope');
  envelope.style.transform = 'rotateX(180deg)';
  document.getElementById('paper').style.display = 'block';

  setTimeout(() => {
    startConfetti();
    document.getElementById('envelope-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 3000);
});

document.getElementById('yesBtn').addEventListener('click', () => {
  document.getElementById('yesForm').style.display = 'block';
  document.getElementById('noMessage').style.display = 'none';
});

document.getElementById('noBtn').addEventListener('click', () => {
  document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-size:24px;">СПАСИБО, МЫ ВСЕ РАВНО ВАС ЦЕНИМ :)</div>';
});

// Конфетти
function startConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let confetti = [];
  for (let i = 0; i < 300; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 4 + 1,
      d: Math.random() * 10 + 5,
      color: 'hsl(' + Math.random() * 360 + ', 100%, 50%)',
      tilt: Math.random() * 10 - 10
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < confetti.length; i++) {
      const c = confetti[i];
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 2);
      ctx.stroke();
    }
    update();
  }

  function update() {
    for (let i = 0; i < confetti.length; i++) {
      let c = confetti[i];
      c.y += Math.cos(c.d) + 1 + c.r / 2;
      c.x += Math.sin(c.d);
      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    }
  }

  setInterval(draw, 20);
}
