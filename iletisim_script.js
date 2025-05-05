document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun sayfayı yenilemesini engeller

    // Onay mesajını sadece bir kere göster
    const confirmationMessage = document.getElementById('confirmationMessage');
    if (confirmationMessage.style.display === 'block') {
        return; // Eğer zaten gösteriliyorsa, başka bir işlem yapma
    }

    // Form verilerini al
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const package = document.getElementById('package').value;
    const astrolog = document.getElementById('astrolog').value;

    // Onay mesajını göster
    confirmationMessage.style.display = 'block';

    // Gönderilen verilerle onay mesajını güncelle
    document.getElementById('confName').innerText = name;
    document.getElementById('confSurname').innerText = surname;
    document.getElementById('confEmail').innerText = email;
    document.getElementById('confPackage').innerText = package;
    document.getElementById('confAstrolog').innerText = astrolog;
});
