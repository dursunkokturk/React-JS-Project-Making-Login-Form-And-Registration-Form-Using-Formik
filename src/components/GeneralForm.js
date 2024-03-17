import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import { Link } from 'react-router-dom';

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  // Yapilacak Islemin Yapilmasi Icin Beklenecek Sureyi Belirliyoruz
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  // actions Parametresi Uzerinden 
  // 1 sn Bekledikten Sonra Form Uzerinde Yazilan Bilgileri Sifirliyoruz
  actions.resetForm();
};

function GeneralForm() {

  // Descriction Yapisini Kullanarak
  // Formik Icindeki Erisilebilecek Ozelliklerden 
  // Hangilerini Kullanilacak Ise Onlari Belirtiyoruz
  // isSubmitting Kullanarak 
  // Form Icinde Girilen Bilgilerin Kaydedilmesi Islemi Bitene Kadar
  // Butonu Gorunup Olarak Degil Islev Olarak 
  // Pasif Hale Getirip Butona Basilmasini Engelliyoruz
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
      },

      // Form Uzerindeki Butona Tiklanmadan Once 
      // basicSchema Degiskeni Uzerindden index.js Dosyasi Icindeki 
      // Validation Kontrolunu Yapiyoruz
      validationSchema: basicSchema,
      onSubmit,
    });

  //   console.log(formik);
  return (

    // Form Uzerindeki Butona Tiklandiginda Kontrol Islemlerinin Yapilmasi Icin
    // useFormik Fonksiyonu Icindeki handleSubmit Degiskenini Parametre Olarak Veriyoruz
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="email"

          // values Parametresi Uzerinden Formik Icindeki email Ozelligine Ulasiyoruz
          value={values.email}

          // handleChange Parametresi Uzerinden Formik Icindeki handleChange Ozelligine Ulasiyoruz
          onChange={handleChange}

          // id Parametresi Uzerinden Formik Icindeki email Ozelligini Birlestiriyoruz
          id="email"
          placeholder="Mail Adresinizi Giriniz"

          // Form Uzerinde E-Mail Bilgisi Girildiginde Hata Olur Ise
          // Bu Hatasi CSS Islemi Ile Birlikte Kullaniciya Gosteriyoruz
          className={errors.email ? 'input-error' : ''}
        />

        {/*Form Uzerinde Girilen E-Mail Bilgisinde Hata Var Ise
            errors Degiskeni Uzerinden Bu Hatayi Kullaniciya Gosteriyoruz*/}
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="inputDiv">
        <label>Yas</label>
        <input
          type="number"

          // values Parametresi Uzerinden Formik Icindeki age Ozelligine Ulasiyoruz
          value={values.age}

          // handleChange Parametresi Uzerinden Formik Icindeki handleChange Ozelligine Ulasiyoruz
          onChange={handleChange}

          // id Parametresi Uzerinden Formik Icindeki age Ozelligini Birlestiriyoruz
          id="age"
          placeholder="Yasinizi Giriniz"
          className={errors.age ? 'input-error' : ''}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="inputDiv">
        <label>Sifre</label>
        <input
          type="password"

          // values Parametresi Uzerinden Formik Icindeki password Ozelligine Ulasiyoruz
          value={values.password}

          // handleChange Parametresi Uzerinden Formik Icindeki handleChange Ozelligine Ulasiyoruz
          onChange={handleChange}

          // id Parametresi Uzerinden Formik Icindeki password Ozelligini Birlestiriyoruz
          id="password"
          placeholder="Sifrenizi Giriniz"
          className={errors.password ? 'input-error' : ''}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="inputDiv">
        <label>Sifre Tekrar</label>
        <input
          type="password"

          // values Parametresi Uzerinden Formik Icindeki email Ozelligine Ulasiyoruz
          value={values.confirmPassword}

          // handleChange Parametresi Uzerinden Formik Icindeki handleChange Ozelligine Ulasiyoruz
          onChange={handleChange}

          // id Parametresi Uzerinden Formik Icindeki ConfirmPassword Ozelligini Birlestiriyoruz
          id="confirmPassword"
          placeholder="Sifrenizi Tekrar Giriniz"
          className={errors.confirmPassword ? 'input-error' : ''}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
      <button disabled={isSubmitting} type="submit">
        Kaydet
      </button>
      <Link className="formLink" to="/portal">
        Portala Git
      </Link>
    </form>
  );
}

export default GeneralForm;