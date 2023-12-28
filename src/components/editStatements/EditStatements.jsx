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
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState, {
            allowUndo: true,
        });
    };

    const get = async () => {
        await getArticle(props.id).then(response => {
            const articleHtml = response.data.articleHtml;

            if (articleHtml) {
                const contentBlocks = convertFromHTML(articleHtml);

                if (contentBlocks) {
                    const contentState = ContentState.createFromBlockArray(contentBlocks);
                    setEditorState(EditorState.createWithContent(contentState));
                } else {
                    console.error("Error converting HTML to content blocks");
                }
            } else {
                console.error("No articleHtml in the response data");
            }

            setName(response.data.articleName);
        });
    };

    useEffect(() => {
        get();
    }, []);

    return (
        <div className={props.editStatements ? classes.editStatements : classes.disableWrapper}>
            <input value={name} onChange={e => setName(e.target.value)}/>
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