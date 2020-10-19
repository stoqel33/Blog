import React from 'react';
import { graphql, Link, StaticQuery, navigate } from 'gatsby';

import style from './content.module.scss';

export default function Content() {
  const handleImgClick = (path) => {
    navigate(path);
  };

  return (
    <StaticQuery
      query={graphql`
        query {
          allSitePage(
            filter: {
              component: {
                eq: "D:/Github/blog-fifa/blog/src/templates/gameTemplate/gameTemplate.js"
              }
            }
            sort: { fields: context___game___dateOfPublication, order: DESC }
          ) {
            edges {
              node {
                path
                component
                context {
                  game {
                    name
                    thumbnail
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allSitePage: { edges } }) => (
        <div className={style.wrapper}>
          {edges.map((item) => (
            <div className={style.innerWrapper} key={item.node.path}>
              <Link className={style.link} to={item.node.path}>
                {item.node.context.game.name}
              </Link>
              <img
                onClick={() => handleImgClick(item.node.path)}
                className={style.img}
                alt="cover"
                src={item.node.context.game.thumbnail}
              />
            </div>
          ))}
        </div>
      )}
    />
  );
}
