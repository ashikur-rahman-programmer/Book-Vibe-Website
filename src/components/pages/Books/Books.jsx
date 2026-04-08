import React, { useContext } from "react";
import { BookContext } from "../../context/Context";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadAsBooks from "../ListedBooks/ReadAsBooks";
import WishListBooks from "../ListedBooks/WishListBooks";
import { ChevronDown } from "lucide-react";

const Books = () => {
  // context api
  const bookContext = useContext(BookContext);
  const { storedBooks, wishList } = bookContext;
  console.log(storedBooks, wishList);

  return (
    <div className="container mx-auto space-y-8">
      <div className="flex justify-center items-center font-bold text-3xl p-5 my-6 bg-gray-100 rounded-2xl w-full">
        Books
      </div>
      {/* <div className="flex justify-center items-center py-5 px-6 bg-green-500 rounded-2xl font-semibold text-white text-xl">
        Sort By{" "}
      </div> */}
      <div className="dropdown dropdown-bottom flex justify-center">
        <div tabIndex={0} role="button" className="btn m-1 bg-green-500">
          Sort By <ChevronDown />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm "
        >
          <li>
            <a>Pages</a>
          </li>
          <li>
            <a>Rating</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ReadAsBooks />
        </TabPanel>
        <TabPanel>
          <WishListBooks />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
