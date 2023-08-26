import React from 'react';
import Site from '../site';
import classes from './index.module.scss'
const Started = (props) => {
    const superVip = props.sites.filter((site)=>{
        return site.status === "Super VIP";
    })
    const vip = props.sites.filter((site)=>{
        return site.status === "VIP";
    })
    const premium = props.sites.filter((site)=>{
        return site.status==="Premium";
    })
    const standart = props.sites.filter((site)=>{
        return site.status === "Standart";
    })

    return (
        <div className={classes.form}>
            <h1 style={{textAlign:"center"}}>{props.starting}</h1>
            {superVip.map(site=><Site site={site} key={site._id} />)}
            {vip.map(site=><Site site={site} key={site._id} />)}
            {premium.map(site=><Site site={site} key={site._id} />)}
            {standart.map(site=><Site site={site} key={site._id} />)}
        </div>
    );
};

export default Started;