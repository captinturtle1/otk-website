let accessToken = '';


// get inital access_token
fetch('https://id.twitch.tv/oauth2/token', {
    method: 'POST',
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    },    
    body: new URLSearchParams({
        'client_id': process.env.TWITCH_CLIENT_ID,
        'client_secret': process.env.TWITCH_CLIENT_SECRET,
        'grant_type': 'client_credentials'
    })
})
.then((response) => response.json())
.then((data) => accessToken = data.access_token)
.catch(console.log);

export default function handler(req, res) {
    return new Promise((resolve, reject) => {
        if (req.method === 'POST') {
            try {
                let urlParems = '';
                for (let i = 0; i < req.body.length; i++) {
                    if (i == 0) {
                        urlParems = urlParems.concat('user_login=', req.body[i]);
                    } else {
                        urlParems = urlParems.concat('&user_login=', req.body[i]);
                    }
                }
                fetch(`https://api.twitch.tv/helix/streams?${urlParems}`, {
                    method: "GET",
                    headers: {
                        'Authorization': 'Bearer ' + accessToken,
                        'Client-Id': process.env.TWITCH_CLIENT_ID
                    }
                })
                .then((response) => response.json())
                .then((data) => {
                    if (data.error) {
                        // if token is invalid, get a new token
                        fetch('https://id.twitch.tv/oauth2/token', {
                            method: 'POST',
                            headers:{
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },    
                            body: new URLSearchParams({
                                'client_id': process.env.TWITCH_CLIENT_ID,
                                'client_secret': process.env.TWITCH_CLIENT_SECRET,
                                'grant_type': 'client_credentials'
                            })
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            // setting new token
                            accessToken = data.access_token;
                            // trying to get streams again with new token set
                            fetch(`https://api.twitch.tv/helix/streams?${urlParems}`, {
                                method: "GET",
                                headers: {
                                    'Authorization': 'Bearer ' + accessToken,
                                    'Client-Id': process.env.TWITCH_CLIENT_ID
                                }
                            })
                            .then((response) => response.json())
                            .then((data) => {
                                res.status(200).json({ data });
                                resolve();
                            })
                        })
                    } else {
                        // if token is good
                        res.status(200).json({ data });
                        resolve();
                    }
                })
            } catch(err) {
                res.status(500).json({ error: '500 Internal Server Error'});
                reject();
                console.log(err);
            }
        } else {
            res.status(400).json({ error: '400 Bad Request'});
            reject();
        }
    });
}


