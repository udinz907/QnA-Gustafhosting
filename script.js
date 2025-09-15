const BOT_TOKEN = '8375191991:AAEzzRKH4ROSYojEoHEkwGV-WohHq91918U';
    const CHAT_ID   = '6349562246';

    const messageEl = document.getElementById('message');
    const sendBtn   = document.getElementById('sendBtn');

    sendBtn.onclick = async () => {
      const text = messageEl.value.trim();
      if (!text) return alert('Pesan tidak boleh kosong!');

      sendBtn.disabled = true;
      sendBtn.textContent = 'Mengirim...';

      const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
      const body = new URLSearchParams({
        chat_id: CHAT_ID,
        text: `💌 Pesan anonim baru:\n\n${text}`
      });

      try {
        await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body
        });
        alert('Pesan terkirim! ✔️');
        messageEl.value = '';
      } catch (e) {
        alert('Gagal mengirim, coba lagi.');
      } finally {
        sendBtn.disabled = false;
        sendBtn.textContent = '✈️ Kirim';
      }
    };

    // 🌌 Animasi Bintang
    const canvas = document.getElementById('stars');
    const ctx = canvas.getContext('2d');
    let stars = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      for (let i = 0; i < 120; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          speed: Math.random() * 1.2 + 0.5
        });
      }
    }

    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#fff";
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(animateStars);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animateStars();