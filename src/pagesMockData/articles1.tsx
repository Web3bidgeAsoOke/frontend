import React from 'react';
import { useNavigate } from 'react-router-dom';

const AsoEbiFashionTradition: React.FC = () => {
  const navigate = useNavigate();
  const articleId = 1; 
  const totalArticles = 15; 

  const goToArticle = (id: number) => {
    if (id > 0 && id <= totalArticles) {
      navigate(`/articles${id}`);
    }
  };

  return (
    <div style={{
      padding: '2%',
      backgroundColor: '#f9f9f9',
      fontFamily: '"Tenor Sans", sans-serif',
    }}>
      
      <button 
        onClick={() => navigate('/articles')} 
        style={{ 
          marginBottom: '20px', 
          padding: '10px 15px', 
          border: 'none', 
          borderRadius: '5px', 
          backgroundColor: '#007bff', 
          color: '#fff', 
          cursor: 'pointer', 
          transition: 'background-color 0.3s' 
        }}
      >
        Go Back to Articles
      </button>

      {/* Article Content */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}>
        <h1 style={{
          fontSize: '2.5em',
          marginBottom: '20px',
          color: '#fc0834',
          textAlign: 'center',
        }}>
          Aso-Ebi: A Fashion Tradition
        </h1>
        <article>
          <p>
            Aso-Ebi is a vibrant tradition in Nigeria, where friends and family wear matching outfits for special occasions. This practice fosters unity and community, allowing participants to celebrate together in a colorful display of culture and style. In this article, we explore the origins of Aso-Ebi, its cultural significance, and the various styles and fabrics used in these stunning ensembles.
          </p>
          <h2 style={{
            color: 'blue',
            fontWeight: 'bold',
          }}>Origins of Aso-Ebi</h2>
          <p>
            The tradition of Aso-Ebi has roots in Nigerian culture, where it initially served as a symbol of solidarity among families and friends. Originally, Aso-Ebi outfits were made from local fabrics, often designed with unique patterns that represented the wearers' cultural backgrounds. Over time, this practice evolved, incorporating a variety of fabrics and styles that reflect contemporary fashion trends while honoring traditional aesthetics.
          </p>
          <h2 style={{
            color: 'blue',
            fontWeight: 'bold',
          }}>Cultural Significance</h2>
          <p>
            Aso-Ebi plays a crucial role in Nigerian celebrations, particularly at weddings, birthdays, and other significant events. Wearing matching outfits signifies support for the celebrant and creates a sense of belonging among participants. The colors and styles chosen often have specific meanings, further enhancing the cultural depth of this beautiful tradition.
          </p>
          <h2 style={{
            color: 'blue',
            fontWeight: 'bold',
          }}>Styles and Fabrics</h2>
          <p>
            Aso-Ebi styles vary widely, showcasing the creativity and artistry of Nigerian fashion. Common fabrics used include Ankara, lace, and chiffon, each offering unique textures and visual appeal. Designers often create custom outfits that blend traditional motifs with modern cuts, resulting in stunning ensembles that stand out during celebrations.
          </p>
          <h2 style={{
            color: 'blue',
            fontWeight: 'bold',
          }}>Conclusion</h2>
          <p>
            Aso-Ebi is more than just a fashion statement; it is a celebration of community, culture, and heritage. As this tradition continues to evolve, it remains a powerful symbol of unity among friends and family, showcasing the beauty of Nigerian culture through fashion.
          </p>
        </article>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
        }}>
          <button 
            onClick={() => goToArticle(articleId - 1)} 
            disabled={articleId === 1} 
            style={buttonStyle}
          >
            &#8592; Previous
          </button>
          <button 
            onClick={() => goToArticle(articleId + 1)} 
            // disabled={articleId === totalArticles} 
            style={buttonStyle}
          >
            Next &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 15px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#007bff',
  color: '#fff',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

export default AsoEbiFashionTradition;
