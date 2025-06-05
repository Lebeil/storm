'use client';

import { useState, useEffect } from 'react';
import styles from "./page.module.css";

// Composant Compte à rebours
function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-06-14T11:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.countdown}>
      <div className={styles.countdownItem}>
        <span className={styles.countdownNumber}>{timeLeft.days.toString().padStart(2, '0')}</span>
        <span className={styles.countdownLabel}>Jours</span>
      </div>
      <div className={styles.countdownItem}>
        <span className={styles.countdownNumber}>{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span className={styles.countdownLabel}>Heures</span>
      </div>
      <div className={styles.countdownItem}>
        <span className={styles.countdownNumber}>{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span className={styles.countdownLabel}>Minutes</span>
      </div>
      <div className={styles.countdownItem}>
        <span className={styles.countdownNumber}>{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span className={styles.countdownLabel}>Secondes</span>
      </div>
    </div>
  );
}

// Composant Formulaire de jeu concours
function ContestForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre participation ! Bonne chance 🍀');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className={styles.contestForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          value={formData.firstName}
          onChange={handleChange}
          required
          className={styles.formInput}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="email"
          name="email"
          placeholder="Adresse e-mail"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.formInput}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        TENTE TA CHANCE
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.logo}>
              <h2>I.D</h2>
            </div>
            <Countdown />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              STORM THE BLOCK<br />
              <span className={styles.heroSubtitle}>X INSTADRINK</span>
            </h1>
            <div className={styles.heroTags}>
              <span className={styles.tag}>BASKET</span>
              <span className={styles.tag}>DJ SET</span>
              <span className={styles.tag}>FOODTRUCK</span>
            </div>
            <p className={styles.heroDescription}>
              UNE JOURNÉE DE OUF, RÉSERVÉE AUX V VRAIS
            </p>
            <div className={styles.heroButtons}>
              <button className="btn btn-primary">JE RÉSERVE MA PLACE</button>
              <button className="btn btn-secondary">GAGNE 3 PLACES VIP</button>
            </div>
          </div>
          <div className={styles.heroQr}>
            <div className={styles.qrCode}>
              <div className={styles.qrPlaceholder}>QR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contest Section */}
      <section className={styles.contest}>
        <div className="container">
          <div className={styles.contestContent}>
            <div className={styles.contestInfo}>
              <div className={styles.contestIcon}>🎁</div>
              <h2 className={styles.contestTitle}>TENTE DE GAGNER<br />3 PLACES VIP</h2>
              <p className={styles.contestDescription}>Participé ici & sur Instagram</p>
            </div>
            <ContestForm />
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className={styles.advantages}>
        <div className="container">
          <h2 className={styles.sectionTitle}>LES AVANTAGES INSTA DRIN</h2>
          <div className={styles.advantagesGrid}>
            <div className={styles.advantageItem}>
              <div className={styles.advantageIcon}>⭐</div>
              <h3>3 places<br />VIP à gagner</h3>
            </div>
            <div className={styles.advantageItem}>
              <div className={styles.advantageIcon}>🎫</div>
              <h3>Billet<br />en 1 clic</h3>
            </div>
            <div className={styles.advantageItem}>
              <div className={styles.advantageIcon}>📱</div>
              <h3>QR code<br />d&apos;accès</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Event Info Section */}
      <section className={styles.eventInfo}>
        <div className="container">
          <div className={styles.eventInfoGrid}>
            <div className={styles.eventDetails}>
              <h2 className={styles.sectionTitle}>STORM 2025</h2>
              <h3 className={styles.eventSubtitle}>L&apos;ÉVÉNEMENT BASKET LE PLUS HYPE DE L&apos;ÉTÉ</h3>
              <p className={styles.eventDescription}>
                Le 14 juin au Palais des Sports de Levallois – Marcel Cerdan, Storm réunit toute la famille basket et la culture urbaine. 🏀
              </p>
              <p className={styles.eventDescription}>
                Retrouve toutes les confrontations que tu rêves de voir : pros contre streetballers, créateurs de contenu contre joueurs de Nationale, jeunes espoirs, prodiges hors circuit et talents évoluant à l&apos;étranger…
              </p>
              <div className={styles.eventMeta}>
                <p><strong>Date :</strong> Samedi 14 juin 2025</p>
                <p><strong>Horaires :</strong> 11h00 - 21h30</p>
                <p><strong>Lieu :</strong> Palais des Sports Marcel Cerdan</p>
                <p><strong>Adresse :</strong> 141 Rue Danton, 92300 Levallois-Perret</p>
              </div>
            </div>
            <div className={styles.mapContainer}>
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapIcon}>📍</div>
                <p>Lieu et date</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className={styles.partners}>
        <div className="container">
          <h2 className={styles.sectionTitle}>PARTENAIRES</h2>
          <div className={styles.partnersGrid}>
            <div className={styles.partnerLogo}>adidas</div>
            <div className={styles.partnerLogo}>UNCLE BUMPY</div>
            <div className={styles.partnerLogo}>INSTA DRINK</div>
            <div className={styles.partnerLogo}>STORM</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <h3>I.D</h3>
            </div>
            <div className={styles.footerLinks}>
              <a href="https://www.idnetwork.io/events/book/ELLPIQVntg1V4d02FUBN" target="_blank" rel="noopener noreferrer">
                Réserver sur ID Network
              </a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 All rights reserved</p>
            <div className={styles.footerLegal}>
              <a href="#">Mentions légales</a>
              <a href="#">Politique de confidentialité</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
