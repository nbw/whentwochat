import Head from 'next/head'
import * as t from '../public/locales/en/common'

export default function Hed({googleApiKey}) {
  return (
    <Head>
      <title>{t["title"]}</title>
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
