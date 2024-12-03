function createSnow() {
    const body = document.querySelector("body");
  
    for (let i = 0; i < 6; i++) { // Giảm số lượng hạt tuyết (30 thay vì 100)
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.animationDuration = Math.random() * 6 + 9 + "s"; // Tăng thời gian rơi
      snowflake.style.opacity = Math.random();
      snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
  
      snowflake.innerText = "❄️";
      body.appendChild(snowflake);
  
      snowflake.addEventListener("animationend", () => {
        snowflake.remove();
      });
    }
  }
  
  // Gọi hàm createSnow ít thường xuyên hơn
  setInterval(createSnow, 9000); // Tạo tuyết mỗi 2 giây thay vì 1 giây
  