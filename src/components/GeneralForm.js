import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import { Link } from 'react-router-dom';

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    actions.resetForm();
};

function GeneralForm() {
    const { values, errors, isSubmitting, handleChange, handleSubmit } = useFormik({
          initialValues: {
              email: '',
              age: '',
              password: '',
              confirmPassword: '',
          },
          validationSchema: basicSchema,
          onSubmit,
      });

    //   console.log(formik);
    return (
        <form onSubmit={handleSubmit}>
            <div className="inputDiv">
                <label>Email</label>
                <input type="email"
                      value={values.email}
                      onChange={handleChange}
                      id="email"
                      placeholder="Mail Adresinizi Giriniz"
                      className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="inputDiv">
                <label>Yas</label>
                <input type="number"
                      value={values.age}
                      onChange={handleChange}
                      id="age"
                      placeholder="Yasinizi Giriniz"
                      className={errors.age ? 'input-error' : ''}
                />
                {errors.age && <p className="error">{errors.age}</p>}
            </div>
            <div className="inputDiv">
                <label>Sifre</label>
                <input type="password"
                      value={values.password}
                      onChange={handleChange}
                      id="password"
                      placeholder="Sifrenizi Giriniz"
                      className={errors.password ? 'input-error' : ''}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="inputDiv">
                <label>Sifre Tekrar</label>
                <input type="password"
                      value={values.confirmPassword}
                      onChange={handleChange}
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