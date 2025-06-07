import PageTransition from '../components/shared/PageTransition'
import HeroSection from '../components/home/HeroSection'

const Home = () => {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <HeroSection />
      </main>
    </PageTransition>
  )
}

export default Home