import {Provider} from "react-redux";
import store from "@/state/store";
import {AppProps} from "next/app";
import {AuthProvider} from "@/context/auth/AuthContext";
import {ThemeProvider} from "@/context/theme/ThemeContext";
import "../styles/globals.css"; // Global styles

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};

export default MyApp;
