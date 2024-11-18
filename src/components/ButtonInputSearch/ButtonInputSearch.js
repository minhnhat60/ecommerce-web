import { Input } from 'antd';
const { Search } = Input;

const ButtonInputSearch = () => {
    return (
        <>
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Tìm"
                size="large"
            />
        </>
    )
}

export default ButtonInputSearch;