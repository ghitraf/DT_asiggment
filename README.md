# Poverta — Landing Page Website

Landing page modern, elegan, dan profesional untuk **Poverta** (*Wear a Better Mindset*), vendor penyuplai bahan baku kain berkualitas tinggi dan penyedia jasa pembuatan pakaian kustom (kemeja PDH, jaket varsity, kaos distro, hoodie, tote bag, dan souvenir).

---

## 🎨 Palet Warna & Tipografi Eksklusif (Quiet Luxury Atelier)

1. **Palet Warna**:
   - **Latar Belakang**: Off-White (`#F9F9F6`)
   - **Teks & Navigasi**: Charcoal Black (`#1A1A1A`)
   - **Aksen Utama**: Bronze Hangat (`#A38A75`) untuk tombol sampel kain dan kontak/WhatsApp
   - **Permukaan Kartu**: Putih Bersih (`#FFFFFF`) dengan border hangat (`#EBE7DF`)

2. **Tipografi**:
   - **Judul & Heading**: Font Serif **Cinzel** (Memberikan kesan elegan, mewah, dan berwibawa)
   - **Deskripsi & Spesifikasi**: Font Sans-Serif **Montserrat** (Mudah dibaca, rapi, dan modern)

3. **Sub-Headline Hero**:
   > *"Poverta menyediakan kain roll siap kirim dari pabrik serta jasa pembuatan pakaian kustom (seperti kemeja PDH, jaket varsity, kaos, hoodie, hingga tote bag), bahkan kami bisa bekerjasama menjadi salahsatu merchendaise,"*

---

## 🚀 Fitur & Komponen Utama

- **Top Announcement Bar Minimalis**: Satu baris terpusat `"🟢 Kapasitas Produksi Bulan Ini: AKTIF | Gratis Sampel Bahan & Konsultasi Desain"`.
- **Hero Section Elegan & Bersih**: Gambar produk/kain tampil penuh tanpa tumpukan kotak kartu overlay, dibingkai halus dengan `rounded-2xl` dan border hangat.
- **Logo Resmi Poverta**: Terintegrasi pada Header, Hero, Footer, dan Favicon (`assets/images/logo.png`).
- **Nomor WhatsApp Resmi**: Terhubung langsung ke **`+62 857-5469-5216`**.
- **Instagram Resmi**: Terhubung langsung ke **[`@povertavendor`](https://www.instagram.com/povertavendor?mdxt=MXVpZGgxbzk3dGIwMg%3D%3D)**.
- **Floating WhatsApp Minimalis**: Ikon bundar melayang (*circle icon button*) di pojok kanan bawah yang tidak menutupi barisan logo mitra/klien.
- **Katalog Bahan Baku Kain**: 9 varian kain dengan filter kategori dan modal pop-up spesifikasi teknis beserta tombol bronze *Minta Sampel Kain*.
- **Layanan Pakaian Kustom**: 6 produk utama lengkap dengan deskripsi, spesifikasi, dan MOQ.
- **Portofolio & Testimoni Order Nyata**:
  - *Kemeja PDH Organisasi SEMA & BPM FEB KMUP* (American Drill, Two-tone Charcoal & Black, piping kuning, bordir 4 titik).
  - *Varsity Bomber Jacket MCS MB Telkom University* (Cotton Fleece 330, Choco-Cream, bordir chenille 'MC', patch '24').
- **Floating WhatsApp Bronze**: Tombol mengambang di pojok kanan bawah dengan aksen bronze hangat.

---

## 📁 Struktur Direktori

```text
/Users/mac/Downloads/coba-coba/
├── index.html                  # File halaman utama landing page
├── css/
│   └── style.css               # Styling tema warna (Off-White, Charcoal, Bronze) & tipografi
├── js/
│   └── main.js                 # Logika interaktif (filter, modal bahan, navbar scroll)
├── assets/
│   └── images/
│       ├── logo.png            # Logo resmi Poverta
│       ├── pdh_shirts_clean.jpg # Foto kemeja PDH SEMA BPM FEB KMUP
│       └── varsity_jacket_framed.jpg # Foto varsity jacket MCS MB Telkom
└── README.md                   # Dokumentasi lengkap
```

---

## 🛠️ Cara Menjalankan Secara Lokal

Buka langsung file [index.html](file:///Users/mac/Downloads/coba-coba/index.html) di browser Anda atau gunakan Python 3 server:

```bash
cd /Users/mac/Downloads/coba-coba
python3 -m http.server 3000 --bind 127.0.0.1
```
Lalu akses [http://127.0.0.1:3000](http://127.0.0.1:3000).
