export default function Profile() {
  return (
    <div style={{
        backgroundColor: "#e2e2e2",
        width: 500,
        height: 600,
        display: "flex",
        flexDirection:"column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        gap: 15,
        paddingLeft: 100,
    }}>

<div style={{
    backgroundColor: "#6dd1fc",
    width: 300,
    height: 250,
}}></div>

<button style={{
backgroundColor: "#4ae277",
width: 200,
height: 60,
border: "none",
}}>DM</button>

<p style={{
    fontSize: 24,
    fontFamily: "Arial",

}}>@usename</p>

<p style={{
    fontSize: 24,
    fontFamily: "Arial",
}}>bio..............</p>
</div>

  );
}