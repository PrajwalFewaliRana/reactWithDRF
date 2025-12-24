import React, { useContext } from "react";
import { stockContext } from "../../App";
import { userContext } from "../../App";

const ChildC = () => {
    const stockdata = useContext(stockContext)
    const userData = useContext(userContext)
  return (
    <>
      {/* <div>ChildC</div>
      <stockContext.Consumer>
        {({ stock, price }) => {
          return <userContext.Consumer>
            {
                ({user})=>{
                   return(
                    <>
                    <h1>{user.name}</h1>
                    <h1>{user.isloggedin}</h1>
                    <h1>{stock}:{price}</h1>

                    </>
                   )
                }
            }
          </userContext.Consumer>;
        }}
      </stockContext.Consumer> */}
      <div>child c</div>
      <div>{stockdata.stock}:{stockdata.price}</div>
      <div>{userData.user.name}</div>
      <div>{userData.user.isloggedin}</div>
      <div>{userData.isloggedin}</div>
    </>
  );
};

export default ChildC;
