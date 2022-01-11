import { Stack } from "react-bootstrap";
import { Button } from "react-bootstrap";

function PageCreateNewButton(props){
    return(<>
            <Stack gap={2} className="col-md-5 mx-auto mt-3">
                <Button variant="outline-secondary" onClick={()=>window.location.replace(props.route)}>Create New {props.name}</Button>
            </Stack>
    </>);
}

export default PageCreateNewButton;