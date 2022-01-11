import DarkResponsiveNavbar from './components/DarkResponsiveNavbarComponent';
import RouterProvider from './components/RouterComponent.js';
import AlertOnTop from './components/AlertOnTop'
function App() {
  return (
    <div>
      <AlertOnTop></AlertOnTop>
      <DarkResponsiveNavbar></DarkResponsiveNavbar>
      <RouterProvider></RouterProvider>
    </div>
  );
}

export default App;
