//Listeye yeni görev eklemek için.
function newElement() {
    //Kullanıcının görev girdiği input elemanını seçer.
    const input = document.getElementById("task");
    //Girilen metni al başındaki/sonundaki boşlukları kaldır.
    const inputValue = input.value.trim();
    //Görevlerin bulunduğu <ul> elemanını temsil eder.
    const list = document.getElementById("list");
    const successToast = document.querySelector(".toast.success");
    const errorToast = document.querySelector(".toast.error");
    
    if (inputValue === "") {
        //Eğer boşsa hata mesajını göster.
        showToast(errorToast);
    } else {
        //Yeni bir liste öğesi oluştur.
        const li = document.createElement("li");
        li.textContent = inputValue;

        //Yeni liste öğeleri için kapatma butonunu oluştur.
        const closeBtn = document.createElement("button");
        closeBtn.textContent = "X";
        closeBtn.classList.add("close-btn");
        li.appendChild(closeBtn); // Butonu li öğesinin sonuna ekle

        // Kapatma butonuna tıklandığında li öğesini sil
        closeBtn.addEventListener("click", function () {
            li.remove(); // li öğesini sil
        });

        //Listeye ekle.
        list.appendChild(li);

        //Başarı mesajını göster.
        showToast(successToast);

        //Input alanını temizle.
        input.value = "";
    }
}

//Listede görevin yapıldığını işaretlemek için.
document.getElementById("list").addEventListener("click", function (event) {
    //Sadece <li> elemanına tıklandıysa
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
});

//Var olan liste öğelerine kapatma butonu eklemek ve silmek için.
const listItems = document.querySelectorAll("#list li");
listItems.forEach(function (li) {
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    closeBtn.classList.add("close-btn"); //Butona stil ekler.
    li.appendChild(closeBtn); //Butonu li öğesinin sonuna ekler.

    //Kapatma butonuna tıklandığında li öğesini sil.
    closeBtn.addEventListener("click", function() {
        li.remove(); //li öğesini sil.
    })
});

//Toast mesajlarını yönlendirmek için.
function showToast(toastElement) {
    //Toast mesajını göster.
    toastElement.classList.remove("hide");
    $(toastElement).toast("show");

    //Toast mesajını bir süre sonra tekrar gizle.
    setTimeout(() => {
        toastElement.classList.add("hide");
    }, 4000);
}