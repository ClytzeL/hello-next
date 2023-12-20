import Button from "./components/button";
import {useEffect,useState} from 'react'
import { getWinWidth } from "service/win";
export default function Test(){
    const [count,setCount] = useState<number>(0);
    const width = getWinWidth();
    return (
        <div>
            <div>This is one line.</div>
            <Button onClick={()=>setCount(count=>count+1)}>Confirm:{count}</Button>
            <div>width:{width}</div>
        </div>
    )
}