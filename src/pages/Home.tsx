import Hero from '../components/home/Hero'
import EditorialStrip from '../components/home/EditorialStrip'
import FeaturedCollection from '../components/home/FeaturedCollection'
import FeaturedProject from '../components/home/FeaturedProject'
import Approach from '../components/home/Approach'
import PromoBanner from '../components/home/PromoBanner'
import JournalPreview from '../components/home/JournalPreview'

export default function Home() {
  return (
    <>
      <Hero />
      <EditorialStrip />
      <FeaturedCollection />
      <FeaturedProject />
      <Approach />
      <PromoBanner />
      <JournalPreview />
    </>
  )
}
