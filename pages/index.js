import Hed from '@components/Hed'
import Header from '@components/Header'
import Main from '@components/Main'
import Footer from '@components/Footer'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = () => {
  const { t } = useTranslation('common')
  return (
    <div className="container">
      <Hed 
        title={t('title')} 
        googleApiKey={process.env.googleApiKey}
      />
      <Header 
        title={t('title')} 
        subtitle={t('subtitle')} 
      />
      <Main />
      <Footer
        title={t('title')} 
        twitter={t('twitter')}
      />
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})

export default Home