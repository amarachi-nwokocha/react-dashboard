//   import './index.css'
import './style.css'
import  hero from './images/image-hero-desktop.png'
import mobile from './images/image-mobile.png'
function Section1() {
    return(
        <div class="container-fluid my-5 sec-1">
            <div class='d-flex flex-row '>
                <div class=' text'>
                    <h1 class='fw-bolder head-text'>Maximize skill, minimize budget</h1>
                    <p className='small-text'>Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
                    <button className='mid-btn'>get started</button>
                   
                    <img className='mobile' src={mobile} alt='lady drinking tea' />
                </div>
                <div class='col back-img'>
                    <img className='img' src={hero} alt='lady drinking tea' />
                </div>
                <div class='col new-img'>
                </div>
                </div>
            </div>  
        
    )

}
export default Section1