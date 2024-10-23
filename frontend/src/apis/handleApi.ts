import axiosClient from "./axiosClient"

const handleApi = async (
    url: string,
    data?: Record<string, any>,
    method?: 'post' | 'put' | 'get' | 'delete'
) => {
    return await axiosClient(url, {
        method: method ?? 'get',
        data,
    })
}


export default handleApi