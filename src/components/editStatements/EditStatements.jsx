import React, {useEffect, useState} from "react";
import classes from "../../app.module.scss";
import {Editor} from "react-draft-wysiwyg";
import {ContentState, EditorState, convertToRaw} from "draft-js";
import buttonClass from "../editSite/editSite.module.scss";
import {editArticle, editImageArticle, getArticle} from "../../api";
import draftToHtml from "draftjs-to-html";
import {Link, useNavigate, useParams} from "react-router-dom";
import htmlToDraft from "html-to-draftjs";


const EditStatements = ({...props}) => {
    const navigate = useNavigate();
    const [bannerExists, setBannerExists] = useState(!!props.articles);
    let {id} = useParams();
    const [editorState, setEditorState] = useState(
        EditorState.createEmpty()
    );
    const [name, setName] = useState({});
    const [articleImage, setArticleImage] = useState(props.articles);
    const [selectedImage, setSelectedImage] = useState("");

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState, {
            allowUndo: true,
        });
    };

    const get = async () => {
        await getArticle(id).then(response => {
            setName(response.data.articleName);
            if (response.data.articleHtml) {
                setEditorState(EditorState.createWithContent(ContentState.createFromBlockArray(
                    htmlToDraft(response.data.articleHtml).contentBlocks)));
            }
            setSelectedImage(`https://api.l2vibe.com/images/${response.data.articleImage}`);
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setArticleImage(e.target.files[0]);
        console.log(articleImage);

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                setSelectedImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    async function put() {
        try {
            const data = new FormData();
            data.append("avatar", articleImage);
            if (articleImage) {
                await editImageArticle(data, id);
            }
        } catch (e) {
            console.error(e.message);
        }

    }

    useEffect(() => {
        get();
    }, []);

    return (
        <div className={props.editStatements ? classes.editStatements : classes.disableWrapper}>
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
            <div className={classes.editStatementForm}>
                <input value={name} onChange={(e) => e ?
                    setName(e.target.value) : null} className={classes.input}/>
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
                    await put();
                    props.setEditStatements(false);
                    navigate("/statements", {replace: true});
                }}/>
            </div>

        </div>
    );
};

export default EditStatements;