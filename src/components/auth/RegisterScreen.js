import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { removeError,setError } from '../../redux/actions/ui';
import { startRegisterWithEmailPasswordName } from '../../redux/actions/auth';

const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector( state => state.ui );

  const [ formValues, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',

  });

  const { name,email,password,confirmPassword } = formValues;

  const handleRegister = (e) =>{
    e.preventDefault();
    if( isFormValid() ){
      dispatch( startRegisterWithEmailPasswordName(email, password, name) )
    }

  }
 

  const isFormValid = () => {

    if(name.trim().length === 0){
      dispatch(setError('Name Is Required'))
      return false;
    }else if( !validator.isEmail( email ) ){
      dispatch(setError('Email is not valid'))
      return false;
    }else if( password !== confirmPassword || password.length < 5){
      dispatch(setError('Password should be at least 6 caracters and match each other'))
      return false;
    }
    dispatch(removeError())
    return true;
  }

  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form onSubmit={handleRegister} className="animate__animated animate__fadeIn animate__faster">

          {
              msgError && (
                <div className='auth__alert-error'>
                  { msgError }
                </div>
              )
          }

        <input
          type="text"
          placeholder='Name'
          name='name'
          className='auth__input'
          autoComplete='off'
          onChange={handleInputChange}
          value={name}
        />

        <input
          type="email"
          placeholder='Email'
          name='email'
          className='auth__input'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder='Password'
          name='password'
          className='auth__input'
          value={password}
          onChange={handleInputChange}        
        />

        <input
          type="password"
          placeholder='Confirm password'
          name='confirmPassword'
          className='auth__input'
          value={confirmPassword}
          onChange={handleInputChange}        
        />

        <button 
          className='btn btn-primary btn-block mb-5'
          type='submit'
        >
          Register
        </button>

      
        <Link to='/auth/login' className='link'>
          Already registered?
        </Link>
          
      </form>
    </>
  )
}

export default RegisterScreen