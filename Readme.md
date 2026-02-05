# CENT.DEV - Cyberpunk Portfolio

## 🚀 Portfolio Website dengan Cyberpunk/Glitch Design System

Website portfolio single-page dengan aesthetic **High-Tech, Low-Life** yang menampilkan projects, skills, dan informasi kontak dengan design system cyberpunk yang distinctive.

---

## ✨ Features

### Design Features
- ⚡ **Scanline Overlay** - CRT monitor effect di seluruh halaman
- 🔮 **Chamfered Corners** - Corner cuts pada semua cards (bukan rounded)
- 💚 **Neon Glow Effects** - Multi-layered box shadows untuk efek cahaya neon
- 🎯 **Chromatic Aberration** - RGB splitting pada hero headline
- 🖥️ **Terminal Aesthetic** - Prefix `>` dan `$` untuk terminal feel
- 📐 **Circuit Grid Pattern** - Background PCB-inspired
- ✨ **Glitch Animations** - Hover effects dan scroll animations
- 🎨 **HUD Stats Panel** - Futuristic stats display dengan animasi counter

### Interactive Features
- 🖱️ **Smooth Scroll** - Navigasi halus antar section
- 📊 **Animated Counters** - Stats yang menghitung secara otomatis
- 📈 **Progress Bars** - Skill level bars dengan animasi
- ⏰ **Real-time Clock** - Jam digital di HUD panel
- 🎭 **Scroll Animations** - Cards muncul dengan stagger effect
- ⌨️ **Typewriter Effect** - Hero tag dengan typing animation
- 🎮 **Konami Code Easter Egg** - Coba ketik: ↑ ↑ ↓ ↓ ← → ← → B A

---

## 📁 File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # Cyberpunk design system styles
├── script.js       # Interactive animations & effects
└── README.md       # Documentation (file ini)
```

---

## 🌐 Deploy ke GitHub Pages

### Method 1: Manual Upload

1. **Buat repository baru di GitHub**
   - Nama repository: `username.github.io` (ganti `username` dengan GitHub username Anda)
   - Set sebagai **Public**

2. **Upload files**
   - Upload `index.html`, `styles.css`, dan `script.js`
   - Commit dengan message: "Initial commit - Cyberpunk Portfolio"

3. **Enable GitHub Pages**
   - Settings → Pages
   - Source: pilih branch `main` atau `master`
   - Folder: pilih `/ (root)`
   - Save

4. **Akses website**
   - URL: `https://username.github.io`

### Method 2: Git Command Line

```bash
# 1. Buat repository kosong di GitHub terlebih dahulu

# 2. Clone repository
git clone https://github.com/username/username.github.io.git
cd username.github.io

# 3. Copy files portfolio ke folder
# (copy index.html, styles.css, script.js ke folder ini)

# 4. Commit dan push
git add .
git commit -m "Initial commit - Cyberpunk Portfolio"
git push origin main

# 5. GitHub Pages akan otomatis deploy
```

---

## 🎨 Customization Guide

### Mengganti Informasi Pribadi

#### 1. Email & GitHub Links
Di `index.html`, cari dan ganti:

```html
<!-- Email -->
<a href="mailto:cent@example.com" class="contact-method">
<!-- Ganti: cent@example.com dengan email Anda -->

<!-- GitHub -->
<a href="https://github.com/cent" target="_blank" class="contact-method">
<!-- Ganti: cent dengan username GitHub Anda -->
```

#### 2. Foto Profil
Untuk menambah foto profil, ganti section ini di `index.html`:

```html
<div class="profile-image-placeholder">
    <!-- Ganti dengan: -->
    <img src="your-photo.jpg" alt="Cent Profile" 
         style="width: 100%; height: 100%; object-fit: cover; 
                clip-path: polygon(0 15px, 15px 0, calc(100% - 15px) 0, 
                100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 
                15px 100%, 0 calc(100% - 15px));">
</div>
```

Upload foto ke folder yang sama dengan `index.html`.

#### 3. CV Download Link
Di `index.html`, cari:

