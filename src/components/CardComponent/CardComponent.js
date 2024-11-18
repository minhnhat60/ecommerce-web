import { Card } from "antd";
import { FaRegStar } from "react-icons/fa";
import { StyleNameProduct, WrapperDiscountText, WrapperPriceText, WrapperReportText } from "./style";
// const { Meta } = Card;

const CardComponent = () => {
    return (
        <>
            <div style={{ padding: "0 120px", marginTop: "40px"}}>
                <Card
                    hoverable
                    headStyle={{ width: "200px", height: "200px" }}
                    style={{
                    width: 240,
                    }}
                    bodyStyle={{ padding: "10px"}}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
                    <StyleNameProduct>Iphone</StyleNameProduct>
                    <WrapperReportText>
                        <span>4.96</span><FaRegStar />
                        <span> | Đã bán 1000</span>
                    </WrapperReportText>
                    <WrapperPriceText>121đ <WrapperDiscountText>-5%</WrapperDiscountText></WrapperPriceText>
                </Card>
            </div>
        </>
    )
}

export default CardComponent;