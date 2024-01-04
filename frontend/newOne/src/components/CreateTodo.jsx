import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle] = useState("") ;
    const [description,setDescriptiion] = useState("") ;

    return <div>
        <input style = {{
            margin : 10 ,
            padding : 10
        }} type = "text" placeholder = "title" onChange = {function(e){
            const value = e.target.value ;
            setTitle(e.target.value) ;
        }}></input><br/>
        <input style = {{
            margin : 10 ,
            padding : 10
        }} type = "text" placeholder = "Description" onChange = {function(e){
            const value = e.target.value ;
            setDescriptiion(e.target.value) ;
        }}></input><br/> 

        <button style = {{
            margin : 10 ,
            padding : 10 
        }} onClick={() => {
            fetch("http://localhost:3000/todo",{
                method : "POST" ,
                body : JSON.stringify({
                    title : title ,
                    description : description,
                    completed : false 
                }),
                headers : {
                    "Content-Type" : "application/json"
                }
            })
                .then(async function(res){
                    const json = await res.json() ;
                    alert("Todo Added") ;
                })
        }}> Add Todo</button> 

    </div>
}