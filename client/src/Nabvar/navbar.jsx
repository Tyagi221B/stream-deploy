import { Heading , Image } from "@chakra-ui/react";
import { useNavigate , Link } from "react-router-dom"
import { useEffect,useState } from "react";
import "./navbar.css"
import WebFont from 'webfontloader';
import Swal from 'sweetalert2'
import { BiUserCircle } from 'react-icons/bi';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Login from "../Main/login";
export default function Navbar(){
    const navigate = useNavigate();
    const [loginpop,setloginpop] = useState(false);
    const [user, setIsAuthenticated] = useState(false);
    const [src,setsrc] = useState("");
    const firebaseConfig = {
        apiKey: "AIzaSyBOwu1HGOc2LTTjalwwhwEkM16EdziUyEE",
        authDomain: "free-netflix-7e3cf.firebaseapp.com",
        projectId: "free-netflix-7e3cf"
    };
    firebase.initializeApp(firebaseConfig);
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            if(user.photoURL){
              setsrc(user.photoURL);
            }
            else{
              setsrc("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEUNfoD///8Ae30AeHoAdXcAdnl6q6z2+/vo8vLx+Ph1sbIAdHfu9PQHfH8AgYPl8vI7kJKRvr+hx8jO4+PJ3d4eioxppqja6eni7OxdoqRSnqC42dqXxsaw09Ntra8ph4l/uLmGtrdapqeozc02lZdMmZuuzM3A2NnU4+SRvL2fy8xSmZpEkZO+1NV1qaqNxlfBAAAEIElEQVR4nO3bXXeiOhQGYNgJg6AiiIiggtbP0U7//8+beJzjoCYtSAQ7630uetVmvZuEEOnWMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvjNi3Ii8rkWtpuiLGCyKxA/dOchIZ3FPmGc5tVckGf4iPMUIA9/QGYNoEZr/c4Y+0zh2FSydX2KY00RfDDJ2ZlEnbadEa+EUYziBrlkkPzav2W4rJc5vYphzTQPTbYGixBZmkc/uYphDPTG29yObHb/p7YYSSQxzqSEGJbZs6FX9kavJQ1mMQV6/RDaVjWzaDU8i/ZDGMBf116knH1nH0FUoLrQ5qR2D3hQVhl0dwUvjihh2VHctsZVqaC3By6K1IoaZ1a2Qj5QXr68leznKpWQu6y5Tfv8wbKXC7HkV7hQjN1xh+rQKmeQkca6w0acFRaoKa9+HyosXci3Ry7Kk5w4de6lhKCps+nl4d+w+q/88VD0uHA3HpSpoLJ/ErH6FdHRkIw+b3GdOPOljK841DE2yvWaiYflXjLGWTKLtaolB9w8Me938uxq+uC8x0LMZUHRboqNh9T+QY3lb4ErXrUL92dXli6N23tPwt04xRsfV+MCi5O+Hl8Gy4W20EMMvXOrhRut1Jsrd+WQy2c82Wt9TVo7hpatY5FhlhvbXtsQsLmh/11w9x0vEAAAAAAAAAAAAAAAAgH8KMc/4l/8HRXyz3e2GLf07uqD/nO+fkLHZ2eeWgnZnkVi0ifSvJOLJpUXKTtoskfxdp9fZb7TWSETprtA50XCD3RWW/Qky19dUQCx3b7r2PV1jV+dd+sU6M88iDc0v1I2Cu5bextuzLqyrdrGgdhOHmL6xrGM/0hP3EfurIM42YY/fkMRYOpR2ZDvt3Yfe/iaLPVn4j7TBiL0l9xexooe24UbXIkvWL7n7uSGryh1JjEfjofQrQefV/7T8X2OuNFIvnq3FmisxlyR+zYoWo4Fi9oRB1kAhapbyytvT4OM9OpUpr1PUZhnR8SOYqosT4sxq99AmHvifxBuEo2G2iXiXc1bEeddYp8vtaN/55K9P9bntH0qJZV+kFHrh9HAI3P8sDodVqL7nCuzwrc0Wwr9YFEjbxGuy5+MWv1F+jcgPPr2XHtAL3l9j/v4Qny+CUguvHGfnvt7n3r44LSu+IFnVIDgarW8vUsSjmepQUnr24iB65dZZYt54NXi8vtEw9V64vDOx/fmHuPre6vSmWa6/r/s5xDls7W7D8lU64fZn6vFvUt4ZMcrfk2D69VnAmQbj95xefm3KiHMn73prN/g1CuO441zm1HacQRyHo19Btva6vMz5/JWd6jQ83z8mx48fZ8kx2fi5R9++tiKiPl1rOxEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALy43/ipMgzSotaqAAAAAElFTkSuQmCC");
            }
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        });
        return () => {
          unsubscribe();
        };
      }, []);
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Oswald']
          }
        });
       }, []);
      
    const HandelSubmit = (e)=>{
    e.preventDefault();
    if(e.target.SearchText.value === ""){
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Type Something to Search ...',
            showConfirmButton: false,
            timer: 2500
          })
    }
    else{
        navigate(`/search/1/${e.target.SearchText.value}`)
    }
    }
    function navlogout() {
          Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to logout...",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout'
          }).then((result) => {
            if (result.isConfirmed) {
                firebase.auth().signOut();
                navigate(`/`);
            }
          })
    }
    function loginpophandel(){
      if(loginpop){
        setloginpop(false);
      }
      else{
        setloginpop(true);
      }
    }
    const [show , handleShow] = useState(false);

    const transitionNavBar =()=>{
    if(window.scrollY > 100){
      handleShow(true);
    }else{
      handleShow(false);
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll", transitionNavBar);
    return()=>window.removeEventListener("scroll" , transitionNavBar)

  }, [])
    return(
        <>
        <header className={`nav ${show&& 'nav-black '}`}>
            <Heading color="#e50914"><Link to="/" style={{fontFamily: 'Piedra'}}><span className="logomain">StreamOn</span></Link></Heading>
            <ul className="navigaition">
             <li><Link to="/movies">Movies</Link></li>
             <li><Link to="/webseries">Web Series</Link></li>
             <li><Link to="/mylist">My List</Link></li>
             <li><Link to="/videos">Videos</Link></li>
            </ul>
            <form className="search" onSubmit={HandelSubmit}>
             <input className="text-search" type="text" id="SearchText" placeholder="Search..."/>
            </form>
            {user ?<Image src={src} onClick={()=>{navlogout()}} id="usericon" color="red"/>:<BiUserCircle onClick={()=>{loginpophandel()}} className="usericon" color="#9b6262"/>}
        </header>
        {loginpop ?<Login setloginpop={loginpophandel}/>:<></>}
        </>
    )
}