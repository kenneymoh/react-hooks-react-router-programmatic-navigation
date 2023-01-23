import React from "react";
import { useHistory } from "react-router-dom";


function Navbar({ onLogout }) {
  const history = useHistory();


function handleClick() {

    // logout the user
  onLogout()


  // then navigate them to the login page
  history.push("/Login")
}

return (
  <nav>
    <button onClick = {handleClick}>Logout</button>
  </nav>
)

}
export default Navbar;