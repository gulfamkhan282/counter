// import About from "./About";
// import Page from "./Page";


const data= [{
    title : "Alii and sajjad",
    text : "asdsadjjdj sadlkjdjsl asdlkjfj'sa asd;lkjd",
},
{   
    title : "Naseem and Khuawja",
    text :  "osdkfjsdnf;dsjfhdj;fnhhfn;ldf",
}
]
const App = (props) => {
    return (
        <div>
            <Page title ={data[0].title}  text= {data[0].text}
            />
            <Page title = {data[1].title}  text={data[1].text}
            />
            <About/>
        </div>
    );
};
export default App;




// const App = (props) => {
//     const myStyle= {backgroundColor:'blue',
//     color : 'white',
//     fontSize :'20px'
//  }
//  const flags =  {
//      flag : true,
//  };
//      const jsx = 
//          <div>
//         <button disabled={flags.flag}>Click</button>
//         <button disabled={flags.flag}>Click</button>
//         <button>Click</button>
//         <button>Click</button>
//  </div>
     
 
    
//     return (
//         <div>
//             <p style= {myStyle}>This is someline</p>
//         <p style= {myStyle}>This is another line</p>
//           {flag ? console.log('Pass'): console.log('Fail')}
//           { jsx}
//         </div>
//     );
//   };
//   export default App;