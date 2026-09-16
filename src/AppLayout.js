
import Header from './Header/Header';
import { Outlet } from "react-router-dom"
import Footer from './Footer';
import { Theme } from './Utils/ThemeContext';
import { Provider } from 'react-redux';
import { Store } from './StateUtils/Store/Store';

const AppLayout = ()=>{
    return(
        <>
        <Provider store={Store}>
        <Theme>
        <Header />
        <Outlet />
        <Footer />
        </Theme>
        </Provider>
        </>
    )
}

export default AppLayout