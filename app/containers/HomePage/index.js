/* Dlazdice a nastavení
 All of the code created by Pavel S. Rest of the repository is taken from boilerplate.
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios'

// Import  styles 
import "../../styles.css";

// Import components 
import TableSetting from '../../components/TableSetting'
import DlazdiceLayout from '../../components/DlazdiceLayout';
import Modal from '../../components/Modal'
import TilesIcon from '../../components/TilesIcon'
import { PlusIcon, CloseIcon } from './icons/svgicons';

export default function HomePage() {

  const [dlazdice, setDlazdice] = useState([])
  const [visible, setVisible] = useState(false)
  const [layoutStyle, setLayoutStyle] = useState("")
  const [extraText, setExtraText] = useState("")
  const [mainText, setMainText] = useState("")
  const [isPending, setIsPending] = useState(false)


  useEffect(() => {
    /* GET Request for data - JSON server as a mock server */
    axios.get("http://localhost:3001/dlazdice").then(response => {
      setDlazdice(response.data)
    }).then(
      axios.get("http://localhost:3001/texts").then(response => {
        /* after fetching dlazdice data, we fetch text an dlayout */
        let data = response.data[0][0]
        setExtraText(data.extraText)
        setMainText(data.mainText)
        setLayoutStyle(data.layoutStyle)
      })
    )
  },[])

  const handleAddNew = () => {
    // ID Would be assigned by DB

    let randId = Math.floor(Math.random() * 9999)
    let newDlazdice = {"id": randId, "order": dlazdice.length, "title": "New item", "link": "https://picsum.photos/300", "color": "#407cff" }
    setDlazdice(dlazdice.concat(newDlazdice))

    // after the add action, save it to the server, because we are using PUT, and that can not create resources.
        setIsPending(true)
    axios.post("http://localhost:3001/dlazdice", newDlazdice)
    .then(() => { 
      setIsPending(false)
    })

  }
  /* Maybe we do not need this? Instead we should se data based on posted form data as a whole. */
  const handleRemoveDlazdice = (id) => {
    //console.log("removing?", id)
    setIsPending(true)
    let newDlazdices = dlazdice.filter(d => d.id !== id)
    setDlazdice(newDlazdices)
    axios.delete(`http://localhost:3001/dlazdice/${id}`).then(setIsPending(false))
  }

  const toggleVisibility = () => {
    //console.log("changing visibility", visible)
    setVisible(!visible)
  }

  /* Function for layout change when select is changed. Change in layout is instant, we are not waiting for "submmit". Feature or bug? */
  const handleChangeLayout = (e) => {
    setLayoutStyle(e.target.value)
  }

  /* Functions for controling input fileds in table setting. We are instantly updating array of dlazdices */
  const handleChangeContent = (e, id) => {
    let toChange = dlazdice.find((d) => d.id === id)
    toChange.title = e.target.value
    setDlazdice(dlazdice.filter((d) => d.id !== id ).concat(toChange))
  }
  const handleChangeLink= (e, id) => {
    let toChange = dlazdice.find((d) => d.id === id)
    toChange.link = e.target.value
    setDlazdice(dlazdice.filter((d) => d.id !== id ).concat(toChange))
  }

  const handleSubmitSetting = (e) => {
    //console.log(dlazdice)
    setIsPending(true)
    e.preventDefault()
    let data = dlazdice

    /* In submit we make put request for each dlazdice, and we are waitng for it to complete. Then close the modal. */

    /* Update for texts in the headers */
    let textsToChange = [{"extraText": extraText, "mainText": mainText, "layoutStyle": layoutStyle}]
    axios.put(`http://localhost:3001/texts/0`, textsToChange).then(() => console.log("texts changed on server")).then(

      /* after texts, there is PUT for updating all dlazdices by one. Better solution would be chage structure on backend and send one PUT request*/
      dlazdice.map((d) => {
        axios.put(`http://localhost:3001/dlazdice/${d.id}`, d )
        .then(() => {
          //console.log(data)
          console.log("changed settings")
          setIsPending(false)
          toggleVisibility()
        })
        .catch((err) => {
          console.log(err)
        })
      })
    )
  }


  return (
    <main>
      <DlazdiceLayout dlazdice={dlazdice} layoutStyle={layoutStyle} extraText={extraText} mainText={mainText}/>

      {/* In modal, we are passing visible status, and function for toggle visibility (because we need to have closing btn in modal). Childrens are rendered by props.children in modal component */}  
      <Modal visible={visible} toggleVisibility={toggleVisibility}>
        <form className="settings" onSubmit={handleSubmitSetting}>

          <div className="settings__aside">
            <div className="top-bar ">
              <TilesIcon/>
              <br />
              General
            </div>
            <hr className="mt-0 mb-3 under-general"/>

            <label htmlFor="display-style" className="d-block mb-1">Display</label>
            <select onChange={handleChangeLayout} name="display-style" id="display-style-select" value={layoutStyle} className="w-80 form-select">
              <option value="dlazdice__layout-25">4 Tiles (25-25-50)</option>
              <option value="dlazdice__layout-33">3 Tiles (33-33-33)</option>
            </select>
            <hr />
            <div className="other">TEXT</div>
            <label htmlFor="title">Title</label>
            {/*onChange={(e) => setExtraText(e.target.value)} -- we want user to submit this on server. This would be different in real-life ?*/}
            <input type="text" value={extraText} name="extraText" onChange={(e) => setExtraText(e.target.value)}/>
            <label htmlFor="subtitle">subtitle</label>
            <input type="text" value={mainText} onChange={(e) => setMainText(e.target.value)} name="mainText"/>
            <hr />
            { isPending && <button className="btn btn-block btn-primary w-100" type="submit" disabled>Updating...</button>}
            { !isPending && <button className="btn btn-block btn-primary w-100" type="submit"  onClick={handleSubmitSetting} >Update</button>}
          </div>

          <div className="settings__dlazdice">
            <div className="d-flex justify-end">
            <a onClick={toggleVisibility} className="pull-right-10"><CloseIcon/></a>
            </div>
            <div className="d-flex justify-between">
            <p>Tiles</p>
            <button onClick={handleAddNew} type="button" className="btn btn-primary btn-xs d-flex ">
              <PlusIcon/>
              <div>Add</div> </button>
            </div>
            <TableSetting 
              classes="table responsive dlazdice-table" dlazdice={dlazdice}  
              handleRemoveDlazdice={handleRemoveDlazdice} handleChangeContent={handleChangeContent} handleChangeLink={handleChangeLink}
            />
          </div>
        </form>
      </Modal>
    </main>
  );
}
