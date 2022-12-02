import Nav from "../components/Nav"
import Footer from "../components/Footer"
const Error=()=>
{
return(<>
<Nav/>
<div style={{backgroundColor:"#fff",minHeight:"80vh"}}>
<div style={{textAlign:"center",marginTop:"35vh",color:"black"}}>
<h2 className="changeFont">404: Not Found</h2>
<br/>
<h2 className="changeFont">the page you're looking for doesn't exist.</h2>
</div>
</div>
<Footer/>
</>)
}
export default Error 