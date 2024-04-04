import moment from "moment";
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className="text-center p-4 ">

            <img className="mx-auto text-10xl" src={logo} alt="" />
            <p className="text-xl">Journalism Without Fear or Favour</p>
             <p className="text-2xl">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            
        </div>
    );
};

export default Header;