import React from 'react'
import pic1 from './../../Assets/bg1.jpg'
import pic2  from './../../Assets/bg2.jpg'
import pic3 from './../../Assets/bg3.jpg'
import { CarouselCaption, CarouselItem } from 'react-bootstrap'


const Carousel = () => {
  return (
    <Carousel controls indicators>
  <CarouselItem>
    <img className="d-block w-100" src={pic1} alt="slide 1" />
    <CarouselCaption className="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CarouselCaption>
  </CarouselItem>
  <CarouselItem>
    <img className="d-block w-100" src={pic2} alt="slide 2" />
    <CarouselCaption className="d-none d-md-block">
      <h5>Second slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CarouselCaption>
  </CarouselItem>
  <CarouselItem>
    <img className="d-block w-100" src={pic3} alt="slide 3" />
    <CarouselCaption className="d-none d-md-block">
      <h5>Third slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CarouselCaption>
  </CarouselItem>
</Carousel>
  )
}

export default Carousel
