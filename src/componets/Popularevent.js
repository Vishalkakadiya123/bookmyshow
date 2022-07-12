import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Popularevent() {

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
                <div class='item popular_events'>
                    <a href=""><img src={require('../image/evt4.avif')} /></a>
                    <h6>JO BOLTA HAI WAHI HOTA HAI By Harsh gujral (Guj)</h6>
                    <p>Sanjeev Kumar Auditorium: Surat</p>
                </div>

                <div class='item popular_slider'>
                    <a href=""><img src={require('../image/evt2.avif')} /></a>
                    <h6>The Sing Chana Show - Deep Vaidya & Om Bhatt</h6>
                    <p>Performing Arts Centre: Surat</p>
                </div>

                <div class='item popular_slider'>
                    <a href=""><img src={require('../image/pop3.avif')} /></a>
                    <h6>Improve Your Mental Health</h6>
                    <p>Watch on Zoom</p>
                </div>

                <div class='item popular_slider'>
                    <a href=""><img src={require('../image/pop4.avif')} /></a>
                    <h6>Diabetes Is Curable?</h6>
                    <p>Online Streaming</p>
                </div>

                <div class='item popular_slider'>
                    <a href=""><img src={require('../image/pop5.avif')} /></a>
                    <h6>Monali Thakur Teaches Singing</h6>
                    <p>Online Streaming</p>
                </div>

                <div class='item popular_slider'>
                    <a href=""><img src={require('../image/pop6.avif')} /></a>
                    <h6>Learn Pichwai Painting, Workshop</h6>
                    <p>Watch on Zoom</p>
                </div>

                <div class='item popular_slider'>
                    <a href=""><img src={require('../image/pop7.avif')} /></a>
                    <h6>Android Development: Make Your Own App</h6>
                    <p>Online Streaming</p>
                </div>

                <div class='item popular_slider'>
                    <a href=""><img src={require('../image/pop8.avif')} /></a>
                    <h6>Success Mindset for Business Ideas - From Startup</h6>
                    <p>Watch on Zoom</p>
                </div>

                <div class='item popular_slider'>
                    <a href=""><img src={require('../image/pop9.avif')} /></a>
                    <h6>Design Thinking</h6>
                    <p>Watch on Zoom</p>
                </div>

                <div class='item popular_slider'>
                    <a href=""><img src={require('../image/pop10.avif')} /></a>
                    <h6>Prasad from Somnath Ji</h6>
                    <p>Online</p>
                </div>

            </OwlCarousel>
        </>

    )
}

export default Popularevent