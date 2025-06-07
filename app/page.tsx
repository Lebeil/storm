'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from "./page.module.css";



// Composant Formulaire de jeu concours amélioré
function ContestForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // URL de votre nouveau Google Apps Script pour le concours
      const CONTEST_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwGsC5hTfb_VwSpQ_a4hguFvOceWlhM9WOxXH-yQSkOnKghz0REghGx5UsTGjd0lY0r/exec';

      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('email', formData.email);

      await fetch(CONTEST_APPS_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      });

      // Redirection vers la page de confirmation du concours
      setTimeout(() => {
        window.location.href = '/concours-confirmation';
      }, 1000);

    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'envoi du formulaire');
      setIsSubmitting(false);
    }
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
  // Fonction pour scroller vers la section Contest
  const scrollToContest = () => {
    const contestSection = document.getElementById('contest-section');
    if (contestSection) {
      // Calculer la position avec offset pour la navbar
      const elementPosition = contestSection.offsetTop;
      const offsetPosition = elementPosition - 120; // 120px pour la navbar fixe

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Rich Snippet pour l'événement STORM 2025
  const eventStructuredData = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": "STORM 2025 - Tournoi Basketball",
    "description": "Événement basketball gratuit mêlant streetball et basketball professionnel. Confrontations inédites, shows, dotations Adidas, bonne musique et ambiance électrique.",
    "image": [
      "/images/stormf.jpg",
      "/images/lp.jpeg"
    ],
    "startDate": "2025-06-14T11:00:00+02:00",
    "endDate": "2025-06-14T21:30:00+02:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Palais des Sports Marcel Cerdan",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "141 Rue Danton",
        "addressLocality": "Levallois-Perret",
        "postalCode": "92300",
        "addressCountry": "FR"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "INSTADRINK",
      "url": "https://storm2025.com"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://storm2025.com/reservation",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-12-01T00:00:00+02:00"
    },
    "performer": [
      {
        "@type": "SportsTeam",
        "name": "Joueurs Professionnels"
      },
      {
        "@type": "SportsTeam",
        "name": "Streetballers"
      }
    ],
    "sport": "Basketball",
    "isAccessibleForFree": true
  };

  return (
    <div className={styles.page}>
      {/* Rich Snippet JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventStructuredData) }}
      />


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
                  <span className={styles.eventType}>BASKETBALL EVENT</span>
                </div>

                <h1 className={styles.heroTitle}>

                  <span className={styles.stormText}>STORM 2025</span>
                </h1>

                <div className={styles.partnershipSection}>
                  <div className={styles.partnershipLabel}>Présenté par</div>
                  <div className={styles.partnershipBadge}>
                    <span className={styles.instadrink}>ID NETWORK</span>
                    <div className={styles.partnershipGlow}></div>
                  </div>
                </div>
              </div>

              <div className={styles.heroDescription}>
                <p className={styles.heroTagline}>
                  STORM est exceptionnellement gratuit !
                </p>
                <p className={styles.heroSubtext}>
                  <br />
                  <span>
                    Des confrontations uniques : pros vs streetballers. Viens vivre une journée électrique entre hype, culture et basket. Des matchs de haut niveau, des shows, des cadeaux Adidas et une ambiance unique. Gagne ta place VIP et tente de repartir avec ton permis de conduire financé ! ⚡️
                  </span>
                  <br /><br />
                  <span>
                    Ramène ton meilleur outfit et vis l’événement à 100%. 🌪️
                  </span>
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
                  <h3>Tournoi basketball</h3>
                  <div className={styles.eventDate}>
                    <div className={styles.dateEpic}>
                      <div className={styles.dateFireEffect}>
                        <div className={styles.dateNeonContainer}>
                          <div className={styles.dateHorizontal}>
                            <div className={styles.dateMegaNumber}>14</div>
                            <div className={styles.dateMonthEpic}>JUIN</div>
                          </div>
                        </div>
                        <div className={styles.dateExplosionBanner}>
                          <span className={styles.bangLeft}>💥</span>
                          <span className={styles.dateUrgencyText}>DATE HISTORIQUE</span>
                          <span className={styles.bangRight}>💥</span>
                        </div>
                      </div>
                      <div className={styles.dateShockwave}></div>
                      <div className={styles.dateParticles}></div>
                    </div>
                  </div>
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
                  <button className={styles.primaryActionBtn} onClick={() => window.location.href = '/reservation'} >
                    <span className={styles.actionBtnIcon}>🎫</span>
                    <span>Réserver ma place</span>
                    <div className={styles.actionBtnGlow}></div>
                  </button>
                  <button
                    className={styles.secondaryActionBtn}
                    onClick={scrollToContest}
                  >
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

      {/* Partners Section */}
      <section className={styles.partners}>
        <div className="container">
          <h2 className={styles.sectionTitle}>PARTENAIRES</h2>
          <div className={styles.partnersGrid}>
            <div className={styles.partnerLogo}>
              <Image
                src="/images/partenaires/adidas.svg"
                alt="Adidas"
                width={180}
                height={80}
                className={styles.partnerLogoImage}
                priority
              />
            </div>
            <div className={styles.partnerLogo}>
              <Image
                src="/images/partenaires/unclebumpy.png"
                alt="UNCLE BUMPY"
                width={180}
                height={60}
                className={styles.partnerLogoImage}
              />
            </div>
            <div className={styles.partnerLogo}>
              <Image
                src="/LOGO_INSTADRINK.webp"
                alt="INSTA DRINK"
                width={180}
                height={60}
                className={styles.partnerLogoImage}
              />
            </div>
            <div className={styles.partnerLogo}>
              <Image
                src="/images/partenaires/storm-bllanc.png"
                alt="Storm"
                width={150}
                height={70}
                className={`${styles.partnerLogoImage} ${styles.stormLogo}`}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Adidas Section */}
      <section className={styles.adidasSection}>
        <div className="container">
          <div className={styles.adidasContent}>
            <div className={styles.adidasLeft}>

              <div className={styles.adidasMainContent}>
                <h3 className={styles.adidasMainTitle}>LE MEILLEUR DU BASKET FRANÇAIS</h3>
                <p className={styles.adidasMainSubtitle}>Découvre l&apos;élite du basket français à STORM !</p>

                <div className={styles.adidasDescription}>
                  <p className={styles.adidasSubtitle}>
                    Notre partenaire équipementier s&apos;assure que nos athlètes performent toujours au maximum de leur potentiel (et avec du drip).
                  </p>
                  <p>
                    Le seul événement où tu verras s&apos;affronter des <span className={styles.adidasHighlight}>joueurs de l&apos;Euroleague</span> face à des <span className={styles.adidasHighlight}>joueurs de streetball</span> dans une <span className={styles.adidasHighlight}>ambiance hip-hop électrique</span>!
                  </p>

                  <p>
                    Tu auras l&apos;opportunité de rencontrer tes <span className={styles.adidasHighlight}>influenceurs, artistes et athlètes préférés</span> et de passer une journée à leurs côtés grâce aux <span className={styles.adidasHighlight}>Places VIP</span>
                  </p>

                  <p>
                    Que tu viennes entre amis ou en famille, nous te garantissons <span className={styles.adidasHighlight}>une journée mémorable !</span>
                  </p>
                </div>

                <button
                  className={styles.adidasCtaBtn}
                  onClick={scrollToContest}
                >
                  <span className={styles.adidasCtaText}>PLACE VIP</span>
                </button>
              </div>
            </div>

            <div className={styles.adidasRight}>
              <div className={styles.adidasLogo}>
                <Image
                  src="/images/partenaires/adidas.svg"
                  alt="Adidas"
                  width={300}
                  height={150}
                  className={styles.adidasLogoImage}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Section */}
      <section className={styles.programmeSection}>
        <div className="container">
          <h2 className={styles.programmeTitle}>AU PROGRAMME</h2>

          <div className={styles.programmeGrid}>
            <div className={styles.programmeItem}>
              <div className={styles.programmeItemHeader}>
                <h3 className={styles.programmeItemTitle}>Concours de Dunks & 2v2</h3>
                <p className={styles.programmeItemSubtitle}>Énergie et show garantis !</p>
              </div>
            </div>

            <div className={styles.programmeItem}>
              <div className={styles.programmeItemHeader}>
                <h3 className={styles.programmeItemTitle}>Ambiance Hip-Hop & DJ Sets</h3>
                <p className={styles.programmeItemSubtitle}>Bangers toute la journée !</p>
              </div>
            </div>

            <div className={styles.programmeItem}>
              <div className={styles.programmeItemHeader}>
                <h3 className={styles.programmeItemTitle}>Food Court avec Uncle Bumpy</h3>
                <p className={styles.programmeItemSubtitle}>Recharge tes batteries avec de la French Soul Food (Waffle, Burger, Poulet) !</p>
              </div>
            </div>

            <div className={styles.programmeItem}>
              <div className={styles.programmeItemHeader}>
                <h3 className={styles.programmeItemTitle}>Gagne ton permis & des cadeaux Adidas</h3>
                <p className={styles.programmeItemSubtitle}>Tente ta chance pour repartir stylé !</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Image Section */}
      <section className={styles.fullScreenImageSection}>
        <div className={styles.fullScreenImageContainer}>
          <Image
            src="/images/stormf.jpg"
            alt="STORM 2025"
            fill
            style={{ objectFit: 'cover' }}
            className={styles.fullScreenImage}
            priority
          />
        </div>
      </section>

      {/* Uncle Bumpy Section */}
      <section className={styles.uncleBumpySection}>
        <div className="container">
          <div className={styles.uncleBumpyContent}>
            <h2 className={styles.uncleBumpyMainTitle}>RÉGALE TOI AVEC UNCLE BUMPY</h2>

            <div className={styles.uncleBumpyVideoContainer}>
              <div className={styles.uncleBumpyVideoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/mVpokazir9Q"
                  title="Uncle Bumpy - Street Food Louisiane"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.uncleBumpyVideoIframe}
                ></iframe>
              </div>
            </div>

            <div className={styles.uncleBumpyTextContent}>
              <h3 className={styles.uncleBumpySubTitle}>LA STREET FOOD INSPIRÉE DE LA LOUISIANE</h3>

              <div className={styles.uncleBumpyDescription}>
                <p>Tous leurs poulets sont frais et faits maison.</p>
                <p>
                  Chaque morceau est plongé dans une marinade secrète aux épices de Louisiane, puis pané et frit à la commande pour garantir un poulet fondant à cœur et une panure ultra croustillante au goût inimitable.
                </p>
                <p>
                  Le temps d&apos;une bouchée, embarquez pour le sud-est des États-Unis où les saveurs sont aussi puissantes que l&apos;ambiance des playgrounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contest Section */}
      <section id="contest-section" className={styles.contest}>
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
          <h2 className={styles.sectionTitle}>LES AVANTAGES ID NETWORK</h2>
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

      {/* TOUT SE PASSE ICI Section - Full width like your image */}
      <section className={styles.stormLocationFullSection}>

        {/* Carte Google Maps - Côté gauche large */}
        <div className={styles.stormMapSide}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10495.574985574986!2d2.2773187438236856!3d48.88674575328203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f82c7cbad69%3A0x93dce518a497097c!2s141%20Rue%20Danton%2C%2092300%20Levallois-Perret!5e0!3m2!1sfr!2sfr!4v1722266154275!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Palais des Sports Marcel Cerdan - Levallois-Perret"
          ></iframe>
        </div>

        {/* Panneau violet "TOUT SE PASSE ICI" - Côté droit */}
        <div className={styles.stormInfoSide}>

          <h1 className={styles.stormMainHeading}>
            TOUT SE<br />
            PASSE ICI !
          </h1>

          <div className={styles.stormVenueInfo}>
            <div className={styles.stormVenueLine}>
              <span className={styles.stormPinIcon}>📍</span>
              <span className={styles.stormVenueText}>Le gymnase : Palais des Sports Marcel Cerdan</span>
            </div>

            <div className={styles.stormDivider}>-</div>

            <div className={styles.stormAddressText}>
              141 Rue Danton, 92300 Levallois-Perret
            </div>
          </div>

          <div className={styles.stormEventInfo}>
            <div className={styles.stormEventItem}>
              <span className={styles.stormDateIcon}>📅</span>
              <span className={styles.stormEventText}>Date : samedi 14 juin 2025</span>
            </div>

            <div className={styles.stormEventItem}>
              <span className={styles.stormTimeIcon}>⏰</span>
              <span className={styles.stormEventText}>Horaire : 11h00 - 21H30</span>
            </div>
          </div>

        </div>

      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <h2 className={styles.faqTitle}>FAQ</h2>

          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Y a-t-il des restrictions d&apos;âge pour assister à l&apos;événement ?
              </h3>
              <p className={styles.faqAnswer}>
                Le tournoi est ouvert à tous les âges, mais veuillez noter que les enfants de <span className={styles.faqHighlight}>moins de 12 ans</span> doivent être <span className={styles.faqHighlight}>accompagnés d&apos;un adulte</span>.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Comment accéder au gymnase ?
              </h3>
              <p className={styles.faqAnswer}>
                C&apos;est très simple, il suffit de prendre le <span className={styles.faqHighlight}>Métro 3</span> et descendre à l&apos;arrêt <span className={styles.faqHighlight}>Pont de Levallois Bécon</span>, le gymnase se situe à 4 minutes à pieds de la station de Métro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <Image
                src="/LOGO_INSTADRINK.webp"
                alt="ID NETWORK"
                width={120}
                height={85}
                className={styles.footerLogoImage}
              />
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 All rights reserved</p>
            <div className={styles.footerLegal}>
              <a href="#">Mentions légales</a>
              <a href="/politique-confidentialite">Politique de confidentialité</a>
              <a href="/politique-confidentialite">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
