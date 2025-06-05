'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './reservation.module.css';

export default function ReservationPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        codePostal: '',
        email: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzV0RVre7r7q9KumxjOJuw77Wh21wtSO1GAW2eQP9YsdkcvsJKlsI0ZspcfLzPFOhFN/exec';

            // Approche robuste : FormData pour éviter les problèmes CORS
            const formDataToSend = new FormData();
            formDataToSend.append('prenom', formData.prenom);
            formDataToSend.append('nom', formData.nom);
            formDataToSend.append('codePostal', formData.codePostal);
            formDataToSend.append('email', formData.email);

            await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                body: formDataToSend,
                mode: 'no-cors' // Évite les problèmes CORS
            });

            // Avec no-cors, on ne peut pas lire la réponse, donc on assume le succès
            // et on redirige après un court délai
            setTimeout(() => {
                router.push('/confirmation');
            }, 1000);

        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors de l\'envoi du formulaire');
        } finally {
            setTimeout(() => {
                setIsSubmitting(false);
            }, 1000);
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.formWrapper}>
                    <h1 className={styles.title}>Billet gratuit STORM 2025</h1>
                    <p className={styles.subtitle}>Remplissez le formulaire pour réserver votre place</p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="prenom" className={styles.label}>Prénom *</label>
                            <input
                                type="text"
                                id="prenom"
                                name="prenom"
                                value={formData.prenom}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="Votre prénom"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="nom" className={styles.label}>Nom *</label>
                            <input
                                type="text"
                                id="nom"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="Votre nom"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="codePostal" className={styles.label}>Code Postal *</label>
                            <input
                                type="text"
                                id="codePostal"
                                name="codePostal"
                                value={formData.codePostal}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="75001"
                                pattern="[0-9]{5}"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Adresse Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="votre@email.com"
                            />
                        </div>

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Envoi en cours...' : 'Réserver ma place'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
} 