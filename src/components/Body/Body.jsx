import React, { useState } from 'react'
import Slider from './Slider/Slider'
import { Link } from 'react-router-dom';

export default function Body(props) {
    const [filter , setFilter] = useState("all");
    const handleClick = (filter) => {
        setFilter(filter);
    }

    return (
    <div>
        <Slider />
        <div className="categories d-flex flex-wrap justify-content-center align-items-center p-3 gap-3 ">
            <button type="button" class="btn btn-primary " style={{width: "160px"}} onClick={() => handleClick("all")}>All Categories</button>
            <button type="button" class="btn btn-primary "style={{width: "160px"}} onClick={() => handleClick("smartphones")}>smartphones</button>
            <button type="button" class="btn btn-primary" style={{width: "160px"}} onClick={() => handleClick("laptops")}>laptops</button>
            <button type="button" class="btn btn-primary" style={{width: "160px"}} onClick={() => handleClick("fragrances")}>fragrances</button>
            <button type="button" class="btn btn-primary" style={{width: "160px"}} onClick={() => handleClick("skincare")}>skincare</button>
            <button type="button" class="btn btn-primary" style={{width: "160px"}} onClick={() => handleClick("groceries")}>groceries</button>
            <button type="button" class="btn btn-primary" style={{width: "160px"}} onClick={() => handleClick("home-decoration")}>home-decoration</button>
        </div>

        <div className="prods d-flex p-2 bd-highlight flex-wrap gap-5 justify-content-center">
            {
                props.prods?.products?.map((prod , i) => {
                    if(filter === prod.category || filter === "all")
                    return (
                        <div 
                        key={i}
                        class="card" style={{width: "18rem"}}>
                        <img src={prod.thumbnail} className="card-img-top" alt="prod-img" height={200}/>
                        <div class="card-body">
                            <h5 class="card-title">{prod.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{prod.category}</h6>
                            <p class="card-text">{prod.description}</p>
                            <Link to={`product/${prod.id}`} className="btn btn-primary">Details</Link>
                        </div>
                        </div>
                    )
                    else return null
                })
            }
        </div>
    </div>
  )
}
