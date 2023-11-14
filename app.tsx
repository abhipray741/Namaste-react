import React from 'react';
import ReactDOM from 'react-dom/client';
/*
* 
*
*
* <div id="parent">
*       <div id="child">
*       <h1> i am a h1 tag </h1>
*       <h2> i am h2 tag </h2>
*    </div>
*       <div id="child2">
*       <h1> i am a h1 tag </h1>
*       <h2> i am h2 tag </h2>
*    </div>
* </div>
*
* ReactElement(object)=>HTML(Browser understand)
*/
// const parent = React.createElement(
//     'div',
//     {id : "parent"},[ React.createElement('div',{ id:"child" } , [
//         React.createElement('h1',{},"i am h1 tag"),
//         React.createElement('h2',{},"i am h2 tag")]
//     ), React.createElement('div',{ id:"child2" } , [
//         React.createElement('h1',{},"i am h1 tag"),
//         React.createElement('h2',{},"i am h2 tag")]
//     )]
   
// )
// JSX 

// const heading  = React.createElement('h1',{id:"heading"},"Hello World from react!")
// console.log(parent) //object
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);


// reactElement => object =>HTMLElement(render)

// root.render will replace html in your index.html 

// type fooType ={
//     name:string;
//     age?:number;
// }

// function doSomething({name='default',age=0}:fooType){
    
//     return <div>{`${name}-${age}`}</div>
// }
// <doSomething name="/>
