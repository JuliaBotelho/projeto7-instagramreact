function Story(props) {

    return (
        <div class="story">
            <div class="imagem">
                <img src={props.picture} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    )
}


export default function Stories() {
    const profilelist = [
        { picture: "img/9gag.svg", user: "9gag" },
        { picture: "img/meowed.svg", user: "meowed" },
        { picture: "img/barked.svg", user: "barked" },
        { picture: "img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet" },
        { picture: "img/wawawicomics.svg", user: "wawawicomics" },
        { picture: "img/respondeai.svg", user: "respondeai" },
        { picture: "img/filomoderna.svg", user: "filomoderna" },
        { picture: "img/memeriagourmet.svg", user: "memeriagourmet" }
    ]
    return (
        <div class="stories">

            {profilelist.map((p) => <Story picture={p.picture} user={p.user} />)}


            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}