import * as CONSTANT from './constants.utils'

const headers = {
    'Authorization': `Basic MTIzNDU2Nzg5MDEyOjEyMzQ1Njc4OTAxMg==`,
    'Content-Type': 'application/json',
    'withCredentials' : true,
    'crossDomain': true,
  }


export const servicePost = async (body, endpoint) => {
    try{
        console.log("Consultando : ", `${CONSTANT.uri}/${endpoint}`);
        
        let responseService = await fetch(`${CONSTANT.uri}/${endpoint}`, {
            method: 'POST',
            headers,
            body
        });

        return responseService
    }catch (err){
        return {ERROR: err.message}
    }
}


export const serviceGet = (url, headers) => {
    
}
