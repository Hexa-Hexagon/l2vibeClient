import React from "react";
import classes from "../../app.module.scss";
import Edit from "../editSite/EditSite";
import BannerEdit from "../bannerEdit/BannerEdit";

const EditServer = ({...props}) => {
    console.log(props);
    return (
        <>
            <div className={classes.editSite}>
                {props.kingVip.map(site => <Edit update={props.update} site={site} key={site._id}/>)}


                {props.bonusStarted[0] ? props.bonusStarted[0].superVip.map(
                    (site) => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.started[0] ? props.started[0].superVip.map(
                    (site) => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.justOpened[0] ? props.justOpened[0].superVip.map(
                    (site) => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.startingThisWeek[0] ? props.startingThisWeek[0].superVip.map(
                    (site) => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.startingThisMonth[0] ? props.startingThisMonth[0].superVip.map(
                    (site) => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.startsLater[0] ? props.startsLater[0].superVip.map(
                    (site) => <Edit update={props.update} site={site} key={site._id}/>) : null}


                {props.bonusStarted[0] ? props.bonusStarted[0].vip.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.started[0] ? props.started[0].vip.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.justOpened[0] ? props.justOpened[0].vip.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.startingThisWeek[0] ? props.startingThisWeek[0].vip.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.startingThisMonth[0] ? props.startingThisMonth[0].vip.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.startsLater[0] ? props.startsLater[0].vip.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}


                {props.bonusStarted[0] ? props.bonusStarted[0].premium.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.started[0] ? props.started[0].premium.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.justOpened[0] ? props.justOpened[0].premium.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.startingThisWeek[0] ? props.startingThisWeek[0].premium.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.startingThisMonth[0] ? props.startingThisMonth[0].premium.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.startsLater[0] ? props.startsLater[0].premium.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}


                {props.bonusStarted[0] ? props.bonusStarted[0].standart.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.started[0] ? props.started[0].standart.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.justOpened[0] ? props.justOpened[0].standart.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.startingThisWeek[0] ? props.startingThisWeek[0].standart.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.startingThisMonth[0] ? props.startingThisMonth[0].standart.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}
                {props.startsLater[0] ? props.startsLater[0].standart.map(
                    site => <Edit update={props.update} site={site} key={site._id}/>) : null}
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