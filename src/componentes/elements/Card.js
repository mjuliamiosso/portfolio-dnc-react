import style from './Card.module.css'
import ButtonB from '../elements/ButtonB'

function Card({img, title, tech, description, repo, site}){
    return(
        <div className={style.card} id='Projects'>
            <a href={site}>
                <img src={img} alt='Erro'/>
            </a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia: </strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositório' link={repo}></ButtonB>
            </section>
            
        </div>

    )
}

export default Card