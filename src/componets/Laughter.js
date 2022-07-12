import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Laughter() {

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

                <div class='item laughter_slider'>
                    <a href=""><img src={require('../image/evt4.avif')} /></a>
                    <h6>JO BOLTA HAI WAHI HOTA HAI By Harsh gujral (Guj)</h6>
                    <p>Sanjeev Kumar Auditorium: Surat</p>
                </div>

                <div class='item laughter_slider'>
                    <a href=""><img src={require('../image/evt2.avif')} /></a>
                    <h6>The Sing Chana Show - Deep Vaidya & Om Bhatt</h6>
                    <p>Performing Arts Centre: Surat</p>
                </div>

                <div class='item laughter_slider'>
                    <a href=""><img src={require('../image/lau3.avif')} /></a>
                    <h6>Aakash Mehta - Naya Show (Stand Up Comedy)</h6>
                    <p>Ghalib and Company: Surat</p>
                </div>

                <div class='item laughter_slider'>
                    <a href=""><img src={require('../image/evt3.avif')} /></a>
                    <h6>Mai Samay Hoon - Gujarat</h6>
                    <p>Performing Arts Centre: Surat</p>
                </div>

                <div class='item laughter_slider'>
                    <a href=""><img src={require('../image/lau5.avif')} /></a>
                    <h6>You deserve better</h6>
                    <p>Hub The Club: Surat</p>
                </div>

                <div class='item laughter_slider'>
                    <a href=""><img src={require('../image/lau6.avif')} /></a>
                    <h6>Hindi Medium- Standup Comedy by Rakesh Addlakha</h6>
                    <p>Ghalib and Company: Surat</p>
                </div>

                <div class='item laughter_slider'>
                    <a href=""><img src={require('../image/lau7.avif')} /></a>
                    <h6>Ab Hai Apki Bari - Standup Comedy by Inder Sahani</h6>
                    <p>Ghalib and Company: Surat</p>
                </div>

                <div class='item laughter_slider'>
                    <a href=""><img src={require('../image/evt3.avif')} /></a>
                    <h6>Mai Samay Hoon - Gujarat</h6>
                    <p>Performing Arts Centre: Surat</p>
                </div>
               
                <div class='item laughter_slider'>
                    <a href=""><img src={require('../image/lau9.avif')} /></a>
                    <h6>Tough Hai-Standup Comedy by Amit Tiwari</h6>
                    <p>Ghalib and Company: Surat</p>
                </div>

                <div class='item laughter_slider'>
                    <a href=""><img src={require('../image/evt7.avif')} /></a>
                    <h6>Oh No! by Urooj Ashfaq : Gujarat</h6>
                    <p>Ghalib and Company: Surat</p>
                </div>

            </OwlCarousel>
        </>
    )
}

export default Laughter