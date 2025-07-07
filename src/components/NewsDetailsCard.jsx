import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow border border-gray-200">
      {/* Image */}
      <div className="rounded-xl overflow-hidden">
        <img
          src={news.image_url}
          alt={news.title}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-4 leading-tight">
        {news.title}
      </h1>

      {/* Details */}
      <p className="text-gray-700 text-lg leading-relaxed">{news.details}</p>

      {/* Back Button */}
      <div className="mt-10">
        <Link
          to={`/category/${news.category_id}`}
          className="inline-block bg-secondary text-white px-5 py-2 rounded-md hover:bg-secondary/90 transition"
        >
          ← Back to Category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
