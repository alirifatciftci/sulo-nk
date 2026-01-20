# Vercel Deployment Rehberi

## 🚀 Adım 1: Vercel'a Giriş

1. **Vercel.com** adresine git
2. **"Sign Up"** veya **"Log In"** tıkla
3. **"Continue with GitHub"** seç
4. GitHub hesabınla giriş yap

## 📦 Adım 2: Projeyi Import Et

1. Vercel dashboard'da **"Add New..."** butonuna tıkla
2. **"Project"** seç
3. **"Import Git Repository"** bölümünde **"sulo-nk"** reposunu bul
4. **"Import"** butonuna tıkla

## ⚙️ Adım 3: Proje Ayarları

Vercel otomatik olarak algılayacak ama kontrol et:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**"Deploy"** butonuna tıkla!

## ⏱️ Adım 4: Bekle

- Build süreci 1-2 dakika sürer
- Tamamlandığında otomatik domain verilir
- Örnek: `sulo-nk.vercel.app`

## ✅ Adım 5: Test Et

1. Verilen linke tıkla
2. Site açılmalı
3. Tüm sayfaları test et (Home, Work, About, Contact)

## 🔄 Otomatik Deployment

Artık her GitHub push'unda:

- Vercel otomatik build yapar
- Yeni versiyonu yayınlar
- Eski versiyon yedekte kalır

## 🌐 Domain Ekleme (İleride)

Domain aldığında:

1. Vercel dashboard'da projeye git
2. **"Settings"** → **"Domains"** tıkla
3. Domain adını yaz (örn: `suleymandegirmenci.com`)
4. DNS ayarlarını kopyala
5. Domain sağlayıcında (GoDaddy, Namecheap vs.) DNS'i güncelle:

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

6. 24 saat içinde aktif olur

## 📊 Environment Variables (İleride)

Google Analytics eklemek için:

1. Vercel'da **"Settings"** → **"Environment Variables"**
2. Ekle:
   ```
   Name: VITE_GA_ID
   Value: G-XXXXXXXXXX
   ```
3. Redeploy et

## 🔧 Sorun Giderme

### Build Hatası

- GitHub'da son commit'i kontrol et
- Vercel'da "Deployments" → "View Build Logs"

### Site Açılmıyor

- 5-10 dakika bekle
- Tarayıcı cache'ini temizle (Ctrl+Shift+R)

### 404 Hatası

- `vercel.json` dosyası var mı kontrol et
- Redeploy yap

## 📱 Mobil Test

Deploy edince:

- Telefonda aç
- Instagram bio'ya link ekle
- Arkadaşlarına gönder

## 🎉 Tamamlandı!

Site artık canlı ve herkes erişebilir!

**Vercel Avantajları:**

- ✅ Ücretsiz
- ✅ Otomatik HTTPS
- ✅ Global CDN (hızlı)
- ✅ Otomatik deployment
- ✅ Preview links (her branch için)

---

**Sorular için:** Vercel documentation - vercel.com/docs
