
import { Carousel } from "react-bootstrap";
import baseball from "../static/baseball.jfif";
import baseball1 from "../static/baseball1.jfif"
import basketball from "../static/basketball.jpg"
import run from "../static/run.jfif"

function WelcomeCarousel(){
    
    return(
        <Carousel className="mt-5 mb-5 h-50 w-50 m-auto">
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={baseball}
                alt="First slide"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={baseball1}
                alt="Second slide"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={basketball}
                alt="Third slide"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={run}
                alt="Fourth slide"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default WelcomeCarousel;