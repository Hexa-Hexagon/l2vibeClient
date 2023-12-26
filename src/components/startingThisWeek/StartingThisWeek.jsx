import React from "react";
import classes from "./startingThisWeek.module.scss";
import Site from "../site/Site";

const ThisWeek = ({ ...props }) => {
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

export default ThisWeek;