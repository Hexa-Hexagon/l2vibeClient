import React, {useState} from "react";
import classes from "../../app.module.scss";
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditorState from "draft-js/lib/EditorState";
import {useFormik} from "formik";
import * as yup from "yup";

const CreateStatements = ({...props}) => {
    // const [editorState, setEditorState] = useState(
    //     EditorState.createEmpty()
    // );
    // const onEditorStateChange = (editorState) => {
    //     setEditorState(editorState, {
    //         allowUndo: true,
    //     });
    // };


    const createSchema = yup.object().shape({
        name: yup.string().required("name required"),
    });


    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: createSchema,
        onSubmit: async (values) => {

        },
    });
    return (
        <div className={props.createActive ? classes.createStatements : classes.disableStatements}>
            {/*<div className={classes.editor}>*/}
            {/*    <Editor*/}
            {/*        editorState={editorState}*/}
            {/*        onEditorStateChange={onEditorStateChange}*/}
            {/*        toolbar={{*/}
            {/*            image: {*/}
            {/*                className: undefined,*/}
            {/*                component: undefined,*/}
            {/*                popupClassName: undefined,*/}
            {/*                urlEnabled: true,*/}
            {/*                uploadEnabled: true,*/}
            {/*                alignmentEnabled: true,*/}
            {/*                uploadCallback: undefined,*/}
            {/*                previewImage: true,*/}
            {/*                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',*/}
            {/*                alt: { present: false, mandatory: false },*/}
            {/*                defaultSize: {*/}
            {/*                    height: 'auto',*/}
            {/*                    width: 'auto',*/}
            {/*                },*/}
            {/*            },*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</div>*/}
            <form onSubmit={handleSubmit} className={classes.inputWrapper} autoComplete="off">
                <div>
                    <div className={classes.form}>
                        <input
                            id={"name"}
                            name={"name"}
                            type={"text"}
                            placeholder={"name"}
                            className={classes.input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            touched={touched.name}
                            errors={errors.name}
                        />
                        <button className={classes.formButton} type="submit"/>
                    </div>
                    {touched.name && errors.name ?
                        <div className={classes.label}>{errors.name}</div> : null}
                </div>
            </form>
        </div>
    );
};

export default CreateStatements;