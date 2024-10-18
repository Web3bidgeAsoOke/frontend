// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const articlesData = [
//   { id: 1, title: "Aso-Ebi: A Fashion Tradition", content: "Aso-Ebi is a vibrant tradition in Nigeria, where friends and family wear matching outfits for special occasions. This article explores the origins of Aso-Ebi, its cultural significance, and the various styles and fabrics used in these stunning ensembles. Discover how Aso-Ebi fosters unity and community during celebrations..." },
//   { id: 2, title: "Kente Cloth: A Symbol of Heritage", content: "Kente cloth is a famous Ghanaian textile known for its colorful patterns and cultural significance. This article delves into the history of Kente, its symbolism, and how it's woven into various ceremonies. Understand the craftsmanship behind Kente cloth and its importance in representing African identity..." },
//   { id: 3, title: "Exploring Traditional Attires of Africa", content: "Africa boasts a rich tapestry of traditional attire, each with its unique significance and history. This article examines the diverse garments worn across the continent, their cultural meanings, and how they are celebrated during various events. Dive into the beauty of Africa's traditional fashion and its vibrant stories..." },
//   { id: 4, title: "A Guide to Aso-Ebi Styles", content: "Aso-Ebi is a popular tradition in Nigeria where friends and family wear matching outfits for special occasions. This article explores various Aso-Ebi styles, fabrics, and how to choose the perfect outfit for weddings and parties. Discover the cultural significance of Aso-Ebi and tips for styling..." },
//   { id: 5, title: "The Evolution of African Fashion", content: "African fashion has a rich history that has evolved over the years. This article discusses the influences of traditional attire, modern fashion trends, and how designers are shaping the future of African fashion. Learn about key figures in the industry and the global impact of African styles..." },
//   { id: 6, title: "Cultural Significance of Kente Cloth", content: "Kente cloth is a traditional Ghanaian textile known for its vibrant colors and intricate patterns. This article delves into the history of Kente cloth, its symbolism, and its use in various ceremonies. Understand the craftsmanship behind Kente and its importance in African culture..." },
//   { id: 7, title: "Traditional Attire Across Africa", content: "Africa is home to diverse cultures, each with unique traditional attire. This article explores traditional garments from different regions, their meanings, and how they are worn during ceremonies and celebrations. Discover the beauty and significance of Africa's rich textile heritage..." },
//   { id: 8, title: "Fashion Trends in Urban Africa", content: "Urban Africa is a melting pot of styles and influences. This article highlights the latest fashion trends in major cities, showcasing how local designers are blending traditional elements with contemporary styles. Explore the vibrant streetwear scene and its impact on global fashion..." },
//   { id: 9, title: "Nigerian Wedding Attire: A Closer Look", content: "Nigerian weddings are colorful and vibrant, with traditional attire playing a central role. This article examines the different types of wedding outfits worn by brides, grooms, and guests. Learn about the significance of colors, fabrics, and styles in Nigerian wedding fashion..." },
//   { id: 10, title: "Accessorizing African Outfits", content: "Accessories are an essential part of African fashion, adding flair and personality to outfits. This article discusses various accessories, including jewelry, head wraps, and bags, and how to style them with traditional and modern clothing. Get tips on choosing the right accessories for any occasion..." },
//   { id: 11, title: "The Rise of Sustainable Fashion in Africa", content: "Sustainable fashion is gaining momentum in Africa as designers focus on eco-friendly practices. This article explores the rise of sustainable fashion brands, their impact on the environment, and how they are changing the industry. Learn about innovative materials and ethical production methods..." },
//   { id: 12, title: "The Art of Tailoring in Africa", content: "Tailoring is an essential skill in African fashion, producing beautifully crafted garments. This article highlights the artistry and techniques behind tailoring, the role of tailors in communities, and how they contribute to preserving cultural heritage. Explore the craftsmanship involved in creating traditional outfits..." },
//   { id: 13, title: "Impact of African Fashion on Global Trends", content: "African fashion is influencing global trends more than ever. This article discusses how African designers are making waves in the international fashion scene, showcasing their creativity and cultural stories. Discover the collaborations and innovations that are putting African fashion on the map..." },
//   { id: 14, title: "Dressing for Special Occasions in Africa", content: "Special occasions in Africa are celebrated with unique attire that reflects cultural heritage. This article explores different traditional outfits for various celebrations, their meanings, and how they vary across regions. Learn how dressing for occasions helps preserve cultural identities..." },
//   { id: 15, title: "The Future of African Fashion", content: "The future of African fashion is bright, with emerging designers and trends. This article looks at the innovations in fabric technology, sustainable practices, and the rise of digital fashion shows. Explore the potential of African fashion to shape the global industry in the years to come..." },
// ];

