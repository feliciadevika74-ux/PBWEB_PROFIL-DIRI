// ==========================================
// MODUL 5
// JAVASCRIPT DAN EVENT HANDLING
// ==========================================


// ==========================================
// VARIABEL DAN SELEKSI ELEMEN
// ==========================================

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
    document.querySelectorAll(
        "main > section, main > aside"
    );


// ==========================================
// 
// DATA PENGALAMAN
// ==========================================

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


// ==========================================
// MODUL 4
// RENDER PENGALAMAN
// ==========================================

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

        const tombolContainer =
            document.createElement("div");

        tombolContainer.className =
            "tombol-pengalaman";


        // ==================================
        // MODUL 5
        // TOMBOL LIKE
        // ==================================

        const tombolLike =
            document.createElement("button");

        tombolLike.className =
            "tombol-like";

        tombolLike.type = "button";

        tombolLike.textContent =
            "Like (0)";

        tombolLike.dataset.like =
            "0";


        // ==================================
        // MODUL 4
        // TOMBOL HAPUS
        // ==================================

        const tombolHapus =
            document.createElement("button");

        tombolHapus.className =
            "tombol-hapus";

        tombolHapus.type = "button";

        tombolHapus.textContent =
            "Hapus";

        tombolHapus.dataset.id =
            pengalaman.id;


        tombolContainer.appendChild(
            tombolLike
        );

        tombolContainer.appendChild(
            tombolHapus
        );


        article.appendChild(judul);

        article.appendChild(periode);

        article.appendChild(deskripsi);

        article.appendChild(tombolContainer);


        containerPengalaman.appendChild(
            article
        );

    });

}


tampilkanPengalaman();


// ==========================================
// MODUL 4
// NAVIGASI
// ==========================================

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

    link.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            const tujuan =
                link.getAttribute("href");

            tampilkanBagian(tujuan);

        }
    );

});


tampilkanBagian("#tentang");


// ==========================================
// MODUL 4
// DARK MODE
// ==========================================

