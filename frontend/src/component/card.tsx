import { useState } from "react";

interface card {
  image: string;
  name: string;
  username: string;
  content: string;
  time: string;
  // like: number;
  comment: number;
  iconComment: string;
  iconLike: string;
}

export function Card(props: card) {
  // console.log(props);
  const [likes, setLikes] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLikes(!likes);
    setLiked(!liked);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#2C2C2C",
          borderBottom: " 0.1px solid #444545 ",
          marginLeft: "26%",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "#2C2C2C",
            padding: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50px",
                objectFit: "cover",
                marginRight: "0.3rem",
              }}
              src={props.image}
              alt=""
            />
            <p
              style={{
                margin: "0 0.2rem",
                fontWeight: "bold",
                color: "#FFF",
                fontSize: "1.4rem",
              }}
            >
              {props.name}
            </p>
            <p
              style={{
                margin: "0 0.2rem",
                color: "#C3C6C7",
                fontSize: "0.7rem",
                opacity: "0.5",
              }}
            >
              {props.username}
            </p>
            <p
              style={{
                margin: "0 0.2rem",
                color: "#C3C6C7",
                fontSize: "0.7rem",
                opacity: "0.5",
              }}
            >
              {props.time}
            </p>
          </div>
          <div
            style={{
              marginLeft: "3.5rem",
            }}
          >
            <p
              style={{
                color: "#fff",
                marginRight: "10rem",
              }}
            >
              {props.content}
            </p>
            <img
              style={{
                width: "60%",
                borderRadius: "5px",
              }}
              src={props.image}
              alt="default.jpg"
            />
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <a
              onClick={handleLike}
              style={{
                marginTop: "0.6rem",
                cursor: "pointer",
              }}
            >
              <img
                style={{
                  width: "2rem",
                  alignItems: "center",
                  marginRight: "0.5rem",
                  marginLeft: "3.5rem",
                }}
                src={
                  liked ? "../src/assets/heart-solid-red.svg" : props.iconLike
                }
                alt="icon"
              />
            </a>
            <p
              style={{
                color: "#C3C6C7",
                alignItems: "center",
                marginRight: "1.5rem",
              }}
            >
              {likes ? 0 + 1 : 0}
            </p>
            <a
              href="#"
              style={{
                marginTop: "0.6rem",
              }}
            >
              <img
                style={{
                  width: "2rem",
                  alignItems: "center",
                  marginRight: "0.5rem",
                }}
                src={props.iconComment}
                alt="icon"
              />
            </a>
            <p
              style={{
                color: "#C3C6C7",
              }}
            >
              {props.comment} Replies
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
