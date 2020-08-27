import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form, FormGroup, Button, Label } from 'reactstrap';
import axios from 'axios';
import imageField from './ImageField';
import ImageField from './ImageField';
import { useState } from 'react';

const object = {
    country_iso2: ['AL'],
    image:''
}

const Form2 = (props) => {
  const [pImage, setpImage] = useState();
  const { handleSubmit } = props;
  const submit2 = (values) => {};
  const handleChange = (e) => {
    // input.onChange(e.target.files[0]);
    const { categoryImageFile } = props;
    const file = e.target.files[0];
    categoryImageFile(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      setpImage(event.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Form onSubmit={handleSubmit(submit2)}>
      <FormGroup>
        <Label htmlFor="name">Name2</Label>
        <Field name="name" id="name" type="text" component="input" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="lastName">last name2</Label>
        <Field name="lastName" id="lastName" type="text" component="input" />
      </FormGroup>
      <FormGroup>
        <ImageField
          component={imageField}
          id="profilePic"
          btnLabel="Browse Profile Photo"
          removeLabel="Remove Photo"
          containerClassName="m-0"
          handleChange={handleChange}
          image={pImage}
        />
      </FormGroup>
      <Button type="submit">Submit2</Button>
    </Form>
  );
};
export default reduxForm({
  form: 'demo2',
})(Form2);
