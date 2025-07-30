# RFM Segmentasyon Dashboard

RFM (Recency, Frequency, Monetary) analizi kullanarak müşteri segmentasyonu yapan interaktif web uygulaması.

## 🎯 Proje Amacı

Bu proje, müşteri verilerini RFM analizi ile segmentlere ayırarak görselleştiren bir dashboard sunar. Müşterilerin satın alma davranışlarını analiz ederek değerli segmentlere ayırır.

## ✨ Özellikler

### 🎨 **Görselleştirme**
- **5x5 Grid**: Müşteri verilerini x-y koordinatlarında görselleştirme
- **Segment Renkleri**: Her segment için farklı renk kodlaması
- **İnteraktif Kartlar**: Tıklanabilir müşteri kartları

### 🔍 **Filtreleme**
- **Recency Filtresi**: Son satın alma tarihine göre filtreleme
- **Frequency Filtresi**: Satın alma sıklığına göre filtreleme  
- **Monetary Filtresi**: Harcama miktarına göre filtreleme
- **Gerçek Zamanlı**: Filtreler anında sonuç verir

### 📊 **Görünüm Modları**
- **Grid Görünümü**: 5x5 grid formatında segment görünümü
- **Liste Görünümü**: Müşteri listesi formatında görünüm
- **İstatistikler**: Toplam, filtrelenmiş, seçili müşteri sayıları

### 🌍 **Çoklu Dil**
- **Türkçe**: Varsayılan dil
- **İngilizce**: İkinci dil seçeneği
- **Dil Değiştirici**: Header'da kolay dil değiştirme

### 🎯 **Seçim ve Gönderim**
- **Müşteri Seçimi**: Tekil veya toplu müşteri seçimi
- **API Entegrasyonu**: Seçilen ID'leri backend'e gönderme
- **Bildirimler**: İşlem sonuçları için toast bildirimleri

## 🛠️ Kullanılan Teknolojiler

- **Next.js 15**: React framework
- **Tailwind CSS**: Styling
- **React Query**: API state management
- **React Icons**: İkonlar
- **React Toastify**: Bildirimler

## 📊 RFM Analizi

### Skorlama (1-5 Ölçeği)
- **Recency**: Son satın almadan bu yana geçen günler
- **Frequency**: Toplam satın alma sayısı
- **Monetary**: Toplam harcama miktarı

### Segmentler
- **Şampiyonlar** (8-10): En değerli müşteriler
- **Sadık Müşteriler** (6-7): İyi müşteriler
- **Risk Altında** (4-5): Azalan müşteriler
- **Kayıp** (2-3): Düşük değerli müşteriler

## 🚀 Kullanım

### Kurulum
```bash
git clone https://github.com/yunusgnc/RFM-Segmentation.git
cd rfm-segmentation
npm install
npm run dev
```

### Kullanım Adımları
1. **Grid Görünümü**: Müşteri segmentlerini 5x5 grid'de görüntüle
2. **Filtreleme**: Sol panelden RFM skorlarına göre filtrele
3. **Seçim**: İstediğin müşterileri seç
4. **Gönderim**: "Seçili ID'leri Gönder" butonuna tıkla

## 📁 Proje Yapısı

```
src/
├── app/                    # Ana sayfa ve API
├── features/rfm/          # RFM özellikleri
├── shared/               # Ortak komponentler
├── lib/i18n/            # Dil desteği
└── data/                # Müşteri verileri
```

## 🌐 Canlı Demo

**Vercel**: https://rfm-segmentation-h6du-4tld3otwy-yunusgncs-projects.vercel.app/

## 📂 Repository

**GitHub**: https://github.com/yunusgnc/RFM-Segmentation

---

**Geliştirici**: Yunus Günc  
**Versiyon**: 1.0.0


