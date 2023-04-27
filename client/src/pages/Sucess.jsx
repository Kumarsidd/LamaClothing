import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { userRequest } from "../requestMethods";

const Success = () => {
  const location = useLocation();
  const history = useNavigate();
  const data = location.state?.stripeData;
  const cart = location.state?.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch (error) {
        console.log(error);
      }
    };
    if (data && cart && currentUser) {
      createOrder();
    }
  }, [cart, currentUser, data]);

  const handleHomepageClick = () => {
    history("/");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId ? (
        `Order has been created successfully. Your order number is ${orderId}`
      ) : (
        <p>Success! Your order is being prepared...</p>
      )}
      <button
        style={{ padding: 10, marginTop: 20 }}
        onClick={handleHomepageClick}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;
