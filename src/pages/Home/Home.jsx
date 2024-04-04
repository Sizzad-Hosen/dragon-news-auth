import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import LeftSideNav from "../../shared/LeftSideNav/LeftSideNav";
import BreakingNews from "./BreakingNews";

import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    console.log(news);
    
    return (
        <div className="">
        
           <Header></Header>
           <BreakingNews></BreakingNews>
            <Navbar></Navbar>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            

            
        <div >
            <LeftSideNav></LeftSideNav>

            </div>
            <div className="md:col-span-2 border">
            <h2 className="text-3xl text-center">Dragon News Home</h2>
            
            {
               news.map(aNews=><NewsCard key={aNews._id} news={aNews}></NewsCard>)
           
            }
          
            </div>
            <div>
                <RightSideNav></RightSideNav>
            
                 </div>


             </div>

        </div>
    );
};

export default Home;