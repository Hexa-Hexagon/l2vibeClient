import React, {useState} from "react";
import classes from "./createNewSite.module.scss";
import { createServer } from "../../api";


const CreateNewSite = (props) => {


    const [status, setStatus] = useState("King VIP30");
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState({});
    const [difficulty, setDifficulty] = useState();
    const [difficultyError, setDifficultyError] = useState({});
    const [version, setVersion] = useState("");
    const [versionError, setVersionError] = useState({});
    const [date, setDate] = useState("");
    const [dateError, setDateError] = useState({});
    const [isAction, setIsAction] = useState(false);
    const [isActionStyle1, setIsActionStyle1] = useState({});
    let [isActionStyle2, setIsActionStyle2] = useState({
        backgroundColor: "#8CABFF",
        color: "#35155D"
    });

    async function post() {
        if (name && difficulty && version && date) {
            await createServer({
                serverName: name,
                status: (status === "King VIP30" || status === "King VIP45" || status === "King VIP60") ? "King VIP" : status,
                difficulty: difficulty,
                version: version,
                dateOfStartingServer: Date.parse(date),
                dateOfEndingContract: (status === "King VIP30" || status === "Super VIP" || status === "Premium") ? new Date().setDate(
                    (new Date().getDate() + 30)) : (status === "King VIP45") ? new Date().setDate(
                    (new Date().getDate() + 45)) : (status === "King VIP60") ? new Date().setDate(
                    (new Date().getDate() + 60)) : new Date().setDate((new Date().getDate() + 15)),
                isAction: isAction
            });
            // props.update();
        } else {
            if (!name) {
                setNameError({
                    border: "3px solid #660000"
                });
            }
            if (!difficulty) {
                setDifficultyError({
                    border: "3px solid #660000"
                });
            }
            if (!version) {
                setVersionError({
                    border: "3px solid #660000"
                });
            }
            if (!date) {
                setDateError({

                    border: "3px solid #660000"
                });
            }
        }
    }

    return (
        <div className={classes.form}>
            <div className={classes.createForm}>
                <select className={classes.select} value={status}
                        onChange={e => setStatus(e.target.value)}>
                    <option value={"King VIP30"}>King VIP30</option>
                    <option value={"King VIP45"}>King VIP45</option>
                    <option value={"King VIP60"}>King VIP60</option>
                    <option value={"Super VIP"}>Super VIP</option>
                    <option value={"VIP"}>VIP</option>
                    <option value={"Premium"}>Premium</option>
                    <option value={"Standart"}>Standart</option>
                </select>
                <input className={classes.input} type="text" style={nameError} value={name}
                       onChange={e => {
                           setName(e.target.value);
                           setNameError({});
                       }} placeholder="Имя сайта"/>
                <input className={classes.input} type="text" style={difficultyError}
                       value={difficulty} onChange={e => {
                    setDifficulty(e.target.value);
                    setDifficultyError({});
                }} placeholder="Сложность"/>
                <input className={classes.input} type="text" style={versionError} value={version}
                       onChange={e => {
                           setVersion(e.target.value);
                           setVersionError({});
                       }} placeholder="Версия"/>
                <input className={classes.input} type="date" style={dateError} value={date}
                       onChange={e => {
                           setDate(e.target.value);
                           setDateError({});
                       }} placeholder="Дата"/>
                <div className={classes.isAction}>
                    <input type="button" style={isActionStyle1} disabled={isAction} onClick={() => {
                        setIsAction(true);
                        setIsActionStyle1(isActionStyle2);
                        setIsActionStyle2({});
                    }} value={"Акция"} className={classes.action}/>
                    <input type="button" style={isActionStyle2} disabled={!isAction}
                           onClick={() => {
                               setIsAction(false);
                               setIsActionStyle2(isActionStyle1);
                               setIsActionStyle1({});
                           }} value={"Нету акции"} className={classes.action}/>
                </div>
                <input type="submit" onClick={() => {
                    post();
                    setName("");
                    setDifficulty(0);
                    setVersion("");
                    setDate("");
                }} value={""} className={classes.create}/>
            </div>
            
        </div>
    );
};

export default CreateNewSite;