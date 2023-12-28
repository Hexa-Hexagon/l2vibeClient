import React, {useEffect, useState} from "react";
import classes from "../../app.module.scss";
import {Editor} from "react-draft-wysiwyg";
import {ContentState, EditorState, convertFromHTML, convertToRaw} from "draft-js";
import buttonClass from "../editSite/editSite.module.scss";
import {editArticle, getArticle} from "../../api";
import draftToHtml from "draftjs-to-html";


const EditStatements = ({...props}) => {
    const [editorState, setEditorState] = useState(
        EditorState.createEmpty()
    );
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState, {
            allowUndo: true,
        });
    };

    const get = async () => {
        await getArticle(props.id).then(response => {
            setText(response.data.articleHtml);
            setName(response.data.articleName);
        });
    };

    useEffect(() => {
        get();
        if (text) {
            const contentBlocks = convertFromHTML(text);

            if (contentBlocks) {
                const contentState = ContentState.createFromBlockArray(contentBlocks);
                setEditorState(EditorState.createWithContent(contentState));
            } else {
                console.error("Error converting HTML to content blocks");
            }
        } else {
            console.error("No articleHtml in the response data");
        }
    }, []);

    return (
        <div className={props.editStatements ? classes.editStatements : classes.disableWrapper}>
            <div className={classes.editStatementForm}>
                    <input value={props.articles[0].articleName} onChange={e =>
                        setName(e.target.value)} className={classes.input}/>
                

            </div>
            <div className={classes.editor}>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                    toolbar={{
                        image: {
                            className: undefined,
                            component: undefined,
                            popupClassName: undefined,
                            urlEnabled: true,
                            uploadEnabled: true,
                            alignmentEnabled: true,
                            uploadCallback: undefined,
                            previewImage: true,
                            inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                            alt: {present: false, mandatory: false},
                            defaultSize: {
                                height: "auto",
                                width: "auto",
                            },
                        },
                    }}
                />


            </div>
            <div className={buttonClass.editStatementsButtons}>
                <button className={buttonClass.cancel}
                        onClick={() => props.setEditStatements(false)}/>
                <button className={classes.accept} onClick={async () => {
                    await editArticle({
                        articleName: name,
                        articleHtml: draftToHtml(convertToRaw(editorState.getCurrentContent()))
                    }, props.id);
                    props.setEditStatements(false);
                }}/>
            </div>

        </div>
    );
};

export default EditStatements;