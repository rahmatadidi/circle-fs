import { useEffect, useState } from "react";
import { Search } from "../component/search";
import { SideBarLeft } from "../component/sidebar-left";
import { SideBarRight } from "../component/sidebar-right";

const SearchPage = () => {
  const urlSearch = "https://api.npoint.io/502a020e479b64df4a3d";
  interface search {
    image: string;
    name: string;
    username: string;
    bio: string;
    time: string;
    content: string;
    comment: number;
  }

  const [search, setSearch] = useState<search[]>([]);

  const getDataCard = async () => {
    const response = await fetch(urlSearch);
    const dataSearched = await response.json();
    setSearch(dataSearched);
  };
  useEffect(() => {
    getDataCard();
  }, []);

  return (
    <div style={{ display: "flex" }}>
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              placeholder="Search Name"
              style={{
                border: "none",
                backgroundColor: "#414040",
                borderRadius: "20px",
                borderBottom: "0.5px solid #444545",
                marginRight: "1px",
                width: "60%",
                padding: "0.5rem 0.5rem 0.5rem 1rem",
                marginLeft: "0.5rem",
                color: "white",
                outline: "none",
              }}
              type="text"
            />
            <button
              style={{
                border: "none",
                backgroundColor: "#414040",
                width: "5%",
                color: "#fff",
                borderRadius: "20px",
                cursor: "pointer",
                justifyContent: "center",
                display: "block",
                margin: "0.2rem -2.8rem ",
                padding: "5px",
              }}
            >
              <img
                style={{
                  width: "50%",
                }}
                src="../src/assets/searchengin.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        {search.map((person, index) => {
          return (
            <Search
              key={index}
              image={person.image}
              name={person.name}
              username={person.username}
              bio={person.bio}
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
export default SearchPage;
