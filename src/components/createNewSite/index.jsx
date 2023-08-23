import React, { useState } from 'react';
import api from '../../api';
import classes from './index.module.scss'


const CreateNewSite = (props) => {

   
    let [status, setStatus] = useState("King VIP30");
    let [name, setName] = useState("");
    let [nameError, setNameError] = useState({});
    let [difficulty, setDifficulty] = useState();
    let [difficultyError, setDifficultyError] = useState({});
    let [version, setVersion] = useState("");
    let [versionError, setVersionError] = useState({});
    let [date, setDate] = useState("");
    let [dateError, setDateError] = useState({});
    async function post(){
                if(name && difficulty && version && date){
                    await api.post('/', {
                        nameSite: name,   
                        status: (status==="King VIP30"||status==="King VIP45" || status === "King VIP60")?"King VIP":status,
                        difficulty: difficulty,
                        version: version,
                        dateOfStartingServer: date,
                        dateOfEndingContract: (status==="King VIP30" || status === "Super VIP" || status === "Premium") ? new Date().setDate((new Date().getDate()  + 30)) : (status === "King VIP45")?new Date().setDate((new Date().getDate()  + 45)):(status === "King VIP60")?new Date().setDate((new Date().getDate()  + 60)):new Date().setDate((new Date().getDate()  + 15))
                    });
            }
            else{
                if(!name){
                    setNameError({
                        border: "3px solid #660000"
                    })           
                }
                if(!difficulty){
                    setDifficultyError({
                        border: "3px solid #660000"
                    })
                }
                if(!version){
                    setVersionError({
                        border: "3px solid #660000"
                    })
                }
                if(!date){
                    setDateError({
                        
                    border: "3px solid #660000"
                    })
                }
            }      
    }

    return (
        <div className={classes.form}>
        <div className={classes.createForm}>
        <select className={classes.select} value={status} onChange={e=>setStatus(e.target.value)}>
            <option value={"King VIP30"}>King VIP30 </option>
            <option value={"King VIP45"}>King VIP45 </option>
            <option value={"King VIP60"}>King VIP60 </option>
            <option value={"Super VIP"}>Super VIP</option>
            <option value={"VIP"}>VIP</option>
            <option value={"Premium"} >Premium</option>
            <option value={"Standart"}>Standart</option>
        </select>
        <input className={classes.input} type="text" style={nameError} value={name} onChange={e => {setName(e.target.value); setNameError({})}} placeholder='Имя сайта'/>
        <input className={classes.input} type="number" style={difficultyError} value={difficulty} onChange={e=>{setDifficulty(e.target.value); setDifficultyError({})}} placeholder='Сложность' />
        <input className={classes.input} type="text" style={versionError} value={version} onChange={e=>{setVersion(e.target.value);setVersionError({})}} placeholder='Версия' />
        <input className={classes.input} type="date" style={dateError} value={date} onChange={e=>{setDate(e.target.value);setDateError({})}} placeholder='Дата' />
        <input type="submit" onClick={()=>{
            post(); 
            setName("");
            setDifficulty(0);
            setVersion("");
            setDate("");
            }} value={""} className={classes.create} />
            </div>
            <button className={classes.updateButton} onClick={()=>{props.addSite();setNameError({});setDifficultyError({});setVersionError({});setDateError({})}}  />
    </div>
    );
};

export default CreateNewSite;