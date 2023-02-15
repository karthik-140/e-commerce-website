import classes from './Footer.module.css';
// import youtube from '../../assets/youtube.jpg';
// import spotify from '../../assets/spotify.png';
// import facebook from '../../assets/facebook.png';


const Footer = () =>{
   return (
    <section className={classes.footer}>
        <div className={classes.text}>The Generics</div>
        {/* <ul>
            <li><img src={youtube} alt='youtube' /></li>
            <li><img src={spotify} alt='spotify' /></li>
            <li><img src={facebook} alt='facebook' /></li>
        </ul> */}
    </section>
   )
}

export default Footer;