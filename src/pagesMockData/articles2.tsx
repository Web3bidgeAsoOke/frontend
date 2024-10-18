// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const KenteCloth: React.FC = () => {
//   const navigate = useNavigate();
//   const articleId = 2; // Current article ID
//   const totalArticles = 15; // Total number of articles

//   const goToArticle = (id: number) => {
//     if (id > 0 && id <= totalArticles) {
//       navigate(`/articles/${id}`);
//     }
//   };

//   return (
//     <div style={{ padding: '2%', backgroundColor: '#f9f9f9', fontFamily: '"Tenor Sans", sans-serif' }}>
//       <button onClick={() => navigate('/articles')} style={buttonStyle}>
//         Go Back to Articles
//       </button>

//       <div style={articleContainerStyle}>
//         <h1 style={titleStyle}>Kente Cloth: A Symbol of Heritage</h1>
//         <article>
//           <p>
//             Kente cloth is a famous Ghanaian textile known for its colorful patterns and cultural significance. This article delves into the history of Kente, its symbolism, and how it's woven into various ceremonies.
//           </p>
//           <h2 style={headingStyle}>History of Kente</h2>
//           <p>
//             Kente originated from the Ashanti people of Ghana and is made from silk and cotton. Each pattern and color tells a story or represents specific qualities, making Kente a rich cultural artifact.
//           </p>
//           <h2 style={headingStyle}>Symbolism</h2>
//           <p>
//             Different colors in Kente cloth hold significant meanings. For example, gold symbolizes wealth, while green represents fertility. These colors are chosen carefully for ceremonies.
//           </p>
//           <h2 style={headingStyle}>Uses of Kente</h2>
//           <p>
//             Kente cloth is worn during important ceremonies, including weddings and graduations. It is a symbol of pride and cultural identity for Ghanaians.
//           </p>
//           <h2 style={headingStyle}>Conclusion</h2>
//           <p>
//             Kente cloth is not just fabric; it embodies the rich cultural heritage of Ghana. As it continues to gain global recognition, its stories and meanings remain deeply rooted in tradition.
//           </p>
//         </article>

//         <div style={navigationStyle}>
//           <button onClick={() => goToArticle(articleId - 1)} disabled={articleId === 1} style={buttonStyle}>
//             &#8592; Previous
//           </button>
//           <button onClick={() => goToArticle(articleId + 1)} disabled={articleId === totalArticles} style={buttonStyle}>
//             Next &#8594;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Shared styles
// const buttonStyle = {
//   marginBottom: '20px',
//   padding: '10px 15px',
//   border: 'none',
//   borderRadius: '5px',
//   backgroundColor: '#007bff',
//   color: '#fff',
//   cursor: 'pointer',
//   transition: 'background-color 0.3s',
// };

// const articleContainerStyle = {
//   maxWidth: '800px',
//   margin: '0 auto',
//   padding: '10px',
//   backgroundColor: '#fff',
//   borderRadius: '8px',
//   boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
// };

// const titleStyle = {
//   fontSize: '2.5em',
//   marginBottom: '20px',
//   color: '#fc0834',
//   textAlign: 'center',
// };

// const headingStyle = {
//   color: 'blue',
//   fontWeight: 'bold',
// };

// const navigationStyle = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   marginTop: '20px',
// };

// export default KenteCloth;
