import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { HeaderLink } from '../components/layout/ui/HeaderLink'
import { Footer } from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-screen-md mx-auto">
      <Head>
        <title>Johan Eliasson</title>
      </Head>
      <div className="flex space-x-6 my-12">
        <HeaderLink href="/">Home</HeaderLink>
        <HeaderLink href="/blog">Blog</HeaderLink>
        <HeaderLink href="/books">Books</HeaderLink>
      </div>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
