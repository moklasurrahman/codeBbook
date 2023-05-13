export const login = async (authDetail) =>{

    const requestOptions ={
        method: "post",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetail)
      }
    
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, requestOptions);
     
      if(!response.ok){
        // eslint-disable-next-line no-throw-literal
        throw { message: response.statusText, status: response.status };
      }

      const data = await response.json();
      
      if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
      }

      return data

}


export const signup = async (authDetail) => {
    const requestOptions ={
        method: "post",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetail)
      }
  
      const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, requestOptions);
      
      if(!response.ok){
        // eslint-disable-next-line no-throw-literal
        throw { message: response.statusText, status: response.status };
      }

      const data = await response.json();
    
  
      if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
      }

      return data;
}




export function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
}