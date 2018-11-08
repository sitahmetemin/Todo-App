window.onload = function () {
    //inptun içine odaklandım
    document.getElementById("eklenecekTodo").focus();

    //windows onload metodu içinde fonksiyon içeririklerine ulaşmak için değikene atayıp onları tetikliyoruz.
    window.todoDone = todoDone;
    window.todoDel = todoDel;

    //Ekle butonu tetikle
    var btnEkle = document.getElementById('btnEkle');
    btnEkle.addEventListener('click', function () {
        ekle();
    });


    //klavye tetikleme ile klavyeyi  dinliyorum
    var enterFonk = document.getElementById('eklenecekTodo');
    enterFonk.addEventListener('keydown', function (event) {
        //tuşun içeiğini  aldım.
        var tus = event.keyCode;
        //tuşun ENTER kontrolünü yapyorum.
        if (tus === 13) {
            //ekleme işlemini yapıyorum
            ekle();
        }
    });

//Yapılacaklar listesie ekleyecek fonksiyon
    function ekle() {
        var todo = document.getElementById("eklenecekTodo").value;

        //input validate kontrolü
        if (todo) {
            var str = '<li><input onclick="todoDone(this)" type="checkbox" class="custom-check" name="label"><input class="yukseklik-35 custom-input" type="text" value="'
                + todo +
                '" /><span onclick="todoDel(this)" class="btn yuvarak sag-yasli fnt-25" style="margin:5px;">Sil</span></li>';

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


};



