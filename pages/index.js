import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Events from '../components/Events';
import Videos from '../components/Videos';

import { uploadPlaylists, streamerInfo } from '../components/channelDetails'; 

export default function Home() {
    const [streamerObjects, setStreamerObjects] = useState([]);
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [otkVideoId, setOtkVideoId] = useState('')
    const [recentMemberVideos, setRecentMemberVideos] = useState([])
    
    useEffect(() => {
        let newObjects = [];
        for (let i = 0; i < streamerInfo.length; i++) {
            let newObject = {
                name: streamerInfo[i].name,
                pfp: streamerInfo[i].image,
                viewers: 0,
                live: false,
                title: ''
            }
            newObjects.push(newObject)
        }

        let namesArray = []
        for (let i = 0; i < streamerInfo.length; i++) {
            namesArray.push(streamerInfo[i].name)
        }
        
        fetch(`/api/getData/`, {method: 'POST', headers: {'Content-Type': 'application/json'},  body: JSON.stringify(namesArray)})
        .then((jsonResponse) => jsonResponse.json())
        .then((response) => {
            for (let i = 0; i < response.data.data.length; i++) {
                for (let j = 0; j < streamerInfo.length; j++) {
                    if (response.data.data[i].user_login.toLowerCase() == streamerInfo[j].name.toLowerCase()) {
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
            setOtkVideoId(response.data.items[0].contentDetails.videoId);
        })
        .catch((err) => {
            console.log(err)
            setOtkVideoId('KgaAIpkhDH0');
        })

        fetch(`/api/getLatestMemberVideos/`, {method: 'POST', headers: {'Content-Type': 'application/json'},  body: JSON.stringify(uploadPlaylists)})
        .then((jsonResponse) => jsonResponse.json())
        .then((response) => {
            console.log(response);
            setRecentMemberVideos([...response.videoIdArray]);
        })
        .catch((err) => {
            console.log(err);
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
                    <Videos recentMemberVideos={recentMemberVideos}/>
                </div>
            </div>
        </div>
    )
}
