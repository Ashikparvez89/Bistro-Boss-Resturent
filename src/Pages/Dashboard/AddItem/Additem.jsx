import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY;
const img_Hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Additem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleAddItem = async (data) => {
    const { name, price, category, recipe, image } = data;
    console.log(name, price, category, recipe, image);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(img_Hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name,
        category,
        recipe,
        price: parseFloat(price),
        image: res.data.data.display_url,
      };
      console.log(menuItem);
      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Great...",
          text: `You Add ${name} as a recipie`,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    }
  };
  return (
    <div className="w-[95%] mx-auto">
      <div className="">
        <SectionTitle
          heading={"Add an Item"}
          subHeading={"what's New"}
        ></SectionTitle>
      </div>
      <div className="bg-[#f3f3f3] p-10">
        <form onSubmit={handleSubmit(handleAddItem)}>
          <div className="flex flex-col gap-4">
            <span className="text-lg font-bold">Name Of Item *</span>
            <input
              className="py-3 px-6 rounded-md"
              type="text"
              name="name"
              placeholder="Item Name"
              {...register("name")}
            />
          </div>
          <div className="flex gap-10 w-full my-5">
            <div className="flex flex-col w-1/2 gap-4">
              <span className="text-lg font-bold">Category *</span>
              <select
                defaultValue={"default"}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Who shot first?
                </option>
                <option>salad</option>
                <option>Soup</option>
                <option>Pizza</option>
                <option>dessert</option>
                <option className="pb-2">drinks</option>
              </select>
            </div>
            <div className="flex flex-col w-1/2 gap-4">
              <span className="text-lg font-bold">Price *</span>
              <input
                className="py-3 px-6 rounded-md"
                type="text"
                name="price"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-lg font-bold">Recipie Details *</span>
            <textarea
              className="h-[10em] py-3 px-6"
              type="text"
              name="details"
              placeholder="Details of this recipie"
              {...register("recipe", { required: true })}
            />
          </div>
          <div className="my-5 ">
            <input
              type="file"
              className="file-input w-full max-w-xs"
              {...register("image", { required: true })}
            />
          </div>
          <button type="submit" className="btn-outline btn-secondary">
            Add Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Additem;
