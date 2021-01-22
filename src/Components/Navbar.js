import React from 'react';
import '../Styles/navbar.css'
import '../App.css'
const Navbar = (props) =>{
    return(
        <div className = "Navbar">
            <div className="leftside">
                <div className = "links">
                    <a  href="/">Home</a>
                    <a href="/Latest">Latest</a>
                    <a href="/Sports">Sports</a>
                    <a href="/Business">Business</a>
                    <a href="/Politics">Politics</a>
                    <a href="/Technology">Technology</a>
                </div>
            </div>
            <div className="rightside">
                
            </div>
        </div>
    )
}
export default Navbar;
