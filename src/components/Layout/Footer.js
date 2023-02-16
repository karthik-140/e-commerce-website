import classes from './Footer.module.css';
import youtube from '../../assets/youtube.png';
import spotify from '../../assets/spotify.png';
import facebook from '../../assets/facebook.png';


const Footer = () => {
    return (
        <section className={classes.footer}>
            <div className={classes.text}>The Generics</div>
            <ul className={classes['footer-image']}>
                <div className={classes['footer-image-list']}>
                <li>
                    <img src={youtube} alt='youtube' />
                </li>
                <li>
                    <img src={spotify} alt='spotify' />
                </li>
                <li>
                    <img src={facebook} alt='facebook' />
                </li>
                </div>
                
            </ul>
        </section>
    )
}

export default Footer;