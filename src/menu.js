import React, { useState } from "react"


export default function Menu() {
    const categoryList = ["Boys", "Girls", "Men", "Women"]
    const [category, setCategory] = useState('')
    const div = document.getElementsByClassName('divR')[0]



    return <nav>
        <ul>
            {categoryList.map(c =>

                <li onMouseEnter={(() => setCategory(c))}>{c}</li>
            )}

        </ul>
        <div onMouseLeave = {(()=> setCategory(''))}>
            {category}

        </div>
    </nav>


}

