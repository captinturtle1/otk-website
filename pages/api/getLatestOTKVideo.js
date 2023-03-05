export default function handler(req, res) {
    return new Promise((resolve, reject) => {
        if (req.method === 'POST') {
            try {
                fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=UUgpRORu9JQFC_jtQeQ99hBA&maxResults=1&key=${process.env.youtube_api}`, {
                    method: "GET",
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