// const authors = [
//   "Favour Odeyemi",
//   "Fagbolade Yasir",
//   "Akinwunmi Akinrimisi",
//   "Jude Tochukwu Okoye",
//   "Chukwuebuka Favour Okeke",
//   "Cornelius Emase",
//   "Ponfa Michael Joseph",
//   "Collins Adi",
//   "Ifeoluwa Afolabi",
// ];

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


 const articlesData = [
   { id: 1, title: "Aso-Ebi: A Fashion Tradition", content: "Aso-Ebi is a vibrant tradition in Nigeria, where friends and family wear matching outfits for special occasions. This article explores the origins of Aso-Ebi, its cultural significance, and the various styles and fabrics used in these stunning ensembles. Discover how Aso-Ebi fosters unity and community during celebrations..." },
   { id: 2, title: "Kente Cloth: A Symbol of Heritage", content: "Kente cloth is a famous Ghanaian textile known for its colorful patterns and cultural significance. This article delves into the history of Kente, its symbolism, and how it's woven into various ceremonies. Understand the craftsmanship behind Kente cloth and its importance in representing African identity..." },
   { id: 3, title: "Exploring Traditional Attires of Africa", content: "Africa boasts a rich tapestry of traditional attire, each with its unique significance and history. This article examines the diverse garments worn across the continent, their cultural meanings, and how they are celebrated during various events. Dive into the beauty of Africa's traditional fashion and its vibrant stories..." },
   { id: 4, title: "A Guide to Aso-Ebi Styles", content: "Aso-Ebi is a popular tradition in Nigeria where friends and family wear matching outfits for special occasions. This article explores various Aso-Ebi styles, fabrics, and how to choose the perfect outfit for weddings and parties. Discover the cultural significance of Aso-Ebi and tips for styling..." },
   {id: 6, title: "Cultural Significance of Kente Cloth", content: "Kente cloth is a traditional Ghanaian textile known for its vibrant colors and intricate patterns. This article delves into the history of Kente cloth, its symbolism, and its use in various ceremonies. Understand the craftsmanship behind Kente and its importance in African culture..." },
   { id: 7, title: "Traditional Attire Across Africa", content: "Africa is home to diverse cultures, each with unique traditional attire. This article explores traditional garments from different regions, their meanings, and how they are worn during ceremonies and celebrations. Discover the beauty and significance of Africa's rich textile heritage..." },
   { id: 8, title: "Fashion Trends in Urban Africa", content: "Urban Africa is a melting pot of styles and influences. This article highlights the latest fashion trends in major cities, showcasing how local designers are blending traditional elements with contemporary styles. Explore the vibrant streetwear scene and its impact on global fashion..." },
   { id: 9, title: "Nigerian Wedding Attire: A Closer Look", content: "Nigerian weddings are colorful and vibrant, with traditional attire playing a central role. This article examines the different types of wedding outfits worn by brides, grooms, and guests. Learn about the significance of colors, fabrics, and styles in Nigerian wedding fashion..." },
   { id: 10, title: "Accessorizing African Outfits", content: "Accessories are an essential part of African fashion, adding flair and personality to outfits. This article discusses various accessories, including jewelry, head wraps, and bags, and how to style them with traditional and modern clothing. Get tips on choosing the right accessories for any occasion..." },
   { id: 11, title: "The Rise of Sustainable Fashion in Africa", content: "Sustainable fashion is gaining momentum in Africa as designers focus on eco-friendly practices. This article explores the rise of sustainable fashion brands, their impact on the environment, and how they are changing the industry. Learn about innovative materials and ethical production methods..." },
   { id: 12, title: "The Art of Tailoring in Africa", content: "Tailoring is an essential skill in African fashion, producing beautifully crafted garments. This article highlights the artistry and techniques behind tailoring, the role of tailors in communities, and how they contribute to preserving cultural heritage. Explore the craftsmanship involved in creating traditional outfits..." },
   { id: 13, title: "Impact of African Fashion on Global Trends", content: "African fashion is influencing global trends more than ever. This article discusses how African designers are making waves in the international fashion scene, showcasing their creativity and cultural stories. Discover the collaborations and innovations that are putting African fashion on the map..." },
   { id: 14, title: "Dressing for Special Occasions in Africa", content: "Special occasions in Africa are celebrated with unique attire that reflects cultural heritage. This article explores different traditional outfits for various celebrations, their meanings, and how they vary across regions. Learn how dressing for occasions helps preserve cultural identities..." },
   { id: 15, title: "The Future of African Fashion", content: "The future of African fashion is bright, with emerging designers and trends. This article looks at the innovations in fabric technology, sustainable practices, and the rise of digital fashion shows. Explore the potential of African fashion to shape the global industry in the years to come..." },
];


