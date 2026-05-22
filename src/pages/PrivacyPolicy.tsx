import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.location.href = "/privacy-policy.html";
  }, []);

  return null;
};

export default PrivacyPolicy; 