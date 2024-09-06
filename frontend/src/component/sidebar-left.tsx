export function SideBarLeft() {
  return (
    <div
      style={{
        width: "16%",
        height: "100%",
        backgroundColor: "#2C2C2C",
        borderRight: "0.1px solid #444545",
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "10rem",
      }}
    >
      <h1
        style={{
          margin: "1.7rem",
          color: "#8066FF",
        }}
      >
        MyCircle
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "10%", margin: "1rem" }}
          src="../src/assets/house-solid.svg"
          alt="home"
        />
        <h3
          style={{
            color: "#FFF",
          }}
        >
          Home
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "10%", margin: "1rem" }}
          src="../src/assets/searchengin.svg"
          alt="search"
        />
        <h3
          style={{
            color: "#FFF",
          }}
        >
          Search
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "10%", margin: "1rem" }}
          src="../src/assets/user-plus-solid.svg"
          alt="follows"
        />
        <h3
          style={{
            color: "#FFF",
          }}
        >
          Follows
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "10%", margin: "1rem" }}
          src="../src/assets/address-card-solid.svg"
          alt="profile"
        />
        <h3
          style={{
            color: "#FFF",
          }}
        >
          Profile
        </h3>
      </div>
      <button
        style={{
          border: "none",
          backgroundColor: "#8066FF",
          width: "80%",
          color: "#fff",
          borderRadius: "20px",
          padding: "10px",
          cursor: "pointer",
          justifyContent: "center",
          display: "block",
          margin: "2rem auto",
        }}
      >
        Create Post
      </button>
    </div>
  );
}
