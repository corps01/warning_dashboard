import React from 'react';
import {
    Button,
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Row,
    Col
  } from 'reactstrap';

const Dashboard = () => {
    return (
    <div>
        <Navbar color="white" style={{padding: '.5rem', display:'flex', width:'100%', boxShadow: '-2px 1px 11px 0px rgba(0,0,0,0.1)'}}>
        <NavbarBrand href="/" style={{color: '#727CF5', fontSize:'1.4rem', fontWeight:'bold'}}>WARNING.IO</NavbarBrand>
          <Nav>
            <div style={{paddingRight:'1rem', display:'flex'}}>
                <UncontrolledDropdown style={{ paddingRight:'1rem'}}>
                <DropdownToggle >
                    Options
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                    Option 1
                    </DropdownItem>
                    <DropdownItem>
                    Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    Reset
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
                <div style={{ height: '1rem', lineHeight: '2.1rem'}}>
                    <p>Don Ramon</p>
                </div>
            </div>
          </Nav>
      </Navbar>
        <Container>
            <Row style={{marginTop:'1rem'}}>
                <Col style={{backgroundColor: 'red', paddingTop:"26rem", boxShadow: '-2px 1px 11px 0px rgba(0,0,0,0.1)'}} xs="9">.col-3</Col>
                <Col xs="2" style={{paddingTop: '1rem', backgroundColor:'white', borderRadius: '10px', marginLeft:'1rem', boxShadow: '-2px 1px 11px 0px rgba(0,0,0,0.1)'}}>
                    <h5 style={{color:'#727CF5', marginBottom:'1rem'}}>Estudiandtes</h5>
                    <div style={{textAlign:'left', paddingLeft:'.6rem'}}>
                    <p style={{fontSize:'.8rem'}}>NOMBRE</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="9" style={{backgroundColor: 'white', borderRadius: '10px',marginTop:'1rem', boxShadow: '-2px 1px 11px 0px rgba(0,0,0,0.1)'}}>
                    <p style={{marginTop: '.8rem'}}><b>Reporte nivel de riesgo: KIKO ALACARAZ</b></p>
                <Container style={{display:'flex', justifyContent: 'space-around'}}>
                    <div className ="califContainer">
                        <p className = "califTitle"style ={{marginBottom: '.2rem'}}>Faltas</p>
                        <p style = {{lineHeight: '4.5rem', backgroundColor:'#727CF5', color:'white', width:'6.5rem', borderRadius: '10%'}}>10.0</p>
                    </div>
                </Container>
                </Col>
                <Col xs="2">
                    <Button style={{backgroundColor: '#727CF5', borderColor: '#727CF5', marginTop:'5.5rem'}} className = "loginControl" >EXPORTAR</Button>
                </Col>
            </Row>
        </Container>

    </div>);
}
 
export default Dashboard;