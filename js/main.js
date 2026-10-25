/**
 * Poverta - High-End Streetwear & Editorial B2B Clothing Vendor
 * Interactive Frontend Scripts
 * - Modern Fullscreen Drawer Navigation (Hamburger Menu)
 * - Interactive Dots Pagination with ScrollSpy
 * - Catalog Material Filtering (Pill Tabs)
 * - Technical Material Detail Modal
 * - Smooth Scrolling & Back-to-Top
 */

document.addEventListener('DOMContentLoaded', () => {
  initDrawerNavigation();
  initDotsPagination();
  initCatalogFilter();
  initMaterialModal();
  initBackToTop();
});

// Official WhatsApp Configuration for Poverta
const WHATSAPP_PHONE = '6285754695216'; // +62 857-5469-5216

/**
 * 1. Minimalist Hamburger Menu & Fullscreen Drawer Navigation
 */
function initDrawerNavigation() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('nav-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawerNavLinks = document.querySelectorAll('.drawer-nav-link');
  const mainHeader = document.getElementById('hero-nav');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.remove('pointer-events-none', 'opacity-0');
    drawer.classList.add('opacity-100');
    const drawerPanel = drawer.querySelector('#drawer-panel');
    if (drawerPanel) {
      drawerPanel.classList.remove('translate-x-full');
      drawerPanel.classList.add('translate-x-0');
    }
    document.body.classList.add('overflow-hidden');
    if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    if (!drawer) return;
    const drawerPanel = drawer.querySelector('#drawer-panel');
    if (drawerPanel) {
      drawerPanel.classList.remove('translate-x-0');
      drawerPanel.classList.add('translate-x-full');
    }
    drawer.classList.remove('opacity-100');
    drawer.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
    if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', openDrawer);
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  drawerNavLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && !drawer.classList.contains('pointer-events-none')) {
      closeDrawer();
    }
  });

  // Sticky header background blur change on scroll
  window.addEventListener('scroll', () => {
    if (!mainHeader) return;
    if (window.scrollY > 40) {
      mainHeader.classList.add('bg-[#07090E]/85', 'backdrop-blur-md', 'border-b', 'border-white/5');
    } else {
      mainHeader.classList.remove('bg-[#07090E]/85', 'backdrop-blur-md', 'border-b', 'border-white/5');
    }
  });
}

/**
 * 2. Sisi Kanan Layar: Indikator Titik-Titik (Dots Pagination) Interaktif
 */
