const pano = document.querySelector('.pano');



window.addEventListener('mouseover', (e) => {
  let name = e.target.getAttribute('data-id');
  if (!name)
    name = e.target.id;

  if (name && name !== 'svg2') {
    pano.innerHTML = name;
    pano.style.display = 'block';
  }
});

window.addEventListener('mouseout', (e) => {
  if (!pano.contains(e.relatedTarget)) {
    // Harita dışına çıkıldığında ve çıkılan eleman pano değilse pano gizlenir
    pano.style.display = 'none';
    pano.innerHTML = '';
  }
});

window.addEventListener('mousemove', (e) => {
  pano.style.top = e.pageY + 15 + 'px';
  pano.style.left = e.pageX + 'px';
});

  var amerika = document.getElementById("ABD");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    amerika.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "ABD";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var Almanya = document.getElementById("Almanya");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    Almanya.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "Almanya";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var Brezilya = document.getElementById("Brezilya");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    Brezilya.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "Brezilya";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var Endonezya = document.getElementById("Endonezya");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    Endonezya.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "Endonezya";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var Fransa = document.getElementById("Fransa");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    Fransa.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "Fransa";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var Gana = document.getElementById("Gana");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    Gana.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "Gana.html";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var GuneyKore = document.getElementById("Güney Kore");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    GuneyKore.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "GuneyKore";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var Gurcistan = document.getElementById("Gürcistan");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    Gurcistan.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "Gurcistan";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var Hindistan = document.getElementById("Hindistan");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    Hindistan.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "Hindistan";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var Hollanda = document.getElementById("Hollanda");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    Hollanda.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "Hollanda";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var Ingiltere = document.getElementById("İngiltere");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    Ingiltere.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "Ingiltere";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var Isvec = document.getElementById("İsveç");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    Isvec.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "Isvec";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var japonya = document.getElementById("Japonya");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    japonya.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "Japonya";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var kamerun = document.getElementById("Kamerun");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    kamerun.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "Kamerun";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var Kanada = document.getElementById("Kanada");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    Kanada.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "Kanada";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var Kenya = document.getElementById("Kenya");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    Kenya.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "Kenya";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var Meksika = document.getElementById("Meksika");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    Meksika.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "Meksika";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var Rusya = document.getElementById("Rusya");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    Rusya.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "Rusya";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var Turkiye = document.getElementById("Türkiye");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    Turkiye.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "Turkiye";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });
  var YeniZelanda = document.getElementById("Yeni Zelanda");
    // Bu elemente bir tıklama olayı dinleyicisi ekle
    YeniZelanda.addEventListener("click", function() {
    // Yönlendirileceğiniz sayfanın URL'ini oluştur
    // Burada, https://example.com/ adresini varsayılan olarak kullandım
    // Siz, kendi sitenizin adresini kullanmalısınız
    var url = "YeniZelanda";
    // Bu URL'yi window.location.href özelliğine ata
    window.location.href = url;
  });



