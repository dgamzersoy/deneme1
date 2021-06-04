
import './App.css';


function App() {
  return (
    <div>
      <div class="header">
      <ul className="menu">
        <li><span>Anasayfa</span></li>
        <li><span>Hakkında</span></li>
        <li>
            <span>Dersler</span>
            <ul>
                <li><span>php</span></li>
                <li><span>css</span></li>
                <li><span>html</span></li>
                <li><span>javascript</span></li>
                <li><span>c#</span></li>
                <li><span>c++</span></li>
            </ul>
        </li>
        <li><span>Referanslar</span></li>
        <li><span>Ödüller</span></li>
        <li><span>İletişim</span>
        <ul>
                <li><span>Adres</span></li>
                <li><span>Telefon</span></li>
                <li><span>Email</span></li>
                
            </ul></li>
       
        <li><span>Konuşulanlar</span></li>
        <li><span>Hava Durumu</span></li>
    </ul>
        
      </div>
      <div class="path">
      <p><i>Açıklamalar Gelecek</i></p>
      </div>
    
      <div class="docktop">
      <h1>docktop</h1>
      </div>

      <div class="kutu1">
        <div class="dockleft">
        <h1>dockleft</h1>
        </div>
        <div class="kutu2">
        <div class="error">
        <h1>error</h1>
        </div>
        <div class="content">
        <h1>content</h1>
        </div>
        </div>
        <div class="dockright">
        <h1>dockright</h1>
        </div>
      </div>

      <div class="dockbottom">
      <h1>dockbottom</h1>
      </div>
      <div class="footer">
      <p>Bize Ulaşın</p>
      </div>
  </div>
  );
}

export default App;
