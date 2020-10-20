import React from "react";
import "./App.css";
import ButtonWithIcon from "./components/ButtonWithIcon";
import Input from "./components/Input";

function App() {
  return (
    <div className="h-screen flex relative">
      <div className="h-full flex items-center justify-end w-5/12 bg-indigo-900">
        <div
          style={{ height: "540px", width: "400px" }}
          className="bg-blue-500 shadow-xl rounded-l-md py-24 px-16"
        >
          <h2 className="text-white text-xl">
            Here’s some amazing copy. Doesn’t this copy just make you excited?
          </h2>
          <p className="my-6 text-white text-base">
            Wow, you really built this form in 2-3 hours? You’re awesome.
          </p>

          <div className="flex flex-col justify-between space-y-4">
            <ButtonWithIcon label="Write Code" />
            <ButtonWithIcon label="Fix Bugs" />
            <ButtonWithIcon label="Profit" />
          </div>
        </div>
      </div>
      <div className="h-full flex items-center justify-start w-7/12 bg-blue-100">
        <div
          style={{ height: "540px", width: "500px" }}
          className="h-64 w-24 bg-white shadow-xl rounded-r-md py-8 px-16"
        >
          <h2 className="text-2xl font-medium">Create an Account</h2>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <div className="mt-8 flex flex-col space-y-6">
              <Input name="first_name" type="text" label="First Name" />
              <Input name="last_name" type="text" label="Last Name" />
              <Input
                name="email"
                type="email"
                label="Email"
                hasError
                errorMsg="Incorrect Email Format"
              />
              <Input name="phone_number" type="text" label="Phone Number" />
            </div>
            <div className="my-4">
              <label class="text-sm">
                <input type="radio" class="form-radio" name="terms" />
                <span class="ml-2">I agree to write Excellent Code</span>
                <span className="ml-1 text-blue-400 font-bold cursor-poiter">
                  Terms and Conditions
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-400 hover:bg-blue-500 rounded-lg shadow-lg focus:outline-none "
            >
              Continue
            </button>
            <div className="mt-4 text-sm">
              <span class="ml-2">Already a meme-ber?</span>
              <span className="ml-1 text-blue-400 font-bold cursor-pointer">
                Sign In
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
