import React from "react";
import { useContext } from "react";
import { WishlistContext } from "../App";
import { Helmet } from "react-helmet-async";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  return (
    <>
    <Helmet>
            <title>wishlist</title>
          </Helmet>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {wishlist &&
            wishlist.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.newPrice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button onClick={() => toggleWishlist(item)}>
                      <i className="fa-solid fa-heart"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Wishlist;
