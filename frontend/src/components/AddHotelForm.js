import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import './AddHotelForm.css';
const HotelSchema = Yup.object().shape({
  name: Yup.string().required('Otel adı gereklidir'),
  location: Yup.string().required('Lokasyon gereklidir'),
  roomCount: Yup.number().required('Oda sayısı gereklidir').positive().integer(),
});

const AddHotelForm = () => {
  return (
    <Formik
      initialValues={{ name: '', location: '', roomCount: '' }}
      validationSchema={HotelSchema}
      onSubmit={(values, { setSubmitting }) => {
        axios.post('/api/hotels', values)
          .then(response => {
            alert('Otel başarıyla eklendi');
            setSubmitting(false);
          })
          .catch(error => {
            alert('Otel eklenirken hata oluştu');
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field
              name="name"
              type="text"
              as={TextField}
              label="Otel Adı"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            <Field
              name="location"
              type="text"
              as={TextField}
              label="Lokasyon"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            <Field
              name="roomCount"
              type="number"
              as={TextField}
              label="Oda Sayısı"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            Otel Ekle
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddHotelForm;
