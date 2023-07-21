import React, { useEffect, useState } from 'react';
//INTL
import { IntlProvider, useIntl } from 'react-intl';
import enUS from './locales/en-US.json'
import zhCN from './locales/zh-CN.json'

//路由
import { HashRouter as Router,useNavigate,useRoutes, Route, Routes} from 'react-router-dom';

//redux
import { useDispatch,useSelector } from 'react-redux';
//组件
import Header from './Component/Header';
import Footer from './Component/Footer';
import Index from './Router/index';
import NavBar from './Component/NavBar';
import CanvasNest from './Component/CanvasNest';

function App() {
  const {lang}  = useSelector(store=>store.demo);
  console.log(lang);

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <IntlProvider locale={lang} messages={lang === 'en-US' ? enUS : zhCN}>
      {isWideScreen && <CanvasNest />}
      <Router>
        <Routes>
          <Route path="/*" element={<Header></Header>}/>
        </Routes>

        <Index></Index>

        <Routes>
          <Route path="/*" element={<Footer></Footer>}/>
        </Routes>
       
      </Router>
      
    </IntlProvider>
  );
}

export default App;
