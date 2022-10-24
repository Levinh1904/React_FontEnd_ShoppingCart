import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <MDBInput wrapperClass='mb-4' label='Địa chỉ Email' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Mật khẩu' id='formControlLg' type='password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Nhớ mật khẩu' />
            <a href="!#">Quên mật khẩu</a>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg">Đăng Nhập</MDBBtn>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: 'black'}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
                <Link className="signup" to="/signup"> Đăng Ký Tài Khoản</Link>
          </MDBBtn>



        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;