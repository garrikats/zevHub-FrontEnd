import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Button } from 'react-bootstrap';

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3'>
          <Form.Control
            id='email'
            placeholder='Enter your email'
            type='email'
            value={email}
            onChange={onChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            id='password'
            placeholder='Enter your password'
            type='password'
            value={password}
            onChange={onChange}
          />
        </Form.Group>

        {/* <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                    <Form.Check
                      type='checkbox'
                      id='rememberMe'
                      onChange={handleRememberMe}
                      checked={rememberMe}
                      label='Remember Me'
                    ></Form.Check>
                  </Form.Group> */}
        <div>
          <Button
            type='submit'
            variant='outline-success'
            className='login-form-button'
            style={{ minWidth: '100%' }}
          >
            Login
          </Button>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
