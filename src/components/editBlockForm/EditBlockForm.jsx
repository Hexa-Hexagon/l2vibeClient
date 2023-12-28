import React, {useState} from "react";
import classes from "../../app.module.scss";
import CreateNewSite from "../createNewSite/CreateNewSite";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditServer from "../editServer/EditServer";
import Statements from "../statements/Statements";
import EditStatements from "../editStatements/EditStatements";

const EditBlockForm = ({...props}) => {


    const removeKingVip = (site) => {
        props.setKingVip(props.kingVip.filter(s => s._id !== site._id));
    };

    const [createActive, setCreateActive] = useState(false);
    const [articleId, setArticleId] = useState("");
 
    return (
        <div className={classes.editBlockFormAndCreateNewSite}>

            { !props.statements ? <CreateNewSite update={props.update} /> : null}
            <div className={classes.editBlockForm}>
                {
                    props.statements !== true ?
                        <EditServer
                            removeKingVip={removeKingVip}
                            kingVip={props.kingVip}
                            superVip={props.superVip}
                            vip={props.vip}
                            premium={props.premium}
                            standart={props.standart}
                            banners={props.banners}
                            update={props.update}
                        />
                        :
                        <Statements
                            createActive={createActive}
                            setCreateActive={setCreateActive}
                            setEditStatements={props.setEditStatements}
                            editStatements={props.editStatements}
                            setArticleId={setArticleId}
                            update={props.update}
                        />
                }
                <EditStatements
                    setEditStatements={props.setEditStatements}
                    editStatements={props.editStatements}
                    id={articleId}
                />
            </div>
        </div>

    )
        ;
};

export default EditBlockForm;