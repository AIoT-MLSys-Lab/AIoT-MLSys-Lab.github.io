import { Input, Space } from 'antd';
const { Search } = Input;

const onSearch = (value) => console.log(value);
const SearchPaper = () => (
  <Space direction="vertical">
    <Search
      placeholder="Search for papers"
      allowClear
      onSearch={onSearch}
      style={{
        width: 500,
      }}
    />
  </Space>
);
export default SearchPaper;