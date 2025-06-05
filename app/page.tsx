'use client';

import { useState, useEffect } from 'react';
import styles from "./page.module.css";

// Composant Compte à rebours amélioré
function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-06-14T11:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };

        // Animation pour les changements de secondes
        if (newTimeLeft.seconds !== timeLeft.seconds) {
          setIsAnimating(true);
          setTimeout(() => setIsAnimating(false), 300);
        }

        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft.seconds]);

  return (
    <div className={styles.countdownContainer}>
      <div className={styles.countdownHeader}>
        <span className={styles.countdownEventTitle}>STORM 2025</span>
        <span className={styles.countdownEventDate}>14 JUIN 2025</span>
      </div>
      <div className={styles.countdown}>
        <div className={styles.countdownItem}>
          <div className={styles.countdownCard}>
            <span className={styles.countdownNumber}>{timeLeft.days.toString().padStart(2, '0')}</span>
            <div className={styles.countdownDivider}></div>
            <span className={styles.countdownLabel}>JOURS</span>
          </div>
        </div>
        <div className={styles.countdownSeparator}>:</div>
        <div className={styles.countdownItem}>
          <div className={styles.countdownCard}>
            <span className={styles.countdownNumber}>{timeLeft.hours.toString().padStart(2, '0')}</span>
            <div className={styles.countdownDivider}></div>
            <span className={styles.countdownLabel}>HEURES</span>
          </div>
        </div>
        <div className={styles.countdownSeparator}>:</div>
        <div className={styles.countdownItem}>
          <div className={styles.countdownCard}>
            <span className={styles.countdownNumber}>{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <div className={styles.countdownDivider}></div>
            <span className={styles.countdownLabel}>MIN</span>
          </div>
        </div>
        <div className={styles.countdownSeparator}>:</div>
        <div className={styles.countdownItem}>
          <div className={`${styles.countdownCard} ${isAnimating ? styles.countdownAnimating : ''}`}>
            <span className={styles.countdownNumber}>{timeLeft.seconds.toString().padStart(2, '0')}</span>
            <div className={styles.countdownDivider}></div>
            <span className={styles.countdownLabel}>SEC</span>
          </div>
        </div>
      </div>
      <div className={styles.countdownUrgency}>
        <span className={styles.urgencyText}>⚡ PLACES LIMITÉES ⚡</span>
      </div>
    </div>
  );
}

