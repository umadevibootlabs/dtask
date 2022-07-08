import React from "react";
import { Link } from "react-router-dom";

function User() {
//   const [user, setUser] = useState({
//     name: "",
//     department: "",
//     id: "",
//     salary: ""
//   });


//   const loadUser = async () => {
//     var response =  await axios.get('http://a92da8546631e40f989356c5933221ff-1708190621.us-east-1.elb.amazonaws.com 8080/employee/'+id)
  

//     setUser(response.data)

//   };
  
//   const { id } = useParams();
//   useEffect(() => {
//     loadUser();
//   });

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id:</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">id:</li>
        <li className="list-group-item">name: </li>
        <li className="list-group-item">department:</li>
        <li className="list-group-item">salary: </li>
      </ul>
    </div>
  );
};

export default User;
