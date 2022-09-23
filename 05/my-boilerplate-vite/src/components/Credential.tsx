import React from "react";

// Uma vez que você define o tipo 
// as propriedades obrigam 
interface User {
    firstname: string,
    lastname: string
}

function Credential({ firstname, lastname }: User): JSX.Element {

    return (
        <>{firstname} {lastname}</>
    )
}

export default Credential;