const authors = [
       "Favour Odeyemi",
       "Fagbolade Yasir",
       "Akinwunmi Akinrimisi",
       "Jude Tochukwu Okoye",
       "Chukwuebuka Favour Okeke",
       "Cornelius Emase",
       "Ponfa Michael Joseph",
       "Collins Adi",
       "Ifeoluwa Afolabi",
];

const Article: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articlesData.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlightSearchTerm = (title: string, term: string) => {
    if (!term) return title; 
    const regex = new RegExp(`(${term})`, 'gi'); 
    const parts = title.split(regex); 
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: '#ffeb3b' }}>{part}</span>
      ) : part
    );
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundImage: 'url("https://i.pinimg.com/736x/5c/36/6d/5c366d9734f68463ab139488b112f3df.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fontFamily: '"Tenor Sans", sans-serif',
      color: '#333',
    }}>
      <div style={{
        display: 'flex',
        flex: 1,
        padding: '20px',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{ marginRight: '20px', width: '250px', padding: '1px', background: 'rgba(2, 0, 0, 0.1)', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ color: '#007bff' }}>Search Articles</h3>
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              outline: 'none',
              transition: 'border 0.3s',
            }}
            onFocus={(e) => e.currentTarget.style.border = '1px solid #007bff'}
            onBlur={(e) => e.currentTarget.style.border = '1px solid #ccc'}
          />
          <img
            src="https://kdiug.com/wp-content/uploads/2024/08/AFRICAN-CUTURE-SHOWCASE_2.jpg"
            alt="African Culture Showcase"
            style={{ width: '100%', borderRadius: '8px', marginTop: '10px', marginBottom: '10px', padding: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
          />
        </div>

        <div style={{ flex: 1, padding: '10px' }}>
          <h1 style={{
            color: '#fc0834',
            fontSize: '2.5em', 
            textAlign: 'center', 
            margin: '10px 0' 
          }}>
            Aso Ebi Articles
          </h1>

          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <div
                key={article.id}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '15px',
                  marginBottom: '20px',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s',
                  background: '#fff',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <h3 style={{ margin: '0', color: '#007bff' }}>
                  <Link to={`/article${article.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
                    {highlightSearchTerm(article.title, searchTerm)}
                  </Link>
                </h3>
                <p style={{ color: '#555' }}>{article.content.substring(0, 100)}...</p>
                <p style={{ fontStyle: 'italic', color: '#777' }}>by {authors[index % authors.length]}</p>
              </div>
            ))
          ) : (
            <h1 style={{
              color: '#ffffff',
              fontSize: '2.5em', 
              textAlign: 'center', 
              margin: '10px 0' 
            }}>
              No Articles Found!!
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Article;
