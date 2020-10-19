import React from 'react';
import style from './mainLayout.module.scss';
import Header from '../header/header';
import Footer from '../footer/footer';

const MainLayout = (props) => (
  <div className={style.wrapper}>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default MainLayout;
