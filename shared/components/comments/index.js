export default function Comment() {
  return (
    <div style={{
        backgroundColor: "gray",
        color:"black",
        width:800,
        height:200,
        padding:30,
        position:"relative"
    }}>
        <p>@username</p>
        <p>comment 1 lorem ipsum yadi yadi yadi so..............................</p>
        <div>
            <p style={{
                marginTop:30,
                position:"absolute",
                right:20
            }}>dd/mm/yyyy - 00:00:00</p>
        </div>
        <button style={{
            backgroundColor:"lightgreen",
            color:"black",
            border:"none",
            padding:10,
            minWidth:150,
            marginTop:30,
            position:"absolute",
            right:20,
            bottom:20
        }}>
            Reply
        </button>
    </div>
  );
}