import React from "react";

export default function Menu({ title, items }) {
  return (
    <div>
      <section>
        <nav className="footer-img">
        <h6 className="getir-down-text">{title}</h6>
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
        </nav>
      </section>
    </div>
  );
}
