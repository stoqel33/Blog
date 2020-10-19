const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const gameTemplate = path.resolve('src/templates/gameTemplate/gameTemplate.js');
  const result = await graphql(`
    query {
      fifaBlog {
        games {
          name
          dateOfPublication
          description
          thumbnail
          youtube
          publisher {
            name
          }
          slug
        }
      }
    }
  `);
  console.log('-----------------------------------------------');

  console.log(result.data.fifaBlog.games[0]);

  result.data.fifaBlog.games.forEach((game) => {
    createPage({
      path: game.slug,
      component: gameTemplate,
      context: {
        game,
      },
    });
  });
};
