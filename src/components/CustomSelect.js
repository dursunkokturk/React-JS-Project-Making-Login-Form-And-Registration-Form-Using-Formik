import { useField } from 'formik';
import React from 'react';

// PortalForm.js Dosyasindaki Formik Icinde Bulunan 
// Form Icinde Bulunan
// CustomSelect Componenti Icindeki 
// Degiskenlere Atanan Degerleri Aliyoruz
function CustomSelect({ label, ...props }) {

  // field Uzerinden Ve meta Uzerinden props Array Icindeki 
  // PortalForm.js Dosyasinda Bulunan 
  // CustomSelect Componenti Icindeki Elementlere Ulasilmasi Ve
  // Kullanilabilir Ozelliklere Ulasiyoruz
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}

        // Input Alanina Veri Girisi Yapilirken Hata Olursa
        // Olusan Hatayi Yazdirmak Icin
        // meta Uzerinden error Ozelligini Kullaniyoruz
        className={meta.error ? 'input-error' : ''}
      />

        {/* Input Alanina Veri Girisi Yapilirken Hata Olursa */}
        {/* Olusan Hatayi Kullanciya Gosteriyoruz */}
      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomSelect;