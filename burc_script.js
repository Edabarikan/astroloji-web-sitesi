document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', function () {
        // Önce tüm ikonlardan "active" sınıfını kaldır
        document.querySelectorAll('.icon').forEach(item => item.classList.remove('active'));

        // Seçilen ikona "active" sınıfını ekle
        this.classList.add('active');

        // Burç adını al
        const sign = this.getAttribute('data-sign');
        const text = this.getAttribute('data-text');

        // Yorumu güncelle
        document.getElementById('sign-title').textContent = sign;
        document.getElementById('horoscope-text').textContent = text;
       
        const date=new Date();
        const formattedDate= date.toLocaleDateString('tr-TR',{weekday:'short',day: '2-digit',month:'long',year:'numeric'});
        document.getElementById('date').textContent = formattedDate;
    });
});

