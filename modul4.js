// ==========================================
// MODUL 4 - JAVASCRIPT DAN DOM
// ==========================================

// ------------------VARIABEL----------------------

const tombolTema = document.querySelector("#btn-tema");

const tombolTambah = document.querySelector("#btn-tambah");

const containerPengalaman =
    document.querySelector(".daftar-pengalaman");

const formPengalaman =
    document.querySelector("#form-pengalaman");

const tombolSimpan =
    document.querySelector("#btn-simpan");

const tombolBatal =
    document.querySelector("#btn-batal");

const isiKontak =
    document.querySelector("#isi-kontak");

const tombolToggleKontak =
    document.querySelector("#btn-toggle-kontak");

const linkNavigasi =
    document.querySelectorAll("nav a");

const semuaBagian =
    document.querySelectorAll("main > section, main > aside");

// ------------------------DATA PENGALAMAN-------------------------

const daftarPengalaman = [

    {
        id: 1,

        nama:
            "Anggota Divisi Minat dan Bakat " +
            "(Himpunan Mahasiswa Informatika)",

        periode:
            "2026 - Sekarang",

        deskripsi:
            "Aktif dalam merancang dan mengeksekusi " +
            "program kerja pengembangan potensi mahasiswa " +
            "di bidang akademik maupun non-akademik."
    },


    {
        id: 2,

        nama:
            "Anggota Kader Posyandu Desa",

        periode:
            "2019 - 2026",

        deskripsi:
            "Berpartisipasi dalam kegiatan pelayanan " +
            "masyarakat desa dan membantu pencatatan " +
            "data kegiatan rutin."
    },

    {
        id: 3,

        nama:
            "Sekretaris 2 Panitia IT DAYS",

        periode:
            "2026 - Sekarang",

        deskripsi:
            "Bertanggung jawab dalam pengelolaan administrasi, " +
            "penyusunan dokumen kegiatan, notulen, dan " +
            "koordinasi persuratan."
    },

    {
        id: 4,

        nama:
            "Bendahara Organisasi Pemuda-Pemudi Desa",

        periode:
            "2026 - Sekarang",

        deskripsi:
            "Mengelola pencatatan pemasukan dan pengeluaran " +
            "serta membantu penyusunan anggaran kegiatan."
    }

];

// -------------------------MENAMPILKAN PENGALAMAN-------------------------

function tampilkanPengalaman() {

    containerPengalaman.innerHTML = "";

    daftarPengalaman.forEach(function(pengalaman) {

        const article =
            document.createElement("article");


        const judul =
            document.createElement("h3");

        judul.textContent =
            pengalaman.nama;


        const periode =
            document.createElement("p");

        periode.innerHTML =
            "<strong>Periode:</strong> " +
            pengalaman.periode;


        const deskripsi =
            document.createElement("p");

        deskripsi.textContent =
            pengalaman.deskripsi;


        const tombolHapus =
            document.createElement("button");

        tombolHapus.textContent =
            "Hapus";

        tombolHapus.dataset.id =
            pengalaman.id;


        article.appendChild(judul);

        article.appendChild(periode);

        article.appendChild(deskripsi);

        article.appendChild(tombolHapus);


        containerPengalaman.appendChild(article);

    });

}
tampilkanPengalaman();

// --------------------NAVIGASI SECTION----------------

function tampilkanBagian(idBagian) {

    semuaBagian.forEach(function(bagian) {

        bagian.classList.remove("active");

    });


    const bagianAktif =
        document.querySelector(idBagian);


    if (bagianAktif) {

        bagianAktif.classList.add("active");

    }

}


linkNavigasi.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();


        const tujuan =
            link.getAttribute("href");


        tampilkanBagian(tujuan);

    });

});

tampilkanBagian("#tentang");


// --------------MODE GELAP---------------------

function toggleTema() {

    document.body.classList.toggle("dark-mode");


    if (
        document.body.classList.contains("dark-mode")
    ) {

        tombolTema.textContent =
            "Mode Terang";

    } else {

        tombolTema.textContent =
            "Mode Gelap";

    }

}


tombolTema.addEventListener(
    "click",
    toggleTema
);

// ---------TAMPILKAN FORM TAMBAH PENGALAMAN----------------

tombolTambah.addEventListener(
    "click",
    function() {

        if (
            formPengalaman.style.display === "block"
        ) {

            formPengalaman.style.display =
                "none";

        } else {

            formPengalaman.style.display =
                "block";

        }

    }
);

// ----------------------SIMPAN PENGALAMAN-------------------------

tombolSimpan.addEventListener(
    "click",
    function() {

        const nama =
            document.querySelector("#input-nama").value;

        const periode =
            document.querySelector("#input-periode").value;

        const deskripsi =
            document.querySelector("#input-deskripsi").value;


        if (
            nama === "" ||
            periode === "" ||
            deskripsi === ""
        ) {

            alert(
                "Semua data pengalaman harus diisi."
            );

            return;

        }

        const pengalamanBaru = {

            id: Date.now(),

            nama: nama,

            periode: periode,

            deskripsi: deskripsi

        };

        daftarPengalaman.push(
            pengalamanBaru
        );

        tampilkanPengalaman();

        document.querySelector("#input-nama").value = "";

        document.querySelector("#input-periode").value = "";

        document.querySelector("#input-deskripsi").value = "";


        formPengalaman.style.display =
            "none";

    }
);

// ----------------BATAL TAMBAH PENGALAMAN------------------------------
tombolBatal.addEventListener(
    "click",
    function() {

        formPengalaman.style.display =
            "none";

    }
);

// ----------------HAPUS PENGALAMAN------------------------------
// ----------------EVENT DELEGATION-------------------------
containerPengalaman.addEventListener(
    "click",
    function(event) {

        if (
            event.target.tagName === "BUTTON" &&
            event.target.dataset.id
        ) {

            const idYangDihapus =
                Number(event.target.dataset.id);


            const index =
                daftarPengalaman.findIndex(
                    function(pengalaman) {

                        return pengalaman.id === idYangDihapus;

                    }
                );


            if (index !== -1) {

                daftarPengalaman.splice(
                    index,
                    1
                );


                tampilkanPengalaman();

            }

        }

    }
);


// ----------------TOGGLE KONTAK---------------------------
tombolToggleKontak.addEventListener(
    "click",
    function() {

        if (
            isiKontak.style.display === "none"
        ) {

            isiKontak.style.display =
                "grid";

            tombolToggleKontak.textContent =
                "Sembunyikan Kontak";

        } else {

            isiKontak.style.display =
                "none";

            tombolToggleKontak.textContent =
                "Tampilkan Kontak";

        }

    }
);