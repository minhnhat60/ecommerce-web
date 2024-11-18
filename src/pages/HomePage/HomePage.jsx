import TypeProduct from "../../components/TypeProducts/TypeProduct";
import { WrapperTypeProduct } from "./style";

const HomePage = () => {
    const list = [
        "TV",
        "Tủ lạnh",
        "Laptop"
    ];
    return (
        <>
            <div style={{ padding: "0 120px" }}>
                {list && (
                    <WrapperTypeProduct>
                        {list.map(item => (
                            <TypeProduct item={item} key={item} />
                        ))}
                    </WrapperTypeProduct>
                )}
            </div>
        </>
    )
}

export default HomePage;