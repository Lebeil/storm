export default function PolitiqueConfidentialite() {
    return (
        <div style={{
            padding: '200px 20px 100px',
            maxWidth: '800px',
            margin: '0 auto',
            color: 'white',
            backgroundColor: '#07056a',
            minHeight: '100vh'
        }}>
            <h1 style={{
                fontSize: '2.5rem',
                marginBottom: '30px',
                color: '#ff7f50'
            }}>
                Politique de Confidentialité
            </h1>

            <div style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                <h2 style={{ color: '#61ea67', marginTop: '30px', marginBottom: '15px' }}>
                    Utilisation des Cookies
                </h2>
                <p>
                    Notre site utilise des cookies pour améliorer votre expérience utilisateur.
                    Les cookies nous permettent de :
                </p>
                <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
                    <li>Mémoriser vos préférences</li>
                    <li>Analyser le trafic du site</li>
                    <li>Personnaliser le contenu</li>
                    <li>Améliorer nos services</li>
                </ul>

                <h2 style={{ color: '#61ea67', marginTop: '30px', marginBottom: '15px' }}>
                    Types de Cookies
                </h2>
                <p>
                    <strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site.<br />
                    <strong>Cookies d&apos;analyse :</strong> Pour comprendre l&apos;utilisation du site.<br />
                    <strong>Cookies de préférence :</strong> Pour mémoriser vos choix.
                </p>

                <h2 style={{ color: '#61ea67', marginTop: '30px', marginBottom: '15px' }}>
                    Vos Droits
                </h2>
                <p>
                    Vous pouvez à tout moment modifier ou retirer votre consentement
                    en effaçant les cookies de votre navigateur ou en nous contactant.
                </p>

                <h2 style={{ color: '#61ea67', marginTop: '30px', marginBottom: '15px' }}>
                    Contact
                </h2>
                <p>
                    Pour toute question concernant cette politique de confidentialité,
                    vous pouvez nous contacter via le formulaire de contact du site.
                </p>
            </div>
        </div>
    );
} 