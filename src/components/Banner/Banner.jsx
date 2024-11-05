import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="bg-gray-100 rounded-2xl my-5">
      <div className="flex justify-around items-center">
        <div className="ml-32">
          <h2 className="text-6xl font-bold text-black mb-12">Books to freshen up <br /> your bookshelf</h2>
          <Link to={`/list`}><button className="bg-green-500 text-white rounded-lg font-semibold p-3">View The List</button></Link>
        </div>
        <div>
          <img src="/src/assets/banner-removebg-preview.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;