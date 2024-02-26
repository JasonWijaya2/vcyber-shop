import Layout from "@/components/Layout"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import localFont from 'next/font/local'
import { Provider } from 'react-redux'
import { store, persistor } from "@/redux/store"
import { PersistGate } from 'redux-persist/integration/react'
import { SessionProvider } from "next-auth/react"

const myFont = localFont({ src: '../public/assets/BlenderProBook.ttf' })

export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return(
    <Provider store={store}>
      <SessionProvider session={session}>
        <PersistGate loading={"loading"} persistor={persistor}>
          <main className={`${myFont.className}`}> 
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
        </PersistGate>
      </SessionProvider>
    </Provider>
  )
}
