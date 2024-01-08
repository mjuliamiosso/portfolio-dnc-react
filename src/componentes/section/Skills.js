import style from './Skills.module.css'
import javascript from '../../image/js.svg'
import html from '../../image/html.svg'
import css from '../../image/css.svg'
import react from '../../image/react.svg'
import typescript from '../../image/typescript.svg'

function Skills(){
    return(
        <div className={style.skill} id='Skills'>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}></img>
                <img src={html}></img>
                <img src={css}></img>
                <img src={react}></img>
                <img src={typescript}></img>
            </div>
        </div>
    )
}

export default Skills