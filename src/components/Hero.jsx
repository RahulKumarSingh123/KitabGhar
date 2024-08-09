import React from "react"
import { useState } from "react";

//Books Data
 export let books=[
    {
        title:"Harry Potter and Order of the Phoenix",
        author:"J.K. Rowlings",
        about:"Harry Potter is about to start his fifth year at Hogwarts School of Witchcraft and Wizardy.Unlike most schoolboys,Harry never enjoys his summer holidays,but this summer is worse than usual. The Dursleys, of course, are making his life a misery, but even his best friends, Ron and Hermione, seem to be neglecting him.",
        image:"https://th.bing.com/th/id/R.d997092c15793c0d27c4d46625871443?rik=RPYdshZv8ZEh2Q&riu=http%3a%2f%2fis5.mzstatic.com%2fimage%2fthumb%2fVideo2%2fv4%2fdd%2f67%2f24%2fdd67243d-87d8-2299-4c76-d37a1e04a7ca%2fsource%2f1200x630bb.jpg&ehk=ROjrVLYfRQanjNTXK5BvhgC3OBelKh2VGRO0HsBqsS4%3d&risl=&pid=ImgRaw&r=0",
        price:"",
    },
    {
        title:"Death's Country",
        author:"R.M. Romero",
        about:"Hadestown meets “Orpheus and Eurydice” when two Miami teens travel to the underworld to retrieve their girlfriend’s soul.",
        image:"https://static.wixstatic.com/media/82a97d_2d4c62410ca340d7823c8318fc189218~mv2.jpg/v1/fill/w_980,h_1503,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82a97d_2d4c62410ca340d7823c8318fc189218~mv2.jpg",
        price:"",
    },
    {
        title:"We Shall Be Monsters",
        author:"Tara Sim",
        about:"Frankenstein meets Indian mythology in this twisty, darkly atmospheric fantasy where the horror is not the monsters you face but the ones you create.",
        image:"https://images4.penguinrandomhouse.com/cover/9780593407424",
        price:"",
    }
]



export default function Hero(){
    const [index,setIndex]=useState(0);
    return(
        <div style={{height:"87vh"}} className="flex flex-col-reverse md:flex-row transition-transform duration-300 dark:bg-gray-800 dark:text-white">
            <div className="flex flex-col w-full h-1/2 md:w-6/12  md:h-full gap-2 justify-center text-start p-4 px-8">
                <h1 className="text-4xl md:text-6xl font-bold" data-aos={"zoom-out"} >{books[index].title}</h1>
                <h3 className="text-right text-lg font-semibold text-primary" data-aos="slide-right">----by {books[index].author}</h3>
                <p className="text-sm font-normal md:font-medium text-gray-600" data-aos="fade-right">{books[index].about}</p>
                <div className="mt-3"><button className="bg-pink-600 pr-4 pl-4 p-2 text-white font-medium rounded-full hover:scale-105" data-aos="flip-left">Order Now</button></div>
            </div>
            <div className="w-full h-1/2 md:h-full md:w-6/12 flex">
                <img src={books[index].image} className="w-9/12 m-8 md:m-16 rounded-lg shadow-xl" data-aos="zoom-in"></img>
                <div className="flex flex-col justify-center items-start ml-6 gap-6 rounded-lg w-3/12 h-full" data-aos="zoom-out">
                    <img src={books[0].image} className={(index==0)?"h-24 scale-125":"h-24"} onClick={()=>setIndex(0)}></img>
                    <img src={books[1].image} className={(index==1)?"h-24 scale-125":"h-24"}  onClick={()=>setIndex(1)}></img>
                    <img src={books[2].image} className={(index==2)?"h-24 scale-125":"h-24"}  onClick={()=>setIndex(2)}></img>
                </div>
            </div>
        </div>
    )
}