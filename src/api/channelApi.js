// import { SERVER_URL } from '../config';

class ChannelApi {

//    static allChannels() {
//        return fetch(`${SERVER_URL}/channel?sort=name&order=asc`, {
//            method: 'get',
//            headers: {
//                'Accept': 'application/json',
//                'Content-Type': 'application/json'
//            }
//        }).then(response => {
//            return response.json();
//        }).catch(error => {
//            return error;
//        });
//    }

    static allChannels() {
        const data = [
            {
                id: 1,
                name: "general"
            },
            {
                id: 2,
                name: "prog-rock"
            },
            {
                id: 4,
                name: "classic-rock"
            },
            {
                id: 5,
                name: "heavy-metal"
            }
        ];

        // Fake server request.
        return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(data); }, 500);
        });
    }

}

export default ChannelApi;

