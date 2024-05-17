import { Store, persistor } from "@/Redux/store";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from 'notistack';

export default function App({ Component, pageProps }) {

  const queryClient=new QueryClient();
  return (
    
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
      <SnackbarProvider maxSnack={3}>
          <Component {...pageProps} />
        </SnackbarProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  )
}
