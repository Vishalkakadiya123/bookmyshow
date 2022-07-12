import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Firstslider() {

    return (
        <>
            <OwlCarousel className='owl-theme'
                loop
                margin={10}
                dots={false}
                items={5}
                autoplay={false}
                autoplayTimeout={2000}
                autoplayHoverPause={true}
            >
                <div class='item first_slider'>
                    <a href=""><img src={require('../image/s1.avif')} /></a>
                    <h6>Naadi Dosh</h6>
                    <p>Comady/Romantic</p>
                </div>

                <div class='item first_slider'>
                    <a href=""><img src={require('../image/s2.avif')} /></a>
                    <h6>Thor: Love and Thunder</h6>
                    <p>Action/Adventure/Fantasy</p>
                </div>

                <div class='item first_slider'>
                    <a href=""><img src={require('../image/s3.avif')} /></a>
                    <h6>Nikamma</h6>
                    <p>Action/Drama</p>
                </div>

                <div class='item first_slider'>
                    <a href=""><img src={require('../image/s4.avif')} /></a>
                    <h6>Jurassic World: Dominion</h6>
                    <p>Action/Adventure/Sci-Fi/Thriller</p>
                </div>

                <div class='item first_slider'>
                    <a href=""><img src={require('../image/s5.avif')} /></a>
                    <h6>Vikram: Hitlist</h6>
                    <p>Action/Thriller</p>
                </div>

                <div class='item first_slider'>
                    <a href=""><img src={require('../image/s6.avif')} /></a>
                    <h6>Bhool Bhulaiyaa 2</h6>
                    <p>Comedy/Horror</p>
                </div>

                <div class='item first_slider'>
                    <a href=""><img src={require('../image/s7.avif')} /></a>
                    <h6>Kehvatlal Parivar</h6>
                    <p>Comedy/Family</p>
                </div>

                <div class='item first_slider'>
                    <a href=""><img src={require('../image/s8.avif')} /></a>
                    <h6>Samrat Prithviraj</h6>
                    <p>Action/Drama/Historical</p>
                </div>

                <div class='item first_slider'>
                    <a href=""><img src={require('../image/s9.avif')} /></a>
                    <h6>Lightyear</h6>
                    <p>Action/Adventure/Animation</p>
                </div>

                <div class='item first_slider'>
                    <a href=""><img src={require('../image/s10.avif')} /></a>
                    <h6>MAJOR</h6>
                    <p>Action/Biography/Thriller</p>
                </div>
            </OwlCarousel>
        </>
    )
}
export default Firstslider