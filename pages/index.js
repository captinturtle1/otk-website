import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Events from '../components/Events';
import Videos from '../components/Videos';

import esfandtvPfp from '../public/esfandtv.png';
import asmongoldPfp from '../public/asmongold.png';
import cyrPfp from '../public/cyr.png';
import emiruPfp from '../public/emiru.png';
import extraemilyPfp from '../public/extraemily.png';
import tectonePfp from '../public/tectone.png';
import sodapoppinPfp from '../public/sodapoppin.png';
import nmplolPfp from '../public/nmplol.png';
import mizkifPfp from '../public/mizkif.png';

const streamersNames = ['EsfandTV', 'Asmongold', 'cyr', 'Emiru', 'ExtraEmily', 'Tectone', 'sodapoppin', 'Nmplol', 'Mizkif']
const streamerPfps = [esfandtvPfp, asmongoldPfp, cyrPfp, emiruPfp, extraemilyPfp, tectonePfp, sodapoppinPfp, nmplolPfp, mizkifPfp]

export default function Home() {
    const [streamerObjects, setStreamerObjects] = useState([]);
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [otkVideoId, setOtkVideoId] = useState('')
    
    useEffect(() => {
        let newObjects = [];
        for (let i = 0; i < streamersNames.length; i++) {
            let newObject = {
                name: streamersNames[i],
                pfp: streamerPfps[i],
                viewers: 0,
                live: false,
                title: ''
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
                        newObjects[j].title = response.data.data[i].title;
                    }
                }
            }
            newObjects.sort((a, b) => b.viewers - a.viewers);
            setStreamerObjects([...newObjects]);
        })
        .catch((err) => {
          console.log(err);
        })
        fetch(`/api/getLatestOTKVideo/`, {method: 'POST'})
        .then((jsonResponse) => jsonResponse.json())
        .then((response) => {
            console.log(response.data.items[0].id.videoId);
            console.log(response);
            setOtkVideoId(response.data.items[0].contentDetails.videoId);
        })
        .catch((err) => {
            setOtkVideoId('KgaAIpkhDH0');
        })
    },[]);

    return (
        <div>
            <Navbar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}/>
            <div className='flex w-screen'>
                <Sidebar streamerObjects={streamerObjects} sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}/>
                <div className='w-screen'>
                    <Hero streamerObjects={streamerObjects} otkVideoId={otkVideoId}/>
                    <Events/>
                    <Videos/>
                </div>
            </div>
        </div>
    )
}
