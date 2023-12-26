import React from "react";
import classes from "../../app.module.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {useFormik} from "formik";
import * as yup from "yup";
import { createArticle } from "../../api";

const CreateStatements = ({...props}) => {

    const createSchema = yup.object().shape({
        name: yup.string().required("name required"),
    });


    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: createSchema,
        onSubmit: async (values) => {
            await createArticle({
                articleName: values.name
            });
            await props.update();
            props.setCreateActive(false);
        },
    });
    return (
        <div className={props.createActive ? classes.createStatements : classes.disableStatements}>

            <form onSubmit={handleSubmit} className={classes.inputWrapper} autoComplete="off" >
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