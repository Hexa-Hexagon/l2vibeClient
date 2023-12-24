import React, {useState} from "react";
import classes from "../../app.module.scss";
import {Editor} from "react-draft-wysiwyg";
import EditorState from "draft-js/lib/EditorState";
import buttonClass from "../editSite/editSite.module.scss";


const EditStatements = ({...props}) => {
    const [editorState, setEditorState] = useState(
        EditorState.createEmpty()
    );
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState, {
            allowUndo: true,
        });
    };
    return (
        <div className={props.editStatements ? classes.editStatements : classes.disableWrapper}>
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
                            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                            alt: {present: false, mandatory: false},
                            defaultSize: {
                                height: 'auto',
                                width: 'auto',
                            },
                        },
                    }}
                />

            </div>
            <div className={buttonClass.editStatementsButtons}>
                <button className={buttonClass.cancel}
                        onClick={() => props.setEditStatements(false)}/>
                <button className={classes.accept}/>
            </div>

        </div>
    );
};

export default EditStatements;