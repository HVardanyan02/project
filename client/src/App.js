import './App.css';
import { Admin, Resource } from 'react-admin';
//import restProvider from 'ra-data-simple-rest';
import { MyLayout } from './layouts/Layout';
import { CssBaseline } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import MyAppBar from '../src/components/AppBar';

import { MainDashboard } from './pages/MainDashboard';
import {Signin} from './pages/Signin';
import {Signup} from './pages/Signup'
import { Profile } from './pages/Profile';
import { AdminDesktop } from '../src/Desctop/AdminDesctop'
import DATAPROVIDER from "./DataProvider";
import {UserForm} from '../src/pages/UserForm'
//const DATAPROVIDER = restProvider('http://localhost:3000');

const  App = ()  => {
    return (
        
        <Admin layout={MyLayout} dataProvider={DATAPROVIDER} >
            <CssBaseline />
       <Resource name='DashBoard' list={MainDashboard} />
       <Resource name="user" list={UserForm}/>
       <AdminDesktop />
        </Admin>
      );
}
export default App;