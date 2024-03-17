import './App.css';

// Kapsayici Olarak Routes Paketini
// Alt Kisimlar Icin Route Paketini Kullaniyoruz
import { Routes, Route } from 'react-router-dom';
import GeneralForm from './components/GeneralForm';
import PortalForm from './components/PortalForm';

function App() {
  return (
    <div className="App">

      {/* Ana Kapsayici Olarak Routes Component i Icinde */}
      <Routes>

        {/* Alt Kisimlari Ise Route Componenti Icinde Yaziyoruz */}
        {/* Sayfa Ilk Acildiginda 
            path Ozelligi Ile Gidilecek Sayfayi Belirtiyoruz 
            element Ozelligi Ile Acilacak Sayfayi Component Olarak Belirtiyoruz*/}
        <Route path="/" element={<GeneralForm />} />

        {/* Sayfa Acildiktan Sonra 
            path Ozelligi Ile Gidilmesi Istenilen Sayfayi Belirtiyoruz 
            element Ozelligi Ile Acilacak Sayfayi Component Olarak Belirtiyoruz */}
        <Route path="/portal" element={<PortalForm />} />
      </Routes>
    </div>
  );
}

export default App;