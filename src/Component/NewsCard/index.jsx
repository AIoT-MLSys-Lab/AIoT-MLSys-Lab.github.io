import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const NewsCard = ( props ) => (
  <Card
    style={{
      width: 250,
      overflow: 'hidden',
    }}
    headStyle={{
      
    }}
    bodyStyle={{
      fontSize: '1rem',
      fontWeight: 'bold',
    }}
    cover={
      <img
        src={props.imageURL}
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
      />
    }
    hoverable={true}
  >
    <Meta
      className='newsCard'
      title={props.title}
      description={props.description}
    />
  </Card>
);
export default NewsCard;