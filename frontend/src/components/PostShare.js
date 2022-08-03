import React, { useRef, useState } from "react";
import Cover from "../assets/images/cover.png";
import {
  PhotographIcon,
  LocationMarkerIcon,
  FilmIcon,
  CalendarIcon,
} from "@heroicons/react/outline";

function PostShare() {
  const [image, setImage] = useState(null);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const imageRef = useRef();
  return (
    <div className=" bg-slate-800 p-2 rounded">
      <div className="flex flex-row gap-x-2 items-center">
        <img src={Cover} alt="" className="h-16 w-16 rounded-full" />
        <input
          type="text"
          className="w-full text-xl text-white px-1 py-2 bg-slate-800 border-none outline-none"
          placeholder="What's happening?"
        />
      </div>
      <div className="flex flex-row justify-around mt-2">
        <div>
          <span onClick={() => imageRef.current.click()}>
            <PhotographIcon className="text-white h-5 w-5 cursor-pointer" />
          </span>
        </div>
        <div>
          <span>
            <FilmIcon className="text-white h-5 w-5" />
          </span>
        </div>
        <div>
          <span>GIF</span>
        </div>
        <div>
          <span>
            <CalendarIcon className="text-white h-5 w-5" />
          </span>
        </div>

        <div>
          <span>
            <LocationMarkerIcon className="text-white h-5 w-5" />
          </span>
        </div>
        <div className="hidden">
          <input type="file" ref={imageRef} onChange={onImageChange} />
        </div>
        <div>
          <button className="bg-sky-500/80 hover:bg-sky-500/90 text-white px-6 py-1 rounded-full">
            Share
          </button>
        </div>
      </div>
      {image && (
        <div className="pt-2">
          <span
            onClick={() => setImage(null)}
            className="flex justify-end cursor-pointer"
          >
            X
          </span>
          <img src={URL.createObjectURL(image)} alt="" />
        </div>
      )}
    </div>
  );
}

export default PostShare;
