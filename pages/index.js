import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation('home');
  return (
   <>
   <Container>
      <h1>{t('title')}</h1>
   </Container>
   
   
   </>
  )
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
}