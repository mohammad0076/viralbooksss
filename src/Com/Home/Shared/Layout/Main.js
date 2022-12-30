import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;