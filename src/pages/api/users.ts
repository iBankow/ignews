import { NextApiRequest, NextApiResponse } from 'next';


//Next Auth (Social)

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Tiago' },
        { id: 2, name: 'Diego' },
        { id: 3, name: 'Rafa' },
    ]
    return response.json(users)
}

// Serveless