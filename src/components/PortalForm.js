import React from 'react';

// Formik Library Icindeki Form Ve Formik Paketlerini Kullaniyoruz
import { Form, Formik } from 'formik';
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';
import { Link } from 'react-router-dom';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik

        // Form Uzerindeki Alanlari Belirtiyoruz
        // Onay Kutusunun Default Degerini false Yapiyoruz
        initialValues={{ username: '', university: '', isAccepted: false }}
        onSubmit={onSubmit}

        // Schema Kullanarak Validasyon Kurallarini Kontrol Ediyoruz
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Kullanici Adi"
              name="username"
              type="text"
              placeholder="Kullanici Adinizi Giriniz"
            />
            <CustomSelect
              label="Okulunuz"
              name="university"
              placeholder="Kullanici Universitenizi Seciniz"
            >
              <option value="">Lutfen Universitenizi Seciniz</option>
              <option value="bogazici">Boğaziçi Universitesi</option>
              <option value="gsu">Galatasaray Universitesi</option>
              <option value="odtu">ODTU</option>
              <option value="itu">İTU</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              Kaydet
            </button>
            <Link className="formLink" to="/">
              Ana Forma Git
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;