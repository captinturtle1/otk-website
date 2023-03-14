import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Events from '../components/Events';
import Videos from '../components/Videos';
import Streamers from '../components/Streamers';
import Merch from '../components/Merch';
import Footer from '../components/Footer';

import { uploadPlaylists, streamerInfo } from '../components/channelDetails'; 

export default function Home() {
    const [streamerObjects, setStreamerObjects] = useState([]);
    const [otkVideoId, setOtkVideoId] = useState('')
    const [recentMemberVideos, setRecentMemberVideos] = useState([])

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [mobileNavVisible, setMobileNavVisible] = useState(false);

    const toggleSidebar = () => {
        if (mobileNavVisible) setMobileNavVisible(false);
        setSidebarVisible(!sidebarVisible)
    }

    const toggleMobileNav = () => {
        if (sidebarVisible) setSidebarVisible(false);
        setMobileNavVisible(!mobileNavVisible)
    }
    
    useEffect(() => {
        if (window.innerWidth >= 768) {
            setSidebarVisible(true);
        }

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
        
        fetch(`/api/getTwitchData/`, {method: 'POST', headers: {'Content-Type': 'application/json'},  body: JSON.stringify(namesArray)})
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
            <Navbar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} mobileNavVisible={mobileNavVisible} toggleMobileNav={toggleMobileNav}/>
            <div className='flex w-screen'>
                <Sidebar className='' streamerObjects={streamerObjects} sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}/>
                <div className=''>
                    <Hero streamerObjects={streamerObjects} otkVideoId={otkVideoId}/>
                    <Events/>
                    <Videos recentMemberVideos={recentMemberVideos}/>
                    <Streamers/>
                    <Merch/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
