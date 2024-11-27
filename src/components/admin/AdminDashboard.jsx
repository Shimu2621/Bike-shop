import React from "react";
import admindashboard from "../../../public/admin_animation.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import adminImg from "../../../public/images/admin/admin.png";
import admindashboard1 from "../../../public/admin-animation1.json";
import admindashboard2 from "../../../public/admin-animation2.json";
import admindashboard3 from "../../../public/admin-animation3.json";

const AdminDashboard = () => {
  return (
    <div className="admin_dashboard">
      <nav className="admin_main_navbar">
        <div className="navabar_container">
          <Link to="/create-product">
            <li>Create Product</li>
          </Link>
          <Link to="/create-service">
            <li>Create Service</li>
          </Link>
          <Link to="/product-inventory">
            <li>Product Inventory</li>
          </Link>
          <Link to="/service-inventory">
            <li>Service Inventory</li>
          </Link>
          <Link to="/contact-us">
            <li>Contact</li>
          </Link>
        </div>
      </nav>

      <div className="admin">
        <h1 className="admin_header">Admin Dashboard</h1>

        <div className="admin_container">
          <div className="admin_routes">
            <div className="route_item">
              <div className="image_container">
                <img width={400} height={400} src={adminImg} alt="admin" />
                <div className="admin_animation">
                  <Lottie
                    animationData={admindashboard}
                    loop={true}
                    className="lottie-animation"
                    style={{ width: "40%", height: "45%" }}
                    rendererSettings={{
                      preserveAspectRatio: "xMidYMid slice",
                    }}
                  />
                </div>
              </div>
              <Link to="/create-product">
                <button>Create Product</button>
              </Link>
            </div>

            <div className="route_item">
              <div className="image_container">
                <img width={400} height={400} src={adminImg} alt="" />
                <div className="admin_animation">
                  <Lottie
                    animationData={admindashboard3}
                    loop={true}
                    className="lottie-animation"
                    style={{ width: "45%", height: "30%" }}
                    rendererSettings={{
                      preserveAspectRatio: "xMidYMid slice", // Keeps the aspect ratio
                    }}
                  />
                </div>
              </div>
              <Link to="/create-service">
                <button>Create Service</button>
              </Link>
            </div>

            <div className="route_item">
              <div className="image_container">
                <img width={400} height={400} src={adminImg} alt="" />
                <div className="admin_animation">
                  <Lottie
                    animationData={admindashboard1}
                    loop={true}
                    className="lottie-animation"
                    style={{ width: "35%", height: "25%" }}
                    rendererSettings={{
                      preserveAspectRatio: "xMidYMid slice", // Keeps the aspect ratio
                    }}
                  />
                </div>
              </div>
              <Link to="/product-inventory">
                <button>Product Inventory</button>
              </Link>
            </div>

            <div className="route_item">
              <div className="image_container">
                <img width={400} height={400} src={adminImg} alt="" />
                <div className="admin_animation">
                  <Lottie
                    animationData={admindashboard2}
                    loop={true}
                    className="lottie-animation"
                    style={{ width: "50%", height: "25%" }}
                    rendererSettings={{
                      preserveAspectRatio: "xMidYMid slice", // Keeps the aspect ratio
                    }}
                  />
                </div>
              </div>
              <Link to="/service-inventory">
                <button>Service Inventory</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

{
  /* <div className="admin_animation">
  <Lottie
    width={500}
    height={500}
    animationData={admindashboard}
    loop={true}
  />
</div> */
}
