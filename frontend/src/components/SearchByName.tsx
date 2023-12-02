import axios from "axios";
import { useState } from "react";
import { serverUrl } from "../utils/constants";

export const SearchByName = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (searchValue) {
      axios
        .post(`${serverUrl}/products/getByName`, { productName: searchValue })
        .then((res) => console.log("res from search: ", res))
        .catch((err) => console.error(`Failed to search for product: ${err}`));
    }
  };

  return (
    <div>
      <label>Search by name</label>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button onClick={() => handleSearch()} disabled={!searchValue}>
        Search
      </button>
    </div>
  );
};
