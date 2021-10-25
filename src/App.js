import CarouSel from './Components/Carousel';
import './App.css';
import Filter from './Components/CardFilter';
import ListCard from "./Components/CardList"
import { useState } from 'react';

function App() {

const [movies,setMovies]=useState([
  {
title:"Bloodshoot",
description:"Ray Garrison, a slain soldier, is re-animated with superpowers.",
posterURL:"https://i.pinimg.com/564x/ff/24/28/ff242839a6bfa703283e058566dda176.jpg",
rating:"3"
  },
  {
    title:"Fast & Furious",
    description:"Lawman Luke Hobbs and outcast Deckard Shaw form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.",
    posterURL:"https://i.pinimg.com/564x/c6/bd/47/c6bd47fa0260660fce0d74702aa64b98.jpg",
    rating:"3"
      },
   {
  title:"Thor",
   description:"The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
   posterURL:"https://i.pinimg.com/564x/71/93/6b/71936bfeec95db7124c045cee3475707.jpg",
   rating:"4"
   },
   {
  title:"Jungle Cruise",
  description:"Based on Disneyland's theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element.",
  posterURL:"https://i.pinimg.com/564x/f3/c7/a9/f3c7a9f30cf48130b73e3e2941333815.jpg",
  rating:"4"
  },
  {
  title:"Free Guy",
  description:"A bank teller discovers that he's actually an NPC inside a brutal, open world video game..",
  posterURL:"https://i.pinimg.com/564x/ec/0d/77/ec0d77592c80e22e1a862eb2c2d2ef89.jpg",
  rating:"4"
  },
  {
  title:"Nightbooks",
  description:"Follows Alex, a boy obsessed with scary stories who is imprisoned by an evil young witch in her contemporary New York City apartment.",
  posterURL:"https://i.pinimg.com/564x/b5/da/fe/b5dafea20146271f63f358501533f2f4.jpg",
  rating:"3"
   },
   {
    title:"Dune",
    description:"Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
    posterURL:"https://i.pinimg.com/564x/10/17/d6/1017d65e8ce5f87675b63e8667053e98.jpg",
    rating:"4"
     },
     {
      title:"Night Teeth",
      description:"A college student moonlighting as a chauffeur picks up two mysterious women for a night of party-hopping across LA. But when he uncovers their bloodthirsty intentions - and their dangerous, shadowy underworld - he must fight to stay",
      posterURL:"https://i.pinimg.com/564x/29/00/4c/29004c3c6ab1a4e438d9cd258b0658e1.jpg",
      rating:"2"
     },
     {
      title:"The Tomorrow War",
      description:"A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.",
      posterURL:"https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
      rating:"3"
     },
     {
      title:"Tom and Jerry",
      description:"Adaptation of the classic Hanna-Barbera property, which reveals how Tom and Jerry first meet and form their rivalry.",
      posterURL:"https://m.media-amazon.com/images/M/MV5BYzE3ODhiNzAtOWY4MS00NTdiLThmNDctNDM4NjRiNGFmYjI1XkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_SX300.jpg",
      rating:"3"
     } 
])
const [searchTitle, setSearchTitle] = useState("");
  const [rating, setRating] = useState(1);

  const getSearch = (title) => {
    setSearchTitle(title);
  };
  const getRating = (rating) => {
    setRating(rating);
  };


const Add=(newtit,newdes,newpost,newrat)=>{
  setMovies([...movies,{title:newtit,description:newdes,posterURL:newpost,rating:newrat}])
};

  return (
    <div className="App">
    <CarouSel/>
    <Filter  Add={Add} getSearch={getSearch} getRating={getRating}/>
    <ListCard movies={movies} searchTitle={searchTitle} rating={rating}/>
   
    </div>
  );
}

export default App;
