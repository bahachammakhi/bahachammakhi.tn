// pages/404.js
export default function Custom404() {
  return (
    <div style={{ margin: "50px", display: "flex", flexDirection: "column" }}>
      <img
        style={{
          width: "500px",
          margin: "auto",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
        src="/static/svg/404.svg"
      />
      <h1 style={{ textAlign: "center" }}>
        Sorry, the page you visited does not exist.
      </h1>
    </div>
  );
}
