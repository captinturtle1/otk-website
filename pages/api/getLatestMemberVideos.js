export default function handler(req, res) {
    return new Promise((resolve, reject) => {
        if (req.method === 'POST') {
            try {
                let videoIdArray = [];
                for (let i = 0; i < req.body.length; i++) {
                    fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${req.body[i]}&maxResults=1&key=${process.env.YOUTUBE_SECRET}`, {
                        method: "GET",
                    })
                    .then((response) => response.json())
                    .then((data) => {
                        videoIdArray.push(data.items[0].contentDetails.videoId);
                        if (videoIdArray.length == req.body.length) {
                            res.status(200).json({ videoIdArray });
                            resolve();
                        }
                    })
                    .catch(console.log)
                }
                
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


