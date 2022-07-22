import React, { useContext } from "react";
import Interests from "./Interests";
import { UserContext } from "../context/user";
import { ThemeContext } from "../context/theme";

function Profile() {
  const {theme,setTheme} = useContext(ThemeContext)
  const {user} = useContext(UserContext)
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;
