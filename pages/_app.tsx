import '../styles/globals.css'
import type {AppProps} from 'next/app'
import MenuProvider from "../context/menuContext";
import AuthProvider from "../context/authContext";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <MenuProvider>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </MenuProvider>
    )
}

export default MyApp
