import react from 'react';
import "./Main.css";
import consultantImage from './consultant-01-free-img.png';

function Main(){
 
    return(
        <div className="main">
        <div className="Home">
        
            <div className='block'>
            <div  className="header">
                
        <div className='blue'>        
            </div>
            <div className='blacky'>
            </div>
            <div className='mid-img'>
                <img className='mid-img-inner' src={consultantImage}/>  
                    </div>
            </div>
            </div>
        </div>
        <div className="About"></div>
        <div className="Service"></div>
        <div className="Reviews"></div>
        <div className="Contact"></div>


    </div>
        
    );
}
export default Main;