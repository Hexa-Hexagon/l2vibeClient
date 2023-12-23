import React, {useState} from "react";
import classes from "../../app.module.scss";
import inputClass from "../createNewSite/createNewSite.module.scss";
import buttonClass from "../editSite/editSite.module.scss";
import CreateNewSite from "../createNewSite/CreateNewSite";
import Edit from "../editSite/EditSite";
import BannerEdit from "../bannerEdit/BannerEdit";
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditorState from "draft-js/lib/EditorState";
import accept from "../../images/acccept.png";
import EditServer from "../editServer/EditServer";
import CreateStatements from "../textEditor/CreateStatements";
import {Link, Route, Routes} from "react-router-dom";
import Statements from "../statements/Statements";

const EditBlockForm = ({...props}) => {


    const removeKingVip = (site) => {
        props.setKingVip(props.kingVip.filter(s => s._id !== site._id));
    };

    const [createActive, setCreateActive] = useState(false);

    return (
        <div className={classes.editBlockFormAndCreateNewSite}>

            <CreateNewSite/>
            <div className={classes.editBlockForm}>
                {/*<EditServer*/}
                {/*    removeKingVip={removeKingVip}*/}
                {/*    removeSuperVip={removeSuperVip}*/}
                {/*    removeVip={removeVip}*/}
                {/*    removePremium={removePremium}*/}
                {/*    removeStandart={removeStandart}*/}
                {/*    kingVip={props.kingVip}*/}
                {/*    superVip={props.superVip}*/}
                {/*    vip={props.vip}*/}
                {/*    premium={props.premium}*/}
                {/*    standart={props.standart}*/}
                {/*    banners={props.banners}*/}
                {/*/>*/}
                <Statements articles={props.articles} createActive={createActive} setCreateActive={setCreateActive}/>
            </div>
        </div>

    );
};

export default EditBlockForm;