let fiyatlar = [
    {
        "hizmet": "Doğum Haritası Analizi",
        "aciklama": "Doğum Haritası, doğum anında gezegenlerin burçlar kuşağındaki konumlarını gösteren ve Evler adı verilen on iki bölüme ayrılmış bir karttır. Haritanın analizi ile çok sayıda kişisel özellik, nitelik ve unsur belirlenebilmektedir.",
        "fiyat": "600 TL"
    },
    {
        "hizmet": "Lunar Return (Ay Dönüşü) Haritası",
        "aciklama": "Kişinin doğum haritasındaki Ay pozisyonuna ve dönemdeki Ay'ın konumuna bakılır. Bu, bir yıl boyunca deneyimleyebileceğiniz enerji ve olayların bir göstergesidir. Bir ay boyunca, Ay pozisyonu her gün değiştiği için, lunar return haritası yılda birkaç kez değişebilir.",
        "fiyat": "750 TL"
    },
    {
        "hizmet": "Solar Return (Güneş Dönüşü) HAritası",
        "aciklama": "Return haritalar ingress (geçiş) haritaları gibi yıllık gelecek öngörüleri yapmak için kullanılmaktadır.",
        "fiyat": "1000 TL"
    },
    {
        "hizmet": "Soru Astrolojisi (Horary)",
        "aciklama": "Hayatınızda kalbimize değen bir konunun/sorunun cevabını bulmanıza yardım eder. Soru konunun özüne değinmeli ve açık uçlu olmayacak bir şekilde oluşturulmalıdır",
        "fiyat": "500 TL"
    },

    {
        "hizmet": "Sinastri (İlişki) Haritası",
        "aciklama": "Sinastri haritası Belirli durumların, olayların ya da kişilerin doğum haritalarının ayrı ayrı incelenerek birbirleriyle uyumlarının değerlendirildiği, kurulan bir ilişkinin ya da ortaklığın seyrinin nasıl ilerleyebileceği hakkında öngörüde bulunabilen haritadır.",
        "fiyat": "800 TL"
    },
    {
        "hizmet": "Numeroloji",
        "aciklama": "Numeroloji, kişinin doğum tarihi ve adının sayısal karşılıkları üzerinden kişilik özellikleri, yaşam amacı, ruhsal gelişimi gibi birçok bilgiyi ortaya çıkarır.",
        "fiyat": "2500 TL"
    },
    {
        "hizmet": "Natal Harita Okuma",
        "aciklama": "Natal harita, bir kişinin doğum anındaki gökyüzü düzeninin bir yansımasıdır. Hesaplama işlemi, kişinin doğum bilgileriyle yapılır: doğum günü, saati ve yeri.",
        "fiyat": "900 TL"
    },
    {
        "hizmet": "Tarot Okuma",
        "aciklama": "Kartların seçilmesi ve ardından bir okuma işlemiyle gerçekleşir. Bu okuma sürecinde, kartların sembolleri ve yerleşimleri, yorumlanarak bir kişinin yaşamı, sorunları veya geleceği hakkında bilgi edinilir.",
        "fiyat": "600 TL"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const fiyatTablosu = document.getElementById('fiyat-tablosu');
    
    fiyatlar.forEach(fiyat => {
        // Her hizmet için bir satır (tr) oluşturuyoruz
        const row = document.createElement('tr');

        // Satırdaki hücreleri (td) oluşturuyoruz
        row.innerHTML = `
            <td>${fiyat.hizmet}</td>
            <td>${fiyat.aciklama}</td>
            <td>${fiyat.fiyat}</td>
            <td><a href="#iletisim" class="btn btn">Daha Fazla Bilgi</a></td>
        `;
        
        // Oluşturduğumuz satırı tabloya ekliyoruz
        fiyatTablosu.appendChild(row);
    });
});