function initDotsPagination() {
  const dots = document.querySelectorAll('.pagination-dot');
  const sections = [
    document.getElementById('hero'),
    document.getElementById('katalog-bahan'),
    document.getElementById('layanan-merch'),
    document.getElementById('testimoni'),
    document.getElementById('kontak')
  ].filter(Boolean);

  if (dots.length === 0 || sections.length === 0) return;

  function updateActiveDot() {
    const scrollPosition = window.scrollY + window.innerHeight * 0.35;
    let currentId = 'hero';

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    dots.forEach(dot => {
      const target = dot.getAttribute('data-target');
      const innerDot = dot.querySelector('.dot-circle');
      const label = dot.querySelector('.dot-label');

      if (target === currentId) {
        dot.classList.add('active');
        if (innerDot) {
          innerDot.classList.remove('bg-slate-600', 'w-2.5', 'h-2.5');
          innerDot.classList.add('bg-white', 'w-7', 'h-2.5', 'shadow-md', 'shadow-white/30');
        }
        if (label) {
          label.classList.add('text-white', 'font-semibold');
          label.classList.remove('text-slate-500');
        }
      } else {
        dot.classList.remove('active');
        if (innerDot) {
          innerDot.classList.add('bg-slate-600', 'w-2.5', 'h-2.5');
          innerDot.classList.remove('bg-white', 'w-7', 'h-2.5', 'shadow-md', 'shadow-white/30');
        }
        if (label) {
          label.classList.remove('text-white', 'font-semibold');
          label.classList.add('text-slate-500');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveDot);
  updateActiveDot();

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = dot.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/**
 * 3. Fabric Materials Catalog Filtering (Pill Tabs)
 */
function initCatalogFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const catalogCards = document.querySelectorAll('.catalog-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button styles for Dark Luxury theme
      filterBtns.forEach(b => {
        b.classList.remove('bg-white', 'text-black', 'shadow-lg', 'shadow-white/10', 'font-bold');
        b.classList.add('bg-slate-900/80', 'text-slate-400', 'border', 'border-slate-800');
      });
      btn.classList.add('bg-white', 'text-black', 'shadow-lg', 'shadow-white/10', 'font-bold');
      btn.classList.remove('bg-slate-900/80', 'text-slate-400', 'border', 'border-slate-800');

      const filterValue = btn.getAttribute('data-filter');

      catalogCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/**
 * 4. Material Detail Modal & WhatsApp Sample Request
 */
const materialsData = {
  'cotton-combed-30s': {
    name: 'Cotton Combed 30s',
    category: 'Kain Kaos Distro',
    gsm: '140 - 150 GSM',
    composition: '100% Ring Spun Combed Cotton',
    handfeel: 'Sangat Lembut, Halus & Breathable',
    image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=800&q=80',
    description: 'Standar emas kaos distro modern di Indonesia. Terbuat dari serat kapas pilihan yang disisir rapi sehingga bebas bulu dan sangat nyaman di iklim tropis.',
    keunggulan: [
      'Menyerap keringat dengan sangat cepat dan tidak bikin gerah',
      'Permukaan super rata, hasil sablon DTF & Plastisol lebih tajam dan solid',
      'Tersedia dalam 40+ varian warna reaktif (tidak mudah pudar)',
      'Oeko-Tex Standard 100 ramah kulit sensitif'
    ],
    rekomendasi: 'Kaos harian, merch konser/acara, merchandise kantor casual, kaos distro premium.'
  },
  'cotton-combed-24s': {
    name: 'Cotton Combed 24s',
    category: 'Kain Kaos Premium',
    gsm: '175 - 185 GSM',
    composition: '100% Premium Cotton Combed',
    handfeel: 'Sedang, Jatuh Bagus & Tidak Menerawang',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
    description: 'Pilihan paling ideal bagi brand yang menginginkan kaos dengan ketebalan substansial namun tetap sejuk. Menjadi favorit brand streetwear lokal.',
    keunggulan: [
      'Ketebalan pas, tidak tembus pandang sama sekali saat dipakai',
      'Konstruksi kain kokoh, kerah tidak gampang melar (bacon collar)',
      'Sangat tahan terhadap proses pencucian mesin berulang',
      'Cocok untuk sablon berukuran besar maupun bordir presisi'
    ],
    rekomendasi: 'Kaos brand clothing, seragam gathering komunitas, polo raglan, merchandise eksklusif.'
  },
  'heavyweight-cotton': {
    name: 'Heavyweight Cotton 16s / 20s',
    category: 'Kain Streetwear / Boxy Cut',
    gsm: '215 - 240 GSM',
    composition: '100% Heavy Combed Cotton',
    handfeel: 'Tebal, Kokoh, Bertekstur Mantap & Vintage Look',
    image: 'images/streetwear_boxy_fit.png',
    description: 'Bahan signature untuk trend kaos Boxy Fit dan Oversized Streetwear gaya Jepang dan Amerika. Memberikan siluet pakaian yang kokoh dan berkarakter.',
    keunggulan: [
      'Memberikan bentuk baju yang jatuh tegak (structured boxy drape)',
      'Sangat durable, ketahanan pakai jangka panjang hingga bertahun-tahun',
      'Hasil sablon discharge dan plastisol vintage terlihat sangat premium',
      'Standard brand streetwear global'
    ],
    rekomendasi: 'Oversized t-shirt, boxy tee, drop shoulder, merchandise band limited edition.'
  },
  'cotton-bamboo': {
    name: 'Cotton Bamboo 30s',
    category: 'Kain Eco-Friendly & Premium',
    gsm: '150 - 160 GSM',
    composition: '70% Serat Bambu Alami + 30% Katun Pilihan',
    handfeel: 'Ultra Lembut, Licin Halus & Dingin di Kulit',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
    description: 'Kain premium dengan kandungan anti-bakteri alami (Penny Quinone) dari bambu. Mencegah bau keringat dan memberikan sensasi dingin alami saat menyentuh kulit.',
    keunggulan: [
      'Zat alami anti-bakteri dan hypoallergenic, sangat aman untuk kulit sensitif/alergi',
      'Memiliki kemampuan menyerap kelembapan 4x lebih baik dari katun biasa',
      'Daya tahan UV alami, melindungi kulit dari paparan sinar matahari langsung',
      'Handfeel seperti sutra, terkesan sangat mewah'
    ],
    rekomendasi: 'Pakaian premium boutique, pakaian bayi/anak, pakaian yoga/olahraga santai, kaos high-end.'
  },
  'cotton-fleece': {
    name: 'Cotton Fleece Premium',
    category: 'Kain Jaket & Hoodie',
    gsm: '280 - 320 GSM',
    composition: '80% Cotton + 20% Polyester Anti-Pil',
    handfeel: 'Bagian Dalam Lembut Berbulu Halus, Luar Rata Halus',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    description: 'Bahan standar tertinggi untuk pembuatan hoodie, zipper jacket, dan sweater. Bagian luarnya halus menyerupai katun rajut sedangkan bagian dalamnya memiliki bulu isolator hangat.',
    keunggulan: [
      'Memberikan kehangatan maksimal tanpa rasa gatal atau gerah berlebih',
      'Bulunya rapat dan tidak mudah rontok saat dicuci (anti-pilling treated)',
      'Jatuhnya mantap dan tebal, cocok untuk bordir komputer tebal maupun sablon',
      'Warna pekat dan tahan lama'
    ],
    rekomendasi: 'Pullover hoodie, zipper jacket, varsity jacket, sweater universitas, merch eksklusif musim dingin.'
  },
  'baby-terry': {
    name: 'Baby Terry Cotton',
    category: 'Kain Crewneck & Loungewear',
    gsm: '230 - 260 GSM',
    composition: '100% Combed Cotton Terry Loop',
    handfeel: 'Ringan, Bagian Dalam Tekstur Loop Menyerap, Lentur',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
    description: 'Kain rajut dengan bagian dalam bermotif lingkaran kecil (loop) seperti handuk lembut. Lebih ringan dari fleece sehingga nyaman dipakai indoor ber-AC maupun aktivitas outdoor.',
    keunggulan: [
      'Tekstur loop di dalam meningkatkan sirkulasi udara dan serapan keringat',
      'Tidak terlalu tebal, pas untuk gaya kasual harian di iklim Indonesia',
      'Fleksibel dan nyaman untuk bergerak aktif',
      'Mudah dirawat dan tidak gampang berbulu di bagian luar'
    ],
    rekomendasi: 'Crewneck sweater, jogger pants, short pants santai, outer casual pria/wanita.'
  },
  'lacoste-cvc': {
    name: 'Lacoste CVC Pique',
    category: 'Kain Polo Shirt Elegan',
    gsm: '210 - 230 GSM',
    composition: '60% Cotton + 40% Polyester CVC High Grade',
    handfeel: 'Berpori Segienam (Honeycomb), Kokoh & Rapi',
    image: 'images/polo_shirt_elegan.jpg',
    description: 'Kain rajutan pique berpori heksagonal yang menjadi ikon busana polo shirt kelas dunia. Kombinasi katun dan polyester menghasilkan kain yang adem sekaligus tidak mudah kusut.',
    keunggulan: [
      'Porositas honeycomb membuat sirkulasi udara sangat lancar',
      'Penyusutan (shrinkage) sangat rendah berkat campuran CVC berkualitas',
      'Sangat kokoh dan rapi saat dipadukan dengan kerah rajut rib',
      'Media terbaik untuk bordir logo presisi tinggi'
    ],
    rekomendasi: 'Polo shirt seragam korporasi, seragam golf/event resmi, polo panitia acara profesional.'
  },
  'american-drill': {
    name: 'American & Japan Drill',
    category: 'Kain Kemeja PDH & PDL',
    gsm: '215 - 250 GSM',
    composition: 'Campuran Katun Viscose & Polyester Serat Silang',
    handfeel: 'Anyaman Diagonal Kuat, Tegap, Tahan Gesekan',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
    description: 'Bahan andalan untuk seragam kerja lapangan, kemeja kantor, PDH mahasiswa, hingga jaket lapangan. Memiliki garis jalinan miring (twill) yang sangat kokoh.',
    keunggulan: [
      'Kekuatan tarik tinggi, tidak mudah robek saat aktivitas aktif fisik',
      'Warna kain tidak mudah pudar walau sering terpapar sinar matahari',
      'Tahan kusut sehingga seragam selalu terlihat rapi sepanjang hari',
      'Bagus untuk bordir komputer punggung berukuran besar'
    ],
    rekomendasi: 'Kemeja PDH/PDL, wearpack bengkel, celana kargo seragam, celemek barista (apron).'
  },
  'canvas-premium': {
    name: 'Canvas Cotton & Blacu Super',
    category: 'Bahan Tas, Pouch & Merch',
    gsm: '280 - 340 GSM',
    composition: '100% Unbleached / Dyed Cotton Twill Plain Weave',
    handfeel: 'Kaku Terstruktur, Tebal, Estetik & Natural',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    description: 'Bahan kain tenun padat yang kuat untuk tas ramah lingkungan pengganti plastik. Menghadirkan kesan minimalis, modern, dan sangat awet untuk barang bawaan berat.',
    keunggulan: [
      'Mampu menahan beban hingga puluhan kilogram tanpa meregang',
      'Menyerap tinta sablon manual, transfer film, dan bordir dengan sempurna',
      'Ramah lingkungan (reusable & sustainable gift item)',
      'Tersedia warna natural greige/broken white dan warna pekat'
    ],
    rekomendasi: 'Tote bag seminar, pouch kosmetik, tas belanja branded, celemek kanvas, merchandise kit souvenir.'
  }
};

function initMaterialModal() {
  const modal = document.getElementById('material-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const viewDetailBtns = document.querySelectorAll('.view-material-detail');

  if (!modal) return;

  function openModal(materialKey) {
    const data = materialsData[materialKey];
    if (!data) return;

    document.getElementById('modal-mat-img').src = data.image;
    document.getElementById('modal-mat-title').textContent = data.name;
    document.getElementById('modal-mat-cat').textContent = data.category;
    document.getElementById('modal-mat-gsm').textContent = data.gsm;
    document.getElementById('modal-mat-comp').textContent = data.composition;
    document.getElementById('modal-mat-handfeel').textContent = data.handfeel;
    document.getElementById('modal-mat-desc').textContent = data.description;
    document.getElementById('modal-mat-rekom').textContent = data.rekomendasi;

    const listContainer = document.getElementById('modal-mat-keunggulan');
    listContainer.innerHTML = '';
    data.keunggulan.forEach(item => {
      const li = document.createElement('li');
      li.className = 'flex items-start text-xs sm:text-sm text-slate-300';
      li.innerHTML = `<svg class="w-4 h-4 text-rose-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span>${item}</span>`;
      listContainer.appendChild(li);
    });

    // Update CTA button link
    const waText = encodeURIComponent(`Halo Poverta, saya tertarik untuk konsultasi dan meminta sampel kain bahan *${data.name}* (${data.category}). Mohon info ketersediaan warna dan penawaran harganya ya.`);
    const ctaBtn = document.getElementById('modal-mat-wa-btn');
    ctaBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${waText}`;

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  viewDetailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const materialKey = btn.getAttribute('data-material');
      openModal(materialKey);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

/**
 * 5. Back-to-Top Button
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.add('opacity-100', 'translate-y-0');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
