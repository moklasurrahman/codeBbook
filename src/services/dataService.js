const getSession = () =>{
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  return {token, cbid};
}

////--------------------
export const getUser = async () => { // getUser going to cart `checkout page and DropdowwnLogin page`
  
  const browserData = getSession()
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
  };


  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/600/users/${browserData.cbid}`,
    requestOptions
  );


  if(!response.ok){
    throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }

  const data = await response.json();
  return data;
};


////------------------------------
export const createOrder = async (cartList, total, user) => { // going to cartCheckout
   
  const browserData = getSession()

  const order = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };



  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}`},
    body: JSON.stringify(order)
}


  const response = await fetch(`${process.env.REACT_APP_API_URL}/660/orders`, requestOptions);

  if(!response.ok){
    throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }

  const data = await response.json();
  return data;
};


///------------------------------------
export const getUserOrders = async () => { //going to dashbordPage

    const browserData = getSession()

    const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${browserData.token}`
        },
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/660/orders?user.id=${browserData.cbid}`, requestOptions);

    if(!response.ok){
      throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }

      const data = await response.json();
      return data;
};