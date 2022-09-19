function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.picsuggest} />
                <div class="texto">
                    <div class="nome">{props.namesuggest}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Sugestoes() {
    const suggestionlist = [
        { picsuggest: "img/bad.vibes.memes.svg", namesuggest: "bad.vibes.memes" },
        { picsuggest: "img/chibirdart.svg", namesuggest: "chibirdart" },
        { picsuggest: "img/razoesparaacreditar.svg", namesuggest: "razoesparaacreditar" },
        { picsuggest: "img/adorable_animals.svg", namesuggest: "adorable_animals" },
        { picsuggest: "img/smallcutecats.svg", namesuggest: "smallcutecats" }
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestionlist.map((s) => <Sugestao picsuggest={s.picsuggest} namesuggest={s.namesuggest} />)}

        </div>
    )
}