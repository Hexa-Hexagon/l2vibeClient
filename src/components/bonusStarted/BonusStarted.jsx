import React from "react";
import Site from "../site/Site";
import classes from "./bonusStarted.module.scss";

const Started = ({ ...props }) => {
    return (
        <div className={classes.form}>
            <h1 style={{textAlign: "center"}}>{props.starting}</h1>
            {props.superVip ? props.superVip.map(site => <Site site={site} key={site._id}/>) : null }
            {props.vip ? props.vip.map(site => <Site site={site} key={site._id}/>) : null}
            {props.premium ? props.premium.map(site => <Site site={site} key={site._id}/>):null}
            {props.standart ? props.standart.map(site => <Site site={site} key={site._id}/>):null}
        </div>
    );
};

export default Started;