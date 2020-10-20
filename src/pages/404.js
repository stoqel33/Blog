import React from 'react';
import { Link } from 'gatsby';
import MainLayout from '../components/mainLayout/mainLayout';
import style from './404.module.scss';

const NotFoundPage = () => (
  <MainLayout>
    <div className={style.page}>
      <p className={style.text}>Page does't exists</p>
      <Link to="/" className={style.link}>
        To Start Page
      </Link>
    </div>
  </MainLayout>
);

export default NotFoundPage;
