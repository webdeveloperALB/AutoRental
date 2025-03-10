import { Navigate } from "react-router-dom";
import useAuthStore from "../../store/store.js";
import PropTypes from "prop-types"; // Import PropTypes

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Add PropTypes validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
