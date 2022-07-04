import './style.css'
function Section2() {

    return(
        
            <div class='container'>
                <div class='row'>
                <div className='card-sec1'>
                    <div className='card peachy'>
                            <h2>Check out our most popular courses!</h2>
                    </div>
                    <div className='card'>
                        <div className='circle'></div>
                        <h2 className='bold'>Animation</h2>
                        <p className='sub mid'>Learn the latest animation techniques to create stunning motion design and captivate your audience.</p>
                        <button class='p-text'>
                        Get Started
                        </button>
                    </div>
                    <div className='card'>
                        <h2 className='bold'>Design</h2>
                        <p className='sub'>Create beautiful, usable interfaces to help shape the future of how the web looks.</p>
                        <button class='p-text'>
                        Get Started
                        </button>
                        </div>
                </div>
                </div>
            </div>
        
    )
}
export default  Section2