function toggleTema() {

    document.body.classList.toggle(
        "dark-mode"
    );


    if (
        document.body.classList.contains(
            "dark-mode"
        )
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


// ==========================================
// MODUL 5
// KEYBOARD SHORTCUT
// TEKAN D UNTUK DARK MODE
// ==========================================

document.addEventListener(
    "keydown",
    function(event) {

        const elemenAktif =
            document.activeElement.tagName;


        if (
            event.key.toLowerCase() === "d" &&
            elemenAktif !== "INPUT" &&
            elemenAktif !== "TEXTAREA"
        ) {

            toggleTema();

        }

    }
);


// ==========================================
// MODUL 4
// TAMPILKAN FORM PENGALAMAN
// ==========================================

tombolTambah.addEventListener(
    "click",
    function() {

        if (
            formPengalaman.style.display ===
            "block"
        ) {

            formPengalaman.style.display =
                "none";

        } else {

            formPengalaman.style.display =
                "block";

        }

    }
);


// ==========================================
// MODUL 4
// SIMPAN PENGALAMAN
// ==========================================

tombolSimpan.addEventListener(
    "click",
    function() {

        const inputNama =
            document.querySelector(
                "#input-nama"
            );

        const inputPeriode =
            document.querySelector(
                "#input-periode"
            );

        const inputDeskripsi =
            document.querySelector(
                "#input-deskripsi"
            );


        const nama =
            inputNama.value.trim();

        const periode =
            inputPeriode.value.trim();

        const deskripsi =
            inputDeskripsi.value.trim();


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


        inputNama.value = "";

        inputPeriode.value = "";

        inputDeskripsi.value = "";


        formPengalaman.style.display =
            "none";

    }
);


// ==========================================
// MODUL 4
// BATAL TAMBAH PENGALAMAN
// ==========================================

tombolBatal.addEventListener(
    "click",
    function() {

        formPengalaman.style.display =
            "none";

    }
);


// ==========================================
// MODUL 5
// LANGKAH 1
// HOVER PADA ARTIKEL
// mouseover + mouseout
// ==========================================

containerPengalaman.addEventListener(
    "mouseover",
    function(event) {

        const article =
            event.target.closest("article");


        if (
            article &&
            containerPengalaman.contains(article)
        ) {

            article.classList.add(
                "artikel-hover"
            );

        }

    }
);


containerPengalaman.addEventListener(
    "mouseout",
    function(event) {

        const article =
            event.target.closest("article");


        if (
            article &&
            containerPengalaman.contains(article)
        ) {

            article.classList.remove(
                "artikel-hover"
            );

        }

    }
);


// ==========================================
// MODUL 5
// LANGKAH 2
// EVENT DELEGATION
// LIKE + HAPUS
// ==========================================

containerPengalaman.addEventListener(
    "click",
    function(event) {

        const target =
            event.target;


        // ==============================
        // LIKE
        // ==============================

        if (
            target.classList.contains(
                "tombol-like"
            )
        ) {

            let jumlah =
                parseInt(
                    target.dataset.like || "0"
                );


            jumlah++;


            target.dataset.like =
                jumlah;


            target.textContent =
                "Like (" + jumlah + ")";

        }


        // ==============================
        // HAPUS
        // ==============================

        if (
            target.classList.contains(
                "tombol-hapus"
            )
        ) {

            const idYangDihapus =
                Number(
                    target.dataset.id
                );


            const index =
                daftarPengalaman.findIndex(
                    function(pengalaman) {

                        return pengalaman.id ===
                            idYangDihapus;

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


// ==========================================
// MODUL 4
// TOGGLE KONTAK
// ==========================================

tombolToggleKontak.addEventListener(
    "click",
    function() {

        if (
            isiKontak.style.display ===
            "none"
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


// ==========================================
// MODUL 5
// VARIABEL KOMENTAR
// ==========================================

const formKomentar =
    document.querySelector(
        "#form-komentar"
    );

const daftarKomentar =
    document.querySelector(
        "#daftar-komentar"
    );

const pesanError =
    document.querySelector(
        "#pesan-error"
    );

const tombolHapusSemua =
    document.querySelector(
        "#btn-hapus-semua"
    );

const modalKonfirmasi =
    document.querySelector(
        "#modal-konfirmasi"
    );

const btnYa =
    document.querySelector(
        "#btn-ya"
    );

const btnTidak =
    document.querySelector(
        "#btn-tidak"
    );


// ==========================================
// MODUL 5
// LANGKAH 3
// FORM KOMENTAR + preventDefault()
// ==========================================

formKomentar.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const nama =
            document.querySelector(
                "#input-nama-komentar"
            ).value.trim();


        const pesan =
            document.querySelector(
                "#input-pesan"
            ).value.trim();


        // Validasi

        if (
            nama === "" ||
            pesan === ""
        ) {

            pesanError.textContent =
                "Nama dan komentar wajib diisi!";

            return;

        }


        if (pesan.length < 5) {

            pesanError.textContent =
                "Komentar minimal 5 karakter.";

            return;

        }


        pesanError.textContent =
            "";


        // ==================================
        // MODUL 5
        // LANGKAH 4
        // RENDER KOMENTAR KE DOM
        // ==================================

        const itemKomentar =
            document.createElement("li");


        const teksKomentar =
            document.createElement("span");

        teksKomentar.className =
            "komentar-text";

        teksKomentar.textContent =
            nama + ": " + pesan;


        const tombolHapus =
            document.createElement("button");

        tombolHapus.className =
            "hapus-komentar";

        tombolHapus.type =
            "button";

        tombolHapus.textContent =
            "Hapus";


        itemKomentar.appendChild(
            teksKomentar
        );

        itemKomentar.appendChild(
            tombolHapus
        );


        daftarKomentar.appendChild(
            itemKomentar
        );


        formKomentar.reset();

    }
);


// ==========================================
// MODUL 5
// EVENT DELEGATION
// HAPUS KOMENTAR
// ==========================================

daftarKomentar.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "hapus-komentar"
            )
        ) {

            event.target.parentElement.remove();

        }

    }
);


// ==========================================
// MODUL 5
// HAPUS SEMUA KOMENTAR
// MODAL KONFIRMASI
// ==========================================

tombolHapusSemua.addEventListener(
    "click",
    function() {

        modalKonfirmasi.style.display =
            "block";

    }
);


btnYa.addEventListener(
    "click",
    function() {

        daftarKomentar.innerHTML =
            "";

        modalKonfirmasi.style.display =
            "none";

    }
);


btnTidak.addEventListener(
    "click",
    function() {

        modalKonfirmasi.style.display =
            "none";

    }
);