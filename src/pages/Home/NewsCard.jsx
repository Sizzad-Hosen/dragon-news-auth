import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
    const {title,_id ,name,author,image_url,published_date, rating, thumbnail_url, details , } = news;

    return (
        <div className="card card-compact pb-10 p-2 bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {
        details.length>200 ? 
        <p>{details.slice(0,200)} <Link
        to={`/news/${_id}`}
        className="text-blue-600 font-bold">Read more...</Link></p>
        :

    <p>{details}</p>
    }
    <div className="card-actions justify-end">
  
    </div>
  </div>
</div>
    );
};

export default NewsCard;