/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import dlazdicesServices from './services/dlazdicesServices'

// Import sass styles 
import "../../styles.css";

// Import components 
import { SettingsIcon } from "./icons/icons";
import DlazdiceInput from '../../components/DlazdiceInput';
import DlazdiceView from '../../components/DlazdiceView';

export default function HomePage() {

  const [dlazdice, setDlazdice] = useState([])

  
  useEffect(() => {
    axios.get("http://localhost:3001/dlazdice").then(response => {
      console.log(response)
      setDlazdice(response.data)
    })
  }, [])

  const handleAddNew = () => {
    let randId = Math.floor(Math.random() * 99999);
    let newDlazdice =  { "id": randId, "order":dlazdice.length, "title": "New item", "link": "Your link", "color":"#407cff"}
    setDlazdice(dlazdice.concat(newDlazdice))
    /* Make POST here */
  }

  const handleRemoveDlazdice = (id) => {
    console.log("removing?", id)
    let newDlazdices = dlazdice.filter(d => d.id !== id)
    setDlazdice(newDlazdices)
    /* Make DELETE here */
  }

  return (
    <main>
      <h6 className="extra-text"> EXTRA TEXT </h6>
      <h3 className="get-inspired"> Get Inspired </h3>
      <div className="dlazdice__layout-33">
        {dlazdice.map(d => {
          console.log(d);
          return (
          <DlazdiceView content={d.title} link={d.link} classes={"span-" + d.span} key={d.id}/>
          )
        })}
      </div>
      <h6 className="extra-text"> EXTRA TEXT </h6>
      <h3 className="get-inspired"> Get Inspired </h3>
      <div className="dlazdice__layout-25">
      {dlazdice.map(d => {
          /* For elements with order 2,3,8,9,14... make it span-2. Better would be using algorithm in if statement but doesnt work for me now*/
          let biggerElements = []
          for (let i = 0; i < 500; i++) {
            if (i % 3 === 0 && i % 2 !== 0) {
              biggerElements.push(i-1)
              biggerElements.push(i);
              }
            }  

           /* Pokud je pořadí dělitelné 3 a ne dvěma, nebo je to prvek za tímto, tak span=2 */ 
          let span
          if (biggerElements.includes(d.order)) {
            span="span-2"
          }

          return (
          <DlazdiceView content={d.order} link={d.link} classes={span} key={d.id}/>
          )
        })}
      </div>

      <div onClick={console.log("hide/shiw")} className="settings-icon">
        <SettingsIcon color="white"/>
     </div>

      <section className="settings">

        <div className="settings__aside">
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
          <hr/>
          <button className="btn btn-block" variant="contained" color="primary" type="submit"> Update</button>
        </div>

        <div className="settings__dlazdice">
          <button onClick={handleAddNew}>Add new dlazdice</button>
          {dlazdice.map(d => {
            return (
              <>
            <DlazdiceInput handleRemoveDlazdice={handleRemoveDlazdice} placeholder="Your name" content={d.title} link={d.link}  key={d.id} id={d.id}/>
            <span>{d.order}</span>
            </>
            )
          })}
          
        </div>

      </section>
      <footer>.</footer>
    </main>
  );
}
