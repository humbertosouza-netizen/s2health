import Head from 'next/head';
import LandingPage from '../components/LandingPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>S2HEALTH - Cuidado que Conecta</title>
        <meta name="description" content="Plataforma de saúde corporativa que cuida da sua equipe com simplicidade. Telemedicina 24h, relatórios inteligentes e modelo com cashback." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://s2health.com/" />
        <meta property="og:title" content="S2HEALTH - Cuidado que Conecta" />
        <meta property="og:description" content="Às vezes, quem falta ao trabalho não está doente. Só está cansado de não ser cuidado." />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://s2health.com/" />
        <meta property="twitter:title" content="S2HEALTH - Cuidado que Conecta" />
        <meta property="twitter:description" content="Às vezes, quem falta ao trabalho não está doente. Só está cansado de não ser cuidado." />
        <meta property="twitter:image" content="/og-image.jpg" />
      </Head>
      
      <LandingPage />
    </>
  );
} 