import React from "react";
import classes from "./startingThisWeek.module.scss";
import Site from "../site/Site";

const ThisWeek = ({ ...props }) => {
    return (
        <div className={classes.form}>
            <h1 style={{textAlign: "center"}}>{props.starting}</h1>
            {props.sites[0] ? props.sites[0].superVip.map(
                (site) => <Site site={site} key={site._id}/>) : null}
            {props.sites[0] ? props.sites[0].vip.map(
                site => <Site site={site} key={site._id}/>) : null}
            {props.sites[0] ? props.sites[0].premium.map(
                site => <Site site={site} key={site._id}/>) : null}
            {props.sites[0] ? props.sites[0].standart.map(
                site => <Site site={site} key={site._id}/>) : null}
        </div>
    );
};

export default ThisWeek;