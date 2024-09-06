import { useEffect, useState } from "react";
import { Card } from "../component/card";
import { SideBarLeft } from "../component/sidebar-left";
import { SideBarRight } from "../component/sidebar-right";
import { ApiHomePage } from "../libs/api";
import { RootState } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const currentUser = useSelector((state: RootState) => state.auth).user;
  const dispatch = useDispatch();
  console.log(currentUser);
  // const url = "http://localhost:4000/api/v1/card";

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

  const [cards, setCard] = useState<card[]>([]);

  const getDataCard = async () => {
    const response = await ApiHomePage.get("/card");
    const dataCard = await response.data;
    setCard(dataCard);
  };
  useEffect(() => {
    getDataCard();
  }, []);

  return (
    <div style={{ display: "flex", backgroundColor: "#2C2C2C" }}>
      <SideBarLeft />
      <div style={{ width: "60%" }}>
        <div
          style={{
            backgroundColor: "#2C2C2C",
            marginLeft: "26%",
            width: "100%",
            padding: "1rem 1.6rem",
            borderBottom: " 0.1px solid #444545 ",
          }}
        >
          <h2
            style={{
              margin: "15px 0",
              color: "#fff",
            }}
          >
            Home
          </h2>
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
              src={currentUser.profileImage}
              alt=""
            />
            <input
              placeholder="Apa Yang Anda  Pikirkan?"
              style={{
                border: "none",
                backgroundColor: "#2C2C2C",
                borderBottom: "0.5px solid #444545",
                marginRight: "1rem",
                width: "40%",
                padding: "1rem 1rem 0.5rem 0",
                marginLeft: "0.5rem",
                outline: "none",
                color: "white",
              }}
              type="text"
            />
            <input
              type="file"
              id="post-image"
              name="post-image"
              style={{ display: "none" }}
            />
            <label htmlFor="post-image" style={{ cursor: "pointer" }}>
              <img src="../src/assets/add-photo.svg" alt="add-photo" />
            </label>

            <button
              style={{
                border: "none",
                backgroundColor: "#8066FF",
                width: "10%",
                color: "#fff",
                borderRadius: "20px",
                padding: "5px",
                cursor: "pointer",
                justifyContent: "center",
                display: "block",
                margin: "1rem ",
              }}
            >
              Post
            </button>
          </div>
        </div>
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              image={currentUser.profileImage}
              name={card.name}
              username={currentUser.username}
              time={card.time}
              content={card.content}
              comment={card.comment}
              iconComment={"../src/assets/comment-solid.svg"}
              iconLike={"../src/assets/heart-solid.svg"}
            />
          );
        })}
      </div>
      <div style={{ width: "30%" }}>
        <SideBarRight />
      </div>
    </div>
  );
};
export default HomePage;
