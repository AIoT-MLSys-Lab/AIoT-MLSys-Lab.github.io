import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const NoPhotoCard = ( props ) => (
  <Card
    style={{
      width: 250,
      overflow: 'hidden',
    }}
    hoverable={true}
  >
    <Meta
      title={props.title}
      description={props.description}
    />
  </Card>
);
export default NoPhotoCard;