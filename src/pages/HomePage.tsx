import { useAuth0 } from "@auth0/auth0-react";
import Label from "../components/Label";

const HomePage = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  console.log("isAuthenticated: ", isAuthenticated);
  console.log("isLoading: ", isLoading);
  return (
    <div>
      <h1>Home Page</h1>
      <Label labelId="welcome" />
    </div>
  );
};

export default HomePage;
