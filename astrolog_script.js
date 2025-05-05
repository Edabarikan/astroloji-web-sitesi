/* JSON verisini doğrudan JavaScript'e dahil ediyoruz.*/
const astrologlar = [
    {
        "isim": "Elif Karaca",
        "resim": "TN_Resimler/ElifKaraca_t.jpg",
        "aciklama": "Elif Karaca, modern astroloji ve ruhsal rehberlik alanlarında derin bir bilgiye sahip bir astrogolistir. Kendisinin uzmanlık alanları arasında doğum haritası analizleri, yıldız haritası okumaları ve kişisel astrolojik danışmanlık bulunmaktadır. 12 yılı aşkın süredir astroloji ile ilgilenen Elif, danışanlarının yaşam yolculuklarında daha fazla farkındalık kazanmasına yardımcı olmak için astrolojiyi bir araç olarak kullanmaktadır."
    },
    {
        "isim": "Zeynep Yılmaz",
        "resim": "TN_Resimler/ZeynepYilmaz_t.jpg",
        "aciklama": "Zeynep Yılmaz, astroloji ve kişisel gelişim alanlarında kendini kanıtlamış bir uzmandır. Vedik astroloji üzerine yoğunlaşan Zeynep, ruhsal dengeyi sağlamak için astrolojiyi bireysel analizlerle harmanlayarak danışmanlık vermektedir. Aynı zamanda, bireylerin astrolojik haritalarını derinlemesine inceleyerek, onların güçlü yönlerini ortaya çıkarmalarına ve potansiyellerini keşfetmelerine yardımcı olmaktadır."
    },
    {
        "isim": "Aylin Demirtaş",
        "resim": "TN_Resimler/AylinDemirtas_t.jpg",
        "aciklama": "Aylin Demirtaş, Batı astrolojisi konusunda uzmanlaşmış, kişisel astrolojik analizler ve danışmanlık hizmetleri veren bir astrologdur. 8 yıldan fazla süredir profesyonel olarak astroloji ile ilgilenen Aylin, doğum haritaları ve gezegen geçişlerini okuyarak, danışanlarının yaşamlarındaki potansiyel fırsatları ve zorlukları anlamalarına yardımcı olmaktadır."
    }
]

/* JSON verisini sayfada görüntülemek*/
document.addEventListener('DOMContentLoaded', () => {
    const astrologListDiv = document.getElementById('astrolog-list');
    
    astrologlar.forEach(astrolog => {
        /* Her astrolog için bir kart (div) oluşturuyoruz*/
        const astrologCard = document.createElement('div');
        astrologCard.classList.add('col-md-4'); /* Bootstrap kolon sınıfı ekleyelim (3 kolonlu düzen) */

        /* Kart yapısını HTML olarak oluşturuyoruz*/
        astrologCard.innerHTML = `
            <div class="card">
                ${astrolog.resim ? `<img src="${astrolog.resim}" class="card-img-top" alt="${astrolog.isim}">` : ''}
                <div class="card-body">
                    <h5 class="card-title">${astrolog.isim}</h5>
                    <p class="card-text">${astrolog.aciklama}</p>
                    <!-- İsteğe bağlı bir buton ekleyelim -->
                    <br>
                    <a href="#fiyatlandirma" class="btn btn">Daha Fazla Bilgi</a>
                </div>
            </div>
        `;

        /*Oluşturduğumuz kartı astrolog-list'e ekliyoruz*/
        astrologListDiv.appendChild(astrologCard);
    });
});
