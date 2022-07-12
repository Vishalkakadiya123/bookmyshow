import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Premieres() {

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
                <div class='item premieres_slider'>
                    <a href=""><img src={require('../image/pre1.avif')} /></a>
                    <h6>Infinite Storm</h6>
                    <p>English</p>
                </div>

                <div class='item premieres_slider'>
                    <a href=""><img src={require('../image/pre2.avif')} /></a>
                    <h6>Parallel Mothers</h6>
                    <p>Spanish</p>
                </div>

                <div class='item premieres_slider'>
                    <a href=""><img src={require('../image/pre3.avif')} /></a>
                    <h6>Queenpins</h6>
                    <p>English</p>
                </div>

                <div class='item premieres_slider'>
                    <a href=""><img src={require('../image/pre4.avif')} /></a>
                    <h6>Sonic: The Hedgehog 2</h6>
                    <p>English</p>
                </div>

                <div class='item premieres_slider'>
                    <a href=""><img src={require('../image/pre5.avif')} /></a>
                    <h6>King Tweety</h6>
                    <p>English</p>
                </div>

                <div class='item premieres_slider'>
                    <a href=""><img src={require('../image/pre6.avif')} /></a>
                    <h6>A Friendly Tale</h6>
                    <p>French</p>
                </div>

                <div class='item premieres_slider'>
                    <a href=""><img src={require('../image/pre7.avif')} /></a>
                    <h6>Fatherhood</h6>
                    <p>English</p>
                </div>

                <div class='item premieres_slider'>
                    <a href=""><img src={require('../image/pre8.avif')} /></a>
                    <h6>Teen Titans Go! & DC Super Hero Girls: Mayhem in the Multiuniverse</h6>
                    <p>English</p>
                </div>

                <div class='item premieres_slider'>
                    <a href=""><img src={require('../image/pre9.avif')} /></a>
                    <h6>Spider-Man: No Way Home</h6>
                    <p>English</p>
                </div>

                <div class='item premieres_slider'>
                    <a href=""><img src={require('../image/pre10.avif')} /></a>
                    <h6>RRR (Stream in Hindi)</h6>
                    <p>Hindi</p>
                </div>
            </OwlCarousel>
        </>
    )
}

export default Premieres