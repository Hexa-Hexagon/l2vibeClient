import React, {useState} from "react";
import classes from "./editSite.module.scss";
import { deleteServer, editServer } from "../../api";

const Edit = (props) => {
    async function del() {
        await deleteServer(props.site._id);
        props.update();
    }

    const [isEdit, setIsEdit] = useState(false);
    const [status, setStatus] = useState(props.site.status);
    const [name, setName] = useState(props.site.serverName);
    const [nameError, setNameError] = useState({});
    const [difficulty, setDifficulty] = useState(props.site.difficulty);
    const [difficultyError, setDifficultyError] = useState({});
    const [version, setVersion] = useState(props.site.version);
    const [versionError, setVersionError] = useState({});
    const [date, setDate] = useState(props.site.dateOfStartingServer.split('T')[0]);
    const [dateError, setDateError] = useState({});
    const [isAction, setIsAction] = useState(props.site.isAction);
    const [isActionStyle1, setIsActionStyle1] = useState(isAction ? {
        backgroundColor: "#8CABFF",
        color: "#35155D"
    } : {});
    let [isActionStyle2, setIsActionStyle2] = useState(!isAction ? {
        backgroundColor: "#8CABFF",
        color: "#35155D"
    } : {});

    async function update() {
        if (name && difficulty && version && date) {
            await editServer({
                serverName: name,
                status: (status === "King VIP30" || status === "King VIP45" || status === "King VIP60") ? "King VIP" : status,
                difficulty: difficulty,
                version: version,
                dateOfStartingServer: date,
                dateOfEndingContract: props.site.dateOfEndingContract
            }, props.site._id);

            setName("");
            setDifficulty(0);
            setVersion("");
            setDate("");
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
        <div className={classes.allEditForm}>
            {isEdit ?
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
                    <input className={classes.input} type="text" style={versionError}
                           value={version} onChange={e => {
                        setVersion(e.target.value);
                        setVersionError({});
                    }} placeholder="Версия"/>
                    <input className={classes.input} type="date" style={dateError} value={date}
                           onChange={e => {
                               setDate(e.target.value);
                               setDateError({});
                           }} placeholder="Дата"/>
                    <div className={classes.isAction}>
                        <input type="button" style={isActionStyle1} disabled={isAction}
                               onClick={() => {
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
                    <div className={classes.edit}>
                        <button className={classes.accept} onClick={() => {
                            setIsEdit(!isEdit);
                            update();
                        }} value={""}/>
                        <button className={classes.decline} onClick={() => setIsEdit(!isEdit)}
                                value=""/>
                    </div>
                </div>
                :
                <div className={classes.site}>
                    <div className={classes.form}>
                        <div className={classes.triangleUp}/>
                        <div className={classes.center}>
                            {props.site.status === "King VIP" ? <div
                                className={classes.imageStatusKingVip}/> : props.site.status === "Super VIP" ?
                                <div
                                    className={classes.imageStatusSuperVip}/> : props.site.status === "VIP" ?
                                    <div className={classes.imageStatusVip}/> :
                                    <div className={classes.imageStatusPremiumStandart}/>}
                            <p className={classes.nameSite}>{String(props.site.serverName.split("//")[1]).split('.')[0]}</p>
                            <p className={classes.difficulty}>x{props.site.difficulty}</p>
                            <p className={classes.version}>{props.site.version}</p>
                            <p className={classes.date}>{props.site.dateOfStartingServer.split('T')[0]}</p>
                        </div>
                        <div className={classes.triangleDown}/>
                    </div>
                    <div className={classes.delEdit}>
                        <button className={classes.delete} value={""} onClick={() => {
                            del();
                        }}/>
                        <button onClick={() => setIsEdit(!isEdit)} className={classes.editButton}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default Edit;


/*
 */