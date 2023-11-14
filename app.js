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


// react element
// const Title = () => (
//     <h1 className="head" tabIndex="5">
//         Nameste react usig jsx 
//     </h1>
// )

// react component 
// every thing is in react is component
// there are two types of components
// class based components - old way of making component 
// functional components - new way of making components
// you should be very good in making functional components in today era 
// this is component composition using functional component inside another 

// React functional components : just a normal javascript function which returns some jsx 
// const HeadingComponent =() => (
//     <div id="container">
//         {
//         // inside curly braces inside jsx we can any any javascript expression 
//         }
//         <Title/>  
//     <h1>Nameste react Functional component</h1>;
//     </div>
// )

// react elemt is jsx 
// a function which returning the react element is called functional component


/**
 * Header
 *  -Logo
 *  -Nav-items
 * Body
 *  -Search
 *  -ResturantContainer
 *      -RestaurantCard
 *          -Img
 *          - Name of res,Star Rating, cuisine ,dielerey etc  
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
*   -Contact
*/
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=360"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            
        </div>
    )
}
const RestaurantCard = ({resName,cuisine}) => {
    return (
        <div className='res-card' style={{backgroundColor:"#f0f0f0"}}>
            <img className='res-logo' src='https://b.zmtcdn.com/data/dish_photos/554/4d14a55c69bd31f585f3dda30db2f554.jpg'/>
             <h3>{resName}</h3>
                <h4>{cuisine}</h4>
                <h4>4.4 stars</h4>
                <h4>38 minutes</h4>


        </div>
    )
}
const Body = () => {
    return (
        <div className='body'>
            <div className='search'> 
                Search
            </div>
            <div className='res-container'>
                <RestaurantCard resName="Meghana Foods" cuisine = "North Indian,South Indian"/>               
                <RestaurantCard resName = "KFC" cuisine= "Burger , Fast Food"/>

            </div>

        </div>
    )
}

const AppLayout =()=>{
    return <div className="app">
        <Header/>
        <Body/>
    </div>
}


// console.log(jsxHeading)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)