import { Link } from "react-router-dom";
import { CardCategory } from "../../components";

function CategoryProducts({ categories }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Category Photos</h1>
      <p className="mb-4 capitalize">List price for one session photo</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <CardCategory data={category} />
              <Link
                to="/booking-form"
                state={{ category }}
                className="px-3 py-2 rounded-lg bg-yellow-500 font-bold text-white mb-5"
              >
                Book Now
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryProducts;
