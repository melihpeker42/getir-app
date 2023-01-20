import {useState,useEffect} from "react";
import {IoIosArrowDown} from "react-icons/io"
import {Collapse} from 'react-collapse';
import { useWindowWidth } from "@react-hook/window-size";

export default function Menu({ title, items }) {
  const windowWidth = useWindowWidth()
  const [isOpen,setisOpen]= useState(true);

  const toggleCollapse= () => {
    if(windowWidth < 800){
      setisOpen(!isOpen)
    }
  }

  useEffect(() => {
    if(isOpen && windowWidth < 800){
      setisOpen(false)
    }
    if(!isOpen && windowWidth > 800){
      setisOpen(true)
    }
    console.log(isOpen, "isopen")
  },[windowWidth])


  return (
    <div >
      <section>
        <nav className="footer-img">
        <h6 className="getir-down-text">{title}
        <button className="arrow-footer" onClick={toggleCollapse}>
          <span >
          <IoIosArrowDown className={isOpen ? "test": ""}size={15}/> 
          </span> 
          </button>
        </h6>
        <Collapse  isOpened={isOpen}>
          <nav>
            <ul className="ul-text">
              {items.map((item,key)  => (
              <li key={key}>
                <a className="items-text" href="#">
                  {item.title}
                  
                </a>
              </li>
              ))}
            </ul>
          </nav>
          </Collapse>
        </nav>
      </section>
    </div>
  );
}
