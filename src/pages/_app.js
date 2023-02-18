import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import '../styles/owl.carousel.min.css'
import '../styles/owl.theme.default.min.css'
import '../styles/unicons.css'
import '../styles/tooplate-style.css'
import Head from 'next/head'
import Script from 'next/script'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Tongla site :)</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content="Tongla site :)"/>
                <meta name="author" content="Thanawat Talabtong"/>
            </Head>
            <Script src="js/jquery-3.3.1.min.js"/>
            <Script src="js/popper.min.js"/>
            <Script src="js/bootstrap.min.js"/>
            <Script src="js/Headroom.js"/>
            <Script src="js/jQuery.headroom.js"/>
            <Script src="js/owl.carousel.min.js"/>
            <Script src="js/smoothscroll.js"/>
            <Script src="js/custom.js"/>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}