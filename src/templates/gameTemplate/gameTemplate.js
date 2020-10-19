import React from 'react';
import { Link } from 'gatsby';
import style from './gameTemplate.module.scss';
import MainLayout from '../../components/mainLayout/mainLayout';

const GamePostTemplate = ({ pageContext: { game } }) => (
  <MainLayout>
    <div className={style.wrapper}>
      <Link className={style.link} to="/">
        Back
      </Link>
      <h1>{game.name}</h1>
      <h3>{game.publisher.name}</h3>
      <p>{game.dateOfPublication}</p>
      <div className={style.innerWrapper}>
        <img src={game.thumbnail} alt="cover" />
        <p>{game.description}</p>
      </div>
      {game.youtube && (
        <div className={style.video}>
          <iframe
            src={game.youtube}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </div>
  </MainLayout>
);

export default GamePostTemplate;
