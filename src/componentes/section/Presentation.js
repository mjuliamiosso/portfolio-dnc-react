import style from './Presentation.module.css'
import ButtonA from '../elements/ButtonA.js'


function Presentation(){
    return(
        <div className={style.presentation} id='Presentation'>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Maria Júlia!</h1>
            <p>
                Sou programadora e gostaria de apresentar meu <br></br>
                trabalho para você através deste portfólio.</p>
            <ButtonA link='https://github.com/mjuliamiosso' text='Conecte-se comigo!'></ButtonA>
        </div>
    )
}

export default Presentation