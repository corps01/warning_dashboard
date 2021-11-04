import {
    Button,
    Container,
    Col
  } from 'reactstrap';

const DashStats = () => {
    return ( 
        <>
        <Col xs="9" style={{backgroundColor: 'white', borderRadius: '10px',marginTop:'1rem', boxShadow: '-2px 1px 11px 0px rgba(0,0,0,0.1)'}}>
        <div>
            <p style={{marginTop: '.8rem'}}><b>Reporte nivel de riesgo: KIKO ALACARAZ</b></p>
                <Container style={{display:'flex', justifyContent: 'space-around'}}>
                    <div className ="califContainer">
                        <p className = "califTitle"style ={{marginBottom: '.2rem'}}>Faltas</p>
                        <p style = {{lineHeight: '4.5rem', backgroundColor:'#727CF5', color:'white', width:'6.5rem', borderRadius: '10%'}}>10.0</p>
                    </div>
                </Container>
        </div>
        </Col>
        <Col xs="2">
            <Button style={{backgroundColor: '#727CF5', borderColor: '#727CF5', marginTop:'5.5rem'}} className = "loginControl" >EXPORTAR</Button>
        </Col>
        </>
     );
}
 
export default DashStats;