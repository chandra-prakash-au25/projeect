import {React,useState} from 'react';
import { useFormik } from 'formik';
import bck from '../assets/images/lts_button.png'
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import { useNavigate } from "react-router-dom";
export const Signup = () => {
  let navigate = useNavigate();
  const sentEmail = (v) => {


    emailjs.sendForm("service_mpxx7wj", "template_1droqhj", '#myForm', "oU5BCGUOaSwLYzzAE")
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        navigate('/');

      }, function (error) {
        console.log('FAILED...', error);
      });
  
  }
  const formik = useFormik({
    initialValues: {
      Name: '',
      Phone: '',
      Email: '',
      Company: '',
      Message: ''
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .required('Name is required'),
      Phone: Yup.string()
        .min(10)
        .max(10)
        .required('Phone is required'),
      Email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      Company: Yup.string()
        .required('Company is required'),
      Message: Yup.string()

        .required('Message is required'),
    }),


    onSubmit: function (values) {
      sentEmail()
      

    }


  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit} id="myForm">
        <div className='wraper'>
          <input type="text" name="Name" 
            className={`inp-class ${(formik.touched.Name && formik.errors.Name) && ' border-danger'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Name} />
          <label id={`${formik.touched.Name && 'hot'}`} className={`sp ${(formik.touched.Name && formik.errors.Name) && 'text-danger'}`}>Name</label>

          {formik.touched.Name && formik.errors.Name && (
            <span className='error-mess'>{formik.errors.Name}</span>
          )}

        </div>
        <div className='wraper'>
          <input type="Email" name="Email" 
            className={` inp-class ${(formik.touched.Email && formik.errors.Email) && ' border-danger'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Email} />
          <label  id={`${formik.touched.Email && 'hot'}`} className={`sp ${(formik.touched.Email && formik.errors.Email) && 'text-danger'}`}>Email</label>

          {formik.touched.Email && formik.errors.Email && (
            <span className='error-mess'>{formik.errors.Email}</span>
          )}


        </div>
        <div className='wraper'>
          <input type="text" name="Phone"  
            className={`inp-class ${(formik.touched.Phone && formik.errors.Phone) && ' border-danger'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Phone} />
          <label id={`${formik.touched.Phone && 'hot'}`} className={`sp ${(formik.touched.Phone && formik.errors.Phone) && 'text-danger'}`} >Phone</label>

          {formik.touched.Phone && formik.errors.Phone && (
            <span className='error-mess'>{formik.errors.Phone}</span>
          )}


        </div>
        <div className='wraper'>
          <input type="text" name="Company" 
            className={`inp-class ${(formik.touched.Company && formik.errors.Company) && ' border-danger'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Company} />
          <label  id={`${formik.touched.Company && 'hot'}`} className={`sp ${(formik.touched.Company && formik.errors.Company) && 'text-danger'}`}>Company</label>

          {formik.touched.Company && formik.errors.Company && (
            <span className='error-mess'>{formik.errors.Company}</span>
          )}

        </div>
        <div className='wraper'>
          <textarea type="text" name="Message" 
            className={`inp-class ${(formik.touched.Message && formik.errors.Message) && ' border-danger'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Message} />
          <label  id={`${formik.touched.Message && 'hot'}`}  className={`sp ${(formik.touched.Message && formik.errors.Message) && 'text-danger'}`}>Message</label>

          {formik.touched.Message && formik.errors.Message && (
            <span className='error-mess'>{formik.errors.Message}</span>
          )}

        </div>
        <div>
          <button className="butt" type='submit'><img className='but-img' src={bck} alt='' /> <p className='pth'>Send a Request</p></button>
        </div>
      </form>
    </div>
  )
}


