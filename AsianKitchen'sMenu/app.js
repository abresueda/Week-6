const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];

//Menü öğelerinin yerleştirileceği bölüm.
const sectionCenter = document.querySelector(".section-center");
//Filtreleme butonlarının yerleştirileceği bölüm.
const btnContainer = document.querySelector(".btn-container");

//Sayfa yüklendikten sonra çalışacak olan işlemleri tanımlar.
window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
    displayMenuButtons();
});

//Menü öğelerinin verilerini sayfada göstermek için.
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map
    //Item her bir öğeyi temsil eder.
    (item => {
        return `
        <div class="col-lg-4 col-sm-6 menu-item">
            <div class="card mb-4">
                <img src="${item.img}" class="card-img-top" alt="${item.title}" />
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <h6 class="card-subtitle text-muted">${item.category}</h6>
                    <p class="card-text">${item.desc}</p>
                    <span class="badge bg-primary">$${item.price}</span>
                </div>
            </div>
        </div>
        `;
    });
    //Join metodu ile her öğe birleştirilir.
    sectionCenter.innerHTML = displayMenu.join("");
}

//Menü kategorilerine göre filtreleme butonları ekler.
function displayMenuButtons() {
    const categories = ["All", 
    //new Set, tekrar eden öğeleri filtreleyerek benzersiz öğeleri döner.
    ...new Set(menu.map(item => item.category))];

    //data-category özel veri özniteliğidir.
    const categoryButtons = categories.map(category => {
        return `<button class="btn btn-outline-primary filter-btn" data-category="${category}">${category}</button>`;
    })
    .join("");

    //Yukarıda oluşan butonları ekler.
    btnContainer.innerHTML = categoryButtons;

    const filterBtns = document.querySelectorAll(".filter-btn");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", e => {
        const category = e.currentTarget.dataset.category;
        //All seçili ise tüm öğeleri getirir. Yoksa kategoriye göre filtreler.
        const menuCategory = category === "All" ? menu : menu.filter(item => item.category === category);
        displayMenuItems(menuCategory);
    });
});
}

