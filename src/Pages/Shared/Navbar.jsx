import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {


    const { handleLogout, user, setUser } = useContext(AuthContext);

    const handleLogoutButton = () => {
        handleLogout().then(() => console.log("logggggggggged out", user)).catch(error => console.log("error is", error))
    }


    return (
        <div className='bg-primary py-2'>
            <div className="navbar main-container bg-primary">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fff"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="">Home</Link></li>
                            <li><Link to="">All Toys</Link></li>
                            <li><Link to="">My Toys</Link></li>
                            <li><Link to="">Add A Toy</Link></li>
                            <li><Link to="">Blogs</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="max-w-[10rem]"><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><Link to="">Home</Link></li>
                        <li><Link to="/alltoys">All Toys</Link></li>
                        <li><Link to="">My Toys</Link></li>
                        <li><Link to="/addproduct">Add A Toy</Link></li>
                        <li><Link to="">Blogs</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">


                    {/* login btn starts here */}


                    {user && <li className="tooltip tooltip-bottom" data-tip={user.displayName}>{user.photoURL ? <Link to="/userprofile"><figure className='w-14 h-fit'><img className='w-full rounded-full' src={user.photoURL && user.photoURL} alt="" /></figure></Link> : <Link to="/userprofile"><figure className='w-14 h-fit'><img className='w-full rounded-full' src="https://i.ibb.co/K798Km5/user.jpg" alt="" /></figure></Link>}</li>}

                    {user &&

                        <Link className='text-white'>{user.email && user.email}</Link>

                    }

                    {user ?
                        <button className="btn border-none bg-white hover:bg-warning text-neutral" onClick={handleLogoutButton}>Logout</button>
                        :

                        <Link

                            to="/login"
                            className="btn border-none bg-white hover:bg-warning text-neutral"
                        >
                            Login
                        </Link>


                    }






                </div>
            </div>
        </div>
    );
};

export default Navbar;