```html
<a href="#" class="btn btn-primary btn-download" download>
<!-- Ganti # dengan: -->
<a href="CV_Cent.pdf" class="btn btn-primary btn-download" download>
```

Upload file CV Anda (format PDF) dengan nama `CV_Cent.pdf` ke folder yang sama.

#### 4. Project Links
Untuk menambahkan link ke project details:

```html
<a href="#" class="project-link">VIEW_MORE</a>
<!-- Ganti # dengan link ke GitHub repo atau demo: -->
<a href="https://github.com/username/project-name" class="project-link">VIEW_MORE</a>
```

---

## 🎨 Color Customization

Untuk mengganti warna neon, edit di `styles.css`:

```css
:root {
    /* Warna utama */
    --accent: #00ff88;           /* Neon hijau (ubah sesuai selera) */
    --accent-secondary: #ff00ff; /* Neon magenta */
    --accent-tertiary: #00d4ff;  /* Neon cyan */
}
```

Contoh alternatif color schemes:
- **Blue Cyberpunk**: `--accent: #0099ff;`
- **Red Cyberpunk**: `--accent: #ff0066;`
- **Purple Cyberpunk**: `--accent: #9933ff;`

---

## 📱 Responsive Design

Website ini sudah **fully responsive** dengan breakpoints:
- **Mobile**: < 480px - Single column, stack layout
- **Tablet**: 480px - 768px - 2 column grid
- **Desktop**: > 768px - Full layout dengan HUD panel

---

## 🔧 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, animations, clip-path
- **Vanilla JavaScript** - No dependencies, no frameworks
- **Google Fonts** - Orbitron, JetBrains Mono, Share Tech Mono

---

## 🎯 Browser Compatibility

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ⚠️ IE11 (Not supported - clip-path tidak didukung)

---

## ♿ Accessibility Features

- ✅ Semantic HTML structure
- ✅ ARIA labels untuk icon buttons
- ✅ Keyboard navigation support
- ✅ Focus visible states dengan neon glow
- ✅ `prefers-reduced-motion` support
- ✅ High contrast ratios (WCAG AA compliant)

---

## 🐛 Troubleshooting

### Problem: Fonts tidak muncul
**Solution**: Pastikan koneksi internet aktif saat pertama kali load (fonts dari Google Fonts)

### Problem: Animasi terlalu banyak/mengganggu
**Solution**: Browser modern dengan "Reduce Motion" settings akan otomatis disable animations

### Problem: Website tidak muncul di GitHub Pages
**Solution**: 
1. Pastikan file bernama `index.html` (lowercase)
2. Check Settings → Pages, pastikan sudah enable
3. Tunggu 5-10 menit untuk deployment

---

## 📝 To-Do / Future Improvements

- [ ] Add actual CV PDF file
- [ ] Add real profile photo
- [ ] Link projects to GitHub repositories
- [ ] Add project screenshots/demos
- [ ] Create individual project detail pages
- [ ] Add contact form functionality (menggunakan FormSpree atau EmailJS)
- [ ] Add blog section (opsional)
- [ ] Optimize images and assets
- [ ] Add PWA manifest for mobile "Add to Home Screen"

---

## 📄 License

Silakan gunakan, modifikasi, dan customize sesuai kebutuhan Anda!

---

## 💡 Tips

1. **SEO**: Update meta description di `<head>` dengan informasi Anda
2. **Analytics**: Tambahkan Google Analytics untuk track visitors
3. **Performance**: Gunakan WebP untuk images (jika menambahkan foto)
4. **Social**: Tambahkan Open Graph tags untuk preview bagus di social media

---

## 🎮 Easter Eggs

- Console greeting message dengan ASCII art
- Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A (Matrix mode glitch effect!)
- Hover effects pada semua interactive elements

---

## 📧 Contact

Jika ada pertanyaan atau butuh bantuan customization, feel free to reach out!

**Built with 💚 using Cyberpunk Design System**

---

**SYSTEM_READY // DEPLOY_NOW.EXE**