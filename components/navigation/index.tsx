import React from "react";
import Link from "next/link";
import HomeIcon from "@/public/assets/icons/homeIcon";
import ProductsIcons from "@/public/assets/icons/productsIcons";
import CategoiresIconse from "@/public/assets/icons/categoiresIconse";
import BrandsIcons from "@/public/assets/icons/brandsIcons";
import OrdersIcons from "@/public/assets/icons/ordersIcons";
import UsersIcons from "@/public/assets/icons/usersIcons";
import Button from "./button";

export default function index() {
  return (
    <div className="flex w-fit flex-col flex-wrap  capitalize text-2xl">
      <Button text="home" link="/">
        <HomeIcon />
      </Button>
      <Button text="products" link="/products">
        <ProductsIcons />
      </Button>
      <Button text="categories" link="/">
        <CategoiresIconse />
      </Button>
      <Button text="brands" link="/">
        <BrandsIcons />
      </Button>
      <Button text="orders" link="/">
        <OrdersIcons />
      </Button>
      <Button text="users" link="/">
        <UsersIcons />
      </Button>
    </div>
  );
}
