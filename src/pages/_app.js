import '../styles/globals.css'
import '../styles/owl.carousel.min.css'
import '../styles/owl.theme.default.min.css'
import '../styles/unicons.css'
import '../styles/tooplate-style.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'


export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Tongla site :)</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content="Tongla site"/>
                <meta name="author" content="Thanawat Talabtong"/>   
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/> 
                <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" type="text/javascript"/><script/>
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
            <Script id="bootstrap-cdn" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
            <Script src="/js/jQuery.headroom.js"/>
            <Script src="/js/popper.min.js"/>
            <Script src="/js/Headroom.js"/>
            <Script src="/js/owl.carousel.min.js"/>
            <Script src="/js/smoothscroll.js"/>
            <Script src="/js/custom.js"/>
        </>
    )
}