'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

// Composant Compte à rebours
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

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerContent}>
                    <div className={styles.logoSection}>
                        <div className={styles.logo}>
                            <Link
                                href="/"
                                className={styles.logoLink}
                            >
                                <Image
                                    src="/LOGO_INSTADRINK.webp"
                                    alt="INSTADRINK"
                                    width={85}
                                    height={60}
                                    className={styles.logoImage}
                                />
                            </Link>
                        </div>
                        <div className={styles.headerPartnerLogo}>
                            <a
                                href="https://www.adidas.fr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.logoLink}
                            >
                                <Image
                                    src="/images/partenaires/adidas.svg"
                                    alt="Adidas"
                                    width={85}
                                    height={60}
                                    className={styles.partnerLogoHeader}
                                    priority
                                />
                            </a>
                        </div>
                    </div>

                    <div className={styles.headerCenter}>
                        <div className={styles.headerActions}>
                            <button
                                className={styles.headerBtn}
                                onClick={() => window.location.href = '/reservation'}
                            >
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
    );
} 