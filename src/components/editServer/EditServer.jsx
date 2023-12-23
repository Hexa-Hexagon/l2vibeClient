import React from "react";
import classes from "../../app.module.scss";
import Edit from "../editSite/EditSite";
import BannerEdit from "../bannerEdit/BannerEdit";

const EditServer = ({...props}) => {
    return (
        <div>
            <div className={classes.editSite}>
                {props.kingVip.map(site => <Edit removeSite={props.removeKingVip} site={site}
                                                 key={site._id}/>)}
                {props.superVip.map(site => <Edit removeSite={props.removeSuperVip} site={site}
                                                  key={site._id}/>)}
                {props.vip.map(site => <Edit removeSite={props.removeVip} site={site}
                                             key={site._id}/>)}
                {props.premium.map(site => <Edit removeSite={props.removePremium} site={site}
                                                 key={site._id}/>)}
                {props.standart.map(site => <Edit removeSite={props.removeStandart} site={site}
                                                  key={site._id}/>)}
            </div>
            <div className={classes.editBannerForm}>
                <BannerEdit banner={props.banners[0]}/>
                <BannerEdit banner={props.banners[1]}/>
                <BannerEdit banner={props.banners[2]}/>
                <BannerEdit banner={props.banners[3]}/>
                <BannerEdit banner={props.banners[4]}/>
            </div>
        </div>
    );
};

export default EditServer;