import { useState } from 'react';
import { Card, Pagination } from "antd";

const PageNav = ( props ) => {
  const [current, setCurrent] = useState(1);
  const [itemValue, setItemValue] = useState({
    minValue: 0,
    maxValue: 10
  });

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);

    if (page <= 1) {
      setItemValue({
        minValue: 0,
        maxValue: 10
      });
    } else {
      setItemValue({
        minValue: (page - 1) * 10,
        maxValue: (page - 1) * 10 + 10
      });
    }
  };

  const content = props.data;

  return (
    <div>
      {content && content.length > 0 && content.slice(itemValue.minValue, itemValue.maxValue).map(val => (
        <Card
          style={{ width: 1200 }} className='formCard'
        >
        <p dangerouslySetInnerHTML={{ __html: val.value }}></p>
        </Card>
      ))}
      <Pagination current={current} onChange={onChange} total={content.length} className='pageNavBottom'/>
    </div>
  )
};
export default PageNav;