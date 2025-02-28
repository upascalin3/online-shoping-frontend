import React from "react";
import sponsor1 from './../assets/sponsor1.png';
import sponsor2 from './../assets/sponsor2.png';
import sponsor3 from './../assets/sponsor3.png';
import sponsor4 from './../assets/sponsor4.png';
import sponsor5 from './../assets/sponsor5.png';
import sponsor6 from './../assets/sponsor6.png';

function Sponsors(){
    return(
        <div className="sponsors">
            <h2>Trusted by</h2>
            <img src={sponsor1} alt=""/>
            <img src={sponsor2} alt=""/>
            <img src={sponsor3} alt=""/>
            <img src={sponsor4} alt=""/>
            <img src={sponsor5} alt=""/>
            <img src={sponsor6} alt=""/>
        </div>
    )
}
export default Sponsors;