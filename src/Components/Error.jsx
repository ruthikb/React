import { useRouteError } from "react-router-dom"

export  var Error=()=>{
    const error = useRouteError();
    console.log(error);
    return(
        <div>   
            <h1>Oops! </h1>
            <h2>Sorry, an unexpected error has occurred.</h2>
            <h3>{error.status + " : " + error.statusText}</h3>
        </div>
    );
}