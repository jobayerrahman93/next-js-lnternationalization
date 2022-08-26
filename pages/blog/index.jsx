import { useTranslation } from 'next-i18next';
import React from 'react';
const Blog = () => {
    const { t } = useTranslation('blog');
    return (
        <div className='container d-flex justify-content-center mt-5'>
            <h1>{t('title')}</h1>
        </div>
    );
};

export default Blog;

