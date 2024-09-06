import { useState } from "react";

interface suggest {
  image: string;
  name: string;
  username: string;
}
export function Suggested(props: suggest) {
  const [follow, setFollow] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [btnStyle, setBtnStyle] = useState({
    borderRadius: "15px",
    padding: "5px 0",
    width: "20%",
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
      width: prevStyle.width === "20%" ? "90px" : "20%",
      color: prevStyle.color === "white" ? "#C3C6C7" : "white",
      marginLeft: prevStyle.marginLeft === "0px" ? "-21.7px" : "0px",
    }));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "0.1px solid #444545",
      }}
    >
      <img
        style={{
          width: "3rem",
          height: "3rem",
          borderRadius: "50px",
          objectFit: "cover",
          border: "3px solid #414040",
        }}
        src={props.image}
        alt="profile"
      />
      <div
        style={{
          width: "50%",
          marginLeft: "-2.5rem",
        }}
      >
        <p
          style={{
            marginTop: "15px",
            marginBottom: "0.3px",
            color: "white",
          }}
        >
          {props.name}
        </p>
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
      </div>
      <button id="button-follow" onClick={handleFollow} style={btnStyle}>
        {followed ? "Following" : "Follow"}
      </button>
    </div>
  );
}
