import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup
        .string()
        .email('Gecerli Bir E-Mail Giriniz')
        .required('E-Mail Girmek Zorunludur'),
    age: yup
        .number()
        .positive('Lutfen Pozitif Bir Yas Giriniz')
        .integer('Lutfen Yaşsinizi Tam Sayi Olarak Giriniz')
        .required('Yas Girmek Zorunludur'),
    password: yup
        .string()
        .min(5, 'Lutfen Minumun 5 Karakter Giriniz')
        .matches(passwordRules, {
          message: 'Lutfen En Az 1 Buyuk Harf 1 Kucuk Harf Ve 1 Sayi Giriniz',
        })
        .required('Sifre Girmek Zorunludur'),
    confirmPassword: yup
        .string()
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
        .oneOf(['bogazici', 'gsu', 'odtu', 'itu'], 'Lutfen Universitenizi Seciniz')
        .required('Lutfen Universitenizi Seciniz'),
    isAccepted: yup.boolean().oneOf([true], 'Kullanim Kosullarini Kabul Ediniz'),
});