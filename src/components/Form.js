import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();

  const delay=(d)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve()
        }, d*1000);
    })
  }

  const onSubmit = async(data) =>{ 
    await delay(4)
    console.log(data);
}

  //   console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div>
    {isSubmitting && <div>Loading........</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("username", {
            required: true,
            minLength: { value: 3, message: "minimun 3 char " },
          })}
          placeholder="Enter your name "
        />
        {errors.username && <div>{errors.username.message}</div>}
        <br />
        <input
          type="password"
          {...register("exampleRequired", { required: true })}
          placeholder="Enter your password"
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}

        <input disabled={isSubmitting} className="cursor-pointer py-3 px-4 bg-violet-500 text-white rounded-lg mt-3 " type="submit" />
      </form>
    </div>
  );
};

export default Form;
