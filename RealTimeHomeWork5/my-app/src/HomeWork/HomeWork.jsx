import React from 'react'
import { object, string, number, date, InferType } from 'yup';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';

const addProductSchema = object().shape({
    Name: string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Boş geçilemez'),
    UnitPrice: number().required('Not to be empty').positive().integer(),
    Stock: number().required('Not to be empty').positive().integer(),
    QuantityPerUnit: number().required('Not to be empty').positive().integer(),
  });

function HomeWork() {
    const formik = useFormik({
        initialValues: {
          Name: '',
          UnitPrice: '',
          Stock: '',
          QuantityPerUnit: '',
    
        },
        validationSchema: addProductSchema,
        onSubmit: values => {
          addProduct(values)
        },
      });
    
      const addProduct = (data) => {
        axios.post('https://northwind.vercel.app/api/products', data)
          .then(res => {
            console.log(res);
            alert('Success')
          })
      }
    
      return (
        <>
          <form onSubmit={formik.handleSubmit}>
            <Grid container>
              <Grid item xs={12}>
                <div>
                  <label htmlFor="">Name </label>
                  <input
                    name='Name'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.Name}
                  />
                  {
                    formik.errors.Name ? <span style={{ color: 'red' }}>{formik.errors.Name}</span> : <></>
                  }
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>
                <label htmlFor="">Unit Price </label>
                    <input
                        name='UnitPrice'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.UnitPrice} />
                    {
                        formik.errors.UnitPrice ? <span style={{ color: 'red' }}>{formik.errors.UnitPrice}</span> : <></>
    
                    }
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>
                <label htmlFor="">Stock </label>
                    <input
                        name='Stock'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.Stock} />
                    {
                        formik.errors.Stock ? <span style={{ color: 'red' }}>{formik.errors.Stock}</span> : <></>
    
                    }
    
                </div>
              </Grid>
              <Grid item xs={12}>
              <div>
                <label htmlFor="">Quantity Per Unit </label>
                    <input
                        name='QuantityPerUnit'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.QuantityPerUnit} />
                    {
                        formik.errors.QuantityPerUnit ? <span style={{ color: 'red' }}>{formik.errors.QuantityPerUnit}</span> : <></>
    
                    }
    
                </div>
              </Grid>
            </Grid>
            <button type='submit'>Add</button>
          </form>
        </>
      );
}

export default HomeWork