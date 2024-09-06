import { useDispatch, useSelector } from "react-redux";
import { Suggested } from "./suggest";
import { useEffect, useState } from "react";
import { RootState } from "../redux/store/store";

interface suggest {
  image: string;
  name: string;
  username: string;
}

export function SideBarRight() {
  const currentUser = useSelector((state: RootState) => state.auth).user;
  const dispatch = useDispatch();
  console.log(currentUser);
  const [suggessted, setSuggested] = useState<suggest[]>([]);
  const urlSuggest = "https://api.npoint.io/5d64b3fd4b19326ec8f2";
  const getDataSuggest = async () => {
    const responseSuggest = await fetch(urlSuggest);
    const dataSuggest = await responseSuggest.json();
    setSuggested(dataSuggest);
  };
  useEffect(() => {
    getDataSuggest();
  }, []);
  console.log(suggessted);
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#2C2C2C",
          borderLeft: "0.1px solid #444545",
          marginLeft: "33%",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "#2C2C2C",
            paddingTop: "1rem",
          }}
        >
          <div
            style={{
              width: "80%",
              backgroundColor: "#414040",
              borderRadius: "15px",
              margin: "auto",
              padding: "1.5rem",
            }}
          >
            <h1
              style={{
                marginTop: "0.3rem",
                color: "white",
              }}
            >
              My Profile
            </h1>
            <img
              style={{
                width: "100%",
                height: "5rem",
                borderRadius: "10px",
                margin: "auto",
              }}
              src="https://images.pexels.com/photos/23516396/pexels-photo-23516396/free-photo-of-cahaya-sinar-kota-persimpangan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Wallpaper"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50px",
                  objectFit: "cover",
                  marginRight: "0.3rem",
                  marginTop: "-2rem",
                  marginLeft: "1rem",
                  border: "3px solid #414040",
                }}
                src={currentUser.profileImage}
                alt="profile"
              />
              <button
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#414040",
                  borderColor: "white",
                  borderWidth: "0.2px",
                  padding: "5px 10px",
                  color: "white",
                  fontSize: "13px",
                  cursor: "pointer",
                  marginTop: "3px",
                }}
              >
                Edit Profile
              </button>
            </div>
            <div>
              <h2
                style={{
                  marginTop: "0px",
                  marginBottom: "0.3px",
                  color: "white",
                }}
              >
                {currentUser.fullname}
              </h2>
              <p
                style={{
                  marginTop: "0px",
                  fontSize: "0.7rem",
                  color: "#C3C6C7",
                  opacity: "0.5",
                }}
              >
                @{currentUser.username}
              </p>
              <p
                style={{
                  color: "#fff",
                  marginBottom: "0.3rem",
                }}
              >
                {currentUser.bio}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "0",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    marginRight: "0.3rem",
                  }}
                >
                  2910
                </p>
                <p
                  style={{
                    color: "#C3C6C7",
                    opacity: "0.5",
                    marginRight: "1rem",
                  }}
                >
                  Following
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    marginRight: "0.3rem",
                  }}
                >
                  33342
                </p>
                <p
                  style={{
                    color: "#C3C6C7",
                    opacity: "0.5",
                    marginRight: "1rem",
                  }}
                >
                  Followers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "#2C2C2C",
            paddingTop: "1rem",
          }}
        >
          <div
            style={{
              width: "80%",
              backgroundColor: "#414040",
              borderRadius: "15px",
              margin: "auto",
              padding: "1.5rem",
            }}
          >
            <h1
              style={{
                marginTop: "0.3rem",
                color: "white",
              }}
            >
              Suggested For You
            </h1>
            {suggessted.map((index) => {
              return (
                <Suggested
                  image={index.image}
                  name={index.name}
                  username={index.username}
                />
              );
            })}
          </div>
          <div
            style={{
              width: "80%",
              backgroundColor: "#414040",
              borderRadius: "15px",
              margin: "1rem auto",
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "-1rem",
              }}
            >
              <p
                style={{
                  color: "#fff",
                  marginRight: "0.2rem",
                }}
              >
                Developed by Rahmat Adi Santoso
              </p>
              <div
                style={{
                  width: "3px",
                  height: "3px",
                  backgroundColor: "#c3c6c7",
                  borderRadius: "50%",
                  marginRight: "0.3rem",
                }}
              ></div>
              <img
                style={{
                  width: "1rem",
                  marginRight: "0.3rem",
                }}
                src="../src/assets/square-github.svg"
                alt="icon-github"
              />
              <img
                style={{
                  width: "1rem",
                  marginRight: "0.3rem",
                }}
                src="../src/assets/linkedin.svg"
                alt="icon-linkedin"
              />
              <img
                style={{
                  width: "1rem",
                  marginRight: "0.3rem",
                }}
                src="../src/assets/square-facebook.svg"
                alt="icon-facebook"
              />
              <img
                style={{
                  width: "1rem",
                }}
                src="../src/assets/instagram.svg"
                alt="icon-instagram"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "-1.2rem",
                marginBottom: "-1rem",
              }}
            >
              <p
                style={{
                  color: "#c3c6c7",
                  fontSize: "12px",
                  marginRight: "0.3rem",
                }}
              >
                Powered by
              </p>

              <img
                style={{
                  width: "1rem",
                  height: "0.9rem",
                  marginRight: "0.3rem",
                  marginTop: "0.3rem",
                }}
                src="../src/assets/logo-brand.png"
                alt="logo"
              />
              <p
                style={{
                  color: "#c3c6c7",
                  fontSize: "12px",
                  marginRight: "0.3rem",
                }}
              >
                DumbWays Indonesia
              </p>
              <div
                style={{
                  width: "3px",
                  height: "3px",
                  backgroundColor: "#c3c6c7",
                  borderRadius: "50%",
                  marginRight: "0.3rem",
                }}
              ></div>
              <p
                style={{
                  color: "#c3c6c7",
                  fontSize: "12px",
                }}
              >
                #1CodingBootcamp
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
