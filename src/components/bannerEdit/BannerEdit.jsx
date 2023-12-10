import React, {useState} from "react";
import classes from "./bannerEdit.module.scss";
import api from "../../api";

const BannerEdit = (props) => {
    let [bannerExists, setBannerExists] = useState(props.banner ? true : false);
    let [link, setLink] = useState(bannerExists ? props.banner.link : "");
    let [banner, setBanner] = useState(bannerExists ? props.banner.banner : "");

    async function postOrPut() {
        if (bannerExists) {
            if (banner && link) {
                await api.put(`/banners/${props.banner._id}`,
                    {
                        banner: banner,
                        link: link,
                        dateOfEndingContract: new Date().setDate((new Date().getDate() + 30))
                    });
            }
        } else {
            if (banner && link) {
                await api.post("/banners", {
                    banner: banner,
                    link: link,
                    dateOfEndingContract: new Date().setDate((new Date().getDate() + 30))
                });
            }
        }
    }

    async function del() {
        setBannerExists(false);
        setBanner("");
        setLink("");
        await api.delete(`/banners/${props.banner._id}`);
    }

    function convertTo64Base(e) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setBanner(reader.result);
        };
        reader.onerror = error => {
            console.log(error);
        };
    }

    return (
        <div className={classes.editBanner}>
            {
                banner === "" || banner === null ? "" :
                    <img src={banner} className={classes.image} alt="banner"/>
            }
            <div className={classes.choseForm}>
                <input className={classes.choseFormInput} type="file" onChange={convertTo64Base}/>
                <span>Выберете файл</span>
            </div>
            <input type="text" className={classes.input} placeholder="Введите полную ссылку"
                   value={link} onChange={e => setLink(e.target.value)}/>
            <div>
                <button className={classes.addBannerButton} onClick={() => {
                    postOrPut();
                }}/>
                <button className={classes.deleteBannerButton} onClick={() => {
                    del();
                }}/>
            </div>
        </div>
    );
};

export default BannerEdit;