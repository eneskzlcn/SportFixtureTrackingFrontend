import React from "react";

function PageHeader(props){
    
        return(
            <div className="d-flex justify-content-center align-items-center h-100">
                <h2 className="mt-3 mb-3">{props.message}</h2>
            </div>
        );
}

export default PageHeader;