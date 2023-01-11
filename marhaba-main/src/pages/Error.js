import '../style.css';
import { FaAngleLeft } from "react-icons/fa";
const Error = () => {
  return (
    <div className='error'>
        <div className='error-content'>
            <h1 className='err-h'>Page Not Found</h1>
            <div className='err-cont'>
            <div className='err-top'>
              <p className='mess'>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
              <a className='err-li' href='/'><p><FaAngleLeft/></p><p className='link-c'>Back to our site</p></a>
            </div>
            <div className='err-down'>
              <p className='err-d-c'>
              If this is your site, and you weren't expecting a 404 for this path, please visit
              </p>
              <div className='get'>
              Netlify's<a className='err'>"page not found" support guide</a> for troubleshooting tips.
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Error