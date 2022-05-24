import axios from 'axios';

export default {
    parseMatrixId: (matrixId: string) => {
        const [username, server] = matrixId.split('@');
        return { username, server };
    },
    validateToken: async (token: string, homeserver: string) => {
        const req = await axios.get(`https://${homeserver}/api/v1/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (req.status == 200) return true;
        else return false;
    },
    getUsernameByToken: async (token: string, homeserver: string) => {
        const req = await axios.get(`https://${homeserver}/api/v1/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return req.data.user_id;
    },
    isUserSpaceOwner: async (token: string, homeserver: string, spaceId: string) => {
        const req = await axios.get(`https://${homeserver}/api/v1/spaces/${spaceId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(req.data);
        return req.data.user_id;
    }
};