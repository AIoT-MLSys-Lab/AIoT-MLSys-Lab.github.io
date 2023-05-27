import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const MemberCard = ( props ) => (
  <Card
    style={{
      width: 250,
      overflow: 'hidden',
    }}
    cover={
      <img
        src={props.imageURL}
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover'
        }}
      />
    }
    hoverable={true}
  >
    <Meta
      title={props.title}
      description={props.description}
    />
  </Card>
);
export default MemberCard;