import { useSelector } from "react-redux";

const UserDetails = () => {
  const userData = useSelector((state) => state.registrationReducer.userInfo);

  return (
    <div>
      <h2 className="mt-4"> Your Data</h2>
      <ul className="list-unstyled">
        <li>Name : {userData.name}</li>
        <li>Email : {userData.email}</li>
        <li>Password : {userData.password}</li>
      </ul>
    </div>
  );
};
export default UserDetails;
