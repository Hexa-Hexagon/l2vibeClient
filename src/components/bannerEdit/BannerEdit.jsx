import React, {useState} from "react";
import classes from "./bannerEdit.module.scss";
import {createBanner, deleteBanner, editBanner, editLinkBanner} from "../../api";

const BannerEdit = ({...props}) => {
    const [bannerExists, setBannerExists] = useState(!!props.banner);
    const [link, setLink] = useState(
        bannerExists ? props.banner.bannerLink ? props.banner.bannerLink : "" : "");
    const [banner, setBanner] = useState(
        bannerExists ? props.banner.bannerFileName ? props.banner.bannerFileName : null : null);

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setBanner(e.target.files[0]);

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                setSelectedImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    async function postOrPut() {
        try {
            const data = new FormData();
            data.append("avatar", banner);
            data.append("link", link);
            if (bannerExists) {
                if (banner && link) {
                    await editBanner(data, props.banner._id);
                } else if (link) {
                    await editLinkBanner({
                        link: link
                    }, props.banner._id);
                }
            } else {
                if (banner && link) {
                    await createBanner(data);
                    props.updateBanners();
                }
            }
            props.updateBanners();
            if (link) {
                props.update();
            }
        } catch (e) {
            console.error(e.message);
        }

    }

    async function del() {
        try {
            setBannerExists(false);
            setBanner(null);
            setLink("");
            await deleteBanner(props.banner ? props.banner._id: null);
            props.updateBanners();
        } catch (e) {
            console.log(e.message);
        }

    }

    return (
        <div className={classes.editBanner}>
            {
                banner === "" || banner === null ? "" :
                    <img
                        src={bannerExists ?`https://api.l2vibe.com/images/${banner}` :selectedImage}
                        className={classes.image} alt=""/>
            }
            <div className={classes.choseForm}>
                <input className={classes.choseFormInput} type="file"
                       onChange={e => handleImageChange(e)}/>
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