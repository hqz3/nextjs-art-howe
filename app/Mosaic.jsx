"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Mosaic({ mosaicData, randomize }) {
  const mosaicElement = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (randomize) {
      const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
      };
      const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
      };
      // Fisher-Yates algorithm to generate a randomly ordered mosaic
      for (let i = mosaicData.length - 1; i >= 0; i--) {
        let randomIdx = getRandomInt(i);
        swap(mosaicData, i, randomIdx);
      }
    }
    setLoading(false);
  }, [mosaicData, randomize]);

  function handleMosaicHover(e) {
    if (e.target.dataset?.image !== "regular") return;
    const mosaicWidth = mosaicElement.current.offsetWidth;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;

    e.target.classList = "";
    if (e.clientX <= mosaicWidth / 2) e.target.classList.add("hover-right");
    else e.target.classList.add("hover-left");

    if (e.pageY + 150 >= Math.max(windowHeight, scrollHeight)) {
      e.target.classList.add("up");
    }
  }

  if (!loading) {
    return (
      <>
        <div
          className="mosaic"
          onMouseOver={handleMosaicHover}
          ref={mosaicElement}
        >
          {mosaicData.map((post) => (
            <div className="mosaic__container" key={post.id}>
              <Link href={"/artwork/" + String(post.id)} prefetch={false}>
                <Image
                  src={post.thumbnail}
                  data-image="pixelated"
                  alt={post.title}
                  height={10}
                  width={10}
                />
                <Image
                  src={post.medium}
                  data-image="regular"
                  alt={post.title}
                  height={post.height}
                  width={post.width}
                />
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}
