import React from "react";
import classes from "../../app.module.scss";
import {prices} from "../../languages";
import kingVip from "../../images/kingVip.png";
import vipFooter from "../../images/vipFooter.png";
import superVip from "../../images/superVip.png";
import premiumFooter from "../../images/premiumFooter.png";
import standartFooter from "../../images/standartFooter.png";
import {postPassword, setAuthHeader} from "../../api";


const Footer = ({...props}) => {
    let message = "";

    async function login() {
        try {
            if (props.password) {
                const res = await postPassword(props.password);
                if (res.status > 199 && res.status < 300) {
                    props.setIsEdit(!props.isEdit);
                    setAuthHeader(res.data.token);
                    return res.data;
                } else {
                    props.setErrorStyle({
                        border: "3px solid #660000"
                    });
                }
            } else {
                props.setErrorStyle({
                    border: "3px solid #660000"
                });
            }
        } catch (e) {
            message = e.response.data.msg;
        }
        if (message === "Password is incorrect") {
            props.setErrorStyle({
                border: "3px solid #660000"
            });
        }
    }

    return (
        <footer className={classes.footer}>
            <div className={classes.contactsForm}>
                <p className={classes.contactsText}>{props.selectLan.FooterDetails}</p>
                <div className={classes.contacts}>
                    <a href="https://t.me/l2vibe" className={classes.telegramBlock}>
                        <div className={classes.telegramImage}/>
                    </a>
                    <a href="https://discord.gg/YXNwBdVgH9"
                       className={classes.discordBlock}>
                        <div className={classes.discordImage}/>
                    </a>
                    <a href="mailto:Lineage2vibe@gmail.com"
                       className={classes.emailBlock}>
                        <div className={classes.emailImage}/>
                    </a>
                </div>
            </div>

            <div style={{
                width: "100%",
                borderBottom: "2px solid #ffffff",
                margin: "15px 0 25px 0"
            }}/>
            <div className={classes.prices}>
                <div className={classes.bannerFooter}>
                    <h3>{props.selectLan.BannerAdvertising}</h3>
                    <div className={classes.bannerFooterSize}>
                        <p>{props.selectLan.BannerDetailsSize} (px): 240х400</p>
                        <p>{props.selectLan.BannerDetailsPossibleExtensions}: gif, png,
                            jpg</p><p>{props.selectLan.BannerDetailsWeightLimit}: 100
                        kb </p>
                        <p>{props.selectLan.BannerDetailsBannersInRotation}: {props.selectLan.BannerDetailsUpTo} 5</p>
                        <p>{props.selectLan.BannerDetailsRotationTypeText}: {props.selectLan.BannerDetailsRotationType}</p>
                    </div>
                    <p>{props.selectLan.AccommodationCost} (30 {props.selectLan.Days}):</p>
                    <p>{props.selectLan.Price} {prices.BannerPrice}</p>
                    <p style={{marginTop: "15px"}}>{props.selectLan.BannerDetailsBannerDescription}
                    </p>
                </div>
            </div>
            <div style={{
                width: "100%",
                borderBottom: "2px solid #ffffff",
                margin: "15px 0 25px 0"
            }}/>
            <div className={classes.prices}>
                <div className={classes.noStandart}>
                    <div className={classes.serverPrice}>
                        <div className={classes.imgForm}>
                            <img src={kingVip} className={classes.kingVipForm} alt="kingvip"/>
                        </div>
                        <h3 className={classes.serverText}>L2VIBE.COM – KING–VIP
                            – {props.selectLan.Status}:</h3>
                        <div className={classes.serverText}>
                            <p>{props.selectLan.KingVipDescription}</p>
                            <p>{props.selectLan.AccommodationCost} (30 {props.selectLan.Days}):</p>
                            <p>{props.selectLan.Price}: {prices.KingVipPrice}</p>
                        </div>
                    </div>
                    <div className={classes.serverPrice}>
                        <div className={classes.imgForm}>
                            <img src={superVip} className={classes.kingVipForm} alt="kingvip"/>
                        </div>
                        <h3 className={classes.serverText}>L2VIBE.COM – SUPER–VIP
                            – {props.selectLan.Status}:</h3>
                        <div className={classes.serverText}>
                            <p>{props.selectLan.SuperVipDescription}</p>
                            <p>{props.selectLan.AccommodationCost} (30 {props.selectLan.Days}):</p>
                            <p>{props.selectLan.Price}: {prices.SuperVipPrice}</p>
                        </div>
                    </div>
                    <div className={classes.serverPrice}>
                        <div className={classes.imgForm}>
                            <img src={vipFooter} className={classes.kingVipForm} alt="kingvip"/>
                        </div>
                        <h3 className={classes.serverText}>L2VIBE.COM – VIP
                            – {props.selectLan.Status}:</h3>
                        <div className={classes.serverText}>
                            <p>{props.selectLan.VipDescription}</p>
                            <p>{props.selectLan.AccommodationCost} (15 {props.selectLan.Days}):</p>
                            <p>{props.selectLan.Price}: {prices.VipPrice}</p>
                        </div>
                    </div>
                </div>
                <div className={classes.serverPriceStandart}>
                    <div className={classes.standartPrice}>
                        <div className={classes.imgSecondForm}>
                            <img src={premiumFooter} className={classes.kingVipForm} alt="kingvip"/>
                        </div>
                        <h3 className={classes.serverText}>L2VIBE.COM
                            – {props.selectLan.Premium} – {props.selectLan.Status}</h3>
                        <div className={classes.serverText}>
                            <p>{props.selectLan.Status} – {props.selectLan.Premium}: {props.selectLan.PremiumDescription} </p>
                            <p>{props.selectLan.AccommodationCost} (30 {props.selectLan.Days}):</p>
                            <p>{props.selectLan.Price}: {prices.PremiumPrice}</p>
                        </div>
                    </div>

                    <div className={classes.standartPrice}>
                        <div className={classes.imgThirdForm}>
                            <img src={standartFooter} className={classes.kingVipForm} alt="kingvip"/>
                        </div>
                        <h3 className={classes.serverText}>L2VIBE.COM
                            – {props.selectLan.Standard} – {props.selectLan.Status}</h3>
                        <div className={classes.serverText}>
                            <p>{props.selectLan.StandardDdescriptionFirst}</p>
                            <p>
                                {props.selectLan.StandardDdescriptionSecond}
                            </p>
                            <p>
                                {props.selectLan.AccommodationCost} (15 {props.selectLan.Days}):
                            </p>
                            <p>{props.selectLan.Price}: {prices.StandardPrice}</p>
                        </div>
                    </div>
                </div>
                <form className={classes.editForm} onSubmit={(e) => {
                    e.preventDefault();
                    login();
                    props.setPassword("");
                }}>
                    <input className={classes.editInput} style={props.errorStyle}
                           type="password" value={props.password}
                           onChange={e => {
                               props.setPassword(e.target.value);
                               props.setErrorStyle({});
                           }
                           } placeholder="PASSWORD"/>
                    <input type="submit" value={""} className={classes.editButton}/>
                </form>
            </div>
        </footer>
    );
};

export default Footer;