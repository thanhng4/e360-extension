// ===== Inject CSS =====
const style = document.createElement('style');
style.textContent = `
/* Floating box chung */
.e360-floating-box {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  z-index: 9999;
  font-weight: bold;
  font-size: 36px;
  font-family: sans-serif;
}

/* Box URL */
#e360-floating-box {
  top: 2px;
  background: orange;
}

/* Box mã đề */
#e360-box-user {
  bottom: 80px;
  background: #007acc;
}

/* Mã đề nổi bật */
.e360-exam-code {
  background: #ff6600;
  color: #fff;
  padding: 4px 12px;
  border-radius: 8px;
  margin-left: 8px;
  font-size: 36px;
  font-weight: 900;
}

/* STT highlight */
.e360-stt-highlight {
  background: linear-gradient(45deg, #ff0000, #ff6600);
  color: #fff;
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 18px;
  display: inline-block;
}

/* Table */
.e360-room-table td {
  border: 1px solid black;
  padding: 2px;
  height: 30px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
}
`;
document.head.appendChild(style);



// ===== 1️⃣ Xử lý STT =====
document.querySelectorAll('.e360-checkin, .e360-not-checkin').forEach(el => {
  const parts = el.innerHTML.split(/<br\s*\/?>/i);

  if (!parts.length) return;

  const dashIndex = parts[0].indexOf('-');
  if (dashIndex !== -1) {
    const stt = parts[0].substring(dashIndex + 1).trim();
    parts[0] = `<span class="e360-stt-highlight">${stt}</span>`;
  }

  el.innerHTML = parts.join('<br>');
});



// ===== 2️⃣ Thêm "Cửa vào" =====
const doorway = document.querySelectorAll('.e360-doorway')[2];
if (doorway) {
  const parts = doorway.innerHTML.split(/<br\s*\/?>/i);
  parts.shift();
  parts.splice(1, 0, '<span style="color:red;font-weight:bold;">Cửa vào</span>');
  doorway.innerHTML = parts.join('<br>');
}



// ===== 3️⃣ Floating URL =====
const urlBox = document.createElement('div');
urlBox.id = 'e360-floating-box';
urlBox.className = 'e360-floating-box';
urlBox.textContent = '🔗 e360.fpt.edu.vn/checkout';
document.body.appendChild(urlBox);



// ===== 4️⃣ Floating mã đề =====
const userInput = prompt("Nhập mã đề:") || "(không có mã đề)";
const examBox = document.createElement('div');
examBox.id = 'e360-box-user';
examBox.className = 'e360-floating-box';
examBox.innerHTML = `
  ✍️ MÃ ĐỀ THI:
  <span class="e360-exam-code">${userInput}</span>
`;
document.body.appendChild(examBox);



// ===== 5️⃣ Rút gọn tên =====
document.querySelectorAll('td.e360-checkin .e360-fullname').forEach(span => {
  const words = span.textContent.trim().split(/\s+/);
  if (words.length < 2) return;

  const lastName = words.pop();
  const initials = words.map(w => w.charAt(0)).join('.');
  span.textContent = `${initials}.${lastName}`;

  span.style.cssText = `
    color:#ff0000;
    font-weight:bold;
    font-size:16px;
    background:#fff3cd;
    padding:2px 6px;
    border-radius:6px;
    border:1px solid orange;
  `;
});