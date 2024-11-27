import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ServiceInventory = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:5000/services");
        // console.log(response.data);
        setServices(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching services:", error);
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/services/${id}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.data.deletedCount === 1) {
          setServices((prevItem) => prevItem.filter((item) => item._id !== id));
          toast.success("Service Deleted Successfully");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };

  if (loading) {
    <div>Loading....</div>;
  }
  return (
    <div className="service-inventory">
      <h2>Service Inventory</h2>
      <h5>Total Service: {services.length}</h5>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price ($)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <td>
                <img
                  src={service.image}
                  alt={service.title}
                  width="100"
                  height="100"
                />
              </td>
              <td>{service.title}</td>
              <td>{service.description}</td>
              <td>{service.price}</td>
              <td>
                <Link to={`/update-service/${service._id}`}>
                  {" "}
                  <button>Update</button>
                </Link>
                <button onClick={() => handleDelete(service._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceInventory;
