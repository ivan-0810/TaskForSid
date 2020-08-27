import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Field, reduxForm, FormSection } from 'redux-form';


const CategoryImageForm = (props) => {
        const { handleSubmit } = props;

    return (
      <Form >
       < FormGroup>
            <Field 
            name ='slika'
            compo
            />

       </FormGroup>
      </Form>
    );
  }
  
  export default CategoryImageForm;