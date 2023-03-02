import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import esfandtvPfp from '../public/esfandtv.png';
import asmongoldPfp from '../public/asmongold.png';
import cyrPfp from '../public/cyr.png';
import emiruPfp from '../public/emiru.png';
import extraemilyPfp from '../public/extraemily.png';
import tectonePfp from '../public/tectone.png';
import sodapoppinPfp from '../public/sodapoppin.png';
import nmplolPfp from '../public/nmplol.png';
import mizkifPfp from '../public/mizkif.png';

const streamersNames = ['EsfandTV', 'Asmongold', 'cyr', 'Emiru', 'ExtraEmily', 'Tectone', 'sodepoppin', 'Nmplol', 'Mizkif']
const streamerPfps = [esfandtvPfp, asmongoldPfp, cyrPfp, emiruPfp, extraemilyPfp, tectonePfp, sodapoppinPfp, nmplolPfp, mizkifPfp]

export default function Home() {
    const [streamerObjects, setStreamerObjects] = useState([]);
    
    useEffect(() => {
        let newObjects = [];
        for (let i = 0; i < streamersNames.length; i++) {
            let newObject = {
                name: streamersNames[i],
                pfp: streamerPfps[i],
                viewers: 0,
                live: false
            }
            newObjects.push(newObject)
        }
        
        fetch(`/api/getData/`, {method: 'POST', headers: {'Content-Type': 'application/json'},  body: JSON.stringify(streamersNames)})
        .then((jsonResponse) => jsonResponse.json())
        .then((response) => {
            console.log(response.data.data);
            for (let i = 0; i < response.data.data.length; i++) {
                for (let j = 0; j < streamersNames.length; j++) {
                    if (response.data.data[i].user_login.toLowerCase() == streamersNames[j].toLowerCase()) {
                        console.log(response.data.data[i].user_login, "is", streamersNames[j]);
                        newObjects[j].viewers = response.data.data[i].viewer_count;
                        newObjects[j].live = true;
                        
                    }
                }
            }
            newObjects.sort((a, b) => b.viewers - a.viewers);
            setStreamerObjects([...newObjects]);
        })
        .catch((err) => {
          console.log(err);
        })
    },[]);

    return (
        <div>
            <Navbar/>
            <Sidebar streamerObjects={streamerObjects}/>
        </div>
    )
}