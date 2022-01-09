import { currencyFormat } from "../../utils/currencyFormat";

function CardCategory({ data }) {
  return (
    <>
      <img
        className="h-64 object-cover w-full rounded-lg"
        src={`${process.env.REACT_APP_BASEURL}/${data.image_url}`}
        alt={`data-asset-${data.title}`}
      />
      <div className="capitalize flex justify-between font-semibold text-lg py-3">
        <p>{data.title}</p>
        <p> {currencyFormat(data.price)} / session</p>
      </div>
    </>
  );
}

export default CardCategory;
