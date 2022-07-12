import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Mainslider() {
  return (
    <>
      <OwlCarousel className='owl-theme' 
      loop 
      margin={10} 
      items={1}
      autoplay={true}
      autoplayTimeout={2000}
      autoplayHoverPause={true}
      >
        <div class='item1'>
          <a href="#"><img src={require('../image/bg1.avif')} /></a>
        </div>
        <div class='item1'>
        <a href="#"><img src={require('../image/bg2.avif')} /></a>
        </div>
        <div class='item1'>
        <a href="#"><img src={require('../image/bg3.avif')} /></a>
        </div>
        <div class='item1'>
        <a href="#"><img src={require('../image/bg4.avif')} /></a>
        </div>
        <div class='item1'>
        <a href="#"><img src={require('../image/bg5.avif')} /></a>
        </div>
      </OwlCarousel>
    </>
  )
}

export default Mainslider