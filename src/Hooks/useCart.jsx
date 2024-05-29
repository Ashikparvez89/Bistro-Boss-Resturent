// import { useQuery } from "@tanstack/react-query";
// import { axiosSecure } from "./useAxiosSecure";

import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";
import useUser from "./useUser";

const useCart = () => {
  const { user } = useUser();
  console.log(user);
  console.log(user?.email);
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};
export default useCart;
