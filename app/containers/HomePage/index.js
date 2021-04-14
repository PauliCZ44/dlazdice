/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';

// Import sass styles 
import "../../styles.css";

export default function HomePage() {
  return (
    <main>
      <h6 className="extra-text"> EXTRA TEXT </h6>
      <h3 className="get-inspired"> Get Inspired </h3>
      <div className="dlazdice__layout-33">
        <div className="dlazdice__box"></div>
        <div className="dlazdice__box"></div>
        <div className="dlazdice__box"></div>
        <div className="dlazdice__box"></div>
        <div className="dlazdice__box"></div>
        <div className="dlazdice__box"></div>
      </div>
      <h6 className="extra-text"> EXTRA TEXT </h6>
      <h3 className="get-inspired"> Get Inspired </h3>
      <div className="dlazdice__layout-25">
        <div className="dlazdice__box">Some content</div>
        <div className="dlazdice__box"></div>
        <div className="dlazdice__box span-2"></div>
        <div className="dlazdice__box span-2"></div>
        <div className="dlazdice__box"></div>
        <div className="dlazdice__box"></div>
      </div>

      <div className="settings-icon">

     </div>

      <section className="settings">

        <aside>
          <div className="top-bar">
          IKONA - TILES <br/>
          General
          </div>
          <label htmlFor="display-style">Display</label> 
          <select name="display-style" id="display-style-select">
            <option value="25-25-50">25-25-50</option>
            <option value="33-33-33">33-33-33</option>
          </select>
          <hr/>
          <div className="subsection-label">TEXT</div>
          <label htmlFor="title">Title</label>
          <input type="text"/>
          <label htmlFor="subtitle">subtitle</label>
          <input type="text"/>
          {/*Make as a component*/}
          <hr/>
          <button type="submit"> Update</button>
        </aside>

      </section>
      <footer>.</footer>
    </main>
  );
}
