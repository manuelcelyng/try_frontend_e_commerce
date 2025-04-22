import Layout from "./components/Layout";
import { DrawerProvider } from "./context/DrawerProvider";
import ProductosPage from "./pages/ProductosPage";
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (

    <><DrawerProvider>
      <Layout>
        <ProductosPage />
      </Layout>
    </DrawerProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored" /></>
  );
}
