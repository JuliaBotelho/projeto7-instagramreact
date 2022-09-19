import React from "react"

function User(props) {
    const [subusername, setName] = React.useState("Catana")
    const [userpic, setPic] = React.useState("img/catanacomics.svg")

    function setProfilename(){
        setName(prompt("Olá! Por favor insira seu nome de usuário:")) 
    }

    function setProfilePic(){
        setPic(prompt("Olá! Para alterar sua foto de perfil por favor insira um link válido de imagem:")) 
    }

    return (
        <div class="usuario">
            <img onClick = {setProfilePic} src={userpic} />
            <div class="texto">
                <strong>{props.username}</strong>
                <span>
                    {subusername}
                    <ion-icon onClick = {setProfilename} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}


export default function Usuario() {
    return (
        <User userpic username="catanacomics" subusername/>
    )
}