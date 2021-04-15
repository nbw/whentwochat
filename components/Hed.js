import Head from 'next/head'
import * as t from '../public/locales/en/common'

export default function Hed({googleApiKey}) {
  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
      <title>{t["title"]}</title>
      <meta name="title" content={t["title"]}></meta>
      <meta name="description" content={t["subtitle"]} ></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://whentochat.co/"></meta>
      <meta property="og:title" content={t["title"]}></meta>
      <meta property="og:description" content={t["subtitle"]}></meta>
      <meta property="og:image" content="https://whentochat.co/banner.png"></meta>
      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:url" content="https://whentochat.co/"></meta>
      <meta property="twitter:title" content={t["title"]}></meta>
      <meta property="twitter:description" content={t["subtitle"]}></meta>
      <meta property="twitter:image" content="https://whentochat.co/banner.png"></meta>
      <meta name="keywords" content="time zone, schedule, when to chat, whentochat, time overlap, tool"></meta>
      <link rel="icon" href="/favicon.ico" />
      { googleApiKey &&
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places`}
          async
          defer
        />
      }
    </Head>
  )
}
