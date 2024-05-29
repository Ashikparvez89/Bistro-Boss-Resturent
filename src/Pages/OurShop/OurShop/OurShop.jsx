import React, { useState } from "react";
import Cover from "../../../Components/Shared/Bgcover/Cover";
import useMenu from "../../../Hooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCard from "../ShopCard/ShopCard";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const [menu] = useMenu();
  const soup = menu?.filter((item) => item?.category === "soup");
  const pizza = menu?.filter((item) => item?.category === "pizza");
  const salad = menu?.filter((item) => item?.category === "salad");
  const dessert = menu?.filter((item) => item?.category === "dessert");
  const drinks = menu?.filter((item) => item?.category === "drinks");
  const { category } = useParams();
  const categories = ['salad', 'soup', 'pizza', 'dessert', 'drinks']
  const intitalCategory = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(intitalCategory);

  console.log(intitalCategory);
  console.log(category);
  return (
    <div>
      <Cover
        img={"https://i.postimg.cc/rwQYJ8t3/banner2.jpg"}
        title={"Our Shop"}
        caption={"Explore Our Item Buy now"}
      ></Cover>
      <div className="text-center py-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Soup</Tab>
            <Tab>Pizza</Tab>
            <Tab>Desert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-3 gap-10 py-10">
              {salad?.map((item) => (
                <ShopCard key={item._id} item={item}></ShopCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10 py-10">
              {soup?.map((item) => (
                <ShopCard key={item._id} item={item}></ShopCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10 py-10">
              {pizza?.map((item) => (
                <ShopCard key={item._id} item={item}></ShopCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10 py-10">
              {dessert?.map((item) => (
                <ShopCard key={item._id} item={item}></ShopCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10 py-10">
              {drinks?.map((item) => (
                <ShopCard key={item._id} item={item}></ShopCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
