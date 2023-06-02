import { Button, Affix } from 'antd'
import React from 'react'
import { useNavigate, NavLink, useLocation } from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: 'Home',
    key: '/',
  },
  {
    label: 'Research',
    key: 'Research',
  },
  {
    label: 'Members',
    key: 'Members',
  },
  {
    label: 'News',
    key: 'News',
  },
  {
    label: 'Publications',
    key: 'Publications',
  },
  {
    label: 'Courses',
    key: 'Courses',
    children: [
      {
        type: 'group',
        label: 'OSU',
        children: [
          {
            label: 'CSE 5469: Artificial Intelligence of Things',
            key: 'setting:1',
          },
          {
            label: 'CSE 3461: Computer Networking and Internet Technologies',
            key: 'setting:2',
          },
        ],
      },
    ]
  },
  {
    label: 'Talks',
    key: 'Talk',
  },
  {
    label: 'Join the Lab',
    key: 'Join',
  },
  {
    label: 'OSU AIoT Seminar',
    key: 'Seminar',
  },
];
const NavBar = () => {
  const [top, setTop] = useState(0);
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname.split("/")[1]);
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    if (e.key === 'Seminar') {
      window.location.href = 'https://sites.google.com/view/osu-aiot-seminar';
    } else {
      navigate(`${e.key}`);
    }
  };
  return <Affix offsetTop={top}>
    <Menu className='flex-center' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
  </Affix>
  ;
};
export default NavBar;