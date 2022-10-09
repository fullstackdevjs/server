import axios from 'axios';
import { Request, Response } from 'express';


const API_URI = process.env.API_URI!

export const myCopies = async (req: Request, res: Response) => {
    const { access_token } = req.headers
    try {
        const { data } = await axios.get(`${API_URI}/copys`, {
            headers: {
                access_token
            }
        })

        return res.status(200).json(data)
    } catch (error: any) {
        console.log(error)
        return res.status(400).json(error)
    }
}



export const saveCopy = async (req: Request, res: Response) => {
    const { access_token } = req.headers;
    const datas = req.body;
    try {
        const { data } = await axios.post(`${API_URI}/copys`, datas, {
            headers: {
                access_token
            }
        })

        return res.status(201).json(data)
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const deleteCopy = async (req: Request, res: Response) => {
    const { _id } = req.params;
    const { access_token } = req.headers;


    try {
        const { data } = await axios.delete(`${API_URI}/copys/${_id}`, {
            headers: { access_token }
        })

        return res.status(200).json(data)
    } catch (error) {
        return res.status(400).json(error)
    }
}

//TODO: Generate Copy

export const generateCopy = async (req: Request, res: Response) => {
    const datas = req.body

    try {
        const { data } = await axios.post(`${API_URI}/completions/`, datas);
        return res.status(201).json(data)
    } catch (error) {
        return res.status(400).json(error)
    }
}


//TODO: Contacts Handlers:

export const contacts = async (req: Request, res: Response) => {
    const datas = req.body;

    try {
        const { data } = await axios.post(`${process.env.API_CONTACT_URI!}/contacts`, datas);

        return res.status(201).json(data)
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const help = async (req: Request, res: Response) => {
    const datas = req.body;

    try {
        const { data } = await axios.post(`${process.env.API_CONTACT_URI!}/helps`, datas);

        return res.status(201).json(data)
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const newsletter = async (req: Request, res: Response) => {
    const datas = req.body;

    try {
        const { data } = await axios.post(`${process.env.API_CONTACT_URI!}/newsletters`, datas);

        return res.status(201).json(data)
    } catch (error: any) {
        return res.status(400).json(error.response.data)
    }
}