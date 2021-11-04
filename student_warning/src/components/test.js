import {React, useEffect} from "react";

const Test = () => {

    const fetchData = () => {
        return fetch("http://127.0.0.1:4000/students")
              .then((response) => response.json())
              .then((data) => console.log(data));
            }
    
              useEffect(() => {
                fetchData();
                }, []);

    return (<></>);
}
 
export default Test;