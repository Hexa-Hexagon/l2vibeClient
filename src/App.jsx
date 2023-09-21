import classes from "./app.module.scss"
import CreateNewSite from "./components/createNewSite";
import * as moment from "moment"
import { useEffect, useState } from "react";
import Edit from "./components/editSite";
import Site from "./components/site";
import Started from "./components/started";
import Today from "./components/startingToday";
import ThisWeek from "./components/startingThisWeek";
import ThisMonth from "./components/startingThisMonth";
import Later from "./components/startsLater";
import api from "./api";
import lan from "./languages/index";
import BannerEdit from "./components/bannerEdit";
import BonusStarted from "./components/bonusStarted";
function App() {
    let [selectLan, setSelectLan] = useState(lan.EN);
    let [banners, setBanners] = useState([]);
    let [isEdit, setIsEdit] = useState(false);
    let [password, setPassword] = useState("");
    let [kingVip, setKingVip] = useState([]);
    let [superVip, setSuperVip] = useState([]);
    let [vip, setVip] = useState([]);
    let [premium, setPremium] = useState([]);
    let [standart, setStandart] = useState([]);
    let [started, setStarted] = useState([]);
    let [startingToday, setStartingToday] = useState([]);
    let [startingThisWeek, setStartingThisWeek] = useState([]);
    let [startingThisMonth, setStartingThisMonth] = useState([]);
    let [startsLater, setStartsLater] = useState([]);
    let [bonusStarted, setBonusStarted] = useState([])
    let [errorStyle, setErrorStyle] = useState({});
    const selectLanguageButton = {
        backgroundColor: "#4477CEbf",
        color: "#35155D"
    };
    let [lb1, setLB1] = useState({});
    let [lb2, setLB2] = useState(selectLanguageButton);
    let [lb3, setLB3] = useState({});
async function get (){
    const res = await api.get('/');
    let  today = new Date();
    let tomorrow = new Date();
    let day = 7 - new Date().getDay();
    let dayInMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate() - new Date().getDate();
    tomorrow.setDate(tomorrow.getDate()+1);
    today.setHours(0,0,0,0);
    tomorrow.setHours(0,0,0,0);
    tomorrow = tomorrow.toDateString();
    for(let i = 0 ; i< res.data.length;++i){
        let date = (new Date(res.data[i].dateOfStartingServer));
        date.setHours(0,0,0,0);
        if(res.data[i].status === "King VIP"){
            setKingVip(sites=>[...sites, res.data[i]]);
        }
       else if(date < today){
            if(res.data[i].isAction) setBonusStarted(sites=>[...sites,res.data[i]]);
            else setStarted(sites=>[...sites, res.data[i]]);
        }
        else if(date.toDateString() === today.toDateString() || date.toDateString() === tomorrow ){
            setStartingToday(sites=>[...sites,res.data[i]]);    
        }
        else if(date < new Date().setDate(new Date().getDate() + day)){
            setStartingThisWeek(sites=>[...sites,res.data[i]]);
        }
        else if(date  < new Date().setDate(new Date().getDate() + dayInMonth)){
            setStartingThisMonth(sites=>[...sites, res.data[i]]);
        }
        else{
            setStartsLater(sites=>[...sites, res.data[i]]);
        }
    }
}

    async function getBanners(){
        const res = await api.get('/banners');
        setBanners(res.data);
    }
    async function getEdit(){
        setKingVip([]);
        setSuperVip([]);
        setVip([]);
        setPremium([]);
        setStandart([]);
       const res = await api.get('/');
       for(let i=0;i<res.data.length;i++){
        if(res.data[i].status === "King VIP"){
            setKingVip(sites=>[...sites, res.data[i]]);
        }
        else if(res.data[i].status === "Super VIP"){
            setSuperVip(sites=>[...sites, res.data[i]]);
        }
        else if(res.data[i].status === "VIP"){
            setVip(sites=>[...sites,res.data[i]]);
        }
        else if(res.data[i].status === "Premium"){
            setPremium(sites=>[...sites,res.data[i]]);
        }
        else if(res.data[i].status === "Standart"){
            setStandart(sites=>[...sites,res.data[i]]);
        }
    }
    }
    
    const removeKingVip=(site)=>{
        setKingVip(kingVip.filter(s=>s._id !== site._id));
    }
    const removeSuperVip=(site)=>{
        setSuperVip(superVip.filter(s=>s._id !== site._id));
    }
    const removeVip=(site)=>{
        setVip(vip.filter(s=>s._id !== site._id));
    }
    const removePremium=(site)=>{
        setPremium(premium.filter(s=>s._id !== site._id));
    }
    const removeStandart=(site)=>{
        setStandart(standart.filter(s=>s._id !== site._id));
    }

    async function getPassword(){
        if(password){
            const res = await api.get(`/password/${password}`);
            if(res.data){
                getEdit();
                setIsEdit(!isEdit);
            }
            else{
                setErrorStyle({
                    border: "3px solid #660000"
                });
            }
        }
        else{
            setErrorStyle({
                border: "3px solid #660000"
            });
        }
    }
    
    useEffect(
        ()=>{
            get();
            getBanners();            
            setKingVip([...kingVip].sort((a,b)=>(moment(b.dateOfStartingServer, "YY.MM.DD") - moment(a.dateOfStartingServer, "YY.MM.DD"))));
            setStarted([...started].sort((a,b)=>moment(b.dateOfStartingServer,"YY.MM.DD")-moment(a.dateOfStartingServer,"YY.MM.DD")))
            setStartingToday([...startingToday].sort((a,b)=>moment(b.dateOfStartingServer,"YY.MM.DD")-moment(a.dateOfStartingServer,"YY.MM.DD")));
            setStartingThisWeek([...startingThisWeek].sort((a,b)=>moment(b.dateOfStartingServer,"YY.MM.DD")-moment(a.dateOfStartingServer,"YY.MM.DD")));
            setStartingThisMonth([...startingThisMonth].sort((a,b)=>moment(b.dateOfStartingServer,"YY.MM.DD")-moment(a.dateOfStartingServer,"YY.MM.DD")));
            setStartsLater([...startsLater].sort((a,b)=>moment(b.dateOfStartingServer,"YY.MM.DD")-moment(a.dateOfStartingServer,"YY.MM.DD"))); 
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]
    )
    return ( 
        <div className = {classes.App} >
        <header className={classes.header}>            
            <p className={classes.anons}>{selectLan.Anons}</p>
            <div className={classes.line} />
            <div className={classes.nameSiteAndSelectLanguageForm}>
                
            <p className={classes.nameSite}>L2VIBE.COM</p>
            <div className={classes.homeButtonAndSelectLanguageForm}>
            {
                isEdit === true?
                <div>
                    <input type={"submit"} onClick={()=>{ window.location.reload()}} value={""} className={classes.homeButton}/>
                </div>
                :
                <div/>
            }
            <div className={classes.selectLanguageForm}>
                <button className={classes.languageButtonL} style={lb1}
                onClick={()=>{setLB1(selectLanguageButton);setLB2({});setLB3({});setSelectLan(lan.UK)}}
                >УК</button>
                <button className={classes.languageButton} style={lb2} onClick={()=>{setLB2(selectLanguageButton);setLB1({});setLB3({});setSelectLan(lan.EN)}}>EN</button>
                <button className={classes.languageButtonR} style={lb3} onClick={()=>{setLB3(selectLanguageButton);setLB1({});setLB2({});setSelectLan(lan.RU)}}>РУ</button>
            </div>
            </div>
            </div>
        </header>
        {
            isEdit === true ?
            <div className={classes.editBlockFormAndCreateNewSite}>
            <CreateNewSite addSite={getEdit}  />
            <div  className={classes.editBlockForm}>
            <div className={classes.editSite}>
            {kingVip.map(site=><Edit removeSite={removeKingVip} site={site}  key={site._id} />)}
            {superVip.map(site=><Edit removeSite={removeSuperVip} site={site} key={site._id} />)}
            {vip.map(site=><Edit removeSite={removeVip} site={site} key={site._id} />)}
            {premium.map(site=><Edit removeSite={removePremium} site={site} key={site._id} />)}
            {standart.map(site=><Edit removeSite={removeStandart} site={site} key={site._id} />)}
            </div>
            <div className={classes.editBannerForm}>
              <BannerEdit banner={banners[0]} />
              <BannerEdit banner={banners[1]} />
              <BannerEdit banner={banners[2]} />
              <BannerEdit banner={banners[3]} />
              <BannerEdit banner={banners[4]} />
            </div>
            </div>
            </div>
        :
        <div style={{display:"flex",flexDirection:"column",alignItems:"center", width:"100%"}}>
            <div className={classes.kingVipForm}>
            { kingVip.length ===1? <div className={classes.kingVipForm} style={{justifyContent:"center"}}><Site site={kingVip[0]}  /></div>  :  kingVip.length < 3?  kingVip.map(site=><Site site={site} key={site._id}  />):
            <div className={classes.kingVipForm}>
                <Site site={kingVip[0]} />
                <Site site={kingVip[1]} />
                <Site site={kingVip[2]} />
            </div>
            }   
            </div>
            
        <main className={classes.main}>
            <div className={classes.mainServers}>
            <div className={classes.leftBlock}>
            <Today sites={startingToday} starting={selectLan.StartingToday}  />
            <ThisWeek sites={startingThisWeek} starting={selectLan.StartingThisWeek} />
            <ThisMonth sites={startingThisMonth} starting={selectLan.StartingThisMonth} />
            </div>
            <div className={classes.rightBlock}>
            <Later sites={startsLater} starting={selectLan.StartsLater} />
            <Started sites={started} starting={selectLan.Started} />
            <BonusStarted sites={bonusStarted} starting={selectLan.BonusStarted} />
            </div>
            </div>
            <div className={classes.bannerMain}>
                {
                    banners.map(banner=><a href={banner.link} key={banner._id}><input type="image" src={banner.banner} className={classes.bannerImage} alt="banner" /></a>)
                }
            </div>
            </main>
        <footer className={classes.footer}>
            <div className={classes.contactsForm}>
            <p className={classes.contactsText}>{selectLan.FooterDetails}</p>
            <div className={classes.contacts}>
            <a href="https://t.me/l2vibe" className={classes.telegramBlock}>
                <div className={classes.telegramImage} />
            </a>
            <a href="https://discord.gg/JSDxFKVq" className={classes.discordBlock}>
                <div className={classes.discordImage} />
            </a>
            <a href="mailto:Lineage2vibe@gmail.com" className={classes.emailBlock}>
            <div className={classes.emailImage} />
            </a>
            </div>
            </div>
            
            <div style={{width:"100%",borderBottom:"2px solid #ffffff", margin:"15px 0 25px 0"}} />
            <div className={classes.prices}>
            <div className={classes.bannerFooter}>
                    <h3>{selectLan.BannerAdvertising}</h3>
                    <div className={classes.bannerFooterSize}><p>{selectLan.BannerDetailsSize} (px): 240х400</p> <p>{selectLan.BannerDetailsPossibleExtensions}: gif, png, jpg</p><p>{selectLan.BannerDetailsWeightLimit}: 100 kb </p><p>{selectLan.BannerDetailsBannersInRotation}: {selectLan.BannerDetailsUpTo} 5</p><p>{selectLan.BannerDetailsRotationTypeText}: {selectLan.BannerDetailsRotationType}</p></div>
                        <p>{selectLan.AccommodationCost} (30 {selectLan.Days}):</p>
                        <p>{selectLan.Price} 💲 ???</p>
                        <p style={{marginTop:"15px"}}>{selectLan.BannerDetailsBannerDescription}
                        </p>
                </div>
            </div>
            <div style={{width:"100%",borderBottom:"2px solid #ffffff", margin:"15px 0 25px 0"}} />
            <div className={classes.prices}>
                <div className={classes.noStandart}>
                <div className={classes.serverPrice}>
                    <h3>L2VIBE.COM – KING–VIP – {selectLan.Status}:</h3>
                    <p>{selectLan.KingVipDescription}</p>
                    <p>{selectLan.AccommodationCost} (30 {selectLan.Days}):</p>
                    <p>{selectLan.Price} 💲???</p>
                </div>
                <div className={classes.serverPrice}>
                <h3>L2VIBE.COM – SUPER–VIP – {selectLan.Status}:</h3>
                <p>{selectLan.SuperVipDescription}</p>
                <p>{selectLan.AccommodationCost} (30 {selectLan.Days}):</p>
                <p>{selectLan.Price} 💲???</p> 
                </div>
                <div className={classes.serverPrice}>
                <h3>L2VIBE.COM – VIP – {selectLan.Status}:</h3>
            <p>{selectLan.VipDescription}</p>
            <p>{selectLan.AccommodationCost} (15 {selectLan.Days}):</p>
                <p>{selectLan.Price} 💲???</p>
                </div>
                <div className={classes.serverPrice}>
                <h3>L2VIBE.COM – {selectLan.Premium} – {selectLan.Status}</h3>
                <p>{selectLan.Status} – {selectLan.Premium}: {selectLan.PremiumDescription} </p>             
                <p>{selectLan.AccommodationCost} (30 {selectLan.Days}):</p>
                <p>{selectLan.Price} 💲???</p>
                </div>
        </div>
                <div className={classes.serverPriceStandart}>
                <h3>L2VIBE.COM – {selectLan.Standard} – {selectLan.Status}</h3>
                <p>{selectLan.StandardDdescriptionFirst}</p>   
                <p>
                    {selectLan.StandardDdescriptionSecond}
                </p>
                <p>
                    {selectLan.AccommodationCost} (15 {selectLan.Days}):
                </p>
                <p>
                {selectLan.Price} 💲???
                </p>
                </div>
                <div className={classes.editForm}>
                <input className={classes.editInput} style={errorStyle} type="password" value={password} onChange={e=>{setPassword(e.target.value); setErrorStyle({})}} placeholder="PASSWORD" />
                <button onClick={()=>{getPassword(); setPassword("")}} className={classes.editButton} />
                </div>
            </div>
        </footer>
            </div>
        }
        </div>
    );
}

export default App;