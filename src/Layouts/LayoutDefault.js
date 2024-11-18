import { Outlet } from "react-router-dom";
import { Col } from 'antd';
import { WrapperAccountHeader, WrapperHeader, WrapperTextHeader, WrapperTextHeaderSmall } from "./style";
import { FaAngleDown, FaRegUser, FaCartPlus  } from "react-icons/fa";
import ButtonInputSearch from "../components/ButtonInputSearch/ButtonInputSearch";




const LayoutDefault = () => {
    return (
        <>
            <header>
                <WrapperHeader gutter={16}>
                    <Col span={6}><WrapperTextHeader>SUPPER MART</WrapperTextHeader></Col>
                    <Col span={12}>
                        <ButtonInputSearch />
                    </Col>
                    <Col span={6} style={{display: "flex", gap:"20px", alignItems: "center"}}>
                        <WrapperAccountHeader>
                            <FaRegUser style={{ fontSize: "24px"}}/>
                            <div>
                                <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                                <div>
                                    <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                    <FaAngleDown />
                                </div>                              
                            </div>
                        </WrapperAccountHeader>
                        <div>
                            <FaCartPlus style={{ fontSize: "24px", color: "white"}} />
                            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                        </div>
                    </Col>
                </WrapperHeader>
            </header>

            <Outlet />
        </>
    )
}

export default LayoutDefault;