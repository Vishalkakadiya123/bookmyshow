import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Events(params) {
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
                <div class='item events_slider'>
                    <a href=""><img src={require('../image/evt1.avif')} /></a>
                    <h6>Vipul Goyal Live :Surat</h6>
                    <p>Performing Arts Centre: Surat</p>
                    <p>3.6 kms away</p>
                </div>

                <div class='item events_slider'>
                    <a href=""><img src={require('../image/evt2.avif')} /></a>
                    <h6>The Sing Chana Show - Deep Vaidya & Om Bhatt</h6>
                    <p>Performing Arts Centre: Surat</p>
                    <p>3.6 kms away</p>
                </div>

                <div class='item events_slider'>
                    <a href=""><img src={require('../image/evt2.avif')} /></a>
                    <h6>The Sing Chana Show - Deep Vaidya & Om Bhatt</h6>
                    <p>Performing Arts Centre: Surat</p>
                    <p>3.6 kms away</p>
                </div>

                <div class='item events_slider'>
                    <a href=""><img src={require('../image/evt1.avif')} /></a>
                    <h6>Vipul Goyal Live :Surat</h6>
                    <p>Performing Arts Centre: Surat</p>
                    <p>3.6 kms away</p>
                </div>
                
                <div class='item events_slider'>
                    <a href=""><img src={require('../image/evt3.avif')} /></a>
                    <h6>Mai Samay Hoon - Gujarat</h6>
                    <p>Performing Arts Centre: Surat</p>
                    <p>3.6 kms away</p>
                </div>

                <div class='item events_slider'>
                    <a href=""><img src={require('../image/evt3.avif')} /></a>
                    <h6>Mai Samay Hoon - Gujarat</h6>
                    <p>Performing Arts Centre: Surat</p>
                    <p>3.6 kms away</p>
                </div>

                <div class='item events_slider'>
                    <a href=""><img src={require('../image/evt4.avif')} /></a>
                    <h6>JO BOLTA HAI WAHI HOTA HAI By Harsh gujral (Guj)</h6>
                    <p>Sanjeev Kumar Auditorium: Surat</p>
                    <p>3.8 kms away</p>
                </div>

                <div class='item events_slider'>
                    <a href=""><img src={require('../image/evt5.avif')} /></a>
                    <h6>Oriole Entertainment Live</h6>
                    <p>Sanjeev Kumar Auditorium: Surat</p>
                    <p>3.8 kms away</p>
                </div>

                <div class='item events_slider'>
                    <a href=""><img src={require('../image/evt6.avif')} /></a>
                    <h6>Excuse Me Brother! by Aakash Gupta</h6>
                    <p>Sanjeev Kumar Auditorium: Surat</p>
                    <p>3.8 kms away</p>
                </div>

                <div class='item events_slider'>
                    <a href=""><img src={require('../image/evt7.avif')} /></a>
                    <h6>Oh No! by Urooj Ashfaq : Gujarat</h6>
                    <p>Ghalib and Company: Surat</p>
                    <p>5.4 kms away</p>
                </div>

            </OwlCarousel>
        </>
    )
}

export default Events