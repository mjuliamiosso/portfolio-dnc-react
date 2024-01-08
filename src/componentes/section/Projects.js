import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import style from './Projects.module.css'
import ccpx from '../../image/projects/ccpx-dnc.png'
import port from '../../image/projects/portfolio-dnc.png'

function Projects(){
    return(
        <div className={style.projects} id='Projects'>
            <h1>Projetos</h1>
            <Card img={ccpx} title='CCPX DNC' tech='HTML, CSS e JavaScript' description='Desafio feito pela Escola DNC.' repo='https://github.com/mjuliamiosso/ccpx-dnc' site='https://mjuliamiosso.github.io/ccpx-dnc/'></Card>
            <Card img={port} title='Portfólio DNC' tech='HTML e CSS' description='Portfolio feito acompanhado pela Escola DNC.' repo='https://github.com/mjuliamiosso/estudo-portfolio' site='https://mjuliamiosso.github.io/estudo-portfolio/'></Card>
            <ButtonB text='Ver repositório completo' link='https://github.com/mjuliamiosso'></ButtonB>
        </div>

    )
}

export default Projects