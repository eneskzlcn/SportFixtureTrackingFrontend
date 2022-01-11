import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";



function AlertOnTop(props){
    const alert = useSelector((state) => state.alert)
    
    return(
    <>
    {
        (alert.show) ? (<Alert variant={alert.alertType}> {alert.message}</Alert>)  :   (<></>)
     
    }

        
    </>)
}


export default AlertOnTop;