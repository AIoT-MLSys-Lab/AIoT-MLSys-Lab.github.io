import React, { lazy, Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom';
import Talk from '../Component/Talk';

const Main = lazy(
  async () => await import('@/Page/Main.jsx')
);


const Home = lazy(
  async () => await import('@/Component/Home')
);
const Research = lazy(
  async () => await import('@/Component/Research')
);

const Members = lazy(
  async () => await import('@/Component/Members')
);

const News = lazy(
  async () => await import('@/Component/News')
);

const Publications = lazy(
  async () => await import('@/Component/Publications')
);

const Courses = lazy(
  async () => await import('@/Component/Courses')
);

const GroupCalendar = lazy(
  async () => await import('@/Component/Talk')
);

const Join = lazy(
  async () => await import('@/Component/Join')
);

function Index() {
  const element = useRoutes([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/research',
          element: <Research></Research>,
        },
        {
          path: '/members',
          element: <Members></Members>,
        },
        {
          path: '/news',
          element: <News></News>,
        },
        {
          path: '/publications',
          element: <Publications></Publications>,
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
        },
        {
          path: '/talk',
          element: <Talk></Talk>,
        },
        {
          path: '/join',
          element: <Join></Join>,
        },
      ]
    },
  ])

  return (
    <div>
      <Suspense fallback={<p>loading</p>}>
          {element}
      </Suspense>
    </div>

  )
}

export default Index