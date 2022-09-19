import React from "react"

function Post(props) {
    const [nameIcon, setSave] = React.useState("bookmark-outline")
    const [heartIcon, setLike] = React.useState("heart-outline")
    const [likeNumber, setNumber] = React.useState(101523)
    const [redClass, setClass] = React.useState("")

    function savePost() {
        let status;
        if (nameIcon === "bookmark-outline") {
            status = "bookmark"
        } else {
            status = "bookmark-outline"
        }
        setSave(status)
    }

    function likePost() {
        let status;
        let numberlikes;
        let classRed;
        if (heartIcon === "heart-outline") {
            status = "heart"
            numberlikes = likeNumber + 1
            classRed = "redheart"
        } else {
            status = "heart-outline"
            numberlikes = likeNumber - 1
            classRed = ""
        }
        setLike(status)
        setNumber(numberlikes)
        setClass(classRed)

    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.picuser} />
                    {props.nameuser}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.picpost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon onClick={likePost} name={heartIcon} class={redClass}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={savePost} name={nameIcon}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.picliker} />
                    <div class="texto">
                        Curtido por <strong>{props.nameliker}</strong> e <strong>outras {likeNumber} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    const postlist = [
        { picuser: "img/meowed.svg", nameuser: "meowed", picpost: "img/gato-telefone.svg", picliker: "img/respondeai.svg", nameliker: "respondeai" },
        { picuser: "img/barked.svg", nameuser: "barked", picpost: "img/dog.svg", picliker: "img/adorable_animals.svg", nameliker: "adorable_animals" }
    ]
    return (
        <div class="posts">
            {postlist.map((p) => <Post picuser={p.picuser} nameuser={p.nameuser} picpost={p.picpost} picliker={p.picliker} nameliker={p.nameliker} />)}

        </div>
    )
}