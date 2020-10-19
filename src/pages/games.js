// import React from 'react';
// import { StaticQuery, graphql } from 'gatsby';

// const Games = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         fifaBlog {
//           games {
//             name
//             dateOfPublication
//             description
//             thumbnail
//             publisher {
//               name
//             }
//           }
//         }
//       }
//     `}
//     render={({ fifaBlog: { games } }) => (
//       <div>
//         {games.map((game) => (
//           <div key={game.name}>
//             <h1>{game.name}</h1>
//             <h2>{game.dateOfPublication}</h2>
//             <p>{game.description}</p>
//             <img src={game.thumbnail} alt="" />
//           </div>
//         ))}
//       </div>
//     )}
//   />
// );

// export default Games;
