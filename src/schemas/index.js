import * as yup from 'yup';

// Formda Girilen Sifre Icin Kontrol Islemini Yapiyoruz
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

// E-Mail Yas Sifre Ve Sifre Tekrari Icin
// basicSchema Kullaniyoruz
export const basicSchema = yup.object().shape({

  // Validation Islemi Icin Formun Oldugu Dosya Icindeki 
  // useFormik Alani Icinde Yer Alan initialValues Kismindaki 
  // Alan Adlarinin Yazimi Ile Ayni Olmasi Gerekiyor
  email: yup

    // Form Alaninda Girilecek Verinin Hangi Tipte Oldugunu Belirtiyoruz
    .string()

    // Form Doldurulurken Alanin Bos Kalmasi Durumunda Yada
    // Gecerli Bir Bilgi Girilmesidinde Kullaniciya Gorunecek Mesaj
    .email('Gecerli Bir E-Mail Giriniz')

    // Form Doldurulurken Bos Kalmamasi Gereken Alanin 
    // Mutlaka Doldurulmasi Gerektiginde Kullaniciya Gorunecek Mesaj
    .required('E-Mail Girmek Zorunludur'),
  age: yup

    // Formda Doldurulan Alan Icine Girilen Verinin 
    // Hangi Tipte Olmasi Gerektigini Belirtiyoruz
    .number()

    // Formda Doldurulan Alan Icine Girilen Verinin 
    // Hangi Aralikta Olmasi Gerektigini Belirtiyoruz
    .positive('Lutfen Pozitif Bir Yas Giriniz')

    // Formda Doldurulan Alan Icine Girilen Verinin
    // Ondalikli Sayi Olmasini Engelliyoruz
    .integer('Lutfen Yaşsinizi Tam Sayi Olarak Giriniz')
    .required('Yas Girmek Zorunludur'),
  password: yup
    .string()

    // Formda Girilecek Verinin En Fazla Kac Karakter Olmasi Gerektigini Belirtiyoruz
    .min(5, 'Lutfen Minumun 5 Karakter Giriniz')

    // Formda Girilecek Verinin Bir Onceki Girildigi Yerdeki Veri Ile Ayni Olmasi Gerektigini Belirtiyoruz
    // Girilen Verilerin Kontrolunu Yapmak Icin Bir Degisken Kullaniyoruz
    .matches(passwordRules, {
      message: 'Lutfen En Az 1 Buyuk Harf 1 Kucuk Harf Ve 1 Sayi Giriniz',
    })
    .required('Sifre Girmek Zorunludur'),
  confirmPassword: yup
    .string()

    // Form Icinde Girilen Sifre Ile Tekrar Girilen Sifreyi Karsilastirma Yapiyoruz
    // En Az Birisi Yoksa Hata Mesaji Verecek
    .oneOf([yup.ref('password')], 'Sifreler Eslesmiyor')
    .required('Tekrar Sifre Girmek Zorunludur'),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Kullanici Adi Minunmum 3 Karakter Uzunlugunda Olmalidir')
    .required('Kullanici Adi Zorunludur'),
  university: yup
    .string()

    // Form Icinde Secilen Universite Bilgisini Aliyoruz
    // En Az Birisi Secilmez Ise Hata Mesaji Verecek
    .oneOf(['bogazici', 'gsu', 'odtu', 'itu'], 'Lutfen Universitenizi Seciniz')
    .required('Lutfen Universitenizi Seciniz'),
  isAccepted: yup.boolean().oneOf([true], 'Kullanim Kosullarini Kabul Ediniz'),
});