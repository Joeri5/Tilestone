import '../styles/globals.css'
import type {AppProps} from 'next/app'
import MenuProvider from "../context/menuContext";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <MenuProvider>
            <Component {...pageProps} />
        </MenuProvider>
    )
}

export default MyApp
