import styles from './Footer.module.css'
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa"

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/mjmiosso/'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/maria-julia-miosso/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/mjuliamiosso'><FaGithub size={30}/></a></li>
            </ul>
            <p>mjuliamiosso@gmail.com</p>
            <p>Maria Júlia Miosso © 2024</p>
        </div>

    )
}

export default Footer