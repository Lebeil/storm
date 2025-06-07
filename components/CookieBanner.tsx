'use client';

import { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Vérifier si l'utilisateur a déjà donné son consentement
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setShowBanner(false);
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div className={styles.cookieBanner}>
            <div className={styles.cookieContent}>
                <div className={styles.cookieText}>
                    <div className={styles.cookieIcon}>🍪</div>
                    <div className={styles.cookieMessage}>
                        <h3 className={styles.cookieTitle}>Cookies & Confidentialité</h3>
                        <p className={styles.cookieDescription}>
                            Nous utilisons des cookies pour améliorer votre expérience sur notre site.
                            En continuant, vous acceptez notre utilisation des cookies.
                        </p>
                    </div>
                </div>

                <div className={styles.cookieActions}>
                    <button
                        className={styles.cookieBtn + ' ' + styles.cookieAccept}
                        onClick={handleAccept}
                    >
                        ✓ Accepter
                    </button>
                    <button
                        className={styles.cookieBtn + ' ' + styles.cookieDecline}
                        onClick={handleDecline}
                    >
                        ✗ Refuser
                    </button>
                </div>
            </div>
        </div>
    );
} 