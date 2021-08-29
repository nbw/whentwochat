import Hed from '@components/Hed'
import Header from '@components/Header'
import Main from '@components/Main'
import Footer from '@components/Footer'

const Home = () => {
  return (
    <div className="container">
      <Hed 
        googleApiKey={process.env.googleApiKey}
      />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home