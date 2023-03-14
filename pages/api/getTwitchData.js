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
                        'Authorization': 'Bearer ' + process.env.access_token,
                        'Client-Id': process.env.client_id
                    }
                })
                .then((response) => response.json())
                .then((data) => {
                    res.status(200).json({ data });
                    resolve();
                })
            } catch(err) {
                res.status(500).json({ error: '500 Internal Server Error'});
                reject();
            }
        } else {
            res.status(400).json({ error: '400 Bad Request'});
            reject();
        }
    });
}


