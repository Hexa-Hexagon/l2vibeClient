import React, { useEffect, useState } from 'react';
import api from '../../api';
import Site from '../site';

const Lits = () => {
let [sites, setSites] = useState([]);
useEffect(()=>{
    async function get (){
        const res = await api.get('/');
        setSites(res.data);
    }
    get();
}, []);

    return (
        <div >
            {sites.map(site=><Site name={site.nameSite} status={site.status} difficulty={site.difficulty} version={site.version} dateOfStart={site.dateOfStartingServer} dateOfEnd={site.dateOfEndingContract} key={site._id} />)}
        </div>
    );
};

export default Lits;