import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from "react";
const About = () => {
  const router = useRouter()
  const { t } = useTranslation('about');

  return (
    <div className='container d-flex justify-content-center mt-5'>
      <h1>{t('title')}</h1>
    </div>
  );
};

export default About;


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'about'])),

    },
  };
}