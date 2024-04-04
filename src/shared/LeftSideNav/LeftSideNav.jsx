import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import { CiViewTimeline } from "react-icons/ci";
const LeftSideNav = () => {
    return (
        <div className="p-1">
            <h2 className="text -5xl ">All Caterogy</h2>
            <ul className="text-3xl mx-auto p-3">
                <li><button className=" btn btn-primary">National News</button></li>
                <li>Breaking News</li>
                <li>Regular News</li>
                <li>International News</li>
                <li>Sports</li>
                <li>Entertainment</li>
                <li>Culture</li>
                <li>Arts</li>
                <li>All News</li>

                

      <div className='pt-7'>
      <img src={img1} alt="" />
         <p className='flex '>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
         <p className='flex mx-auto p-3 gap-5'>Sports <CiViewTimeline  /> Jan 4, 2022</p>
      <img src={img2} alt="" />
         <p className='flex '>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
         <p className='flex mx-auto p-3 gap-5'>Sports <CiViewTimeline  /> Jan 4, 2022</p>
      <img src={img3} alt="" />
         <p className='flex '>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
         <p className='flex mx-auto p-3 gap-5'>Sports <CiViewTimeline  /> Jan 4, 2022</p>

      </div>
            

            </ul>
        </div>
    );
};

export default LeftSideNav;