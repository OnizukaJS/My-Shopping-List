import React, { createContext, useState } from "react";

export const UserProfileContext = createContext({
  //All the getters
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  zipCode: "",
  city: "",
  //The setter of this context
  setUserProfileContext: (info) => {},
});

const UserProfileContextProvider = ({ children }) => {
  //Initialisation as a state
  const userProfileState = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
    //This allows to create a copy of the state, modify it, and return the new state. The state will be modified only with the modified input
    setUserProfileContext: (info) =>
      setUserProfile((prevState) => ({
        ...prevState,
        [Object.keys(info)]: Object.values(info)[0],
      })),
  };
  //local setter and getter
  const [userProfile, setUserProfile] = useState(userProfileState);
  return (
    <UserProfileContext.Provider value={userProfile}>
      {children}
    </UserProfileContext.Provider>
  );
};

//This will encompass all the children
export default UserProfileContextProvider;
