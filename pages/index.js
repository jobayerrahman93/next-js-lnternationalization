import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();
  const { t } = useTranslation('home');
  return (
   <>
   <div className='container d-flex justify-content-center mt-5'>
      <h1>{t('title')}</h1>
   </div>
   
   
   </>
  )
}


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home','about','blog'])),
      
    },
  };
}