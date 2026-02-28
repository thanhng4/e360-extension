const style = document.createElement('style');
style.textContent = `
@keyframes blink {
  0%, 100% {
    background-color: blue;
    color: white;
  }
  50% {
    background-color: white;
    color: blue;
  }
}
.blink {
  animation: blink 3s infinite;
  transition: all 0.5s ease;
  padding: 4px;
  border-radius: 4px;
}

/* Highlight cho các ô viết */
.e360-highlight {
  background-color: yellow;
  font-weight: bold;
  border: 2px solid orange;
}
/* Floating box ở trên cùng */
#e360-floating-box {
  position: fixed;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
  background: orange;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  z-index: 9999;
  font-weight: bold;
  font-size: 40px;
  font-family: sans-serif;
}
/* Floating boxes */
.e360-floating-box {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  z-index: 9999;
  font-weight: bold;
  font-size: 40px;
  font-family: sans-serif;
}
#e360-box-url {
  top: 10px;
}
#e360-box-user {
  bottom: 80px;
  background: #007acc;
}
.e360-room-table td {
  border: 1px solid black;
  padding: 2px;
  height: 30px;       /* chỉnh còn 30px */
  color: white;
  font-size: 18px;    /* chỉnh còn 18px */
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
}
.e360-stt-highlight {
  color: #fff;
  background: linear-gradient(45deg, #ff0000, #ff6600);
  padding: 2px 6px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 18px;
  display: inline-block;
}
`;
document.head.appendChild(style);

// Xóa dòng đầu tiên trong tất cả .e360-checkin và .e360-not-checkin
document.querySelectorAll('.e360-checkin, .e360-not-checkin').forEach(el => {
  const parts = el.innerHTML.split(/<br\s*\/?>/i);

  if (parts.length > 0) {
    const firstLine = parts[0];
    const dashIndex = firstLine.indexOf('-');

    if (dashIndex !== -1) {
      const sttText = firstLine.substring(dashIndex + 1).trim();

      // Bọc STT vào span để style nổi bật
      parts[0] = `<span class="e360-stt-highlight">${sttText}</span>`;
    }
  }

  el.innerHTML = parts.join('<br>');
});

// Thêm "Cửa vào" vào dòng thứ 2 của phần tử thứ hai (index = 1) trong .e360-doorway
const doorwayElements = document.querySelectorAll('.e360-doorway');
if (doorwayElements.length > 1) {
  const el = doorwayElements[1]; // Phần tử thứ 2
  const parts = el.innerHTML.split(/<br\s*\/?>/i);
  parts.splice(1, 0, '<span style="color:red">Cửa vào</span>');
  parts.shift(); // Xóa dòng đầu
  el.innerHTML = parts;
}

// ===== Thêm floating box ở đầu trang =====
const floatingBox = document.createElement('div');
floatingBox.id = 'e360-floating-box';
floatingBox.textContent = '🔗 e360.fpt.edu.vn/checkout';
document.body.appendChild(floatingBox);

// ===== Floating box: nội dung người dùng nhập =====
const userInput = prompt("Nhập mã đề:") || "(không có mã đề)";

const boxUser = document.createElement('div');
boxUser.id = 'e360-box-user';
boxUser.className = 'e360-floating-box';
boxUser.textContent = `✍️ MÃ ĐỀ THI: ${userInput}`;
document.body.appendChild(boxUser);

document.querySelectorAll('td.e360-checkin .e360-fullname').forEach(span => {
  const fullName = span.textContent.trim();

  if (!fullName) return;

  const parts = fullName.split(/\s+/);

  if (parts.length > 1) {
    const lastName = parts.pop(); // Lấy tên cuối cùng
    const initials = parts.map(word => word.charAt(0)).join('.');
    const shortName = initials + '.' + lastName;

    span.textContent = shortName;

    // ==== Style nổi bật ====
    span.style.color = '#ff0000';
    span.style.fontWeight = 'bold';
    span.style.fontSize = '16px';
    span.style.backgroundColor = '#fff3cd';
    span.style.padding = '2px 6px';
    span.style.borderRadius = '6px';
    span.style.border = '1px solid orange';
  }
});