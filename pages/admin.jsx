import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage(){
    return(
        <div className="w-full h-full flex flex-row">
            <div className="w-[300px] h-full bg-red-600 flex flex-col">
                
                <h1 className="font-bold">Using a Tages</h1>
                <a href="/admin/">Orders Page</a>
                <a href="/admin/products">Products Page</a>
                <a href="/admin/users">Users Page</a>

                <h1 className="font-bold">Using Link Tages</h1>
                <Link to = "/admin/" >Orders Page</Link>
                <Link to = "/admin/products">Products Page</Link>
                <Link to = "/admin/users">User Page</Link>


            </div>
            <div className="h-full flex-1 bg-yellow-300 ">
                <Routes>
                    <Route path="/" element = {<h1>Orders Page</h1>}/>
                    <Route path="/products" element = {<h1>Products Page</h1>}/>
                    <Route path="/users" element = {<h1>User Page</h1>}/>
                </Routes>
            </div>
        </div>
    )
    
}

