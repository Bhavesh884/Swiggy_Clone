import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setisOnline] = useState(true);
  useEffect(() => {
    window.addEventListener(
      "offline",
      (offlineHandler = () => {
        setisOnline(false);
      })
    );
    window.addEventListener(
      "online",
      (onlineHandler = () => {
        setisOnline(true);
      })
    );
    return () => {
      window.removeEventListener("offline", offlineHandler);
      window.removeEventListener("online", onlineHandler);
    };
  }, []);
  return isOnline;
};

export default useOnline;
