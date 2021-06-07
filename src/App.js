
import './App.css';
import {FaTwitter} from "react-icons/fa";
import {FaEnvelopeOpenText} from "react-icons/fa";
import {FaAsterisk} from "react-icons/fa";
import {FaCloudMoonRain} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
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
     <form><div id ="box"> 
       <input type ="text" id="search" placeholder="Arama" > 
         </input>
       </div></form>
      </div>

      <div class="kutu1">
        <div class="dockleft">
        <ul className="menu2">
        <li><span>Gündem</span></li>
        <li><span>Magazin</span></li>
        <li>
            <span>Spor</span>
            <ul>
                <li><span>futbol</span></li>
                <li><span>basketbol</span></li>
                <li><span>voleybol</span></li>
                <li><span>tenis</span></li>
               
            </ul>
            </li>
            <li><span>Burçlar</span></li>
   
        </ul>
        </div>
        <div class="kutu2">
        <div class="error">
        <h1 className="deneme">error</h1>
        </div>
        <div class="content">
        <ul className ="yuvarlak">
          <li><span><FaTwitter /> </span>
            <ul>
              <li><span><FaEnvelopeOpenText/></span></li>
               <li><span><FaAsterisk/></span></li>
                <li><span><FaCloudMoonRain></FaCloudMoonRain></span></li>
          </ul>
          
          </li>
          </ul>

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
