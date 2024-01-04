import React, {useState} from "react";
import classes from "../../app.module.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {useFormik} from "formik";
import * as yup from "yup";
import {
    createArticle,
    createBanner,
    editBanner,
    editImageArticle,
    editLinkBanner,
    getArticles
} from "../../api";


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
            await post(values);
            props.updateArticles();
            props.setCreateActive(false);
        },
    });
    const [selectedImage, setSelectedImage] = useState(null);
    const [articleImage, setArticleImage] = useState(props.banner);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setArticleImage(e.target.files[0]);


        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                setSelectedImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    async function post(values) {
        try {
            const data = new FormData();
            data.append("avatar", articleImage);
            data.append("articleName", values.name);
            if (articleImage && values.name) {
                 await createArticle(data)
            }
        } catch (e) {
            console.error(e.message);
        }

    }

    return (
        <div className={props.createActive ? classes.createStatements : classes.disableStatements}>
            <div className={classes.addImage}>
                {
                    articleImage === "" || articleImage === null ? "" :
                        <img
                            src={selectedImage}
                            className={classes.image} alt=""/>
                }
                <div className={classes.choseForm}>
                    <input className={classes.choseFormInput} type="file"
                           onChange={e => handleImageChange(e)}/>
                    <span>Выберете файл</span>
                </div>
            </div>

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