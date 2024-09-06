import { useState } from "react";

interface search {
  image: string;
  name: string;
  username: string;
  bio: string;
}

export function Search(props: search) {
  const [follow, setFollow] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [btnStyle, setBtnStyle] = useState({
    borderRadius: "15px",
    padding: "5px 0",
    width: "10%",
    backgroundColor: "#414040",
    borderColor: "white",
    borderWidth: "0.2px",
    color: "white",
    fontSize: "13px",
    cursor: "pointer",
    marginLeft: "0px",
  });

  const handleFollow = () => {
    setFollow(!follow);
    setFollowed(!followed);
    setBtnStyle((prevStyle) => ({
      ...prevStyle,
      borderColor: prevStyle.borderColor === "white" ? "#C3C6C7" : "white",
      color: prevStyle.color === "white" ? "#C3C6C7" : "white",
    }));
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#2C2C2C",
          borderBottom: " 0.1px solid #444545 ",
          marginLeft: "26%",
          display: "flex",
          padding: "0.3rem 1rem",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "50px",
            objectFit: "cover",
            border: "3px solid #414040",
            marginRight: "0.5rem",
          }}
          src={props.image}
          alt="img"
        />
        <div
          style={{
            width: "60%",
          }}
        >
          <h3
            style={{
              marginTop: "15px",
              marginBottom: "0.3px",
              color: "white",
              marginLeft: "0",
            }}
          >
            {props.name}
          </h3>
          <p
            style={{
              marginTop: "0px",
              fontSize: "0.7rem",
              color: "#C3C6C7",
              opacity: "0.5",
            }}
          >
            {props.username}
          </p>
          <p
            style={{
              marginTop: "0px",
              fontSize: "0.7rem",
              color: "#fff",
            }}
          >
            {props.bio}
          </p>
        </div>
        <button id="button-follow" onClick={handleFollow} style={btnStyle}>
          {followed ? "Following" : "Follow"}
        </button>
      </div>
    </>
  );
}
