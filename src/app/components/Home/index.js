"use client";
import { React, useState } from "react";
import image1 from "./../../../../public/images/blur.png";
import image2 from "./../../../../public/images/logo.webp";
import  {useRouter}  from "next/navigation";
import { TodoList } from "../TodoList";
import Image from "next/image";
export const HomeComponent = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const router = useRouter();
  const imageLoader = ({ src, width, quality }) => {
    return `https://images.pexels.com/photos/${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodoList([...todoList, value]);
          setValue("");
         console.log(todoList);
          router.push("/todoList",todoList)
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <button
          type="submit"
         
         
        >
          Submit
        </button>

      </form>
      <h4 style={{textAlign:"center"}}>Image Gallery</h4>
     <div style={{display:"flex",flexDirection:'column',gap:10}} >

     <Image
      style={{marginRight:"6px"}}
      loader={imageLoader}
      src={"18306469/pexels-photo-18306469/free-photo-of-reflection.jpeg"}
      width={250}
      height={250}
     
      alt="Pexels Photo"
      />

   
      <Image
           style={{marginRight:"6px"}}
      src={"https://images.pexels.com/photos/18174740/pexels-photo-18174740/free-photo-of-salad-with-tomatoes-and-lemon-topped-with-sauce.jpeg"}
      width={250}
      height={250}
      quality={10}
      alt="Pexels Photo"
      />
      <Image
    style={{marginRight:"6px"}}
      src={"https://images.pexels.com/photos/18427938/pexels-photo-18427938/free-photo-of-autumn-mountains.jpeg"}
      width={250}
      height={250}
      priority={true}
      alt="Pexels Photo"
      />
      <Image
     style={{marginRight:"6px"}}
      src={"https://images.pexels.com/photos/17079655/pexels-photo-17079655/free-photo-of-tents-on-camping-in-mountains.jpeg"}
      width={250}
      height={250}
      alt="Pexels Photo"
      />
      <Image
 style={{marginRight:"6px"}}
      src={"https://images.pexels.com/photos/17720178/pexels-photo-17720178/free-photo-of-vacation-building-garden-leaf.jpeg"}
      width={250}
      height={250}
      alt="Pexels Photo"
      />
       <Image
      style={{marginRight:"6px"}}
      src={image1}
      width={250}
      height={250}
      placeholder="blur"
      blurDataURL={`${image1}`}
   
      alt="Pexels Photo"
      />
       <Image
      style={{marginRight:"6px"}}
      src={image2}
     
      placeholder="blur"
      blurDataURL={`${image2}`}
   
      alt="Pexels Photo"
      />
     </div>
    </>
  );
};
