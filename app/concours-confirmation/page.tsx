import Link from 'next/link';
import styles from './concours-confirmation.module.css';

export default function ConcoursConfirmationPage() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.confirmationWrapper}>
                    <div className={styles.checkIcon}>🏆</div>

                    <h1 className={styles.title}>Participation confirmée !</h1>

                    <div className={styles.message}>
                        <p><strong>Merci pour votre participation au concours STORM 2025 !</strong></p>
                        <p>Votre candidature pour gagner <strong>3 places VIP</strong> a bien été enregistrée.</p>
                    </div>

                    <div className={styles.infoBox}>
                        <div className={styles.infoTitle}>📧 Notification par email</div>
                        <p>Si vous êtes sélectionné(e) comme gagnant(e), <strong>vous serez averti(e) par email</strong> à l&apos;adresse que vous avez fournie.</p>
                        <p>Le tirage au sort aura lieu <strong>le 13 juin 2025</strong>, quelques jours avant l&apos;événement.</p>
                    </div>

                    <div className={styles.prizeInfo}>
                        <h3>🎁 Lot à gagner :</h3>
                        <ul>
                            <li>🏀 <strong>3 places VIP Courtside</strong></li>
                            <li>🍽️ <strong>Accès au buffet VIP</strong></li>
                            <li>⭐ <strong>Loges privées avec vue privilégiée</strong></li>
                            <li>🎫 <strong>Accès backstage avec les joueurs</strong></li>
                        </ul>
                    </div>

                    <div className={styles.socialReminder}>
                        <p><strong>N&apos;oubliez pas :</strong> Partagez aussi sur Instagram pour doubler vos chances !</p>
                        <div className={styles.socialButtons}>
                            <a href="#" className={styles.socialBtn}>
                                📱 Partager sur Instagram
                            </a>
                            <a href="#" className={styles.socialBtn}>
                                📘 Partager sur Facebook
                            </a>
                        </div>
                    </div>

                    <Link href="/" className={styles.backBtn}>
                        ← Retour à l&apos;accueil
                    </Link>
                </div>
            </div>
        </div>
    );
} 