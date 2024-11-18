import CardComponent from "../../components/CardComponent/CardComponent";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import TypeProduct from "../../components/TypeProducts/TypeProduct";
import { WrapperTypeProduct } from "./style";

const HomePage = () => {
    const list = [
        "TV",
        "Tủ lạnh",
        "Laptop",
        "Máy giặt",
        "Đồ gia dụng",
        "Bàn ủi",
        "Bàn làm việc",
        "Nệm"
    ];
    return (
        <>
            {/* header nav */}
                <div className="header__nav">
                    <div style={{ padding: "0 120px" }}>
                        {list && (
                            <WrapperTypeProduct>
                                {list.map(item => (
                                    <TypeProduct item={item} key={item} />
                                ))}
                            </WrapperTypeProduct>
                        )}
                    </div>
                </div>
            {/* end header nav */}

            {/* section 1 Home */}
                <CarouselComponent />
            {/* end section 1 Home */}

            {/* section 2 Home */}
                <CardComponent />
            {/* end section 2 Home */}
        </>
    )
}

export default HomePage;