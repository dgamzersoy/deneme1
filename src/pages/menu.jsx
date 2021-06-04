
import './menu.css';

function Menu() {
  return (

    <ul className="menu">
        <li><span>Menu 1</span></li>
        <li><span>Menu 2</span></li>
        <li>
            <span>Menu 3</span>
            <ul>
                <li><span>Menu 1</span></li>
                <li><span>Menu 1</span></li>
                <li><span>Menu 1</span></li>
                <li><span>Menu 1</span></li>
                <li><span>Menu 1</span></li>
                <li><span>Menu 1</span></li>
            </ul>
        </li>
        <li><span>Menu 4</span></li>
        <li><span>Menu 5</span></li>
        <li><span>Menu 6</span></li>
    </ul>
   
  );
}

export default Menu;
