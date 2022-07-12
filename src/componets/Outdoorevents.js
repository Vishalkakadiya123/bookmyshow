import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Outdoorevents() {
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
                <div class='item outdoor_events'>
                    <a href=""><img src={require('../image/evt7.avif')} /></a>
                    <h6>Oh No! by Urooj Ashfaq : Gujarat</h6>
                    <p>Ghalib and Company: Surat</p>
                </div>

                <div class='item outdoor_events'>
                    <a href=""><img src={require('../image/evt2.avif')} /></a>
                    <h6>The Sing Chana Show - Deep Vaidya & Om Bhatt</h6>
                    <p>Performing Arts Centre: Surat</p>
                </div>

                <div class='item outdoor_events'>
                    <a href=""><img src={require('../image/out3.avif')} /></a>
                    <h6>Bluffmaster Gujjubhai</h6>
                    <p>Sanjeev Kumar Auditorium: Surat</p>
                </div>

                <div class='item outdoor_events'>
                    <a href=""><img src={require('../image/evt6.avif')} /></a>
                    <h6>Excuse Me Brother! by Aakash Gupta</h6>
                    <p>Sanjeev Kumar Auditorium: Surat</p>
                </div>

                <div class='item outdoor_events'>
                    <a href=""><img src={require('../image/evt1.avif')} /></a>
                    <h6>Vipul Goyal Live :Surat</h6>
                    <p>Performing Arts Centre: Surat</p>
                </div>

                <div class='item outdoor_events'>
                    <a href=""><img src={require('../image/evt4.avif')} /></a>
                    <h6>JO BOLTA HAI WAHI HOTA HAI By Harsh gujral (Guj)</h6>
                    <p>Sanjeev Kumar Auditorium: Surat</p>
                </div>

                <div class='item outdoor_events'>
                    <a href=""><img src={require('../image/out7.avif')} /></a>
                    <h6>Azeem and Angad On The Road Tour</h6>
                    <p>Shott: Surat</p>
                </div>

                <div class='item outdoor_events'>
                    <a href=""><img src={require('../image/out8.avif')} /></a>
                    <h6>Justin Bieber Justice World Tour</h6>
                    <p>Jawaharlal Nehru Stadium: Delhi</p>
                </div>

                <div class='item outdoor_events'>
                    <a href=""><img src={require('../image/out9.avif')} /></a>
                    <h6>Kal Ki Chinta Nahi Karta ft.Ravi Gupta</h6>
                    <p>Ghalib and Company: Surat</p>
                </div>

                <div class='item outdoor_events'>
                    <a href=""><img src={require('../image/out10.avif')} /></a>
                    <h6>The Crowd Work Show By Abhishek Walia</h6>
                    <p>Hub The Club: Surat</p>
                </div>

            </OwlCarousel>
        </>
    )
}
export default Outdoorevents
