import '../style.css';
import letstal from '../assets/images/lets_talk_icon_big.png';
import { Signup } from '../components/SignUp';
const Letstalk = () => {
    return (
        <div className='d-flex reg h-100 w-100 justify-content-between align-items-center '>
            <div className='col-6 mt-10 text-center imgWrp'>
                <img className='left-img' src={letstal} alt='' />
            </div>
            <div className='left-form'>
                <h3>Need help?</h3>
                <p>Have a new project and think Marhaba would make a great
                    partner?We'd love to hear what's on your mind.</p>
                <div className='form-type'>
                    <Signup />

                </div>

            </div>


        </div>
    )
}

export default Letstalk
