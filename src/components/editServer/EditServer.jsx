import React from "react";
import classes from "../../app.module.scss";
import Edit from "../editSite/EditSite";
import BannerEdit from "../bannerEdit/BannerEdit";

const EditServer = ({...props}) => {
    return (
        <>
            <div className={classes.editSite}>
                {props.kingVip.map(site => <Edit update={props.update} site={site}
                                                 key={site._id}/>)}
            </div>
            <div className={classes.editBannerForm}>
                <BannerEdit banner={props.banners[0]} update={props.update}/>
                <BannerEdit banner={props.banners[1]} update={props.update}/>
                <BannerEdit banner={props.banners[2]} update={props.update}/>
                <BannerEdit banner={props.banners[3]} update={props.update}/>
                <BannerEdit banner={props.banners[4]} update={props.update}/>
            </div>
        </>
    );
};

export default EditServer;