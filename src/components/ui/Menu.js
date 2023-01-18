import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
export default function Menu({ menu }) {
  console.log(menu, "items title")
  return (
    // <div>
    //   <section>
    //     <nav className="footer-img">
    //     <h6 className="getir-down-text">{title}</h6>
    //       <nav>
    //         <ul className="ul-text">
    //           {items.map((item,key)  => (
    //           <li key={key}>
    //             <a className="items-text" href="#">
    //               {item.title}
                  
    //             </a>
    //           </li>
    //           ))}
    //         </ul>
    //       </nav>
    //     </nav>
    //   </section>
    // </div>
  
    <Accordion>
            {
              menu.map((menu) => {
                return
                (<AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {menu.title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>)
              } )
            }
        </Accordion>
    );
}
