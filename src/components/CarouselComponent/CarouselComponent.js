import { Carousel } from "antd";
import banner1 from "../../assets/images/banner-1.jpg";
import banner2 from "../../assets/images/banner-2.jpg";
import banner3 from "../../assets/images/banner-3.jpg";
import banner4 from "../../assets/images/banner-4.jpg";


const CarouselComponent = () => {

    const contentStyle = {
        height: '180px',
        width: "100%",
        objectFit: "cover",
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <>
             <Carousel autoplay style={{ padding: "0 120px"}}>
                <div>
                    <img src={banner1} style={contentStyle} alt="banner" />
                </div>
                <div>
                    <img src={banner2} style={contentStyle} alt="banner" />
                </div>
                <div>
                    <img src={banner3} style={contentStyle} alt="banner" />
                </div>
                <div>
                    <img src={banner4} style={contentStyle} alt="banner" />
                </div>
            </Carousel>
        </>
    )
}

export default CarouselComponent;