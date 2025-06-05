'use client';

import Link from 'next/link';
import styles from './confirmation.module.css';

export default function ConfirmationPage() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.confirmationWrapper}>
                    <div className={styles.checkIcon}>✅</div>

                    <h1 className={styles.title}>Réservation confirmée !</h1>

                    <p className={styles.message}>
                        Votre demande de réservation a été transmise avec succès.
                        Vous pouvez maintenant finaliser votre réservation en cliquant sur le lien ci-dessous.
                    </p>

                    <div className={styles.linkSection}>
                        <h2 className={styles.linkTitle}>Finaliser votre réservation :</h2>
                        <a
                            href="https://www.idnetwork.io/events/book/ELLPIQVntg1V4d02FUBN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.reservationBtn}
                        >
                            🎫 Accéder à la réservation
                        </a>
                    </div>

                    <div className={styles.infoBox}>
                        <h3 className={styles.infoTitle}>Informations importantes :</h3>
                        <ul className={styles.infoList}>
                            <li>📅 Date : Samedi 14 juin 2025</li>
                            <li>⏰ Horaire : 11h00 - 21h30</li>
                            <li>📍 Lieu : Palais des Sports Marcel Cerdan, Levallois-Perret</li>
                            <li>🎯 Événement 100% gratuit</li>
                        </ul>
                    </div>

                    <Link href="/" className={styles.backBtn}>
                        ← Retour à l'accueil
                    </Link>
                </div>
            </div>
        </div>
    );
} 