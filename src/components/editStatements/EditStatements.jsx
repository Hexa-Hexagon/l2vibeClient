import React, {useEffect, useState} from "react";
import classes from "../../app.module.scss";
import {Editor} from "react-draft-wysiwyg";
import {ContentState, EditorState, convertFromHTML, convertToRaw} from "draft-js";
import buttonClass from "../editSite/editSite.module.scss";
import {editArticle, getArticle} from "../../api";
import draftToHtml from "draftjs-to-html";
import {Link, useNavigate, useParams} from "react-router-dom";
import htmlToDraft from 'html-to-draftjs';


const EditStatements = ({...props}) => {
    const navigate = useNavigate();
    let {id} = useParams();
    const [editorState, setEditorState] = useState(
        EditorState.createEmpty()
    );
    const [name, setName] = useState({});
    const [text, setText] = useState(``);
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState, {
            allowUndo: true,
        });
    };

    const get = async () => {
        await getArticle(id).then(response => {
            setName(response.data.articleName);
            setEditorState(EditorState.createWithContent(
                ContentState.createFromBlockArray(htmlToDraft(response.data.articleHtml).contentBlocks)));
        });
    };

    useEffect(() => {
        get();
    }, []);

    return (
        <div className={props.editStatements ? classes.editStatements : classes.disableWrapper}>
            <div className={classes.editStatementForm}>
                <input value={name} onChange={e =>
                    setName(e.target.value)} className={classes.input}/>
            </div>
            <div className={classes.editor}>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                />


            </div>
            <div className={buttonClass.editStatementsButtons}>
                <Link to="/statements" className={buttonClass.cancel}
                      onClick={() => props.setEditStatements(false)}/>
                <button className={classes.accept} onClick={async () => {
                    await editArticle({
                        articleName: name,
                        articleHtml: draftToHtml(convertToRaw(editorState.getCurrentContent()))
                    }, id);
                    props.setEditStatements(false);
                    navigate("/statements", {replace: true});
                }}/>
            </div>

        </div>
    );
};

export default EditStatements;