'use client'
import dynamic from 'next/dynamic'

// Kjo e detyron hartën të ngarkohet vetëm në browser
const MapWithNoSSR = dynamic(() => import('../components/maps'), {
  ssr: false,
  loading: () => <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Duke ngarkuar hartën...</div>
})

export default function Home() {
  return (
    <main>
      <MapWithNoSSR />
    </main>
  )
}

'use client'
import dynamic from 'next/dynamic'

// Kjo e detyron hartën të ngarkohet vetëm në browser
const MapWithNoSSR = dynamic(() => import('../components/maps'), {
  ssr: false,
  loading: () => <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Duke ngarkuar hartën...</div>
})

export default function Home() {
  return (
    <main>
      <MapWithNoSSR />
    </main>
  )
}

