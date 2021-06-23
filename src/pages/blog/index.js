import FreeProgrammes from '@/components/FreeProgrammes'
import { Layout } from '@/components/Layout'
import { directus } from '@/lib/directus'

export default function Blog({ freeProgrammes }) {
  return (
    <Layout>
      <FreeProgrammes programmes={freeProgrammes} />
    </Layout>
  )
}

export async function getStaticProps() {
  const { data: freeProgrammes } = await directus.items('programmes').readMany({
    fields: ['id', 'title', 'slug', 'featured_image'],
    filter: {
      status: { _eq: 'published' },
      is_free: { _eq: true }
    },
    limit: '3'
  })

  return { props: { freeProgrammes } }
}
