import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import MyInput from "../MyInput";
import { addUserInfo } from "../store/slices/registrationSlice";

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isFormSubmitted, setIseFormSubmiited] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    // image: null,
  });

  const [userInfoErrs, setUserInfoErrors] = useState({
    nameErr: "",
    emailErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
    // imageErr: null,
  });

  useEffect(() => {
    if (
      !userInfoErrs.nameErr &&
      !userInfoErrs.emailErr &&
      !userInfoErrs.passwordErr &&
      !userInfoErrs.confirmPasswordErr &&
      isFormSubmitted
    ) {
      console.log("request ur api");
      dispatch(addUserInfo(userInfo));
      navigate("/userdata");
    }
  }, [userInfoErrs, isFormSubmitted]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setUserInfo({
          ...userInfo,
          name: e.target.value,
        });
        break;
      case "email":
        setUserInfo({
          ...userInfo,
          email: e.target.value,
        });
        break;
      case "password":
        setUserInfo({
          ...userInfo,
          password: e.target.value,
        });
        break;
      case "confirmPassword":
        setUserInfo({
          ...userInfo,
          confirmPassword: e.target.value,
        });
        break;
      default:
    }
  };
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setUserInfo({
  //     ...userInfo,
  //     image: file,
  //   });
  // };

  const validateForm = () => {
    setUserInfoErrors({
      nameErr: !userInfo.name
        ? "name is required"
        : userInfo.name.trim() === ""
        ? "name should not contain spaces "
        : userInfo.name.includes(" ")
        ? "name should not contain spaces "
        : "",
      emailErr: !userInfo.email
        ? "email is reuired"
        : !userInfo.email
            .trim()
            .match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
        ? "Invalid Email Address"
        : "",
      passwordErr: !userInfo.password
        ? "password is reuired"
        : userInfo.password.length < 8
        ? "password should be at least 8 char"
        : userInfo.password.length > 12
        ? "password should be at most 12 char"
        : "",
      confirmPasswordErr: !userInfo.confirmPassword
        ? "Password is required"
        : userInfo.confirmPassword !== userInfo.password
        ? "Passwords do not match"
        : "",
      // imageErr: !userInfo.image ? "Image is required" : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIseFormSubmiited(true);
    console.log(userInfo);
    validateForm();
  };

  const clearForm = () => {
    setUserInfo({
      name: "",
      email: "",
    });
  };

  return (
    <div className="container">
      <h3> Register</h3>
      <div className="w-50 m-auto">
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label> Name</label> */}
            {/* <input type="text" onChange={handleChange} name="name" /> */}
            <MyInput
              label={"Name"}
              name={"name"}
              type={"Text"}
              placeholder={"Enter Your Name"}
              handleChange={handleChange}></MyInput>

            {userInfoErrs.nameErr && (
              <div className="text-danger  mb-2">{userInfoErrs.nameErr}</div>
            )}
          </div>

          <div>
            {/* <label> Email</label> */}
            {/* <input type="text" onChange={handleChange} name="email" /> */}
            <MyInput
              label={"Email"}
              name={"email"}
              type={"email"}
              placeholder={"Enter Your Email"}
              handleChange={handleChange}></MyInput>
            {userInfoErrs.emailErr && (
              <div className="text-danger  mb-2">{userInfoErrs.emailErr}</div>
            )}
          </div>
          <div>
            {/* <label> Password</label> */}
            {/* <input type="text" onChange={handleChange} name="password" /> */}
            <MyInput
              label={"Password"}
              name={"password"}
              type={"password"}
              placeholder={"Enter Your Password"}
              handleChange={handleChange}></MyInput>
            {userInfoErrs.passwordErr && (
              <div className="text-danger  mb-2">
                {userInfoErrs.passwordErr}
              </div>
            )}
          </div>
          <div>
            {/* <label>Confirm Password</label> */}
            {/* <input type="text" onChange={handleChange} name="confirmPassword" /> */}
            <MyInput
              label={"Confirm Password"}
              name={"confirmPassword"}
              type={"password"}
              placeholder={"Re-type Your Password"}
              handleChange={handleChange}></MyInput>
            {userInfoErrs.confirmPasswordErr && (
              <div className="text-danger  mb-2">
                {userInfoErrs.confirmPasswordErr}
              </div>
            )}
          </div>
          {/* <div>
            <label>Upload Image:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {userInfoErrs.imageErr && (
              <div className="text-danger mb-2">{userInfoErrs.imageErr}</div>
            )}
          </div> */}

          <button className="btn btn-primary" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
