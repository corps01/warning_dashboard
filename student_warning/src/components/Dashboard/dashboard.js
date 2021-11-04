import React from 'react';
import StudentSidebar from './studentSidebar'
import DashNavbar from './dashNavbar';
import DashStats from './dashStats';
import {
    Container,
    Row,
    Col
  } from 'reactstrap';

const Dashboard = () => {
    return (
    <div>
        <DashNavbar/>
        <Container>
            <Row style={{marginTop:'1rem'}}>
                <Col style={{backgroundColor: 'red', paddingTop:"26rem", boxShadow: '-2px 1px 11px 0px rgba(0,0,0,0.1)'}} xs="9">.col-3</Col>
                <Col xs="2" style={{paddingTop: '1rem', backgroundColor:'white', borderRadius: '10px', marginLeft:'1rem', boxShadow: '-2px 1px 11px 0px rgba(0,0,0,0.1)'}}>
                    <StudentSidebar></StudentSidebar>
                </Col>
            </Row>
            <Row>
               <DashStats></DashStats>
            </Row>
        </Container>

    </div>);
}
 
export default Dashboard;