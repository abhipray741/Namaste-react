import React from 'react';
import {useRef,useEffect} from 'react'
export function foo() {
    const val =useRef("hi there ")
    useEffect(() => {
        val.current=20
    }, [])
    return <div>
        Ref demo
    </div>
}