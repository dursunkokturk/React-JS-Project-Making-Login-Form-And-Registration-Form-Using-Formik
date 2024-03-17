import { useField } from 'formik';
import React from 'react';

// PortalForm.js Dosyasindaki Formik Icinde Bulunan 
// Form Icinde Bulunan
// CustomCheckbox Componenti Icindeki 
// Degiskenlere Atanan Degerleri Aliyoruz
function CustomCheckbox({ label, ...props }) {

  // field Uzerinden Ve meta Uzerinden props Array Icindeki 
  // PortalForm.js Dosyasinda Bulunan 
  // CustomCheckbox Componenti Icindeki Elementlere Ulasilmasi Ve
  // Kullanilabilir Ozelliklere Ulasiyoruz
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}

          // Input Alanina Veri Girisi Yapilirken Hata Olursa
          // Olusan Hatayi Yazdirmak Icin
          // meta Uzerinden error Ozelligini Kullaniyoruz
          className={meta.error ? 'input-error' : ''}
        />
        <span>Kullanım koşullarını kabul ediyorum</span>
      </div>

        {/* Input Alanina Veri Girisi Yapilirken Hata Olursa */}
        {/* Olusan Hatayi Kullanciya Gosteriyoruz */}
      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomCheckbox;