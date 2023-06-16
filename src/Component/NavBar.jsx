import { Button, Affix } from 'antd'
import React from 'react'
import { useNavigate, NavLink, useLocation } from 'react-router-dom'
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
    children: [
      {
        label: 'Edge AI',
        key: 'EdgeAI',
      },
      {
        label: 'Federated Learning and Systems',
        key: 'FederatedLearningandSystems',
      },
      {
        label: 'AutoML',
        key: 'AutoML',
      },
      {
        label: 'AI for Wireless Sensing and Networking',
        key: 'AIforWirelessSensingandNetworking',
      },
      {
        label: 'Mobile Health',
        key: 'MobileHealth',
      },
    ]
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
    <Menu className='flex-center' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} overflowedIndicator/>
  </Affix>
  ;
};
export default NavBar;