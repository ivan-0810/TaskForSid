import React from 'react';
import { reduxForm, Field} from 'redux-form'
import { Form, FormGroup, Button, Label } from 'reactstrap';
import Form2 from './Form2'


const MultiForms = (props) => {
    const submit1 = value => {
        console.log(value);
    }
    const { handleSubmit } = props;
    return (
      <div className="MultiForms">
          <div className="form2">
              <Form2 />
          </div>
          <div className="form1">
              <Form onSubmit={handleSubmit(submit1)}>
                  <FormGroup>
                      <Label htmlFor="name">Name</Label>
                      <Field 
                        name='name'
                        id='name'
                        type='text'
                        component='input'
                      />
                  </FormGroup>
                  <FormGroup>
                      <Label htmlFor="lastName">last name</Label>
                      <Field 
                        name='lastName'
                        id='lastName'
                        type='text'
                        component='input'
                      />
                  </FormGroup>
                  <Button type='submit'>
                      Submit
                  </Button>
              </Form>
          </div>
      </div>
    );
  }
//   const mapStateToProps = state => {

//   }
//   const mapDispatchToProps = state => {
      
// }
//   const multiForms = connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(MultiForms);
  
  export default reduxForm({
      form: 'demo',
  })(MultiForms);