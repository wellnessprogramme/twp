import FreeProgrammes from '@/components/FreeProgrammes'
import Hero from '@/components/Hero'
import { Layout } from '@/components/Layout'
import MyStory from '@/components/MyStory'
import Programmes from '@/components/Programmes'
import { directus } from '@/lib/directus'

export default function IndexPage({ programmes, freeProgrammes }) {
  return (
    <Layout>
      <Hero />
      <MyStory />
      <Programmes programmes={programmes} />
      <FreeProgrammes programmes={freeProgrammes} />
    </Layout>
  )
}

export async function getStaticProps() {
  const { data: programmes } = await directus.items('programmes').readMany({
    fields: ['id', 'title', 'slug', 'featured_image', 'description'],
    filter: {
      status: { _eq: 'published' },
      is_free: { _eq: false }
    },
    limit: '3'
  })

  const { data: freeProgrammes } = await directus.items('programmes').readMany({
    fields: ['id', 'title', 'slug', 'featured_image'],
    filter: {
      status: { _eq: 'published' },
      is_free: { _eq: true }
    },
    limit: '3'
  })

  return { props: { programmes, freeProgrammes } }
}
