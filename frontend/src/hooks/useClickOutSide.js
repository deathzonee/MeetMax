import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom = "input") {
  const [show, setShow] = useState(false);
  const nodeRef = useRef();
  useEffect(() => {
    const handleclickOutSide = (e) => {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleclickOutSide);
    return () => {
      document.removeEventListener("click", handleclickOutSide);
    };
  }, []);

  return {
    show,
    setShow,
    nodeRef,
  };
}
