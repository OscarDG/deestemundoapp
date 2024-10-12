import '../css/footer.css'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import spotify from '../images/spotify.svg'

function Footer(){
    const socials = [
        { name: 'Facebook', link: 'https://www.facebook.com/deestemundo.podcast/', image: facebook},
        { name: 'Instagram', link: 'https://www.instagram.com/deestemundo_podcast/', image: instagram},
        { name: 'Spotify', link: 'https://open.spotify.com/show/2Pe7dLC2oVTbBdrAcuedno?si=be8595fe690f4747', image: spotify}
    ];
    const socialLinks = socials.map(social => {
        return (
            <a href={social.link} target='_blank'><img src={social.image} alt='Facebook'/></a>
        )
    })
    return(
        <>
            <div className="main-footer--contact">
                <p>Bogotá D.C.</p>
                <p>Colombia</p>
            </div>
            <div className="main-footer--social">
                {socialLinks}
            </div>
        </>
    )
}

export default Footer;