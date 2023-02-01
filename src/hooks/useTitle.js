import { useEffect } from "react";

export default function useTitle (title = '', dependencies = []) {

    if (!Array.isArray(dependencies)){
        console.error('No se paso un array como dependencia en useAsync');
        dependencies = []
    }

    useEffect(()=>{
        document.title = title
    }, dependencies) //eslint-disable-line
}