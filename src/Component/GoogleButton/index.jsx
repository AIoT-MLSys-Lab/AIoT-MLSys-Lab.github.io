import { Button, Space } from 'antd';
const GoogleButton = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
      height: '100px',
    }}
  >
    <Button type="primary" danger block>
      Google Scholar
    </Button>
  </Space>
);
export default GoogleButton;