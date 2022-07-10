import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  const getLocalStorage = () => {
    let list = JSON.parse(localStorage.getItem("UserData"));
    if (list) {
      return list;
    } else {
      return [];
    }
  };
  let history = useHistory();
  const [records, setRecords] = useState([]);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  useEffect(() => {
    setRecords(getLocalStorage());
    // localStorage.setItem("UserData", JSON.stringify(newRecord));
  }, []);
  const { name, username, email, phone, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // let UserData = [];
  const onSubmit = (e) => {
    e.preventDefault();
    // UserData.push(user);
    // console.log(UserData, "userdata");
    // how to store data in local storage ?
    const newRecord = { ...user, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);
    let newUserData = [...records, newRecord];
    localStorage.setItem("UserData", JSON.stringify(newUserData));

    // let docs = localStorage.getItem("contacts");
    // if (docs !== null) {
    //   let docArray = JSON.parse(docs) || [];
    //   docArray = [...docArray, newRecord];
    //   localStorage.setItem("contacts", JSON.stringify(docArray));
    // } else {
    //   let docArray = [newRecord];
    //   localStorage.setItem("contacts", JSON.stringify(docArray));
    // }
    // localStorage.setItem("userData", JSON.stringify(UserData));
    // await axios.post("http://localhost:3000/users", user);

    history.push("/");
  };
  console.log(records, "records");

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
