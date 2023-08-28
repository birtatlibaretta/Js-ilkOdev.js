<!DOCTYPE html>
<html>
<head>
  <title>Hoşgeldiniz Ekranı</title>
</head>
<body>
  <script>
    // Kullanıcıdan isim al
    var isim = prompt("Lütfen isminizi girin:");

    // Tarih, gün ve saat bilgilerini al
    var tarih = new Date();
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var gun = gunler[tarih.getDay()];
    var saat = tarih.getHours() + ":" + (tarih.getMinutes() < 10 ? "0" : "") + tarih.getMinutes();

    // Hoşgeldiniz ekranını oluştur
    var hosgeldinizMetni = "Hoşgeldiniz, " + isim + "!\n";
    hosgeldinizMetni += "Bugün " + gun + " günüdür.\n";
    hosgeldinizMetni += "Saat " + saat + ".";

    // Ekrana yazdır
    alert(hosgeldinizMetni);
  </script>
</body>
</html>
