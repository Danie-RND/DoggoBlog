const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Doggo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New  Blog</a>
                {/* <a href="/create" style={{backgroundColor: 'pink', borderRadius: '1px'}}>New  Blog</a> */}
            </div>
        </nav>
    );
}
 
export default Navbar;