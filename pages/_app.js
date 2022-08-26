import 'bootstrap/dist/css/bootstrap.min.css';
import { appWithTranslation } from 'next-i18next';
import Layout from '../components/Layout/Layout.jsx';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return(

<>
<Layout>
         <Component {...pageProps} />
  </Layout>
</>
  ) 
}

export default appWithTranslation(MyApp)
