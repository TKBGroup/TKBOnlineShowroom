import { useState, useEffect } from 'react';
import styles from '../styles/Gallery.module.css';
import Link from 'next/link'; // Import Link if you need to handle internal links

export default function Gallery() {
  const [vanityCards, setVanityCards] = useState([]);
  const [kitchenCards, setKitchenCards] = useState([]);
  const [storageCards, setStorageCards] = useState([]);

  useEffect(() => {
    // fetch('/assets/gallery.json')
    
    fetch('/images/gallery.json')
      .then(response => response.json())
      .then(cards => {
        const vanity = [];
        const kitchen = [];
        const storage = [];
        cards.forEach(card => {
          if (card.section === 'vanity') {
            vanity.push(card);
          } else if (card.section === 'kitchen') {
            kitchen.push(card);
          } else if (card.section === 'storage and closets') {
            storage.push(card);
          }
        });
        setVanityCards(vanity);
        setKitchenCards(kitchen);
        setStorageCards(storage);
      })
      .catch(error => console.error('Error loading cards:', error));
  }, []);

  const isExternal = (url) => {
    try {
      const urlObj = new URL(url, 'http://dummy-base.com');
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch (e) {
      return false;
    }
  };

  const renderCards = (cards) => (
    cards.map((card, index) => (
      <div key={index} className={styles.card}>
        <img src={card.image} alt={card.title} />
        <div className={styles.cardContent}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          {/* Conditional rendering based on the link type */}
          {isExternal(card.link) ? (
            // Use a standard <a> tag for external links
            <a href={card.link} target="_blank" rel="noopener noreferrer">
              View More
            </a>
          ) : (
            // Use the Link component for internal links
            // Remember to use the new syntax without the <a> tag
            <Link href={card.link}>
              View More
            </Link>
          )}
        </div>
      </div>
    ))
  );

  return (
    <>
      <div id={styles.vanitySection}>
        <h2>Vanity</h2>
        <div className={styles.cardContainer}>
          {renderCards(vanityCards)}
        </div>
      </div>

      <div id={styles.kitchenSection}>
        <h2>Kitchen</h2>
        <div className={styles.cardContainer}>
          {renderCards(kitchenCards)}
        </div>
      </div>

      <div id={styles.storageSection}>
        <h2>Storage & Closets</h2>
        <div className={styles.cardContainer}>
          {renderCards(storageCards)}
        </div>
      </div>
    </>
  );
}