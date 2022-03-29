
import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (termino) => {
    const [state, setState] = useState({
        data:[],
        loading : true
    })

    useEffect(() => {
        getGifs(termino).then(imgs =>{
            setState({
                data : imgs,
                loading : false
            });
        });
    }, [termino]);
    
    console.log(state);
    return state;
}
