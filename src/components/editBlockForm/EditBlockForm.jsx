import React, {useState} from "react";
import classes from "../../app.module.scss";
import CreateNewSite from "../createNewSite/CreateNewSite";
import Edit from "../editSite/EditSite";
import BannerEdit from "../bannerEdit/BannerEdit";
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditorState from "draft-js/lib/EditorState";

const EditBlockForm = ({...props}) => {
    const [editorState, setEditorState] = useState(
        EditorState.createEmpty()
    );

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState, {
            allowUndo: true,
        });
    };
    const removeKingVip = (site) => {
        props.setKingVip(props.kingVip.filter(s => s._id !== site._id));
    };
    const removeSuperVip = (site) => {
        props.setSuperVip(props.superVip.filter(s => s._id !== site._id));
    };
    const removeVip = (site) => {
        props.setVip(props.vip.filter(s => s._id !== site._id));
    };
    const removePremium = (site) => {
        props.setPremium(props.premium.filter(s => s._id !== site._id));
    };
    const removeStandart = (site) => {
        props.setStandart(props.standart.filter(s => s._id !== site._id));
    };

    return (
        <div className={classes.editBlockFormAndCreateNewSite}>

            <CreateNewSite addSite={props.getEdit}/>
            <div className={classes.editBlockForm}>
                {/*<div className={classes.editSite}>*/}
                {/*    {props.kingVip.map(site => <Edit removeSite={removeKingVip} site={site}*/}
                {/*                               key={site._id}/>)}*/}
                {/*    {props.superVip.map(site => <Edit removeSite={removeSuperVip} site={site}*/}
                {/*                                key={site._id}/>)}*/}
                {/*    {props.vip.map(site => <Edit removeSite={removeVip} site={site}*/}
                {/*                           key={site._id}/>)}*/}
                {/*    {props.premium.map(site => <Edit removeSite={removePremium} site={site}*/}
                {/*                               key={site._id}/>)}*/}
                {/*    {props.standart.map(site => <Edit removeSite={removeStandart} site={site}*/}
                {/*                                key={site._id}/>)}*/}
                {/*</div>*/}
                {/*<div className={classes.editBannerForm}>*/}
                {/*    <BannerEdit banner={props.banners[0]}/>*/}
                {/*    <BannerEdit banner={props.banners[1]}/>*/}
                {/*    <BannerEdit banner={props.banners[2]}/>*/}
                {/*    <BannerEdit banner={props.banners[3]}/>*/}
                {/*    <BannerEdit banner={props.banners[4]}/>*/}
                {/*</div>*/}
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
                                alt: { present: false, mandatory: false },
                                defaultSize: {
                                    height: 'auto',
                                    width: 'auto',
                                },
                            },
                        }}
                    />
                </div>
            </div>
        </div>

    );
};

export default EditBlockForm;