// Composant Formulaire de jeu concours amélioré
function ContestForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    setTimeout(() => {
      console.log('Formulaire soumis:', formData);
      alert('Merci pour votre participation ! Bonne chance 🍀');
      setIsSubmitting(false);
      setFormData({ firstName: '', email: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.contestFormContainer}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>Participe maintenant !</h3>
        <p className={styles.formSubtitle}>Remplis le formulaire et tente ta chance</p>
      </div>

      <form className={styles.contestForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <div className={styles.inputWrapper}>
            <span className={styles.inputIcon}>👤</span>
            <input
              type="text"
              name="firstName"
              placeholder="Ton prénom"
              value={formData.firstName}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <div className={styles.inputWrapper}>
            <span className={styles.inputIcon}>📧</span>
            <input
              type="email"
              name="email"
              placeholder="Ton adresse e-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.formInput}
            />
          </div>
        </div>

        <button
          type="submit"
          className={`btn btn-primary ${styles.submitBtn} ${isSubmitting ? styles.submitting : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className={styles.spinner}></span>
              PARTICIPATION EN COURS...
            </>
          ) : (
            <>
              <span className={styles.btnIcon}>🚀</span>
              TENTE TA CHANCE
            </>
          )}
        </button>

        <div className={styles.formFooter}>
          <p className={styles.legalText}>
            En participant, tu acceptes le règlement du jeu-concours
          </p>
          <div className={styles.socialSharing}>
            <span>Partage aussi sur :</span>
            <div className={styles.socialButtons}>
              <a href="#" className={styles.socialBtn}>
                <span>📱</span> Instagram
              </a>
              <a href="#" className={styles.socialBtn}>
                <span>📘</span> Facebook
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.logoSection}>
              <div className={styles.logo}>
                <h2>I.D</h2>
                <div className={styles.logoSubtext}>Network</div>
              </div>
            </div>

            <div className={styles.headerCenter}>
              <div className={styles.headerActions}>
                <button className={styles.headerBtn}>
                  <span className={styles.headerBtnIcon}>🎫</span>
                  <span>Billets VIP</span>
                </button>

                <div className={styles.vsElement}>
                  <span className={styles.vsText}>VS</span>
                  <div className={styles.vsGlow}></div>
                </div>

                <button className={styles.headerBtnPrimary}>
                  <span className={styles.headerBtnIcon}>🏆</span>
                  <span>Concours</span>
                </button>
              </div>
            </div>

            <div className={styles.headerRight}>
              <Countdown />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGradient}></div>
          <div className={styles.basketballCourt}></div>
          <div className={styles.basketballElements}>
            <div className={styles.basketball}></div>
            <div className={styles.basketball}></div>
            <div className={styles.basketball}></div>
          </div>
          <div className={styles.floatingElements}>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
          </div>
        </div>

        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroMain}>
              <div className={styles.heroTitleSection}>
                <div className={styles.heroPreTitle}>
                  <span className={styles.eventYear}>2025</span>
                  <span className={styles.eventType}>BASKETBALL EVENT</span>
                </div>

                <h1 className={styles.heroTitle}>
                  <span className={styles.stormText}>STORM</span>
                </h1>

                <div className={styles.partnershipSection}>
                  <div className={styles.partnershipLabel}>Présenté par</div>
                  <div className={styles.partnershipBadge}>
                    <span className={styles.instadrink}>INSTADRINK</span>
                    <div className={styles.partnershipGlow}></div>
                  </div>
                </div>
              </div>

              <div className={styles.heroDescription}>
                <p className={styles.heroTagline}>
                  L&apos;événement basketball le plus attendu de l&apos;année
                </p>
                <p className={styles.heroSubtext}>
                  Pros vs Street • Créateurs vs Joueurs • Culture Urbaine • Shows Live
                </p>
              </div>

              <div className={styles.heroFeatures}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🏀</div>
                  <div className={styles.featureContent}>
                    <span className={styles.featureTitle}>BASKET</span>
                    <span className={styles.featureDesc}>Matchs épiques</span>
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🎵</div>
                  <div className={styles.featureContent}>
                    <span className={styles.featureTitle}>DJ SET</span>
                    <span className={styles.featureDesc}>Musique live</span>
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🍔</div>
                  <div className={styles.featureContent}>
                    <span className={styles.featureTitle}>FOODTRUCK</span>
                    <span className={styles.featureDesc}>Street food</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.heroSidebar}>
              <div className={styles.eventCard}>
                <div className={styles.eventCardHeader}>
                  <h3>Événement Gratuit</h3>
                  <div className={styles.eventDate}>14 JUIN 2025</div>
                </div>

                <div className={styles.eventStats}>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>100%</div>
                    <div className={styles.statLabel}>GRATUIT</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>10H</div>
                    <div className={styles.statLabel}>DE SHOW</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>3</div>
                    <div className={styles.statLabel}>PLACES VIP</div>
                  </div>
                </div>

                <div className={styles.eventLocation}>
                  <div className={styles.locationIcon}>📍</div>
                  <div className={styles.locationInfo}>
                    <span className={styles.locationName}>Palais des Sports</span>
                    <span className={styles.locationAddress}>Marcel Cerdan, Levallois</span>
                  </div>
                </div>

                <div className={styles.eventActions}>
                  <button className={styles.primaryActionBtn}>
                    <span className={styles.actionBtnIcon}>🎫</span>
                    <span>Réserver ma place</span>
                    <div className={styles.actionBtnGlow}></div>
                  </button>
                  <button className={styles.secondaryActionBtn}>
                    <span className={styles.actionBtnIcon}>🏆</span>
                    <span>Gagner 3 places VIP</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className={styles.videoSection}>
        <div className="container">
          <div className={styles.videoContent}>
            <div className={styles.videoContainer}>
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/M7kxjLMUw5k?start=1"
                  title="STORM 2024 - Highlights"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.videoIframe}
                ></iframe>
              </div>
            </div>
            <div className={styles.videoDescription}>
              <h2 className={styles.videoTitle}>
                Quand le streetball rencontre le basketball professionnel
              </h2>
              <div className={styles.videoText}>
                <p>
                  Plongez dans l&apos;effervescence de STORM, un tournoi où la{' '}
                  <span className={styles.highlight}>diversité des talents</span> illumine chaque match !
                </p>
                <p>
                  Des <span className={styles.highlight}>professionnels</span> chevronnés aux{' '}
                  <span className={styles.highlight}>streetballers</span> passionnés en passant par les{' '}
                  <span className={styles.highlight}>jeunes espoirs</span> pleins de promesses, chaque rencontre promet un spectacle captivant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contest Section */}
      <section className={styles.contest}>
        <div className={styles.contestBackground}>
          <div className={styles.contestPattern}></div>
        </div>
        <div className="container">
          <div className={styles.contestContent}>
            <div className={styles.contestInfoSection}>
              <div className={styles.contestBadge}>
                <span className={styles.contestBadgeText}>JEU CONCOURS</span>
              </div>
              <div className={styles.contestIcon}>
                <div className={styles.giftBox}>
                  <div className={styles.giftLid}></div>
                  <div className={styles.giftBase}></div>
                  <div className={styles.giftRibbon}></div>
                </div>
              </div>
              <h2 className={styles.contestTitle}>
                <span className={styles.contestTitleMain}>TENTE DE GAGNER</span>
                <span className={styles.contestTitleHighlight}>3 PLACES VIP</span>
              </h2>
              <div className={styles.contestDescription}>
                <p>Participe ici & sur Instagram</p>
                <div className={styles.socialProof}>
                  <span className={styles.participants}>+500 participants</span>
                  <div className={styles.socialIcons}>
                    <span className={styles.socialIcon}>📱</span>
                    <span className={styles.socialIcon}>📸</span>
                  </div>
                </div>
              </div>
              <div className={styles.prizeDetails}>
                <div className={styles.prizeItem}>
                  <span className={styles.prizeIcon}>🏀</span>
                  <span>Accès VIP Courtside</span>
                </div>
                <div className={styles.prizeItem}>
                  <span className={styles.prizeIcon}>🍽️</span>
                  <span>Buffet inclus</span>
                </div>
                <div className={styles.prizeItem}>
                  <span className={styles.prizeIcon}>⭐</span>
                  <span>Loges privées</span>
                </div>
              </div>
            </div>
            <div className={styles.contestFormSection}>
              <ContestForm />
            </div>
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
