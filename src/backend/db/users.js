import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: "stv001",
    firstName: "Guest",
    lastName: "User",
    email: "guest@rohit.xyz",
    password: "guest@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
