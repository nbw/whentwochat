import Head from 'next/head'

export default function Hed({title, googleApiKey}) {
  return (
    <Head>
      <title>{title}</title>
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
