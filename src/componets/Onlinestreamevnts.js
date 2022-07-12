import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Onlinestreamevnts() {

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
                <div class='item online_streaming'>
                    <a href=""><img src={require('../image/onstr1.avif')} /></a>
                    <h6>Digital Marketing & Communication</h6>
                    <p>Online Streaming</p>
                </div>

                <div class='item online_streaming'>
                    <a href=""><img src={require('../image/onstr2.avif')} /></a>
                    <h6>Data Science</h6>
                    <p>Online Streaming</p>
                </div>

                <div class='item online_streaming'>
                    <a href=""><img src={require('../image/onstr3.avif')} /></a>
                    <h6>Learn Interior Design Fundamentals & Styles</h6>
                    <p>Watch on Zoom</p>
                </div>

                <div class='item online_streaming'>
                    <a href=""><img src={require('../image/onstr4.avif')} /></a>
                    <h6> Learn Korean Skincare Routine Workshop</h6>
                    <p>Watch on Zoom</p>
                </div>

                <div class='item online_streaming'>
                    <a href=""><img src={require('../image/onstr5.avif')} /></a>
                    <h6> Learn Powerful Vastu Shastra Principles</h6>
                    <p>Watch on Zoom</p>                   
                </div>

                <div class='item online_streaming'>
                    <a href=""><img src={require('../image/onstr6.avif')} /></a>
                    <h6>Assorted Baklava & Kunafa </h6>
                    <p>Watch on Zoom</p>
                </div>

                <div class='item online_streaming'>
                    <a href=""><img src={require('../image/onstr7.avif')} /></a>
                    <h6>Art and Craft Online Workshop</h6>
                    <p>Watch on Zoom</p>
                </div>

                <div class='item online_streaming'>
                    <a href=""><img src={require('../image/onstr8.avif')} /></a>
                    <h6>Smartphone Photography - Unleash the Pro Mode</h6>
                    <p>Watch on Zoom</p>
                </div>

                <div class='item online_streaming'>
                    <a href=""><img src={require('../image/onstr9.avif')} /></a>
                    <h6>Back Pain Relief Program</h6>
                    <p>Online Streaming</p>
                </div>

                <div class='item online_streaming'>
                    <a href=""><img src={require('../image/onstr10.avif')} /></a>
                    <h6>Fitness Mindset to Lose 3 Kgs in 30 Days</h6>
                    <p>Watch on Zoom</p>
                </div>
            </OwlCarousel>
        </>
    )
}

export default Onlinestreamevnts