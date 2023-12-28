import React, {useState} from "react";
import classes from "../../app.module.scss";
import CreateNewSite from "../createNewSite/CreateNewSite";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditServer from "../editServer/EditServer";
import Statements from "../statements/Statements";
import EditStatements from "../editStatements/EditStatements";

const EditBlockForm = ({...props}) => {

    const [createActive, setCreateActive] = useState(false);
    const [articleId, setArticleId] = useState("");
 
    return (
        <div className={classes.editBlockFormAndCreateNewSite}>

            { !props.statements ? <CreateNewSite update={props.update} /> : null}
            <div className={classes.editBlockForm}>
                {
                    props.statements !== true ?
                        <EditServer
                            kingVip={props.kingVip}
                            startingThisWeek={props.startingThisWeek}
                            selectLan={props.selectLan}
                            startingThisMonth={props.startingThisMonth}
                            startsLater={props.startsLater}
                            justOpened={props.justOpened}
                            started={props.started}
                            bonusStarted={props.bonusStarted}
                            banners={props.banners}
                            update={props.update}
                        />
                        :
                        <Statements
                            articles={props.articles}
                            createActive={createActive}
                            setCreateActive={setCreateActive}
                            setEditStatements={props.setEditStatements}
                            editStatements={props.editStatements}
                            setArticleId={setArticleId}
                            update={props.update}
                        />
                }
                <EditStatements
                    update={props.update}
                    articles={props.articles}
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