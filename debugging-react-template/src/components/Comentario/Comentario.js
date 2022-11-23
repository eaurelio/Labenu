import React from 'react'
import { Coment } from './styled'

export function Comentario(props) {
    console.log(props)
    return (
        <Coment>
            <input placeholder="Adicionar comentario" />
            <button onClick={props.adicionaComentario}>Comentar Post</button>
            <p>{props.post && props.post.comentario}</p>
        </Coment>
    )
}
