import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Entertainment() {

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
                <div class='item'>
                    <a href=""><img src={require('../image/en1.avif')} /></a>
                </div>

                <div class='item'>
                    <a href=""><img src={require('../image/en2.avif')} /></a>
                </div>

                <div class='item'>
                    <a href=""><img src={require('../image/en3.avif')} /></a>
                </div>

                <div class='item'>
                    <a href=""><img src={require('../image/en4.avif')} /></a>
                </div>

                <div class='item'>
                    <a href=""><img src={require('../image/en5.avif')} /></a>                   
                </div>

                <div class='item'>
                    <a href=""><img src={require('../image/en6.avif')} /></a>
                </div>

                <div class='item'>
                    <a href=""><img src={require('../image/en7.avif')} /></a>
                </div>

                <div class='item'>
                    <a href=""><img src={require('../image/en8.avif')} /></a>
                </div>

                <div class='item'>
                    <a href=""><img src={require('../image/en9.avif')} /></a>
                </div>

                <div class='item'>
                    <a href=""><img src={require('../image/en10.avif')} /></a>
                </div>

                <div class='item'>
                    <a href=""><img src={require('../image/en11.avif')} /></a>
                </div>

                <div class='item'>
                    <a href=""><img src={require('../image/en12.avif')} /></a>
                </div>

            </OwlCarousel>
        </>
    )

}

export default Entertainment