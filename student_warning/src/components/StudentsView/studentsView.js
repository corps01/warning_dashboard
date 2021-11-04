import React from 'react';
import studentData from '../../StudentData/studentMockData'
import { Container, Table } from 'reactstrap';

const StudentsView = () => {

    const warinigColor = (prob) =>{
        if(prob > 50)return {backgroundColor: '#d8432e', color: 'white' }
        if(prob >= 20)return {backgroundColor: '#ffb300', color: 'black'}
        if(prob < 20)return {backgroundColor: '#009755', color: 'white'}
    }

    return (
    <Container style = {{marginTop: "2rem", display: 'flex', paddingLeft: '5rem', paddingRight: '5rem'}}>
<Table bordered hover style = {{backgroundColor: "white"}}>
            <thead style={{color: '#727CF5', fontWeight:'bold'}}>
                <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Grupo</th>
                <th>Porcentaje de riesgo</th>
                </tr>
            </thead>
                <tbody>
                        {studentData.map((student, id) =>{
                            return(
                                <tr key = {student.id} style ={{ lineHeight: '3rem'}}> 
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.group}</td>
                                    <td><div style ={warinigColor(student.probdes)}>{student.probdes}</div></td>
                                </tr>  
                            );
                        })}
                    
                </tbody>
        </Table>
    </Container> );
}
 
export default StudentsView;