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
  return (
    <IntlProvider locale={lang} messages={lang === 'en-US' ? enUS : zhCN}>
      <CanvasNest></CanvasNest>
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
