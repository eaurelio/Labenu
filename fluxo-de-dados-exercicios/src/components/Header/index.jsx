import {TitleHeader} from './styled'

export const Header = (props) => {
    const {nome, img, pageFlow} = props
    return(
        (pageFlow === 2) ?
        <TitleHeader>

            <div>
                <h3>{nome}</h3>
            </div>

            <img src={img} alt="" />

            Insta4
        </TitleHeader>
        :
        <TitleHeader>
            Insta4
        </TitleHeader>
    )
}