// Objek untuk menyimpan terjemahan
const translations = {
  id: {
    brand: "Merek",
    produk: "Produk",
    contact: "Hubungi kami",
    textslider_0: "Briket Ramah Lingkungan",
    textslider_1: "Minim Asap Pembakaran",
    textslider_2: "Tahan Lama Hingga 4 Jam",
    header1: "Rasakan Panasnya, Selamatkan Bumi",
    header2: "Tentang Kami",
    subheader2: "",
    produk1: "Nama Produk 1",
    produk2: "Nama Produk 2",
    produk3: "Nama Produk 3",
    produk4: "Nama Produk 4",
    produk5: "Nama Produk 5",
    produk6: "Nama Produk 6",
    footer1:
      "Bakar Secara Berkelanjutan dengan Pilihan Briket Ramah Lingkungan Kami",
    subfooter2: "",
  },
  en: {
    brand: "Brand",
    produk: "Products",
    contact: "Contact us",
    textslider_0: "Eco-Friendly Briquettes",
    textslider_1: "Minimal Combustion Smoke",
    textslider_2: "Lasts up to 4 hours",
    header1: "Feel The Heat, Save The Earth",
    header2: "About us",
    subheader2: "",
    produk1: "Product Name 1",
    produk2: "Product Name 2",
    produk3: "Product Name 3",
    produk4: "Product Name 4",
    produk5: "Product Name 5",
    produk6: "Product Name 6",
    footer1: "Burn Sustainably with Our Selections of Eco-Friendly Briquettes",
    subfooter2: "",
  },
  ar: {
    brand: "العلامة التجارية",
    produk: "المنتجات",
    contact: "اتصل بنا",
    textslider_0: "بريكات صديقة للبيئة",
    textslider_1: "دخان احتراق الحد الأدنى",
    textslider_2: "تدوم حتى 4 ساعات",
    header1: "اشعر بالحرارة، أنقذ الأرض",
    header2: "معلومات عنا",
    subheader2: "",
    produk1: "اسم المنتج 1",
    produk2: "اسم المنتج 2",
    produk3: "اسم المنتج 3",
    produk4: "اسم المنتج 4",
    produk5: "اسم المنتج 5",
    produk6: "اسم المنتج 6",
    footer1: "احرق بشكل مستدام مع اختياراتنا من البريكات الصديقة للبيئة",
    subfooter2: "",
  },
};

// Mengambil elemen dropdown
const languageSelect = document.getElementById("language-select");

// Daftar ID elemen yang akan diubah
const elementsToTranslate = [
  { id: "brand", key: "brand" },
  { id: "produk", key: "produk" },
  { id: "contact", key: "contact" },
  { id: "textslider_0", key: "textslider_0" },
  { id: "textslider_1", key: "textslider_1" },
  { id: "textslider_2", key: "textslider_2" },
  { id: "header1", key: "header1" },
  { id: "header2", key: "header2" },
  { id: "subheader2", key: "subheader2" },
  { id: "produk1", key: "produk1" },
  { id: "produk2", key: "produk2" },
  { id: "produk3", key: "produk3" },
  { id: "produk4", key: "produk4" },
  { id: "produk5", key: "produk5" },
  { id: "produk6", key: "produk6" },
  { id: "footer1", key: "footer1" },
  { id: "subfooter2", key: "subfooter2" },
  // Tambahkan elemen lain yang ingin diterjemahkan di sini
];

// Menambahkan event listener untuk dropdown
languageSelect.addEventListener("change", function () {
  const selectedLanguage = languageSelect.value;

  // Mengubah teks berdasarkan bahasa yang dipilih
  elementsToTranslate.forEach(({ id, key }) => {
    const element = document.getElementById(id);
    if (element) {
      // Jika tidak ada bahasa yang dipilih (opsi netral), atur teks ke kunci default
      if (!selectedLanguage) {
        element.textContent = en; // Atau Anda bisa mengatur ke nilai default lain jika diinginkan
      }
    }
  });
});

// // Mendapatkan elemen tombol menggunakan selector data
// const toggleOnButton = document.querySelector('[data-toggle="on"]');
// const toggleOffButton = document.querySelector('[data-toggle="off"]');

// // Menambahkan event listener untuk tombol ON
// toggleOnButton.addEventListener('click', () => {
//   toggleOnButton.classList.add('hidden'); // Menyembunyikan tombol ON
//   toggleOffButton.classList.remove('hidden'); // Menampilkan tombol OFF
// });

// // Menambahkan event listener untuk tombol OFF
// toggleOffButton.addEventListener('click', () => {
//   toggleOffButton.classList.add('hidden'); // Menyembunyikan tombol OFF
//   toggleOnButton.classList.remove('hidden'); // Menampilkan tombol ON
// });
