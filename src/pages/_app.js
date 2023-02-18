import '../styles/globals.css'
import '../styles/unicons.css'
import '../styles/tooplate-style.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'
import { useEffect } from 'react'


export default function MyApp({ Component, pageProps }) {

    useEffect(() => {
        window.$ = window.jQuery = require('jquery')
    }, [])

    return (
        <>
            <Head>
                <title>Tongla site :)</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content="Tongla site"/>
                <meta name="author" content="Thanawat Talabtong"/>   
                <link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/> 
                <link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/> 
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/> 
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
            <Script id="bootstrap-cdn" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"/>
            <Script src="/js/jQuery.headroom.js"/>
            <Script src="/js/popper.min.js"/>
            <Script src="/js/Headroom.js"/>
            <Script src="/js/smoothscroll.js"/>
            <Script src="/js/custom.js"/>
        </>
    )
}