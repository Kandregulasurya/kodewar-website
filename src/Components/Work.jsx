import React, { useState } from "react";
import "../Styles/Work.css";

const products = [
  {
    name: "Tower Speaker",
    category: "Premium Audio",
    description:
      "Premium floor-standing tower speaker designed for powerful cinema sound and deep audio performance.",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Projector Screen",
    category: "Cinema Display",
    description:
      "Large-format cinematic projection screen designed for a bright and immersive home theater experience.",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "DVD Player",
    category: "Media Player",
    description:
      "Compact media player designed for movies and home entertainment systems.",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Soundbar",
    category: "Home Audio",
    description:
      "Slim soundbar system that creates a clean cinematic audio experience without taking much space.",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Subwoofer",
    category: "Deep Bass",
    description:
      "High-performance subwoofer designed to produce deep bass and enhance cinematic sound effects.",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "AV Receiver",
    category: "System Control",
    description:
      "Central home theater receiver that connects and controls multiple audio and video devices.",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Bookshelf Speaker",
    category: "Compact Audio",
    description:
      "Compact speaker system designed for detailed sound while fitting beautifully into smaller spaces.",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Ceiling Speaker",
    category: "Surround Sound",
    description:
      "Discreet ceiling-mounted speaker designed to create an immersive surround sound environment.",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Movie Discs",
    category: "Entertainment",
    description:
      "Physical movie media collection for a traditional home cinema experience.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=85",
  },
];

function Work() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const firstRow = products.slice(0, 2);
  const secondRow = products.slice(2, 5);
  const thirdRow = products.slice(5, 9);

  return (
    <section className="products-section">

     

      <p className="products-subtitle">
        Our Work – Home Theater & Sound Systems
      </p>

      {/* PROJECTOR */}

      <div className="projector-area">

        <div className="projector">

          <div className="projector-top">
            PK CINEMA
          </div>

          <div className="vent vent-left">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="projector-lens">
            <div className="lens-inner"></div>
          </div>

          <div className="vent vent-right">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

        {/* LEFT LIGHT */}

        <div className="projector-beam beam-left"></div>

        {/* RIGHT LIGHT */}

        <div className="projector-beam beam-right"></div>

        {/* CENTER LIGHT */}

        <div className="projector-center-light"></div>

        {/* MOVING LIGHT */}

        <div className="light-particle"></div>

      </div>


      {/* FIRST ROW - 2 */}

      <div className="product-row row-two">

        {firstRow.map((product, index) => (

          <WorkCard
            key={product.name}
            product={product}
            index={index}
            onClick={() =>
              setSelectedProduct(product)
            }
          />

        ))}

      </div>


      {/* SECOND ROW - 3 */}

      <div className="product-row row-three">

        {secondRow.map((product, index) => (

          <WorkCard
            key={product.name}
            product={product}
            index={index}
            onClick={() =>
              setSelectedProduct(product)
            }
          />

        ))}

      </div>


      {/* THIRD ROW - 4 */}

      <div className="product-row row-four">

        {thirdRow.map((product, index) => (

          <WorkCard
            key={product.name}
            product={product}
            index={index}
            onClick={() =>
              setSelectedProduct(product)
            }
          />

        ))}

      </div>


      {/* PRODUCT DETAILS */}

      {selectedProduct && (

        <div
          className="product-modal"
          onClick={(e) => {

            if (e.target.className === "product-modal") {
              setSelectedProduct(null);
            }

          }}
        >

          <button
            className="close-modal"
            onClick={() =>
              setSelectedProduct(null)
            }
          >
            ×
          </button>

          <div className="modal-content">

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />

            <div className="modal-details">

              <span>
                {selectedProduct.category}
              </span>

              <h2>
                {selectedProduct.name}
              </h2>

              <p>
                {selectedProduct.description}
              </p>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}


/* WORK CARD */

function WorkCard({
  product,
  index,
  onClick,
}) {

  return (

    <div
      className="product-card"
      style={{
        "--delay": `${index * 0.15}s`,
      }}
      onClick={onClick}
    >

      <div className="image-wrapper">

        <img
          src={product.image}
          alt={product.name}
        />

        <div className="image-overlay">
          View Details
        </div>

      </div>

      <h3>
        {product.name}
      </h3>

      <p>
        {product.category}
      </p>

    </div>

  );
}

export default Work;