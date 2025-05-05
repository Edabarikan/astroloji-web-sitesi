document.addEventListener("DOMContentLoaded", function () {
    // JSON içeriği
    const yorumlar = [
        {
            "name": "Zeynep Turan",
            "comment": "\"Uzmanlık alanlarında aldıkları kişisel koçluk eğitimleri ile, sadece burç yorumları değil, aynı zamanda danışanlarının kişisel gelişim süreçlerine de katkı sağlayacak derin analizler yapıyorlar. Bu da Starlytic astrologlarının fark yaratmasını sağlıyor.\""
        },
        {
            "name": "Nuray Sayar",
            "comment": "“Elif Karaca, Starlytic’in en deneyimli astrologlarından biri olarak, astrolojiyi bir yaşam rehberi olarak kullanırken, her bireyin kişisel yolculuğunda daha bilinçli ve dengeli adımlar atmalarına yardımcı oluyor. Bu yaklaşım, onu sektördeki en etkili ve fark yaratan isimlerden biri haline getiriyor.”"
        },
        {
            "name": "Engin Dorman",
            "comment": "\"Starlytic astrologları, yalnızca gezegen hareketlerinden yola çıkarak tahminlerde bulunmakla kalmıyor, aynı zamanda danışanlarının yaşamındaki potansiyel engelleri aşabilmeleri için onları kişisel gelişim yolunda yönlendiriyor. Bu bütünsel yaklaşım, onların fark yaratan astrologlar olmasını sağlıyor.\""
        }
    ];

    // Yorumları ekranda gösterme fonksiyonu
    const yorumlarContainer = document.getElementById("yorumlar-container");

    function renderYorumlar() {
        yorumlarContainer.innerHTML = ""; // Eski yorumları temizle
        yorumlar.forEach(yorum => {
            const div = document.createElement("div");
            div.classList.add("testimonial");
            div.innerHTML = `<h5>${yorum.name}</h5><p>${yorum.comment}</p>`;
            yorumlarContainer.appendChild(div);
        });
    }

    // Formu ve yeni yorum eklemeyi yönetme
    const yorumForm = document.getElementById("yorum-ekle-form");

    yorumForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Sayfa yenilenmesini engelle

        // Kullanıcıya onay sorusu sor
        const onay = confirm("Yorumunuz gönderilecektir. Emin misiniz?");
        if (!onay) return; // Kullanıcı iptal ederse işlemi durdur

        const isim = document.getElementById("isim").value;
        const yorumText = document.getElementById("yorum").value;

        if (isim && yorumText) {
            // Yeni yorumu JSON'a ekle
            yorumlar.push({
                name: isim,
                comment: `"${yorumText}"`
            });

            // Yeni yorumları ekranda göster
            renderYorumlar();

            // Formu temizle
            yorumForm.reset();

            alert("Yorumunuz başarıyla gönderildi!");
        }
    });

    // Sayfa yüklendiğinde ilk yorumları göster
    renderYorumlar();
});
