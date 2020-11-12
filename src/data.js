import { v4 as uuid } from "uuid";

function myMusic() {
  return [
    {
      name: "New Patek",
      cover:
        "https://preview.redd.it/vzlrh3gcz4b21.png?width=960&crop=smart&auto=webp&s=8ff6b5806b8f6ceb57f1ee1d018b31fcb02de57b",
      audio: "https://free.mp3-download.best/-auUGvH:aXgEJ",
      artist: "Lil Uzi Vert",
      color: ["#FFFFFF", "#FBFBFB"],
      id: uuid,
      active: true,
    },
    {
      name: "Lean Wit Me",
      cover:
        "https://images-na.ssl-images-amazon.com/images/I/51k7NW-TZkL._AC_.jpg",
      audio: "https://free.mp3-download.best/BucVvB:WUY1rB",
      artist: "Juice Wrld",
      color: ["#FFFFFF", "#FBFBFB"],
      id: uuid,
      active: false,
    },
    {
      name: "Lalala",
      cover: "https://i1.sndcdn.com/artworks-000556999389-zr4qub-t500x500.jpg",
      audio: "https://free.mp3-download.best/QucVvB:cMh2rB",
      artist: "Y2K & bbno$",
      color: ["#FFFFFF", "#FBFBFB"],
      id: uuid,
      active: false,
    },
  ];
}

export default myMusic;
