import React from 'react';
import './login.css'
import { Container, Row, Col, FormGroup, Input, Button } from 'reactstrap';

const LoginPage = () => {    
return (
    <Container>
        <div className = "loginContainer">
            <Row>
                <Col style={{padding: '0%'}}>
                    <div className="loginForm">
                        <FormGroup>
                            <h1 className ="titleText">Bienvenido</h1>
                            <p>Ingrese sus datos de acceso para iniciar</p>
                            <Input style={{backgroundColor: '#E8F0FE', borderColor: '#E8F0FE'}} className = "loginControl" type="email" placeholder ="email"></Input >
                            <Input style={{backgroundColor: '#E8F0FE', borderColor: '#E8F0FE'}} className = "loginControl" type="password" placeholder ="contraseña"></Input >
                            <Button style={{backgroundColor: '#727CF5', borderColor: '#727CF5', minWidth:'100%', marginTop:'1rem'}} className = "loginControl" >INGRESAR</Button>
                        </FormGroup>
                    </div>
                </Col>
                <Col style={{padding: '0%'}}>
                    <div className="registrarForm">
                        <FormGroup>
                            <h1 className ="titleText">Registrar</h1>
                            <p>Si aun no cuentas con una cuenta por favor registrate</p>
                            <Button style={{backgroundColor: '#727CF5', borderColor: 'white', minWidth:'100%', marginTop:'1rem'}} className = "loginControl" >REGISTRAR</Button>
                        </FormGroup>
                    </div>
                </Col>
            </Row>
        </div>
    </Container> );
}
export default LoginPage;