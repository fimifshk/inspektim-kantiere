<<<<<<< HEAD
export const metadata = {
  title: 'Inspektim Kantiere',
  description: 'Sistemi GIS për Inspektimet',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sq">
      <head>
        {/* Kjo rregullon renditjen e hartës (TileLayer) */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
=======
export const metadata = {
  title: 'Inspektim Kantiere',
  description: 'Sistemi GIS për Inspektimet',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sq">
      <head>
        {/* Kjo rregullon renditjen e hartës (TileLayer) */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
>>>>>>> a5f1ea22 (instalo librarite e reja)
}