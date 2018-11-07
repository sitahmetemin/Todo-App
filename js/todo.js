//klavye tetikleme ile klavyeyi  dinliyorum
function keyCode(event) {
  //tuşun içeiğini  aldım.
  var tus = event.keyCode;
  //tuşun ENTER kontrolünü yapyorum.
  if (tus == 13) {
    //ekleme işlemini yapıyorum
    ekle();
  }
}


function odaklan() {
  //inptun içine odaklandım
  document.getElementById("eklenecekTodo").focus();
}

//Yapılacaklar listesie ekleyecek fonksiyon
function ekle() {
  var todo = document.getElementById("eklenecekTodo").value;

  //input validate kontrolü
  if (todo) {
    var str = '<li><input onclick="todoDone(this)" type="checkbox" class="customCheck" name="label"><input class="yukseklik-35 customInput" type="text" value="'
      + todo +
      '" /><span onclick="todoDel(this)" class="btn yuvarak sagYasli fnt-25" style="margin:5px;">Sil</span></li>';

      //Divi buldum
    div = document.getElementById("yapilacaklarListe");
    // div içi oluşturduğum stringi sonuna ekledim
    div.insertAdjacentHTML("beforeend", str);
    //inputun içini boşalttım
    document.getElementById("eklenecekTodo").value = "";
    // inputun içine odaklandım
    odaklan();
  } else {
    alert("Tüm alanları doldurun");
  }
}

//yapılacaklar listesinden yapılanlar listesine aktarma fonksiyonu
function todoDone(e) {
  //inputu deaktif hale getirdim
  e.disabled = true;
  //tıklanan veriyi yapılanlar listesine aktardım. Bütün HTML bigilerini attım
  document.getElementById("yapilanlarListe").appendChild(e.parentElement);
}

//silme fonksiyonu
function todoDel(info) {
  info.parentElement.remove();
}
